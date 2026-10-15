import React from 'react'
import homememberimg from '../../assets/homememberimg.jpg'

const MemberForm = () => {
  return (
    <section className='relative w-full overflow-hidden flex items-center justify-center py-10 px-4 sm:px-6 md:py-16 md:min-h-150'>
      {/* Background image (absolute, so the content can grow the section on small screens) */}
      <img
        src={homememberimg}
        alt=''
        aria-hidden='true'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-20' />

      {/* Forest green box */}
      <div className='relative z-10 bg-(--forest-green) w-full max-w-300 px-6 py-10 sm:px-10 md:px-12 md:py-14 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10'>

          {/* Left side - Heading */}
          <h3 className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-(--background) leading-[0.95]'>
            The <br />
            movement <br />
            needs <span className='text-(--amber-gold)'>you.</span>
          </h3>

          {/* Right side - Form */}
          <form className='flex flex-col min-w-0'>
            <label
              htmlFor='email'
              className='text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3'
            >
              Your Email Address
            </label>

            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              placeholder='name@gmail.com'
              className='w-full bg-transparent border-b-2 border-white text-white placeholder-white/50 py-3 text-base sm:text-lg outline-none focus:border-(--amber-gold) transition-colors'
            />

            <p className='text-white/70 text-sm mt-3 mb-6 md:mb-8'>
              We will only use this to send you the membership form.
            </p>

            <button
              type='submit'
              className='bg-(--amber-gold) text-(--forest-green) font-bold uppercase tracking-wider text-sm px-6 py-4 flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit hover:brightness-110 active:brightness-110 transition-all cursor-pointer'
            >
              Become a Member
              <span className='text-lg'>→</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default MemberForm