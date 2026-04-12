'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function TrustSection() {
  const { tr } = useLanguage();
  const { trust } = tr;

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-cedar mb-12">
          {trust.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trust.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-cedar-pale hover:border-cedar-light transition-colors duration-200"
            >
              <span className="text-3xl leading-none shrink-0 mt-0.5">
                {item.icon}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-cedar">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-sub)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
