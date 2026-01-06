import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { GeographicFocus } from '../components/home/GeographicFocus';
import { FeaturedInsight } from '../components/home/FeaturedInsight';
import { TestimonialSection } from '../components/home/TestimonialSection';

export function HomePage() {
  return (
    <div>
      {/* Sidebar demo removed after QA */}
      <HeroSection />
      <TrustSection />
      <ServicesOverview />
      <GeographicFocus />
      <FeaturedInsight />
      <TestimonialSection />
    </div>
  );
}

export default HomePage;
