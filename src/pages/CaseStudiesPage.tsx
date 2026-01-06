import React from 'react';
import { ResourcesHero } from '../components/resources/ResourcesHero';
import { CaseStudies } from '../components/resources/CaseStudies';

interface CaseStudiesPageProps {
  onNavigate: (page: string) => void;
}

export function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  return (
    <div>
      <ResourcesHero />
      <CaseStudies onNavigate={onNavigate} />
    </div>
  );
}

export default CaseStudiesPage;
