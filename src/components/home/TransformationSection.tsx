import React from 'react';
import { Church, Send, Repeat, ArrowRight, CheckCircle } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export const TransformationSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "EQUIP CHURCHES",
      icon: <Church className="w-8 h-8 text-brand-gold" />,
      subtitle: "Uniting local congregations to sponsor pioneer mission",
      description: "We catalyze clusters of 3 to 10 local churches to take 100% ownership of reaching unreached people in their geographic proximity.",
      points: [
        "No foreign dependency",
        "Inter-denominational unity",
        "Local prayer & financial covering"
      ]
    },
    {
      num: "02",
      title: "TRAIN & SEND LEADERS",
      icon: <Send className="w-8 h-8 text-brand-gold" />,
      subtitle: "Equipping disciple-makers with viable small businesses",
      description: "Workers learn relational disciple-making and sustainable trade skills, entering communities not as charity recipients but as contributing neighbors.",
      points: [
        "Self-sustaining tentmaking",
        "Contextual language immersion",
        "Frontline accountability"
      ]
    },
    {
      num: "03",
      title: "MULTIPLY FELLOWSHIPS",
      icon: <Repeat className="w-8 h-8 text-brand-gold" />,
      subtitle: "Birthing self-reproducing spiritual movements",
      description: "New believers are immediately grounded in discipleship, multiplying house churches that in turn reach out to neighboring unreached clans.",
      points: [
        "Indigenous leadership from day one",
        "Rapid spiritual multiplication",
        "Community-wide transformation"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
            HOW COMMUNITIES ARE TRANSFORMED
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            A Proven Cycle of Spiritual & Community Multiplication
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            By keeping the local church at the center, the work remains sustainable, accountable, and spiritually vibrant for generations.
          </p>
        </div>

        {/* 3 Prominent Transformation Steps (PRD Section 22) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-sand shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl sm:text-5xl font-black text-brand-navy/15">
                    {step.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-sand flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-brand-navy tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
                  {step.subtitle}
                </p>

                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-2 border-t border-brand-sand pt-4">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-brand-navy">
                      <CheckCircle className="w-3.5 h-3.5 text-ethiopia-green flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-md">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <CTAButton to="/approach" variant="primary" size="md">
            <span>Learn More About the Alliance Model</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
