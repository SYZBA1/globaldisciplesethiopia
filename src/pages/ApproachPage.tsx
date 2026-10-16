import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { MultiplicationMatrix } from '../components/approach/MultiplicationMatrix';

interface MultiplicationStep {
  number: number;
  text: string;
}

const STEPS: MultiplicationStep[] = [
  {
    number: 1,
    text: 'A local church cluster selects a director.',
  },
  {
    number: 2,
    text: 'The director annually trains 15 disciples makers.',
  },
  {
    number: 3,
    text: 'These 15 disciple makers reach 71 new disciples.',
  },
  {
    number: 4,
    text: 'This results in three new churches planted, with an average of 25 new disciples in each church.',
  },
];

export const ApproachPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-gd-blue selection:text-white">
      <SEO
        title="Our Approach | Global Disciples"
        description="We train ordinary men and women to share the Gospel, make disciples, and plant churches among least-reached people."
      />

      {/* 1. Page Title Banner matching Screenshot 1 */}
      <section className="bg-[#F4F9FB] pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1EA5FC] mb-4 block">
            WHY LEAST-REACHED
          </span>
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-none inline-flex items-baseline justify-center">
            <span>Our Approach</span>
            {/* Signature sky-blue accent motif */}
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-tl-full bg-[#1EA5FC] ml-2 inline-block shrink-0 shadow-sm" />
          </h1>
        </div>
      </section>

      {/* 2. First Content Section matching Screenshot 1: Equipping People to Reach Their Nations */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Equipping <br />
                People to Reach <br />
                <span className="font-serif italic font-bold">Their Nations</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
                As we engage in conversation with churches that are interested in our services, we always want to know what vision they have for reaching least-reached people. We are not there to do the work for them, but to help equip their own gifted leaders to do the teaching, training and coaching for their near-culture workers. Together we learn and grow.
              </p>

              <span className="text-sm font-serif italic text-slate-500 block">
                The Global Disciples Approach
              </span>
            </div>

            {/* Right Column: Rounded training photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-[500px] border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Leaders learning and growing in discipleship training"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Interactive Multiplication Visualizer matching Screenshots 2, 3, 4, 5 */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="max-w-2xl lg:max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[36px] text-slate-900 tracking-tight leading-[1.25]">
              We train ordinary men and women to share the Gospel, make disciples, and plant churches among least-reached people.
            </h2>
          </div>

          {/* Grid Layout: Compact 4-Step List + Matrix Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 4 Numbered Sequential Steps with Reduced Gap */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:space-y-6">
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="w-full flex items-baseline gap-4 sm:gap-5 text-left cursor-pointer group transition-all duration-200 py-1 rounded-md focus:outline-none"
                  >
                    {/* Step Numeral (1, 2, 3, 4) */}
                    <span
                      className={`font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold leading-none shrink-0 transition-colors duration-300 ${
                        isActive ? 'text-[#0073E6]' : 'text-slate-300 group-hover:text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Step Description */}
                    <p
                      className={`text-sm sm:text-base leading-snug transition-colors duration-300 ${
                        isActive ? 'text-[#0073E6] font-bold' : 'text-slate-400 font-medium group-hover:text-slate-600'
                      }`}
                    >
                      {step.text}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Cluster Multiplication Matrix */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <MultiplicationMatrix activeStep={activeStep} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
