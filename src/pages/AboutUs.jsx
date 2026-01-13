import React from "react";
import AboutBlock from "../components/AboutBlock";
import parfume7 from "../assets/parfume7.jpg";
import ContactForm from "../sections/ContactForm";
import parfume11 from "../assets/parfume11.jpg";
import parfume12 from "../assets/parfume12.jpg";

export default function AboutUs() {
  return (
    <section className="py-8 md:py-16 bg-[var(--bg-secondary)]">
      <div className="container max-w-6xl mx-auto">
        <AboutBlock
          title="Our Story"
          text="At PERFUME, our journey began with a passion for creating fragrances that capture emotions and memories. 
          From the first spray, our scents tell a story — whether it's a fresh morning breeze, a romantic evening, or a daring night out. 
          Each bottle reflects our commitment to elegance, sophistication, and timeless style."
          image={parfume7}
        />

        <AboutBlock
          title="Our Philosophy"
          text="We believe that perfume is not just a scent, but an experience. 
          Our philosophy combines artisanal craftsmanship with modern aesthetics, ensuring every fragrance is unique and memorable. 
          We source the finest ingredients from around the world and create scents that resonate with individuality and elegance. 
          Sustainability and cruelty-free practices are at the heart of everything we do."
          reverse
          image={parfume11}
        />

        <AboutBlock
          title="Our Mission"
          text="Our mission is to enrich everyday life with luxury fragrances that inspire confidence and self-expression. 
          We strive to offer a curated selection of signature perfumes, catering to diverse tastes and personalities. 
          By focusing on quality, creativity, and innovation, PERFUME aims to become a trusted companion in every special moment."
          image={parfume12}
        />
      </div>
      <ContactForm />
    </section>
  );
}
