// import React, { useState, useEffect, useMemo, useRef } from 'react';

// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram,FaMusic,FaArrowRight } from "react-icons/fa6";


// // --- Data (extracted and simplified from the original file) ---
// const MAP_DATA = {
//   "w": 1000.0,
//   "h": 572.3,
//   "districts": {
//     "ACHHAM": { "ne": "अछाम", "pr": 7, "d": "M170.0,161.9 176.4,166.1 ...", "c": [151.7, 192.7] },
//     "BAITADI": { "ne": "बैतडी", "pr": 7, "d": "M90.6,106.0 88.6,107.4 ...", "c": [61.4, 131.0] },
//     // ... (in a real app, you'd include the full district data here)
//     // For brevity, we'll use a few districts. The map rendering logic will handle missing ones.
//   },
//   "provinces": {
//     "7": "M0.0,213.7 0.8,224.7 ...",
//     "6": "M113.3,210.6 118.3,213.3 ...",
//     "5": "M122.9,284.6 125.4,287.9 ...",
//     "4": "M346.2,269.8 350.4,274.5 ...",
//     "3": "M474.2,405.7 475.1,409.5 ...",
//     "2": "M543.5,430.1 544.2,431.4 ...",
//     "1": "M748.8,492.6 752.7,496.0 ...",
//   }
// };

// // Fallback for missing district data in this example
// const ALL_DISTRICT_CODES = Object.keys(MAP_DATA.districts);
// const PROVINCE_CODES = Object.keys(MAP_DATA.provinces);

// const YEARS = [
//   {
//     id: 'y1',
//     accent: 'bg-amber-400',
//     accentText: 'text-amber-400',
//     accentBorder: 'border-amber-400',
//     mode: 'prov',
//     pennant: { ne: 'वर्ष १', kw_en: 'Launch', kw_ne: 'सुरुवात' },
//     status: { en: 'Completed · 2022–23', ne: 'सम्पन्न · २०२२–२३' },
//     title: { en: 'Launch and province meetings', ne: 'अभियानको सुरुवात र प्रदेश बैठक' },
//     body: {
//       en: 'Conceptualised after the November 2022 federal elections, Anupam Abhiyan opened with a public launch and a bus yatra. Province-level meetings followed, carrying the campaign into all seven provinces and setting the shared agenda that the next four years would run on.',
//       ne: 'नोभेम्बर २०२२ को संघीय निर्वाचनपछि परिकल्पना गरिएको अनुपम अभियान सार्वजनिक सुरुवात र बस यात्राबाट सुरु भयो। त्यसपछिका प्रदेशस्तरीय बैठकहरूले अभियानलाई सातै प्रदेशमा पुर्‍यायो र आउँदो चार वर्षको साझा कार्यसूची तय गर्‍यो।'
//     },
//     facts: [{ n: '7', en: 'provinces', ne: 'प्रदेश' }, { n: '1', en: 'bus yatra', ne: 'बस यात्रा' }, { n: '5', en: 'year plan set', ne: 'वर्षे योजना' }],
//     gap: {
//       en: 'Dates and venues for the province-level meetings, so each one can be pinned on the map.',
//       ne: 'प्रदेशस्तरीय बैठकहरूको मिति र स्थान, ताकि नक्सामा छुट्टै देखाउन सकियोस्।'
//     },
//     img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
//     cap: { en: 'A steering committee member addresses a street gathering during the campaign\'s first year.', ne: 'अभियानको पहिलो वर्ष सडक भेलामा सम्बोधन गर्दै एक संचालक समिति सदस्य।' },
//     districts: ALL_DISTRICT_CODES,
//     countLabel: { en: 'provinces reached', ne: 'प्रदेशमा पुग्यो' },
//     countN: 7,
//     countTotal: 7,
//   },
//   {
//     id: 'y2',
//     accent: 'bg-fuchsia-500',
//     accentText: 'text-fuchsia-500',
//     accentBorder: 'border-fuchsia-500',
//     mode: 'dist',
//     pennant: { ne: 'वर्ष २', kw_en: 'Yatras', kw_ne: 'यात्रा' },
//     status: { en: 'Completed · 2023–24', ne: 'सम्पन्न · २०२३–२४' },
//     title: { en: 'The Yatras', ne: 'यात्राहरू' },
//     body: {
//       en: 'The campaign went travelling. The yatras carried Anupam into all 77 districts — street-corner meetings, marches with the hand-painted banner, cultural performances by local groups, and open conversations with the women already holding local office.',
//       ne: 'अभियान यात्रामा निस्कियो। यात्राहरूले अनुपमलाई देशका ७७ वटै जिल्लामा पुर्‍यायो — चोक सभा, हातले लेखिएको ब्यानरसहितको र्‍याली, स्थानीय समूहका सांस्कृतिक प्रस्तुति र स्थानीय तहमा रहेका महिला जनप्रतिनिधिसँगको खुला संवाद।'
//     },
//     facts: [{ n: '77', en: 'districts reached', ne: 'जिल्लामा पुग्यो' }, { n: '7', en: 'provinces', ne: 'प्रदेश' }, { n: '3000+', en: 'members in the network', ne: 'सञ्जाल सदस्य' }],
//     gap: null,
//     img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2089&auto=format&fit=crop',
//     cap: { en: 'A yatra march through Gulariya, with the Anupam Abhiyan banner at the front.', ne: 'गुलरियामा अनुपम अभियानको ब्यानरसहित अघि बढेको यात्रा र्‍याली।' },
//     districts: ALL_DISTRICT_CODES,
//     countLabel: { en: 'of 77 districts', ne: '/ ७७ जिल्ला' },
//     countN: 77,
//     countTotal: 77,
//   },
//   {
//     id: 'y3',
//     accent: 'bg-emerald-500',
//     accentText: 'text-emerald-500',
//     accentBorder: 'border-emerald-500',
//     mode: 'dist',
//     pennant: { ne: 'वर्ष ३', kw_en: 'Signatures', kw_ne: 'हस्ताक्षर' },
//     status: { en: 'Completed · 2025', ne: 'सम्पन्न · २०२५' },
//     title: { en: 'Signature campaign and Rajnitik Khabardari', ne: 'हस्ताक्षर अभियान र राजनीतिक खबरदारी' },
//     body: {
//       en: 'Signatures were collected across the country and handed over to the political parties in a coordinated action, demanding a public commitment to 50 percent women\'s representation in the 2027 elections. Rajnitik Khabardari — political watch — ran alongside it, tracking what the parties actually did. The campaign reached 72 of 77 districts; Humla, Jumla, Rukum East, Rukum West and Ilam were not covered.',
//       ne: 'देशभरबाट संकलित हस्ताक्षर समन्वित रूपमा राजनीतिक दलहरूलाई बुझाइयो — २०२७ को निर्वाचनमा ५० प्रतिशत महिला प्रतिनिधित्वको सार्वजनिक प्रतिबद्धता माग्दै। सँगसँगै दलहरूको कामको निगरानी गर्ने राजनीतिक खबरदारी पनि चल्यो। अभियान ७७ मध्ये ७२ जिल्लामा पुग्यो; हुम्ला, जुम्ला, रुकुम पूर्व, रुकुम पश्चिम र इलाम छुटे।'
//     },
//     facts: [{ n: '72', en: 'districts covered', ne: 'जिल्लामा पुग्यो' }, { n: '5', en: 'districts not covered', ne: 'जिल्ला छुटे' }, { n: '50%', en: 'representation demanded', ne: 'प्रतिनिधित्वको माग' }],
//     gap: {
//       en: 'The signature total, and the handover date and party list, to put a number on this year.',
//       ne: 'यस वर्षलाई अंकमा राख्न — कुल हस्ताक्षर संख्या, बुझाइएको मिति र दलहरूको सूची।'
//     },
//     img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop',
//     cap: { en: 'Women hold the campaign\'s cloth pennants — samata, swabhiman, sashakta — strung between many hands.', ne: 'धेरै हातहरूबीच बाँधिएका अभियानका कपडाका झन्डा — समता, स्वाभिमान, सशक्त।' },
//     districts: ALL_DISTRICT_CODES.filter(d => !['HUMLA','JUMLA','RUKUM5','RUKUM6','ILAM'].includes(d)),
//     out: ['HUMLA','JUMLA','RUKUM5','RUKUM6','ILAM'],
//     countLabel: { en: 'of 77 districts', ne: '/ ७७ जिल्ला' },
//     countN: 72,
//     countTotal: 77,
//   },
//   {
//     id: 'y4',
//     accent: 'bg-purple-700',
//     accentText: 'text-purple-700',
//     accentBorder: 'border-purple-700',
//     mode: 'dist',
//     live: true,
//     pennant: { ne: 'वर्ष ४', kw_en: 'Kon Sabha', kw_ne: 'कोण सभा' },
//     status: { en: 'Running now · 2026', ne: 'चलिरहेको · २०२६' },
//     title: { en: 'Kon Sabha', ne: 'कोण सभा' },
//     body: {
//       en: 'Kon Sabha is the campaign\'s current phase: corner meetings that turn network reach into declared candidates. At the third annual convening at Padmalaya in Nawalpur, from 24 to 26 March 2026, 503 associates from 53 districts across all seven provinces came together. Twenty-seven of them publicly pledged to stand in the coming elections, and co-coordination passed from Laxmi Ghalan and Stella Tamang to Saloni Pradhan Singh and Amuda Mishra. The electoral calendar had shifted after the Gen-Z Jana Andolan, and women made up only 11.34 percent of first-past-the-post candidates.',
//       ne: 'कोण सभा अभियानको हालको चरण हो — सञ्जालको पहुँचलाई घोषित उम्मेदवारीमा बदल्ने चोक-चोकका सभाहरू। चैत २०८२ (२४–२६ मार्च २०२६) मा नवलपुरको पद्मालयमा भएको तेस्रो वार्षिक भेलामा सातै प्रदेशका ५३ जिल्लाबाट ५०३ सहभागी जुटे। तीमध्ये २७ जनाले आगामी निर्वाचनमा उम्मेदवार बन्ने सार्वजनिक प्रतिबद्धता जनाए, र सह-संयोजकको जिम्मेवारी लक्ष्मी घलान र स्टेला तामाङबाट सलोनी प्रधान सिंह र अमुदा मिश्रामा हस्तान्तरण भयो। जेन-जी जन आन्दोलनपछि निर्वाचनको तालिका बदलियो, र प्रत्यक्षतर्फका उम्मेदवारमा महिला ११.३४ प्रतिशत मात्र रहे।'
//     },
//     facts: [{ n: '503', en: 'associates at the convening', ne: 'भेलामा सहभागी' }, { n: '53', en: 'districts represented', ne: 'जिल्लाको प्रतिनिधित्व' }, { n: '27', en: 'candidacy pledges', ne: 'उम्मेदवारीको प्रतिबद्धता' }, { n: '11.34%', en: 'women among FPTP candidates', ne: 'प्रत्यक्षतर्फ महिला उम्मेदवार' }],
//     gap: {
//       en: 'Which 53 districts were represented, and where Kon Sabha meetings have been held so far. Add the codes to yearData y4 and this map fills in on its own.',
//       ne: 'कुन ५३ जिल्लाको प्रतिनिधित्व भयो र अहिलेसम्म कहाँ-कहाँ कोण सभा भए। कोड थपेपछि यो नक्सा आफैँ भरिन्छ।'
//     },
//     img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
//     cap: { en: 'Members gather for a Kon Sabha corner meeting.', ne: 'कोण सभाको चोक बैठकमा सदस्यहरू भेला हुँदै।' },
//     districts: null, // Awaiting data as per the gap note
//     countLabel: { en: 'of 77 districts', ne: '/ ७७ जिल्ला' },
//     countN: 53,
//     countTotal: 77,
//   }
// ];

