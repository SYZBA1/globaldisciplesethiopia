import React from 'react';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy-dark text-white overflow-hidden">
      {/* Background with subtle gradient & Ethiopian texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          alt="Ethiopian disciples in worship"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 inline-block">
          THE HARVEST IN ETHIOPIA IS READY
        </span>

        {/* Large Statement (PRD Section 24) */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Join us in equipping people to reach their communities.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          The Gospel moves fastest when carried by those who already live nearby, speak the language, and love the culture. Partner with Ethiopian churches today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            to="/give"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto font-bold shadow-accent"
          >
            <Heart className="w-4 h-4 text-white fill-white mr-1" />
            <span>Give to Frontline Workers</span>
          </CTAButton>

          <CTAButton
            to="/get-involved"
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto font-semibold"
          >
            <span>Explore Ways to Get Involved</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>

        {/* Footnote */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-brand-gold" />
          <span>Locally directed, spiritually accountable, and transparently stewarded in Ethiopia.</span>
        </div>
      </div>
    </section>
  );
};
