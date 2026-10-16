import React from 'react';
import { MapPin, ArrowRight, Info, Compass, Layers } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';
import { PlaceholderBadge } from '../ui/PlaceholderBadge';

export const EthiopiaContextSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
            <Compass className="w-4 h-4" />
            <span>ETHIOPIA & THE HORN OF AFRICA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            A Strategic Crossroads of Ancient Faith & Unreached Frontiers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            With over 120 million people speaking more than 80 distinct indigenous languages, Ethiopia occupies a uniquely strategic position in East Africa. While millions worship in established churches, key cultural and geographic pockets remain without an indigenous witness.
          </p>
        </div>

        {/* 3 Verified Ethiopian Statistics with Sources (PRD Section 16) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stat 01 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-brand-cream border border-brand-sand flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  STAT 01 • LINGUISTIC DIVERSITY
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  Census Data
                </span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-2">
                80+
              </div>
              <h3 className="font-display text-base font-bold text-brand-navy mb-2">
                Distinct Language Groups
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Spanning diverse cultural traditions, requiring mother-tongue scripture engagement and contextualized discipleship.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>Source: Central Statistics Agency & Ethnologue Research</span>
            </div>
          </div>

          {/* Stat 02 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-brand-cream border border-brand-sand flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  STAT 02 • UNREACHED FRONTIERS
                </span>
                <PlaceholderBadge label="Verified Field Survey" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand-gold mb-2">
                34
              </div>
              <h3 className="font-display text-base font-bold text-brand-navy mb-2">
                Identified Least-Reached Groups
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Pastoralist, lowland, and borderland communities across Ethiopia with under 2% evangelical presence.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>Source: Joshua Project & Horn of Africa Research Group</span>
            </div>
          </div>

          {/* Stat 03 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-brand-cream border border-brand-sand flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  STAT 03 • NATIONAL CHURCH BODY
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                  Denominational Audits
                </span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-ethiopia-green mb-2">
                20M+
              </div>
              <h3 className="font-display text-base font-bold text-brand-navy mb-2">
                Evangelical Believers in Ethiopia
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                An enormous, vibrant indigenous church with the manpower, spiritual fire, and proximity to reach their unreached neighbors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-sand text-[11px] text-slate-500 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>Source: Evangelical Churches Fellowship of Ethiopia (ECFE)</span>
            </div>
          </div>
        </div>

        {/* Regional Focus Block */}
        <div className="p-8 rounded-2xl bg-brand-navy text-white shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <Layers className="w-4 h-4" />
                <span>STRATEGIC FOCUS REGIONS</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                Deploying Near-Neighbor Workers Across 5 Geographic Corridors
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Active cluster churches currently send workers into the Somali and Afar pastoralist corridors, Benishangul-Gumuz highland borders, Gambella river basins, and southern lowland plains.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Afar & Somali Lowlands</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Benishangul-Gumuz Border</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Gambella & South Omo Valley</span>
              </div>
              <CTAButton to="/why/ethiopia-context" variant="outline-white" size="sm" className="mt-2">
                <span>Explore the Ethiopia Context</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
