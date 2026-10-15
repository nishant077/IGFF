import React from "react";
import { T, useLanguage } from "../../hooks/useLanguage";
import NepalMap from "./NepalMap";

export default function YearPanel({ year, geojson }) {
  const { lang } = useLanguage();

  return (
    <section
      aria-live="polite"
      className="py-7 md:py-14"
      style={{ scrollMarginTop: 150 }}
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[clamp(28px,4.5vw,64px)] gap-y-8 items-start">
          {/* HEAD */}
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] text-[#666]">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  year.live ? "animate-pulse" : ""
                }`}
                style={{ background: year.accent }}
              />
              <T en={year.status.en} ne={year.status.ne} />
            </p>
            <h2 className="font-display font-black text-[clamp(31px,4.2vw,50px)] leading-[1.02] tracking-tight mt-3 mb-1 text-[#5c2371]">
              <T en={year.title.en} ne={year.title.ne} />
            </h2>
          </div>

          {/* MAP — sticky on the right on desktop */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-[172px]">
            <NepalMap year={year} geojson={geojson} />
          </div>

          {/* BODY */}
          <div className="lg:col-start-1 lg:row-start-2">
            <p className="max-w-[56ch] text-[17.5px] leading-relaxed text-[#3a3a3a] mt-5">
              <T en={year.body.en} ne={year.body.ne} />
            </p>

            <ul className="flex flex-wrap gap-2.5 mt-6 p-0 list-none">
              {year.facts.map((f, i) => (
                <li
                  key={i}
                  className="bg-white border border-[#5c2371]/15 rounded-sm px-3.5 py-2 text-sm leading-tight"
                >
                  <b className="font-display text-[19px] text-[#5c2371] mr-1.5">
                    {f.n}
                  </b>
                  <T en={f.en} ne={f.ne} />
                </li>
              ))}
            </ul>

            {year.gap && (
              <div className="mt-6 max-w-[52ch] border-l-4 border-[#eb2730] bg-[#eb2730]/5 px-4 py-3 text-[14.5px] leading-normal">
                <span className="block font-semibold text-[#eb2730] mb-1">
                  <T
                    en="Still needed from IGFF"
                    ne="आईजीएफएफबाट अझै चाहिने"
                  />
                </span>
                <em className="not-italic text-[#3a3a3a]">
                  <T en={year.gap.en} ne={year.gap.ne} />
                </em>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}