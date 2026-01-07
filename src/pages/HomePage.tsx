import { lazy, Suspense } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Lazy load below-the-fold components with named exports
const ClientLogoCarousel = lazy(() => import('../components/ClientLogoCarousel').then(module => ({ default: module.ClientLogoCarousel })));
const ServicesOverview = lazy(() => import('../components/home/ServicesOverview').then(module => ({ default: module.ServicesOverview })));
const GeographicFocus = lazy(() => import('../components/home/GeographicFocus').then(module => ({ default: module.GeographicFocus })));
const HowWeWork = lazy(() => import('../components/home/HowWeWork').then(module => ({ default: module.HowWeWork })));
const FeaturedInsight = lazy(() => import('../components/home/FeaturedInsight').then(module => ({ default: module.FeaturedInsight })));
const TestimonialSection = lazy(() => import('../components/home/TestimonialSection').then(module => ({ default: module.TestimonialSection })));
const FAQSection = lazy(() => import('../components/home/FAQSection').then(module => ({ default: module.FAQSection })));

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Above the fold - load immediately */}
      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      
      {/* Below the fold - lazy load */}
      <Suspense fallback={<LoadingSpinner />}>
        <ClientLogoCarousel />
        <ServicesOverview onNavigate={onNavigate} />
        <GeographicFocus />
        <HowWeWork />
        <FeaturedInsight />
        <TestimonialSection onNavigate={onNavigate} />
        <FAQSection />
      </Suspense>
    </div>
  );
}

export default HomePage;
