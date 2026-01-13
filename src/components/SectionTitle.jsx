import React from "react";

export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div
      className={`${center ? "text-center" : ""} mb-8 md:mb-12 px-2 md:px-0`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-[var(--text-secondary)] max-w-md md:max-w-xl mx-auto lg:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
}
