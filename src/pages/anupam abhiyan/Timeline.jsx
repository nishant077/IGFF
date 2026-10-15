import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiClock } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";

// Language-independent visual props, keyed by id
const timelineVisuals = [
  { id: "y1", position: "top",    bg: "bg-(--royal-purple)", textColor: "text-white" },
  { id: "y2", position: "bottom", bg: "bg-(--royal-purple)", textColor: "text-white" },
  { id: "y3", position: "top",    bg: "bg-(--royal-purple)", textColor: "text-white" },
  { id: "y4", position: "bottom", bg: "bg-(--amber-gold)",   textColor: "text-gray-900" },
  { id: "y5", position: "top",    bg: "bg-(--royal-purple)", textColor: "text-white" },
];

// Layout constants (px)
const AREA_H = 270;
const NODE = 48;
const LINE_TOP = AREA_H + NODE / 2;

function TimelineItem({ item, index, scrollRef, reduce, isActive, onSelect }) {
  const isTop = item.position === "top";
  const offset = reduce ? 0 : isTop ? -24 : 24;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, root: scrollRef, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col"
    >
      {!isTop && (
        <div className={`ml-3 h-3 w-6 [clip-path:polygon(0_100%,100%_100%,30%_0)] ${item.bg}`} />
      )}
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => {
          e.currentTarget.blur();
          onSelect(index);
        }}
        className={`w-full px-5 py-5 text-left transition-all duration-300 md:px-6 outline-none focus:outline-none focus-visible:outline-none ring-0 ${item.bg} ${item.textColor} ${
          isActive
            ? "ring-4 ring-(--amber-gold) ring-offset-2 scale-[1.03] shadow-xl"
            : "hover:brightness-110 shadow-md"
        }`}
      >
        <h3 className="mb-2 text-base font-bold leading-snug md:text-lg">{item.title}</h3>
        <p className="text-xs leading-relaxed md:text-[13px]">{item.text}</p>
      </button>
      {isTop && (
        <div className={`ml-3 h-3 w-6 [clip-path:polygon(0_0,100%_0,30%_100%)] ${item.bg}`} />
      )}
    </motion.div>
  );

  const year = (
    <p
      className={`relative left-6 w-fit -translate-x-1/2 text-2xl font-extrabold transition-colors text-gray-900 ${
        isTop ? "mt-4" : "mb-4"
      }`}
    >
      {item.year}
    </p>
  );

  return (
    <div
      data-timeline-index={index}
      className="w-[260px] shrink-0 snap-start pr-6 md:w-[310px]"
    >
      <div className="flex flex-col justify-end pb-2" style={{ height: AREA_H }}>
        {isTop ? card : year}
      </div>

      <div style={{ height: NODE }}>
        <motion.button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            e.currentTarget.blur();
            onSelect(index);
          }}
          whileHover={reduce ? undefined : { scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className={`relative z-10 flex items-center justify-center rounded-full transition-all outline-none focus:outline-none focus-visible:outline-none ring-0 ${
            isActive
              ? "bg-(--amber-gold) text-(--royal-purple) ring-4 ring-(--amber-gold)/40 shadow-lg scale-110"
              : "bg-(--royal-purple) text-white shadow-md hover:brightness-110"
          }`}
          style={{ width: NODE, height: NODE }}
          aria-label={`Select ${item.year}`}
        >
          <FiClock className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      </div>

      <div className="flex flex-col pt-2" style={{ height: AREA_H }}>
        {isTop ? year : card}
      </div>
    </div>
  );
}

export default function Timeline({ activeYearId = "y4", onYearSelect }) {
  const { lang } = useLanguage();
  const t = translations[lang].timeline;

  // Merge visual props + translated text by id
  const timeline = useMemo(
    () =>
      timelineVisuals.map((v) => {
        const tr = t.find((x) => x.id === v.id);
        return { ...v, ...(tr || {}) };
      }),
    [t]
  );

  const scrollRef = useRef(null);
  const reduce = useReducedMotion();
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const activeIndex = Math.max(
    0,
    timeline.findIndex((x) => x.id === activeYearId)
  );

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, [updateButtons]);

  // Center or scroll to active year when it changes or on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = activeIndex < 0 ? 0 : activeIndex;
    const targetEl = el.querySelector(`[data-timeline-index="${idx}"]`);
    if (targetEl) {
      const containerWidth = el.clientWidth;
      const targetLeft = targetEl.offsetLeft;
      const targetWidth = targetEl.offsetWidth;
      el.scrollTo({
        left: Math.max(0, targetLeft - containerWidth / 2 + targetWidth / 2),
        behavior: "smooth",
      });
    } else {
      const itemWidth = window.innerWidth >= 768 ? 310 : 260;
      el.scrollTo({
        left: Math.max(0, idx * itemWidth - itemWidth),
        behavior: "smooth",
      });
    }
    updateButtons();
  }, [activeIndex, updateButtons]);

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const handleSelect = (index) => {
    if (onYearSelect) {
      onYearSelect(timeline[index].id, index);
    }
  };

  const btn =
    "flex items-center justify-center rounded-full transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none ring-0 select-none";

  return (
    <section className="w-full bg-[#f8eee6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="relative">
          {/* Left button */}
          <div
            className="absolute left-0 md:-left-2 z-30 -translate-y-1/2 rounded-full bg-[#f8eee6]"
            style={{ top: LINE_TOP, padding: 3 }}
          >
            <button
              type="button"
              aria-label="Scroll timeline left"
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => {
                e.currentTarget.blur();
                scrollByAmount(-1);
              }}
              disabled={!canLeft}
              className={`${btn} ${
                canLeft
                  ? "bg-(--royal-purple) text-white shadow-md hover:brightness-125 active:scale-95 cursor-pointer"
                  : "bg-[#e2cfc4] text-[#b8a098] cursor-not-allowed"
              }`}
              style={{ width: NODE, height: NODE }}
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
          </div>

          {/* Right button */}
          <div
            className="absolute right-0 md:-right-2 z-30 -translate-y-1/2 rounded-full bg-[#f8eee6]"
            style={{ top: LINE_TOP, padding: 3 }}
          >
            <button
              type="button"
              aria-label="Scroll timeline right"
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => {
                e.currentTarget.blur();
                scrollByAmount(1);
              }}
              disabled={!canRight}
              className={`${btn} ${
                canRight
                  ? "bg-(--royal-purple) text-white shadow-md hover:brightness-125 active:scale-95 cursor-pointer"
                  : "bg-[#e2cfc4] text-[#b8a098] cursor-not-allowed"
              }`}
              style={{ width: NODE, height: NODE }}
            >
              <FiChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Timeline scroll container */}
          <div
            ref={scrollRef}
            onScroll={updateButtons}
            className="snap-x snap-proximity overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="relative flex min-w-max px-14 sm:px-16 md:px-20">
              {/* Connecting horizontal line */}
              <motion.div
                initial={{ scaleX: reduce ? 1 : 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-x-0 h-[3px] origin-left -translate-y-1/2 bg-(--royal-purple)"
                style={{ top: LINE_TOP }}
              />

              {timeline.map((item, i) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={i}
                  scrollRef={scrollRef}
                  reduce={reduce}
                  isActive={item.id === activeYearId}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}