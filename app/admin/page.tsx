'use client';

import Image from 'next/image';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function AdminContent() {
  const { tr } = useLanguage();

  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center gap-8 px-4">
      <Image
        src="/Logo_KM.png"
        alt="Khedne Ma3ak"
        width={80}
        height={80}
        className="rounded-2xl brightness-0 invert opacity-90"
      />

      <p className="text-white/70 text-center text-lg font-medium">
        {tr.admin.reserved}
      </p>

      <a
        href="https://admin.khedne.app"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cedar hover:bg-cedar-light text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
      >
        {tr.admin.button}
      </a>
    </main>
  );
}

export default function AdminPage() {
  return (
    <LanguageProvider>
      <AdminContent />
    </LanguageProvider>
  );
}
