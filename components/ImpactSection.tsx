'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ImpactSection() {
  const { tr } = useLanguage();
  const { impact } = tr;

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-cedar mb-12">
          {impact.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impact.cards.map((card, i) => (
            <div
              key={i}
              className="bg-cedar-pale rounded-2xl p-6 flex flex-col gap-4"
            >
              <span className="text-4xl leading-none">{card.icon}</span>
              <h3 className="text-lg font-bold text-cedar">{card.title}</h3>
              <p className="text-[var(--color-text-sub)] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
