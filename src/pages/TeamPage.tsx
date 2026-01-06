import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { TeamSection } from '../components/about/TeamSection';

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

export function TeamPage({ onNavigate }: TeamPageProps) {
  return (
    <div>
      <AboutHero />
      <TeamSection onNavigate={onNavigate} />
    </div>
  );
}

export default TeamPage;
