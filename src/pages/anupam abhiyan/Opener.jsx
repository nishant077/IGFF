import React from "react";
import { useLanguage, T } from "../../hooks/useLanguage";

export default function Opener() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="relative bg-[#5c2371] text-white pt-7 pb-24 overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="w-full h-full object-cover object-[58%_42%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#5c2371 4%,rgba(92,35,113,.94) 26%,rgba(92,35,113,.42) 72%,rgba(92,35,113,.3) 100%), linear-gradient(to top,rgba(58,20,72,.75),transparent 45%)",
          }}
        />
        {/* mobile overlay */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#5c2371]/90 via-[#5c2371]/85 to-[#5c2371]/95" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,5vw,64px)]">
        {/* Topbar */}
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="h-12 flex items-center">
              <span className="font-extrabold tracking-tight text-2xl text-amber-300">
                Anupam Abhiyan
              </span>
            </div>
            <span className="text-[13px] text-[#e9d5f0] max-w-[220px] leading-snug">
              <T
                en="A campaign of the Inter-Generational Feminist Forum"
                ne="अन्तरपुस्ता महिलावादी मञ्चको अभियान"
              />
            </span>
          </div>

          <div
            className="flex border border-white/45 rounded-full overflow-hidden"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-4 py-1.5 text-sm font-semibold transition ${
                lang === "en"
                  ? "bg-amber-400 text-[#3d1750]"
                  : "text-[#f3e6f7] hover:bg-white/10"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("ne")}
              aria-pressed={lang === "ne"}
              className={`px-4 py-1.5 text-sm font-semibold font-deva transition ${
                lang === "ne"
                  ? "bg-amber-400 text-[#3d1750]"
                  : "text-[#f3e6f7] hover:bg-white/10"
              }`}
            >
              नेपाली
            </button>
          </div>
        </div>

        {/* Title block */}
        <div className="mt-10 md:mt-16 max-w-full md:max-w-[640px]">
          <p className="font-deva font-bold text-amber-400 text-[clamp(20px,3vw,32px)] leading-snug mb-1.5">
            देशव्यापी महिलावादी
          </p>
          <h1
            className={`font-display font-black text-white tracking-tight leading-[0.92] ${
              lang === "ne" ? "leading-[1.12]" : ""
            }`}
            style={{ fontSize: "clamp(48px,10.5vw,132px)" }}
          >
            {lang === "ne" ? "अनुपम अभियान" : "Anupam Abhiyan"}
            <span className="block text-[clamp(15px,1.6vw,20px)] font-semibold tracking-[0.16em] text-[#e4a6d1] mt-[18px]">
              2022 — 2027
            </span>
          </h1>

          <p className="max-w-[40ch] mt-6 text-[clamp(17px,1.7vw,21px)] text-[#f0e2f4] leading-relaxed">
            <T
              en="Five years of organised feminist action for women's political participation — carried district by district, by women who were already leading where they live."
              ne="महिलाको राजनीतिक सहभागिताका लागि पाँच वर्षे संगठित महिलावादी कार्य — आफ्नै ठाउँमा नेतृत्व गरिरहेका महिलाहरूले जिल्ला-जिल्लामा पुर्‍याएको अभियान।"
            />
          </p>

          {/* Goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mt-11">
            <Goal
              bEn="Goal one"
              bNe="पहिलो लक्ष्य"
              pEn="Women's equitable and representative participation at all levels of the state."
              pNe="राज्यका सबै तहमा महिलाको समतामूलक र प्रतिनिधित्वमूलक सहभागिता।"
              border="border-amber-400"
              bColor="text-amber-300"
            />
            <Goal
              bEn="Goal two"
              bNe="दोस्रो लक्ष्य"
              pEn="Self-reliant, equitable, inclusive and dignified development."
              pNe="आत्मनिर्भर, समतामूलक, समावेशी र मर्यादित विकास।"
              border="border-[#e4a6d1]"
              bColor="text-[#e4a6d1]"
            />
          </div>
        </div>
      </div>

      {/* Wave */}
      <svg
        className="absolute left-0 right-0 -bottom-px w-full h-[90px] z-[1]"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,44 C240,88 420,18 720,42 C1010,64 1210,84 1440,50 L1440,90 L0,90 Z"
          fill="#faefe6"
        />
      </svg>
    </header>
  );
}

function Goal({ bEn, bNe, pEn, pNe, border, bColor }) {
  return (
    <div className={`bg-white/10 border-l-[5px] ${border} px-5 py-4`}>
      <b className={`block font-display text-[15px] ${bColor} mb-1.5`}>
        <T en={bEn} ne={bNe} />
      </b>
      <p className="m-0 text-base text-white leading-snug">
        <T en={pEn} ne={pNe} />
      </p>
    </div>
  );
}