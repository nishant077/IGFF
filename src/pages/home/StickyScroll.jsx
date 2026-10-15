
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const StickyScroll = forwardRef((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
        </div>

        <section className='text-white w-full bg-slate-950'>
          <div className='grid grid-cols-12 gap-2'>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  alt='Gallery image 1'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt='Gallery image 2'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                  alt='Gallery image 3'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                  alt='Gallery image 4'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop'
                  alt='Gallery image 5'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3'>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop'
                  alt='Sticky gallery image 1'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop'
                  alt='Sticky gallery image 2'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop'
                  alt='Sticky gallery image 3'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop'
                  alt='Gallery image 6'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop'
                  alt='Gallery image 7'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop'
                  alt='Gallery image 8'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop'
                  alt='Gallery image 9'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop'
                  alt='Gallery image 10'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

StickyScroll.displayName = 'StickyScroll';

export default StickyScroll;