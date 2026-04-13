'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { translations, type Lang } from '@/lib/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ar', label: 'AR — العربية' },
  { code: 'fr', label: 'FR — Français' },
  { code: 'en', label: 'EN — English' },
];

function CguContent() {
  const { lang: globalLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<Lang>(globalLang);

  const cgu = translations[activeTab].cgu;

  return (
    <main className="flex-1 bg-sand py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-cedar hover:text-cedar-light text-sm font-medium transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Khedne Ma3ak
        </Link>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black text-cedar">
            {cgu.title}
          </h1>
          <p className="text-[var(--color-text-muted)] text-sm">{cgu.lastUpdated}</p>
        </div>

        {/* Language tabs */}
        <div className="flex gap-2 flex-wrap border-b border-sand-dark pb-1">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setActiveTab(code)}
              className={`px-4 py-2 rounded-t-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === code
                  ? 'bg-white text-cedar border border-b-white border-sand-dark -mb-px'
                  : 'text-[var(--color-text-muted)] hover:text-cedar'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Intro */}
        <p className="text-[var(--color-text-sub)] italic leading-relaxed">
          {cgu.intro}
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {cgu.sections.map((section, i) => (
            <article key={i} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-cedar">{section.title}</h2>
              <div className="flex flex-col gap-3">
                {section.content.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    className="text-[var(--color-text-sub)] leading-relaxed text-sm whitespace-pre-line"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Contact callout */}
        <div className="bg-cedar-pale border border-cedar-light/30 rounded-2xl p-6 flex flex-col gap-2">
          <p className="font-semibold text-cedar">{translations[activeTab].footer.links.contact}</p>
          <a
            href="mailto:contact@khedne.app"
            className="text-sea hover:text-sea-light text-sm transition-colors duration-200"
          >
            contact@khedne.app
          </a>
        </div>
      </div>
    </main>
  );
}

export default function CguPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CguContent />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}
