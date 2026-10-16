import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { MapPin, Compass, ShieldAlert, ArrowRight, Layers, Info } from 'lucide-react';

export const EthiopiaContextPage: React.FC = () => {
  const corridors = [
    {
      name: "Afar Regional Lowlands",
      location: "Northeast Ethiopia",
      context: "Pastoralist communities along the Danakil depression and Awash River valley. Deep clan loyalty with minimal evangelical witness.",
      strategy: "Discipleship-makers trained in camel trade, solar repairs, and dryland veterinary services."
    },
    {
      name: "Somali Border & Lowlands",
      location: "Eastern & Southeastern Zones",
      context: "Nomadic pastoralists with deep poetic oral traditions and strong religious resistance to external structures.",
      strategy: "Relational chronological Bible storying in Somali idiom; workers operating livestock and goods retail."
    },
    {
      name: "Benishangul-Gumuz River Basin",
      location: "Northwestern Border with Sudan",
      context: "Diverse ethnolinguistic groups across remote highland valleys, often isolated during rainy seasons.",
      strategy: "Grain milling and tailoring micro-enterprises creating centers for community hospitality and prayer."
    },
    {
      name: "Gambella & South Omo Valley",
      location: "Western & Southwestern Ethiopia",
      context: "Indigenous ethnic communities with distinctive cultural traditions undergoing rapid modernization.",
      strategy: "Cluster churches in adjacent towns sending young evangelists to live in villages."
    },
    {
      name: "Rural Oromia Pockets",
      location: "Central & Western Rangelands",
      context: "Traditional rural localities where ancestral customs remain the primary spiritual authority.",
      strategy: "Engaging village elders with respect, hosting house fellowships in agricultural farmsteads."
    }
  ];

  return (
    <>
      <SEO
        title="Ethiopia Context & Strategic Corridors"
        description="Understanding Ethiopia's unique ethnolinguistic landscape, least-reached people groups, and regional sending corridors."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Why Least-Reached', href: '/why/least-reached' }, { label: 'Ethiopia Context' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              REGIONAL REALITY & OPPORTUNITY
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Ethiopia: An Ancient Land with Modern Frontiers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the linguistic diversity, religious landscape, and strategic geographic corridors where the Ethiopian church is mobilizing for frontline mission.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Context Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase">DEMOGRAPHICS</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">120M+</span>
            </div>
            <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Second Most Populous in Africa</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              A youthful nation with over 60% of the population under 25 years of age, presenting an extraordinary generation ready to be trained and mobilized.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase">LANGUAGES</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">80+ Tongues</span>
            </div>
            <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Rich Ethnolinguistic Mosaic</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              From Semitic and Cushitic to Omotic and Nilo-Saharan language families, effective ministry demands mother-tongue scripture engagement and contextualization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-400 uppercase">UNREACHED GROUPS</span>
              <PlaceholderBadge label="Verified Survey" />
            </div>
            <h3 className="font-display text-lg font-bold text-brand-navy mb-2">34 Identified Least-Reached</h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Verified groups across nomadic lowlands and remote borders with less than 2% evangelical believers, designated as high priority for cluster church sending.
            </p>
          </div>
        </div>

        {/* 5 Corridors Breakdown */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
              FIELD CORRIDORS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              5 Strategic Sending Corridors in Ethiopia
            </h2>
          </div>

          <div className="space-y-4">
            {corridors.map((c, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-sand shadow-subtle hover:shadow-card transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {c.location}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">
                      {c.name}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {c.context}
                    </p>
                  </div>

                  <div className="md:w-80 p-4 rounded-xl bg-brand-cream border border-brand-sand text-xs space-y-1">
                    <span className="font-bold text-brand-navy block">Alliance Strategy:</span>
                    <span className="text-brand-muted leading-relaxed block">{c.strategy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy text-white text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Will You Pray for These Corridors?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6">
            Our intercessory prayer network covers each of these regions with 24/7 prayer shields and field intelligence briefings.
          </p>
          <CTAButton to="/get-involved/pray" variant="primary" size="md">
            <span>Join the Frontline Prayer Shield</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>
      </div>
    </>
  );
};
