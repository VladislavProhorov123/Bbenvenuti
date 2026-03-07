import React from 'react'
import { useNavigate } from 'react-router-dom'
import parfume4 from '../assets/parfume4.jpg'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background image */}
      <img
        src={parfume4}
        alt={t("notFound.title")}
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="tracking-widest text-sm text-white/70 mb-4">
          {t("notFound.error")}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
          {t("notFound.title")}
        </h1>

        <p className="mt-6 text-white/80 text-sm sm:text-base">
          {t("notFound.description")}
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold transition"
        >
          {t("notFound.button")}
        </button>
      </div>
    </section>

  )
}
