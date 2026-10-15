// Blog page text (English).
// Same shape as voices.js: one object per language, default export.
// Images, gallery and external links are language-independent and live in blogMedia.js.
// `description` is an HTML string rendered with dangerouslySetInnerHTML in BlogDetail.
// It is static content written by us, so it is safe. Never put user-submitted text in it unsanitised.

const blog = {
    // ── UI text ──
    heading: "Recent Posts",
    filterLabel: "Filter",
    searchPlaceholder: "search....",
    searchAria: "Search",
    readMore: "Read more",
    noPosts: "No posts found.",
    backToPublications: "Back to Publications",
    postNotFound: "Post not found",
    gallery: "Gallery",
    galleryAlt: "Gallery image",

    // ── Filter buttons ──
    // key = English category (used for matching posts), label = text shown on the button
    filters: [
        { key: "All", label: "All" },
        { key: "Newsletters", label: "Newsletters" },
        { key: "Position Papers and Statements", label: "Position Papers and Statements" },
        { key: "Research & Publications", label: "Research & Publications" },
        { key: "Events & Convenings", label: "Events & Convenings" },
        { key: "Campaigns & Advocacy", label: "Campaigns & Advocacy" },
        { key: "News and Updates", label: "News and Updates" },
    ],

    // ── Posts (matched to blogMedia.js by id) ──
    posts: [
        {
            id: 1,
            title: "Feminist Position Paper",
            date: "6 April 2021",
            description: `
<p><strong>A Position Paper: Feminist Leadership &amp; the Women’s Movement in Nepal</strong></p>

<h3>Preamble</h3>
<p>We believe in our inalienable and indivisible rights to equal citizenship that respects women’s individual autonomy and agency, rule of law and non-discrimination, just and equitable private and public institutions encompassing family, social, cultural, economic, legal, political and governance institutions.</p>
<p>We recognise, respect and express our deep gratitude to the glorious herstory of women’s movements in Nepal that includes Dalits, Indigenous, Ethnic Indigenous, Muslim, Single Women, Madhesis, persons with disabilities, LGBTQI +/MOGAI, Badis, Kamlaris, Halias, Sex Workers and Landless Women for their significant contributions in spearheading the call for substantive equality, non-discrimination, social justice, and dignity in all spheres of women’s lives.</p>
<p>We hereby declare ourselves a group of Inter-Generational Women’s Movement [1] to ensure women’s human rights by embracing diversity, intersectionality and inclusive democracy to redress the unjust, discriminatory structures and practices perpetuated by patriarchal institutions and the environment that supports such injustices.</p>

<h3>Chapter 1: Introduction</h3>
<p>Nepal is marked by diversity and is a cultural mosaic that blends tradition with modernism. Females constitute 52% of the total population[2]. However, this percentage is not reflective of women’s share in decision-making and access and control over resources as rightful citizens of the state. Thus, women lag behind men impacting on their increased income-earning potential, ability to bargain for resources within and outside of the household, decision-making autonomy, control over their own fertility, and participation in public life. Women’s empowerment is a pre-requisite for achieving gender equality whereby women have the power to control not only resources (human, financial, intellectual, information, agency and voice) but also control over ideology (beliefs, social norms, values and practices that influence self-determination particularly women’s control over their own bodies).</p>

<h3>Chapter 2: History of the Women’s Movement in Nepal</h3>
<p>The women’s movement in Nepal has come a long way having undergone several changes in its nature and ideology with the passing of each political epoch. Nepal has witnessed three revolutions in the last 60 years and in each one of them women have blazed the path in strengthening democracy as a way of life and promoting women’s unequivocal rights as enshrined in the Convention on Elimination of All forms of Discrimination Against Women (CEDAW), a comprehensive document that encompasses the political and civil rights as well as the social and economic rights of women. Yogmaya Neupane[3] is the first woman in recorded history to have spoken out against the oppression of women through prose and poetry during the Rana rule way back in 1900s. In the post-1951 period until 1960, as the political movement split into several strands, the women’s movement also got divided into several organizations. Nevertheless, they were able to come together on women’s issues and raised their voices for their rights to be included in the political decision-making process and be represented in the Advisory Assembly formed by the King in 1954.</p>
<p>Following the royal coup d’etat in 1960 all political parties and activities were banned. Even social organisations were not allowed to function without government permission and were closely watched for their connections to political parties. Most of the women’s organisations like the political parties had to function underground.</p>
<p>The women’s movement during the Panchayat era (1962-1990) developed along three parallel lines.</p>
<ul>
  <li>The first stream was represented by the State sponsored All Nepal Women’s Organisation, which had been established primarily to mobilise support for the Panchayat system.</li>
  <li>The second stream of the movement was led by some professionals both within and outside of the government. Inspired by the 1975 UN Declaration on women’s rights, they concentrated on research, advocacy and actions for improving women’s involvement in development.</li>
  <li>The third stream was led by the underground political movement, which was directed primarily at reinstating democracy and Constitutional Monarchy, which eventually culminated into the People’s Movement I in 1990. Many women participated in this movement led by the sister organisations of Nepali Congress (Late Mrs. Mangala Devi Singh) and United Marxist – Leninists (Late Mrs. Sahana Pradhan) as it was recognised that without democracy and human rights, achieving women’s rights was not possible. They demanded for equal property rights, equal citizenship rights and equal participation in decision-making at all levels of the state and political parties.</li>
</ul>
<p>The People’s Movement II followed the unfinished revolution in 2006 that sought a fundamental transformation of the state and society. The Nepal Constitution adopted on 20 September 2015 which embraces the principles of republicanism, federalism, secularism, and inclusiveness in order to ensure economic equality, prosperity and social justice is the result of increased political consciousness of women and men demanding for gender equality and social inclusion throughout the struggle for democracy and social justice.</p>
<p>Nevertheless, even after twenty-five years of the declaration of the Beijing Platform for Action (BPfA), which provides a strategic blueprint on how to work for gender equality and women’s empowerment, the women’s movement in Nepal remains segregated and fragmented. Thus, the Inter-Generational Women’s Movement in Nepal seeks to establish equal gender relations between men and women belonging to different categories such as caste, class, religion, sexual orientation, location, capabilities etc. to ensure that discrimination is not perpetuated and that women have equal rights as men in political, legal, social and cultural/religious spheres of life.</p>

<h3>Chapter 3: Where Are We Now?</h3>
<p>Most of the women-led civil society organisations and networks initiated during the 1990s supported the movement for democracy and human rights evolving into issue focused advocacy demanding inclusive, proportionate and meaningful participation of women at all levels and sectors of development through affirmative actions for a supportive environment and structures to advance gender equality and women’s empowerment. These demands were in line with the principles of CEDAW and BPfA. Many young and strong feminist groups have emerged advocating identity-based issues such as ethnicity, language, sexual orientation (LGBTQI+/MOGAI) and Sex Workers. Hence, these groups are coalescing into a strong feminist movement with deeper understanding of women’s oppression, encompassing the agenda of diverse groups of women and, as a consequence broadening its base as well.</p>

<h4>Achievements</h4>
<p>In recent years the education enrolment rates for girls have increased, however, the gender parity gaps in education remains the same. More girls attend public schools than boys. Enrolment of girls in higher education has also been increasing. At the bachelor’s level, women constitute 44.2% of the total student population, and 11.4% at the PhD level. They are also now going in for technical education. 15% of engineering students are girls and 35% of the girls are science and technology students.</p>
<p>Nepal’s constitutional and legal frameworks have progressively adopted gender-sensitive approaches for advancing women’s rights and gender equality. Affirmative actions adopted by the State have resulted in increased women’s representation in decision-making. The 33% reservation for women in the Parliament elections and 40 % reservation in the local elections have translated into 31% and 41% representation in the Parliament and local bodies, respectively. Likewise, reservations for women in the Nepal Army, Nepal Police and Armed Police Force have resulted in women making their debuts in the security sector. Women currently constitute only 3.2%, 5.7% and 4.9% of the three security agencies, respectively.</p>
<p>Maternal mortality rate has declined from 539 to 170 and women’s life expectancy increased from 55.5 to 70 years, surpassing male life expectancy by three years. The increase in life expectancy can be associated with better access of women to quality health care, information and related services throughout the life cycle. From mid-1990s onward Nepal has made significant progress in improving maternal health. The maternal mortality ratio has declined from 415 per 100,000 live births in 2005 to 170 in 2013. This decline can be attributed to increased access of women to health facilities. Women also have increased access to economic resources, property and micro-credit. The percentage of households in which women own land and house has increased from 10.8% in 2001 to 26% in 2011.</p>

<h4>Gaps</h4>
<p>Inspite of significant achievements, women lack human, social, financial and political capital for Nepal to deliver on its promise of inclusive growth and prosperity. Woman lag behind men both in literacy rate and education, demonstrating the high value accorded to boys and men. Women’s political participation is largely based on the special measures adopted by the electoral policy of Nepal. Women’s representation in decision-making Committees from the central to the local levels of all political parties and the Executive and Legislative branches of the State remain negligible.</p>
<p>Deeply entrenched socio-cultural norms restrict women’s mobility, participation and leadership from early on and throughout their life, owing to the gender-biased socialisation process that devalues girls and women. In all communities, girls are prepared for their future gender roles of a wife and mother. Consequently, a large number of women are still confined in unpaid care work. Furthermore, discriminatory laws against women continue to curtail fundamental human rights of women. There are aspects of the Constitution that are inconsistent with Nepal’s international treaty obligations under CEDAW and other conventions concerning women’s rights especially women’s non-negotiable rights to citizenship.</p>
<p>Nepal ranks 14 among the 15 countries with the highest global prevalence of physical intimate partner violence.[4] Various forms of violence such as rape, sexual harassment, trafficking of girls and women for commercial and sexual exploitation, harmful traditional practices such as child marriage, polygamy, bonded labour, dowry deaths, accusations of witchcraft, deuki (offering young girls to temples for ceremonial purposes), jhuma (enforced nunhood), chhaupadi (menstrual seclusion) are still in practice despite of laws that prohibit them. Among different forms of violence, domestic violence is predominant. Violence against women and girls (VAWG) also has negative outcomes for girls and women, which hinder their ability to become active, pursue channels for career development, vocation or business enterprise. Emerging deterrents and risks for girls and women are there existing vulnerability to rape, cybercrime, rights to foreign employment and female foeticide[5]. Out of the total paid employees in Nepal, only 26% are women. Only 8.3 % of women in the labour force are paid. Majority of the women are concentrated in the informal sector that is not protected by legislation and safety nets.</p>

<h3>Chapter 4: Rejuvenating the Feminist Leadership in Nepal: Unfinished Agenda</h3>
<p>The feminist movement has diversified to encompass the voices of youths, women, and excluded groups, which is a growing powerful force. But women from Adhivasi/Janjati, Dalit, Madhesi, Muslims and, other marginalised groups such as LGBTQI+/MOGAI, sex workers are yet to be part of the mainstream women’s movement. Over the years it has been realised that there is increasing polarisation within the women’s movement on the basis of caste, class other diversities and particularly political ideologies. Although during these past years, the women’s movement has strengthened issue-based movements, the impact is yet to correspond to the collective advancement for substantive equality (equality in results).</p>
<p>Thus, our feminism is a herstory of struggle against the hegemonic malestream that has denied agencies of women and girls by stripping them of their dignity and rights. We aim to re-write this narrative from the standpoint of women’s personal experiences to reclaim our inherent rights to equality of gender and that the unpaid work of women in the domestic sphere, including reproductive rights, sexuality and sexual orientation, choices and actions needs to be accorded equal political priority. The feminist movement in Nepal examines the structures of women’s oppression to redress the historical disadvantages that girls and women of Nepal have been subjected to. In doing so, we acknowledge and celebrate our differences both among women as well as men belonging to various groups/categories to be able to pursue a life of equality, peace, liberty and live a life that is free from all forms of violence and discrimination.</p>
<p>Building on the many achievements of the women’s movement in Nepal and being mindful of the lacunas in achieving gender equality and women’s empowerment, the Inter-Generational women’s Movement in Nepal with support from UN Women organised two Thought Workshops in December 2017 and March 2019. The objectives of the “Thought Workshops” were to convene a dialogue with women leaders from diverse backgrounds and ages to reflect on the strengths, weaknesses, gaps and challenges of the women’s movement and start a dialogue to generate evidence for collaborative actions on common issues of equality and empowerment. One of the significant recommendations of the Second Thought Workshop was the formulation and finalisation of a Feminist Position Paper, which can be owned and endorsed at the national level. This Position Paper would enable and strengthen the women’s movement in Nepal and gain clarity on its positioning.</p>
<p>On the eve of declaration of the BPfA 25 years ago, the Inter-Generational women’s Movement is deeply concerned with the resurgence of fundamentalism[6] manifested in the form of nationalism and populism[7] in Nepal undermining the core principles of democracy that has a backlash on women’s rights. Therefore, as Nepali feminists we take a stand on the following:</p>
<ul>
  <li>We believe in women’s inherent rights to become sovereign and equal citizens of Nepal because the Constitution demonstrates how gender equality can be sacrificed in the name of protecting idealised patriarchal social and political values. This is demonstrated by not granting citizenship through motherhood, which is the assertion that mothers are not citizens in their own rights but that they create citizens.</li>
  <li>We enforce the entitlement to live a life free from violence and the right to be protected from violence. This means that the systems of the State and leaders within those systems need to be accountable by complying with equality measures which includes responsible attitudinal shifts and maintains a focus on the individual complainant and responses to ensure the complainants’ access to the much needed services – legal, medical, counseling, shelters, rehabilitation and protective measures. This is critical for ensuring women’s right to dignified life that are free from violence, discrimination, exploitation, subordination, suppression and humiliation.</li>
  <li>We acknowledge the agency and the largely undocumented Nepali “Her Story” which has so far been ignored to advance the rights of all women by eliminating oppressive patriarchal structures and practices that devalue girls and women in all their diverse identities as born or by choice.</li>
  <li>We support nurture and care for all other diverse Nepali feminists and practicing self-care, mutual respect and feminist solidarity based on open and frank discussions.</li>
  <li>We advocate professionalism, accountability, transparency and inclusive, equitable and egalitarian governance structures that fosters fair and equal treatment of girls, women and all other disenfranchised groups in all their diverse identities as born or by choice in their rights to livelihoods, security, facilities and services.</li>
  <li>We create spaces that can inspire, uplift and empower all at all levels by critically assessing periodically the impacts of feminists’ organisations and their roles in the women’s movement.</li>
  <li>We commit to observe non-violence to help and build non-violent families, communities, State and all relevant structures by promoting peace and inclusiveness. This will enable all to be equally eligible to represent and participate in all political processes and decision-making of nation building to achieve gender equality and women’s empowerment.</li>
  <li>We promote an alternative leadership model based on the principles of collective leadership, which is devoid of familial, nepotism, favoritism, discrimination, non-hierarchical, is non-matronising.</li>
  <li>We commit to dismantle patriarchy in all its manifestations in Nepal that has confined women to their reproductive functions limiting their mobility, access and control over resources, sexuality and social, religious, legal, economic and political structures of production and decision-making.</li>
  <li>We commit to protect the legacy of our feminist ancestors who made numerous sacrifices, so that we can exercise greater autonomy by reminding ourselves of our duty to defend and respect the rights of all women and other disfranchised groups.</li>
  <li>We believe in freedom of choice and autonomy regarding bodily integrity issues including reproductive rights, abortion, sexual identity and sexual orientation.</li>
  <li>We nurture, mentor and provide opportunities for young feminists in a non-matronising manner and ensure necessary support and care for senior feminists.</li>
</ul>

<h3>References</h3>
<ul>
  <li>2011 Census on Housing and Population</li>
  <li>A Charter of Women’s Demands, passed by a national conference of Women Human Rights Defenders and submitted to the Prime-Minister, WOREC, May 20, 2008</li>
  <li>Acharya, Meena, Political Participation of Women in Nepal in Women and Politics Worldwide (Edt.) by Barbara Nelson and Nazma Chowdhary, Yale University Press, New Haven London, 1994</li>
  <li>African Feminist Charter <a href="https://www.africanfeministforum.com" target="_blank" rel="noopener noreferrer">www.africanfeministforum.com</a></li>
  <li>ANWESI, Status and Dimensions of Violence against Women, Reality Revealed, and A year book on Violence Against women, WOREC, 2008</li>
  <li>Asmita, Nepali Feminist Quarterly, Asmita Publications, Kathmandu, Number 68, September 2009</li>
  <li>Batliwala, Srilatha, Clearing the Conceptual Cloud, 2008</li>
  <li>Dalit Feminist Organisation (FEDO), 2007</li>
  <li>Fathima Foundation Profile of Organisation, November 17, 20</li>
  <li>Gender Equality and Empowerment of Women, UNFPA, Kathmandu, 2007</li>
  <li>Giri, Manjula Women’s Struggle for Pro-Democracy Revolutionary Movement in Nepal, Gargi Monthly, Kathmandu, 2000</li>
  <li>NDHS 2016</li>
  <li>Pradhan, Bina, Women’s Autonomy and Reproductive Health, PhD Dissertation, Cornell University, Ithaca, NY, USA, 1995</li>
  <li>Progress of Women in Nepal 1995-2015, Substantive Equality: Non-negotiable, SAHAVAGI, Didi Bahini, Feminist Dalit Organisation, 2015</li>
  <li>Ready to Learn, Ready to Thrive: Country Brief Nepal 2019, Key Messages, World Bank 2019</li>
  <li>Shawna Wakefield, Transformative &amp; Feminist Leadership for Women’s Rights. Oxfam America Research Backgrounder, 2017</li>
  <li>Sob, Durga, Women’s Movement in Nepal and Dalit Women</li>
  <li>Solotaroff, J., and R. Pande, Violence Against Women and Girls: Lessons from South Asia, The World Bank, 2014</li>
  <li>Sustainable Development Goals, Status and Roadmap: 2016-2030</li>
  <li>Tamang, Seira (2010), Widening Focus on Women’s Rights, My Republica, January 2, 2010</li>
</ul>

<h3>Footnotes</h3>
<ul>
  <li>[1] Our definition of feminism stems from the fact that although there are different strands of feminism, our experience affirms that caste, class, ethnicity and religious minorities oppression may be related to oppression based on sex, gender and sexuality but they are not the same. Sex and gender oppression is grounded in the ideology of male supremacy no matter what caste, class ethnicity and religious minorities they belong to, which is upheld by the universal patriarchal system and backed by religion. Under the patriarchal system, the separation of the private and personal life from public and political life has confined women to their reproductive functions limiting their mobility, access and control over resources, sexuality and social, religious, legal, economic and political structures of production and decision-making.</li>
  <li>[2] 2011 Census on Housing and Population</li>
  <li>[3] <a href="https://wikivisually.com/wiki/Yogmaya_Neupane" target="_blank" rel="noopener noreferrer">https://wikivisually.com/wiki/Yogmaya_Neupane</a></li>
  <li>[4] Solotaroff, J., and R. Pande, Violence Against Women and Girls: Lessons from South Asia, The World Bank, 2014, p. 35</li>
  <li>[5] The number of girls are decreasing in 12 districts, the Population and Housing Census 2011</li>
  <li>[6] Strict following of the basic principles or discipline</li>
  <li>[7] A political approach that strives appeal to ordinary people who feel that the concerns are disregarded by established elites</li>
</ul>
`,
        },
        {
            id: 2,
            title: "The 10th Bi-Annual Newsletter is here!",
            date: "8 Jul 2026",
            description: `
<p>This edition captures the highlights of our collective journey over the past six months. Inside, you’ll find reflections and voices from our SC members and associates, updates on key organizational developments, Kon Sabha discussions, our Zoom interaction series, and major campaigns.</p>
<p>We hope you enjoy reading this edition and welcome your feedback, reflections, and suggestions.</p>
<p><strong>Subscribe to receive future editions directly in your inbox and stay connected with our ongoing journey.</strong></p>
<p><a href="https://mailchi.mp/96abbf2dd0ef/qh20phu4oa-10986466" target="_blank" rel="noopener noreferrer">Click here to read the 10th Bi-Annual Newsletter.</a></p>
`,
        },
        {
            id: 3,
            title: "In this issue:",
            date: "4 Jan 2026",
            description: `
<p>Stay informed with the latest updates and activities from Anupam Abhiyan. This edition features insights from our Steering Committee members, highlights from major events and Zoom discussions, and key developments and announcements.</p>
<p>Read the full 9th Bi-Annual Newsletter online using the link below, and subscribe to receive future editions automatically. We welcome your reflections, feedback, and continued engagement.</p>
<p><a href="https://mailchi.mp/96abbf2dd0ef/qh20phu4oa-10986466" target="_blank" rel="noopener noreferrer">Click here to read the 9th Bi-Annual Newsletter</a></p>
`,
        },
        {
            id: 4,
            title: "Anupam Abhiyan: A Feminist Journey Toward Justice, Power, and Dignity in Nepal",
            date: "13 May 2025",
            description: `
<p><strong>Anupam Abhiyan</strong> is a visionary and transformative nationwide women’s movement initiated by the Inter-Generational Feminist Forum (IGFF)—a dynamic collective uniting feminists across Nepal. Conceptualized by SC member Rita Thapa, the campaign was launched in the aftermath of the November 2022 elections as a five-year initiative (2022–2027), redefining what it means to organize, empower and mobilize for gender justice in Nepal’s political and social landscapes.</p>

<h3>A Vision Rooted in Feminist Solidarity</h3>
<p>At the heart of Anupam Abhiyan is a call for inclusive and participatory change. Born out of reflections on how to deepen the visibility and impact of Nepal’s feminist movement, the campaign emphasizes innovation, inclusivity and collective strength. Its foundational vision is anchored in the belief that justice and power must be brought together—a sentiment inspired by philosopher Blaise Pascal’s assertion that “whatever is just must be powerful, and whatever is powerful must be just.”</p>
<p>Guided by these principles, Anupam Abhiyan fosters a holistic feminist movement that seeks to dismantle oppressive structures and build a society grounded in dignity, equity, and care.</p>

<h3>Framework for Transformative Change</h3>
<p>Anupam Abhiyan draws inspiration from the feminist strategy for transformative frameworks, focusing on achieving sustainable and long-lasting change that fundamentally challenges and shifts power, as well as systemic and structural inequalities.</p>
<ul>
  <li>If we understand where the power lies and how it works,</li>
  <li>And we use feminist strategies: self-awareness, building solidarity and shifting power,</li>
  <li>Then we can redistribute power into the hands of movements and collectives,</li>
  <li>So long-lasting, sustainable change for gender equality is achieved.</li>
</ul>
<p>Since power is the key to understanding and creating change, the movement uses the power cube model to understand how power operates at different levels:</p>
<ul>
  <li><strong>Visible power</strong> – such as power within political parties and leadership.</li>
  <li><strong>Hidden power</strong> – including obstacles and challenges faced by women and marginalized communities in entering political spaces.</li>
  <li><strong>Invisible power</strong> – found in structures, systems, social norms, and the privileges one group holds over another.</li>
</ul>
<p><em>Inclusive of male allies engaging in feminist leadership, solidarity, and transformation.</em></p>
<p><em>Source: Harvey, Rowan, and Chloe Safier. Transformative Change for Gender Equality: Learning from Feminist Strategies. Kathmandu: Friedrich-Ebert-Stiftung, Nepal Office, 2021.</em></p>
<p>Within this framework, Anupam Abhiyan seeks to enable collective action by women, trans and non-binary people through a strong and resilient feminist network and movement to shift power. These dimensions converge to foster change that is deep, sustainable, and reflective of Nepal’s diverse lived realities.</p>
<p>To support this vision, Anupam Abhiyan employs three interlinked feminist strategies:</p>
<ul>
  <li><strong>Empathy and Self-Reflection:</strong> Centering care, healing, and thoughtful leadership.</li>
  <li><strong>Building Solidarity:</strong> Emphasizing intersectionality, intergenerational learning, and broad alliances.</li>
  <li><strong>Shifting Power:</strong> Using rights-based, participatory approaches that challenge patriarchal structures.</li>
</ul>
<p>While this framework centers the collective action of women, trans, and non-binary people, it also creates space for male allies to engage deeply—with empathy, humility and commitment to justice as part of building solidarity and shifting power.</p>

<h3>Symbolic Journeys, Collective Power</h3>
<h4>The East-West Yatra: A Symbol of Unity</h4>
<p>Held from March 18 to 22, 2023, the East-West Bus Yatra was a landmark event in Anupam Abhiyan’s journey. Traversing across the country and culminating at Padmalaya (Nagarik Aawaz), this symbolic journey brought together women, men, individuals of diverse gender identities, people with disabilities, and members of the LGBTIQ+ community. It was not only a movement through geography but also history, memory, and solidarity.</p>
<h4>236 Yatras Across 77 Districts</h4>
<p>Counting from the start of its second year in March 2024 to March 2025, the campaign had successfully organized 236 Anupam Yatras across 77 districts using various forms of travel—on foot, by bicycle, in tempos, and buses. These localized journeys served as bridges between the movement and communities at every level—<strong>provincial, district, municipal, and ward</strong>—fostering grassroots dialogue, solidarity and participation. Each Yatra carries a clear message: <strong>Our collective presence is our collective weapon against injustice.</strong></p>

<h3>A Movement Beyond Advocacy</h3>
<p>Anupam Abhiyan reimagines activism not only as advocacy but as philanthropy of presence and purpose. It transcends the traditional idea of giving by nurturing trust, empathy, and a shared commitment to justice.</p>
<h4>Key Innovations and Contributions</h4>
<ul>
  <li><strong>Women’s Empowerment Fund:</strong> Supporting community-led actions and economic dignity.</li>
  <li><strong>Digital Platforms:</strong> Offering safe spaces for learning, reflection, and personal growth.</li>
  <li><strong>Creative Expressions:</strong> Mobilizing art, song, poetry, and dance as tools for transformation.</li>
  <li><strong>Inclusive Engagement:</strong> Actively involving marginalized voices and encouraging men’s self-actualization in feminist activism.</li>
</ul>
<p>This inclusive approach has established Anupam Abhiyan not only as a campaign—but as a <strong>collective awakening</strong>.</p>

<h3>Reframing Development and Power</h3>
<p>The campaign emphasizes a paradigm shift in how development is envisioned in Nepal. Moving away from dependency models, Anupam Abhiyan advocates for:</p>
<ul>
  <li><strong>Self-reliance</strong> over donor dependency</li>
  <li><strong>Dignity</strong> over charity</li>
  <li><strong>Justice</strong> over concession</li>
  <li><strong>Power with</strong>, not <strong>power over</strong></li>
</ul>
<p>It holds accountable those who sustain inequality for personal or political gain and draws inspiration from Gandhian ideals—asserting that <strong>“there is enough in the world for everyone’s need, but not for everyone’s greed.”</strong></p>

<h3>Toward 2027 and Beyond</h3>
<p>As Anupam Abhiyan enters its third year, the movement continues to strengthen and grow. With a growing network of allies and associates, the campaign is driving forward a movement where women’s political agency, community resilience, and intersectional inclusion are central to Nepal’s future.</p>
<p>It is a historical five-year-long movement in the building—a global legacy in the making. A movement that learns from the past, engages the present, and envisions a future where justice and power are inseparable, and where no one is left behind.</p>
<p><strong>Anupam Abhiyan is a Nepali women’s movement. It is a collective journey—one that nurtures dignity, dares to challenge, and dreams of a just and powerful society.</strong></p>
<p><em>For more information and updates, visit the <a href="https://igffnepal.org/" target="_blank" rel="noopener noreferrer">IGFF official website</a> or follow <a href="https://www.instagram.com/anupam.abhiyan/?hl=en" target="_blank" rel="noopener noreferrer">Anupam Abhiyan on Instagram</a>.</em></p>
<p>Compiled by: Kripa Rana Shahi with the IGFF Secretariat</p>
`,
        },
        {
            id: 5,
            title: "Strategy for Women’s Substantive Representation",
            date: "26 August 2022",
            description: `
<p>On August 3, 2022, a webinar titled “Upcoming General Election-2022: Strategy for Women’s Substantive Representation” was held in anticipation of the upcoming election. Dr. Chandra Bhadra, an emeritus professor of gender studies at Tribhuvan University, served as our keynote speaker. She has provided the government of Nepal and numerous other national/international entities with her academic and professional skills in Women in Development (WID) and Gender and Development (GAD) for the past forty years.</p>
<p>She stated that the stress of living in a patriarchal environment is still felt by women in Nepal. She went on to explain the importance of equitable and proportional political engagement for women. Instead of holding up for scrutiny the types of discrimination and lack of chances that have underprepared women for equal participation, she concentrated on the fact that, far too often, their capacity to participate in Parliament at quota levels has been questioned.</p>
<p>Participants in the floor discussion express their opinions that the time is now to take action. In order to address issues of exclusion, marginalization, and sustainable development, women must have significant representation. In total, 78 IGFF members from all seven provinces participated in this webinar.</p>
`,
        },
        {
            id: 6,
            title: "Community Safety Net update (IGFF Nepal CSN)",
            date: "29 April 2022",
            category: "News and Updates",
            description: `
<p>An orientation program on community safety network was organized at IGFF secretariat on 27 April. A total of 16 members &amp; staffs from IGFF, Center for Dalit Women Nepal (CDWN) and Nepal Disabled Women Association (NDWA) participated in the program. The program was facilitated by Rita Thapa.</p>
<p>Are you interested in becoming involved in IGFF Nepal CSN? The biggest benefit of the safety nets is that they are for the well-being of everyone. If you are interested to volunteer then please contact us to see how you can help!</p>
`,
        },

        {
    id: 7,
    title: "IGFF Annual Convening 2026",
    date: "23 April 2026",
    category: "News and Updates",
    description: `
<p>The Intergenerational Feminist Forum (IGFF) convened its third nationwide annual meeting of the Anupam Abhiyan campaign from 24 to 26 March 2026 at Padmalaya, Nawalpur district. The campaign, which entered its third year in 2025, focuses on ensuring women’s political participation at all levels of the state. A significant milestone in 2025 was the coordinated signature handover, urging political parties to commit to 50 percent women’s representation in the 2027 elections. However, Nepal’s political trajectory shifted unexpectedly due to the Gen-Z Jana Andolan, a youth-led movement that disrupted electoral timelines and prompted early elections, highlighting the persistent underrepresentation of women, who constituted only 11.34 percent of First-Past-the-Post candidates.</p>

<p>The convening brought together 503 associates from 53 districts across all seven provinces of Nepal, reflecting the diversity and breadth of the IGFF network. The opening day began with registration, settlement, and refreshments, followed by a welcome session hosted by the Nagarik Aawaz–Padmalaya team under Executive Director Dr. Susan Risal. Participants were introduced to the vision of Padmalaya as a peacebuilding center, followed by motivational addresses and cultural performances by local youth. A key highlight was the formal leadership handover ceremony, where new co-coordinators Saloni Pradhan Singh and Amuda Mishra assumed responsibilities from outgoing co-coordinators Laxmi Ghalan and Stella Tamang. Reflections from both outgoing and incoming leaders emphasized continuity, shared responsibility, and a renewed commitment to feminist leadership. The day concluded with an informal naumati baja session, which encouraged bonding and collective celebration.</p>

<p>The second day combined reflective practices, dialogue, and political analysis. Morning activities included yoga led by Doma Bajracharya and a puja around the newly consecrated stupa led by Steering Committee member Stella Tamang. Participants shared their experiences and reflections on recent elections and the broader political environment, emphasizing that women and marginalized groups must actively claim rights rather than wait for them. Discussions highlighted the progress of marginalized groups, including Madhesi women, while noting contradictions in feminist spaces where advocacy often fails to translate into personal or political action. Participants expressed the importance of solidarity across social and political differences and recognized that collective support is essential for women to enter and succeed in political arenas.</p>

<p>The IGFF Secretariat presented an overview of its work over the past year, highlighting support provided to women candidates and the organization’s commitment to feminist principles and transparency. Reflections led by Dr. Susan Risal examined structural barriers that limit women’s participation in direct elections despite constitutional provisions, while Freedom Studio showcased visual documentation of IGFF’s advocacy efforts, emphasizing the importance of media and storytelling in sustaining the movement.</p>

<p>Plenary sessions provided deeper political and strategic engagement. Gen Z youth leaders from the recent people’s movement, moderated by Dr. Susan Risal, analyzed the distribution of power, control of resources, and systemic corruption in Nepal. They highlighted challenges such as restrictions on communication, social media bans, and insufficient voter awareness, which collectively undermine democratic participation. The discussion emphasized the need for transparency, informed voting, and active civic engagement. In a parallel plenary session, women candidates shared firsthand experiences of contesting elections, illustrating challenges including logistical barriers in rural and mountainous constituencies, lack of voter education, limited financial resources, and pervasive gender bias. The session underscored the importance of economic independence, training, and mentorship, as well as the need for positive solidarity among women across political lines. Expert analysis by Dr. Indra Adhikari contextualized these experiences and offered strategic insights for future participation.</p>

<p>The final day focused on strategy, planning, and action-oriented commitments. Province-wise group discussions allowed participants to critically assess their readiness for political engagement and develop concrete strategies for contesting elections. Twenty-seven participants publicly pledged their candidacy in upcoming elections, signaling a significant step from advocacy to action. The discussions emphasized building trust with constituencies and political parties, developing leadership and technological skills, enhancing economic independence, and strengthening networks to include marginalized communities such as Dalits, Muslims, and LGBTQI individuals. Participants collectively affirmed the long-term goal of achieving 50 percent women’s representation in leadership positions in the 2027 elections.</p>

<p>Cultural activities on the final day, including province-wise parades, traditional attire, performances, and collective slogan chanting, reinforced solidarity, community ownership, and mutual learning among participants. The closing session, led by co-coordinator Saloni Pradhan Singh with support from Dr. Susan Risal, provided space for participants to reflect on key takeaways and recommendations. Discussions emphasized translating solidarity into action, challenging structural barriers, supporting women candidates across social and political divides, and recognizing diverse contributions within the movement. The closing remarks also acknowledged the extensive coordination and commitment of the IGFF Secretariat, Steering Committee members, Padmalaya and Nagarik Aawaz teams, Tewa, and volunteers, whose collective efforts ensured an inclusive, well-organized, and impactful convening.</p>

<p>The IGFF Annual Convening 2026 successfully strengthened political awareness, deepened feminist solidarity, and reinforced a shared commitment to advancing women’s leadership in Nepal. By fostering dialogue, capacity-building, strategic reflection, and actionable commitments, the convening laid a strong foundation for sustained feminist leadership, increased women’s political participation, and the continued expansion of the Anupam Abhiyan movement in the years ahead.</p>
`,
},
{
    id: 8,
    title: "Evaluation of feminist songs in progress by our esteemed judges",
    date: "4 Feb 2024",
    category: "News and Updates",
    description: `
<p>The judges are actively engaged in the evaluation of feminist songs: Shrawan Mukarung, Jhuma Limbu, and Aavaas. Dr. Suman S Thapa is missing in this picture. Their generosity and dedicated efforts, offering specialized talents, are truly commendable. The IGFF family takes this opportunity to express our sincere appreciation to all four judges.</p>
`,
},
    ],
};

export default blog;