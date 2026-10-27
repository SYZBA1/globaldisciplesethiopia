import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { MultiplicationMatrix } from '../components/approach/MultiplicationMatrix';
import { TrainingCycleDiagram } from '../components/approach/TrainingCycleDiagram';
import { SustainabilitySlider } from '../components/approach/SustainabilitySlider';
import { MonthlyPartnerSection } from '../components/approach/MonthlyPartnerSection';
import { useLanguage } from '../context/LanguageContext';

interface MultiplicationStep {
  number: number;
  textEn: string;
  textAm: string;
}

const STEPS: MultiplicationStep[] = [
  {
    number: 1,
    textEn: 'A local church cluster selects a director.',
    textAm: 'የአካባቢ ቤተክርስቲያን ህብረት ዳይሬክተር ይመርጣል።',
  },
  {
    number: 2,
    textEn: 'The director annually trains 15 disciples makers.',
    textAm: 'ዳይሬክተሩ በየዓመቱ 15 ደቀመዝሙር አፍሪዎችን ያሰለጥናል።',
  },
  {
    number: 3,
    textEn: 'These 15 disciple makers reach 71 new disciples.',
    textAm: 'እነዚህ 15 ደቀመዝሙር አፍሪዎች 71 አዳዲስ ደቀመዛሙርትን ያደርሳሉ።',
  },
  {
    number: 4,
    textEn: 'This results in three new churches planted, with an average of 25 new disciples in each church.',
    textAm: 'ይህ በእያንዳንዱ ቤተክርስቲያን በአማካይ 25 አዳዲስ ደቀመዛሙርት ያሉባቸው ሦስት አዳዲስ አብያተ ክርስቲያናት እንዲተከሉ ያደርጋል።',
  },
];

