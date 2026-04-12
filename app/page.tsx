import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ImpactSection from '@/components/ImpactSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TrustSection from '@/components/TrustSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <HowItWorksSection />
        <TrustSection />
      </main>
      <FooterSection />
    </LanguageProvider>
  );
}
