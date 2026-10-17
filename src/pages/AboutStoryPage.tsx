import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Milestone {
  year: string;
  headlineEn: string;
  headlineAm: string;
  image: string;
  fallbackColor?: string;
}

const TIMELINE_DATA: Milestone[] = [
  {
    year: '1996',
    headlineEn:
      'Global Disciples is launched by Galen Burkholder in partnership with 5 discipleship-mission programs in Canada, Ethiopia, and the U.S.',
    headlineAm:
      'ግሎባል ዲሳይፕልስ በጌለን በርክሆልደር ከካናዳ፣ ኢትዮጵያ እና ከአሜሪካ 5 የደቀመዝሙርነት-ሚሽን ፕሮግራሞች ጋር በመተባበር ተጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/1996_Galen-Tim.jpg',
  },
  {
    year: '1998',
    headlineEn:
      'Business development activity begins to equip discipleship-mission directors and workers with locally sustainable business training.',
    headlineAm:
      'የደቀመዝሙርነትና ሚሽን አስተባባሪዎችንና ሠራተኞችን በአካባቢው ዘላቂ በሆነ የንግድ ስልጠና ለማስታጠቅ የንግድ ልማት እንቅስቃሴ ተጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/03/DSC2162-scaled.jpeg',
  },
  {
    year: '2002',
    headlineEn:
      'First training program launched in Sudan and expansion initiates across East and Central Africa.',
    headlineAm:
      'በሱዳን የመጀመሪያው የስልጠና ፕሮግራም ተጀምሮ በምሥራቅና መካከለኛው አፍሪካ መስፋፋት ጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2002-SudanSchool2-scaled.jpg',
  },
  {
    year: '2005',
    headlineEn:
      'Leadership Development (LEAD) training added to equip national church leaders to multiply clusters.',
    headlineAm:
      'የአገር በቀል አብያተ ክርስቲያናት መሪዎች የአብያተ ክርስቲያናት ስብስቦችን እንዲያባዙ ለማስታጠቅ የአመራር ብቃት (LEAD) ስልጠና ተጨመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2005-LEADIndia1.jpg',
  },
  {
    year: '2006',
    headlineEn:
      'Training programs expand across South Asia and Southeast Asia, reaching unreached language groups.',
    headlineAm:
      'የስልጠና ፕሮግራሞች በደቡብ እስያ እና ደቡብ ምስራቅ እስያ በመስፋፋት ያልተዳረሱ የቋንቋ ማህበረሰቦችን መድረስ ጀመሩ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2016-AfricaClassWork-scaled.jpg',
  },
  {
    year: '2008',
    headlineEn:
      'First cooperative church clusters formed in Ethiopia; expansion initiated across Latin America.',
    headlineAm:
      'በኢትዮጵያ የመጀመሪያዎቹ የትብብር አብያተ ክርስቲያናት ስብስቦች ተመሰረቱ፤ በላቲን አሜሪካም መስፋፋት ተጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/GujiChurchPeople.jpg',
  },
  {
    year: '2009',
    headlineEn:
      '1,000th discipleship-mission program launched worldwide among indigenous partner networks.',
    headlineAm:
      'በአገር በቀል አጋር አውታረ መረቦች መካከል 1,000ኛው የደቀመዝሙርነት-ሚሽን ፕሮግራም በዓለም ዙሪያ ተጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/Prayer-Cottage-3-800x600.jpg',
  },
  {
    year: '2010',
    headlineEn:
      'Over 10,000 new churches planted through indigenous partner networks across 35 nations.',
    headlineAm:
      'በ35 ሀገራት ውስጥ በአገር በቀል አጋር አውታረ መረቦች አማካኝነት ከ10,000 በላይ አዳዲስ አብያተ ክርስቲያናት ተተከሉ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/05/6-17-2023-insta.jpg',
  },
  {
    year: '2011',
    headlineEn:
      'Global Disciples expands into West Africa and the Sahel, equipping local believers in remote regions.',
    headlineAm:
      'ግሎባል ዲሳይፕልስ ወደ ምዕራብ አፍሪካ እና ሳህል በመስፋፋት ርቀው ባሉ አካባቢዎች ያሉ የአካባቢ አማኞችን አሰለጠነ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2002-SudanSchool2-scaled.jpg',
  },
  {
    year: '2012',
    headlineEn:
      'Small business development multiplies, empowering church planters to be 100% self-sustaining within four years.',
    headlineAm:
      'አነስተኛ የንግድ ልማት ተባዛ፣ ይህም ቤተክርስቲያን ተካዮች በአራት ዓመታት ውስጥ 100% ራሳቸውን እንዲችሉ አደረገ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/03/DSC2162-scaled.jpeg',
  },
  {
    year: '2014',
    headlineEn:
      'Frontline mission workers sent to over 50 unreached people groups with zero prior gospel presence.',
    headlineAm:
      'የግንባር ቀደም ሚሽን ሠራተኞች ከዚህ በፊት ምንም የወንጌል ብርሃን ወደሌላቸው ከ50 በላይ ላልተዳረሱ የሕዝብ ቡድኖች ተላኩ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2005-LEADIndia1.jpg',
  },
  {
    year: '2016',
    headlineEn:
      'Strategic focus launches for oral learners and unwritten languages across Central Asia and East Africa.',
    headlineAm:
      'በመካከለኛው እስያ እና በምሥራቅ አፍሪካ ባሉ ያልተጻፉ ቋንቋዎችና በቃል ተማሪዎች ላይ ስልታዊ ትኩረት ተጀመረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2016-AfricaClassWork-scaled.jpg',
  },
  {
    year: '2017',
    headlineEn:
      'Over 1,500 active clusters of churches collaborating globally to reach near-culture communities.',
    headlineAm:
      'ተቀራራቢ ባህል ያላቸውን ማህበረሰቦች ለመድረስ በዓለም ዙሪያ ከ1,500 በላይ ንቁ የአብያተ ክርስቲያናት ስብስቦች ተባበሩ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/05/6-17-2023-insta.jpg',
  },
  {
    year: '2018',
    headlineEn:
      'Global Disciples celebrates reaching communities in over 60 nations with indigenous-led disciple-making.',
    headlineAm:
      'ግሎባል ዲሳይፕልስ በአገር በቀል መሪዎች በሚመራ የደቀመዝሙር አፈራራት ከ60 በላይ በሆኑ ሀገራት ማህበረሰቦችን መድረሱን አከበረ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/GujiChurchPeople.jpg',
  },
  {
    year: '2019',
    headlineEn:
      'Prayer networks established across all five operational regions, anchoring every training cluster.',
    headlineAm:
      'እያንዳንዱን የስልጠና ስብስብ የሚያጠናክሩ የጸሎት አውታረ መረቦች በአምስቱም የክዋኔ ክልሎች ተመሰረቱ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/Prayer-Cottage-3-800x600.jpg',
  },
  {
    year: '2020',
    headlineEn:
      'Rapid adaptation to virtual mentoring and local resilience during global lockdowns as church planting accelerates.',
    headlineAm:
      'በአለም አቀፍ የእንቅስቃሴ ገደብ ወቅት ቤተክርስቲያን ተከላው እየተፋጠነ በነበረበት ጊዜ ፈጣን ምላሽና የአካባቢ ጽናት ተረጋገጠ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/03/DSC2162-scaled.jpeg',
  },
  {
    year: '2021',
    headlineEn:
      'Milestone of 2,000 active clusters planting over 3,000 new fellowships yearly among least-reached groups.',
    headlineAm:
      'ላልተዳረሱ ቡድኖች በየዓመቱ ከ3,000 በላይ አዳዲስ ህብረቶችን የሚተክሉ 2,000 ንቁ ስብስቦች ምዕራፍ ተመዘገበ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2022/04/2016-AfricaClassWork-scaled.jpg',
  },
  {
    year: '2023',
    headlineEn:
      'Over 2,500 church clusters operating in 70+ countries worldwide with indigenous leadership.',
    headlineAm:
      'በዓለም ዙሪያ ከ70 በላይ ሀገራት ውስጥ በአገር በቀል አመራር የሚንቀሳቀሱ ከ2,500 በላይ የአብያተ ክርስቲያናት ስብስቦች ደረሱ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2023/05/6-17-2023-insta.jpg',
  },
  {
    year: '2024',
    headlineEn:
      'Galen Burkholder, Founder of Global Disciples, transitioned out of his CEO role and into a role as Ambassador. Josh Keefer stepped in as the Interim CEO while Global Disciples searched for a new CEO.',
    headlineAm:
      'የግሎባል ዲሳይፕልስ መስራች የሆኑት ጌለን በርክሆልደር ከዋና ስራ አስፈፃሚነት (CEO) ወደ አምባሳደርነት ሚና ተሸጋገሩ። አዲስ ዋና ስራ አስፈፃሚ እስኪመረጥ ድረስ ጆሽ ኪፈር በጊዜያዊ ዋና ስራ አስፈፃሚነት ተረከቡ።',
    image:
      'https://globaldisciples.org/wp-content/uploads/2025/09/GalenJosh_CEOTransition3-scaled.jpeg',
  },
];

