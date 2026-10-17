import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const MonthlyPartnerSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F4F9FB] pt-20 sm:pt-28 overflow-hidden select-none"
    >
      {/* 1. Floating Round Portraits (Half in Light BG, Half in Blue Banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] flex items-center justify-center">
          
          {/* Portrait 1: Far Left (Large - Smiling young girl with headscarf) */}
          <div
            className={`absolute left-[2%] sm:left-[5%] lg:left-[8%] top-[10%] w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
              alt="Smiling girl with headscarf in community"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Portrait 2: Center-Top (Medium - Woman praying facing upward) */}
          <div
            className={`absolute left-[33%] sm:left-[35%] lg:left-[37%] top-[5%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85"
              alt="Woman praying with hands folded"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Portrait 3: Center-Left Low (Small - Community worker) */}
          <div
            className={`absolute left-[32%] sm:left-[34%] lg:left-[35%] bottom-[12%] w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Near-culture worker"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Portrait 4: Center-Right High (Small - Worker in hat) */}
          <div
            className={`absolute left-[50%] sm:left-[51%] lg:left-[50%] top-[12%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Believer in community"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Portrait 5: Center-Right Low (Medium-Small - Joyous worshippers) */}
          <div
            className={`absolute left-[47%] sm:left-[48%] lg:left-[47%] bottom-[15%] w-16 h-16 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
              alt="Joyful believers raising hands in praise"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Portrait 6: Far Right (Extra Large - Joyful smiling girl with walking stick) */}
          <div
            className={`absolute right-[0%] sm:right-[3%] lg:right-[6%] top-[2%] w-48 h-48 sm:w-64 sm:h-64 lg:w-84 lg:h-84 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85"
              alt="Joyful children smiling outdoors"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* 2. Vibrant Royal Blue Banner Section */}
      <div className="relative bg-[#0073E6] pt-36 sm:pt-48 md:pt-60 lg:pt-72 xl:pt-80 pb-24 sm:pb-32 lg:pb-36 -mt-28 sm:-mt-36 lg:-mt-44 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20">
          
          {/* Headline matching screenshot 5 */}
          <h2
            className={`font-serif font-black text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-tight mb-4 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Consider becoming a monthly partner
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm md:text-base text-blue-100/90 leading-relaxed max-w-xl mx-auto mb-8 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            It's easy and convenient. Consistent giving enables Global Disciples to continue training all year long.
          </p>

          {/* Golden Yellow Button */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <Link
              to="/give"
              className="inline-block bg-[#F79E1B] hover:bg-[#e68f14] text-slate-900 font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none"
            >
              Join Us Today
            </Link>
          </div>
        </div>

        {/* 3. Concave Bottom Arch Wave dividing the Blue Banner and the Footer */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 lg:h-20 block"
            preserveAspectRatio="none"
          >
            {/* The upward arch curve: higher in center, lower on flanks */}
            <path
              d="M 0,0 L 1440,0 L 1440,90 Q 720,10 0,90 Z"
              fill="#0073E6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
