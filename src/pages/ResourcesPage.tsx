import { ResourcesHero } from '../components/resources/ResourcesHero';
import { FeaturedResources } from '../components/resources/FeaturedResources';
import { CaseStudies } from '../components/resources/CaseStudies';
import { WebinarsInsights } from '../components/resources/WebinarsInsights';

export function ResourcesPage() {
  return (
    <div>
      <ResourcesHero />
      <FeaturedResources />
      <CaseStudies />
      <WebinarsInsights />
    </div>
  );
}
