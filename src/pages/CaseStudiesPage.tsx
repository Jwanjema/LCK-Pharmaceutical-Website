import React from 'react';
import { ResourcesHero } from '../components/resources/ResourcesHero';
import { CaseStudies } from '../components/resources/CaseStudies';

export function CaseStudiesPage() {
  return (
    <div>
      <ResourcesHero />
      <CaseStudies />
    </div>
  );
}

export default CaseStudiesPage;
