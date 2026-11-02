import { useMemo, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import translations from '../../../translations'
import halftone from '../../../assets/halfton.png';

// ── Images (language-independent) ──
import women1 from '../../../assets/committee associates/Amuda Mishra.png'
import women2 from '../../../assets/committee associates/Chhing Lamu Sherpa.png'
import women3 from '../../../assets/committee associates/Dev Kumari Parajuli.JPG'
import women4 from '../../../assets/committee associates/Gaura Nepali.png'
import women5 from '../../../assets/committee associates/Laxmi Ghalan.png'
import women6 from '../../../assets/committee associates/Rita Sah.png'
import women7 from '../../../assets/committee associates/Irada Gautam.png'
import women8 from '../../../assets/committee associates/Saloni Singh.JPG'
import women9 from '../../../assets/committee associates/Sarita KC.png'
import women10 from '../../../assets/committee associates/Sharu Joshi Shrestha.jpeg'
import women11 from '../../../assets/committee associates/Stella Tamang.png'
import women12 from '../../../assets/committee associates/Susan Risal.png'
import women13 from '../../../assets/committee associates/Urmila Shrestha.png'
import women14 from '../../../assets/committee associates/Yajaswi Rai.png'

// Image map keyed by English name (stable across languages)
const memberImages = {
  'Amuda Mishra': women1,
  'Chhing Lamu Sherpa': women2,
  'Dev Kumari Parajuli': women3,
  'Gaura Nepali': women4,
  'Laxmi Ghalan': women5,
  'Rita Sah': women6,
  'Irada Gautam': women7,
  'Saloni Singh': women8,
  'Sarita KC': women9,
  'Sharu Joshi Shrestha': women10,
  'Stella Tamang': women11,
  'Susan Risal, PhD': women12,
  'Urmila Shrestha': women13,
  'Yajaswi Rai': women14,
  // Add more as images become available:
  // 'Amuda Mishra': amudaImg,
  // 'Saloni Singh': saloniImg,
}

// First + last word's first letter (e.g. "Bina Pradhan, PhD" → "BP")
const getInitials = (name = '') => {
  const parts = name.replace(/,/g, '').trim().split(/\s+/)
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const CommitteeAssociate = () => {
  const { lang } = useLanguage()
  const t = translations[lang].committee

  const [activePosition, setActivePosition] = useState(t.positions[0].key)

  // Merge translated members with images (by English name)
  const members = useMemo(
    () =>
      t.members.map((m) => ({
        ...m,
        img: memberImages[m.name] || memberImages[m.nameEn] || null,
      })),
    [t]
  )

  const filteredData = members.filter((d) => d.position === activePosition)

  return (
    <div className='bg-(--magenta-rose) relative overflow-hidden'>
      <img
              src={halftone}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ opacity: 0.03 }}
            />
      <div className='max-w-7xl px-6 md:px-10 mx-auto md:py-20 py-10 flex flex-col gap-10'>
        <h1 className='md:text-3xl text-2xl font-bold text-white text-center'>
          {t.heading}
        </h1>

        {/* Position filter pills */}
        <div className='flex flex-wrap justify-center md:justify-between gap-3'>
          {t.positions.map((pos) => (
            <div key={pos.key}>
              <span
                onClick={() => setActivePosition(pos.key)}
                style={{ fontFamily: 'Nunito' }}
                className={`px-4 cursor-pointer py-2 rounded-full font-bold border transition-colors duration-200 ${
                  activePosition === pos.key
                    ? 'bg-(--amber-gold) text-black'
                    : 'bg-(--background) hover:bg-(--amber-gold)'
                }`}
              >
                {pos.label}
              </span>
            </div>
          ))}
        </div>
        
      
        {/* Members grid */}
       {/* Members grid */}
{filteredData.length > 0 ? (
  <div className='flex flex-wrap justify-center gap-5'>
    {filteredData.map((data) => (
      <div
        key={data.name}
        className='flex justify-center items-center flex-col gap-5 w-[calc(50%-10px)] md:w-[calc(25%-15px)]'
      >
        <div className='flex flex-col items-center'>
          {data.img ? (
            <img
              src={data.img}
              alt={data.name}
              className='rounded-full border-4 h-48 w-48 border-white object-cover mb-2'
            />
          ) : (
            <div className='rounded-full border-4 h-48 w-48 border-white bg-(--royal-purple) flex items-center justify-center mb-2'>
              <span
                style={{ fontFamily: 'Nunito' }}
                className='text-3xl font-bold text-white'
              >
                {getInitials(data.name)}
              </span>
            </div>
          )}
          <div className='flex justify-center items-center'>
            <span
              style={{ fontFamily: 'Nunito' }}
              className='font-bold text-white text-center'
            >
              {data.name}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className='flex justify-center items-center py-10'>
    <span
      style={{ fontFamily: 'Nunito' }}
      className='text-white font-semibold text-center'
    >
      {t.emptyState}
    </span>
  </div>
)}
        </div>
      </div>

  )
}

export default CommitteeAssociate