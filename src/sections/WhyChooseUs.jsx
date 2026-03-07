import React from "react";
import SectionTitle from "../components/SectionTitle";
import parfume from "../assets/parfume.png";
import { Award, Headphones, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation()
  return (
    <section className="py-16 md:px-24 bg-[var(--bg-soft)]">
      <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={parfume}
            alt={t("whyChooseUs.imageAlt")}
            className="w-full max-w-md mx-auto lg:max-w-none rounded-xl shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col text-left lg:text-left">
          <SectionTitle
            title={t("whyChooseUs.title")}
            subtitle={t("whyChooseUs.subtitle")}
          />

          <ul className="flex flex-col gap-5 md:gap-6 mt-6">
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Truck className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
                {t("whyChooseUs.shipping")}
              </span>
            </li>
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Award className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
                {t("whyChooseUs.premium")}
              </span>
            </li>
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Headphones className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
               {t("whyChooseUs.support")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
