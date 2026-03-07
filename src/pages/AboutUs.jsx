import React from "react";
import AboutBlock from "../components/AboutBlock";
import parfume7 from "../assets/parfume7.jpg";
import ContactForm from "../sections/ContactForm";
import parfume11 from "../assets/parfume11.jpg";
import parfume12 from "../assets/parfume12.jpg";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation()
  return (
    <section className="py-8 md:py-16 bg-[var(--bg-secondary)]">
      <div className="container max-w-6xl mx-auto">
        <AboutBlock
          title={t("about.ourStory.title")}
          text={t("about.ourStory.text")}
          image={parfume7}
        />

        <AboutBlock
          title={t("about.ourPhilosophy.title")}
          text={t("about.ourPhilosophy.text")}
          reverse
          image={parfume11}
        />

        <AboutBlock
          title={t("about.ourMission.title")}
          text={t("about.ourMission.text")}
          image={parfume12}
        />
      </div>
      <ContactForm />
    </section>
  );
}
