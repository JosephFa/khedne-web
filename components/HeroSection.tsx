'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

function AppleIcon() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.341a.5.5 0 0 1-.497-.5.5.5 0 0 1 .497-.5.5.5 0 0 1 .497.5.5.5 0 0 1-.497.5m-11.046 0a.5.5 0 0 1-.497-.5.5.5 0 0 1 .497-.5.5.5 0 0 1 .497.5.5.5 0 0 1-.497.5M17.8 10.5 19.5 7.38a.34.34 0 0 0-.12-.46.34.34 0 0 0-.46.12l-1.72 3.17A10.37 10.37 0 0 0 12 9.08c-1.83 0-3.56.47-5.2 1.13L5.08 7.04a.34.34 0 0 0-.46-.12.34.34 0 0 0-.12.46l1.7 3.12C3.58 12 2 14.7 2 17.5h20c0-2.8-1.58-5.5-4.2-7" />
    </svg>
  );
}

export default function HeroSection() {
  const { tr, dir } = useLanguage();
  const { hero } = tr;

  return (
    <section id="hero" className="bg-sand min-h-[90vh] flex items-center py-12 px-6 md:px-20">
      {/* dir="ltr" on the grid — columns never flip regardless of language */}
      <div
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        dir="ltr"
      >

        {/* ── Left column — Text (internal dir follows language) ── */}
        <div className="flex flex-col gap-6" dir={dir}>

          {/* Badge pill */}
          <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full bg-cedar-pale text-cedar text-[13px]">
            {hero.badge}
          </span>

          {/* Title */}
          <h1 className="text-[36px] md:text-[48px] font-black leading-tight">
            <span className="text-cedar block">{hero.titleLine1}</span>
            <span className="text-sea block">{hero.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[var(--color-text-sub)] max-w-[420px] leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              disabled
              className="flex items-center gap-3 bg-dark text-white px-5 py-3 rounded-xl cursor-not-allowed opacity-90 w-full sm:w-auto"
            >
              <AppleIcon />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-white/60">{hero.comingSoon}</span>
                <span className="text-sm font-bold">{hero.ctaAppStore}</span>
              </div>
            </button>

            <button
              disabled
              className="flex items-center gap-3 bg-cedar text-white px-5 py-3 rounded-xl cursor-not-allowed opacity-90 w-full sm:w-auto"
            >
              <AndroidIcon />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-white/60">{hero.comingSoon}</span>
                <span className="text-sm font-bold">{hero.ctaGooglePlay}</span>
              </div>
            </button>
          </div>

          {/* Tagline under CTAs */}
          <p className="text-[13px] text-[var(--color-text-muted)]">
            {hero.ctaTagline}
          </p>
        </div>

        {/* ── Right column — Phone mockup ── */}
        <div className="flex justify-center items-center relative">

          {/* Decorative circle behind the phone */}
          <div
            className="absolute rounded-full bg-cedar-pale opacity-50"
            style={{ width: 320, height: 320, zIndex: 0 }}
            aria-hidden="true"
          />

          {/* Phone frame with float animation */}
          <div
            className="animate-float relative bg-white overflow-hidden"
            style={{
              width: 280,
              borderRadius: 40,
              border: '8px solid #0F2318',
              boxShadow: '0 32px 64px rgba(15,35,24,0.25)',
              zIndex: 1,
            }}
          >
            {/* Notch */}
            <div
              className="bg-dark mx-auto"
              style={{ width: 80, height: 20, borderRadius: 8, marginTop: 8 }}
              aria-hidden="true"
            />

            {/* App screenshot */}
            <Image
              src="/Screenshot_dash.png"
              alt="Khedne Ma3ak app screenshot"
              width={280}
              height={560}
              className="w-full h-auto block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
