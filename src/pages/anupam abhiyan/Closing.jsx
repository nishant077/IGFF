import React from "react";
import { T } from "../../hooks/useLanguage";

export default function Closing() {
  return (
    <section className="bg-[#5c2371] text-white py-[clamp(48px,7vw,96px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,5vw,64px)] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-[clamp(28px,5vw,72px)] items-end">
        <div>
          <p className="flex gap-[clamp(14px,3vw,44px)] flex-wrap font-deva font-bold text-[clamp(30px,6vw,72px)] leading-tight m-0 mb-6">
            <span className="text-[#eb2730]">संयम</span>
            <span className="text-[#4cc79f]">सक्रिय</span>
            <span className="text-amber-400">संगठित</span>
          </p>

          <h2 className="font-display font-black text-[clamp(28px,4vw,46px)] leading-tight m-0 text-white">
            <T en="The time is now" ne="अहिले नै समय हो" />
          </h2>

          <p className="max-w-[48ch] text-[#eddcf2] text-base mt-4">
            <T
              en="Anupam Abhiyan is open to anyone who wants to organise where they live. Join the network, or bring your district into the next yatra."
              ne="आफ्नै ठाउँमा संगठित हुन चाहने जोसुकैका लागि अनुपम अभियान खुला छ।"
            />
          </p>

          <a
            href="https://forms.gle/bswC1DEmQACtKUfj8"
            className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-[#3d1750] font-bold px-6 py-3.5 mt-6 font-display transition"
          >
            <T en="Become a member" ne="सदस्य बन्नुहोस्" />
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="self-end">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <Social href="https://www.facebook.com/igffnepal">Facebook · igffnepal</Social>
            <Social href="https://www.instagram.com/anupam.abhiyan">Instagram · anupam.abhiyan</Social>
            <Social href="https://www.tiktok.com/@igff_nepal">TikTok · igff_nepal</Social>
          </div>

          <p className="border-t border-white/20 mt-11 pt-5 text-[13.5px] text-[#d9c2e2] leading-relaxed">
            <T
              en="IGFF is legally and fiscally hosted by Tewa and supported by Nagarik Aawaz. District boundaries follow the 77-district federal structure."
              ne="आईजीएफएफ कानुनी तथा वित्तीय रूपमा तेवाद्वारा आयोजित र नागरिक आवाजद्वारा सहयोगित छ।"
            />
          </p>
        </div>
      </div>
    </section>
  );
}

function Social({ href, children }) {
  return (
    <a
      href={href}
      className="text-[#e4a6d1] border-b border-[#e4a6d1]/40 pb-0.5 hover:text-white hover:border-white transition"
    >
      {children}
    </a>
  );
}