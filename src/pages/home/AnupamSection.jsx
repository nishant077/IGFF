import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { Link } from "../../router";

import gallery1 from "../../assets/gallery/gallery11.JPG";
import gallery2 from "../../assets/gallery/anupamart.png";
import gallery3 from "../../assets/gallery/gallery7.JPG";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery12.JPG";
import gallery6 from "../../assets/gallery/gallery13.jpg";


const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const AnupamSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].anupam;
  const years = ["Y1", "Y2", "Y3", "Y4", "Y5"];
  const activeYear = "Y4";

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 md:py-20 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto overflow-x-clip">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image carousel */}
        <div className="px-1 py-3 md:p-0 md:self-stretch">
          <div className="relative -rotate-3 w-full aspect-[4/3] md:aspect-auto md:h-full md:min-h-[340px] border-4 md:border-8 border-white overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt=""
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-col gap-2">
            <span className="text-(--forest-green) text-sm uppercase">
              {t.label}
            </span>
            <h1 className="text-(--royal-purple) text-2xl sm:text-3xl uppercase mb-4 sm:mb-6 font-bold break-words">
              {t.heading}
            </h1>
          </div>

          <p className="max-w-lg mb-6 text-sm sm:text-lg leading-relaxed">
            {t.desc}
          </p>

          {/* Year timeline: connectors flex to fit any width */}
          <div className="flex items-center w-full max-w-md mb-8 md:mb-10">
            {years.map((year, i) => (
              <div
                key={year}
                className={`flex items-center ${i < years.length - 1 ? "flex-1" : ""}`}
              >
                <div
                  className={`shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white flex items-center justify-center
                              text-white text-xs sm:text-sm font-bold
                              ${year === activeYear
                      ? "bg-(--amber-gold)"
                      : "bg-(--royal-purple)"
                    }`}
                >
                  {year}
                </div>
                {i < years.length - 1 && (
                  <div className="flex-1 min-w-1 h-0.5 bg-gray-800" />
                )}
              </div>
            ))}
          </div>

          <Link
            to="/anupam-abhiyan"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-(--amber-gold)
                       border border-(--amber-gold)
                       hover:bg-transparent hover:text-(--amber-gold) active:bg-transparent active:text-(--amber-gold)
                       text-white font-semibold text-sm
                       px-5 py-3 sm:py-2 rounded-md transition-colors cursor-pointer"
          >
            {t.learnMore} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnupamSection;