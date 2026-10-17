import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPartnerVisible, setIsPartnerVisible] = useState(false);
  const partnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPartnerVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (partnerRef.current) {
      observer.observe(partnerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#F4F9FB] text-slate-900 selection:bg-[#0073E6] selection:text-white">
      <SEO
        title={t('About Us | Global Disciples', 'ስለ እኛ | ግሎባል ዲሳይፕልስ')}
        description={t(
          'Get to know Global Disciples: our vision, prayer, mission, central focus, philosophy, core values, and how to become a monthly partner.',
          'ስለ ግሎባል ዲሳይፕልስ ይወቁ፡ ራዕያችን፣ ጸሎታችን፣ ተልዕኳችን፣ ዋና ትኩረታችን፣ ፍልስፍናችን፣ እሴቶቻችን እና ወርሃዊ አጋር የመሆን ዕድል።'
        )}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO & ONE THIRD OF OUR WORLD (Image 1)        */}
      {/* ========================================================= */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Eyebrow & Page Title */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3">
            {t('GET TO KNOW US', 'ስለ እኛ ይወቁ')}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0c2340] tracking-tight inline-flex items-baseline justify-center">
            <span>{t('About Us', 'ስለ እኛ')}</span>
            {/* Signature Blue Arc Graphic following title in Image 1 */}
            <span
              className="inline-block ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0073E6] rounded-tr-full rounded-br-full"
              aria-hidden="true"
            />
          </h1>
        </div>

        {/* 2-Column Content: Left Headline & Text, Right Split-Circle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Paragraphs */}
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2340] leading-[1.18] tracking-tight mb-6">
              <span className="text-[#0073E6]">
                {t('One third', 'አንድ ሦስተኛው')}
              </span>{' '}
              {t(
                'of our world has not yet heard the Good News of Jesus.',
                'የዓለማችን ክፍል እስካሁን የኢየሱስን መልካም ዜና አልሰማም።'
              )}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p>
                {t(
                  'We live in a time where many of those least-reached with the Gospel are within reach of a local church. Through our simple and effective strategy of training and coaching, believers share the Gospel in their own nations and cultures.',
                  'በወንጌል ያልተዳረሱት በርካቶች በአካባቢው ቤተክርስቲያን ተደራሽነት ውስጥ ባሉበት ዘመን ላይ እንኖራለን። በቀላል እና ውጤታማ የስልጠና እና የክትትል ስልታችን አማኞች በራሳቸው ሀገራት እና ባህሎች ወንጌልን ያካፍላሉ።'
                )}
              </p>
              <p>
                {t(
                  'Global Disciples helps the church fulfill this mission among unreached people groups.',
                  'ግሎባል ዲሳይፕልስ ቤተክርስቲያን ይህንን ተልእኮ ላልተዳረሱ የሕዝብ ቡድኖች እንድትፈጽም ይረዳል።'
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Split-Circle Visual (Image 1) */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden shadow-2xl border-4 border-white/60 bg-[#0073E6] flex flex-col justify-end">
              {/* Top 32% portion is solid blue backdrop */}
              <div className="absolute top-0 left-0 right-0 h-[32%] bg-[#0073E6] z-0" />

              {/* Bottom 68% portion is the child photo */}
              <div className="relative z-10 w-full h-[68%] overflow-hidden">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2022/04/GettyImages-497749324-768x1152.jpg"
                  alt="Boy looking directly at camera"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: FLOATING PORTRAITS & THREE PILLARS (Image 2)   */}
      {/* ========================================================= */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Floating Circular Portraits Cluster (Matching Image 2 layout with exact official assets) */}
        <div className="relative w-full max-w-6xl mx-auto h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] mb-12 sm:mb-16 overflow-hidden sm:overflow-visible">
          {/* 1. Large Left Circle: Yellow colonial door & barred window */}
          <div className="absolute left-[-20px] sm:left-[-10px] lg:left-0 top-[10%] sm:top-[5%] w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/25cd915a4189c74df48625e187a45aca-768x512.jpg"
              alt="Yellow wall and wooden door"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80';
              }}
            />
          </div>

          {/* 2. Small Top-Left Circle: Smiling Asian woman */}
          <div className="absolute left-[36%] sm:left-[30%] lg:left-[27%] top-[6%] sm:top-[4%] w-[65px] h-[65px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] rounded-full overflow-hidden shadow-lg border-2 sm:border-3 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/e2175d6cead18e6f6759aea0b416dd3b-768x513.jpg"
              alt="Smiling woman in blue"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>

          {/* 3. Center-Left Circle: Indigenous woman with hat & colorful poncho */}
          <div className="absolute left-[32%] sm:left-[33%] lg:left-[30%] top-[45%] sm:top-[42%] w-[85px] h-[85px] sm:w-[125px] sm:h-[125px] md:w-[160px] md:h-[160px] lg:w-[185px] lg:h-[185px] rounded-full overflow-hidden shadow-lg border-2 sm:border-4 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/361e396fcf60989dd41f30661e23001a-768x512.jpg"
              alt="Woman in traditional hat and woven poncho"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>

          {/* 4. Center-Top Circle: Smiling children sitting on porch */}
          <div className="absolute left-[50%] sm:left-[45%] lg:left-[41%] top-[8%] sm:top-[8%] w-[100px] h-[100px] sm:w-[145px] sm:h-[145px] md:w-[195px] md:h-[195px] lg:w-[225px] lg:h-[225px] rounded-full overflow-hidden shadow-xl border-3 sm:border-4 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/1c094c232bd723d3a96e3f53d9f4bc11-768x512.jpg"
              alt="Children smiling on porch"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80';
              }}
            />
          </div>

          {/* 5. Center-Right Circle: Elderly man with cross necklace & cardigan */}
          <div className="absolute right-[22%] sm:right-[26%] lg:right-[28%] top-[45%] sm:top-[44%] w-[85px] h-[85px] sm:w-[125px] sm:h-[125px] md:w-[160px] md:h-[160px] lg:w-[185px] lg:h-[185px] rounded-full overflow-hidden shadow-lg border-2 sm:border-4 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/948f93bc3cd5ab872d2ca36717d7b6f7-768x512.jpg"
              alt="Elderly gentleman with cross necklace"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>

          {/* 6. Far Right Large Circle: Ancient church fresco mural of Mary & Child */}
          <div className="absolute right-[-20px] sm:right-[-10px] lg:right-0 top-[10%] sm:top-[5%] w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2022/01/ec9c786792eccfbf040e23c13e798230-768x512.jpg"
              alt="Historic fresco mural dome"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80';
              }}
            />
          </div>
        </div>

        {/* Big Bold Headline Statement (Image 2) */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0c2340] leading-tight tracking-tight">
            {t(
              'Global Disciples helps the church fulfill this mission among unreached people groups.',
              'ግሎባል ዲሳይፕልስ ቤተክርስቲያን ይህንን ተልእኮ ላልተዳረሱ የሕዝብ ቡድኖች እንድትፈጽም ይረዳል።'
            )}
          </h2>
        </div>

        {/* Three Columns: Our Vision, Our Prayer, Our Mission (Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
          {/* Column 1: Our Vision */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#0c2340] mb-3">
              {t('Our Vision', 'ራዕያችን')}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t(
                'To see that every person has an opportunity to choose and follow Jesus Christ.',
                'እያንዳንዱ ሰው ኢየሱስ ክርስቶስን የመምረጥና የመከተል ዕድል እንዲያገኝ ማየት።'
              )}
            </p>
          </div>

          {/* Column 2: Our Prayer */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#0c2340] mb-3">
              {t('Our Prayer', 'ጸሎታችን')}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t(
                'That disciples of Jesus Christ, from many nations and vocations, will embrace this vision and do their part.',
                'የኢየሱስ ክርስቶስ ደቀመዛሙርት ከተለያዩ አገሮችና የሥራ መስኮች ይህንን ራዕይ ተቀብለው የበኩላቸውን እንዲወጡ።'
              )}
            </p>
          </div>

          {/* Column 3: Our Mission */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#0c2340] mb-3">
              {t('Our Mission', 'ተልዕኳችን')}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t(
                'To make it possible for clusters of churches to multiply Christ-like disciples and locally-sustainable fellowships among least-reached people.',
                'የአብያተ ክርስቲያናት ስብስቦች ክርስቶስን የሚመስሉ ደቀመዛሙርትን እንዲያፈሩና ላልተዳረሱ ሰዎች ራሳቸውን የሚችሉ ሕብረቶችን እንዲያባዙ ማስቻል ነው።'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FOCUS, PHILOSOPHY & VIDEO EMBED (Image 3)      */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Two Columns: Our Central Focus & Our Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mb-16 lg:mb-24">
          {/* Our Central Focus */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
              {t('Our Central Focus', 'ዋና ትኩረታችን')}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t(
                'To equip leaders selected by their churches to multiply Christ-like disciples, who multiply churches among least-reached people.',
                'በአብያተ ክርስቲያናቸው የተመረጡ መሪዎችን ክርስቶስን የሚመስሉ ደቀመዛሙርትን እንዲያባዙና ላልተዳረሱ ሰዎች መካከል አብያተ ክርስቲያናትን እንዲተክሉ ማስታጠቅ።'
              )}
            </p>
          </div>

          {/* Our Philosophy */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
              {t('Our Philosophy', 'ፍልስፍናችን')}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t(
                'That local expressions of the Body of Christ in close proximity to least-reached people are best able to reach them — and we all can help.',
                'ላልተዳረሱ ሰዎች በቅርበት ያሉ የክርስቶስ አካል የሆኑ የአካባቢ አብያተ ክርስቲያናት እነሱን ለመድረስ ከሁሉ የተሻለ አቅም አላቸው — እና ሁላችንም መርዳት እንችላለን።'
              )}
            </p>
          </div>
        </div>

        {/* Embedded Video Card (Matching Image 3) */}
        <div className="max-w-4xl mx-auto">
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer aspect-video bg-slate-900 border border-slate-200/80"
          >
            {/* Video Thumbnail: Mother in green scarf hugging child with joy */}
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
              alt="About Global Disciples"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

            {/* Top-Left Title Overlay Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2.5 z-10 text-white">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center p-1 border border-white/30">
                <span className="w-2.5 h-2.5 bg-[#0073E6] rounded-full" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold tracking-tight drop-shadow">
                  About Global Disciples
                </p>
                <p className="text-[10px] sm:text-xs text-white/80 drop-shadow">
                  Global Disciples International
                </p>
              </div>
            </div>

            {/* Center Red YouTube Play Button Icon (Matching Image 3) */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-11 sm:w-20 sm:h-14 bg-red-600 group-hover:bg-red-700 transition-colors rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/60 p-2 rounded-full"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/5-9Fw9kO_kU?autoplay=1"
              title="About Global Disciples"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SECTION 4: OUR VALUES (Image 4)                           */}
      {/* ========================================================= */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading & Subtext */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2340] tracking-tight mb-4">
            {t('Our Values', 'እሴቶቻችን')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {t(
              'Our core values set the pattern for relationships, ethics, communications, and dealing with conflict or issues of integrity.',
              'ዋና ዋና እሴቶቻችን ለግንኙነቶች፣ ለሥነ ምግባር፣ ለመግባባት እና ግጭቶችን ወይም የታማኝነት ጉዳዮችን ለመፍታት አቅጣጫ ያስቀምጣሉ።'
            )}
          </p>
        </div>

        {/* 6 Core Values Grid (3 Columns x 2 Rows, Matching Image 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl">
          {/* 1. Intimacy with Jesus */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Intimacy with Jesus', 'ከኢየሱስ ጋር መቀራረብ')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'Who we are and what we do flows from our relationship with Christ.',
                'ማንነታችንና የምንሠራው ነገር ከክርስቶስ ጋር ካለን ግንኙነት የሚመነጭ ነው።'
              )}
            </p>
          </div>

          {/* 2. Trusting Relationships */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Trusting Relationships', 'የታመኑ ግንኙነቶች')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'Building trust with our co-workers, partners, and donors is essential.',
                'ከሥራ ባልደረቦቻችን፣ አጋሮቻችንና ደጋፊዎቻችን ጋር እምነት መገንባት አስፈላጊ ነው።'
              )}
            </p>
          </div>

          {/* 3. Risk-Taking Obedience */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Risk-Taking Obedience', 'መስዋዕትነትን የሚጠይቅ መታዘዝ')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'Obeying Christ requires the courage to risk all for our God-given mission.',
                'ክርስቶስን መታዘዝ በእግዚአብሔር ለተሰጠን ተልዕኮ ሁሉንም ነገር ለመሰዋት ድፍረትን ይጠይቃል።'
              )}
            </p>
          </div>

          {/* 4. Unwavering Integrity */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Unwavering Integrity', 'የማይናወጥ ቅንነት')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'Being authentic, accountable, and truthful in our words and actions.',
                'በንግግራችንና በተግባራችን እውነተኛ፣ ተጠያቂና ታማኝ መሆን።'
              )}
            </p>
          </div>

          {/* 5. Serving with Humility */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Serving with Humility', 'በትህትና ማገልገል')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'Modeling the way of Jesus is our goal, living selflessly for God’s glory.',
                'የኢየሱስን መንገድ አርአያ ማድረግ ግባችን ነው፣ ለእግዚአብሔር ክብር ራስን በመሰዋት መኖር።'
              )}
            </p>
          </div>

          {/* 6. Transforming by Prayer */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-2 leading-snug">
              {t('Transforming by Prayer', 'በጸሎት መለወጥ')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t(
                'We want our work to be conceived, birthed, and carried out in prayer.',
                'ሥራችን በጸሎት እንዲፀነስ፣ እንዲወለድና እንዲከናወን እንፈልጋለን።'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CAREERS & CHURCH RESOURCES (Image 5)           */}
      {/* ========================================================= */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {/* Row 1: Careers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0073E6] tracking-tight mb-4">
              {t('Careers', 'የሥራ ዕድሎች')}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
              {t(
                'We are a prayer-fueled, mission-focused, Spirit-led group offering our professional abilities and passion to equip our culturally-diverse international team.',
                'ባህላዊ ብዝሃነት ያለውን ዓለም አቀፍ ቡድናችንን ለማስታጠቅ ሙያዊ ችሎታችንንና ፍላጎታችንን የምናቀርብ በጸሎት የምንተጋ፣ በተልዕኮ ላይ ያተኮርንና በመንፈስ የምንመራ ቡድን ነን።'
              )}
            </p>
            <Link
              to="/get-involved/volunteer"
              className="inline-block px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#0073E6] hover:bg-[#005bb5] text-white transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              {t('Join Our Team', 'ቡድናችንን ይቀላቀሉ')}
            </Link>
          </div>

          {/* Right Photo: Woman working at office desk */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 bg-white aspect-[4/3]">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/04/Assistant_GettyImages-638601928-1024x683.jpg"
                alt="Global Disciples team member at office desk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80';
                }}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Church Resources */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2340] tracking-tight mb-4">
            {t('Church Resources', 'የቤተክርስቲያን ግብዓቶች')}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
            {t(
              'We seek to build a partnership with your church to fuel the faith of your congregation for the unreached. Check out our resources.',
              'ያልተዳረሱትን ለመድረስ የምዕመናንዎን እምነት ለማነሳሳት ከቤተክርስቲያንዎ ጋር አጋርነት ለመፍጠር እንፈልጋለን። ግብዓቶቻችንን ይመልከቱ።'
            )}
          </p>
          <Link
            to="/resources"
            className="inline-block px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#0073E6] hover:bg-[#005bb5] text-white transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            {t('Learn More', 'ተጨማሪ ይወቁ')}
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: "CONSIDER BECOMING A MONTHLY PARTNER" (Exact UI/UX & Curve)     */}
      {/* Matches user's uploaded reference: media_1792229835340_d5d62a2b.png       */}
      {/* ========================================================================= */}
      <section
        ref={partnerRef}
        className="relative bg-[#F4F9FB] pt-24 sm:pt-32 lg:pt-40 overflow-hidden select-none"
        aria-label="Consider becoming a monthly partner"
      >
        {/* Floating Circular Portraits (Overlapping the light area above & the blue area below) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center">
            
            {/* 1. Portrait 1: Far Left (Large - Smiling young girl with scarf in community) */}
            <div
              className={`absolute left-[0%] sm:left-[2%] lg:left-[5%] top-[8%] sm:top-[4%] w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-84 lg:h-84 xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-2xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/44e83e780bfc4be259d57c958a2d8e8a-1-768x768.jpg"
                alt="Smiling young girl with scarf"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85';
                }}
              />
            </div>

            {/* 2. Portrait 2: Center-Left Top (Medium - Asian woman praying with eyes closed & hands clasped) */}
            <div
              className={`absolute left-[33%] sm:left-[35%] lg:left-[36%] top-[2%] sm:top-[0%] w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-3 sm:border-4 border-white shadow-2xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalGirlWorship.jpg"
                alt="Woman praying with hands clasped"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85';
                }}
              />
            </div>

            {/* 3. Portrait 3: Center-Left Low (Small - African woman stretching arms in prayer room) */}
            <div
              className={`absolute left-[30%] sm:left-[32%] lg:left-[33%] bottom-[10%] sm:bottom-[8%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/AfricanWomanPrayer-5.jpg"
                alt="Woman stretching arms in prayer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* 4. Portrait 4: Center-Right High (Small - Ethiopian women praying together) */}
            <div
              className={`absolute left-[50%] sm:left-[51%] lg:left-[52%] top-[8%] sm:top-[6%] w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/EthiopianWomenPraying-768x510.jpg"
                alt="Women praying together"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* 5. Portrait 5: Center-Right Low (Medium-Small - Children with hands raised in worship) */}
            <div
              className={`absolute left-[46%] sm:left-[47%] lg:left-[48%] bottom-[12%] sm:bottom-[10%] w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalDTWorship.jpg"
                alt="Children worshipping with hands raised"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=80';
                }}
              />
            </div>

            {/* 6. Portrait 6: Far Right (Extra Large - Joyful girl holding wooden post in leopard dress) */}
            <div
              className={`absolute right-[0%] sm:right-[1%] lg:right-[3%] top-[2%] w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-2xl transition-all duration-1000 ease-out transform ${
                isPartnerVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-90'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/3f22043cd9f2780cb8dfa11d0477340f-1-768x768.jpg"
                alt="Smiling young girl holding wooden pole"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85';
                }}
              />
            </div>
          </div>
        </div>

        {/* Solid Blue Section: Exact Horizon Line, Typography & Distances */}
        <div className="relative bg-[#0073E6] pt-36 sm:pt-48 md:pt-60 lg:pt-72 xl:pt-80 pb-24 sm:pb-32 lg:pb-36 -mt-28 sm:-mt-36 md:-mt-44 lg:-mt-52 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20">
            
            {/* Bold Headline matching screenshot */}
            <h2
              className={`font-sans font-bold text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] tracking-tight leading-tight mb-4 transition-all duration-1000 transform ${
                isPartnerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {t(
                'Consider becoming a monthly partner',
                'የወርሃዊ አጋር ለመሆን ያስቡበት'
              )}
            </h2>

            {/* Subtitle */}
            <p
              className={`text-xs sm:text-sm md:text-[15px] text-white/90 leading-relaxed max-w-xl mx-auto mb-8 font-normal transition-all duration-1000 transform ${
                isPartnerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {t(
                'It\'s easy and convenient. Consistent giving enables Global Disciples to continue training all year long.',
                'ቀላል እና አመቺ ነው። ተከታታይነት ያለው ስጦታ ግሎባል ዲሳይፕልስ ዓመቱን ሙሉ ስልጠናውን እንዲቀጥል ያስችለዋል።'
              )}
            </p>

            {/* Golden Yellow Button */}
            <div
              className={`transition-all duration-1000 transform ${
                isPartnerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <Link
                to="/give"
                className="inline-block bg-[#FFC72C] hover:bg-[#e6b325] text-[#002855] font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none uppercase tracking-wider"
              >
                {t('Join Us Today', 'ዛሬ ይቀላቀሉን')}
              </Link>
            </div>
          </div>

          {/* Bottom Downward Convex Arch Wave Dipping into the Agricultural Footer */}
          {/* Matches exactly the gentle dip visible in media_1792229835340_d5d62a2b.png */}
          <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg
              viewBox="0 0 1440 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-12 sm:h-20 lg:h-24 block text-[#0073E6]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L1440,0 L1440,25 Q720,95 0,25 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
