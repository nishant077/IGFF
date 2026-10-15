import { PiggyBank, GraduationCap, Megaphone } from "lucide-react";
import { useMemo } from "react";
import halftone from '../../assets/halfton.png';
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";

// lucide has no outline peace symbol, so here is a matching one
const PeaceIcon = ({ className, strokeWidth = 1.75 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M12 12 5.5 18.5" />
    <path d="M12 12l6.5 6.5" />
  </svg>
);

// Language-independent visual props, keyed by id
const pillarVisuals = [
  {
    id: 1,
    tileColor: "bg-(--amber-gold)",
    iconColor: "text-neutral-900",
    Icon: PiggyBank,
  },
  {
    id: 2,
    tileColor: "bg-(--background)",
    iconColor: "text-(--forest-green)",
    Icon: PeaceIcon,
  },
  {
    id: 3,
    tileColor: "bg-(--magenta-rose)",
    iconColor: "text-(--amber-gold)",
    Icon: GraduationCap,
  },
  {
    id: 4,
    tileColor: "bg-(--orchid-pink)",
    iconColor: "text-neutral-900",
    Icon: Megaphone,
  },
];

const CampaignPillars = () => {
  const { lang } = useLanguage();
  const t = translations[lang].campaignPillars;

  // Merge visual props + translated text by id
  const pillars = useMemo(
    () =>
      pillarVisuals.map((v) => {
        const tr = t.pillars.find((x) => x.id === v.id);
        return { ...v, ...(tr || {}) };
      }),
    [t]
  );

  return (
    <section className="bg-(--royal-purple) relative py-12 md:py-16">
      <img
        src={halftone}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-5 md:gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-(--amber-gold)">
            {t.heading}
          </h2>
          <p className="max-w-md text-base md:text-lg leading-relaxed text-white">
            {t.subheading}
          </p>
        </div>

        {/* Cards – the 2nd and 3rd are nudged down on large screens */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:items-start">
          {pillars.map(({ id, title, description, tileColor, iconColor, Icon }) => (
            <li
              key={id}
              className={`flex flex-col items-center gap-4 text-center ${
                id === 2 || id === 3 ? "lg:mt-12" : ""
              }`}
            >
              <div
                className={`${tileColor} w-full max-w-sm sm:max-w-none aspect-[4/3] rounded-lg flex items-center justify-center`}
              >
                <Icon
                  className={`${iconColor} w-1/2 h-1/2`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-2 max-w-[16rem]">
                <h3 className="text-base md:text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CampaignPillars;