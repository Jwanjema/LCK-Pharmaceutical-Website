import { ResourcesHero } from '../components/resources/ResourcesHero';
import { FeaturedResources } from '../components/resources/FeaturedResources';
import { CaseStudies } from '../components/resources/CaseStudies';
import { WebinarsInsights } from '../components/resources/WebinarsInsights';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  return (
    <div>
      <ResourcesHero />
      <FeaturedResources />
      <CaseStudies onNavigate={onNavigate} />
      <WebinarsInsights onNavigate={onNavigate} />
    </div>
  );
}
