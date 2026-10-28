import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { EthiopiaFlag, USFlag } from '../ui/FlagIcons';
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

  // Scroll detection:
  // Instant view at top (Reference 1) vs Scrolled down view (Reference 2)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
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

  // On pages with dark hero (homepage), start transparent/dark (Ref 1).
  // On inner pages with white background, show clean white header (Ref 2).
  const isStateScrolled = isScrolled || !isHomePage;

  // Pill styling:
  // State 1 (Top / Instant - Reference 1): Dark semi-transparent with white text
  // State 2 (Scrolled Down - Reference 2): Light gray with dark #111820 text
  const pillClassDark =
    'px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 bg-[rgba(0,0,0,0.35)] hover:bg-[rgba(0,0,0,0.5)] text-white border border-white/10 backdrop-blur-sm flex items-center gap-1.5 cursor-pointer select-none';

  const pillClassLight =
    'px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 bg-[#F1F3F5] hover:bg-slate-200 text-[#111820] border border-black/5 flex items-center gap-1.5 cursor-pointer select-none';

  // Active state when a dropdown is open
  const pillClassActive =
    'px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 bg-[#0073E6] text-white shadow-md flex items-center gap-2 cursor-pointer select-none';

  const getPillClass = (dropdownKey: string) => {
    if (activeDropdown === dropdownKey) return pillClassActive;
    return isStateScrolled ? pillClassLight : pillClassDark;
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        isStateScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3.5 sm:py-4 text-[#111820]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-7 sm:py-8 lg:py-9 text-white'
      }`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between w-full min-h-[44px]">
          
          {/* ========================================================================= */}
          {/* LEFT GROUP: Pill-shaped buttons (Why Least-reached, About Us, Blog)        */}
          {/* ========================================================================= */}
          <nav className="hidden lg:flex items-center gap-2.5 z-10" aria-label="Left Navigation">
            
            {/* 1. Why Least-reached Pill */}
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

              {/* Dropdown Card */}
              {activeDropdown === 'why' && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in z-50 min-w-[210px]">
                  {/* Top Caret Pointer Triangle */}
                  <div className="flex justify-center -mb-1 relative z-20">
                    <div className="w-2.5 h-2.5 bg-white rotate-45 border-l border-t border-slate-100" />
                  </div>

                  {/* Clean White Card with Horizontal Dividers */}
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 text-left">
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

            {/* 2. About Us Direct Pill */}
            <Link
              to="/about"
              className={
                location.pathname === '/about' || location.pathname === '/get-to-know-us/about-us'
                  ? pillClassActive
                  : isStateScrolled
                  ? pillClassLight
                  : pillClassDark
              }
            >
              <span>{t('About Us', 'ስለ እኛ')}</span>
            </Link>

            {/* 3. Blog / Stories Pill */}
            <Link
              to="/stories"
              className={isStateScrolled ? pillClassLight : pillClassDark}
            >
              <span>{t('Blog', 'ብሎግ')}</span>
            </Link>
          </nav>

          {/* ========================================================================= */}
          {/* CENTER: The global disciples logo                                         */}
          {/* Top/Instant (Ref 1): Full blue umbrella dome, pure white text            */}
          {/* Move down (Ref 2): Shifted upward, dome clipped at top edge, dark text   */}
          {/* ========================================================================= */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 pointer-events-auto z-20 flex flex-col items-center justify-center transition-all duration-300 ease-out ${
              isStateScrolled
                ? 'top-0 h-full overflow-hidden justify-start pt-0'
                : 'top-1/2 -translate-y-1/2'
            }`}
          >
            <Logo
              theme={isStateScrolled ? 'light' : 'dark'}
              clipped={isStateScrolled}
              showSubtitle={false}
            />
          </div>

          {/* ========================================================================= */}
          {/* RIGHT GROUP: Get Involved, Yellow Give (#FAD02C), and Ethiopia Flag       */}
          {/* ========================================================================= */}
          <div className="flex items-center gap-2.5 z-10 ml-auto">
            
            {/* 4. Get Involved Pill */}
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

              {/* Dropdown Card */}
              {activeDropdown === 'involved' && (
                <div className="absolute top-full right-0 pt-2 animate-fade-in z-50 min-w-[200px]">
                  {/* Top Caret Pointer Triangle */}
                  <div className="flex justify-center -mb-1 relative z-20">
                    <div className="w-2.5 h-2.5 bg-white rotate-45 border-l border-t border-slate-100" />
                  </div>

                  {/* Clean White Card with Horizontal Dividers */}
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 text-left">
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
                      className="block px-6 py-3 text-[13px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {t('Give', 'ይስጡ')}
                    </Link>
                    <Link
                      to="/events"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {t('Events', 'ዝግጅቶች')}
                    </Link>
                    <Link
                      to="/get-involved/pledge"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {t('Pledge', 'ቃል ኪዳን')}
                    </Link>
                    <Link
                      to="/get-involved/join-us"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {t('Join Us', 'ይቀላቀሉን')}
                    </Link>
                    <Link
                      to="/discover-more"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {t('Discover More', 'ተጨማሪ ይመልከቱ')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. High-contrast yellow pill CTA button: Give (#FAD02C with dark bold text) */}
            <Link
              to="/give"
              className="px-5 sm:px-6 py-2 rounded-full font-extrabold tracking-wider uppercase text-xs transition-all duration-300 bg-[#FAD02C] hover:bg-[#eac020] text-[#111820] shadow-sm hover:scale-105 active:scale-95"
            >
              {t('Give', 'ይስጡ')}
            </Link>

            {/* 6. Language Switcher: Small Size Ethiopia Flag */}
            <button
              type="button"
              onClick={toggleLanguage}
              className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${
                isStateScrolled
                  ? 'bg-[#F1F3F5] hover:bg-slate-200 border border-black/5'
                  : 'bg-[rgba(0,0,0,0.35)] hover:bg-[rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-sm'
              }`}
              title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English (ወደ እንግሊዝኛ)'}
              aria-label={language === 'en' ? 'Switch to Amharic' : 'Switch to English'}
            >
              {language === 'en' ? (
                <EthiopiaFlag className="w-6 h-4" />
              ) : (
                <USFlag className="w-6 h-4" />
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={onOpenMobileMenu}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isStateScrolled
                  ? 'text-[#111820] hover:bg-black/5'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FAD02C]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
