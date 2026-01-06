import React from 'react';
import { ExpertiseHero } from '../components/expertise/ExpertiseHero';
import { ServicesNavigation } from '../components/expertise/ServiceSection';

export function ServiceDetailsPage() {
  return (
    <div>
      <ExpertiseHero />
      <ServicesNavigation activeSection={"regulatory"} onSectionChange={() => {}} />
    </div>
  );
}

export default ServiceDetailsPage;
