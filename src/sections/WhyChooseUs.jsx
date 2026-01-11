import React from "react";
import SectionTitle from "../components/SectionTitle";
import parfume from "../assets/parfume.png";
import { Award, Headphones, Truck } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--bg-soft)]">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
        {/* Картинка */}
        <div className="lg:w-1/2">
          <img
            src={parfume}
            alt="Perfume quality"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Текст + список преимуществ */}
        <div className="lg:w-1/2 flex flex-col ">
          <SectionTitle
            title="Why Choose Us?"
            subtitle="Experience the art of perfumery with our expertly crafted fragrances that delight the senses, evoke emotions, and leave a lasting impression wherever you go."
          />

          <ul className="flex flex-col gap-6 mt-6">
            <li className="flex items-start gap-4">
              <Truck className="text-[var(--brand-primary)] mt-1 w-6 h-6" />
              <span>
                Fast & reliable worldwide shipping ensures your favorite scents
                arrive safely and on time, so you can enjoy them without delay.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Award className="text-[var(--brand-primary)] mt-1 w-6 h-6" />
              <span>
                We use only premium ingredients and expert blending techniques
                to create long-lasting fragrances that stand out and make every
                moment memorable.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Headphones className="text-[var(--brand-primary)] mt-1 w-6 h-6" />
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
