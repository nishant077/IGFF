// Minimal GeoJSON-like district data. In production, load from a real
// Nepal districts GeoJSON (77 districts, with `district` + `province` props).
// We ship a compact payload here; the NepalMap component accepts a
// `geojson` prop so you can swap in a full file.

export const ALL_DISTRICTS = [
  "ACHHAM","BAITADI","BAJHANG","BAJURA","DADELDHURA","DARCHULA","DOTI",
  "KAILALI","KANCHANPUR","DAILEKH","DOLPA","HUMLA","JAJARKOT","JUMLA",
  "KALIKOT","MUGU","SALYAN","SURKHET","RUKUM6","ARGHAKHANCHI","BANKE",
  "BARDIYA","DANG","GULMI","KAPILBASTU","PALPA","PYUTHAN","ROLPA",
  "RUPANDEHI","RUKUM5","NAWALPARASI5","BAGLUNG","GORKHA","KASKI",
  "LAMJUNG","MANANG","MUSTANG","MYAGDI","PARBAT","SYANGJA","TANAHU",
  "NAWALPARASI4","SINDHUPALCHOK","KABHREPALANCHOK","LALITPUR","BHAKTAPUR",
  "KATHMANDU","NUWAKOT","RASUWA","DHADING","SINDHULI","RAMECHHAP","DOLAKHA",
  "MAKAWANPUR","CHITAWAN","BARA","DHANUSHA","MAHOTTARI","PARSA","RAUTAHAT",
  "SAPTARI","SIRAHA","SARLAHI","BHOJPUR","DHANKUTA","ILAM","JHAPA",
  "KHOTANG","MORANG","OKHALDHUNGA","PANCHTHAR","SANKHUWASABHA","SOLUKHUMBU",
  "SUNSARI","TAPLEJUNG","TERHATHUM","UDAYAPUR",
];

const Y3_OUT = ["HUMLA","JUMLA","RUKUM5","RUKUM6","ILAM"];
export const Y3_IN = ALL_DISTRICTS.filter((c) => !Y3_OUT.includes(c));

