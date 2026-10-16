import React from 'react';
import { ArrowRight, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Stats Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/5] bg-brand-navy">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="Ethiopian church leaders in prayer and fellowship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-transparent" />
            </div>

            {/* Floating Alliance Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-navy text-white p-5 rounded-2xl shadow-elevated border border-white/10 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  National & Global
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Locally directed in Ethiopia, working in strategic alliance with Global Disciples across 70+ nations worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Mission/Vision */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
              <HeartHandshake className="w-4 h-4" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              An indigenous alliance equipping churches to fulfill the Great Commission.
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Global Disciples Alliance Ethiopia is not an outside agency operating projects. We are a fellowship of Ethiopian church leaders, pastors, and mentors committed to multiplying disciple-makers through local congregations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white shadow-subtle border border-brand-sand">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                  Our Mission
                </div>
                <p className="text-sm text-brand-navy font-semibold leading-snug">
                  To motivate and equip Ethiopian churches to train disciple-makers to reach least-reached people groups.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white shadow-subtle border border-brand-sand">
                <div className="text-xs font-bold uppercase tracking-wider text-ethiopia-green mb-1">
                  Our Vision
                </div>
                <p className="text-sm text-brand-navy font-semibold leading-snug">
                  Every person in Ethiopia and neighboring Horn of Africa regions has an opportunity to choose and follow Jesus Christ.
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm text-brand-muted">
                  <strong className="text-brand-navy">Locally Owned & Funded:</strong> Programs are operated by clusters of Ethiopian churches rather than external subsidies.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm text-brand-muted">
                  <strong className="text-brand-navy">Near-Neighbor Principle:</strong> Believers who share linguistic, cultural, and geographic proximity carry the Gospel most effectively.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm text-brand-muted">
                  <strong className="text-brand-navy">Reproducible Simplicity:</strong> Every training model can be repeated by local churches without needing expensive infrastructure.
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <CTAButton to="/about" variant="secondary" size="md">
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTAButton>
              <CTAButton to="/about/leadership" variant="ghost" size="md">
                <span>Meet Our Leadership Team</span>
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
