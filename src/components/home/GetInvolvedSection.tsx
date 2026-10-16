import React from 'react';
import { Heart, Church, HandHeart, Sparkles, ArrowRight } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export const GetInvolvedSection: React.FC = () => {
  const actions = [
    {
      title: "PRAY",
      subtitle: "Join the Frontline Intercession Network",
      description: "Intercede for 34 identified unreached people groups and frontline disciple-makers facing hardship in pioneer regions.",
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      ctaText: "Join Prayer Network",
      ctaTo: "/get-involved/pray",
      bgImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PARTNER",
      subtitle: "Cluster Your Church for Mission",
      description: "Connect your local congregation with neighboring churches to sponsor and train disciple-makers in your region.",
      icon: <Church className="w-6 h-6 text-brand-gold" />,
      ctaText: "Explore Church Partnership",
      ctaTo: "/get-involved/partner",
      bgImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SERVE",
      subtitle: "Volunteer Your Skills & Profession",
      description: "Mentor frontline entrepreneurs, provide translation assistance, or support field training logistics.",
      icon: <HandHeart className="w-6 h-6 text-brand-gold" />,
      ctaText: "Volunteer With Us",
      ctaTo: "/get-involved/volunteer",
      bgImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "GIVE",
      subtitle: "Support Frontline Workers Directly",
      description: "Provide seed capital for worker micro-enterprises and training curriculum materials across Ethiopia.",
      icon: <Heart className="w-6 h-6 text-brand-gold" />,
      ctaText: "Give via Telebirr or Bank",
      ctaTo: "/give",
      bgImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
            HOW YOU CAN PARTICIPATE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Get Involved in What God is Doing in Ethiopia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Whether as an individual intercessor, a local church pastor, a business mentor, or a generous supporter, there is a vital place for you.
          </p>
        </div>

        {/* 4 Action Cards (PRD Section 23) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((act) => (
            <div
              key={act.title}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between bg-white border border-brand-sand hover:-translate-y-1"
            >
              {/* Top Image Banner */}
              <div className="relative h-44 overflow-hidden bg-brand-navy">
                <img
                  src={act.bgImage}
                  alt={act.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {act.icon}
                  </div>
                  <span className="font-display font-black text-xl tracking-tight">
                    {act.title}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-brand-navy mb-2">
                    {act.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>

                <CTAButton
                  to={act.ctaTo}
                  variant={act.title === 'GIVE' ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full font-bold justify-between"
                >
                  <span>{act.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
