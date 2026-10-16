import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const BigVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#F4F9FB] py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&rel=0"
              title="Global Disciples Mission Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer group"
            >
              {/* Cinematic Landscape Poster matching Screenshot 3 */}
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1800&q=85"
                alt="Two workers walking along pathway in countryside"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

              {/* Title bar on top left */}
              <div className="absolute top-6 left-6 text-white flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-xs">
                  GD
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-tight text-white drop-shadow">
                    30 Years of Mission: Equipping Churches
                  </h3>
                  <span className="text-[11px] text-slate-300 block">
                    Global Disciples Alliance Ethiopia
                  </span>
                </div>
              </div>

              {/* Iconic Center Red Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-[#FF0000] hover:bg-red-700 transition-all shadow-2xl flex items-center justify-center group-hover:scale-110 active:scale-95"
                  aria-label="Play YouTube Video"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </button>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
                <span>Duration: 8:39</span>
                <span className="font-bold text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Watch on YouTube
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
