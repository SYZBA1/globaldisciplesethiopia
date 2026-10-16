import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

interface StoryStep {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
  image: string;
  alt: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    id: 'one-third',
    eyebrow: 'THE ONE-THIRD REALITY',
    title: 'A third of our world has not yet heard the good news of Jesus.',
    paragraphs: [
      'Global Disciples refers to this third of the world as "least-reached". We live in a time where many of these people are within reach of a local church.',
      'Through our simple and effective strategy of training and coaching, believers share the Gospel in their own nations and cultures.',
      'We understand it\'s impossible to accomplish this mission alone. That\'s why we partner with hundreds of clusters of churches across Ethiopia and 2,541 clusters globally.',
    ],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Smiling children in least-reached community',
  },
  {
    id: 'why-focus',
    eyebrow: 'WHY LEAST-REACHED',
    title: 'Why we focus on the least-reached',
    paragraphs: [
      'We believe every person should have an opportunity to hear and respond to the Gospel of Jesus Christ. And we live in a time when many of those least-reached with the Good News of Jesus are within reach of a local church.',
      'Rather than sending traditional cross-oceanic missionaries who face language barriers and high costs, we believe the church closest to the least-reached is God\'s primary instrument for transformation.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85',
    alt: 'Elderly Ethiopian man with beard and colorful scarf smiling',
  },
  {
    id: 'how-reach',
    eyebrow: 'EQUIPPING NEAR-NEIGHBORS',
    title: 'How we reach the least-reached',
    paragraphs: [
      'We do this by equipping "near-culture" mission workers—those who share the same or a similar culture with those they are working to reach.',
      'We come alongside the local church to train ordinary men and women to share the Gospel, make disciples, and plant churches in their own nations. We partner with more than 2,541 clusters of churches in 79 nations.',
    ],
    buttonText: 'Our Approach',
    buttonLink: '/approach',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    alt: 'Joyful smiling young Ethiopian girl with headscarf',
  },
];

