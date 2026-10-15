import React from "react";

import img1 from '../../assets/publication1.jpg'
import img2 from '../../assets/publication2.jpg'
import img3 from '../../assets/publication3.JPG'

const Photo = ({ src, alt, className = "", rotate = 0 }) => (
  <div
    className={`bg-white p-2 pb-2 shadow-md ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover block"
    />
  </div>
);

export default function IgffSupportSection() {
  return (
    <div className="w-full bg-[#F6EEE3] relative">
      {/* Top accent bar */}
      <div className="h-2 w-full bg-[#3E7C6B]" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 relative">
        {/* Photo grid + center text, arranged like the reference */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-8 md:gap-10 items-start">
          {/* Left column photos */}
          <div className="flex flex-col gap-10 md:gap-24 items-center md:items-start order-2 md:order-1">
            <Photo
              src={img1}
              alt="Community gathering at night with prayer flags"
              className="w-full max-w-[320px]"
            />
            <Photo
              src={img2}
              alt="Group rally outside a building"
              className="w-full max-w-[320px] md:ml-6"
            />
          </div>

          {/* Center text */}
          <div className="order-1 md:order-2 text-center px-2 md:px-4 pt-2 md:pt-10">
            <h2 className="text-[#3E7C6B] font-bold leading-snug text-xl md:text-2xl tracking-tight">
              Connecting generations,
              <br />
              strengthening feminist movements,
              <br />
              creating change.
            </h2>
            <p className="mt-6 text-[#3a352c] text-sm md:text-base leading-relaxed max-w-md mx-auto">
              The Inter-Generational Feminist Forum (IGFF) is a space where
              feminists of different generations come together to share
              experiences, exchange knowledge, and build collective power.
            </p>
          </div>

          {/* Right column photos */}
          <div className="flex flex-col gap-10 md:gap-32 items-center md:items-end order-3">
            <Photo
              src={img3}
              alt="Woman speaking into a microphone with a group listening"
              className="w-full max-w-[320px] mt-0 md:mt-6"
            />
            <Photo
              src={img1}
              alt="Group celebration with traditional scarves"
              className="w-full max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}