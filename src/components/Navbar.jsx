import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useRouter } from "../router";
import logo from "../assets/logo.jpg";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

/**
 * Sliding pill toggle for ENG / नेपाली.
 * variant="light" -> white navbar (desktop)
 * variant="dark"  -> purple mobile overlay
 */
function LangToggle({ lang, onToggle, variant = "light" }) {
    const isNepali = lang !== "en";
    const isDark = variant === "dark";

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isNepali}
            aria-label="Toggle language"
            onClick={onToggle}
            data-ocid="nav.lang_button"
            className={`relative grid grid-cols-2 items-center h-9 w-[112px] shrink-0 cursor-pointer select-none rounded-full p-0.5 border-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--magenta-rose) ${
                isDark
                    ? "bg-white/10 border-white/40"
                    : "bg-black/5 border-(--magenta-rose)"
            }`}
            style={{ fontFamily: "Inter" }}
        >
            {/* Sliding thumb */}
            <span
                aria-hidden="true"
                className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-(--magenta-rose) shadow-md transition-transform duration-300 ease-in-out"
                style={{
                    transform: isNepali ? "translateX(100%)" : "translateX(0)",
                }}
            />

            {/* Labels */}
            <span
                className={`relative z-10 text-center text-xs font-bold tracking-wide transition-colors duration-300 ${
                    !isNepali
                        ? "text-white"
                        : isDark
                        ? "text-white/80"
                        : "text-(--near-black)"
                }`}
            >
                ENG
            </span>
            <span
                className={`relative z-10 text-center text-xs font-bold transition-colors duration-300 ${
                    isNepali
                        ? "text-white"
                        : isDark
                        ? "text-white/80"
                        : "text-(--near-black)"
                }`}
            >
                नेपाली
            </span>
        </button>
    );
}