export const WhyLeastReachedPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [revealProgress, setRevealProgress] = useState(0);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const halfwayThreshold = vh * 0.5;

          // 1. Text-Image Synchronization: check which text is at or past the halfway threshold
          let current = 0;
          stepRefs.current.forEach((el, index) => {
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= halfwayThreshold) {
                current = index;
              }
            }
          });
          setActiveStep(current);

          // 2. Expanding reveals & disappearing blue overlay transition
          if (revealSectionRef.current) {
            const rect = revealSectionRef.current.getBoundingClientRect();
            // Start receding when the approach section reaches 85% of viewport
            const triggerStart = vh * 0.85;
            const triggerEnd = vh * 0.25;

            if (rect.top <= triggerStart) {
              const progress = Math.min(1, Math.max(0, (triggerStart - rect.top) / (triggerStart - triggerEnd)));
              setRevealProgress(progress);
            } else {
              setRevealProgress(0);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-gd-blue selection:text-white">
      <SEO
        title="One Third | Why Least-Reached"
        description="A third of our world has not yet heard the good news of Jesus. Explore how Global Disciples equips near-culture workers to reach zero-access communities."
      />

      {/* Top Title Banner matching Screenshot 3 */}
      <section className="bg-[#F4F9FB] pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1EA5FC] mb-4 block">
            WHY LEAST-REACHED
          </span>
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-none inline-flex items-baseline justify-center">
            <span>One Third</span>
            {/* Signature sky-blue accent motif */}
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-tl-full bg-[#1EA5FC] ml-2 inline-block shrink-0 shadow-sm" />
          </h1>
        </div>
      </section>

      {/* Main Scrollytelling Section (Parallel Sync) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: The 3 Thematic Text Sections Scrolling Naturally */}
          <div className="lg:col-span-7 space-y-32 sm:space-y-48 lg:space-y-64 py-16 sm:py-24 lg:py-32">
            {STORY_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`transition-all duration-700 ease-out ${
                  activeStep === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-40 translate-y-2'
                }`}
              >
                {/* Active Indicator Eyebrow */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#1EA5FC]" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#1EA5FC]">
                    {step.eyebrow}
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
                  {step.title}
                </h2>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {step.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Optional Call to Action Button */}
                {step.buttonText && step.buttonLink && (
                  <div className="mt-8">
                    <Link
                      to={step.buttonLink}
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-sm hover:scale-105 active:scale-95"
                    >
                      {step.buttonText}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Fixed/Sticky Split-Circle Frame (Parallel Sync Visual) */}
          <div className="lg:col-span-5 sticky top-24 sm:top-28 lg:top-[22vh] z-20 py-6 sm:py-10 flex justify-center items-center pointer-events-none">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
              
              {/* Dynamic Image Swapping inside the Circular Frame */}
              {STORY_STEPS.map((step, idx) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    activeStep === idx
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}

              {/* The Signature Solid Blue Overlay ("ሰማያዊው") covering the bottom half */}
              {/* As the user scrolls into the approach reveal, it smoothly recedes down and fades */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0B63CE] transition-all duration-300 ease-out"
                style={{
                  transform: `translateY(${revealProgress * 110}%)`,
                  opacity: Math.max(0, 1 - revealProgress * 1.5),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 & 4: Expanding Reveals & Floating Round Portraits Transition */}
      {/* Matches Image_57.png (media_1792152150838_e99ce561.png) and storyboard panel ③ & ④ */}
      <section
        ref={revealSectionRef}
        className="relative bg-[#0B63CE] text-white pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden transition-colors duration-700"
      >
        {/* Subtle background ambient light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#084FA7] via-[#0B63CE] to-[#0A56B8] opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Round Portraits Collage */}
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] mb-12 sm:mb-16">
            
            {/* 1. Large Left Portrait: Laughing elder man */}
            <div
              className="absolute left-2 sm:left-6 lg:left-12 top-10 sm:top-8 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transition-all duration-700 ease-out"
              style={{
                transform: `scale(${0.7 + 0.3 * revealProgress}) translateY(${(1 - revealProgress) * 40}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                alt="Joyful elder leader"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 2. Top-Center Portrait: Joyful woman in yellow & blue headscarf */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 w-28 h-28 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-white/25 transition-all duration-700 delay-100 ease-out"
              style={{
                transform: `translateX(-50%) scale(${0.7 + 0.3 * revealProgress}) translateY(${(1 - revealProgress) * 30}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                alt="Woman in yellow scarf"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 3. Small Center-Right Portrait: Elder woman */}
            <div
              className="absolute left-[54%] sm:left-[55%] top-12 sm:top-14 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-xl border-2 border-white/30 transition-all duration-700 delay-150 ease-out"
              style={{
                transform: `scale(${0.6 + 0.4 * revealProgress}) translateY(${(1 - revealProgress) * 20}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Elderly disciple maker"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 4. Small Bottom-Left Portrait: Woman with traditional headpiece */}
            <div
              className="absolute left-[28%] sm:left-[32%] bottom-6 sm:bottom-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl border-2 border-white/30 transition-all duration-700 delay-200 ease-out"
              style={{
                transform: `scale(${0.6 + 0.4 * revealProgress}) translateY(${(1 - revealProgress) * 20}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                alt="Near-culture worker"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 5. Center-Bottom Portrait: Woman in green turban */}
            <div
              className="absolute left-[48%] sm:left-[50%] bottom-2 sm:bottom-4 w-22 h-22 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl border-2 border-white/30 transition-all duration-700 delay-250 ease-out"
              style={{
                transform: `scale(${0.6 + 0.4 * revealProgress}) translateY(${(1 - revealProgress) * 25}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="African church leader in green turban"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 6. Large Right Portrait: Young smiling boy */}
            <div
              className="absolute right-2 sm:right-6 lg:right-12 top-4 sm:top-6 w-44 h-44 sm:w-64 sm:h-64 lg:w-84 lg:h-84 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transition-all duration-700 delay-75 ease-out"
              style={{
                transform: `scale(${0.7 + 0.3 * revealProgress}) translateY(${(1 - revealProgress) * 45}px)`,
                opacity: revealProgress,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85"
                alt="Young smiling boy in community"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Centered Thematic Narrative matching Image_57.png */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 mb-3 block">
              Our Approach
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
              Equipping People to Reach <em className="italic font-serif">Their</em> Nations.
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
              We train leaders living near least-reached communities to multiply disciples.
            </p>
            <Link
              to="/approach"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