// const DISTRICTS_FOR_MAP = {
//   "ACHHAM": { "ne": "अछाम", "pr": 7, "d": "M170.0,161.9 176.4,166.1 176.8,168.7 175.5,170.2 174.8,173.9 176.6,180.4 180.0,180.7 181.2,182.8 185.1,184.4 178.2,189.4 173.2,191.2 173.1,192.4 170.2,194.5 169.5,196.6 167.1,198.9 167.1,201.4 166.1,202.6 167.9,205.0 167.5,206.4 168.5,207.8 170.0,207.7 170.2,210.4 172.9,212.0 176.0,216.8 178.2,217.5 180.9,222.1 184.0,230.3 186.8,232.7 186.6,236.2 182.1,237.2 179.4,236.9 181.3,235.4 180.5,233.6 178.9,232.7 179.7,229.5 176.8,227.0 175.9,224.3 172.4,222.4 172.5,216.8 166.4,214.1 164.0,214.9 161.8,216.9 158.5,217.4 157.2,216.6 156.9,215.0 155.4,214.9 152.8,212.5 150.4,213.0 147.9,215.7 146.1,213.9 144.7,215.2 140.7,214.9 139.5,213.7 136.3,213.0 130.4,207.3 128.4,206.8 128.5,205.3 130.3,205.6 133.5,203.0 134.1,201.2 133.4,197.3 131.7,193.7 130.5,192.9 130.3,192.0 131.4,190.7 129.3,190.3 129.1,188.5 123.6,183.0 123.7,181.7 122.5,181.2 122.8,179.9 121.6,179.1 121.0,176.2 118.9,175.7 120.0,174.3 124.5,173.9 129.6,170.2 129.5,168.6 127.6,167.4 127.9,165.5 130.4,160.3 132.3,159.5 133.4,152.9 134.6,151.4 134.4,148.8 135.3,148.2 137.3,148.2 140.3,151.1 145.8,152.8 147.4,154.8 146.7,156.2 148.7,159.7 151.9,158.7 153.5,156.7 156.1,158.2 159.3,162.4 160.9,162.1 162.6,160.6 162.5,159.8 164.3,162.3 166.9,163.2Z", "c": [151.7, 192.7] },
//   "BAITADI": { "ne": "बैतडी", "pr": 7, "d": "M90.6,106.0 88.6,107.4 88.5,108.8 86.5,109.6 86.4,111.7 89.9,112.5 88.7,113.7 89.4,117.9 88.4,119.8 88.1,124.0 87.5,125.0 84.7,124.8 84.6,127.7 88.7,129.0 89.6,131.3 93.1,130.0 93.8,132.1 96.6,133.7 98.0,136.6 100.4,137.4 101.3,140.2 104.3,140.4 100.5,144.3 98.6,144.2 97.5,145.1 98.4,146.7 97.3,149.5 95.4,148.8 92.9,151.1 89.3,150.9 88.4,149.1 86.4,148.2 87.1,146.3 82.7,145.6 81.5,144.9 81.1,143.6 79.6,144.2 76.6,142.7 75.0,143.6 76.2,146.0 72.7,148.6 68.4,146.7 64.3,146.7 63.6,144.6 60.6,143.6 60.1,146.4 58.2,147.3 54.5,146.4 51.7,148.2 49.1,146.8 46.9,147.9 45.8,147.2 43.9,149.9 43.7,152.3 42.2,151.7 40.3,152.4 40.2,153.3 39.4,152.6 37.9,153.3 37.7,154.5 38.4,154.7 37.4,156.3 36.2,155.4 32.9,159.0 30.8,157.1 29.2,156.8 26.1,151.2 27.0,149.3 26.7,147.4 22.5,144.6 22.8,139.9 24.4,139.0 26.4,139.3 25.9,138.5 26.6,138.0 27.2,139.1 30.0,138.8 28.1,135.4 29.4,133.6 31.3,134.4 31.5,132.2 33.6,130.5 35.2,130.3 36.8,127.7 34.7,126.4 34.9,124.9 37.5,124.3 37.5,123.3 39.4,123.7 39.4,122.2 40.5,122.2 44.2,116.3 45.1,116.6 46.5,115.5 47.1,116.0 48.1,114.7 50.2,115.4 53.6,114.9 55.7,111.4 61.4,108.4 63.7,106.0 70.5,105.6 72.8,107.0 75.6,106.1 77.4,103.6 79.7,104.4 85.5,103.2 88.7,104.1Z", "c": [61.4, 131.0] },
//   "BAJHANG": { "ne": "बझाङ", "pr": 7, "d": "M126.8,54.9 130.1,57.6 130.8,59.6 133.9,60.8 137.4,60.3 138.2,60.9 139.5,59.2 141.1,59.6 142.3,61.4 145.7,60.9 146.7,59.1 144.8,58.0 149.0,56.1 151.4,57.6 154.3,57.9 154.7,58.9 159.5,61.0 162.5,61.4 165.0,59.5 171.7,62.2 173.4,66.2 173.0,67.9 171.2,69.3 172.4,73.5 171.7,76.3 173.4,77.8 176.1,78.2 177.7,77.2 181.2,78.8 185.0,83.1 184.2,89.0 182.7,91.1 184.5,94.5 183.5,96.7 181.9,97.7 178.3,97.3 178.0,98.9 180.0,102.9 178.8,104.4 179.0,107.2 170.4,111.7 168.1,112.1 167.0,114.9 166.9,118.8 164.5,121.8 164.6,124.3 161.2,125.3 158.7,128.1 157.2,131.5 154.3,133.4 154.6,134.5 151.5,135.6 153.4,137.8 152.8,139.0 147.8,141.5 146.4,143.2 146.5,144.3 143.4,144.6 140.4,146.8 139.3,146.0 138.6,146.5 138.2,145.2 136.6,144.6 135.7,146.9 133.3,147.5 131.8,145.6 130.3,146.8 127.4,145.1 123.2,145.4 121.4,144.3 119.9,144.6 118.3,143.2 112.1,146.1 108.2,146.5 104.9,140.0 101.3,140.2 100.4,137.4 98.0,136.6 96.6,133.7 93.8,132.1 93.1,130.0 89.6,131.3 88.7,129.0 84.6,127.7 84.7,124.8 87.5,125.0 88.1,124.0 88.4,119.8 89.4,117.9 88.7,113.7 89.9,112.5 86.4,111.7 86.5,109.6 88.5,108.8 88.6,107.4 90.6,106.0 96.0,106.1 98.2,104.9 99.0,103.4 108.2,99.4 112.6,101.3 114.2,98.6 118.1,97.6 119.6,98.2 120.3,97.0 122.6,96.3 124.2,86.4 122.4,86.2 120.5,84.7 120.6,79.0 118.8,75.3 115.7,72.5 118.3,68.2 117.5,65.1 118.8,64.2 120.3,60.3 124.0,56.4Z", "c": [145.8, 101.1] },
// };

