import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
// import arrow from "../../assets/arrow.png";
import halftone from "../../assets/halfton.png";
import graphicimg from "../../assets/FAQ.png";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";

const FAQ = () => {
  // Same pattern as VoicesSection: pull this section's data from translations
  const { lang } = useLanguage();
  const t = translations[lang].faq;

  // Works whether `faq` is the array itself or an object like { items: [...] }
  const faqs = Array.isArray(t) ? t : t?.items ?? [];

  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-(--royal-purple) py-12 md:py-20 px-5 sm:px-6 lg:px-16">
      {/* Halftone texture overlay */}
      <img
        src={halftone}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.02 }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - graphic */}
          <div className="flex justify-center">
            <img
              src={graphicimg}
              alt="People discussing"
              className="w-full max-w-xs sm:max-w-sm md:max-w-full max-h-72 md:max-h-none h-auto object-contain"
            />
          </div>

          {/* Right side - Accordion */}
          <div className="flex flex-col divide-y divide-white/10 min-w-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 md:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-3 md:gap-4 text-left cursor-pointer"
                  >
                    <div className="flex gap-3 md:gap-4 min-w-0">
                      <span className="w-1 bg-(--amber-gold) rounded-full flex-shrink-0" />
                      <span className="text-white text-base md:text-xl font-bold break-words">
                        {faq.question}
                      </span>
                    </div>

                    <span className="w-8 h-8 md:w-7 md:h-7 flex-shrink-0 rounded-md bg-(--amber-gold) flex items-center justify-center text-white">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-sm md:text-base pl-4 md:pl-5 pt-3 max-w-lg leading-relaxed break-words">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;