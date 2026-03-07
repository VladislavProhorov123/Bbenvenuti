import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ua from "../assets/ua.svg";
import usa from "../assets/usa.svg";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: usa },
  { code: "uk", label: "Українська", flag: ua },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrent(lang);
    setOpen(false);
  };

  const active = languages.find((l) => l.code === current);

  return (
    <div ref={ref} className="relative inline-block">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center justify-center
          px-3 py-2
          rounded-lg
          cursor-pointer
          border-[var(--border-color)]
    bg-[var(--bg-secondary)]
    transition-all duration-200
    hover:bg-[var(--bg-soft)]
    hover:border-[var(--brand-primary)]
        "
      >
        {active && (
          <img src={active.flag} className="w-6 h-6" alt={active.label} />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 mt-2 w-44
    rounded-xl
    bg-[var(--card-bg)]
    border border-[var(--border-color)]
    shadow-lg
    overflow-hidden
    z-50
            "
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  flex items-center gap-3
                  px-4 py-2
                  text-sm
                  cursor-pointer
                  transition-all duration-200
                  ${
                    current === lang.code
                      ? "bg-[var(--bg-soft)] text-[var(--brand-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-soft)] hover:text-[var(--brand-primary)]"
                  }
                `}
              >
                <img src={lang.flag} className="w-5 h-5" alt={lang.label} />
                <span>{lang.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
