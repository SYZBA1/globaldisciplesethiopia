import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';
import { useLanguage } from '../../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAF7F2] ${language === 'am' ? 'font-ethiopic' : 'font-sans'}`}>
      {/* Skip to Main Content Link for WCAG 2.2 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-gold text-white font-bold rounded shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>


      {/* Main Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        currentLang={language}
      />

      {/* Off-canvas Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentLang={language}
        onLanguageToggle={setLanguage}
      />

      {/* Main Content Area */}
      <main id="main-content" className={`flex-grow focus:outline-none ${!isHomePage ? 'pt-[76px]' : ''}`}>
        {children}
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};
