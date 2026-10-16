import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PROGRAMS } from '../../data/programsData';
import { ProgramCard } from '../ui/ProgramCard';
import { CTAButton } from '../ui/CTAButton';

export const ProgramsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>EQUIPPING PROGRAMS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Church-Based Training for Sustainable Multiplication
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              We provide practical, low-cost training programs that local church clusters operate within their own regional languages and cultural environments.
            </p>
          </div>

          <CTAButton to="/programs" variant="outline" size="md" className="self-start md:self-end">
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};
