'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
    </svg>
  );
}

export default function FooterSection() {
  const { tr } = useLanguage();
  const { footer } = tr;

  return (
    <footer className="bg-dark text-white py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Top: logo + tagline */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo_KM.png"
              alt="Khedne Ma3ak"
              width={44}
              height={44}
              className="rounded-xl brightness-0 invert"
            />
            <span className="font-bold text-xl text-white">Khedne Ma3ak</span>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm text-center">
            {footer.tagline}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="/cgu"
            className="text-white/70 hover:text-white text-sm transition-colors duration-200"
          >
            {footer.links.cgu}
          </Link>
          <a
            href="mailto:contact@khedne.app"
            className="text-white/70 hover:text-white text-sm transition-colors duration-200"
          >
            {footer.links.contact}
          </a>
          <Link
            href="/admin"
            className="text-[var(--color-text-muted)] hover:text-white/50 text-xs transition-colors duration-200"
          >
            {footer.links.admin}
          </Link>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="text-white/50 hover:text-white transition-colors duration-200"
          >
            <TikTokIcon />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[var(--color-text-muted)] text-xs">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
