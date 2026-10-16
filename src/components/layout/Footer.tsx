import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Send, Check, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FOOTER_LINKS } from '../../data/navigation';
import { SITE_CONFIG } from '../../data/siteData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Ethiopian flag colored geometric accent line */}
      <div className="ethiopian-pattern-line w-full" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Newsletter & Alliance Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-navy border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.4" />
                  <path d="M24 10V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M12 21H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="32" cy="18" r="4.5" fill="#E28723" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight">
                  GLOBAL DISCIPLES
                </span>
                <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold">
                  ALLIANCE ETHIOPIA
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              An indigenous movement equipping local churches and leaders across Ethiopia to train disciple-makers, launch sustainable businesses, and plant multiplying fellowships in least-reached communities.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-brand-navy/60 p-6 sm:p-7 rounded-2xl border border-white/10">
            <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>Subscribe to Frontline Field Updates</span>
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Receive quarterly testimonies, prayer requests, and stories of church multiplication directly from Ethiopian field workers.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-grow px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-hover text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap shadow-accent/20"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2">
                Thank you! You have been added to our Ethiopian prayer and news briefing.
              </p>
            )}
          </div>
        </div>

        {/* 4 Navigation Columns + Contact Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Col 1: About */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              About Alliance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Our Work
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Transparency
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Office */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Office
            </h4>
            <p className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address.city}, Ethiopia</span>
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>+251 11 [PENDING TEL]</span>
            </p>
            <p className="flex items-start gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address.officeHours}</span>
            </p>

            <div className="pt-2">
              <Link
                to="/give"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-white transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-brand-gold" />
                <span>Support Ethiopian Workers</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & PRD Compliance Notice */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Global Disciples Alliance Ethiopia. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-400 text-center md:text-right max-w-xl">
            {SITE_CONFIG.affiliateNote}
          </p>
        </div>
      </div>
    </footer>
  );
};
