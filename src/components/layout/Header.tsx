import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { Logo } from '../ui/Logo';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  currentLang?: 'en' | 'am';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileMenu,
  isMobileMenuOpen,
  currentLang = 'en',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Pill style classes matching globaldisciples.org
  const pillClassDark = "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all bg-black/40 hover:bg-black/60 text-white border border-white/15 backdrop-blur-md";
  const pillClassLight = "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-sm";

  const activePillClass = isScrolled || !isHomePage ? pillClassLight : pillClassDark;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-100 text-slate-900'
          : isHomePage
          ? 'bg-gradient-to-b from-black/80 via-black/45 to-transparent py-3.5 sm:py-4 text-white'
          : 'bg-white py-3 border-b border-slate-100 shadow-sm text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Pill Menu (Why Least-reached, About Us, Stories/Blog) */}
          <nav className="hidden lg:flex items-center gap-2.5" aria-label="Left Navigation">
            {/* Why Least-reached Pill */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('why')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/why-least-reached/one-third"
                className={`inline-flex items-center gap-1 ${activePillClass}`}
              >
                <span>Why Least-reached</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              {activeDropdown === 'why' && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-slate-800 text-xs font-medium">
                    <Link
                      to="/why-least-reached/one-third"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">One Third</div>
                      <div className="text-[11px] text-slate-500">Why we focus on zero-access communities</div>
                    </Link>
                    <Link
                      to="/approach"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Our Approach</div>
                      <div className="text-[11px] text-slate-500">The 5-stage multiplying church model</div>
                    </Link>
                    <Link
                      to="/about/story"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Our Beginnings</div>
                      <div className="text-[11px] text-slate-500">Our history & founding vision</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Pill */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about"
                className={`inline-flex items-center gap-1 ${activePillClass}`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-slate-800 text-xs font-medium">
                    <Link
                      to="/about"
                      className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Alliance Overview</div>
                    </Link>
                    <Link
                      to="/about/story"
                      className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Our Story & Timeline</div>
                    </Link>
                    <Link
                      to="/about/vision-mission"
                      className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Vision, Mission & Values</div>
                    </Link>
                    <Link
                      to="/about/leadership"
                      className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Leadership & Trustees</div>
                    </Link>
                    <Link
                      to="/about/partners"
                      className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Partner Denominations</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Blog / Stories Pill */}
            <Link
              to="/stories"
              className={activePillClass}
            >
              <span>Blog</span>
            </Link>
          </nav>

          {/* Center: Global Disciples Logo matching Image 1 */}
          <div className="flex items-center justify-center shrink-0">
            <Logo
              theme={isScrolled || !isHomePage ? 'light' : 'dark'}
              showSubtitle={false}
            />
          </div>

          {/* Right Pill Menu (Get Involved & Bright Yellow Give Button) */}
          <div className="flex items-center gap-2.5">
            {/* Get Involved Dropdown Pill */}
            <div
              className="relative hidden lg:block group"
              onMouseEnter={() => setActiveDropdown('involved')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/get-involved"
                className={`inline-flex items-center gap-1 ${activePillClass}`}
              >
                <span>Get Involved</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </Link>
              {activeDropdown === 'involved' && (
                <div className="absolute top-full right-0 w-64 pt-2 animate-fade-in z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-slate-800 text-xs font-medium">
                    <Link
                      to="/get-involved/pray"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Pray With Us</div>
                      <div className="text-[11px] text-slate-500">Intercession for unreached peoples</div>
                    </Link>
                    <Link
                      to="/get-involved/partner"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Partner as a Church</div>
                      <div className="text-[11px] text-slate-500">Cluster your congregation for mission</div>
                    </Link>
                    <Link
                      to="/get-involved/volunteer"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Serve & Volunteer</div>
                      <div className="text-[11px] text-slate-500">Offer professional and trade skills</div>
                    </Link>
                    <Link
                      to="/events"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Events & Summits</div>
                    </Link>
                    <Link
                      to="/resources"
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-bold text-brand-navy">Resource Downloads</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* The signature bright golden-yellow Give pill button */}
            <Link
              to="/give"
              className="px-6 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              Give
            </Link>

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
