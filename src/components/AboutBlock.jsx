import React from "react";

export default function AboutBlock({ title, text, image, reverse }) {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center py-4">
      <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
        <h2 className="text-3xl font-serif mb-6">{title}</h2>
        <p className="text-[var(--text-secondary)]">{text}</p>
      </div>

      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
