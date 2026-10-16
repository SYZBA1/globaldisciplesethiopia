import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Church, BookOpen, Send, Repeat, HeartHandshake } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

interface Step {
  step: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export const ApproachProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      step: "01",
      title: "EQUIP",
      tagline: "Uniting Local Church Clusters",
      description: "We bring together 3 to 10 neighboring local churches into a cooperative sending cluster. Rather than acting in denominational isolation, churches unite to pray, pool resources, and take shared ownership of pioneer mission.",
      icon: <Church className="w-6 h-6 text-brand-gold" />,
      details: [
        "Vision-casting retreats for local pastors and elders",
        "Joint prayer gatherings across denominational lines",
        "Local financing commitment without foreign reliance"
      ]
    },
    {
      step: "02",
      title: "TRAIN",
      tagline: "Church-Based Discipleship & Business Skills",
      description: "Cluster church directors lead intensive, low-cost training programs inside local church facilities. Trainees master relational disciple-making, prayer warfare, and small business viability.",
      icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
      details: [
        "Curriculum taught in regional Ethiopian languages",
        "Hands-on marketplace and tentmaking preparation",
        "Mentoring by experienced national church leaders"
      ]
    },
    {
      step: "03",
      title: "SEND",
      tagline: "Deploying Frontline Near-Neighbor Workers",
      description: "Trainees are commissioned by their sponsoring churches to relocate to least-reached localities, living among people who have never heard the Gospel.",
      icon: <Send className="w-6 h-6 text-brand-gold" />,
      details: [
        "Cluster church covering and weekly prayer backing",
        "Launching self-sustaining micro-enterprises",
        "Respectful immersion in local language and customs"
      ]
    },
    {
      step: "04",
      title: "MULTIPLY",
      tagline: "Birthing Reproducing House Fellowships",
      description: "As new believers come to faith in Christ, they are immediately discipled to share their testimony with family and neighbors, multiplying simple house churches.",
      icon: <Repeat className="w-6 h-6 text-brand-gold" />,
      details: [
        "Indigenous fellowship leaders raised from day one",
        "Immediate peer-to-peer disciple-making",
        "Gatherings meet in homes, under trees, or in shops"
      ]
    },
    {
      step: "05",
      title: "TRANSFORM",
      tagline: "Whole-Community Holistic Impact",
      description: "Gospel transformation bears fruit in family reconciliation, ethical marketplace practices, clean community care, and peaceful coexistence.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />,
      details: [
        "Sustainable economic life through micro-business",
        "Generational spiritual awakening",
        "Churches in turn adopting neighboring unreached groups"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
            HOW IT WORKS • OUR MODEL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            The 5-Stage Multiplying Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Our approach is built on a simple, reproducible biblical pattern that empowers Ethiopian churches to bear eternal fruit without external dependency.
          </p>
        </div>

        {/* 5-Step Process Tabs / Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-brand-navy text-white border-brand-navy shadow-elevated scale-[1.02]'
                    : 'bg-white text-brand-navy hover:bg-slate-50 border-brand-sand shadow-subtle'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-extrabold font-display ${
                      isSelected ? 'text-brand-gold' : 'text-slate-400'
                    }`}
                  >
                    STAGE {item.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/10' : 'bg-brand-cream'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="font-display font-extrabold text-base tracking-tight mb-1">
                  {item.title}
                </div>
                <div
                  className={`text-[11px] line-clamp-1 ${
                    isSelected ? 'text-slate-300' : 'text-brand-muted'
                  }`}
                >
                  {item.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-brand-sand shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-extrabold font-display text-brand-gold px-3 py-1 bg-brand-gold/10 rounded-full">
                  STAGE {steps[activeStep].step}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  {steps[activeStep].tagline}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy">
                {steps[activeStep].title}: {steps[activeStep].tagline}
              </h3>

              <p className="text-base text-brand-muted leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Distinctives:
                </span>
                {steps[activeStep].details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-brand-navy">
                    <CheckCircle2 className="w-4 h-4 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex items-center gap-4">
                <CTAButton to="/approach" variant="primary" size="md">
                  <span>Deep Dive Into Our Approach</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </CTAButton>
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                  >
                    <span>Next: {steps[activeStep + 1].title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-navy shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/30" />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-sm p-4 rounded-xl text-white text-xs">
                  <span className="font-bold text-brand-gold block mb-1">
                    Ethiopian Field Reality
                  </span>
                  <span>
                    Cluster churches take 100% responsibility for funding and following up on their sent workers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
