import { Users, Handshake, Infinity as InfinityIcon } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";

// Language-independent visual props only
const cardVisuals = [
  { id: 1, tileColor: "bg-(--forest-green)", Icon: Users },
  { id: 2, tileColor: "bg-(--royal-purple)", Icon: Handshake },
  { id: 3, tileColor: "bg-(--amber-gold)", Icon: InfinityIcon },
];

const ValueCard = () => {
  const { lang } = useLanguage();
  const t = translations[lang].values;

  // Merge translated text with visual props by index
  const carddata = t.cards.map((card, i) => ({
    ...card,
    ...cardVisuals[i],
  }));

  return (
    <section className="bg-(--background) py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-8 md:gap-12">
        {/* Headings */}
        <div className="flex flex-col gap-1 md:gap-2 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-(--forest-green)">
            {t.heading1}
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-(--royal-purple)">
            {t.heading2}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {carddata.map(({ id, title, description, tileColor, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Icon tile */}
              <div
                className={`${tileColor} w-full max-w-sm md:max-w-none aspect-[4/3] md:aspect-[11/8] rounded-lg flex items-center justify-center`}
              >
                <Icon
                  className="text-(--background) w-1/2 h-1/2"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 max-w-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">
                  {title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-neutral-800">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCard;