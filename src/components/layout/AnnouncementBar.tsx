import React, { useState } from 'react';
import { Heart, Globe2, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteData';

interface AnnouncementBarProps {
  onLanguageToggle?: (lang: 'en' | 'am') => void;
  currentLang?: 'en' | 'am';
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  onLanguageToggle,
  currentLang = 'en',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-brand-navy-dark text-slate-200 text-xs py-2 px-4 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Mission prompt or prayer urgent notice */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
            <Heart className="w-3 h-3 fill-brand-gold" />
            Frontline Prayer
          </span>
          <span className="text-slate-300 hidden md:inline">
            Praying for 34 least-reached communities in the Horn of Africa.
          </span>
          <Link
            to="/get-involved/pray"
            className="text-brand-gold hover:underline inline-flex items-center font-semibold"
          >
            <span>Join Prayer</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Quick Contacts & Amharic Language Switcher */}
        <div className="flex items-center gap-4 text-slate-300 text-[11px]">
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="hidden lg:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-brand-gold" />
            <span>{SITE_CONFIG.contact.email}</span>
          </a>
          <span className="hidden lg:inline text-white/20">|</span>
          <a
            href={`tel:${SITE_CONFIG.contact.mobile}`}
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-gold" />
            <span>Addis Ababa: +251 91 100 0000</span>
          </a>
          <span className="hidden sm:inline text-white/20">|</span>

          {/* Multilingual Architecture (PRD Section 8) */}
          <button
            onClick={() => onLanguageToggle && onLanguageToggle(currentLang === 'en' ? 'am' : 'en')}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            title="Toggle between English and Amharic preview"
          >
            <Globe2 className="w-3.5 h-3.5 text-brand-gold" />
            <span>{currentLang === 'en' ? 'አማርኛ (Preview)' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
