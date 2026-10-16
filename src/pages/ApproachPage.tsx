import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { ApproachProcessSection } from '../components/home/ApproachProcessSection';
import { FAQ_DATA } from '../data/faqData';
import { Church, CheckCircle2, Repeat, TrendingUp, ShieldCheck, HelpCircle, ArrowRight, ChevronDown } from 'lucide-react';

export const ApproachPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const approachFaqs = FAQ_DATA.filter((f) => f.category === 'Programs & Training' || f.category === 'About the Alliance');

  return (
    <>
      <SEO
        title="Our Approach & Ministry Model"
        description="Discover the Global Disciples approach: church clustering, near-neighbor missions, small business sustainability, and reproducible disciple-making."
      />

      {/* Hero */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Our Approach' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              OUR PROVEN MODEL
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              How Local Churches Reach the Unreached
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We equip clusters of Ethiopian congregations to train and send their own disciple-makers. A low-cost, self-funding, and spiritually reproducible approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Core Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              MINISTRY PHILOSOPHY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              No Buildings. No Dependency. Just the Church on Mission.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              For over a century, traditional missions often required huge physical campuses, foreign budgets, and professional western missionaries. While God used these in previous eras, the unreached world cannot wait for costly infrastructure.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Our philosophy places the indigenous local church at the center. Churches meet in existing spaces, use their own vernacular languages, select their own spiritual sons and daughters, and fund the effort with local resources.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-sand space-y-4">
              <h3 className="font-display text-xl font-bold text-brand-navy mb-4">
                The 4 Cornerstones of Our Approach:
              </h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">1. The Church Cluster:</strong>
                  <span className="text-brand-muted">Pastors join hands across denominations to sponsor and oversee sending cohorts.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">2. Church-Based Training:</strong>
                  <span className="text-brand-muted">Training is modular and local, preventing candidates from becoming detached from their communities.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">3. Small Business Livelihoods:</strong>
                  <span className="text-brand-muted">Workers are equipped with marketplace skills to generate their own family livelihood in the field.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-brand-navy block">4. Rapid Multiplication:</strong>
                  <span className="text-brand-muted">New fellowships reproduce from day one by training every new convert to share Jesus immediately.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 5-Stage Interactive Section */}
        <ApproachProcessSection />

        {/* Sustainability & Tentmaking Spotlight */}
        <section className="p-8 sm:p-12 rounded-3xl bg-brand-navy text-white shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <TrendingUp className="w-4 h-4" />
                <span>ECONOMIC SUSTAINABILITY</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
                Tentmaking: The Apostolic Model for Unreached Regions
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Like the Apostle Paul who sustained his missionary journeys by crafting tents, Ethiopian frontline disciple-makers are trained in small business management. A worker running an honest grain shop, repair service, or clinic is warmly welcomed in conservative or resistant villages. They earn daily respect, build organic friendships, and provide for their family without depending on foreign checks.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <CTAButton to="/programs/small-business" variant="primary" size="md">
                <span>Explore Small Business Program</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Model FAQs */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Frequently Asked Questions About the Approach
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {approachFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-brand-sand bg-white overflow-hidden shadow-subtle transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-base sm:text-lg text-brand-navy hover:text-brand-gold transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-gold' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-brand-muted leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-10 rounded-3xl bg-brand-cream border border-brand-sand text-center max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">
            Ready to Implement This in Your Church?
          </h3>
          <p className="text-sm text-brand-muted mb-6">
            We offer consultation, curriculum, and facilitator coaching to help your church fellowship adopt the cluster model.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/get-involved/partner" variant="primary" size="md">
              <span>Partner as a Church</span>
            </CTAButton>
            <CTAButton to="/contact" variant="outline" size="md">
              <span>Contact Us</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
};
