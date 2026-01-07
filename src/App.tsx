import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { CookieConsent } from './components/CookieConsent';
import { NewsletterPopup } from './components/NewsletterPopup';
import { PageLoader } from './components/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ExpertisePage = lazy(() => import('./pages/ExpertisePage').then(module => ({ default: module.ExpertisePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(module => ({ default: module.CaseStudiesPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(module => ({ default: module.TermsOfServicePage })));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage').then(module => ({ default: module.CookiePolicyPage })));

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string, sectionId?: string) => {
    const path = page === 'home' ? '' : page;
    if (sectionId) {
      navigate(`/${path}#${sectionId}`);
    } else {
      navigate(`/${path}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Map URL path to page name for header
  const getCurrentPage = () => {
    const path = location.pathname.slice(1) || 'home';
    return path as 'home' | 'expertise' | 'about' | 'resources' | 'contact' | 'case-studies' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
            <Route path="/expertise" element={<ExpertisePage onNavigate={handleNavigate} />} />
            <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
            <Route path="/resources" element={<ResourcesPage onNavigate={handleNavigate} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieConsent />
      <NewsletterPopup />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
