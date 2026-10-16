import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="Terms of use and intellectual property guidelines for Global Disciples Alliance Ethiopia website."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Terms of Use' }]}
            className="text-slate-400 mb-6"
          />
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Effective Date: October 2026 • Global Disciples Alliance Ethiopia
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none text-brand-navy space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              1. Agreement to Terms
            </h2>
            <p className="text-brand-muted">
              By accessing and using the Global Disciples Alliance Ethiopia website (globaldisciplesethiopia.org), you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations in Ethiopia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              2. Intellectual Property & Curriculum Use
            </h2>
            <p className="text-brand-muted">
              All downloadable training outlines, reports, articles, videos, and graphics are the property of Global Disciples Alliance Ethiopia or licensed from Global Disciples International. Partner church clusters are granted permission to duplicate approved curricula solely for non-commercial ministry training purposes within accredited church clusters.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              3. Protection of Sensitive Field Information
            </h2>
            <p className="text-brand-muted">
              Users must not scrape, republish, or broadcast field testimonies, photos of sensitive frontline workers, or exact security locations onto public forums in a manner that compromises the physical security of workers in pioneer regions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              4. Disclaimer on Organizational Placeholders
            </h2>
            <p className="text-brand-muted">
              As detailed in the Project Requirements Specification v1.0, certain statistics, leadership rosters, and financial accounts are marked with explicit placeholder notices pending final verification and formal resolution by the Ethiopian Board of Trustees.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
