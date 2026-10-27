import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ShieldCheck, Heart, Sparkles, Send, Award, Download, ArrowRight } from 'lucide-react';

export const PledgePage: React.FC = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: 'Ethiopia',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(48924);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.firstName && form.email) {
      setIsSubmitted(true);
      setPledgeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-[#0073E6] selection:text-white">
      <SEO
        title={t('The Global Disciples Pledge | Global Disciples', 'የግሎባል ዲሳይፕልስ ቃል ኪዳን | ግሎባል ዲሳይፕልስ')}
        description={t(
          'Join tens of thousands of believers worldwide in affirming our shared commitment to Christ and His Great Commission among least-reached peoples.',
          'በትንሹ ወደተደረሱ ሕዝቦች ለመድረስ ለክርስቶስ እና ለታላቁ ተልዕኮ ያለንን ቁርጠኝነት በማረጋገጥ በዓለም ዙሪያ ካሉ በአሥር ሺዎች የሚቆጠሩ አማኞች ጋር ይቀላቀሉ።'
        )}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO & "LIVE" (Reference Image 1)                              */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Title with Signature Blue Arc Motif */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3 block">
              {t('GET INVOLVED', 'ይሳተፉ')}
            </span>

            <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-slate-950 tracking-tight leading-none inline-flex items-baseline justify-center">
              <span>{t('Pledge', 'ቃል ኪዳን')}</span>
              {/* Blue semi-circle arc SVG emblem matching Reference Image 1 */}
              <svg
                width="24"
                height="10"
                viewBox="0 0 22 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-3 mb-1 sm:mb-2 align-baseline"
              >
                <path
                  d="M0.124512 8.00013C1.84644 3.64807 6.12665 0.73291 10.8123 0.73291C15.4979 0.73291 19.7781 3.64807 21.5 8.00013H0.124512Z"
                  fill="#0072CE"
                />
              </svg>
            </h1>
          </div>

          {/* Two-Column: "Live" Text + Joyful Young Girl Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
                {t('Live', 'መኖር')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                {t(
                  'Living as a disciple of Jesus begins with the decision to put your faith in Jesus Christ for salvation and eternal life. It also requires daily, moment-by-moment choices determined by your primary allegiance and loyalty to Christ. We invite you to consider making this pledge—not as a commitment to any organization, church, or group—but as a visible, concrete way of saying, “I want to live as a disciple of Jesus with a global perspective to advance the kingdom of God.”',
                  'እንደ ኢየሱስ ደቀመዝሙር መኖር የሚጀምረው ለድነት እና ለዘላለም ሕይወት በእርሱ በማመን ነው። እንዲሁም በየዕለቱ ለክርስቶስ ባለን ቅድሚያ ታማኝነት የሚወሰኑ ምርጫዎችን ማድረግን ይጠይቃል። ይህን ቃል ኪዳን እንድትገቡ እንጋብዝዎታለን—ለማንኛውም ድርጅት፣ ቤተክርስቲያን ወይም ቡድን እንደገባ ቁርጠኝነት ሳይሆን፤ “የእግዚአብሔርን መንግሥት ለማስፋፋት በዓለም አቀፍ እይታ እንደ ኢየሱስ ደቀመዝሙር መኖር እፈልጋለሁ” የሚሉበት ግልጽ እና ተጨባጭ መንገድ ነው።'
                )}
              </p>
            </div>

            {/* Right: Rounded Image (Ethiopian Girl in Headscarf) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2022/01/44e83e780bfc4be259d57c958a2d8e8a-1.jpg"
                  alt="Joyful smiling young girl in community"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "OUR PLEDGE" (Reference Image 2)                              */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Vertical Image of Woman Praying */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalGirlWorship.jpg"
                  alt="Devoted woman worshipping in prayer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: "Our Pledge" Statements */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight mb-4">
                {t('Our Pledge', 'የእኛ ቃል ኪዳን')}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {t('I am a global disciple of Jesus.', 'እኔ ዓለም አቀፍ የኢየሱስ ደቀመዝሙር ነኝ።')}
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t(
                  'My allegiance is to Jesus Christ. He is the Living Word of God, as revealed by the Holy Spirit and through the Bible.',
                  'የእኔ ታማኝነት ለኢየሱስ ክርስቶስ ነው። በመንፈስ ቅዱስ እና በመጽሐፍ ቅዱስ እንደተገለጠው እርሱ ሕያው የእግዚአብሔር ቃል ነው።'
                )}
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t(
                  'I want to do my part so everyone has the opportunity to hear the Good News of Jesus and to choose if they will believe and follow Him. My desire is to see each person experience the transforming love of Jesus, live in the fullness of the Spirit, and enjoy God forever.',
                  'እያንዳንዱ ሰው የኢየሱስን የምስራች ቃል የመስማት እና እርሱን ለማመንና ለመከተል ምርጫ እንዲኖረው የድርሻዬን መወጣት እፈልጋለሁ። ፍላጎቴ እያንዳንዱ ሰው የኢየሱስን ለዋጭ ፍቅር እንዲለማመድ፣ በመንፈስ ሙላት እንዲኖር እና እግዚአብሔርን ለዘላለም እንዲያጣጥም ማየት ነው።'
                )}
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t(
                  'As a participant in a local expression of the global Body of Christ, I am united in heart and purpose with sisters and brothers of many nations, ethnic groups, languages, and churches to glorify God and to make Him known.',
                  'የዓለም አቀፉ የክርስቶስ አካል አካባቢያዊ መገለጫ ተካፋይ እንደመሆኔ፣ እግዚአብሔርን ለማክበር እና እርሱን ለማሳወቅ ከብዙ አሕዛብ፣ ብሔረሰቦች፣ ቋንቋዎች እና አብያተ ክርስቲያናት ከተውጣጡ ወንድሞችና እህቶች ጋር በልብ እና በዓላማ አንድ ነኝ።'
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: 5 COMMITMENTS BAND (Reference Image 3)                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading in #0073E6 */}
          <h4 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#0073E6] text-center mb-12 sm:mb-16 max-w-4xl mx-auto tracking-tight">
            {t(
              'I believe my part as a global disciples of Jesus Christ is to:',
              'እንደ ዓለም አቀፍ የኢየሱስ ክርስቶስ ደቀመዝሙር የእኔ ድርሻ የሚከተለው ነው ብዬ አምናለሁ፡'
            )}
          </h4>

          {/* Full-width soft pale-blue card with 5 columns */}
          <div className="bg-[#EBF5FA] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#D5EBF6] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              
              {/* Column 1 */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong className="font-bold italic text-slate-950">
                    {t('Pursue intimacy with God', 'ከእግዚአብሔር ጋር መቀራረብን መፈለግ')}
                  </strong>{' '}
                  <span className="italic">
                    {t(
                      'as my Creator, Provider, and Father, through Jesus my Savior, Lord, and Friend.',
                      'እንደ ፈጣሪዬ፣ አቅራቢዬ እና አባቴ፤ በአዳኜ፣ ጌታዬ እና ወዳጄ በኢየሱስ በኩል መኖር።'
                    )}
                  </span>
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong className="font-bold italic text-slate-950">
                    {t('Love others as Jesus loves them', 'ሌሎችን ኢየሱስ እንደወደዳቸው መውደድ')}
                  </strong>{', '}
                  <span className="italic">
                    {t(
                      'relating and serving as witnesses in word and deed, loving even enemies.',
                      'በቃል እና በተግባር እንደ ምስክር ሆነው ማገልገል፣ ጠላቶችን እንኳን ሳይቀር መውደድ።'
                    )}
                  </span>
                </p>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong className="font-bold italic text-slate-950">
                    {t('Pray diligently', 'በትጋት መጸለይ')}
                  </strong>{' '}
                  <span className="italic">
                    {t(
                      'for people who don’t yet know Christ, especially those unreached with the Good News.',
                      'ገና ክርስቶስን ላልወቁ ሰዎች፣ በተለይም የምስራቹ ቃል ላልደረሰባቸው በጽናት መጸለይ።'
                    )}
                  </span>
                </p>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong className="font-bold italic text-slate-950">
                    {t('Live generously', 'በልግስና መኖር')}
                  </strong>{' '}
                  <span className="italic">
                    {t(
                      'as a steward of all God has entrusted to me, being an ambassador of our generous Master.',
                      'እግዚአብሔር በአደራ ለሰጠኝ ሁሉ እንደ ታማኝ መጋቢ በመሆን፤ የቸሩ ጌታችን አምባሳደር መሆን።'
                    )}
                  </span>
                </p>
              </div>

              {/* Column 5 */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong className="font-bold italic text-slate-950">
                    {t('Rely on the Holy Spirit and the Bible', 'በመንፈስ ቅዱስ እና በመጽሐፍ ቅዱስ መታመን')}
                  </strong>{' '}
                  <span className="italic">
                    {t(
                      'to lead, guide, and empower me to live, love, and serve for God’s glory.',
                      'ለእግዚአብሔር ክብር እንድኖር፣ እንድወድ እና እንዳገለግል እንዲመሩኝ፣ እንዲያበረቱኝ በእነርሱ መደገፍ።'
                    )}
                  </span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SIGN THE PLEDGE (Reference Image 4)                            */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Heading & Community Impact Statement */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight">
                {t('Sign The Pledge', 'ቃል ኪዳኑን ይፈርሙ')}
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                {t(
                  'This pledge has been signed by tens of thousands of people from around the world.',
                  'ይህ ቃል ኪዳን በመላው ዓለም በሚገኙ በአሥር ሺዎች በሚቆጠሩ ሰዎች ተፈርሟል።'
                )}
              </p>

              {/* Live Count Badge */}
              <div className="pt-4 flex items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-blue-50 border border-blue-200 text-[#0073E6] flex items-center gap-2 shadow-sm">
                  <Award className="w-5 h-5 text-[#0073E6]" />
                  <span className="text-sm font-extrabold tracking-wide">
                    {pledgeCount.toLocaleString()} {t('Signatures Recorded', 'የተመዘገቡ ፊርማዎች')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The Clean Sign Form Card */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-5 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900">
                      {t('You Are Confirmed as a Global Disciple!', 'እንደ ዓለም አቀፍ ደቀመዝሙር ቃል ኪዳን ገብተዋል!')}
                    </h3>

                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {t(
                        `Thank you, ${form.firstName} ${form.lastName}. A commemorative copy of The Global Disciples Pledge and printable certificate has been sent to ${form.email}.`,
                        `እናመሰግናለን ${form.firstName} ${form.lastName}። የመታሰቢያ የቃል ኪዳን ሰነድ እና የሚታተም ምስክር ወረቀት ወደ ${form.email} ተልኳል።`
                      )}
                    </p>

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t('Print Pledge Certificate', 'ምስክር ወረቀቱን አትም')}</span>
                      </button>
                      
                      <Link
                        to="/give"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-[#FFD434] hover:bg-[#ffcd1a] transition-colors"
                      >
                        <span>{t('Support Near-Culture Workers', 'የተቀራራቢ ባህል ሠራተኞችን ይደግፉ')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {t('First name *', 'ስም *')}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          placeholder="e.g. Hanna"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {t('Last name *', 'የአባት ስም *')}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          placeholder="e.g. Solomon"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                        />
                      </div>
                    </div>

                    {/* Country / Region */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('Country/Region *', 'ሀገር / ክልል *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        placeholder="e.g. Ethiopia / Addis Ababa"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('Email *', 'ኢሜይል *')}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>

                    {/* Verified Security Badge matching Screenshot 4 */}
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{t('Your information is kept secure and will only be used for ministry correspondence.', 'የእርስዎ መረጃ በጥበቃ የተያዘ ሲሆን ለአገልግሎት ግንኙነት ብቻ ይውላል።')}</span>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#0073E6] hover:bg-[#005bb5] transition-all shadow-md focus:outline-none"
                      >
                        {t('Submit', 'አስገባ')}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CIRCLE IMAGES & "CONSIDER BECOMING A MONTHLY PARTNER" (Image 5) */}
      {/* ========================================================================= */}
      <section className="relative bg-white pt-10 overflow-hidden select-none">
        
        {/* Floating Round Portraits Collage matching Reference Image 5 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
            
            {/* 1. Large Circle Left: Ethiopian girl in patterned headscarf */}
            <div className="absolute left-[0%] sm:left-[2%] lg:left-[4%] top-[2%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/44e83e780bfc4be259d57c958a2d8e8a-1-768x768.jpg"
                alt="Joyful child in scarf"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. Medium Circle Center-Left: Praying woman in white scarf */}
            <div className="absolute left-[30%] sm:left-[32%] lg:left-[33%] top-[0%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-[5px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/AfricanWomanPrayer-5.jpg"
                alt="Woman in white prayer shawl worshipping"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 3. Small-Medium Circle Center-Bottom: Person in green room kneeling */}
            <div className="absolute left-[29%] sm:left-[30%] lg:left-[31%] bottom-[6%] sm:bottom-[10%] w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/EthiopianWomenPraying-768x510.jpg"
                alt="Believer kneeling in prayer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 4. Small-Medium Circle Middle-Lower: People with raised hands outdoors */}
            <div className="absolute left-[47%] sm:left-[48%] lg:left-[49%] bottom-[2%] sm:bottom-[4%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/03/NepalDTWorship.jpg"
                alt="Group with raised hands praising"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 5. Medium Circle Center-Right: Praying believers in communion */}
            <div className="absolute left-[51%] sm:left-[52%] lg:left-[53%] top-[6%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/3f22043cd9f2780cb8dfa11d0477340f-1-768x768.jpg"
                alt="Community leaders gathering in prayer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 6. Very Large Circle Far Right: Young child in leopard dress */}
            <div className="absolute right-[0%] sm:right-[1%] lg:right-[3%] top-[4%] w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/04/GettyImages-497749324-768x1152.jpg"
                alt="Young child in community with water bottle"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

        {/* Solid Blue Banner Section matching Reference Image 5 */}
        <div className="relative bg-[#0073E6] pt-24 sm:pt-36 md:pt-48 lg:pt-56 pb-20 sm:pb-28 text-white text-center -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
            {/* Headline matching screenshot 5 */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.15] mb-5">
              {t('Consider becoming a monthly partner', 'ወርሃዊ አጋር ለመሆን ያስቡበት')}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
              {t(
                "It's easy and convenient. Consistent giving enables Global Disciples to continue training all year long.",
                "ቀላል እና ምቹ ነው። ቀጣይነት ያለው ድጋፍ ግሎባል ዲሳይፕልስ ዓመቱን ሙሉ ስልጠናውን እንዲቀጥል ያስችለዋል።"
              )}
            </p>

            {/* Vibrant Yellow "Join Us Today" Button matching Screenshot 5 */}
            <div className="pt-2">
              <Link
                to="/give"
                className="inline-block bg-[#FFD434] hover:bg-[#ffcd1a] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none"
              >
                {t('Join Us Today', 'ዛሬ ይቀላቀሉን')}
              </Link>
            </div>
          </div>

          {/* Dividing Arc Curve matching Screenshot 5 bottom */}
          <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg
              viewBox="0 0 1440 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-8 sm:h-12 block"
              preserveAspectRatio="none"
            >
              <path
                d="M0 46.9509C237.126 17.2437 477.504 2 720 2C962.496 2 1202.87 17.2437 1440 46.951V0H0L0 46.9509Z"
                fill="#0D161D"
              />
            </svg>
          </div>
        </div>
      </section>

    </div>
  );
};
