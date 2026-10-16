import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onPlayVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPlayVideo }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-between bg-slate-950 text-white overflow-hidden -mt-24 pt-28 sm:pt-36">
      {/* Background African Ministry Photography with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=85"
          alt="African church leader in natural light"
          className="w-full h-full object-cover object-center opacity-40 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Column: Headline, Narrative & Buttons */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Main Editorial Headline matching Screenshot 1 */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6">
              A Third of Our World <br />
              has not yet heard the <br />
              Good News of Jesus.
            </h1>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
              <strong className="text-white font-semibold">Global Disciples Alliance Ethiopia</strong> refers to this third of the world as <em className="italic">least-reached</em>. We live in a time where many of these people are within reach of a local church. Through our simple and effective strategy of training and coaching, believers share the Gospel in their own nations and cultures.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              We understand it's impossible to accomplish this mission alone. That's why we partner with hundreds of clusters of churches across Ethiopia and 2,541 clusters globally.
            </p>

            {/* Two Signature Pill Buttons matching Screenshot 1 */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onPlayVideo}
                className="px-8 py-3 rounded-full text-sm font-extrabold bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Play Video
              </button>

              <Link
                to="/stories"
                className="px-8 py-3 rounded-full text-sm font-extrabold bg-gd-blue hover:bg-gd-blue-dark text-white transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Stories
              </Link>
            </div>
          </div>

          {/* Right Column: The Signature Blue Circle with Laughing Woman in Red Headwrap */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* The Big Vibrant Blue Circle Motif */}
            <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full bg-gd-blue shadow-2xl overflow-hidden flex items-end justify-center border-4 border-white/10">
              {/* Inner Circular Portrait of Laughing Woman with Bright Red Headscarf */}
              <div className="w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden shadow-2xl relative translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                  alt="Joyful Ethiopian woman laughing in red headwrap"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition Curve matching Screenshot 1 */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-28 text-[#F4F9FB] preserve-3d"
        >
          <path
            d="M0 60C320 120 720 0 1080 60C1260 90 1380 90 1440 80V120H0V60Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
