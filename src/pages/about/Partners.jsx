import partner1 from '../../assets/partnerimg/tewa.png'
import partner2 from '../../assets/partnerimg/FSN.PNG'
import nagarik from '../../assets/partnerimg/nagarik.png'

const partnerdata = [

  {
    id: 1,
    img: nagarik,
    name: 'Partner One',
  },

  {
    id: 2,
    img: partner1,
    name: 'Partner Two',
  },
  {
    id: 3,
    img: partner2,
    name: 'Partner Three',
  },

]

export const Partners = () => {
  return (
    <section className="py-20 bg-(--soft-lilac)">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-10">
        
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-(--forest-green) text-center uppercase">
            Support Partners
          </h2>
          <span style={{fontFamily: "Inter"}} className="text-2xl md:text-3xl font-medium text-(--royal-purple) uppercase text-center">
            Together, We Create Change
          </span>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3  place-items-center">
          {partnerdata.map((partner) => (
            <div
              key={partner.id}
            className="group relative rounded-xl p-8 flex flex-col items-center justify-center w-full max-w-xs"
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-w-44 max-h-44 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}