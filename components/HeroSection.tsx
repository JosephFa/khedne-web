'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

function AppleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.341a.5.5 0 0 1-.497-.5.5.5 0 0 1 .497-.5.5.5 0 0 1 .497.5.5.5 0 0 1-.497.5m-11.046 0a.5.5 0 0 1-.497-.5.5.5 0 0 1 .497-.5.5.5 0 0 1 .497.5.5.5 0 0 1-.497.5M17.8 10.5 19.5 7.38a.34.34 0 0 0-.12-.46.34.34 0 0 0-.46.12l-1.72 3.17A10.37 10.37 0 0 0 12 9.08c-1.83 0-3.56.47-5.2 1.13L5.08 7.04a.34.34 0 0 0-.46-.12.34.34 0 0 0-.12.46l1.7 3.12C3.58 12 2 14.7 2 17.5h20c0-2.8-1.58-5.5-4.2-7" />
    </svg>
  );
}

export default function HeroSection() {
  const { tr } = useLanguage();
  const { hero } = tr;

  return (
    <section className="bg-sand py-20 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Logo illustration */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-cedar/10 blur-2xl scale-110" />
          <Image
            src="/Logo_KM.png"
            alt="Khedne Ma3ak"
            width={160}
            height={160}
            className="relative rounded-3xl shadow-xl"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-black text-cedar leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-[var(--color-text-sub)] font-medium">
            {hero.subtitle}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* App Store */}
          <button
            disabled
            className="flex items-center justify-center gap-3 bg-dark text-white px-6 py-4 rounded-xl w-full sm:w-auto cursor-not-allowed opacity-90"
          >
            <AppleIcon />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-white/60">{hero.comingSoon}</span>
              <span className="text-base font-bold">{hero.ctaAppStore}</span>
            </div>
          </button>

          {/* Google Play */}
          <button
            disabled
            className="flex items-center justify-center gap-3 bg-cedar text-white px-6 py-4 rounded-xl w-full sm:w-auto cursor-not-allowed opacity-90"
          >
            <AndroidIcon />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-white/60">{hero.comingSoon}</span>
              <span className="text-base font-bold">{hero.ctaGooglePlay}</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
