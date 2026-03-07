import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      phone,
      message,
      date: new Date().toLocaleString(),
    };

    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/b6d0c161-701f-4764-ab93-0bf9414b6086",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setName("");
      setPhone("");
      setMessage("");
      alert(t("contact.form.success"));
    } catch {
      alert(t("contact.form.error"));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-12 items-center px-4 md:px-0">
        <div className="w-full lg:w-1/2">
          <SectionTitle
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
          <p className="mt-4 md:mt-6 text-sm md:text-base text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0">
            {t("contact.description")}
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:gap-6 bg-[var(--bg-soft)] p-5 sm:p-6 md:p-8 rounded-xl shadow-lg w-full"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 md:mb-2 text-sm md:text-base font-medium"
              >
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("contact.form.namePlaceholder")}
                required
                className="border border-[var(--border-color)] rounded-lg p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-1 md:mb-2 text-sm md:text-base font-medium"
              >
                {t("contact.form.phone")}
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("contact.form.phonePlaceholder")}
                required
                className="border border-[var(--border-color)] rounded-lg p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 md:mb-2 text-sm md:text-base font-medium"
              >
                {t("contact.form.comment")}
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("contact.form.commentPlaceholder")}
                className="border border-[var(--border-color)] rounded-lg p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <button
              type="submit"
              className="mt-2 md:mt-4 px-6 md:px-8 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition w-full"
            >
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
