import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { PARTNER_CHURCHES } from '../data/leadershipData';
import { Church, Handshake, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export const AboutPartnersPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Church & Denominational Partners"
        description="Partnering evangelical denominations, associations, and church clusters collaborating with Global Disciples Alliance Ethiopia."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'About Us', href: '/about' }, { label: 'Church & Denominational Partners' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              KINGDOM COLLABORATION
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Partnering Denominations & Alliances
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We work in active partnership with the historical and evangelical families of Ethiopian Christianity, building bridges for united Great Commission witness.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Intro Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-sand flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              The Cluster Principle: Unity in Diversity
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Rather than forcing churches to change their denominational identity or liturgy, we bring congregations together into local clusters focused on unreached mission. Each church maintains its distinct heritage while sharing in joint prayer, training, and sending.
            </p>
          </div>
          <CTAButton to="/get-involved/partner" variant="primary" size="md" className="whitespace-nowrap">
            <span>Cluster Your Church</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>

        {/* Partner Church Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNER_CHURCHES.map((partner) => (
            <div
              key={partner.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-sand shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-xl text-brand-navy px-3 py-1 bg-brand-cream rounded-lg border border-brand-sand">
                    {partner.logoText}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {partner.region}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-brand-navy mb-1">
                  {partner.name}
                </h3>

                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-3">
                  {partner.denominationOrAlliance}
                </span>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {partner.involvement}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-ethiopia-green font-medium">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Active Collaborative Partner</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
