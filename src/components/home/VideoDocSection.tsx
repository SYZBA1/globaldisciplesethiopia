import React from 'react';
import { Play, Video, ArrowRight } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

interface VideoDocSectionProps {
  onPlayVideo: () => void;
}

export const VideoDocSection: React.FC<VideoDocSectionProps> = ({ onPlayVideo }) => {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Visual Block with Play Action */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] max-h-[580px] bg-slate-900 group">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85"
            alt="Ethiopian church discipleship training documentary"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/40 to-transparent" />

          {/* Center Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <button
              onClick={onPlayVideo}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-accent transition-all duration-300 hover:scale-110 hover:bg-brand-gold-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/50 group/btn mb-6"
              aria-label="Play documentary video"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1.5 transition-transform group-hover/btn:scale-110" />
            </button>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-3">
              <Video className="w-3.5 h-3.5 text-brand-gold" />
              <span>MINISTRY DOCUMENTARY • 8 MINUTES</span>
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl tracking-tight leading-tight">
              Near-Neighbors: The Ethiopian Church on the Move
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl hidden sm:block">
              Witness how local church clusters are sending their own sons and daughters to least-reached pastoralist and highland communities.
            </p>
          </div>

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-brand-navy-dark/80 backdrop-blur-md border border-white/10 text-white text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ethiopia-green animate-pulse" />
              <span className="text-slate-300">
                Filmed on location with partner churches across Ethiopia.
              </span>
            </div>

            <CTAButton to="/resources" variant="outline-white" size="sm">
              <span>More Media & Videos</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
