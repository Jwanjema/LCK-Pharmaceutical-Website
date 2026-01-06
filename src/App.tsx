import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { TeamPage } from './pages/TeamPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';


export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'expertise' | 'about' | 'resources' | 'contact' | 'team' | 'case-studies' | 'service-details'>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'expertise' && <ExpertisePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'resources' && <ResourcesPage />}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'case-studies' && <CaseStudiesPage />}
        {currentPage === 'service-details' && <ServiceDetailsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}
