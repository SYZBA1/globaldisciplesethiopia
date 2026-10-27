import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Download, ExternalLink, Check, Heart, X, Play } from 'lucide-react';

export const PrayPage: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Interactive state for Joshua Project prayer counter
  const [prayedToday, setPrayedToday] = useState(false);
  const [prayerCount, setPrayerCount] = useState(245);

  // Modal state for Prayer Calendar & Guide request
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [calendarEmail, setCalendarEmail] = useState('');
  const [calendarName, setCalendarName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePrayClick = () => {
    if (!prayedToday) {
      setPrayerCount((prev) => prev + 1);
      setPrayedToday(true);
    }
  };

  const handleCalendarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (calendarEmail.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsCalendarModalOpen(false);
        setIsSubmitted(false);
        setCalendarEmail('');
        setCalendarName('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pray — Global Disciples Ethiopia"
        description="At Global Disciples, we want our work to be conceived, birthed, and carried out in prayer. God does the impossible when His people pray."
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO & "LET'S PRAY TOGETHER" (Image 1)                         */}
      {/* ========================================================================= */}
      <section className="relative bg-[#F4F9FB] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Title matching Image 1 */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[#0073E6] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase mb-4 block">
              {t('GET INVOLVED', 'ይሳተፉ')}
            </span>

            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[96px] text-[#0c2340] font-bold tracking-tight inline-flex items-baseline relative">
              <span>{t('Pray', 'ይጸልዩ')}</span>
              {/* Signature decorative dot with cyan-blue half-circle arc matching Image 1 */}
              <span className="relative inline-block ml-1">
                .
                <span className="absolute -bottom-1 -right-4 w-4 h-2 bg-[#0073E6] rounded-t-full transform -rotate-12" />
              </span>
            </h1>
          </div>

          {/* Two-Column: "Let's Pray Together" & High-res Group Prayer Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading and Description */}
            <div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#0c2340] tracking-tight leading-tight mb-6">
                {t("Let's Pray Together", 'አብረን እንጸልይ')}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                {t(
                  'At Global Disciples, we want our work to be conceived, birthed, and carried out in prayer. God does the impossible when His people pray. We’ve seen it happen, and we’ll see it again!',
                  'በግሎባል ደቀመዛሙርት ሥራችን ሁሉ በጸሎት እንዲፀነስ፣ እንዲወለድ እና በጸሎት እንዲመራ እንፈልጋለን። የእግዚአብሔር ሕዝብ ሲጸልይ እርሱ የማይቻለውን ያደርጋል። ይህ ሲሆን አይተናል፣ እንደገናም እናየዋለን!'
                )}
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {t(
                  'Through prayer, you can be an influential partner in our work as you stand with us in prayer for all God is doing through Global Disciples.',
                  'በጸሎት በኩል እግዚአብሔር በግሎባል ደቀመዛሙርት በኩል ለሚያደርገው ነገር ሁሉ አብረውን በጸሎት በመቆም ተፅዕኖ ፈጣሪ አጋር መሆን ይችላሉ።'
                )}
              </p>
            </div>

            {/* Right Column: Hero Mountain Overlook Prayer Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-200">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2022/05/Praying.jpg"
                  alt="Believers praying on mountain peak overlooking valley"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WAYS YOU CAN GET INVOLVED WITH PRAYER (Images 2 & 3)           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading matching Image 2 */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0c2340] tracking-tight leading-tight mb-16 sm:mb-20">
            {t('Ways You Can Get Involved with Prayer', 'በጸሎት የሚሳተፉባቸው መንገዶች')}
          </h2>

          {/* Top Row: Items 1, 2, 3 matching Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-16 sm:mb-24">
            
            {/* 1. Daily Prayer Focus Alarm */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#E24B64] font-normal leading-none block mb-6 select-none">
                  1
                </span>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0c2340] mb-4 leading-snug">
                  {t('Daily Prayer Focus Alarm', 'ዕለታዊ የጸሎት ትኩረት ማንቂያ')}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {t(
                    'Set your alarm for either 9:38 AM/PM or 10:02 AM/PM as a reminder to PRAY. In both Matthew 9:38 and Luke 10:02, Jesus instructed us to pray to “Ask the Lord of the harvest, therefore, to send out workers into his harvest field.” We take this as a beautiful reminder to pray for those who have yet to hear the Good news of Jesus Christ.',
                    'የጸሎት ማስታወሻ እንዲሆን ማንቂያዎን በ 9:38 ጠዋት/ማታ ወይም በ 10:02 ጠዋት/ማታ ያስተካክሉ። በማቴዎስ 9:38 እና በሉቃስ 10:02 ኢየሱስ “እንግዲህ የመከሩን ጌታ ወደ መከሩ ሠራተኞችን እንዲልክ ለምኑት” ብሎ እንድንጸልይ አዟል። ይህንን የኢየሱስ ክርስቶስን የምሥራች ላልሰሙት ሁሉ ለመጸለይ እንደ ውብ ማስታወሻ እንወስደዋለን።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/playlist?list=PLgZhU7Sc9mfB8CAOW7T31-uj2XykKzsDM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t('Access Prayer', 'ጸሎቱን ያግኙ')}
                </a>
              </div>
            </div>

            {/* 2. Monthly Prayer Calendar */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#E24B64] font-normal leading-none block mb-6 select-none">
                  2
                </span>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0c2340] mb-4 leading-snug">
                  {t('Monthly Prayer Calendar', 'ወርሃዊ የጸሎት የቀን መቁጠሪያ')}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {t(
                    'Every month we email out a prayer calendar that contains daily prayer requests for what God is doing in Africa, Asia and Latin America among least-reached people.',
                    'በየወሩ እግዚአብሔር በአፍሪካ፣ በእስያ እና በላቲን አሜሪካ ባልተዳረሱ ሕዝቦች መካከል ለሚያደርገው ነገር ዕለታዊ የጸሎት ጥያቄዎችን የያዘ የጸሎት የቀን መቁጠሪያ በኢሜይል እንልካለን።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsCalendarModalOpen(true)}
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t('Get The Calendar', 'የቀን መቁጠሪያውን ያግኙ')}
                </button>
              </div>
            </div>

            {/* 3. 7-Day Prayer Guide: Praying for Least-reached People */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#E24B64] font-normal leading-none block mb-6 select-none">
                  3
                </span>
                <h3 className="font-bold text-xl sm:text-2xl text-[#0c2340] mb-4 leading-snug">
                  {t(
                    '7-Day Prayer Guide: Praying for Least-reached People',
                    'የ7-ቀን የጸሎት መመሪያ፡ ላልተዳረሱ ሕዝቦች መጸለይ'
                  )}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {t(
                    'Use this prayer guide on your own or with your family. It focuses on regions and people still in need of the Gospel. It can be used either as a daily or weekly prompt.',
                    'ይህን የጸሎት መመሪያ ብቻዎን ወይም ከቤተሰብዎ ጋር ይጠቀሙበት። አሁንም ወንጌል በሚያስፈልጋቸው ክልሎች እና ሕዝቦች ላይ ያተኩራል። እንደ ዕለታዊ ወይም ሳምንታዊ የጸሎት መነሻ ሊያገለግል ይችላል።'
                  )}
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://globaldisciples.org/wp-content/uploads/2023/03/Pray-for-the-Least-reached-Brochure-2023-web.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t('Download Now', 'አሁን ያውርዱ')}
                </a>
                <button
                  type="button"
                  onClick={() => setIsCalendarModalOpen(true)}
                  className="inline-block text-center bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t('Request Guide', 'መመሪያውን ይጠይቁ')}
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Row: Items 4, 5 and Joshua Project Card matching Image 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            
            {/* 4. Pray with Others */}
            <div>
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#E24B64] font-normal leading-none block mb-6 select-none">
                4
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0c2340] mb-4 leading-snug">
                {t('Pray with Others', 'ከሌሎች ጋር ይጸልዩ')}
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                {t(
                  'If you’d like to start or join an intercessory team in your area, please contact us at ',
                  'በአካባቢዎ የምልጃ ጸሎት ቡድን መጀመር ወይም መቀላቀል ከፈለጉ፣ እባክዎ በ '
                )}
                <a
                  href="mailto:prayer@globaldisciples.org"
                  className="text-[#0073E6] hover:underline font-medium break-all"
                >
                  prayer@globaldisciples.org
                </a>
                .
              </p>
            </div>

            {/* 5. Global Prayer Movement for the Unreached */}
            <div>
              <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#E24B64] font-normal leading-none block mb-6 select-none">
                5
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-[#0c2340] mb-4 leading-snug">
                {t('Global Prayer Movement for the Unreached', 'ላልተዳረሱት ዓለም አቀፍ የጸሎት እንቅስቃሴ')}
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                {t(
                  'Join others around the world who are praying for the unreached.',
                  'ላልተዳረሱት በመላው ዓለም ከሚጸልዩ ሌሎች አማኞች ጋር ይቀላቀሉ።'
                )}
              </p>
            </div>

            {/* Joshua Project Widget Card matching Image 3 */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[270px] border border-[#0073E6] rounded-sm overflow-hidden shadow-md bg-white">
                {/* Header Blue Banner */}
                <div className="bg-[#0073E6] text-white text-center py-2 px-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider">
                    {t('UNREACHED of the Day', 'የዕለቱ ያልተዳረሰ ሕዝብ')}
                  </h4>
                </div>

                {/* Person Photo */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src="https://joshuaproject.net/assets/media/profiles/photos/p14480.jpg"
                    alt="Pumi of China"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-3 text-center text-xs text-slate-700 bg-slate-50">
                  <p className="text-[11px] text-slate-500 italic mb-1">
                    {t('Pray for the ...', 'ይጸልዩ ለ...')}
                  </p>
                  <p className="font-bold text-sm text-[#0073E6] mb-2">
                    {t('Pumi of China', 'የቻይና ፑሚ')}
                  </p>

                  <div className="text-[11px] text-slate-600 space-y-0.5 mb-3 text-left pl-3">
                    <p>
                      <span className="font-semibold">{t('Population:', 'የሕዝብ ብዛት፡')}</span> 45,000
                    </p>
                    <p>
                      <span className="font-semibold">{t('Language:', 'ቋንቋ፡')}</span> {t('Pumi, Southern', 'ፑሚ፣ ደቡባዊ')}
                    </p>
                    <p>
                      <span className="font-semibold">{t('Religion:', 'ሃይማኖት፡')}</span> {t('Ethnic Religions', 'ብሔረሰባዊ እምነቶች')}
                    </p>
                    <p>
                      <span className="font-semibold">{t('Status:', 'ሁኔታ፡')}</span>{' '}
                      <span className="text-[#E24B64] font-bold">{t('Unreached', 'ያልተዳረሰ')}</span>
                    </p>
                  </div>

                  {/* Prayer Action Button Row */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={handlePrayClick}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-sm transition-all flex items-center gap-1 ${
                        prayedToday
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0073E6] hover:bg-[#005bb5] text-white active:scale-95'
                      }`}
                    >
                      {prayedToday ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>{t('Praying', 'እየጸለይኩ ነው')}</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-3 h-3 fill-current" />
                          <span>{t('I am Praying', 'እጸልያለሁ')}</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] font-bold text-[#0073E6] border border-[#0073E6] px-2 py-1 rounded-sm bg-white">
                      {prayerCount} {t('Praying', 'እየጸለዩ ነው')}
                    </div>
                  </div>
                </div>

                {/* Footer Link matching Image 3 */}
                <div className="bg-[#0073E6] text-white text-[9px] text-center py-1.5 px-2 leading-tight">
                  <a
                    href="https://joshuaproject.net/upgotd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t(
                      'Get Unreached of the Day by email, mobile app, podcast or widget.',
                      'የዕለቱ ያልተዳረሱትን በኢሜይል፣ በመተግበሪያ፣ በፖድካስት ያግኙ።'
                    )}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SCRIPTURES & VIDEO (Image 4)                                   */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4F9FB] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: 3 Scripture Quotes matching Image 4 */}
            <div className="space-y-8">
              {/* Scripture 1 */}
              <blockquote className="text-slate-800 italic text-base sm:text-lg leading-relaxed font-normal">
                {t(
                  'Again I say to you, that if two believers on earth agree [that is, are of one mind, in harmony] about anything that they ask [within the will of God], it will be done for them by My Father in heaven. For where two or three are gathered in My name [meeting together as My followers], I am there among them.—Matthew 18:19-20',
                  'ደግሞ እላችኋለሁ፥ ከእናንተ ሁለቱ በምድር በማናቸውም በሚለምኑት ነገር ሁሉ ቢስማሙ በሰማያት ካለው ከአባቴ ዘንድ ይደረግላቸዋል። ሁለት ወይም ሦስት በስሜ በሚሰበሰቡበት በዚያ በመካከላቸው እሆናለሁና። — ማቴዎስ 18:19-20'
                )}
              </blockquote>

              {/* Scripture 2 */}
              <blockquote className="text-slate-800 italic text-base sm:text-lg leading-relaxed font-normal">
                {t(
                  'But God did listen! He paid attention to my prayer. — Psalm 66:19',
                  'እግዚአብሔር ግን በእውነት ሰምቶኛል፤ የጸሎቴንም ድምፅ አድምጧል። — መዝሙር 66:19'
                )}
              </blockquote>

              {/* Scripture 3 */}
              <blockquote className="text-slate-800 italic text-base sm:text-lg leading-relaxed font-normal">
                {t(
                  'And the Holy Spirit helps us in our weakness. For example, we don’t know what God wants us to pray for. But the Holy Spirit prays for us with groanings that cannot be expressed in words. — Romans 8:26',
                  'እንዲሁም መንፈስ ደካማነታችንን ያግዛል፤ እንዴት እንድንጸልይ እንደሚገባን አናውቅምና፥ ነገር ግን መንፈስ ራሱ በማይነገር መቃተት ይማልድልናል። — ሮሜ 8:26'
                )}
              </blockquote>
            </div>

            {/* Right Column: Embedded YouTube Video matching Image 4 */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
                <iframe
                  src="https://www.youtube.com/embed/zLdel1eP8k8?rel=0"
                  title="Pray For The Least Reached - Kingdom Come - Global Disciples International"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CONSIDER BECOMING A MONTHLY PARTNER (Image 5)                  */}
      {/* ========================================================================= */}
      <section className="relative bg-[#F4F9FB] pt-20 sm:pt-28 overflow-hidden select-none">
        {/* Floating Circular Portraits matching Image 5 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] flex items-center justify-center">
            
            {/* Portrait 1: Far Left (Large - Smiling young girl with headscarf) */}
            <div className="absolute left-[2%] sm:left-[5%] lg:left-[8%] top-[10%] w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/44e83e780bfc4be259d57c958a2d8e8a-1-768x768.jpg"
                alt="Smiling young girl with headscarf"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85';
                }}
              />
            </div>

            {/* Portrait 2: Center-Top (Medium - Woman praying with hands together) */}
            <div className="absolute left-[33%] sm:left-[35%] lg:left-[37%] top-[5%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/AfricanWomanPrayer-5.jpg"
                alt="Woman praying with hands together"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85';
                }}
              />
            </div>

            {/* Portrait 3: Center-Left Low (Small - Worshipper in green dress) */}
            <div className="absolute left-[32%] sm:left-[34%] lg:left-[35%] bottom-[12%] w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalGirlWorship.jpg"
                alt="Worshipper"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* Portrait 4: Center-Right High (Small - Two women praying) */}
            <div className="absolute left-[50%] sm:left-[51%] lg:left-[50%] top-[12%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalDTWorship.jpg"
                alt="Believers praying"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* Portrait 5: Center-Right Low (Medium-Small - Joyful worshippers raising hands) */}
            <div className="absolute left-[47%] sm:left-[48%] lg:left-[47%] bottom-[15%] w-16 h-16 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/EthiopianWomenPraying-768x510.jpg"
                alt="Joyful believers raising hands in praise"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80';
                }}
              />
            </div>

            {/* Portrait 6: Far Right (Extra Large - Smiling girl holding wooden post) */}
            <div className="absolute right-[0%] sm:right-[3%] lg:right-[6%] top-[2%] w-48 h-48 sm:w-64 sm:h-64 lg:w-84 lg:h-84 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/3f22043cd9f2780cb8dfa11d0477340f-1-768x768.jpg"
                alt="Smiling child with wooden post"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85';
                }}
              />
            </div>
          </div>
        </div>

        {/* Vibrant Royal Blue Banner Section */}
        <div className="relative bg-[#0073E6] pt-36 sm:pt-48 md:pt-60 lg:pt-72 xl:pt-80 pb-24 sm:pb-32 lg:pb-36 -mt-28 sm:-mt-36 lg:-mt-44 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20">
            
            {/* Headline matching Image 5 */}
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[46px] tracking-tight leading-tight mb-4">
              {t('Consider becoming a monthly partner', 'ወርሃዊ አጋር ለመሆን ያስቡ')}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-blue-100/90 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              {t(
                'It’s easy and convenient. Consistent giving enables Global Disciples to continue training all year long.',
                'ቀላል እና አመቺ ነው። ቋሚ ድጋፍ ግሎባል ደቀመዛሙርት ዓመቱን ሙሉ ስልጠናውን እንዲቀጥል ያስችለዋል።'
              )}
            </p>

            {/* Golden Yellow Button */}
            <div>
              <Link
                to="/give"
                className="inline-block bg-[#FFC72C] hover:bg-[#e6b325] text-[#0c2340] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none tracking-wide"
              >
                {t('Join Us Today', 'ዛሬ ይቀላቀሉን')}
              </Link>
            </div>
          </div>

          {/* Concave Bottom Arch Wave dividing the Blue Banner and the Footer */}
          <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg
              viewBox="0 0 1440 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-12 sm:h-16 lg:h-20 block text-[#0073E6]"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,0 L 1440,0 L 1440,90 Q 720,10 0,90 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRAYER CALENDAR & GUIDE MODAL                                             */}
      {/* ========================================================================= */}
      {isCalendarModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setIsCalendarModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalendarModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-2xl text-[#0c2340] mb-2">
                  {t('Thank You!', 'እናመሰግናለን!')}
                </h3>
                <p className="text-slate-600 text-sm">
                  {t(
                    'The prayer resource has been sent to your email.',
                    'የጸሎት መገልገያው ወደ ኢሜይልዎ ተልኳል።'
                  )}
                </p>
              </div>
            ) : (
              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#0073E6] rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#0c2340] mb-2">
                  {t('Get the Prayer Resource', 'የጸሎት መገልገያውን ያግኙ')}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6">
                  {t(
                    'Receive daily prayer points and guides for least-reached people directly in your inbox.',
                    'ያልተዳረሱ ሰዎችን የሚመለከቱ ዕለታዊ የጸሎት ነጥቦችን በቀጥታ በኢሜይልዎ ይቀበሉ።'
                  )}
                </p>

                <form onSubmit={handleCalendarSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Your Name', 'ስምዎ')}
                    </label>
                    <input
                      type="text"
                      required
                      value={calendarName}
                      onChange={(e) => setCalendarName(e.target.value)}
                      placeholder={t('Enter your full name', 'ሙሉ ስምዎን ያስገቡ')}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Your Email', 'ኢሜይልዎ')}
                    </label>
                    <input
                      type="email"
                      required
                      value={calendarEmail}
                      onChange={(e) => setCalendarEmail(e.target.value)}
                      placeholder={t('Enter your email address', 'የኢሜይል አድራሻዎን ያስገቡ')}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-sm py-3 rounded-full shadow-md transition-all duration-200 mt-2"
                  >
                    {t('Send to My Email', 'ወደ ኢሜይሌ ላክ')}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrayPage;