// const DISTRICTS_OUT = ['HUMLA','JUMLA','RUKUM5','RUKUM6','ILAM'];

// // --- Helper Components ---

// const LanguageToggle = ({ lang, setLang }) => (
//   <div className="flex border border-white/45 rounded-full overflow-hidden">
//     <button
//       type="button"
//       className={`px-4 py-1.5 text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-amber-400 text-purple-900' : 'text-white hover:bg-white/10'}`}
//       onClick={() => setLang('en')}
//       aria-pressed={lang === 'en'}
//     >
//       English
//     </button>
//     <button
//       type="button"
//       className={`px-4 py-1.5 text-sm font-semibold transition-colors ${lang === 'ne' ? 'bg-amber-400 text-purple-900' : 'text-white hover:bg-white/10'}`}
//       onClick={() => setLang('ne')}
//       aria-pressed={lang === 'ne'}
//       lang="ne"
//     >
//       नेपाली
//     </button>
//   </div>
// );

// const PennantRail = ({ years, activeYearId, onSelect }) => {
//   const getRotation = (index) => {
//     const rotations = [-2, 1, -1.5, 2, -1];
//     return rotations[index % rotations.length];
//   };

//   const getDip = (index) => {
//     const dips = [0, 4, 2, 6, 3];
//     return dips[index % dips.length];
//   };

//   return (
//     <nav className="sticky top-0 z-30 bg-[#faefe6] pb-4" aria-label="Campaign years">
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="absolute top-0 left-0 w-full h-11 overflow-visible pointer-events-none">
//           <svg className="w-full h-full" viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true">
//             <path d="M0 6 C 22 30, 36 36, 50 36 S 78 30, 100 6" fill="none" stroke="#ffbd59" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
//           </svg>
//         </div>
//         <ul className="relative flex gap-2 sm:gap-4 md:gap-6 justify-center pt-2.5 list-none m-0 p-0 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-transparent">
//           {years.map((year, index) => {
//             const isSelected = year.id === activeYearId;
//             return (
//               <li key={year.id} className="flex-shrink-0">
//                 <button
//                   onClick={() => onSelect(year.id)}
//                   className={`
//                     relative block w-[96px] sm:w-[110px] md:w-[130px] lg:w-[150px]
//                     pt-[17px] pb-[34px] px-2.5 text-center
//                     transition-all duration-300 ease-out
//                     clip-path-pennant
//                     ${isSelected
//                       ? `${year.accent} text-white transform translate-y-[14px]`
//                       : 'bg-[#f7e4f1] text-[#5c2371] hover:translate-y-[4px]'
//                     }
//                   `}
//                   style={{
//                     transform: isSelected
//                       ? `translateY(14px) rotate(${getRotation(index)}deg)`
//                       : `translateY(${getDip(index)}px) rotate(${getRotation(index)}deg)`,
//                     clipPath: 'polygon(0 0,100% 0,100% 88%,84% 100%,63% 90%,38% 100%,16% 91%,0 99%)',
//                   }}
//                   aria-selected={isSelected}
//                 >
//                   <span className="absolute left-1/2 -top-3 w-4 h-4 -ml-2 bg-amber-400 rounded-sm transform rotate-45"></span>
//                   <span className="block font-bold text-base sm:text-lg md:text-xl leading-tight" lang="ne">
//                     {year.pennant.ne}
//                   </span>
//                   <span className="block text-[10px] sm:text-xs font-semibold mt-1 leading-tight opacity-80">
//                     {year.pennant.kw_en}
//                   </span>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const Map = ({ yearData, allDistricts, districtsOut }) => {
//   const [hoveredDistrict, setHoveredDistrict] = useState(null);
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
//   const svgRef = useRef(null);

//   const getDistrictStatus = (districtCode) => {
//     if (!yearData) return 'none';
//     if (yearData.mode === 'prov') {
//       return 'prov'; // Highlight all provinces
//     }
//     if (yearData.districts === null) return 'none';
//     if (yearData.districts.includes(districtCode)) return 'on';
//     if (districtsOut && districtsOut.includes(districtCode)) return 'off';
//     return 'none';
//   };

//   const handleMouseMove = (e, districtCode) => {
//     if (svgRef.current) {
//       const rect = svgRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 1000;
//       const y = ((e.clientY - rect.top) / rect.height) * 572.3;
//       setTooltipPos({ x, y });
//     }
//     setHoveredDistrict(districtCode);
//   };

//   const handleMouseLeave = () => {
//     setHoveredDistrict(null);
//   };

//   const accentColor = yearData ? yearData.accent.replace('bg-', '') : 'amber-400';
//   const accentHex = {
//     'bg-amber-400': '#fbbf24',
//     'bg-fuchsia-500': '#d946ef',
//     'bg-emerald-500': '#10b981',
//     'bg-purple-700': '#7e22ce',
//   }[yearData?.accent] || '#fbbf24';

//   return (
//     <div className="relative bg-white border border-purple-200/20 p-3 sm:p-4">
//       <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
//         <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-none text-[#5c2371]">
//           {yearData?.countN}
//           <small className="font-sans font-medium text-sm text-gray-500 ml-2">
//             {yearData?.countLabel?.['en']}
//           </small>
//         </div>
//       </div>
//       <div className="h-1.5 bg-[#ebe5ee] mt-3 relative overflow-hidden">
//         <i
//           className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
//           style={{
//             width: `${(yearData?.countN / yearData?.countTotal) * 100}%`,
//             backgroundColor: accentHex,
//           }}
//         ></i>
//       </div>

//       <div className="relative mt-4" id="mapWrap">
//         <svg
//           ref={svgRef}
//           className="w-full h-auto block overflow-visible"
//           viewBox="0 0 1000 572.3"
//           role="img"
//           aria-labelledby="mapTitle"
//         >
//           <title id="mapTitle">Districts of Nepal reached in the selected year</title>
//           <defs>
//             <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
//               <rect width="6" height="6" fill="#fff" />
//               <line x1="0" y1="0" x2="0" y2="6" stroke="#eb2730" strokeWidth="2.6" opacity="0.55" />
//             </pattern>
//           </defs>
//           <g id="dists">
//             {allDistricts.map((code) => {
//               const district = DISTRICTS_FOR_MAP[code];
//               if (!district) return null;
//               const status = getDistrictStatus(code);
//               const isHovered = hoveredDistrict === code;
//               return (
//                 <path
//                   key={code}
//                   className={`transition-colors duration-500 cursor-default ${isHovered ? 'stroke-[#5c2371] stroke-2' : ''}`}
//                   d={district.d}
//                   fill={
//                     status === 'on' ? accentHex :
//                     status === 'off' ? 'url(#hatch)' :
//                     status === 'prov' ? accentHex :
//                     status === 'none' ? '#ece2e9' :
//                     '#f2ecef'
//                   }
//                   opacity={status === 'prov' ? 0.5 : 1}
//                   onMouseMove={(e) => handleMouseMove(e, code)}
//                   onMouseLeave={handleMouseLeave}
//                   data-s={status}
//                 />
//               );
//             })}
//           </g>
//           {/* Province outlines (simplified, not fully functional in this example) */}
//           <g id="provs"></g>
//         </svg>

