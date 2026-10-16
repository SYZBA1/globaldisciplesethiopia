import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestModelSectionProps {
  onPlayVideo: (title?: string) => void;
}

export const InvestModelSection: React.FC<InvestModelSectionProps> = ({ onPlayVideo }) => {
  return (
    <section className="bg-[#F4F9FB] pt-8 pb-20 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Horizontal Giving Season Banner matching Screenshot 2 */}
        <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left: Black & white photo with text overlay */}
          <div className="md:col-span-8 relative aspect-[21/9] md:aspect-auto md:h-44 overflow-hidden bg-slate-900 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
              alt="Elderly smiling woman"
              className="w-full h-full object-cover grayscale brightness-90 contrast-125 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute left-6 sm:left-10 text-white">
              <span className="font-serif font-black text-xl tracking-tighter block leading-none opacity-90">
                global disciples
              </span>
              <span className="font-serif font-black text-3xl sm:text-4xl text-cyan-200 tracking-tight block leading-tight mt-1">
                A SEASON <br className="sm:hidden" />OF GIVING
              </span>
            </div>
          </div>

          {/* Right: Date & Giving link */}
          <div className="md:col-span-4 p-6 sm:p-8 bg-slate-50 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-slate-200">
            <div className="font-serif font-bold text-xl text-gd-blue">
              FaithfulGive<span className="text-slate-400 text-sm">.org</span>
            </div>
            <div className="font-sans font-extrabold text-xs sm:text-sm text-pink-600 uppercase tracking-widest mt-1">
              OCTOBER 18-20, 2026
            </div>
            <Link
              to="/give"
              className="mt-3 text-xs font-bold text-brand-navy hover:text-gd-blue underline"
            >
              Learn more & support frontline workers →
            </Link>
          </div>
        </div>

        {/* Two Editorial Video Cards matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Why should I invest? */}
          <div className="group flex flex-col">
            <div
              onClick={() => onPlayVideo("Why Should I Invest or Give?")}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card bg-slate-900 cursor-pointer mb-5 group-hover:shadow-elevated transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                alt="Young girl in Africa"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-gd-blue group-hover:border-gd-blue transition-all">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
              {/* Overlay text */}
              <div className="absolute bottom-4 left-5 right-5 text-white font-serif font-bold text-lg sm:text-xl drop-shadow-md">
                Why should I invest in Global Disciples?
              </div>
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-3 leading-snug">
              Why should I invest or give to Global Disciples Alliance Ethiopia?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              One reason people love to get involved with Global Disciples Alliance Ethiopia is that they can see the direct impact of their giving. Our financial investment equips local church clusters to train, send, and sustain frontline workers who plant reproducible fellowships in least-reached communities.
            </p>
          </div>

          {/* Card 2: The Global Disciples Model */}
          <div className="group flex flex-col">
            <div
              onClick={() => onPlayVideo("The Global Disciples Model")}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card bg-slate-900 cursor-pointer mb-5 group-hover:shadow-elevated transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="Ethiopian church cluster model"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-gd-blue group-hover:border-gd-blue transition-all">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
              {/* Overlay text */}
              <div className="absolute bottom-4 left-5 right-5 text-white font-serif font-bold text-lg sm:text-xl drop-shadow-md">
                The Global Disciples Model
              </div>
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-3 leading-snug">
              The Global Disciples Model
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Here's how we equip disciple-makers. We have three types of training available to local churches—discipleship, small business, and leadership. These churches prepare and send their own people to least-reached areas. It's simple. And it's multiplication. Take a look!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
