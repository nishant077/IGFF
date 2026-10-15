import { ArrowRight } from "lucide-react";
import homesketch from "../../assets/homeart2.png";
import halftone from "../../assets/halfton.png";
import CounterSection from "../../components/CounterSection";
import AnupamSection from "./AnupamSection";
import VoicesSection from "./VoicesSection";
import RecentPublicationSection from "./RecentPublicationSection";
import GallerySection from "./GallerySection";
import MemberForm from "./MemberForm";
import FAQ from "./FAQ";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translations";
import { Link } from "../../router";

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang].home;
  return (
    <>
      <div className="overflow-hidden relative pt-20">
        <div className="bg-(--background) ">
          <div
            className="relative bg-(--royal-purple) py-20
                     [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
          >
            {/* Halftone texture overlay */}
            <img
              src={halftone}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ opacity: 0.02 }}
            />
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="md:text-5xl text-3xl text-center font-bold text-white">
                  {t.heroHeading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h1>

                     <Link
               to="/about"
            className="inline-flex items-center gap-2 bg-(--amber-gold)
            border border-transparent no-underline
            hover:bg-transparent hover:text-white hover:border-white text-white font-semibold text-sm
            px-5 py-2 rounded-md transition-colors cursor-pointer"
            >
           {t.readMore} <ArrowRight size={16} />
          </Link>
              </div>
            </div>
          </div>
          <div className="h-auto max-w-7xl mx-auto px-6 lg:px-10">
            {/* <div className="grid grid-cols-[1fr_2fr_1fr]">
              <div className="flex flex-col gap-2">
                <span className="text-(--forest-green) text-sm">{t.aboutLabel}</span>
                <h2 className="text-3xl font-bold text-(--royal-purple) uppercase">{t.aboutHeading}</h2>
              </div>

              <div>
                <img src={homesketch} alt="sketchhome" className="" />
              </div>

              <div className="flex justify-between items-center">
                <p className="text-base">
                  {t.aboutDesc}
                </p>
              </div>

            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center">
              {/* Illustration */}
              <div>
                <img
                  src={homesketch}
                  alt="Illustration of women of different ages and backgrounds marching together"
                  className="w-full h-full object-cover object-left"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5 px-6 py-10 md:py-0 md:pr-12 lg:pr-20">
                <div className="flex flex-col gap-2">
                  <span className="text-(--forest-green) text-sm uppercase">
                    {t.aboutLabel}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold leading-[1.05] uppercase text-(--royal-purple)">
                    {t.aboutHeading}
                  </h2>
                </div>

                <p className="text-lg leading-relaxed text-neutral-900 max-w-xl">
                  {t.aboutDesc}
                </p>

                <Link
                 to="/about"
                className="self-start inline-flex items-center gap-2 bg-(--magenta-rose) no-underline cursor-pointer px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--royal-purple) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--royal-purple)"
                  >
               {t.readMore ?? "Read More"}
               <ArrowRight size={16} />
               </Link>
              </div>
            </div>

          </div>
          <CounterSection />
          <AnupamSection />
          <VoicesSection />
          <RecentPublicationSection />
        </div>
      </div>
      <MemberForm />
      <GallerySection />
      <FAQ />

    </>
  );
};

export default Home;