export const ApproachPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-gd-blue selection:text-white">
      <SEO
        title={t('Our Approach | Global Disciples', 'አካሄዳችን | ግሎባል ዲሳይፕልስ')}
        description={t(
          'We train ordinary men and women to share the Gospel, make disciples, and plant churches among least-reached people.',
          'ተራ ወንዶችንና ሴቶችን ወንጌልን እንዲያካፍሉ፣ ደቀመዛሙርትን እንዲያፈሩ እና በትንሹ በተደረሱ ሕዝቦች መካከል አብያተ ክርስቲያናትን እንዲተክሉ እናሰለጥናለን።'
        )}
      />

      {/* 1. Page Title Banner matching Screenshot 1 */}
      <section className="bg-[#F4F9FB] pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1EA5FC] mb-4 block">
            {t('WHY LEAST-REACHED', 'ለምን በትንሹ የተደረሱ')}
          </span>
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-none inline-flex items-baseline justify-center">
            <span>{t('Our Approach', 'አካሄዳችን')}</span>
            {/* Signature sky-blue accent motif */}
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-tl-full bg-[#1EA5FC] ml-2 inline-block shrink-0 shadow-sm" />
          </h1>
        </div>
      </section>

      {/* 2. First Content Section matching Screenshot 1: Equipping People to Reach Their Nations */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                {t('Equipping', 'ማስታጠቅ')} <br />
                {t('People to Reach', 'ሰዎች እንዲደርሱ')} <br />
                <span className="font-serif italic font-bold">{t('Their Nations', 'ሀገራቸውን')}</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
                {t(
                  'As we engage in conversation with churches that are interested in our services, we always want to know what vision they have for reaching least-reached people. We are not there to do the work for them, but to help equip their own gifted leaders to do the teaching, training and coaching for their near-culture workers. Together we learn and grow.',
                  'አገልግሎታችንን ከሚፈልጉ አብያተ ክርስቲያናት ጋር ስንወያይ፣ በትንሹ ወደተደረሱ ሕዝቦች ለመድረስ ያላቸውን ራዕይ ሁልጊዜ ማወቅ እንፈልጋለን። እኛ ሥራውን ለእነሱ ልንሠራላቸው እዚያ አንገኝም፤ ነገር ግን የእነሱን ተሰጥኦ ያላቸው መሪዎች ለተቀራራቢ ባህል ሠራተኞቻቸው ማስተማር፣ ማሰልጠን እና ማሰልጠኛ እንዲያደርጉ ለመርዳት ነው። አብረን እንማራለን እናድጋለንም።'
                )}
              </p>

              <span className="text-sm font-serif italic text-slate-500 block">
                {t('The Global Disciples Approach', 'የግሎባል ዲሳይፕልስ አካሄድ')}
              </span>
            </div>

            {/* Right Column: Rounded training photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-[500px] border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Leaders learning and growing in discipleship training"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Interactive Multiplication Visualizer matching Screenshots 2, 3, 4, 5 */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <div className="max-w-2xl lg:max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[36px] text-slate-900 tracking-tight leading-[1.25]">
              {t(
                'We train ordinary men and women to share the Gospel, make disciples, and plant churches among least-reached people.',
                'ተራ ወንዶችንና ሴቶችን ወንጌልን እንዲያካፍሉ፣ ደቀመዛሙርትን እንዲያፈሩ እና በትንሹ በተደረሱ ሕዝቦች መካከል አብያተ ክርስቲያናትን እንዲተክሉ እናሰለጥናለን።'
              )}
            </h2>
          </div>

          {/* Grid Layout: Compact 4-Step List + Matrix Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 4 Numbered Sequential Steps with Reduced Gap */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:space-y-6">
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="w-full flex items-baseline gap-4 sm:gap-5 text-left cursor-pointer group transition-all duration-200 py-1 rounded-md focus:outline-none"
                  >
                    {/* Step Numeral (1, 2, 3, 4) */}
                    <span
                      className={`font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold leading-none shrink-0 transition-colors duration-300 ${
                        isActive ? 'text-[#0073E6]' : 'text-slate-300 group-hover:text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Step Description */}
                    <p
                      className={`text-sm sm:text-base leading-snug transition-colors duration-300 ${
                        isActive ? 'text-[#0073E6] font-bold' : 'text-slate-400 font-medium group-hover:text-slate-600'
                      }`}
                    >
                      {t(step.textEn, step.textAm)}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Cluster Multiplication Matrix */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <MultiplicationMatrix activeStep={activeStep} />
            </div>
          </div>
        </div>
      </section>
      {/* 4. Panoramic Sunset Bridge Silhouette Banner matching Image 1 */}
      <section className="bg-white pt-8 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/7] sm:aspect-[21/9] w-full bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=85"
              alt="Near-culture workers and believers silhouetted at golden sunset"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 5. "Our Training." Overview + 4-Circle Interlocking Diagram matching Image 1 & 2 */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 2-Column: Headline + Narrative vs Interlocking Circle Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
            {/* Left Column: Heading and narrative text */}
            <div className="lg:col-span-6">
              <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-[52px] text-slate-900 tracking-tight leading-[1.1] mb-6">
                {t('Our', 'የእኛ')} <br />
                {t('Training.', 'ስልጠና።')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {t(
                  'We see three aspects of training as interlocking parts in a greater strategy to multiply disciples and churches among least-reached people. A group or cluster of churches can start with one and add the other two. When all three trainings work together, we see the most significant and lasting multiplication.',
                  'ትንሹ በተደረሱ ሕዝቦች መካከል ደቀመዛሙርትን እና አብያተ ክርስቲያናትን ለማባዛት ሦስቱ የስልጠና ገጽታዎች እንደ ተያያዥ ክፍሎች እናያቸዋለን። የአብያተ ክርስቲያናት ስብስብ ወይም ክላስተር ከአንዱ ጀምሮ ሁለቱን ሊጨምር ይችላል። ሦስቱም ስልጠናዎች ተቀናጅተው ሲሠሩ፣ እጅግ ጉልህ እና ዘላቂ የሆነ ብዜት እናያለን።'
                )}
              </p>
            </div>

            {/* Right Column: Interlocking Circular Diagram */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <TrainingCycleDiagram />
            </div>
          </div>

          {/* Bottom 3-Column Detailed Breakdown matching Image 2 top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-slate-100">
            {/* Col 1 */}
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-3">
                {t('Discipleship-Mission Training', 'የደቀመዝሙርነት-ተልዕኮ ስልጠና')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'Discipleship-mission training prepares the disciple to go to a least-reached people group, make new disciples, and plant a locally sustainable, new fellowship of believers.',
                  'የደቀመዝሙርነት-ተልዕኮ ስልጠና ደቀመዝሙሩ በትንሹ ወደተደረሱ የሕዝብ ክፍሎች እንዲሄድ፣ አዳዲስ ደቀመዛሙርትን እንዲያፈራ እና በአካባቢው ዘላቂ የሆነ አዲስ የእምነት ማህበር እንዲተክል ያዘጋጃል።'
                )}
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-3">
                {t('Small Business Training', 'የአነስተኛ ንግድ ስልጠና')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'Small business training provides the church planter with a means of support. It also gives him or her an identity—or reason—to be in a community unreached with the Gospel.',
                  'የአነስተኛ ንግድ ስልጠና ለቤተክርስቲያን ተካዩ የድጋፍ መንገድ ይሰጠዋል። እንዲሁም ወንጌል ወዳልደረሰበት ማህበረሰብ ውስጥ ለመቆየት ማንነትን ወይም ተቀባይነትን ይሰጠዋል።'
                )}
              </p>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-3">
                {t('Leadership Training', 'የአመራር ስልጠና')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'Leadership training ensures that the church planter and the new fellowships established will grow and mature spiritually under Christ-like leaders and mentors.',
                  'የአመራር ስልጠና የቤተክርስቲያን ተካዩ እና የተመሰረቱት አዳዲስ ህብረቶች በክርስቶስ መሰል መሪዎች እና አማካሪዎች ስር በመንፈሳዊ እንዲያድጉ እና እንዲበስሉ ያረጋግጣል።'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Three Distinct Pillars: Locally Owned, Reproducible, and Sustainable matching Image 2 & 3 */}
      <section className="bg-[#F4F9FB] py-20 sm:py-28 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          
          {/* Pillar 1: Locally Owned. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-6">
              <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-tight mb-4">
                {t('Locally Owned.', 'በአካባቢው ባለቤትነት የተያዘ።')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t(
                  'All discipleship-mission and leadership programs are owned and operated by indigenous local churches. Global Disciples requires at least 3 churches to launch and fund a training program. This promotes local accountability, increases potential for support, and broadens the level of engagement. Program directors and trainers are selected from the supporting churches and then trained by Global Disciples.',
                  'ሁሉም የደቀመዝሙርነት-ተልዕኮ እና የአመራር መርሃ ግብሮች በአገር በቀል የአካባቢ አብያተ ክርስቲያናት ባለቤትነት የሚመሩ ናቸው። ግሎባል ዲሳይፕልስ የስልጠና መርሃ ግብር ለመጀመር እና የገንዘብ ድጋፍ ለማድረግ ቢያንስ 3 አብያተ ክርስቲያናትን ይፈልጋል። ይህም የአካባቢ ተጠያቂነትን ያበረታታል፣ የድጋፍ እድልን ይጨምራል፣ እና የተሳትፎ ደረጃን ያሰፋል።'
                )}
              </p>
            </div>

            {/* Right: Photograph */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] w-full max-w-[500px] border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Indigenous church leaders gathering outdoors in fellowship and prayer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Pillar 2: Reproducible. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-6">
              <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-tight mb-4">
                {t('Reproducible.', 'ሊባዛ የሚችል (የሚራባ)።')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t(
                  "The discipleship-mission and leadership model can be reproduced by those who've participated in the training. So graduates who plant churches can reproduce the discipleship mission training with the new believers in their churches. They then equip and send out a new wave of disciple making church planters. A growing number of Global Disciples-affiliated programs now have second and even third generation programs. This facilitates rapid multiplication and increases impact.",
                  'የደቀመዝሙርነት-ተልዕኮ እና የአመራር ሞዴል በስልጠናው በተሳተፉ ሰዎች ሊባዛ ይችላል። ስለዚህ አብያተ ክርስቲያናትን የተከሉ ተመራቂዎች በአብያተ ክርስቲያናቶቻቸው ካሉ አዳዲስ አማኞች ጋር የደቀመዝሙርነት ስልጠናውን መድገም ይችላሉ። ይህም ፈጣን ብዜትን ያመቻቻል እና ተፅእኖን ይጨምራል።'
                )}
              </p>
            </div>

            {/* Right: Photograph */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] w-full max-w-[500px] border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85"
                  alt="Local disciple makers and church planters training together"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Pillar 3: Sustainable. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-6">
              <h3 className="font-serif font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-tight mb-4">
                {t('Sustainable.', 'ቀጣይነት ያለው።')}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 max-w-xl">
                {t(
                  'The goal is that every program will be sustainable through the resources of the local church cluster which owns and operates it. The cluster provides at least 55% of the training expense starting the first year. For three years, Global Disciples offers a decreasing percentage in seed funds each year. By year four, local resources fully support the training.',
                  'ግቡ እያንዳንዱ መርሃ ግብር ባለቤት በሆነው እና በሚያስተዳድረው የአካባቢ ቤተክርስቲያን ክላስተር ሀብቶች ዘላቂ እንዲሆን ነው። ክላስተር ከመጀመሪያው ዓመት ጀምሮ ቢያንስ 55% የስልጠና ወጪን ያቀርባል። ለሦስት ዓመታት ግሎባል ዲሳይፕልስ በየዓመቱ እየቀነሰ የሚሄድ የመነሻ ፈንድ ያቀርባል። በአራተኛው ዓመት የአካባቢው ሀብቶች ስልጠናውን ሙሉ በሙሉ ይደግፋሉ።'
                )}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t(
                  'Discipleship-mission and small business development trainings use this track to sustainability; leadership development programs are self-funded from the beginning.',
                  'የደቀመዝሙርነት-ተልዕኮ እና የአነስተኛ ንግድ ልማት ስልጠናዎች ይህንን ወደ ዘላቂነት የሚወስደውን መንገድ ይጠቀማሉ፤ የአመራር ልማት መርሃ ግብሮች ከመጀመሪያው ጀምሮ በራሳቸው የሚደገፉ ናቸው።'
                )}
              </p>
            </div>

            {/* Right: Interactive Year-by-Year Sustainability Slider */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <SustainabilitySlider />
            </div>
          </div>

        </div>
      </section>

      {/* 7. "Consider becoming a monthly partner" Floating Portraits & CTA Banner matching Image 5 */}
      <MonthlyPartnerSection />
    </div>
  );
};
