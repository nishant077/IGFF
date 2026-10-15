import { useState } from 'react'
import women1 from '../../../assets/committee associates/tewa2.jpeg'
import women2 from '../../../assets/committee associates/tewa3.jpeg'
import women3 from '../../../assets/committee associates/women2.jpeg'
import women4 from '../../../assets/committee associates/women4.jpeg'
import women5 from '../../../assets/committee associates/women45.jpeg'
import women6 from '../../../assets/committee associates/women46.jpeg'
import women7 from '../../../assets/committee associates/women45.jpeg'
import women8 from '../../../assets/committee associates/womenimg.jpeg'

const POSITIONS = [
  'Advisor',
  'Steering Committee Co-Coordinators',
  'Steering Committee Associates',
  'Staff',
  'Volunteer',
]

const womendata = [
  {
    name: 'Bhaarati Silawal Giri',
    img: women1,
    position: 'Steering Committee Associates',
  },
  {
    name: 'Chhing Lamu Sherpa',
    img: women2,
    position: 'Steering Committee Associates',
  },
  {
    name: 'Dev Kumari Parajuli',
    img: women3,
    position: 'Steering Committee Associates',
  },
  {
    name: 'Gaura Nepali',
    img: women4,
    position: 'Steering Committee Associates',
  },
  {
    name: 'Indu Tuladhar',
    img: women5,
    position: 'Steering Committee Co-Coordinators',
  },
  {
    name: 'Indu Pant Ghimire',
    img: women6,
    position: 'Steering Committee Co-Coordinators',
  },
  {
    name: 'Irada Gautam',
    img: women7,
    position: 'Steering Committee Co-Coordinators',
  },
  {
    name: 'Kripa Rana Shahi',
    img: women8,
    position: 'Steering Committee Co-Coordinators',
  },
]

const CommitteeAssociate = () => {
  const [activePosition, setActivePosition] = useState(POSITIONS[0])

  const filteredData = womendata.filter((data) => data.position === activePosition)

  return (
    <div className='bg-(--magenta-rose)'>
      <div className='max-w-7xl px-6 md:px-10 mx-auto md:py-20 flex flex-col gap-10'>
        <h1 className='md:text-3xl text-xl font-bold text-white text-center'>COMMITTEE ASSOCIATES</h1>

        <div className='flex flex-wrap justify-between gap-3'>
          {POSITIONS.map((k) => (
            <div key={k}>
              <span
                onClick={() => setActivePosition(k)}
                style={{ fontFamily: 'Nunito' }}
                className={`px-4 cursor-pointer py-2 rounded-full font-bold border transition-colors duration-200 ${
                  activePosition === k
                    ? 'bg-(--amber-gold) text-black'
                    : 'bg-(--background) hover:bg-(--amber-gold)'
                }`}
              >
                {k}
              </span>
            </div>
          ))}
        </div>

        {filteredData.length > 0 ? (
          <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
            {filteredData.map((data) => (
              <div key={data.name} className='flex justify-center items-center flex-col gap-5'>
                <div>
                  <img
                    src={data.img}
                    alt='committee members'
                    className='rounded-full border-4 h-48 w-48 border-white object-cover mb-2'
                  />
                  <div className='flex justify-center items-center'>
                    <span style={{ fontFamily: 'Nunito' }} className='font-bold text-white text-center'>
                      {data.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center py-10'>
            <span style={{ fontFamily: 'Nunito' }} className='text-white font-semibold text-center'>
              No members listed under this category yet.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommitteeAssociate