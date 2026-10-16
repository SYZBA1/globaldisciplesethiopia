import React from 'react';
import { Play, Heart, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

interface HeroSectionProps {
  onPlayVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayVideo }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-brand-navy-dark overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          alt="Ethiopian church community gathering"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-brand-navy-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-brand-gold mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="uppercase tracking-widest text-[11px] font-bold">
              Global Disciples Alliance Ethiopia
            </span>
          </div>

          {/* Primary Editorial Headline (PRD Section 13) */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Equipping Churches. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-amber-100">
              Reaching the Least-Reached.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
            We partner with local Ethiopian congregations to train disciple-makers, launch sustainable businesses, and plant reproducible worshipping fellowships among communities with no access to the Gospel.
          </p>

          {/* CTAs & Video Trigger */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <CTAButton
              to="/approach"
              variant="primary"
              size="lg"
              className="font-bold shadow-accent tracking-wide"
            >
              <span>Explore Our Approach</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </CTAButton>

            <CTAButton
              to="/give"
              variant="outline-white"
              size="lg"
              className="font-semibold"
            >
              <Heart className="w-4 h-4 text-brand-gold fill-brand-gold mr-1" />
              <span>Give to Frontline Workers</span>
            </CTAButton>

            <button
              onClick={onPlayVideo}
              className="inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-md text-sm font-semibold text-white hover:text-brand-gold transition-colors group"
              aria-label="Watch field documentary"
            >
              <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </span>
              <span>Watch Field Story (8 min)</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>100% Church-Based Local Training</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-ethiopia-green flex-shrink-0" />
              <span>Near-Neighbor Indigenous Model</span>
            </div>
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
              <span>Zero Foreign Subsidy Dependency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
