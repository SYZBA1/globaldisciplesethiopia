import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  currentLang?: 'en' | 'am';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileMenu,
  isMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Pill style classes matching reference screenshots
  const pillClassDark = "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all bg-black/40 hover:bg-black/60 text-white border border-white/15 backdrop-blur-md flex items-center gap-1.5 cursor-pointer";
  const pillClassLight = "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-sm flex items-center gap-1.5 cursor-pointer";
  
  // Signature Active Blue Pill matching Image 1 & Image 2: "bg-[#0073E6] text-white" with "×"
  const pillClassActive = "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all bg-[#0073E6] text-white shadow-md flex items-center gap-2 cursor-pointer";

  const getPillClass = (dropdownKey: string) => {
    if (activeDropdown === dropdownKey) return pillClassActive;
    return isScrolled || !isHomePage ? pillClassLight : pillClassDark;
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(prev => (prev === key ? null : key));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5 border-b border-slate-100 text-slate-900'
          : isHomePage
          ? 'bg-gradient-to-b from-black/80 via-black/45 to-transparent py-4 sm:py-5 text-white'
          : 'bg-white/95 backdrop-blur-sm py-4 sm:py-5 border-b border-slate-100/60 shadow-sm text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between w-full">
          
          {/* Left Pill Menu (Why Least-reached, About Us, Stories/Blog) */}
          <nav className="hidden lg:flex items-center gap-2.5 z-10" aria-label="Left Navigation">
            
            {/* 1. Why Least-reached Pill matching Reference Image 1 */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('why')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('why')}
                className={getPillClass('why')}
                aria-expanded={activeDropdown === 'why'}
              >
                <span>{t('Why Least-reached', 'ያልተዳረሱት ለምን?')}</span>
                {activeDropdown === 'why' ? (
                  <X className="w-3.5 h-3.5 text-white" />
                ) : (
                  <span className="text-[10px] opacity-60">▼</span>
                )}
              </button>

              {/* Dropdown Card matching Reference Image 1 */}
              {activeDropdown === 'why' && (
                <div className="absolute top-full left-0 pt-1.5 animate-fade-in z-50 min-w-[200px]">
                  {/* Top Caret Pointer Triangle */}
                  <div className="flex justify-center -mb-1 relative z-20">
                    <div className="w-2.5 h-2.5 bg-white rotate-45 border-l border-t border-slate-100" />
                  </div>

                  {/* Clean White Card with Horizontal Dividers */}
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden divide-y divide-slate-100 text-left">
                    <Link
                      to="/why-least-reached/one-third"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3.5 text-[13px] font-bold text-slate-900 hover:text-[#0073E6] hover:bg-slate-50 transition-colors"
                    >
                      {t('One Third', 'አንድ ሦስተኛ')}
                    </Link>
                    <Link
                      to="/approach"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3.5 text-[13px] font-bold text-slate-900 hover:text-[#0073E6] hover:bg-slate-50 transition-colors"
                    >
                      {t('Our Approach', 'አካሄዳችን')}
                    </Link>
                    <Link
                      to="/why-least-reached/our-beginnings"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3.5 text-[13px] font-bold text-slate-900 hover:text-[#0073E6] hover:bg-slate-50 transition-colors"
                    >
                      {t('Our Beginnings', 'ጅማሬያችን')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. About Us Direct Pill (No mega menu, matches reference images) */}
            <Link
              to="/about"
              className={
                location.pathname === '/about' || location.pathname === '/get-to-know-us/about-us'
                  ? pillClassActive
                  : isScrolled || !isHomePage
                  ? pillClassLight
                  : pillClassDark
              }
            >
              <span>{t('About Us', 'ስለ እኛ')}</span>
            </Link>

            {/* 3. Blog / Stories Pill */}
            <Link
              to="/stories"
              className={isScrolled || !isHomePage ? pillClassLight : pillClassDark}
            >
              <span>{t('Blog', 'ብሎግ')}</span>
            </Link>
          </nav>

          {/* Center: Global Disciples Logo - strictly centered on screen across all pages */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20 flex items-center justify-center">
            <Logo
              theme={isScrolled || !isHomePage ? 'light' : 'dark'}
              compact={isScrolled}
              showSubtitle={false}
            />
          </div>

          {/* Right Controls: Get Involved, Give Button & Language Switch */}
          <div className="flex items-center gap-2.5 z-10 ml-auto">
            
            {/* 4. Get Involved Pill matching Reference Image 2 */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setActiveDropdown('involved')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('involved')}
                className={getPillClass('involved')}
                aria-expanded={activeDropdown === 'involved'}
              >
                <span>{t('Get Involved', 'ይሳተፉ')}</span>
                {activeDropdown === 'involved' ? (
                  <X className="w-3.5 h-3.5 text-white" />
                ) : (
                  <span className="text-[10px] opacity-60">▼</span>
                )}
              </button>

              {/* Dropdown Card matching Reference Image 2 */}
              {activeDropdown === 'involved' && (
                <div className="absolute top-full right-0 pt-1.5 animate-fade-in z-50 min-w-[190px]">
                  {/* Top Caret Pointer Triangle */}
                  <div className="flex justify-center -mb-1 relative z-20">
                    <div className="w-2.5 h-2.5 bg-white rotate-45 border-l border-t border-slate-100" />
                  </div>

                  {/* Clean White Card with Horizontal Dividers */}
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden divide-y divide-slate-100 text-left">
                    <Link
                      to="/get-involved/pray"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-[#0073E6] hover:bg-slate-50 transition-colors"
                    >
                      {t('Pray', 'ይጸልዩ')}
                    </Link>
                    <Link
                      to="/give"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {t('Give', 'ይስጡ')}
                    </Link>
                    <Link
                      to="/events"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {t('Events', 'ዝግጅቶች')}
                    </Link>
                    <Link
                      to="/give#pledge"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {t('Pledge', 'ቃል ኪዳን')}
                    </Link>
                    <Link
                      to="/get-involved/volunteer"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {t('Join Us', 'ይቀላቀሉን')}
                    </Link>
                    <Link
                      to="/resources"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {t('Discover More', 'ተጨማሪ ይመልከቱ')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* The signature bright golden-yellow Give pill button */}
            <Link
              to="/give"
              className="px-5 sm:px-6 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              {t('Give', 'ይስጡ')}
            </Link>

            {/* Language Switcher Pill / Icon beside 'Give' */}
            <button
              type="button"
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${
                language === 'am'
                  ? 'bg-[#0073E6] text-white border border-[#0073E6]'
                  : isScrolled || !isHomePage
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  : 'bg-black/40 hover:bg-black/60 text-white border border-white/20'
              }`}
              title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English (ወደ እንግሊዝኛ)'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-current shrink-0" />
              <span className="font-bold tracking-normal">{language === 'en' ? 'አማርኛ' : 'EN'}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={onOpenMobileMenu}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-brand-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
