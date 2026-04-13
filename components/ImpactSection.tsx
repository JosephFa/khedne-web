'use client';

import { useLanguage } from '@/context/LanguageContext';

function CarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="16" width="34" height="11" rx="2" />
      <path d="M8 16l4-8h16l4 8" />
      <circle cx="12" cy="27" r="4" />
      <circle cx="28" cy="27" r="4" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="20" cy="20" r="15" />
      <path d="M13 16h14M13 20h14M13 24h14" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1B6B3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13" cy="11" r="4" />
      <path d="M3 35Q13 23 23 35" />
      <circle cx="27" cy="11" r="4" />
      <path d="M17 35Q27 23 37 35" />
    </svg>
  );
}

const IMPACT_ICONS = [<CarIcon key="car" />, <CoinIcon key="coin" />, <PeopleIcon key="people" />];

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
              {IMPACT_ICONS[i]}
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
