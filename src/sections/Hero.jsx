import React from "react";
import heroImg from "../assets/hero2.png"; 
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate()

  const handleShopNow = () => {
    navigate('/products')
  }
  return (
    <section className="relative w-full h-[calc(100vh-96px)]  flex items-center bg-[var(--bg-primary)] ">
      <img
        src={heroImg}
        alt="Perfume Hero"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      <div className="container relative z-10 text-center text-white flex flex-col items-center gap-6">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">
          Discover Your Signature Scent
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          Explore our curated collection of niche perfumes crafted with passion
          and luxury.
        </p>

        <button className="mt-6 px-8 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition cursor-pointer" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
