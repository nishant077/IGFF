import about1 from '../../assets/publication1.jpg'
import aboutsketch from '../../assets/missionvision.png'
import halftone from '../../assets/halfton.png'
import ValueCard from './ValueCard'
import StoryVideo from './StoryVideo'
import { Partners } from './Partners'
import IgffSupportSection from './IgffSupportSection'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <div className="overflow-hidden relative pt-16 md:pt-20">
        <div className="bg-(--soft-lilac)">
          <div className="relative">
            {/* Magenta hero with a V-shaped bottom edge.
                The V has a fixed depth (not a % of height), so on tall mobile
                layouts it never cuts into the text above it. */}
            <div
              className="absolute inset-0 bg-(--magenta-rose)
                       [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_3rem),50%_100%,0_calc(100%_-_3rem))]
                       md:[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_6rem),50%_100%,0_calc(100%_-_6rem))]"
            />
            {/* Halftone texture overlay */}
            <img
              src={halftone}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ opacity: 0.03 }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-20 pb-12 md:pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col gap-4 order-2 md:order-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-white break-words">
                    {t.heroHeading}
                  </h1>
                  <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-white leading-relaxed text-left md:text-justify">
                    <p>{t.heroPara1}</p>
                    <p>{t.heroPara2}</p>
                    <p>{t.heroPara3}</p>
                  </div>
                </div>

                {/* Padding gives the tilted photo room so it isn't clipped */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end ">
                  <img
                    src={about1}
                    alt={t.heroHeading}
                    className="border-4 md:border-8 border-white w-full max-w-sm md:max-w-full object-cover rotate-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-6 md:pt-10 pb-6 md:pb-10">
            {/* <div className="grid grid-cols-[1fr_2fr_1fr]">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-(--forest-green) uppercase">{t.missionHeading}</h2>
                <p className='text-xl font-medium text-(--royal-purple)'>{t.missionText}</p>
              </div>

              <div>
                <img src={homesketch} alt="sketchhome" className="" />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-(--forest-green) uppercase">{t.visionHeading}</h2>
                <p className="text-xl font-medium text-(--royal-purple) ">
                  {t.visionText}
                </p>
              </div>

            </div> */}
            <img
              src={aboutsketch}
              alt="Mission and vision"
              className="w-full h-auto mx-auto"
            />
          </div>
          <ValueCard />
        </div>
      </div>

    </>
  )
}

export default About