import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { PROGRAMS } from '../data/programsData';
import { STORIES } from '../data/storiesData';
import { StoryCard } from '../components/ui/StoryCard';
import { CheckCircle2, Clock, Users, BookOpen, ArrowRight, Compass } from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Map route aliases if needed
  const program = PROGRAMS.find((p) => p.slug === slug || p.id === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  // Find related story for this program
  const relatedStory = STORIES.find((s) => s.program_id === program.id) || STORIES[0];

  return (
    <>
      <SEO
        title={`${program.title} Program`}
        description={program.short_description}
      />

      {/* 1. Hero */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={program.featured_image}
            alt={program.title}
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Programs', href: '/programs' }, { label: program.title }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              PROGRAM 0{program.order}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              {program.title}
            </h1>
            <p className="text-lg sm:text-xl text-brand-gold font-medium mb-4">
              {program.subtitle}
            </p>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              {program.short_description}
            </p>
            <CTAButton to="/contact" variant="primary" size="md">
              <span>Inquire About Launching This Program</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Template Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* 2. Why This Program & Deep Description */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              WHY THIS PROGRAM EXISTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Addressing Real Frontline Bottlenecks
            </h2>
            <p className="text-base text-brand-muted leading-relaxed">
              {program.description}
            </p>
            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-sand">
              <span className="font-display font-bold text-sm text-brand-navy block mb-1">
                The Critical Problem Solved:
              </span>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {program.whyThisProgram}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-card border border-brand-sand aspect-[4/3]">
              <img
                src={program.featured_image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. What We Do */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-sand shadow-subtle">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              CURRICULUM & STRATEGY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              What We Do in This Program
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.whatWeDo.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-brand-cream border border-brand-sand flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-brand-navy leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Who Participates & 5. How Training Works */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-brand-cream border border-brand-sand">
            <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-brand-gold" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              CANDIDATE SELECTION
            </span>
            <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
              Who Participates
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {program.whoParticipates}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-brand-cream border border-brand-sand">
            <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-brand-gold" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              DELIVERY MODEL
            </span>
            <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
              How Training Works
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {program.trainingFormat}
            </p>
          </div>
        </section>

        {/* 6. Expected Outcomes & Impact */}
        <section className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              MEASURABLE FRUIT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
              Core Program Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {program.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/10 border border-white/10">
                <div className="text-brand-gold font-display font-black text-xl mb-2">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Related Field Story */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
              REAL-WORLD FRUIT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Testimony from This Program
            </h2>
          </div>
          <StoryCard story={relatedStory} layout="featured" />
        </section>

        {/* 8. Bottom CTA */}
        <div className="p-10 rounded-3xl bg-brand-cream border border-brand-sand text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
            Equip Your Church Cluster with This Program
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
            Contact our program coordination team to discuss curriculum materials, trainer certification, and cluster partnership.
          </p>
          <div className="flex justify-center gap-4">
            <CTAButton to="/contact" variant="primary" size="md">
              <span>Contact Us Today</span>
            </CTAButton>
            <CTAButton to="/programs" variant="outline" size="md">
              <span>Explore Other Programs</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
};
