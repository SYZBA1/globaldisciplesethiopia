import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

export const WhyLeastReachedPage: React.FC = () => {
  return (
    <>
      <SEO
        title="One Third | Why Least-Reached"
        description="A third of our world has not yet heard the good news of Jesus. Learn why Global Disciples focuses on equipping near-culture workers for least-reached peoples."
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

      {/* Content Section 1 matching Screenshot 3: "A third of our world..." */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
                A third of our world has <br className="hidden sm:inline" />
                not yet heard the good <br className="hidden sm:inline" />
                news of Jesus.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  Global Disciples refers to this third of the world as <em>"least-reached"</em>. We live in a time where many of these people are within reach of a local church.
                </p>
                <p>
                  Through our simple and effective strategy of training and coaching, believers share the Gospel in their own nations and cultures.
                </p>
                <p>
                  We understand it's impossible to accomplish this mission alone. That's why we partner with hundreds of clusters of churches across Ethiopia and 2,541 clusters in 79 nations globally.
                </p>
              </div>
            </div>

            {/* Right Column: Signature split circle (top photo / bottom blue) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl relative flex flex-col border-4 border-white/80">
                {/* Top Half: Photo of joyful smiling children */}
                <div className="h-1/2 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85"
                    alt="Smiling children in local community"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
                {/* Bottom Half: Solid Signature Brand Blue */}
                <div className="h-1/2 w-full bg-[#0B63CE]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 matching Screenshot 4: "Why we focus on the least-reached" */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
                Why we focus on the <br className="hidden sm:inline" />
                least-reached
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  We believe every person should have an opportunity to hear and respond to the Gospel of Jesus Christ. And we live in a time when many of those least-reached with the Good News of Jesus are within reach of a local church.
                </p>
                <p>
                  Rather than sending traditional cross-oceanic missionaries who face language barriers and high costs, we believe the church closest to the least-reached is God's primary instrument for transformation.
                </p>
              </div>
            </div>

            {/* Right Column: Signature split circle (elder with scarf / blue) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl relative flex flex-col border-4 border-white/80">
                {/* Top Half: Photo of elder with beard and scarf */}
                <div className="h-1/2 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                    alt="Elderly smiling African man in traditional scarf"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                {/* Bottom Half: Solid Signature Brand Blue */}
                <div className="h-1/2 w-full bg-[#0B63CE]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3 matching Screenshot 5: "How we reach the least-reached" */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, narrative text & yellow CTA button */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
                How we reach the least- <br className="hidden sm:inline" />
                reached
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                <p>
                  We do this by equipping "near-culture" mission workers—those who share the same or a similar culture with those they are working to reach.
                </p>
                <p>
                  We come alongside the local church to train ordinary men and women to share the Gospel, make disciples, and plant churches in their own nations. We partner with more than 2,541 clusters of churches in 79 nations.
                </p>
              </div>

              {/* Signature Yellow Pill Button matching Screenshot 5 */}
              <div>
                <Link
                  to="/approach"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  Our Approach
                </Link>
              </div>
            </div>

            {/* Right Column: Signature split circle (young girl / blue) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl relative flex flex-col border-4 border-white/80">
                {/* Top Half: Photo of young smiling girl */}
                <div className="h-1/2 w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85"
                    alt="Young smiling girl with traditional headscarf"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                {/* Bottom Half: Solid Signature Brand Blue */}
                <div className="h-1/2 w-full bg-[#0B63CE]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
