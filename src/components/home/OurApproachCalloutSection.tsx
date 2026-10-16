import React from 'react';
import { Link } from 'react-router-dom';

export const OurApproachCalloutSection: React.FC = () => {
  return (
    <section className="relative bg-[#0070E0] text-white pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
      {/* Overlapping Faces Collage cutting into the top curve matching Image 2 */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 -mt-28 sm:-mt-36 md:-mt-44 mb-10 flex-wrap sm:flex-nowrap">
        {/* Face 1: Smiling elder man on left */}
        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
            alt="Smiling elderly man"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Face 2: Smiling woman in yellow headscarf */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
            alt="Woman smiling in headscarf"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Face 3: Young girl smiling */}
        <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-slate-200 self-center">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
            alt="Young girl smiling"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Face 4: Grandmother */}
        <div className="hidden sm:block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-slate-200 self-start">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
            alt="Smiling elder woman"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Face 5: Smiling woman with traditional necklace */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-slate-200 self-center">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
            alt="Woman smiling"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Face 6: Large circular portrait of Ethiopian boy smiling */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
            alt="Ethiopian boy smiling warmly"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Narrative & Callout matching Image 2 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        {/* Label: Our Approach */}
        <span className="font-sans font-bold text-sm sm:text-base text-white/90 tracking-wide block">
          Our Approach
        </span>

        {/* Headline: Equipping People to Reach Their Nations. */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white max-w-3xl mx-auto">
          Equipping People to Reach <em className="italic font-normal">Their</em> Nations.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal leading-relaxed">
          We train leaders living near least-reached communities to multiply disciples.
        </p>

        {/* Learn More Button matching Image 2 */}
        <div className="pt-4">
          <Link
            to="/approach"
            className="inline-block px-9 py-3 rounded-full text-sm font-extrabold bg-[#F2BA13] hover:bg-[#DBA408] text-slate-950 transition-all shadow-md hover:scale-105 active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