//         {hoveredDistrict && DISTRICTS_FOR_MAP[hoveredDistrict] && (
//           <div
//             className="absolute pointer-events-none bg-[#5c2371] text-white p-2 text-sm rounded-sm z-10 whitespace-nowrap"
//             style={{
//               left: `${(tooltipPos.x / 1000) * 100}%`,
//               top: `${(tooltipPos.y / 572.3) * 100}%`,
//               transform: 'translate(-50%, -125%)',
//               opacity: hoveredDistrict ? 1 : 0,
//               transition: 'opacity 0.12s',
//             }}
//             role="status"
//           >
//             <b className="font-semibold block text-sm" lang="ne">
//               {DISTRICTS_FOR_MAP[hoveredDistrict].ne}
//             </b>
//             {hoveredDistrict.charAt(0) + hoveredDistrict.slice(1).toLowerCase()}
//           </div>
//         )}

//         {yearData?.districts === null && (
//           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 border border-dashed border-red-500 text-red-500 p-3 text-sm font-semibold text-center max-w-[80%]">
//             <span className="block">District map awaiting data</span>
//             <span className="block" lang="ne">जिल्ला नक्साको तथ्यांक पर्खाइमा</span>
//           </div>
//         )}
//       </div>

//       <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-gray-600">
//         <span className="inline-flex items-center gap-1.5">
//           <span className="w-3.5 h-3.5 border border-purple-200/30 inline-block" style={{ backgroundColor: accentHex }}></span>
//           Reached this year
//         </span>
//         {yearData?.out && (
//           <span className="inline-flex items-center gap-1.5">
//             <span className="w-3.5 h-3.5 border border-purple-200/30 inline-block" style={{ background: 'repeating-linear-gradient(45deg, #fff 0 3px, rgba(235,39,48,.55) 3px 5px)' }}></span>
//             Not covered
//           </span>
//         )}
//         <span className="inline-flex items-center gap-1.5">
//           <span className="w-3.5 h-3.5 border border-purple-200/30 inline-block bg-[#ece2e9]"></span>
//           Not yet reached
//         </span>
//       </div>

//       <details className="mt-4 text-sm">
//         <summary className="cursor-pointer text-[#5c2371] font-semibold">District list</summary>
//         <ul className="columns-3 gap-4 mt-3 text-xs text-gray-600 list-disc list-inside">
//           {allDistricts.map((code) => {
//             const status = getDistrictStatus(code);
//             return (
//               <li key={code} className={status === 'off' ? 'text-red-500' : ''}>
//                 {DISTRICTS_FOR_MAP[code]?.ne || code}
//                 {status === 'off' && ' ·'}
//               </li>
//             );
//           })}
//         </ul>
//       </details>
//     </div>
//   );
// };

// const FactPill = ({ number, labelEn, labelNe }) => (
//   <li className="bg-white border border-purple-200/16 rounded-sm p-2.5 px-3.5 text-sm leading-tight">
//     <b className="font-display text-xl text-purple-700 mr-1.5">{number}</b>
//     {labelEn}
//     <span className="block text-xs text-gray-400" lang="ne">{labelNe}</span>
//   </li>
// );

// const PillarCard = ({ color, titleEn, titleNe, bodyEn, bodyNe }) => (
//   <div className="bg-white p-5 border-t-[6px]" style={{ borderColor: color }}>
//     <h3 className="font-display text-xl font-bold text-purple-700 mb-2 leading-tight">{titleEn}</h3>
//     <h3 className="font-deva text-sm text-purple-500 mb-1.5" lang="ne">{titleNe}</h3>
//     <p className="text-sm text-gray-600 leading-relaxed">{bodyEn}</p>
//     <p className="text-xs text-gray-500 leading-relaxed mt-1" lang="ne">{bodyNe}</p>
//   </div>
// );

// // --- Main App Component ---

// export default function AnupamAbhiyan() {
//   const [lang, setLang] = useState('en');
//   const [activeYearId, setActiveYearId] = useState('y1');

//   // Set the language attribute on the HTML tag for styling
//   useEffect(() => {
//     document.documentElement.lang = lang;
//     document.documentElement.setAttribute('data-lang', lang);
//   }, [lang]);

//   const activeYear = useMemo(() => YEARS.find(y => y.id === activeYearId), [activeYearId]);

//   const allDistrictCodes = useMemo(() => {
//     // In a real app, this would come from a complete map data file.
//     // Here, we use the keys from our sample data plus a few more to simulate a fuller map.
//     const sampleCodes = Object.keys(DISTRICTS_FOR_MAP);
//     const extraCodes = ['DARCHULA', 'DOTI', 'KAILALI', 'KANCHANPUR', 'DAILEKH', 'DOLPA', 'HUMLA', 'JAJARKOT', 'JUMLA', 'KALIKOT', 'MUGU', 'SALYAN', 'SURKHET', 'RUKUM6', 'ARGHAKHANCHI', 'BANKE', 'BARDIYA', 'DANG', 'GULMI', 'KAPILBASTU', 'PALPA', 'PYUTHAN', 'ROLPA', 'RUPANDEHI', 'RUKUM5', 'NAWALPARASI5', 'BAGLUNG', 'GORKHA', 'KASKI', 'LAMJUNG', 'MANANG', 'MUSTANG', 'MYAGDI', 'PARBAT', 'SYANGJA', 'TANAHU', 'NAWALPARASI4', 'SINDHUPALCHOK', 'KABHREPALANCHOK', 'LALITPUR', 'BHAKTAPUR', 'KATHMANDU', 'NUWAKOT', 'RASUWA', 'DHADING', 'SINDHULI', 'RAMECHHAP', 'DOLAKHA', 'MAKAWANPUR', 'CHITAWAN', 'BARA', 'DHANUSHA', 'MAHOTTARI', 'PARSA', 'RAUTAHAT', 'SAPTARI', 'SIRAHA', 'SARLAHI', 'BHOJPUR', 'DHANKUTA', 'ILAM', 'JHAPA', 'KHOTANG', 'MORANG', 'OKHALDHUNGA', 'PANCHTHAR', 'SANKHUWASABHA', 'SOLUKHUMBU', 'SUNSARI', 'TAPLEJUNG', 'TERHATHUM', 'UDAYAPUR'];
//     const all = [...new Set([...sampleCodes, ...extraCodes])];
//     // Add some sample geometry for the extra ones to make the map look fuller
//     extraCodes.forEach(code => {
//       if (!DISTRICTS_FOR_MAP[code]) {
//         // This is a placeholder for real district data.
//         // In a real app, you would have actual path data here.
//         const center = [(Math.random() * 800) + 100, (Math.random() * 400) + 100];
//         const size = 30 + Math.random() * 20;
//         DISTRICTS_FOR_MAP[code] = {
//           ne: code,
//           pr: 1,
//           d: `M${center[0]},${center[1]} ${center[0]+size},${center[1]} ${center[0]+size},${center[1]+size} ${center[0]},${center[1]+size} Z`,
//           c: center,
//         };
//       }
//     });
//     return all;
//   }, []);

