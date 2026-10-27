import React from 'react';
import { Link } from 'react-router-dom';
import { ImpactCounter } from '../ui/ImpactCounter';
import { useLanguage } from '../../context/LanguageContext';

export const ImpactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F2F9FA] py-20 lg:py-28 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading matching Screenshot 4 */}
        <div className="max-w-4xl mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            {t(
              'Global Disciples comes alongside the local church to help ',
              'ግሎባል ደቀመዛሙርት አብያተ ክርስቲያናት '
            )}
            <span className="text-gd-pink font-serif italic font-bold">
              {t('mobilize their people.', 'ሕዝባቸውን እንዲያንቀሳቅሱ ከጎናቸው ይቆማል።')}
            </span>
          </h2>
        </div>

        {/* Subhead label */}
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-900">
            {t('A Year in Action:', 'የዓመቱ የሥራ ውጤት፡')}
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
              {t('Disciple-Makers Trained', 'የሰለጠኑ ደቀመዛሙርት አፍሪዎች')}
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">{t('2,350+ in Ethiopia', '2,350+ በኢትዮጵያ')}</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={95305} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              {t('New Believers in Fellowships', 'በህብረት ውስጥ ያሉ አዳዲስ አማኞች')}
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">{t('Verified Field Audits', 'የተረጋገጠ የመስክ ቆጠራ')}</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={4685} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              {t('New Churches Planted', 'የተተከሉ አዳዲስ አብያተ ክርስቲያናት')}
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">{t('720+ in Ethiopia', '720+ በኢትዮጵያ')}</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <div className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gd-blue tracking-tight mb-2">
              <ImpactCounter value={79} />
            </div>
            <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 leading-snug">
              {t('Countries Impacted', 'ተደራሽ የሆኑ ሀገራት')}
            </h3>
            <span className="text-[11px] text-slate-400 mt-1">{t('34 Least-Reached in Ethiopia', '34 ያልተዳረሱ በኢትዮጵያ')}</span>
          </div>
        </div>

        {/* Two Outline Pill Buttons matching Screenshot 4 */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/approach"
            className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gd-blue border-2 border-gd-blue hover:bg-gd-blue hover:text-white transition-all shadow-sm"
          >
            {t('Our Approach', 'አካሄዳችን')}
          </Link>
          <Link
            to="/resources"
            className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gd-blue border-2 border-gd-blue hover:bg-gd-blue hover:text-white transition-all shadow-sm"
          >
            {t('2026 Annual Report', 'የ2026 ዓመታዊ ሪፖርት')}
          </Link>
        </div>
      </div>
    </section>
  );
};
