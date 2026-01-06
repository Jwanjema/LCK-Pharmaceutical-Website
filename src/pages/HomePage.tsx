import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { GeographicFocus } from '../components/home/GeographicFocus';
import { FeaturedInsight } from '../components/home/FeaturedInsight';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { HowWeWork } from '../components/home/HowWeWork';
import { FAQSection } from '../components/home/FAQSection';
import { ClientLogoCarousel } from '../components/ClientLogoCarousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Sidebar demo removed after QA */}
      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      <ClientLogoCarousel />
      <ServicesOverview onNavigate={onNavigate} />
      <GeographicFocus />
      <HowWeWork />
      <FeaturedInsight />
      <TestimonialSection onNavigate={onNavigate} />
      <FAQSection />
    </div>
  );
}

export default HomePage;
