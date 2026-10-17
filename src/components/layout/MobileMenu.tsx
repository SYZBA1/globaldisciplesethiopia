import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Heart, Phone, Mail, Globe2 } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigation';
import { SITE_CONFIG } from '../../data/siteData';
import { CTAButton } from '../ui/CTAButton';
import { Logo } from '../ui/Logo';
import { useLanguage } from '../../context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: 'en' | 'am';
  onLanguageToggle?: (lang: 'en' | 'am') => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  if (!isOpen) return null;

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden flex flex-col bg-brand-navy-dark text-white animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div onClick={onClose}>
          <Logo theme="dark" showSubtitle={false} />
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-brand-gold" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="p-4 space-y-2 flex-grow">
        {MAIN_NAVIGATION.map((item) => {
          if (item.isCta) return null;

          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = !!openSections[item.label];

          if (hasChildren) {
            return (
              <div key={item.label} className="border-b border-white/5 pb-2">
                <button
                  onClick={() => toggleSection(item.label)}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-slate-100 hover:text-brand-gold transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-brand-gold' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pl-3 py-1 space-y-1.5 border-l-2 border-brand-gold/40 my-1 animate-fade-in">
                    {item.children?.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={onClose}
                        className={`block py-1.5 px-2 rounded text-sm transition-colors ${
                          location.pathname === child.href
                            ? 'text-brand-gold font-bold bg-white/5'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className={`block py-2.5 border-b border-white/5 text-base font-semibold transition-colors ${
                location.pathname === item.href
                  ? 'text-brand-gold'
                  : 'text-slate-100 hover:text-brand-gold'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="p-5 border-t border-white/10 space-y-4 bg-brand-navy/60">
        <CTAButton
          to="/give"
          onClick={onClose}
          variant="primary"
          size="lg"
          className="w-full shadow-accent font-bold"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>GIVE TO ETHIOPIAN MISSIONS</span>
        </CTAButton>

        {/* Amharic Toggle */}
        <div className="flex items-center justify-between pt-2 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-brand-gold" />
            <span>{t('Language', 'ቋንቋ')}</span>
          </span>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            {language === 'en' ? 'Switch to አማርኛ' : 'Switch to English'}
          </button>
        </div>

        {/* Contact info */}
        <div className="text-[11px] text-slate-400 space-y-1 pt-1">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-brand-gold" />
            <span>{SITE_CONFIG.contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
