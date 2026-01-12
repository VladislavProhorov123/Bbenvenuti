import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative">
      <div className="container">
        <SectionTitle
          title="Featured Fragrances"
          subtitle="Our most loved scents, selected for you."
        />

        <Swiper
          className="w-[1280px]"
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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

        <button className="custom-prev absolute left-[50px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--brand-accent)] transition-transform duration-300 hover:scale-110 cursor-pointer">
            ‹
          </button>
          <button className="custom-next absolute right-[70px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--brand-accent)] transition-transform duration-300 hover:scale-110">
            ›
          </button>


        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/products")}
            className="px-10 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
