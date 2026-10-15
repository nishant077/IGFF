import logo from "../assets/logo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const stripeColors = [
  "bg-(--royal-purple)",
  "bg-fuchsia-700",
  "bg-(--amber-gold)",
  "bg-(--forest-green)",
  "bg-(--soft-cream)",
  "bg-(--forest-green)",
  "bg-red-600",
  "bg-(--amber-gold)",
  "bg-gray-900",
];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Top gradient stripe */}
      <div className="flex h-2 w-full">
        {stripeColors.map((color, i) => (
          <div key={i} className={`flex-1 ${color}`} />
        ))}
      </div>

      <div className="max-w-7xl px-6 md:px-10 mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="IGFF logo" className="h-20 w-full object-contain" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t.desc}
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {t.explore}
            </span>
            <ul className="flex flex-col gap-3">
              {t.exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-sm hover:text-(--royal-purple) transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay connected */}
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {t.stayConnected}
            </span>
            <ul className="flex flex-col gap-3">
              {t.connectLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-900 font-semibold text-sm hover:text-(--royal-purple) transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
              {t.findOnline}
            </span>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-md border border-gray-200 flex items-center
                             justify-center text-gray-900 hover:border-(--royal-purple)
                             hover:text-(--royal-purple) transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-14 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-gray-900 text-xs font-bold tracking-wide uppercase">
            {t.copyright}
          </p>
          <p className="text-gray-700 text-xs font-bold tracking-wide uppercase">
            {t.hosted}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;