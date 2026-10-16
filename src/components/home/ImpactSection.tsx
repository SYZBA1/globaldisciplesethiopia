import React from 'react';
import { ShieldCheck, BarChart3, Info } from 'lucide-react';
import { IMPACT_METRICS } from '../../data/impactData';
import { ImpactCounter } from '../ui/ImpactCounter';

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy-dark text-white relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
            <BarChart3 className="w-4 h-4" />
            <span>MEASURING FRUITFULNESS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Verified Ministry Impact in Ethiopia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Behind every number is a local church mobilized, a worker sent, and a community hearing the Gospel for the first time.
          </p>
        </div>

        {/* 6 Large Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Metric Reporting Period */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/10">
                  <span className="font-semibold text-brand-gold">{metric.period}</span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Animated Value */}
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2">
                  <ImpactCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 mb-2">
                  {metric.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Source Attribution (PRD Section 19) */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                <Info className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span className="truncate" title={metric.source}>
                  Source: {metric.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability Statement */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 text-center max-w-2xl mx-auto">
          <p>
            * All statistics reflect verifiable reporting from participating Ethiopian church clusters, field supervisors, and annual alliance audits. No projections or inflated figures are used.
          </p>
        </div>
      </div>
    </section>
  );
};
