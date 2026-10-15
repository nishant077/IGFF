
import about1 from '../../../assets/gallery/gallery10.jpg'
import halftone from '../../../assets/halfton.png'
import { Partners } from '../Partners'
import CommitteeAssociate from './CommitteeAssociate'
import GeneralAssociates from './GeneralAssociate'
import StackSpread from './StackSpread'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations'

const WhoWeAre = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <div className="overflow-hidden relative pt-16 md:pt-20">
        <div className="bg-(--background)">
          <div className="relative">
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
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-10">
                <div className="flex flex-col gap-4 order-2 md:order-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                     {t.heroHeading}
                  </h1>
                   <div className="flex flex-col gap-4 text-sm md:text-base font-medium text-white leading-relaxed text-left md:text-justify">
                    <p>{t.heroPara1}</p>
                    <p>{t.heroPara2}</p>
                    <p>{t.heroPara3}</p>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <img
                    src={about1}
                    alt="aboutimg"
                    className="border-4 md:border-8 border-white w-full max-w-sm md:max-w-full object-cover rotate-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StackSpread />
      <CommitteeAssociate />
      <GeneralAssociates />
      <Partners />
    </>
  )
}

export default WhoWeAre