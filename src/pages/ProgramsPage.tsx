import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PROGRAMS } from '../data/programsData';
import { ProgramCard } from '../components/ui/ProgramCard';
import { Sparkles, ShieldCheck, Compass, Users } from 'lucide-react';
import { CTAButton } from '../components/ui/CTAButton';

export const ProgramsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Equipping Programs"
        description="Explore the church-based equipping programs offered by Global Disciples Alliance Ethiopia: Discipleship, Small Business, Leadership, and Church Multiplication."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Programs' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              CHURCH-BASED CURRICULA
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Equipping Programs Designed for Multiplication
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We empower local church clusters with proven training models that equip disciple-makers, foster small business sustainability, and develop servant leaders.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Core Distinctive Bar */}
        <div className="p-6 rounded-2xl bg-brand-cream border border-brand-sand grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-brand-navy">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <span className="font-bold block">100% Church-Based</span>
              <span className="text-brand-muted">Held in local church facilities, not costly campuses.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Compass className="w-5 h-5 text-ethiopia-green" />
            </div>
            <div>
              <span className="font-bold block">Field Practicum Integrated</span>
              <span className="text-brand-muted">Hands-on outreach in unreached villages during training.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-brand-navy" />
            </div>
            <div>
              <span className="font-bold block">Reproducible by Design</span>
              <span className="text-brand-muted">Local directors can repeat cohorts every year.</span>
            </div>
          </div>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-3xl bg-brand-navy text-white text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-3">
            Want to Launch a Training Cohort in Your Church?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6">
            We provide Master Trainer certification and curriculum support for qualifying church clusters.
          </p>
          <CTAButton to="/contact" variant="primary" size="md">
            <span>Inquire About Program Certification</span>
          </CTAButton>
        </div>
      </div>
    </>
  );
};