export const AboutStoryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll timeline track when activeIndex changes
  useEffect(() => {
    const activeBtn = document.getElementById(`timeline-year-${activeIndex}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeIndex]);

  const currentMilestone = TIMELINE_DATA[activeIndex];
  const nextMilestone =
    activeIndex + 1 < TIMELINE_DATA.length ? TIMELINE_DATA[activeIndex + 1] : null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_DATA.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TIMELINE_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-[#F4F9FB] text-slate-900 selection:bg-[#0073E6] selection:text-white">
      <SEO
        title={t('Our Beginnings | Global Disciples', 'ጅማሬያችን | ግሎባል ዲሳይፕልስ')}
        description={t(
          'In 1995, Global Disciples was birthed in a prayer cottage. Discover our history, milestones, and journey of equipping church planters to reach the least-reached.',
          'እ.ኤ.አ. በ1995 ግሎባል ዲሳይፕልስ በጸሎት ጎጆ ውስጥ ተወለደ። ታሪካችንን፣ ጉዟችንንና ያልተዳረሱትን ለመድረስ የምናደርገውን ጥረት ይመልከቱ።'
        )}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO & BIRTHED IN PRAYER (Matching Image 1)   */}
      {/* ========================================================= */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Eyebrow & Title */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3">
            {t('WHY LEAST-REACHED', 'ያልተዳረሱት ለምን?')}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0c2340] tracking-tight inline-flex items-baseline justify-center">
            <span>{t('Our Beginnings', 'ጅማሬያችን')}</span>
            {/* Signature Blue Arc Graphic following title in Image 1 */}
            <span
              className="inline-block ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0073E6] rounded-tr-full rounded-br-full"
              aria-hidden="true"
            />
          </h1>
        </div>

        {/* Birthed in Prayer: 2 Columns (Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0c2340] tracking-tight leading-tight mb-6">
              {t('Birthed in Prayer', 'በጸሎት የተወለደ')}
            </h2>
            <p className="text-sm sm:text-base md:text-[15px] text-slate-700 leading-relaxed font-normal">
              {t(
                'In 1995, Global Disciples was birthed in a prayer cottage. Confession, brokenness, and prayer led to the foundation of our ministry—to equip people in their own cultural context to send out mission workers to reach the least-reached.',
                'እ.ኤ.አ. በ1995 ግሎባል ዲሳይፕልስ በጸሎት ጎጆ ውስጥ ተወለደ። ኑዛዜ፣ መዋረድ እና ጸሎት ለአገልግሎታችን መሠረት ሆኑ—ሰዎች በራሳቸው የባህል አውድ ውስጥ ያልተዳረሱትን ለመድረስ የወንጌል መልእክተኞችን እንዲያሰለጥኑ እና እንዲልኩ።'
              )}
            </p>
          </div>

          {/* Right Red Cottage Photo */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 bg-white">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/04/Prayer-Cottage-3-800x600.jpg"
                alt="Global Disciples original prayer cottage 1995"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: OUR HISTORY (Matching Image 2)                 */}
      {/* ========================================================= */}
      <section className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Guji Church Gathering Photo */}
          <div className="w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 bg-white">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/04/GujiChurchPeople.jpg"
                alt="Guji thatched-roof church gathering in Ethiopia"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Text (3 Paragraphs) */}
          <div className="max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0c2340] tracking-tight leading-tight mb-6">
              {t('Our History', 'ታሪካችን')}
            </h2>

            <div className="space-y-4 text-xs sm:text-[13px] md:text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                {t(
                  'It was November 1995. Leaders from several discipleship and mission training programs had gathered for a day of prayer and fasting. They were drawn together by a common mission … a common desire: to ponder how to respond to churches worldwide asking for discipleship-mission training for young leaders in their nations.',
                  'ህዳር 1995 ነበር። ከተለያዩ የደቀመዝሙርነትና የሚሽን ማሰልጠኛ ፕሮግራሞች የተውጣጡ መሪዎች ለአንድ ቀን ጾምና ጸሎት ተሰበሰቡ። በጋራ ተልዕኮ... በጋራ ፍላጎት ተገናኙ፡ በየሀገራቸው ላሉ ወጣት መሪዎች የደቀመዝሙርነትና ሚሽን ስልጠና ለሚጠይቁ አብያተ ክርስቲያናት እንዴት ምላሽ እንደሚሰጡ ለማሰላሰል።'
                )}
              </p>

              <p>
                {t(
                  'The Holy Spirit moved the leaders to confession, brokenness, and prayer. They began to see how the barriers separating their ministries had fostered competition and pride … not collaboration and Global Disciples was born.',
                  'መንፈስ ቅዱስ መሪዎቹን ወደ ኑዛዜ፣ መዋረድና ጸሎት መራቸው። አገልግሎቶቻቸውን የከፋፈሉት እንቅፋቶች ውድድርንና ትዕቢትን እንጂ ትብብርን እንዳላመጡ ተመለከቱ... እናም ግሎባል ዲሳይፕልስ ተወለደ።'
                )}
              </p>

              <p>
                {t(
                  'Initially, Global Disciples offered Global Disciple Training (GDT). Then training was added in small business development and leadership development. Today, Global Disciples partners with 2,541 clusters of churches. We are present in 79 countries, equipping people in their own cultural context to send out near-culture mission workers to reach the least-reached, multiply believers and plant locally-sustainable fellowships and churches.',
                  'በመጀመሪያ ግሎባል ዲሳይፕልስ የግሎባል ደቀመዝሙር ስልጠናን (GDT) ሰጠ። ቀጥሎም አነስተኛ የንግድ ልማት እና የአመራር ብቃት ስልጠና ተጨመረ። ዛሬ ግሎባል ዲሳይፕልስ ከ2,541 የአብያተ ክርስቲያናት ስብስቦች ጋር በትብብር ይሰራል። በ79 ሀገራት ውስጥ እንገኛለን፣ ሰዎች በራሳቸው የባህል አውድ ውስጥ ያልተዳረሱትን ለመድረስ የወንጌል መልእክተኞችን እንዲያሰለጥኑ፣ አማኞችን እንዲያባዙ እና ራሳቸውን የሚችሉ ህብረቶችንና አብያተ ክርስቲያናትን እንዲተክሉ እናስታጥቃለን።'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CONVEX ARCH & INTERACTIVE TIMELINE (Images 3 & 4) */}
      {/* ========================================================= */}
      <div className="relative w-full">
        {/* Convex Curved Arch Transition (Matches bottom curve of light section in Image 2 / top curve in Image 3) */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mb-[1px]">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-24 block text-[#F4F9FB]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,75 Q720,0 0,75 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Full-Width Interactive Timeline Container with Photographic Backdrop */}
        <section
          className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-slate-950 text-white flex flex-col justify-between overflow-hidden"
          aria-label="Interactive Historical Timeline"
        >
          {/* Dynamic Background Image with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            {TIMELINE_DATA.map((milestone, idx) => (
              <div
                key={milestone.year}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={milestone.image}
                  alt={`Global Disciples milestone ${milestone.year}`}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            ))}

            {/* Vignette Gradients for Legibility (Darker at bottom & left, matching Image 3 & 4) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-20" />
          </div>

          {/* Timeline Top Spacing */}
          <div className="relative z-30 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-12 flex justify-between items-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/70">
              {t('HISTORICAL TIMELINE', 'ታሪካዊ የጊዜ ሰሌዳ')}
            </span>

            {/* Left/Right Prev & Next Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 border border-white/20"
                aria-label="Previous Milestone"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 border border-white/20"
                aria-label="Next Milestone"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Milestone Content & Next Preview (Image 3 & 4) */}
          <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-10 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Active Milestone (Takes 8-9 cols) */}
              <div className="lg:col-span-8 max-w-2xl animate-fade-in key={currentMilestone.year}">
                {/* Year Badge */}
                <p className="text-sm sm:text-base font-bold tracking-widest text-white/90 mb-3">
                  {currentMilestone.year}
                </p>

                {/* Milestone Headline: Large Serif Typography */}
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-snug sm:leading-tight">
                  {language === 'am'
                    ? currentMilestone.headlineAm
                    : currentMilestone.headlineEn}
                </h3>
              </div>

              {/* Next Milestone Peek Preview (Image 3 right side) */}
              {nextMilestone && (
                <div
                  onClick={() => setActiveIndex(activeIndex + 1)}
                  className="hidden lg:block lg:col-span-4 pl-8 border-l border-white/20 opacity-45 hover:opacity-85 transition-opacity cursor-pointer group"
                >
                  <p className="text-xs font-bold tracking-wider text-white/80 mb-2 group-hover:text-white">
                    {nextMilestone.year}
                  </p>
                  <p className="font-serif text-lg font-medium text-white/90 line-clamp-2 leading-snug group-hover:underline">
                    {language === 'am'
                      ? nextMilestone.headlineAm
                      : nextMilestone.headlineEn}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Horizontal Year Scrubber (Image 3 & 4) */}
          <div className="relative z-30 pb-10 sm:pb-12 pt-4 px-4 sm:px-6 lg:px-12 border-t border-white/10 backdrop-blur-[2px]">
            <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-none py-2">
              <div className="flex items-center gap-6 sm:gap-8 md:gap-10 min-w-max">
                {TIMELINE_DATA.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.year}
                      id={`timeline-year-${idx}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`relative pb-2 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'text-white font-black scale-110'
                          : 'text-white/50 hover:text-white/80'
                      }`}
                    >
                      <span>{item.year}</span>

                      {/* Active Indicator Underline matching Image 3 */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full transition-all" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* SECTION 4: GIVE MONTHLY BANNER (Matching Image 5)         */}
      {/* ========================================================= */}
      <div className="relative w-full bg-white">
        {/* Top Convex Arch into Blue CTA */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mb-[1px]">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 lg:h-20 block text-[#0073E6]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 L1440,80 L1440,25 Q720,0 0,25 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Solid Blue Section: Give monthly, reach the world */}
        <section className="bg-[#0073E6] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              {t('Give monthly,', 'በየወሩ ይስጡ፣')}
              <br className="hidden sm:inline" />
              {' '}
              {t('reach the world.', 'ዓለምን ይድረሱ።')}
            </h2>

            <p className="text-sm sm:text-base md:text-[17px] text-white/90 max-w-xl font-normal leading-relaxed mb-8">
              {t(
                'Join our community of monthly donors bringing the hope of Jesus to least-reached people groups around the world.',
                'የኢየሱስን ተስፋ ላልተዳረሱ የሕዝብ ቡድኖች ለማድረስ የየወሩ ደጋፊዎች ማህበረሰባችንን ይቀላቀሉ።'
              )}
            </p>

            <Link
              to="/give"
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#FFC72C] hover:bg-[#e6b325] text-[#002855] transition-all shadow-md hover:scale-105 active:scale-95"
            >
              {t('Join Us Today', 'ዛሬ ይቀላቀሉን')}
            </Link>
          </div>
        </section>

        {/* Bottom Convex Arch Dipping into Agricultural Footer (Matching Image 5) */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mt-[1px]">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-24 block text-[#0073E6]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,25 Q720,90 0,25 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutStoryPage;
