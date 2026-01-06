import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { CookieConsent } from './components/CookieConsent';
import { NewsletterPopup } from './components/NewsletterPopup';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { TeamPage } from './pages/TeamPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
// ServiceDetailsPage removed per request


export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'expertise' | 'about' | 'resources' | 'contact' | 'team' | 'case-studies'>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'expertise' && <ExpertisePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
        {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}
        {currentPage === 'case-studies' && <CaseStudiesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieConsent />
      <NewsletterPopup />
    </div>
  );
}
