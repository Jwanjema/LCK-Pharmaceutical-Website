import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { GeographicFocus } from '../components/home/GeographicFocus';
import { FeaturedInsight } from '../components/home/FeaturedInsight';
import { TestimonialSection } from '../components/home/TestimonialSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Sidebar demo removed after QA */}
      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      <ServicesOverview onNavigate={onNavigate} />
      <GeographicFocus />
      <FeaturedInsight />
      <TestimonialSection onNavigate={onNavigate} />
    </div>
  );
}

export default HomePage;
