import React from 'react'
import homememberimg from '../../assets/homememberimg.jpg'
import { Link } from "../../router";


const MemberForm = () => {
  return (
    <section className='relative w-full overflow-hidden flex items-center justify-center py-10 px-4 sm:px-6 md:py-16 md:min-h-150'>
      <img
        src={homememberimg}
        alt=''
        aria-hidden='true'
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-black opacity-20' />

      <div className='relative z-10 bg-(--forest-green) w-full max-w-300 px-6 py-10 sm:px-10 md:px-12 md:py-14 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10'>

          {/* Left side - Heading */}
          <h3 className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-(--background) leading-[0.95]'>
            The <br />
            movement <br />
            needs <span className='text-(--amber-gold)'>you.</span>
          </h3>

          {/* Right side - Icon + Message + Benefits + Button */}
          <div className='flex flex-col min-w-0 md:border-l md:border-white/15 md:pl-10 lg:pl-14'>

            {/* SVG: seedling in a dotted ring */}
            <svg
              viewBox='0 0 64 64'
              className='w-14 h-14 sm:w-16 sm:h-16 text-(--amber-gold) mb-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <circle cx='32' cy='32' r='29' strokeOpacity='0.4' strokeDasharray='2 6' />
              <path d='M32 50V30' />
              <path d='M32 36c0-8-6-13-14-13 0 8 5 13 14 13z' />
              <path d='M32 30c0-7 5-12 13-12 0 7-5 12-13 12z' />
              <path d='M24 50h16' />
            </svg>

            <span className='text-(--amber-gold) text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3'>
              Join the movement
            </span>

            <p className='text-white text-xl sm:text-2xl font-semibold leading-snug mb-3'>
              Together, we can make a difference.
            </p>

            <p className='text-white/70 text-sm sm:text-base mb-6'>
              Become a member today and be part of a community working for real change.
            </p>

            <Link 
              to='/membership-form'
              type='button'
              className='bg-(--amber-gold) text-(--forest-green) font-bold uppercase tracking-wider text-sm px-6 py-4 flex items-center justify-center sm:justify-start gap-3 w-full sm:w-fit hover:brightness-110 active:brightness-110 transition-all cursor-pointer'
            >
              Become a Member
              <span className='text-lg'>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MemberForm