import React from 'react';
import { Link } from 'react-router-dom';
import { ImpactCounter } from '../ui/ImpactCounter';

export const ImpactSection: React.FC = () => {
  return (
    <section className="bg-[#F2F9FA] py-20 lg:py-28 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading matching Screenshot 4 */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Global Disciples comes alongside the local church to help{' '}
            <span className="text-gd-pink font-serif italic font-bold">
              mobilize their people.
            </span>
          </h2>
        </div>

        {/* Subhead label */}
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-900">
            A Year in Action:
          </span>
        </div>

        {/* 4 Large Blue Statistics Grid matching Screenshot 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-14">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={41004} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              Disciple-Makers <br />Trained
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">2,350+ in Ethiopia</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={95305} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              New Believers in <br />Fellowships
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">Verified Field Audits</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={4685} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              New Churches <br />Planted
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">720+ in Ethiopia</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={79} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              Countries <br />Impacted
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">34 Least-Reached in Ethiopia</span>
          </div>
        </div>

        {/* Two Outline Pill Buttons matching Screenshot 4 */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/approach"
            className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gd-blue border-2 border-gd-blue hover:bg-gd-blue hover:text-white transition-all shadow-sm"
          >
            Our Approach
          </Link>
          <Link
            to="/resources"
            className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gd-blue border-2 border-gd-blue hover:bg-gd-blue hover:text-white transition-all shadow-sm"
          >
            2026 Annual Report
          </Link>
        </div>
      </div>
    </section>
  );
};
