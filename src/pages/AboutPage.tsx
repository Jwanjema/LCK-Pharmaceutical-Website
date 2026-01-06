import { AboutHero } from '../components/about/AboutHero';
import { CompanyStory } from '../components/about/CompanyStory';
import { MissionValues } from '../components/about/MissionValues';
import { TeamSection } from '../components/about/TeamSection';

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <TeamSection />
    </div>
  );
}

export default AboutPage;