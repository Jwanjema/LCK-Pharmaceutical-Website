import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { TeamSection } from '../components/about/TeamSection';

export function TeamPage() {
  return (
    <div>
      <AboutHero />
      <TeamSection />
    </div>
  );
}

export default TeamPage;
