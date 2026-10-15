import anupam from '../../assets/gallery/anupamart.png'
import img from '../../assets/gallery/gallery1.jpg'
import img2 from '../../assets/homememberimg.jpg'
import halftone from '../../assets/halfton.png'
import Timeline from './Timeline'

const AnupamAbhiyanHero = () => {
  return (
   <>
     <div className="overflow-hidden relative pt-16 md:pt-20">
            <div className="bg-(--background)">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-(--royal-purple)
                           [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
                           md:[clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
                />
                {/* Halftone texture overlay */}
                <img
                  src={halftone}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                  style={{ opacity: 0.02 }}
                />
    
    
                <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-20 pb-16 md:pb-24">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-10">
                    <div className="flex flex-col gap-4 order-2 md:order-1">
                      <h1 className="text-2xl md:text-3xl font-bold text-white">
                       Anupam Abhiyan
                      </h1>
                      <span style={{fontFamily:"Inter"}} className='font-medium text-sm text-(--amber-gold)'>2022-2027</span>
                      <p className="text-sm md:text-base font-medium text-white text-justify">
                        Anupam Abhiyan is a collective movement that brings people and communities together to promote equality, awareness, and positive social change. Through collaboration and collective action, the campaign works toward a more inclusive and empowered society.
                      </p>
                    </div>
    
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                      <img
                        src={anupam}
                        alt="aboutimg"
                        className="border-4 md:border-8 border-white w-full max-w-sm md:max-w-full object-cover rotate-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
                <div className='max-w-7xl mx-auto px-6 lg:px-10'>
              <div className='py-20 grid md:grid-cols-3 grid-cols-1 gap-5'>
                  <img src={img} alt='anupamimg' className='border-8 border-white -rotate-6' />
                  <div className='flex justify-center items-center flex-col gap-4'>
                    <h3 className='text-3xl text-(--royal-purple) text-center font-bold'>Five Years of Change, Leadership and Inclusion</h3>
                  <p className='text-base text-center'>A five-year movement for women’s equitable and representative participation at all levels of the State and for self-reliant, inclusive, dignified development.</p>
                  </div>
                    <img src={img2} alt='anupamimg' className='border-8 border-white rotate-6'/>
                </div>  
              </div>
              <Timeline/>
              </div>
              </div>
   </>
  )
}

export default AnupamAbhiyanHero



