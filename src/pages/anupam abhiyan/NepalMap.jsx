import React, { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLanguage } from "../../hooks/useLanguage";

// You can source the 77-district GeoJSON from:
// https://github.com/mesaugat/geoJSON-Nepal
// and pass it in as `geojson`.
export default function NepalMap({ year, geojson }) {
  const { lang } = useLanguage();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);
  const tipRef = useRef(null);

  const [hover, setHover] = useState(null);

  const districtSet = useMemo(
    () => new Set(year.districts || []),
    [year.districts]
  );
  const outSet = useMemo(
    () => new Set(year.out || []),
    [year.out]
  );

  // Init map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    }).setView([28.3, 84.1], 6);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Render layer whenever geojson or year changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !geojson) return;

    if (layerRef.current) {
      map.removeLayer(layerRef.current);
      layerRef.current = null;
    }

    const layer = L.geoJSON(geojson, {
      style: (feature) => {
        const code = normalizeCode(
          feature.properties.DISTRICT || feature.properties.district || ""
        );
        return styleFor(code, districtSet, outSet, year);
      },
      onEachFeature: (feature, lyr) => {
        const nameEn = feature.properties.DISTRICT || feature.properties.district || "";
        const nameNe = feature.properties.NP_NAME || nameEn;

        lyr.on("mouseover", (e) => {
          lyr.setStyle({ weight: 2.5, color: "#5c2371" });
          const { x, y } = map.latLngToContainerPoint(e.latlng);
          setHover({ x, y, nameEn, nameNe });
        });
        lyr.on("mousemove", (e) => {
          const { x, y } = map.latLngToContainerPoint(e.latlng);
          setHover((h) => (h ? { ...h, x, y } : h));
        });
        lyr.on("mouseout", () => {
          layer.resetStyle(lyr);
          setHover(null);
        });
      },
    }).addTo(map);

    layerRef.current = layer;

    try {
      map.fitBounds(layer.getBounds(), { padding: [10, 10] });
    } catch {}

    // Force redraw on year change
    setTimeout(() => map.invalidateSize(), 50);
  }, [geojson, year, districtSet, outSet]);

  const empty = !year.districts || year.districts.length === 0;

  return (
    <div className="sticky top-[172px]">
      {/* Top meta */}
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
        <div>
          <div className="font-display font-black text-[clamp(26px,3.4vw,40px)] leading-none text-[#5c2371]">
            {year.countN}
            <small className="font-sans font-medium text-sm text-[#666] ml-2">
              {lang === "ne" ? year.countLabel.ne : year.countLabel.en}
            </small>
          </div>
          <div className="h-1.5 bg-[#ebe5ee] mt-3 relative overflow-hidden">
            <i
              className="absolute inset-y-0 left-0 transition-[width] duration-700"
              style={{
                background: year.accent,
                width: `${(year.countN / year.countTotal) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Map wrapper */}
      <div className="relative bg-white border border-[#5c2371]/15 p-3.5">
        <div
          ref={containerRef}
          className="w-full h-[420px] md:h-[520px]"
          style={{ zIndex: 0 }}
        />

        {/* Tooltip */}
        {hover && (
          <div
            className="pointer-events-none absolute bg-[#5c2371] text-white px-2.5 py-1.5 text-[13px] leading-tight -translate-x-1/2 -translate-y-[125%] whitespace-nowrap z-[500]"
            style={{ left: hover.x + 14, top: hover.y + 14 }}
          >
            <b className="font-deva font-semibold block text-[14px]">
              {hover.nameNe}
            </b>
            {hover.nameEn}
          </div>
        )}

        {empty && (
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-0 bg-white/95 border border-dashed border-[#eb2730] text-[#eb2730] px-4 py-2 text-sm font-semibold text-center max-w-[80%]">
            {lang === "ne"
              ? "जिल्ला नक्साको तथ्यांक पर्खाइमा"
              : "District map awaiting data"}
          </p>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3.5 text-[13.5px] text-[#4a4a4a]">
        <Legend sw={year.accent} label={lang === "ne" ? "पुग्यो" : "Reached"} />
        <Legend
          sw="repeating-linear-gradient(45deg,#fff 0 3px,rgba(235,39,48,.55) 3px 5px)"
          label={lang === "ne" ? "छुटे" : "Not reached"}
        />
        <Legend sw="#ece2e9" label={lang === "ne" ? "लागू हुँदैन" : "N/A"} />
      </div>
    </div>
  );
}

function Legend({ sw, label }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="w-3.5 h-3.5 inline-block border border-[#5c2371]/25"
        style={{ background: sw }}
      />
      {label}
    </span>
  );
}

function normalizeCode(name) {
  return String(name).toUpperCase().replace(/[\s-]+/g, "");
}

function styleFor(code, inSet, outSet, year) {
  const isIn = inSet.has(code);
  const isOut = outSet.has(code);
  const base = { weight: 0.7, color: "#fff", fillOpacity: 1 };

  if (year.mode === "prov") {
    return { ...base, fillColor: year.accent, fillOpacity: 0.75 };
  }
  if (isIn) return { ...base, fillColor: year.accent };
  if (isOut)
    return {
      ...base,
      fillColor: "url(#hatch)", // fallback pattern via CSS not visible in Leaflet; use color
      fillColor: "#f7c1c4",
    };
  return { ...base, fillColor: "#ece2e9" };
}