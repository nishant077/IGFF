import React from "react";
import { T } from "../../hooks/useLanguage";
import { PILLARS } from "../../data/campaignData";

export default function Pillars() {
  return (
    <section className="bg-[#f7e4f1] py-[clamp(44px,6vw,84px)]">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,5vw,64px)]">
        <h2 className="font-display font-black text-[clamp(28px,4vw,46px)] leading-[1.02] tracking-tight text-[#5c2371]">
          <T en="What holds the campaign up" ne="अभियानलाई थाम्ने आधारहरू" />
        </h2>
        <p className="max-w-[52ch] mt-3.5 text-[#4a4a4a]">
          <T
            en="Political action alone doesn't last five years. Four practical systems keep the movement running between the yatras."
            ne="राजनीतिक कामले मात्र पाँच वर्ष टिक्दैन। यात्राहरूका बीचमा अभियानलाई चलायमान राख्ने चार व्यावहारिक प्रणाली।"
          />
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-10">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="bg-white p-5"
              style={{ borderTop: `6px solid ${p.c}` }}
            >
              <h3 className="font-display text-[19px] leading-tight m-0 mb-2 text-[#5c2371]">
                <T en={p.h.en} ne={p.h.ne} />
              </h3>
              <p className="m-0 text-[15px] leading-snug text-[#4a4a4a]">
                <T en={p.p.en} ne={p.p.ne} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}