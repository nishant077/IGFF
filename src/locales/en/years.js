import provincemeeting from "../../assets/provincemeeting.JPG";
import provincemeeting2 from "../../assets/gallery/gallery11.JPG";
import provincemeeting3 from "../../assets/gallery/provincelevel.JPG";

import busyatra1 from "../../assets/Bus yatra/busyatra1.JPG";
import busyatra2 from "../../assets/Bus yatra/busyatra2.JPG";
import busyatra3 from "../../assets/Bus yatra/busyatra3.JPG";
import busyatra from "../../assets/publication3.JPG";

import signature from "../../assets/signature.jpg";
import signature1 from "../../assets/gallery/signaturecollection.jpg";
import signature3 from "../../assets/gallery/signature3.jpg";

import kon from "../../assets/gallery/gallery3.jpg";
import kon2 from "../../assets/gallery/konsabha.jpg";

const years = [
    {
        id: "y1",
        title: "Launch and province meetings",
        body: "The Year 1 consultations brought together feminist leaders, activists, and members to discuss feminist movement building in Nepal. Participants identified key challenges, including patriarchal norms, violence against women, unpaid care work, and limited political participation, as well as opportunities such as constitutional rights and the 33% representation mandate. The meetings strengthened solidarity, ownership of IGFF, and collective action.",
        facts: [
            { n: "7", label: "provinces" },
            { n: "1", label: "bus yatra" },
            { n: "5", label: "year plan set" },
        ],
        countLabel: "provinces reached",
        img: [provincemeeting,provincemeeting2,provincemeeting3],
    },
    {
        id: "y2",
        title: "The Yatras",
        body: `In its second year, Anupam Abhiyaan took the feminist movement directly into communities through 236 Yatras across all 77 districts of Nepal between March 2024 and March 2025. Led by local women’s groups, feminist networks, civil society organisations, and community leaders, the Yatras took the form of bus, cycle, and walking journeys, depending on the local context. The year began with a symbolic East-West Bus Yatra that brought together women and allies from diverse backgrounds and carried the slogan “84 ma Mahila pahila”. The locally led Cycle and Pad Yatras, which received no financial support from IGFF, built strong local ownership. Together, they turned Anupam Abhiyaan from a national campaign into a movement experienced on the ground, connecting women across generations, identities, and regions.`,
        facts: [
            { n: "77", label: "districts reached" },
            { n: "7", label: "provinces" },
            { n: "236", label: "Yatras" },
        ],
        countLabel: "of 77 districts",
        img: [busyatra,busyatra1, busyatra2, busyatra3],
    },
    {
        id: "y3",
        title: "Signature campaign and Rajnitik Khabardari",
        body: `
In its third year, Anupam Abhiyaan moved from awareness-raising to placing a clear demand before political parties: equal participation for women in political decision-making. Led by local organisations and Anupam associates, the Signature Campaign collected 23,851 signatures through 419 events across all 77 districts. On 25 July 2025, the 10,016 signatures gathered in Bagmati Province were handed over to seven major political parties in the Kathmandu Valley, with rally-style processions and naumati baja, and the event was covered by multiple media outlets. Alongside it, Rajnitik Khabardari encouraged women and communities to stay informed, question political actors, and hold parties accountable for inclusive representation, treating political participation as an ongoing practice rather than something limited to election day. Together, they recognised women not only as voters but as political actors, candidates, and leaders, and showed that the call for 50% women's political representation is gaining serious traction.`,
        facts: [
            { n: "77", label: "districts covered" },
            { n: "10,016", label: "signatures gathered in Bagmati Province" },
            { n: "50%", label: "representation demanded" },
        ],
        countLabel: "of 77 districts",
        img: [signature,signature1,signature3],
    },
    {
        id: "y4",
        title: "Kon Sabha",
        body: "Kon Sabha is the campaign’s current phase: corner meetings that turn network reach into declared candidates. At the third annual convening at Padmalaya in Nawalpur, from 24 to 26 March 2026, 503 associates from 53 districts across all seven provinces came together. Twenty-seven of them publicly pledged to stand in the coming elections, and co-coordination passed from Laxmi Ghalan and Stella Tamang to Saloni Pradhan Singh and Amuda Mishra. The electoral calendar had shifted after the Gen-Z Jana Andolan, and women made up only 11.34 percent of first-past-the-post candidates.",
        facts: [
            { n: "503", label: "associates at the convening" },
            { n: "53", label: "districts represented" },
            { n: "27", label: "candidacy pledges" },
            { n: "11.34%", label: "women among FPTP candidates" },
        ],
        countLabel: "districts at the convening · map data pending",
        img: [kon,kon2],
    },
    {
        id: "y5",
        title: "Election year",
        body: "The final year of the movement: equitable distribution of the Women Empowerment Fund, joint campaigning behind women candidates across party lines, and a post-election assessment of what the five years actually moved. The target the network has set itself is 50 percent women’s representation in leadership positions in the 2027 elections.",
        facts: [
            { n: "50%", label: "representation target" },
            { n: "2027", label: "general election" },
        ],
        countLabel: "not yet under way",
    },
];

export default years;