import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { CTAButton } from '../ui/CTAButton';

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-card py-3 border-b border-white/10'
          : 'bg-brand-navy py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg p-1"
            aria-label="Global Disciples Alliance Ethiopia Home"
          >
            {/* Logo Icon Mark */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-navy-light to-brand-navy-dark border border-white/20 flex items-center justify-center shadow-md group-hover:border-brand-gold transition-colors flex-shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.4" />
                <path d="M24 10V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 21H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="32" cy="18" r="4.5" fill="#E28723" />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white leading-tight">
                GLOBAL DISCIPLES
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-brand-gold">
                  {currentLang === 'am' ? 'አሊያንስ ኢትዮጵያ' : 'ALLIANCE ETHIOPIA'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-ethiopia-green inline-block" title="Ethiopia Alliance" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => {
              if (item.isCta) return null;

              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                location.pathname === item.href ||
                (hasChildren && item.children?.some((c) => location.pathname.startsWith(c.href)));

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 px-3 py-2 text-xs 2xl:text-sm font-semibold tracking-wide rounded-md transition-colors ${
                        isActive
                          ? 'text-brand-gold bg-white/5'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-brand-gold' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in z-50">
                        <div className="bg-brand-navy-dark border border-white/15 rounded-xl shadow-2xl p-2 backdrop-blur-lg">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={`block px-3.5 py-2.5 rounded-lg text-xs 2xl:text-sm transition-colors ${
                                location.pathname === child.href
                                  ? 'bg-brand-gold text-white font-bold'
                                  : 'text-slate-200 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              <div className="font-semibold">{child.label}</div>
                              {child.description && (
                                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-2 text-xs 2xl:text-sm font-semibold tracking-wide rounded-md transition-colors ${
                    isActive
                      ? 'text-brand-gold bg-white/5'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Give CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <CTAButton
              to="/give"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-accent gap-1.5 font-bold"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
              <span>GIVE</span>
            </CTAButton>

            {/* Mobile / Tablet Menu Trigger */}
            <button
              onClick={onOpenMobileMenu}
              className="xl:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold" />
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
