import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

// Small helper component: <T en="..." ne="..." />
export function T({ en, ne }) {
  const { lang } = useLanguage();
  const text = lang === "ne" ? ne : en;
  return <span className={lang === "ne" ? "font-deva" : ""}>{text}</span>;
}