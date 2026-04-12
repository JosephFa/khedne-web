'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/lib/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ar', label: 'AR' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

export default function Navbar() {
  const { lang, setLang, tr } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label={tr.nav.menuAriaLabel}
      >
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/Logo_KM.png"
            alt="Khedne Ma3ak Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="font-bold text-lg text-cedar leading-none">
            {tr.nav.brand}
          </span>
        </Link>

        {/* Desktop: language switcher */}
        <div className="hidden md:flex items-center gap-1">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                lang === code
                  ? 'text-cedar'
                  : 'text-[var(--color-text-muted)] hover:text-cedar-light'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={tr.nav.menuAriaLabel}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-cedar transition-transform duration-200 ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cedar transition-opacity duration-200 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cedar transition-transform duration-200 ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-24 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 flex gap-2">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setIsOpen(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                lang === code
                  ? 'bg-cedar-pale text-cedar'
                  : 'text-[var(--color-text-muted)] hover:text-cedar'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
