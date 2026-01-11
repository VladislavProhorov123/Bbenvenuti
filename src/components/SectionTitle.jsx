import React from "react";

export default function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[var(--text-secondary)] max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