//   // useEffect to manage the sticky rail offset for smooth scrolling (simplified)
//   useEffect(() => {
//     const handleScroll = () => {
//       // Could add logic here if needed
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-[#faefe6] text-gray-800 antialiased font-sans">
//       {/* Header / Opener */}
//       <header className="relative bg-[#5c2371] text-white pt-6 pb-24 overflow-hidden">
//         <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"
//             alt=""
//             className="w-full h-full object-cover object-[58%_42%]"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#5c2371] via-[#5c2371]/94 to-[#5c2371]/42"></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-[#3a1448]/75 to-transparent"></div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anupam_Abhiyan_logo.png/200px-Anupam_Abhiyan_logo.png"
//                 alt="Anupam Abhiyan"
//                 className="h-12 w-auto drop-shadow-md"
//                 onError={(e) => { e.target.style.display = 'none'; }}
//               />
//               <span className="text-xs text-purple-200 max-w-[220px] leading-snug">
//                 {lang === 'en'
//                   ? 'A campaign of the Inter-Generational Feminist Forum'
//                   : 'अन्तरपुस्ता महिलावादी मञ्चको अभियान'}
//               </span>
//             </div>
//             <LanguageToggle lang={lang} setLang={setLang} />
//           </div>

//           <div className="mt-12 md:mt-16 max-w-xl md:max-w-2xl">
//             <p className="font-deva font-bold text-amber-400 text-2xl sm:text-3xl md:text-4xl leading-snug mb-1.5" lang="ne">
//               देशव्यापी महिलावादी
//             </p>
//             <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
//               <span className="block">
//                 {lang === 'en' ? 'Anupam Abhiyan' : 'अनुपम अभियान'}
//               </span>
//               <span className="block text-base sm:text-lg md:text-xl font-semibold tracking-widest text-purple-300 mt-4">
//                 2022 — 2027
//               </span>
//             </h1>
//             <p className="max-w-lg mt-6 text-lg sm:text-xl text-purple-100 leading-relaxed">
//               {lang === 'en'
//                 ? 'Five years of organised feminist action for women\'s political participation — carried district by district, by women who were already leading where they live.'
//                 : 'महिलाको राजनीतिक सहभागिताका लागि पाँच वर्षे संगठित महिलावादी कार्य — आफ्नै ठाउँमा नेतृत्व गरिरहेका महिलाहरूले जिल्ला-जिल्लामा पुर्‍याएको अभियान।'}
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
//               <div className="bg-white/10 border-l-4 border-amber-400 p-4">
//                 <b className="block font-display text-sm text-amber-400 mb-1.5">
//                   {lang === 'en' ? 'Goal one' : 'पहिलो लक्ष्य'}
//                 </b>
//                 <p className="text-white text-sm leading-relaxed">
//                   {lang === 'en'
//                     ? 'Women\'s equitable and representative participation at all levels of the state.'
//                     : 'राज्यका सबै तहमा महिलाको समतामूलक र प्रतिनिधित्वमूलक सहभागिता।'}
//                 </p>
//               </div>
//               <div className="bg-white/10 border-l-4 border-purple-300 p-4">
//                 <b className="block font-display text-sm text-purple-300 mb-1.5">
//                   {lang === 'en' ? 'Goal two' : 'दोस्रो लक्ष्य'}
//                 </b>
//                 <p className="text-white text-sm leading-relaxed">
//                   {lang === 'en'
//                     ? 'Self-reliant, equitable, inclusive and dignified development.'
//                     : 'आत्मनिर्भर, समतामूलक, समावेशी र मर्यादित विकास।'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <svg className="absolute bottom-0 left-0 right-0 w-full h-24" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
//           <path d="M0,44 C240,88 420,18 720,42 C1010,64 1210,84 1440,50 L1440,90 L0,90 Z" fill="#faefe6" />
//         </svg>
//       </header>

//       {/* Year Zone */}
//       <div className="yearzone">
//         <PennantRail years={YEARS} activeYearId={activeYearId} onSelect={setActiveYearId} />
//         <main>
//           <section className="py-8 sm:py-12 lg:py-16" aria-live="polite">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
//                 {/* Left Column: Text */}
//                 <div className="lg:sticky lg:top-36 space-y-6">
//                   <div className="flex items-center gap-2.5 text-sm font-semibold tracking-wider text-gray-500">
//                     <span className={`w-2.5 h-2.5 rounded-full ${activeYear.accent} ${activeYear.live ? 'animate-pulse' : ''}`}></span>
//                     <span>
//                       {activeYear.status[lang]}
//                     </span>
//                   </div>
//                   <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-[#5c2371]">
//                     {activeYear.title[lang]}
//                     <span className="block font-deva font-semibold text-2xl mt-3 text-fuchsia-700" lang="ne">
//                       {activeYear.title.ne}
//                     </span>
//                   </h2>
//                   <p className="max-w-prose text-lg leading-relaxed text-gray-700">
//                     {activeYear.body[lang]}
//                   </p>

//                   <ul className="flex flex-wrap gap-3 pt-4">
//                     {activeYear.facts.map((fact, idx) => (
//                       <FactPill key={idx} number={fact.n} labelEn={fact.en} labelNe={fact.ne} />
//                     ))}
//                   </ul>

//                   {activeYear.gap && (
//                     <div className="border-l-4 border-red-500 bg-red-50 p-4 text-sm max-w-prose">
//                       <span className="block font-semibold text-red-500 mb-1">
//                         {lang === 'en' ? 'Still needed from IGFF' : 'आईजीएफएफबाट अझै चाहिने'}
//                       </span>
//                       <em className="not-italic text-gray-700">
//                         {activeYear.gap[lang]}
//                       </em>
//                     </div>
//                   )}

//                   <figure className="mt-8">
//                     <img src={activeYear.img} alt="" className="w-full h-64 sm:h-80 object-cover" />
//                     <figcaption className="text-sm text-gray-500 mt-3 max-w-prose leading-relaxed">
//                       {activeYear.cap[lang]}
//                     </figcaption>
//                   </figure>
//                 </div>

//                 {/* Right Column: Map */}
//                 <div className="lg:sticky lg:top-36">
//                   <Map yearData={activeYear} allDistricts={allDistrictCodes} districtsOut={DISTRICTS_OUT} />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>

//       {/* Pillars Section */}
//       <section className="bg-[#f7e4f1] py-16 sm:py-20 lg:py-24">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-[#5c2371]">
//             {lang === 'en' ? 'What holds the campaign up' : 'अभियानलाई थाम्ने आधारहरू'}
//           </h2>
//           <p className="max-w-xl mt-4 text-gray-600">
//             {lang === 'en'
//               ? 'Political action alone doesn\'t last five years. Four practical systems keep the movement running between the yatras.'
//               : 'राजनीतिक कामले मात्र पाँच वर्ष टिक्दैन। यात्राहरूका बीचमा अभियानलाई चलायमान राख्ने चार व्यावहारिक प्रणाली।'}
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
//             <PillarCard
//               color="#bc208d"
//               titleEn="Women Empowerment Fixed Deposit Fund"
//               titleNe="महिला सशक्तीकरण अक्षय कोष"
//               bodyEn="A standing fund that supports the movement and backs women candidates in the coming election."
//               bodyNe="अभियान र आगामी निर्वाचनका महिला उम्मेदवारलाई सहयोग गर्ने स्थायी कोष।"
//             />
//             <PillarCard
//               color="#eb2730"
//               titleEn="Anupam Peace Reconstruction Fund"
//               titleNe="अनुपम शान्ति पुनर्निर्माण कोष"
//               bodyEn="A nationwide emergency response so the network can put tangible support on the ground when it is needed."
//               bodyNe="आवश्यक परेका बेला सञ्जालले जमिनमै ठोस सहयोग पुर्‍याउन सक्ने राष्ट्रव्यापी आपत्कालीन कोष।"
//             />
//             <PillarCard
//               color="#1a785f"
//               titleEn="Youth leadership"
//               titleNe="युवा नेतृत्व"
//               bodyEn="Training and workshops for Gen-Z leaders, bridging generational gaps and building structural support for new organisers."
//               bodyNe="जेन-जी नेतृत्वका लागि तालिम र कार्यशाला — पुस्ताबीचको दूरी घटाउँदै नयाँ संगठकलाई संरचनागत सहयोग।"
//             />
//             <PillarCard
//               color="#ffbd59"
//               titleEn="Social media advocacy"
//               titleNe="सामाजिक सञ्जाल पैरवी"
//               bodyEn="Work with Freedom Studio to mobilise public pressure and raise visibility for women candidates."
//               bodyNe="फ्रिडम स्टुडियोसँग मिलेर सार्वजनिक दबाब सिर्जना गर्ने र महिला उम्मेदवारको दृश्यता बढाउने काम।"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Closing Section */}
//       <section className="bg-[#5c2371] text-white py-16 sm:py-20 lg:py-24">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-end">
//           <div className="space-y-6">
//             <p className="flex flex-wrap gap-4 sm:gap-8 font-deva font-bold text-4xl sm:text-5xl lg:text-6xl leading-none" lang="ne">
//               <span className="text-red-500">संयम</span>
//               <span className="text-emerald-400">सक्रिय</span>
//               <span className="text-amber-400">संगठित</span>
//             </p>
//             <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
//               {lang === 'en' ? 'The time is now' : 'अहिले नै समय हो'}
//             </h2>
//             <p className="max-w-prose text-purple-100 text-lg">
//               {lang === 'en'
//                 ? 'Anupam Abhiyan is open to anyone who wants to organise where they live. Join the network, or bring your district into the next yatra.'
//                 : 'आफ्नै ठाउँमा संगठित हुन चाहने जोसुकैका लागि अनुपम अभियान खुला छ। सञ्जालमा जोडिनुहोस्, वा आफ्नो जिल्लालाई अर्को यात्रामा ल्याउनुहोस्।'}
//             </p>
//             <a
//               href="https://forms.gle/bswC1DEmQACtKUfj8"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-amber-400 text-[#3d1750] font-display font-bold px-6 py-3.5 mt-6 hover:bg-amber-300 transition-colors"
//             >
//               <span>{lang === 'en' ? 'Become a member' : 'सदस्य बन्नुहोस्'}</span>
//               <FaArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//           <div className="space-y-8 self-end">
//             <div className="flex flex-wrap gap-x-6 gap-y-2 text-purple-300 text-sm">
//               <a href="https://www.facebook.com/igffnepal" target="_blank" rel="noopener noreferrer" className="hover:text-white border-b border-purple-400/40 hover:border-white pb-0.5 transition-colors flex items-center gap-1.5">
//                 <FaFacebook className="w-4 h-4" /> Facebook · igffnepal
//               </a>
//               <a href="https://www.instagram.com/anupam.abhiyan" target="_blank" rel="noopener noreferrer" className="hover:text-white border-b border-purple-400/40 hover:border-white pb-0.5 transition-colors flex items-center gap-1.5">
//                 <FaInstagram className="w-4 h-4" /> Instagram · anupam.abhiyan
//               </a>
//               <a href="https://www.tiktok.com/@igff_nepal" target="_blank" rel="noopener noreferrer" className="hover:text-white border-b border-purple-400/40 hover:border-white pb-0.5 transition-colors flex items-center gap-1.5">
//                 <FaMusic className="w-4 h-4" /> TikTok · igff_nepal
//               </a>
//             </div>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Inter-Generational_Feminist_Forum_Logo.png/200px-Inter-Generational_Feminist_Forum_Logo.png"
//               alt="Inter-Generational Feminist Forum"
//               className="h-16 w-auto filter brightness-0 invert opacity-90"
//               onError={(e) => { e.target.style.display = 'none'; }}
//             />
//             <p className="border-t border-white/20 pt-5 text-sm text-purple-200 leading-relaxed">
//               {lang === 'en'
//                 ? 'IGFF is legally and fiscally hosted by Tewa and supported by Nagarik Aawaz. District boundaries follow the 77-district federal structure. Photographs by Freedom Studio.'
//                 : 'आईजीएफएफ कानुनी तथा वित्तीय रूपमा तेवाद्वारा आयोजित र नागरिक आवाजद्वारा सहयोगित छ। जिल्लाको सिमाना ७७ जिल्लाको संघीय संरचनाअनुसार। तस्बिर: फ्रिडम स्टुडियो।'}
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useMemo, useState } from "react";
import { ChevronRight, CircleHelp, MapPin } from "lucide-react";
import mapData from "../../data/mapData.json";
import Timeline from "./Timeline";
import anupam from '../../assets/gallery/anupamart.png';
import img from '../../assets/gallery/provincelevel.JPG';
import img2 from '../../assets/gallery/konsabha.jpg';
import halftone from '../../assets/halfton.png';
import CampaignPillars from "./CampaignPillars";
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations';
import y1img from '../../assets/gallery/gallery1.jpg';