export const YEARS = [
  {
    id: "y1",
    accent: "#ffbd59",
    mode: "prov",
    pennant: { ne: "वर्ष १", kw_en: "Launch", kw_ne: "सुरुवात" },
    status: {
      en: "Completed · 2022–23",
      ne: "सम्पन्न · २०२२–२३",
    },
    title: {
      en: "Launch and province meetings",
      ne: "अभियानको सुरुवात र प्रदेश बैठक",
    },
    body: {
      en: "Conceptualised after the November 2022 federal elections, Anupam Abhiyan opened with a public launch and a bus yatra. Province-level meetings followed, carrying the campaign into all seven provinces and setting the shared agenda that the next four years would run on.",
      ne: "नोभेम्बर २०२२ को संघीय निर्वाचनपछि परिकल्पना गरिएको अनुपम अभियान सार्वजनिक सुरुवात र बस यात्राबाट सुरु भयो।",
    },
    facts: [
      { n: "7", en: "provinces", ne: "प्रदेश" },
      { n: "1", en: "bus yatra", ne: "बस यात्रा" },
      { n: "5", en: "year plan set", ne: "वर्षे योजना" },
    ],
    gap: {
      en: "Dates and venues for the province-level meetings, so each one can be pinned on the map.",
      ne: "प्रदेशस्तरीय बैठकहरूको मिति र स्थान।",
    },
    districts: ALL_DISTRICTS,
    countLabel: { en: "provinces reached", ne: "प्रदेशमा पुग्यो" },
    countN: 7,
    countTotal: 7,
  },
  {
    id: "y2",
    accent: "#bc208d",
    mode: "dist",
    pennant: { ne: "वर्ष २", kw_en: "Yatras", kw_ne: "यात्रा" },
    status: { en: "Completed · 2023–24", ne: "सम्पन्न · २०२३–२४" },
    title: { en: "The Yatras", ne: "यात्राहरू" },
    body: {
      en: "The campaign went travelling. The yatras carried Anupam into all 77 districts — street-corner meetings, marches, cultural performances and open conversations with women holding local office.",
      ne: "अभियान यात्रामा निस्कियो। यात्राहरूले अनुपमलाई देशका ७७ वटै जिल्लामा पुर्‍यायो।",
    },
    facts: [
      { n: "77", en: "districts reached", ne: "जिल्लामा पुग्यो" },
      { n: "7", en: "provinces", ne: "प्रदेश" },
      { n: "3000+", en: "members in the network", ne: "सञ्जाल सदस्य" },
    ],
    districts: ALL_DISTRICTS,
    countLabel: { en: "of 77 districts", ne: "/ ७७ जिल्ला" },
    countN: 77,
    countTotal: 77,
  },
  {
    id: "y3",
    accent: "#1a785f",
    mode: "dist",
    pennant: { ne: "वर्ष ३", kw_en: "Signatures", kw_ne: "हस्ताक्षर" },
    status: { en: "Completed · 2025", ne: "सम्पन्न · २०२५" },
    title: {
      en: "Signature campaign and Rajnitik Khabardari",
      ne: "हस्ताक्षर अभियान र राजनीतिक खबरदारी",
    },
    body: {
      en: "Signatures were collected across the country and handed to the political parties, demanding 50% women's representation in the 2027 elections. The campaign reached 72 of 77 districts; Humla, Jumla, Rukum East, Rukum West and Ilam were not covered.",
      ne: "देशभरबाट संकलित हस्ताक्षर राजनीतिक दलहरूलाई बुझाइयो। अभियान ७७ मध्ये ७२ जिल्लामा पुग्यो।",
    },
    facts: [
      { n: "72", en: "districts covered", ne: "जिल्लामा पुग्यो" },
      { n: "5", en: "districts not covered", ne: "जिल्ला छुटे" },
      { n: "50%", en: "representation demanded", ne: "प्रतिनिधित्वको माग" },
    ],
    gap: {
      en: "The signature total, and the handover date and party list.",
      ne: "कुल हस्ताक्षर संख्या, बुझाइएको मिति र दलहरूको सूची।",
    },
    districts: Y3_IN,
    out: Y3_OUT,
    countLabel: { en: "of 77 districts", ne: "/ ७७ जिल्ला" },
    countN: 72,
    countTotal: 77,
  },
  {
    id: "y4",
    accent: "#5c2371",
    mode: "dist",
    live: true,
    pennant: { ne: "वर्ष ४", kw_en: "Kon Sabha", kw_ne: "कोण सभा" },
    status: { en: "Running now · 2026", ne: "चलिरहेको · २०२६" },
    title: { en: "Kon Sabha", ne: "कोण सभा" },
    body: {
      en: "Kon Sabha turns network reach into declared candidates. At the third annual convening at Padmalaya in Nawalpur (24–26 March 2026), 503 associates from 53 districts across all seven provinces came together. 27 pledged to stand; 11.34% of FPTP candidates were women.",
      ne: "कोण सभा सञ्जालको पहुँचलाई घोषित उम्मेदवारीमा बदल्छ।",
    },
    facts: [
      { n: "503", en: "associates at the convening", ne: "भेलामा सहभागी" },
      { n: "53", en: "districts represented", ne: "जिल्लाको प्रतिनिधित्व" },
      { n: "27", en: "candidacy pledges", ne: "उम्मेदवारीको प्रतिबद्धता" },
      { n: "11.34%", en: "women among FPTP candidates", ne: "प्रत्यक्षतर्फ महिला" },
    ],
    gap: {
      en: "Which 53 districts were represented, and where Kon Sabha meetings have been held so far.",
      ne: "कुन ५३ जिल्लाको प्रतिनिधित्व भयो।",
    },
    districts: [], // ← fill in to light up the map
    countLabel: { en: "of 77 districts", ne: "/ ७७ जिल्ला" },
    countN: 0,
    countTotal: 77,
  },
];

export const PILLARS = [
  {
    c: "#bc208d",
    h: { en: "Women Empowerment Fixed Deposit Fund", ne: "महिला सशक्तीकरण अक्षय कोष" },
    p: {
      en: "A standing fund that supports the movement and backs women candidates in the coming election.",
      ne: "अभियान र आगामी निर्वाचनका महिला उम्मेदवारलाई सहयोग गर्ने स्थायी कोष।",
    },
  },
  {
    c: "#eb2730",
    h: { en: "Anupam Peace Reconstruction Fund", ne: "अनुपम शान्ति पुनर्निर्माण कोष" },
    p: {
      en: "A nationwide emergency response so the network can put tangible support on the ground.",
      ne: "आवश्यक परेका बेला सञ्जालले जमिनमै ठोस सहयोग पुर्‍याउन सक्ने राष्ट्रव्यापी कोष।",
    },
  },
  {
    c: "#1a785f",
    h: { en: "Youth leadership", ne: "युवा नेतृत्व" },
    p: {
      en: "Training and workshops for Gen-Z leaders, bridging generational gaps.",
      ne: "जेन-जी नेतृत्वका लागि तालिम र कार्यशाला।",
    },
  },
  {
    c: "#ffbd59",
    h: { en: "Social media advocacy", ne: "सामाजिक सञ्जाल पैरवी" },
    p: {
      en: "Work with Freedom Studio to mobilise public pressure and raise visibility.",
      ne: "फ्रिडम स्टुडियोसँग मिलेर सार्वजनिक दबाब सिर्जना गर्ने काम।",
    },
  },
];