export default function Navbar() {
    const { path } = useRouter();
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang].navbar;

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdownIdx, setOpenDropdownIdx] = useState(null);
    const [openMobileAccordionIdx, setOpenMobileAccordionIdx] = useState(null);
    const dropdownTimeout = useRef(null);

    // Build nav links from translations so labels update with language
    const navLinks = [
        {
            label: t.about,
            to: "/about",
            children: [{ label: t.whoWeAre, to: "/about/who-we-are" }],
        },
        { label: t.anupamAbhiyan, to: "/anupam-abhiyan" },
        {
            label: t.publications,
            to: "/publications",
        },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close the mobile menu when the route changes
    useEffect(() => {
        if (mobileOpen) {
            setTimeout(() => setMobileOpen(false), 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        if (!mobileOpen) setOpenMobileAccordionIdx(null);
    }, [mobileOpen]);

    // Close the mobile menu if the viewport grows to desktop size (rotation / resize)
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const handleChange = (e) => {
            if (e.matches) setMobileOpen(false);
        };
        mq.addEventListener("change", handleChange);
        return () => mq.removeEventListener("change", handleChange);
    }, []);

    // Close the mobile menu with Escape
    useEffect(() => {
        if (!mobileOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [mobileOpen]);

    const isActive = (to) => Boolean(to && path === to);
    const isParentActive = (link) =>
        isActive(link.to) || (link.children?.some((c) => isActive(c.to)) ?? false);

    const openDropdown = (idx) => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setOpenDropdownIdx(idx);
    };
    const closeDropdownDelayed = () => {
        dropdownTimeout.current = setTimeout(() => setOpenDropdownIdx(null), 150);
    };
    const closeMenu = () => setMobileOpen(false);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-60 transition-all duration-300"
                style={{
                    backgroundColor: "white",
                    boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
                }}
            >
                <nav className="px-4 sm:px-6 max-w-7xl mx-auto lg:px-10 h-16 flex items-center justify-between gap-3">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center shrink-0 hover:scale-105 transition-transform duration-200"
                        data-ocid="nav.link.1"
                    >
                        <img
                            src={logo}
                            alt="IGFF"
                            className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-none object-contain"
                        />
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-5 xl:gap-7">
                        {navLinks.map((link, i) =>
                            link.children ? (
                                <div
                                    key={link.to || link.label || i}
                                    className="relative"
                                    onMouseEnter={() => openDropdown(i)}
                                    onMouseLeave={closeDropdownDelayed}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdownIdx((prev) => (prev === i ? null : i))}
                                        className={`flex items-center gap-1 font-sans text-sm font-bold tracking-wide relative transition-colors duration-200 hover:text-(--feminist-wisdom) ${isParentActive(link)
                                            ? "text-black"
                                            : "text-(--near-black)"
                                            }`}
                                        aria-haspopup="true"
                                        aria-expanded={openDropdownIdx === i}
                                        data-ocid={`nav.link.${i + 2}`}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={14}
                                            className="transition-transform duration-200"
                                            style={{
                                                transform: openDropdownIdx === i
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)",
                                            }}
                                        />
                                        <span
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-200"
                                            style={{
                                                backgroundColor: "var(--magenta-rose)",
                                                transform: isParentActive(link)
                                                    ? "scaleX(1)"
                                                    : "scaleX(0)",
                                                transformOrigin: "left",
                                            }}
                                        />
                                    </button>

                                    {openDropdownIdx === i && (
                                        <div
                                            className="absolute left-0 top-full mt-3 min-w-[180px] rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5"
                                            style={{ fontFamily: "Inter" }}
                                        >
                                            {link.to && (
                                                <Link
                                                    to={link.to}
                                                    className={`block px-4 py-2 text-sm font-semibold no-underline transition-colors duration-150 hover:bg-black/5 hover:text-(--magenta-rose) ${isActive(link.to)
                                                        ? "text-(--magenta-rose)"
                                                        : "text-(--near-black)"
                                                        }`}
                                                >
                                                    {t.whatWeDo}
                                                </Link>
                                            )}
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.to}
                                                    to={child.to}
                                                    className={`block px-4 py-2 text-sm font-semibold no-underline transition-colors duration-150 hover:bg-black/5 hover:text-(--magenta-rose) ${isActive(child.to)
                                                        ? "text-(--magenta-rose)"
                                                        : "text-(--near-black)"
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`font-sans text-sm font-bold tracking-wide relative no-underline transition-colors duration-200 hover:text-(--magenta-rose) ${isActive(link.to)
                                        ? "text-(--magenta-rose)"
                                        : "text-(--near-black)"
                                        }`}
                                    data-ocid={`nav.link.${i + 2}`}
                                >
                                    {link.label}
                                    <span
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-200"
                                        style={{
                                            backgroundColor: "var(--magenta-rose)",
                                            transform: isActive(link.to) ? "scaleX(1)" : "scaleX(0)",
                                            transformOrigin: "left",
                                            fontFamily: "Inter",
                                        }}
                                    />
                                </Link>
                            )
                        )}

                        {/* Language toggle */}
                        <LangToggle lang={lang} onToggle={toggleLang} />

                        <Link
                            to="/contact-us"
                            className="font-sans text-sm font-bold px-5 py-2 rounded-md transition-all duration-200 no-underline hover:brightness-110 border-2 border-(--magenta-rose) bg-(--magenta-rose) text-white hover:bg-transparent hover:text-(--magenta-rose)"
                            style={{ fontFamily: "Inter" }}
                            data-ocid="nav.contact_button"
                        >
                            {t.reachOut}
                        </Link>
                    </div>

                    {/* Hamburger (44px tap target) */}
                    <button
                        className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-md transition-colors"
                        style={{ color: "var(--magenta-rose)" }}
                        onClick={() => setMobileOpen(true)}
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                        data-ocid="nav.hamburger_button"
                    >
                        <Menu size={24} />
                    </button>
                </nav>
            </header>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-[100] flex flex-col"
                    style={{
                        backgroundColor: "var(--royal-purple)",
                        paddingTop: "env(safe-area-inset-top, 0px)",
                        paddingBottom: "env(safe-area-inset-bottom, 0px)",
                    }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                >
                    <div className="flex items-center justify-between px-4 sm:px-6 h-16 shrink-0">
                        <Link to="/" onClick={closeMenu} className="flex items-center no-underline">
                            <img
                                src={logo}
                                alt="IGFF"
                                className="h-12 w-12 sm:h-20 sm:w-20 object-contain"
                            />
                        </Link>
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Language toggle (mobile) */}
                            <LangToggle lang={lang} onToggle={toggleLang} variant="dark" />
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="w-11 h-11 -mr-2 flex items-center justify-center text-white"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* my-auto centres the links when they fit, and lets the list scroll from the top when they don't */}
                    <nav className="flex flex-col flex-1 px-6 sm:px-8 py-6 overflow-y-auto">
                        <div className="my-auto flex flex-col gap-5 sm:gap-6">
                            {navLinks.map((link, i) =>
                                link.children ? (
                                    <div key={link.to || link.label || i} className="flex flex-col gap-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenMobileAccordionIdx((prev) => (prev === i ? null : i))
                                            }
                                            className="flex items-center gap-3 font-serif text-3xl sm:text-4xl font-semibold text-left break-words"
                                            style={{
                                                fontFamily: "Nunito",
                                                color: isParentActive(link)
                                                    ? "var(--amber-gold)"
                                                    : "rgba(255,255,255,0.9)",
                                            }}
                                            aria-expanded={openMobileAccordionIdx === i}
                                            data-ocid={`nav.link.${i + 2}`}
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={24}
                                                className="shrink-0 transition-transform duration-200"
                                                style={{
                                                    transform: openMobileAccordionIdx === i
                                                        ? "rotate(180deg)"
                                                        : "rotate(0deg)",
                                                }}
                                            />
                                        </button>
                                        {openMobileAccordionIdx === i && (
                                            <div className="flex flex-col gap-1 pl-4">
                                                {link.to && (
                                                    <Link
                                                        to={link.to}
                                                        onClick={closeMenu}
                                                        className="font-sans text-lg sm:text-xl font-medium no-underline py-2"
                                                        style={{
                                                            fontFamily: "Inter",
                                                            color: isActive(link.to)
                                                                ? "var(--amber-gold)"
                                                                : "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        {t.whatWeDo}
                                                    </Link>
                                                )}
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.to}
                                                        to={child.to}
                                                        onClick={closeMenu}
                                                        className="font-sans text-lg sm:text-xl font-medium no-underline py-2"
                                                        style={{
                                                            fontFamily: "Inter",
                                                            color: isActive(child.to)
                                                                ? "var(--amber-gold)"
                                                                : "rgba(255,255,255,0.8)",
                                                        }}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={closeMenu}
                                        className="font-serif text-3xl sm:text-4xl font-semibold no-underline transition-colors duration-200 break-words"
                                        style={{
                                            fontFamily: "Nunito",
                                            color: isActive(link.to)
                                                ? "var(--amber-gold)"
                                                : "rgba(255,255,255,0.9)",
                                        }}
                                        data-ocid={`nav.link.${i + 2}`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <Link
                                to="/contact-us"
                                onClick={closeMenu}
                                className="inline-block text-center font-sans text-sm font-semibold px-6 py-3 rounded-md no-underline w-full sm:w-fit mt-2 sm:mt-4"
                                style={{
                                    backgroundColor: "var(--magenta-rose)",
                                    color: "white",
                                    fontFamily: "Inter",
                                }}
                                data-ocid="nav.contact_button"
                            >
                                {t.reachOut}
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}