const MAP = mapData;
const ALL_DISTRICTS = Object.keys(MAP.districts);
const Y3_OUT = ["HUMLA", "JUMLA", "RUKUM5", "RUKUM6", "ILAM"];

// ─────────────────────────────────────────────────────────────
// Language-independent visual / structural props, keyed by id.
// Merged with translated text from translations[lang].years.
// ─────────────────────────────────────────────────────────────
const yearVisuals = [
  {
    id: "y1",
    accent: "#ffbd59",
    mode: "prov",
    pennant: { ne: "वर्ष १", kw_en: "Launch", kw_ne: "सुरुवात" },
    status: { en: "Completed · 2022–23", ne: "सम्पन्न · २०२२–२३" },
    img: y1img,
    districts: ALL_DISTRICTS,
    countN: 7,
    countTotal: 7,
  },
  {
    id: "y2",
    accent: "#ce4b86",
    mode: "dist",
    pennant: { ne: "वर्ष २", kw_en: "Yatras", kw_ne: "यात्रा" },
    status: { en: "Completed · 2023–24", ne: "सम्पन्न · २०२३–२४" },
    img: "/assets/year-2.jpg",
    districts: ALL_DISTRICTS,
    countN: 77,
    countTotal: 77,
  },
  {
    id: "y3",
    accent: "#3a9b6d",
    mode: "dist",
    pennant: { ne: "वर्ष ३", kw_en: "Signatures", kw_ne: "हस्ताक्षर" },
    status: { en: "Completed · 2025", ne: "सम्पन्न · २०२५" },
    img: "/assets/year-3.jpg",
    districts: ALL_DISTRICTS,
    out: Y3_OUT,
    countN: 77,
    countTotal: 77,
  },
  {
    id: "y4",
    accent: "#642b77",
    mode: "dist",
    live: true,
    pennant: { ne: "वर्ष ४", kw_en: "Kon Sabha", kw_ne: "कोण सभा" },
    status: { en: "Running now · 2026", ne: "चलिरहेको · २०२६" },
    img: "/assets/year-4.jpg",
    districts: null,
    countN: 53,
    countTotal: 77,
  },
  {
    id: "y5",
    accent: "#ef765d",
    mode: "dist",
    pennant: { ne: "वर्ष ५", kw_en: "2027", kw_ne: "२०२७" },
    status: { en: "Planned · 2027", ne: "आगामी · २०२७" },
    img: "/assets/year-5.jpg",
    districts: null,
    countN: 0,
    countTotal: 77,
  },
];

