import React from 'react';
import { ArrowRight, Compass, ShieldAlert } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export const MissionNeedSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
              <Compass className="w-4 h-4" />
              <span>THE LEAST-REACHED REALITY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              One-third of our world has never heard the name of Jesus.
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              In Ethiopia, despite centuries of deep Christian heritage in central highlands, vast pastoralist communities, language enclaves, and borderland territories live with little or no access to the Gospel.
            </p>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              They will not stumble into an existing cathedral or church building. If they are to hear of God's love, someone must be trained, sent, and supported to live among them—speaking their mother tongue, respecting their culture, and embodying Christ through humble service.
            </p>

            <div className="p-5 rounded-xl bg-brand-cream border border-brand-sand flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <span className="font-bold text-brand-navy block mb-1">
                  Our Conviction: The Local Church is God's Chosen Instrument
                </span>
                <span className="text-brand-muted">
                  We don't send outside missionaries from across oceans. We equip Ethiopian local churches to reach their near-neighbors.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <CTAButton to="/why/least-reached" variant="primary" size="md">
                <span>Understand Why Least-Reached Matters</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Visual Narrative */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/5] bg-brand-navy">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80"
                alt="Ethiopian church community"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-brand-navy-dark/75 backdrop-blur-sm border border-white/10">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider block mb-1">
                  Ethiopian Alliance Focus
                </span>
                <p className="text-sm text-slate-200 font-medium">
                  Catalyzing church clusters in Oromia, Somali borderland, Benishangul-Gumuz, Afar, and Gambella regions.
                </p>
              </div>
            </div>

            {/* Geometric Accent Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-card border border-brand-sand hidden sm:block max-w-[200px]">
              <span className="text-2xl font-black text-brand-navy block font-display">1/3</span>
              <span className="text-xs text-brand-muted leading-tight block mt-1">
                Of humanity still waiting to hear the Gospel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
