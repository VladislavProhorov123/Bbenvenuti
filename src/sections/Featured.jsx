import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="container">
        <SectionTitle
          title="Featured Fragrances"
          subtitle="Our most loved scents, selected for you."
        />

        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/products")}
            className="px-10 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