const AnupamAbhiyan = () => {
  const { lang } = useLanguage();
  const t = translations[lang].years;
  const heroT = translations[lang].anupamabhiyan;

  // Merge visual props + translated text by id
  const YEARS = useMemo(
    () =>
      yearVisuals.map((v) => {
        const tr = t.find((x) => x.id === v.id);
        return { ...v, ...(tr || {}) };
      }),
    [t]
  );


  const DEFAULT_YEAR_INDEX = useMemo(() => {
    const idx = YEARS.findIndex((y) => y.id === "y4");
    return idx !== -1 ? idx : 3;
  }, [YEARS]);

  const [yearIndex, setYearIndex] = useState(DEFAULT_YEAR_INDEX);
  const selectedYear = YEARS[yearIndex];

  const selectYear = (index) => {
    setYearIndex(index);
  };

  // Helper: read inline {en, ne} objects (status, pennant)
  const copy = (obj) => (obj ? obj[lang] : "");


  return (
    <div
      className="overflow-hidden"
      data-language={lang}
      style={{ "--accent": selectedYear.accent }}
    >
      {/* ===== HEADER ===== */}
      <div className="overflow-hidden relative pt-16 md:pt-20">
        <div className="bg-(--background)">
          <div className="relative">
            <div
              className="absolute inset-0 bg-(--royal-purple)
                         [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
                         md:[clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
            />

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
                     {heroT.heading}
                  </h1>
                  <span
                    style={{ fontFamily: "Inter" }}
                    className="font-medium text-sm text-(--amber-gold)"
                  >
                     {heroT.period}
                  </span>
                  <p className="text-sm md:text-base font-medium text-white text-justify">
                    {heroT.intro}
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
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="py-10 grid md:grid-cols-3 grid-cols-1 gap-5">
              <img src={img} alt="anupamimg" className="border-8 border-white -rotate-6" />
              <div className="flex justify-center items-center flex-col gap-4">
                <h3 className="text-3xl text-(--royal-purple) text-center font-bold">
                   {heroT.featureHeading}
                </h3>
                <p className="text-base text-center">
                   {heroT.featureBody}
                </p>
              </div>
              <img src={img2} alt="anupamimg" className="border-8 border-white rotate-6" />
            </div>
          </div>

          <Timeline
            activeYearId={selectedYear.id}
            onYearSelect={(id, index) => selectYear(index)}
          />
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <main>
        <section
          className="bg-(--background) pb-[112px] pt-[72px] max-[620px]:pt-[51px]"
          id={`year-panel-${selectedYear.id}`}
          role="tabpanel"
          aria-live="polite"
        >
          <div className="mx-auto grid w-[min(1180px,calc(100%-52px))] grid-cols-[minmax(0,.78fr)_minmax(560px,1.22fr)] items-start gap-[clamp(45px,6vw,88px)] max-[900px]:w-[min(100%-36px,680px)] max-[900px]:grid-cols-1 max-[900px]:gap-[68px] max-[620px]:w-[min(100%-28px,500px)]">
            {/* Story column */}
            <div className="pt-3">
              <p className="mb-[18px] flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.03em] text-[#806e79]">
                <span
                  className={`inline-block h-[9px] w-[9px] rounded-full ${selectedYear.live ? "status-live" : ""}`}
                  style={{
                    background: selectedYear.accent,
                    boxShadow: `0 0 0 4px color-mix(in srgb, ${selectedYear.accent} 15%, transparent)`,
                  }}
                />
                {copy(selectedYear.status)}
              </p>

              <h2 className="mb-6 font-['Nunito',sans-serif] text-[clamp(2rem,4vw,4rem)] font-bold leading-[.95] tracking-[-.055em] text-(--royal-purple) max-[620px]:text-[3rem]">
                {selectedYear.title}
              </h2>

              <p className="text-[15px] leading-[1.78] text-[#594553]">
                {selectedYear.body}
              </p>

              <ul className="my-[31px] flex list-none flex-wrap gap-x-7 gap-y-[13px] p-0 max-[620px]:gap-x-[17px] max-[620px]:gap-y-[10px]">
                {selectedYear.facts.map((fact) => (
                  <li
                    key={fact.n + fact.label}
                    className="flex items-baseline gap-2 bg-white p-2"
                  >
                    <strong
                      className="font-['Nunito',sans-serif] text-xl font-bold max-[620px]:text-base"
                      style={{ color: selectedYear.accent }}
                    >
                      {fact.n}
                    </strong>
                    <span
                      style={{ fontFamily: "Inter" }}
                      className="text-xs tracking-[.04em] font-medium max-[620px]:text-[10px]"
                    >
                      {fact.label}
                    </span>
                    
                  </li>
                ))}
              </ul>

              {selectedYear.gap && (
                <div className="my-[27px] mb-[31px] border-l-[3px] border-[#D32F2F] bg-[#D32F2F]/5 px-[18px] py-[14px]">
                  <span className="mb-2 flex items-center gap-[6px] text-xs font-extrabold uppercase tracking-[.04em]">
                    <CircleHelp size={15} color="#D32F2F" />
                    <span className="text-[#D32F2F]">
                      {lang === "en" ? "Still needed from IGFF" : "आईजीएफएफबाट अझै चाहिने"}
                    </span>
                  </span>
                  <em
                    style={{ fontFamily: "Inter" }}
                    className="block text-[12px] leading-[1.6]"
                  >
                    {selectedYear.gap}
                  </em>
                </div>
              )}

              <figure className="mt-10 mb-0">
                {/* <img src={selectedYear.img} alt="" className="h-[230px] w-full object-cover saturate-[.85] max-[900px]:h-[270px] max-[620px]:h-[190px]" /> */}
                <figcaption className="mt-[10px] text-[11px] leading-[1.55] text-[#8b7480]">
                  {selectedYear.cap}
                </figcaption>
              </figure>
             
              <img src={selectedYear.img} className="mt-3"/>
              
             
            </div>

            {/* Map column */}
            <MapCard year={selectedYear} lang={lang} />
          </div>
        </section>
      </main>

      <CampaignPillars />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// MapCard
// ─────────────────────────────────────────────────────────────
function MapCard({ year, lang }) {
  const [hovered, setHovered] = useState(null);
  const [zoom] = useState(1);
  const [tooltip, setTooltip] = useState(null);
  const [search, setSearch] = useState("");
  const [openProvince, setOpenProvince] = useState(null);

  const reached = useMemo(() => new Set(year.districts ?? []), [year.districts]);
  const mapLabel = "";
  const reachedProvinceCount = year.districts
    ? new Set(year.districts.map((code) => MAP.districts[code].pr)).size
    : null;

  const districtReachedLabel = lang === "en" ? "Districts reached" : "पुगेका जिल्ला";
  const districtNotReachedLabel = lang === "en" ? "Districts not reached" : "नपुगेका जिल्ला";
  const provinceReachedLabel = lang === "en" ? "Provinces reached" : "पुगेका प्रदेश";
  const provinceNotReachedLabel = lang === "en" ? "Provinces not reached" : "नपुगेका प्रदेश";

  const PROVINCE_NAMES = {
    1: { en: "Koshi", ne: "कोशी" },
    2: { en: "Madhesh", ne: "मधेश" },
    3: { en: "Bagmati", ne: "बागमती" },
    4: { en: "Gandaki", ne: "गण्डकी" },
    5: { en: "Lumbini", ne: "लुम्बिनी" },
    6: { en: "Karnali", ne: "कर्णाली" },
    7: { en: "Sudurpashchim", ne: "सुदूरपश्चिम" },
  };

  const TIP_W = lang === "en" ? 240 : 260;
  const TIP_H = 96;
  const TIP_PAD = 16;

  const showTooltip = (code, event) => {
    const district = MAP.districts[code];
    if (!district) return;

    const isReached =
      year.mode === "dist"
        ? year.districts !== null && reached.has(code)
        : year.mode === "prov"
        ? true
        : false;

    const svg = event.currentTarget.ownerSVGElement;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

    const flipX = svgPoint.x + TIP_W + 20 > MAP.w;
    const flipY = svgPoint.y - TIP_H - 12 < 0;

    const tipX = flipX ? svgPoint.x - TIP_W - 14 : svgPoint.x + 14;
    const tipY = flipY ? svgPoint.y + 14 : svgPoint.y - TIP_H - 12;

    setHovered(code);
    setTooltip({
      code,
      ne: district.ne,
      pr: district.pr,
      reached: isReached,
      x: tipX,
      y: tipY,
    });
  };

  const hideTooltip = () => {
    setHovered(null);
    setTooltip(null);
  };

  return (
    <div className="sticky top-6 min-w-0 max-[900px]:relative max-[900px]:top-0">
      <div className="mb-[17px] flex items-end justify-between">
        <div>
          <h3 className="mb-0 mt-[9px] font-['Nunito',sans-serif] text-[clamp(1.20rem,2.7vw,2rem)] font-bold tracking-[-.04em] text-(--royal-purple) max-[620px]:text-[1.65rem]">
            {lang === "en" ? "Where the movement travelled" : "अभियान कहाँ-कहाँ पुग्यो"}
          </h3>
        </div>
        <span
          className="font-['Nunito',sans-serif] text-[57px] font-black leading-[.8] tracking-[-.09em] max-[620px]:text-[43px]"
          style={{ color: year.accent }}
        >
          {year.countN}
          <small className="font-['Inter',sans-serif] text-[13px] font-semibold tracking-normal text-[#ac919e]">
            /{year.countTotal}
          </small>
        </span>
      </div>

      <div className="border border-[#dfc5b9] bg-[#fffaf5]">
        {/* Coverage summary */}
        <div
          className="grid grid-cols-4 border-b border-[#ead8ce] bg-[#fffdf9]"
          aria-label="Map coverage summary"
        >
          <CoverageStat
            value={year.districts ? reached.size : null}
            label={districtReachedLabel}
            accent={year.accent}
          />
          <CoverageStat
            value={year.districts ? 77 - reached.size : null}
            label={districtNotReachedLabel}
          />
          <CoverageStat
            value={reachedProvinceCount}
            label={provinceReachedLabel}
            accent={year.accent}
          />
          <CoverageStat
            value={reachedProvinceCount === null ? null : 7 - reachedProvinceCount}
            label={provinceNotReachedLabel}
          />
        </div>

        {/* Map viewport */}
        <div className="relative grid min-h-[510px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#fffaf6_0,#f9e9df_100%)] max-[620px]:min-h-[360px]">
          <svg
            className="nepal-map w-[94%] overflow-visible"
            viewBox={`0 0 ${MAP.w} ${MAP.h}`}
            role="img"
            aria-label={mapLabel}
            style={{ transform: `scale(${zoom})` }}
          >
            <title>{mapLabel}</title>
            <g>
              {Object.entries(MAP.provinces).map(([province, path]) => (
                <path
                  key={province}
                  d={path}
                  className={year.mode === "prov" ? "province-reached" : "province-outline"}
                  style={{
                    stroke: "#fffaf5",
                    strokeWidth: 2.4,
                    strokeLinejoin: "round",
                    vectorEffect: "non-scaling-stroke",
                    fill: year.mode === "prov" ? year.accent : "#f2d9cc",
                    opacity: year.mode === "prov" ? 0.86 : 0.33,
                    pointerEvents: "none",
                  }}
                />
              ))}
            </g>
            <g className="isolate">
              {Object.entries(MAP.districts).map(([code, district]) => {
                const active = year.mode === "dist" && reached.has(code);
                const muted =
                  year.mode === "dist" && year.districts !== null && !reached.has(code);
                return (
                  <path
                    key={code}
                    d={district.d}
                    className={`district cursor-pointer outline-none ${
                      hovered === code ? "district-hovered" : ""
                    }`}
                    style={{
                      fill: active ? year.accent : muted ? "#ead0c2" : "#f4ddcf",
                      stroke: hovered === code ? "#35133f" : "#fffaf5",
                      strokeWidth: hovered === code ? 2.4 : 1.15,
                      strokeLinejoin: "round",
                      vectorEffect: "non-scaling-stroke",
                      opacity: active ? 0.93 : muted ? 0.62 : 1,
                      filter: hovered === code ? "brightness(1.04)" : undefined,
                    }}
                    tabIndex={0}
                    aria-label={`${code} — ${district.ne}`}
                    onMouseEnter={(e) => showTooltip(code, e)}
                    onMouseMove={(e) => showTooltip(code, e)}
                    onMouseLeave={hideTooltip}
                    onFocus={(e) => showTooltip(code, e)}
                    onBlur={hideTooltip}
                  />
                );
              })}
            </g>

            {/* Tooltip */}
            {tooltip && (
              <g style={{ pointerEvents: "none" }}>
                <rect
                  x={tooltip.x + 3}
                  y={tooltip.y + 4}
                  width={TIP_W}
                  height={TIP_H}
                  rx={10}
                  fill="rgba(53,19,63,.22)"
                />
                <rect
                  x={tooltip.x}
                  y={tooltip.y}
                  width={TIP_W}
                  height={TIP_H}
                  rx={5}
                  fill="#5c2371"
                />
                <text
                  x={tooltip.x + TIP_PAD}
                  y={tooltip.y + 30}
                  fill="#fffaf5"
                  fontSize={22}
                  fontWeight="900"
                  fontFamily="Nunito, sans-serif"
                  letterSpacing="-0.02em"
                >
                  {tooltip.code}
                </text>
                <text
                  x={tooltip.x + TIP_PAD}
                  y={tooltip.y + 50}
                  fill="#e4d2df"
                  fontSize={20}
                  fontFamily="Noto Sans Devanagari, sans-serif"
                >
                  {tooltip.ne}
                </text>
                <line
                  x1={tooltip.x + TIP_PAD}
                  y1={tooltip.y + 60}
                  x2={tooltip.x + TIP_W - TIP_PAD}
                  y2={tooltip.y + 60}
                  stroke="rgba(255,250,245,.18)"
                  strokeWidth={1}
                />
                <circle
                  cx={tooltip.x + TIP_PAD + 5}
                  cy={tooltip.y + 78}
                  r={5}
                  fill={tooltip.reached ? year.accent : "#ead0c2"}
                />
                <text
                  x={tooltip.x + TIP_PAD + 18}
                  y={tooltip.y + 83}
                  fill="#fffaf5"
                  fontSize={13}
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  {lang === "en"
                    ? `${PROVINCE_NAMES[tooltip.pr]?.en} Province · ${
                        tooltip.reached ? "Reached" : "Not reached"
                      }`
                    : `${PROVINCE_NAMES[tooltip.pr]?.ne} प्रदेश · ${
                        tooltip.reached ? "पुग्यो" : "पुगेन"
                      }`}
                </text>
              </g>
            )}
          </svg>

          {year.districts === null && (
            <div className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-[#c19dad] bg-[rgba(255,250,245,.9)] p-[17px] text-center">
              <span className="inline-grid h-[33px] w-[33px] place-items-center rounded-full bg-[#f1dbe2] text-[#5c2371]">
                <MapPin size={18} />
              </span>
              <p className="mb-0 mt-[9px] text-[11px] leading-[1.4] text-[#775c6d]">
                {lang === "en" ? "District map awaiting data" : "जिल्लाको तथ्यांक पर्खाइमा"}
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-[18px] border-t border-[#ead8ce] px-[17px] pb-[15px] pt-[13px] text-[10px] font-semibold text-[#816c78] max-[620px]:gap-[10px] max-[620px]:text-[9px]">
          <span>
            <i
              className="mr-[5px] inline-block h-[9px] w-[9px] rounded-full align-[-1px]"
              style={{ background: year.accent }}
            />
            {year.mode === "prov"
              ? lang === "en"
                ? "Province reached"
                : "पुगेका प्रदेश"
              : lang === "en"
              ? "District reached"
              : "पुगेका जिल्ला"}
          </span>
          <span>
            <i className="mr-[5px] inline-block h-[9px] w-[9px] rounded-full bg-[#ead0c2] align-[-1px]" />
            {year.mode === "prov"
              ? lang === "en"
                ? "Province not reached"
                : "नपुगेका प्रदेश"
              : lang === "en"
              ? "District not reached"
              : "नपुगेका जिल्ला"}
          </span>
          {year.districts === null && (
            <span>
              <i className="mr-[5px] inline-block h-[9px] w-[9px] rounded-full border border-dashed border-[#9e778b] bg-transparent align-[-1px]" />
              {lang === "en" ? "Coverage data pending" : "पहुँचको तथ्यांक बाँकी"}
            </span>
          )}
        </div>
      </div>

      {/* Province-grouped district list */}
      <div className="mt-[23px] border-t border-[#dfc5b9] pt-5">
        <div className="relative mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              lang === "en"
                ? "Search a province or district..."
                : "प्रदेश वा जिल्ला खोज्नुहोस्..."
            }
            className="w-full rounded-xl border border-[#dfc5b9] bg-[#fffaf5] px-4 py-[13px] text-[14px] text-[#2a1831] placeholder:text-[#a68f9a] outline-none transition focus:border-[#5c2371] focus:ring-2 focus:ring-[#5c2371]/10"
          />
        </div>

        <div className="rounded-xl border border-[#ecd9cf] bg-[#fffaf5] overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7].map((pr, idx) => {
            const provinceName = PROVINCE_NAMES[pr];
            const provinceDistricts = ALL_DISTRICTS.filter(
              (code) => MAP.districts[code]?.pr === pr
            );

            const filtered = search.trim()
              ? provinceDistricts.filter((code) => {
                  const q = search.trim().toLowerCase();
                  return (
                    code.toLowerCase().includes(q) ||
                    MAP.districts[code]?.ne.includes(search.trim()) ||
                    provinceName.en.toLowerCase().includes(q) ||
                    provinceName.ne.includes(search.trim())
                  );
                })
              : provinceDistricts;

            const provinceMatchesSearch =
              search.trim() === "" ||
              provinceName.en.toLowerCase().includes(search.trim().toLowerCase()) ||
              provinceName.ne.includes(search.trim());

            if (!provinceMatchesSearch && filtered.length === 0) return null;

            const isOpen =
              openProvince === pr || (search.trim() !== "" && filtered.length > 0);
            const visibleDistricts = isOpen ? filtered : filtered.slice(0, 5);
            const moreCount = filtered.length - visibleDistricts.length;

            return (
              <div key={pr} className={idx !== 0 ? "border-t border-[#ecd9cf]" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenProvince(isOpen && !search.trim() ? null : pr)}
                  className="flex w-full items-center justify-between px-4 py-[14px] text-left transition hover:bg-[#fdf3ec]"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-['Nunito',sans-serif] text-[20px] font-black tracking-[-.02em] text-[#5c2371]">
                      {provinceName.en}
                    </span>
                    <span className="font-['Noto_Sans_Devanagari',sans-serif] text-[15px] text-[#8b7480]">
                      {provinceName.ne}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] font-semibold text-[#7d6874]">
                    <span>
                      {provinceDistricts.length} {lang === "en" ? "districts" : "जिल्ला"}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="flex flex-wrap gap-2 px-4 pb-4 pt-1">
                    {visibleDistricts.map((code) => {
                      const isReached = reached.has(code);
                      return (
                        <span
                          key={code}
                          className={`rounded-full border px-[14px] py-[7px] text-[13px] font-semibold transition ${
                            isReached
                              ? "border-[#5c2371]/30 bg-[#f1dbe2] text-[#5c2371]"
                              : "border-[#e8d6cc] bg-[#faf1ea] text-[#a68f9a]"
                          }`}
                        >
                          {code}
                        </span>
                      );
                    })}
                    {moreCount > 0 && (
                      <button
                        type="button"
                        onClick={() => setOpenProvince(pr)}
                        className="rounded-full border border-dashed border-[#c9a9b6] bg-transparent px-[14px] py-[7px] text-[13px] font-semibold text-[#5c2371] transition hover:bg-[#f1dbe2]"
                      >
                        {lang === "en" ? `+${moreCount} more` : `+${moreCount} थप`}
                      </button>
                    )}
                    {filtered.length === 0 && (
                      <span className="py-2 text-[12px] italic text-[#a68f9a]">
                        {lang === "en" ? "No districts match" : "कुनै जिल्ला मिलेन"}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CoverageStat({ value, label, accent }) {
  return (
    <span className="min-w-0 border-r border-[#ead8ce] px-[13px] pb-[11px] pt-3 last:border-r-0 max-[620px]:px-[7px] max-[620px]:py-[10px]">
      <strong
        className="block font-['Nunito',sans-serif] text-[25px] font-black leading-none tracking-[-.06em] text-[#987e8a] max-[620px]:text-[21px]"
        style={accent ? { color: accent } : undefined}
      >
        {value === null ? "—" : value}
      </strong>
      <small className="mt-[5px] block text-[8px] font-extrabold uppercase leading-[1.2] tracking-[.035em] text-[#806c78] max-[620px]:text-[7px]">
        {label}
      </small>
    </span>
  );
}

export default AnupamAbhiyan;

