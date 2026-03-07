import React from "react";
import parfume4 from "../assets/parfume4.jpg";
import ContactForm from "../sections/ContactForm";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <section className="py-8 md:py-12 bg-[var(--bg-secondary)]">
      <div className="container max-w-5xl mx-auto px-4 md:px-0">
        {/* Заголовок + вводный текст */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 md:mb-4">
            {t("contacts.title")}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl md:max-w-2xl mx-auto">
            {t("contacts.subtitle")}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
