import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { Compass, Users, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhyLeastReachedPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Why Least-Reached? The One-Third Focus"
        description="Understanding the least-reached focus: why one-third of the world has no access to the Gospel and how near-neighbors can reach them."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Why Least-Reached' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              THE ONE-THIRD REALITY
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Why We Focus on the Least-Reached
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Over two billion people live in communities with virtually no church, no Christian neighbors, and no access to the Good News. Here is why our focus is undivided.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Definition Breakdown */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              DEFINING THE NEED
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              What Does "Least-Reached" Actually Mean?
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Missiologists estimate that approximately one-third of the global population resides in people groups where the indigenous church is either non-existent or has fewer than 2% believing Christians.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              This distinction is crucial: an unreached person is not merely someone who has chosen not to attend church; they are someone who cannot attend church because there is no church in their language, culture, or geographic vicinity.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-brand-sand flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">No Christian Friends or Neighbors:</strong>
                  <span className="text-brand-muted">They can live their entire lives without meeting a single person who knows Jesus.</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-sand flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">No Bibles in Their Mother Tongue:</strong>
                  <span className="text-brand-muted">Scripture has often not been translated or distributed in their regional idiom.</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-sand flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">Cultural & Geographic Isolation:</strong>
                  <span className="text-brand-muted">They reside in rugged highlands, vast nomadic rangelands, or sensitive borders.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white shadow-elevated">
              <span className="text-5xl sm:text-6xl font-black font-display text-brand-gold block mb-2">
                1/3
              </span>
              <h3 className="font-display text-xl font-bold mb-3">
                Of the World Still Waiting
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Most global Christian mission resources continue to be poured into areas that already have established churches. Global Disciples exists to redirect vision and manpower toward the final third.
              </p>
              <CTAButton to="/why/ethiopia-context" variant="primary" size="sm" className="w-full">
                <span>See the Ethiopia Context</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Why Near-Neighbors Are the Key */}
        <section className="p-8 sm:p-12 rounded-3xl bg-brand-cream border border-brand-sand">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              THE STRATEGIC KEY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Why Near-Neighbors Carry the Gospel Best
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              Rather than sending cross-oceanic missionaries who require years of language study and massive budgets, God has placed vibrant Ethiopian churches right on the doorstep of unreached communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-subtle">
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">
                Cultural Proximity
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Near-neighbors already understand the customs, hospitality codes, and relational dynamics of neighboring ethnic groups.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-subtle">
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">
                Cost & Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                By pairing discipleship with viable small businesses, workers survive and flourish without continuous outside foreign funds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-subtle">
              <h3 className="font-display font-bold text-base text-brand-navy mb-2">
                Long-Term Endurance
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Near-neighbor workers do not pack up when geopolitics shift. They put down roots, raise families, and become part of the community fabric.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
