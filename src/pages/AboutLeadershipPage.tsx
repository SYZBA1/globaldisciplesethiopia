import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { LEADERSHIP_MEMBERS } from '../data/leadershipData';
import { Mail, MapPin, ShieldCheck, AlertCircle } from 'lucide-react';

export const AboutLeadershipPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Leadership & Governance"
        description="The leadership team, Board of Trustees, and advisory council of Global Disciples Alliance Ethiopia."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'About Us', href: '/about' }, { label: 'Leadership & Governance' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              SPIRITUAL & FIDUCIARY STEWARDSHIP
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Alliance Leadership & Governance
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Meet the servant leaders, regional directors, and trustees providing spiritual oversight, strategic counsel, and fiduciary accountability.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder Alert Notice per PRD guidelines */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 mb-12">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-1">
              Notice on Official Ethiopian Organizational Appointments:
            </span>
            <span>
              In accordance with project specification Section 28 & 58, leadership titles and profiles below represent verified operational roles within the Ethiopian Alliance framework. Specific individual names and photographs are marked with official placeholders pending final publication clearance from the Ethiopian Board of Trustees.
            </span>
          </div>
        </div>

        {/* Leadership Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-sand shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-brand-navy/90 text-white text-[11px] font-bold">
                      {member.roleType}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                    {member.title}
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                    {member.name}
                  </h3>

                  <div className="mb-3">
                    <PlaceholderBadge label="Pending Official Appointment" />
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400">
                {member.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    {member.location}
                  </span>
                )}
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Governance Role
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
