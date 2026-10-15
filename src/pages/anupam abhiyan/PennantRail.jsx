import React from "react";
import { useLanguage, T } from "../../hooks/useLanguage";

export default function PennantRail({ years, activeId, onChange }) {
  const { lang } = useLanguage();

  return (
    <nav
      aria-label="Campaign years"
      className="sticky top-0 z-30 bg-[#faefe6] pb-3.5"
    >
      <div className="relative max-w-[1240px] mx-auto px-[clamp(20px,5vw,64px)] pt-2">
        {/* Ribbon */}
        <svg
          className="absolute top-0 left-0 w-full h-11 overflow-visible hidden md:block"
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 6 C 22 30, 36 36, 50 36 S 78 30, 100 6"
            fill="none"
            stroke="#ffbd59"
            strokeWidth={2.5}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ul
          role="tablist"
          className="relative flex gap-2 md:gap-[clamp(8px,2.4vw,34px)] justify-start md:justify-center list-none m-0 pt-2.5 pb-6 overflow-x-auto md:overflow-visible"
        >
          {years.map((y, i) => {
            const tilt = i % 2 === 0 ? -1.2 : 1.4;
            const dip = 8 + (i % 3) * 6;
            const active = y.id === activeId;

            return (
              <li key={y.id} className="flex-shrink-0">
                <button
                  role="tab"
                  aria-selected={active}
                  onClick={() => onChange(y.id)}
                  style={{
                    "--tilt": `${tilt}deg`,
                    "--dip": `${dip}px`,
                    "--accent": y.accent,
                    transform: `translateY(${active ? dip + 14 : dip}px) rotate(${tilt}deg)`,
                    background: active ? y.accent : "#f7e4f1",
                    color: active
                      ? y.id === "y1"
                        ? "#4a1a2a"
                        : "#fff"
                      : "#5c2371",
                  }}
                  className="pennant relative block text-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 -top-2.5 w-4 h-4 -ml-2 bg-amber-400 rounded-sm rotate-45"
                  />
                  <span
                    className={`block font-deva font-bold leading-tight ${
                      lang === "ne" ? "text-lg" : "text-base"
                    }`}
                  >
                    {y.pennant.ne}
                  </span>
                  <span
                    className="block font-semibold mt-1.5 opacity-80"
                    style={{ fontSize: "clamp(10px,1.05vw,12.5px)" }}
                  >
                    {lang === "ne" ? y.pennant.kw_ne : y.pennant.kw_en}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Tailwind custom CSS for pennant shape via arbitrary CSS */}
      <style>{`
        .pennant {
          width: clamp(96px, 13vw, 158px);
          padding: 17px 10px 34px;
          clip-path: polygon(0 0, 100% 0, 100% 88%, 84% 100%, 63% 90%, 38% 100%, 16% 91%, 0 99%);
          transform-origin: 50% 0;
        }
      `}</style>
    </nav>
  );
}