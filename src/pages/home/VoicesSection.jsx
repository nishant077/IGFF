import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ramalaxmi from '../../assets/RamaLaxmi.png';
import halftone from '../../assets/halfton.png';
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";

const cardStyles = [
  { bubbleColor: "bg-(--orchid-pink)", textColor: "text-gray-900", photo: ramalaxmi },
  { bubbleColor: "bg-(--background)", textColor: "text-gray-900", photo: ramalaxmi },
  { bubbleColor: "bg-(--royal-purple)", textColor: "text-white", photo: ramalaxmi },
  { bubbleColor: "bg-(--orchid-pink)", textColor: "text-gray-900", photo: ramalaxmi },
];

const MAX_CARDS = 3;

// Cards shown per breakpoint: 1 on mobile, 2 on md, 3 on lg+
// (CSS-only: extra cards are hidden below their breakpoint)
const visibilityClass = (i) =>
  i === 0 ? "flex" : i === 1 ? "hidden md:flex" : "hidden lg:flex";

const SWIPE_THRESHOLD = 50;

const VoicesSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].voices;
  const [startIndex, setStartIndex] = useState(0);
  const touchStartX = useRef(null);

  const testimonials = t.testimonials.map((item, index) => ({
    ...item,
    ...cardStyles[index % cardStyles.length],
  }));

  const total = testimonials.length;
  if (total === 0) return null;

  // Avoid duplicate cards when there are fewer than 3 testimonials
  const count = Math.min(MAX_CARDS, total);

  const visibleCards = Array.from({ length: count }, (_, i) => {
    const index = (startIndex + i) % total;
    return { ...testimonials[index], _key: index };
  });

  const goPrev = () => setStartIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setStartIndex((prev) => (prev + 1) % total);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  return (
    <section className="bg-(--magenta-rose) relative overflow-hidden py-12 md:py-16 px-5 sm:px-6 md:px-10">
      {/* Halftone texture overlay */}
      <img
        src={halftone}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      />

      {/* Heading row */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4 mb-8 md:mb-12">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-extrabold uppercase leading-tight">
            {t.heading1}
          </h2>
          <h2 className="text-(--amber-gold) text-xl md:text-2xl font-extrabold uppercase leading-tight">
            {t.heading2}
          </h2>
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md">
          {t.subtitle}
        </p>
      </div>

      {/* Cards — swipeable on touch devices */}
      <div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {visibleCards.map((tItem, i) => (
          <div
            key={tItem._key}
            className={`${visibilityClass(i)} flex-col h-full min-w-0`}
          >
            {/* Speech bubble */}
            <div
              className={`relative rounded-[24px] md:rounded-[28px] px-5 md:px-7 pt-5 md:pt-7 pb-7 md:pb-9
                          flex flex-col flex-1 min-h-44 md:min-h-60 ${tItem.bubbleColor}`}
            >
              <span
              className={`block h-6 md:h-8 text-5xl md:text-6xl leading-none font-serif ${tItem.textColor} opacity-90`}
               style={{ fontFamily: "Georgia, serif" }}
               >
              &ldquo;
            </span>

              <p
              className={`flex-1 text-center break-words text-xs md:text-sm leading-relaxed ${tItem.textColor}`}
           >
           {tItem.quote}
            </p>

              {/* Tail */}
              <div
                className={`absolute -bottom-10 md:-bottom-14 left-8 md:left-10 w-12 h-12 md:w-16 md:h-16 ${tItem.bubbleColor}`}
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                  borderBottomLeftRadius: "10px",
                }}
              />
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-12 md:mt-16">
              <img
                src={tItem.photo}
                alt={tItem.name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-white font-bold text-sm break-words">{tItem.name},</p>
                <p className="text-white/80 text-sm break-words">{tItem.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav arrows + counter */}
      <div className="relative flex items-center justify-center gap-4 mt-10 md:mt-14">
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="w-11 h-11 rounded-full border border-white/70 flex items-center
                     justify-center text-white hover:bg-white hover:text-(--forest-green)
                     active:bg-white active:text-(--forest-green)
                     transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>

        <span
          className="text-white/80 text-xs font-medium tabular-nums min-w-12 text-center"
          aria-live="polite"
        >
          {startIndex + 1} / {total}
        </span>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="w-11 h-11 rounded-full border border-white/70 flex items-center
                     justify-center text-white hover:bg-white hover:text-(--forest-green)
                     active:bg-white active:text-(--forest-green)
                     transition-colors cursor-pointer"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default VoicesSection;