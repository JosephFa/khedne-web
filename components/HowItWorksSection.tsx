'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorksSection() {
  const { tr } = useLanguage();
  const { howItWorks } = tr;

  return (
    <section className="bg-sand py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-cedar mb-16">
          {howItWorks.title}
        </h2>

        <div className="flex flex-col gap-12">
          {howItWorks.steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Big number */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <span className="text-8xl font-black text-cedar leading-none select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-2/3 flex flex-col gap-2 text-center md:text-start ${
                    isEven ? 'md:text-end' : 'md:text-start'
                  }`}
                >
                  <h3 className="text-xl font-bold text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-sub)] leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
