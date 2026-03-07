import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageSelect from "../components/LanguageSelect";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[var(--brand-primary)] border-b-2 border-[var(--brand-primary)] pb-1 font-semibold transition"
      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition";

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] shadow-md ">
      <div className="container flex justify-between items-center h-24">
        <div className="text-2xl font-playfair text-[var(--brand-primary)] tracking-wider">
          PERFUME
        </div>

        <nav className="hidden md:flex gap-10 text-lg items-center">
          <NavLink to="/" className={linkClass}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            {t("nav.products")}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/contacts" className={linkClass}>
            {t("nav.contacts")}
          </NavLink>
          <LanguageSelect />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "opacity-0"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[var(--text-primary)] transition ${
              open && "-rotate-45 -translate-y-2"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="flex justify-end">
          <LanguageSelect />
        </div>
        <nav className="flex flex-col gap-6 p-6 bg-[var(--bg-secondary)]">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            {t("nav.home")}
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/products"
            className={linkClass}
          >
            {t("nav.products")}
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contacts"
            className={linkClass}
          >
            {t("nav.contacts")}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
