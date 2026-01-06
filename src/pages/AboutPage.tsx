import { AboutHero } from '../components/about/AboutHero';
import { CompanyStory } from '../components/about/CompanyStory';
import { MissionValues } from '../components/about/MissionValues';
import { TeamSection } from '../components/about/TeamSection';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <TeamSection onNavigate={onNavigate} />
    </div>
  );
}

export default AboutPage;