import React from "react";
import SectionTitle from "../components/SectionTitle";
import parfume from "../assets/parfume.png";
import { Award, Headphones, Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:px-24 bg-[var(--bg-soft)]">
      <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={parfume}
            alt="Perfume quality"
            className="w-full max-w-md mx-auto lg:max-w-none rounded-xl shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col text-left lg:text-left">
          <SectionTitle
            title="Why Choose Us?"
            subtitle="Experience the art of perfumery with our expertly crafted fragrances that delight the senses, evoke emotions, and leave a lasting impression wherever you go."
          />

          <ul className="flex flex-col gap-5 md:gap-6 mt-6">
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Truck className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
                Fast & reliable worldwide shipping ensures your favorite scents
                arrive safely and on time, so you can enjoy them without delay.
              </span>
            </li>
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Award className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
                We use only premium ingredients and expert blending techniques
                to create long-lasting fragrances that stand out and make every
                moment memorable.
              </span>
            </li>
            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
              <Headphones className="text-[var(--brand-primary)] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>
                Our dedicated customer support team is always ready to assist
                you with any questions or concerns, ensuring a smooth and
                enjoyable shopping experience.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
