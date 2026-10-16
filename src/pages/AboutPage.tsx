import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { LEADERSHIP_MEMBERS, PARTNER_CHURCHES } from '../data/leadershipData';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Church, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Global Disciples Alliance Ethiopia, our history, mission, vision, values, and how we equip local churches."
      />

      {/* Hero Banner */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[{ label: 'About Us' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              OUR IDENTITY & CALLING
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Equipping the Ethiopian Church for Near-Neighbor Missions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Global Disciples Alliance Ethiopia is an indigenous, church-based equipping movement. We exist to see local congregations unite, train disciple-makers, and plant multiplying fellowships in least-reached communities.
            </p>
          </div>
        </div>
      </section>

      {/* Subpage Quick Nav Pills */}
      <div className="bg-white border-b border-brand-sand sticky top-16 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
            <Link to="/about" className="px-3.5 py-1.5 rounded-full bg-brand-navy text-white whitespace-nowrap">
              Overview
            </Link>
            <Link to="/about/story" className="px-3.5 py-1.5 rounded-full bg-brand-cream hover:bg-slate-200 text-brand-navy whitespace-nowrap">
              Our Story & Timeline
            </Link>
            <Link to="/about/vision-mission" className="px-3.5 py-1.5 rounded-full bg-brand-cream hover:bg-slate-200 text-brand-navy whitespace-nowrap">
              Vision, Mission & Values
            </Link>
            <Link to="/about/leadership" className="px-3.5 py-1.5 rounded-full bg-brand-cream hover:bg-slate-200 text-brand-navy whitespace-nowrap">
              Leadership & Trustees
            </Link>
            <Link to="/about/partners" className="px-3.5 py-1.5 rounded-full bg-brand-cream hover:bg-slate-200 text-brand-navy whitespace-nowrap">
              Denominational Partners
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              OUR ORIGIN
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
              Birthed from a Conviction for Unreached Communities
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Global Disciples began with a simple question: What would happen if local churches in developing nations took complete spiritual and practical ownership of reaching unreached people in their own neighborhoods?
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              In Ethiopia, that vision took root as pastors and denominational leaders realized that conventional Western missions models—often dependent on long-term foreign salaries—could not keep pace with the urgent harvest. Instead, by forming church clusters that sponsor and mentor their own workers, an indigenous church planting movement was catalyzed.
            </p>
            <div className="pt-2">
              <CTAButton to="/about/story" variant="outline" size="sm">
                <span>View Full Timeline & Story</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-card border border-brand-sand aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80"
                alt="Ethiopian church gathering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values Grid */}
        <section className="p-8 sm:p-12 rounded-3xl bg-brand-cream border border-brand-sand">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              What Drives Everything We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-7 rounded-2xl shadow-subtle border border-brand-sand">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Our Vision</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                To see every person in Ethiopia and neighboring Horn of Africa regions have an opportunity to choose and follow Jesus Christ.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-7 rounded-2xl shadow-subtle border border-brand-sand">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                <Church className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Our Mission</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                To motivate and equip clusters of Ethiopian churches to train disciple-makers to reach least-reached communities and multiply fellowships.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-7 rounded-2xl shadow-subtle border border-brand-sand">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Our Values</h3>
              <ul className="text-xs space-y-2 text-brand-muted">
                <li className="flex items-center gap-1.5 font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ethiopia-green flex-shrink-0" />
                  Local church ownership & stewardship
                </li>
                <li className="flex items-center gap-1.5 font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ethiopia-green flex-shrink-0" />
                  Near-neighbor cross-cultural focus
                </li>
                <li className="flex items-center gap-1.5 font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ethiopia-green flex-shrink-0" />
                  Self-sustaining marketplace livelihoods
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Preview */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
                SERVANT GOVERNANCE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Alliance Leadership & Advisory Council
              </h2>
            </div>
            <CTAButton to="/about/leadership" variant="outline" size="sm">
              <span>View All Leadership Profiles</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_MEMBERS.slice(0, 3).map((member) => (
              <div key={member.id} className="p-6 rounded-2xl bg-white border border-brand-sand shadow-card flex items-start gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-slate-200"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-gold uppercase">{member.title}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-navy leading-snug">
                    {member.name}
                  </h3>
                  <PlaceholderBadge label="Pending Official Appointment" className="mt-1" />
                  <p className="text-xs text-brand-muted line-clamp-2 pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Church Partners Preview */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-sand shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-sand">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-1">
                COOPERATIVE UNITY
              </span>
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Partner Denominations & Alliances
              </h3>
            </div>
            <CTAButton to="/about/partners" variant="outline" size="sm">
              <span>Explore All Partners</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </CTAButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {PARTNER_CHURCHES.map((partner) => (
              <div key={partner.id} className="p-4 rounded-xl bg-brand-cream border border-brand-sand flex flex-col items-center justify-center">
                <span className="font-display font-black text-sm text-brand-navy mb-1">
                  {partner.logoText}
                </span>
                <span className="text-[10px] text-brand-muted line-clamp-1">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center bg-brand-navy text-white p-10 sm:p-14 rounded-3xl">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-4">
            Partner With Us in Reaching Ethiopia's Least-Reached
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Whether through intercession, cluster church participation, or financial stewardship, help us equip frontline workers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/get-involved" variant="primary" size="md">
              <span>Get Involved</span>
            </CTAButton>
            <CTAButton to="/contact" variant="outline-white" size="md">
              <span>Contact Our Secretariat</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
};
