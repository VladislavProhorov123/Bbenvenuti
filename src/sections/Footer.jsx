import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12 md:py-16">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-4 md:px-0 text-center sm:text-left">
        <div className="">
          <div className="flex flex-col items-center sm:items-start">
            PERFUME
          </div>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-xs sm:max-w-none">
            {t("footer.description")}
          </p>
        </div>

        <div className="">
          <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
            {t("footer.navigation")}
          </h3>
          <ul className="flex flex-col gap-2 text-sm md:text-base items-center sm:items-start">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--brand-primary)] transition"
              >
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[var(--brand-primary)] transition"
              >
                {t("footer.products")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[var(--brand-primary)] transition"
              >
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-[var(--brand-primary)] transition"
              >
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t("footer.contactTitle")}</h3>
          <p className="text-[var(--text-secondary)] text-sm md:text-base mt-1">
            info@perfume.com
          </p>
          <p className="text-[var(--text-secondary)] text-sm md:text-base mt-1">
            +1 234 567 890
          </p>
          <p className="text-[var(--text-secondary)] text-sm md:text-base mt-1">
            123 Perfume Street, NYC
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t("footer.follow")}</h3>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--brand-primary)] transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-12 text-center text-[var(--text-secondary)] text-xs md:text-sm px-4">
        &copy; {new Date().getFullYear()} PERFUME. {t("footer.rights")}

      </div>
    </footer>
  );
}
