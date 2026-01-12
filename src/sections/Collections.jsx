import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import parfume4 from "../assets/parfume4.jpg";
import parfume19 from "../assets/parfume19.jpg";
import parfume20 from "../assets/parfume20.jpg";
import parfume21 from "../assets/parfume21.jpg";


export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Fresh & Citrus",
      image: parfume19,
    },
    {
      id: 2,
      title: "Woody & Spicy",
      image: parfume21,
    },
    {
      id: 3,
      title: "For Her",
      image: parfume4,
    },
    {
      id: 4,
      title: "For Him",
      image: parfume20,
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-primary)]">
      <div className="container">
        <SectionTitle
          title="Our Collections"
          subtitle="Carefully curated fragrances for every mood and personality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/products")}
              className="group relative h-[240px] sm:h-[280px] md:h-[360px] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white">{item.title}</h3>

                <span className="mt-2 md:mt-4 inline-block text-xs sm:text-sm text-white/80 uppercase tracking-wider">
                  Shop collection →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
