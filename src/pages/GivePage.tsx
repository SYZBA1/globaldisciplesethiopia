import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { BANK_DETAILS, SITE_CONFIG } from '../data/siteData';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { Heart, Copy, Check, ShieldCheck, Sparkles, AlertCircle, ArrowRight, Wallet, Building2, Globe2 } from 'lucide-react';
import { CTAButton } from '../components/ui/CTAButton';

export const GivePage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const givingPillars = [
    {
      title: "Worker Micro-Enterprise Seed Capital",
      impact: "Provides small grants and revolving loans for frontline workers to launch grain mills, tailoring shops, and clinics.",
      amountExample: "5,000 – 15,000 ETB",
    },
    {
      title: "Vernacular Training Materials",
      impact: "Prints modular discipleship manuals in Amharic, Afaan Oromo, Somali, and regional Ethiopian dialects.",
      amountExample: "2,000 ETB / Trainee Set",
    },
    {
      title: "Cluster Director Coaching",
      impact: "Sponsors regional summits and field mentorship visits for Ethiopian church cluster leaders.",
      amountExample: "10,000 ETB / Cluster Cohort",
    }
  ];

  return (
    <>
      <SEO
        title="Give — Support Frontline Workers in Ethiopia"
        description="Support Global Disciples Alliance Ethiopia through Commercial Bank of Ethiopia, Telebirr, Dashen Bank, or international designated channels."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Give & Partner' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              KINGDOM GENEROSITY
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Invest in the Eternal Harvest of Ethiopia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              When you give, you are directly equipping Ethiopian disciple-makers to live, work, and plant multiplying fellowships in communities that have never heard the Gospel.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Compliance Notice per PRD Section 34 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-1">
              Notice on Official Ethiopian Financial Channels:
            </span>
            <span>
              In accordance with project specification Section 34 & 58, bank account numbers below represent official Ethiopian banking formats. Specific branch numbers and Telebirr merchant IDs are presented with verified placeholders awaiting final administrative activation from the Ethiopian Board of Trustees.
            </span>
          </div>
        </div>

        {/* What Your Giving Supports (PRD Section 34) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              KINGDOM STEWARDSHIP
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              What Your Giving Supports in Ethiopia
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Every Ethiopian Birr invested goes toward multiplying local capacity, not sustaining permanent administrative overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {givingPillars.map((pillar, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-brand-sand shadow-card flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-2">
                    {pillar.amountExample}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {pillar.impact}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-ethiopia-green font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Directed to Field Equipping</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banking and Mobile Money Transfer Methods (PRD Section 34) */}
        <div id="bank-details">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
              ETHIOPIAN PAYMENT METHODS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Direct Bank Transfer & Mobile Money
            </h2>
            <p className="text-sm text-brand-muted mt-1">
              Select your preferred service below to copy account details or transfer instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BANK_DETAILS.map((method) => (
              <div
                key={method.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-sand shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-display font-black text-xs">
                        {method.logoBadge}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-brand-navy">
                          {method.bankName}
                        </h3>
                        <span className="text-[11px] font-semibold text-brand-gold uppercase">
                          {method.serviceType}
                        </span>
                      </div>
                    </div>
                    {method.isOfficialPlaceholder && (
                      <PlaceholderBadge label="Pending Activation" />
                    )}
                  </div>

                  {/* Account Name */}
                  <div className="p-4 rounded-xl bg-brand-cream border border-brand-sand mb-4 space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Account Name:</span>
                      <strong className="text-brand-navy text-sm font-semibold block">
                        {method.accountName}
                      </strong>
                    </div>

                    {/* Account Number with Copy Trigger */}
                    <div>
                      <span className="text-slate-400 block text-[11px]">Account / Identifier:</span>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <code className="text-sm font-mono font-bold text-brand-navy bg-white px-2.5 py-1 rounded border border-slate-200 flex-grow">
                          {method.accountNumber}
                        </code>
                        <button
                          onClick={() => handleCopy(method.accountNumber, method.id)}
                          className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all ${
                            copiedId === method.id
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white hover:bg-brand-stone text-brand-navy border-brand-sand'
                          }`}
                          title="Copy account number"
                        >
                          {copiedId === method.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {method.branch && (
                      <div className="pt-1 text-[11px] text-slate-500">
                        <span>Branch: {method.branch}</span>
                        {method.swiftCode && method.swiftCode !== 'N/A' && (
                          <span className="ml-3">SWIFT: {method.swiftCode}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Instructions */}
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {method.instructions}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Send receipt: info@globaldisciplesethiopia.org</span>
                  <span className="text-brand-gold font-bold">Tax Deductible in Ethiopia</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Transparency & Accountability (PRD Section 34) */}
        <section id="transparency" className="p-8 sm:p-12 rounded-3xl bg-brand-cream border border-brand-sand">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <ShieldCheck className="w-4 h-4" />
                <span>FINANCIAL INTEGRITY & AUDITS</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-navy">
                Our Commitment to Total Financial Accountability
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Global Disciples Alliance Ethiopia is committed to the highest standards of Christian integrity, transparent reporting, and independent external auditing. Every gift entrusted to us is governed under the fiduciary oversight of our Ethiopian Board of Trustees and subject to annual public accounting.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <CTAButton to="/resources" variant="outline" size="sm">
                <span>View Annual Audited Reports</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
