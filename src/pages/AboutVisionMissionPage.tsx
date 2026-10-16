import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { CheckCircle2, Compass, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

export const AboutVisionMissionPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Vision, Mission & Values"
        description="The foundational vision, mission, core convictions, and values of Global Disciples Alliance Ethiopia."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'About Us', href: '/about' }, { label: 'Vision, Mission & Values' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              OUR GUIDING NORTH STAR
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Vision, Mission & Core Values
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Clear biblical convictions shaping our partnership with local churches, training curriculum, and field deployment.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white shadow-elevated border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-brand-gold" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              OUR ULTIMATE DESIRE
            </span>
            <h2 className="font-display text-3xl font-extrabold mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              To see every person in Ethiopia and neighboring Horn of Africa regions have an opportunity to choose and follow Jesus Christ as their Lord and Savior.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-sand shadow-card">
            <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-brand-sand flex items-center justify-center mb-6">
              <Compass className="w-8 h-8 text-brand-navy" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              OUR DAILY WORK
            </span>
            <h2 className="font-display text-3xl font-extrabold text-brand-navy mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              To motivate and equip clusters of local Ethiopian churches to train disciple-makers to reach least-reached people groups and multiply viable, reproducing fellowships.
            </p>
          </div>
        </div>

        {/* 6 Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 block">
              WHAT WE TREASURE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Six Inviolable Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">01</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">The Local Church as the Primary Instrument</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                We believe Jesus entrusted the Great Commission to His Church. We never bypass, replace, or build parallel structures to the local congregation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">02</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Near-Neighbor Priority</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Believers geographically, linguistically, and culturally adjacent to unreached people groups can bear witness with the greatest authenticity and natural affinity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">03</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Local Sustainability & Stewardship</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                We refuse to introduce financial dependency. Church clusters fund their own trainees, and workers support themselves through viable small businesses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">04</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Spiritual Multiplication</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Every disciple is trained to be a disciple-maker; every leader is tasked with raising the next leader; every fellowship is equipped to plant the next fellowship.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">05</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Interdenominational Unity</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                We cross denominational walls to gather Baptist, Pentecostal, Lutheran, and independent churches together under the singular banner of Christ's Great Commission.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-brand-sand shadow-subtle">
              <div className="text-brand-gold font-display font-black text-2xl mb-2">06</div>
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">Humility & Servant Leadership</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                We lead by serving. Frontline workers enter communities not as conquerors, but as washing feet, praying for the sick, and honoring local cultural customs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
