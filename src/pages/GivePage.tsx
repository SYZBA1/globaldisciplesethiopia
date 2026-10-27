import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Check, Building2, Phone, Mail, ArrowRight, ShieldCheck, Download, ChevronDown, ChevronUp, Copy } from 'lucide-react';

export const GivePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Donation form state
  const [givingFrequency, setGivingFrequency] = useState<'monthly' | 'one-time'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(102);
  const [customAmount, setCustomAmount] = useState<string>('102');
  const [currency, setCurrency] = useState<'USD' | 'ETB'>('USD');
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stepper accordion state for Brokerage & Securities
  const [openBrokerageSteps, setOpenBrokerageSteps] = useState(false);
  const [openSecuritiesSteps, setOpenSecuritiesSteps] = useState(false);

  // Ethiopian Bank details copy feedback
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const formRef = useRef<HTMLDivElement | null>(null);

  const PRESET_AMOUNTS = [1000, 500, 300, 167, 102, 25];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && PRESET_AMOUNTS.includes(num)) {
      setSelectedAmount(num);
    } else {
      setSelectedAmount(0);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAmount && parseInt(customAmount, 10) > 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Give — Global Disciples Ethiopia"
        description="To help us train leaders, multiply disciples, and transform communities. Support Global Disciples to reach the least-reached today."
      />

      {/* ========================================================================= */}
      {/* SECTION 1: VIBRANT GOLDEN-YELLOW HERO & GIVING FORM (Images 1 & 2)        */}
      {/* ========================================================================= */}
      <section className="relative bg-[#FFC72C] pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Left Column: Why Give Content matching Image 1 */}
            <div className="lg:col-span-7">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#0c2340] leading-[1.08] tracking-tight mb-6">
                {t('Why Give?', 'ለምን እንስጥ?')}
              </h1>

              <h2 className="font-bold text-lg sm:text-xl lg:text-[22px] text-[#0c2340] mb-6 leading-snug">
                {t(
                  'To help us train leaders, multiply disciples, and transform communities',
                  'መሪዎችን ለማሰልጠን፣ ደቀመዛሙርትን ለማባዛትና ማህበረሰቦችን ለመለወጥ እንድንችል'
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-900 leading-relaxed mb-6 font-normal">
                {t(
                  'Last year, Global Disciples saw 4,685 new churches planted. 41,004 disciple-makers were trained. And 95,305 individuals became followers of Jesus! Those numbers reflect the impact of generosity like yours.',
                  'ባለፈው ዓመት ግሎባል ደቀመዛሙርት 4,685 አዳዲስ አብያተ ክርስቲያናት ሲተከሉ አይቷል። 41,004 ደቀመዛሙርት አፍሪዎች ሰልጥነዋል። 95,305 ግለሰቦችም የኢየሱስ ተከታዮች ሆነዋል! እነዚያ ቁጥሮች እንደ እርስዎ ያለ ልግስና ያመጣውን ተፅዕኖ ያንፀባርቃሉ።'
                )}
              </p>

              <p className="text-base sm:text-lg text-slate-900 leading-relaxed mb-10 font-normal">
                {t(
                  'Become a monthly partner and you’ll join THE REACH, a monthly giving community. It’s easy and convenient. And consistent giving enables Global Disciples to continue training all year long. Start with a gift today. ',
                  'ወርሃዊ አጋር በመሆን THE REACH የተባለውን ወርሃዊ የመስጠት ማህበረሰብ ይቀላቀሉ። ቀላል እና አመቺ ነው። ቋሚ ድጋፍ ግሎባል ደቀመዛሙርት ዓመቱን ሙሉ ስልጠናውን እንዲቀጥል ያስችለዋል። ዛሬ በስጦታ ይጀምሩ። '
                )}
                <a
                  href="#ways-to-give"
                  className="text-[#0073E6] hover:underline font-semibold"
                >
                  {t('Learn more.', 'ተጨማሪ ይወቁ።')}
                </a>
              </p>

              {/* Bottom call to action matching Image 2 */}
              <div className="pt-4 border-t border-amber-400/60 text-slate-900 space-y-1">
                <p className="font-bold text-base sm:text-lg">
                  {t(
                    'Will you join us in reaching the least-reached today?',
                    'ዛሬ ያልተዳረሱትን በመድረስ ከእኛ ጋር ይቀላቀላሉ?'
                  )}
                </p>
                <p className="text-sm sm:text-base text-slate-800">
                  {t('Have questions? Call ', 'ጥያቄ አለዎት? ይደውሉ፡ ')}
                  <a href="tel:7172907550" className="font-bold hover:underline">
                    717.290.7550
                  </a>
                  <span className="mx-2">•</span>
                  <a href="tel:+251116630000" className="font-bold hover:underline">
                    +251 11 663 0000
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Donation Card matching Image 1 */}
            <div ref={formRef} className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/60">
                
                {/* Frequency Toggle: One-time vs Monthly */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setGivingFrequency('one-time')}
                    className={`py-3 px-4 rounded-lg font-bold text-sm text-center transition-all duration-200 border ${
                      givingFrequency === 'one-time'
                        ? 'border-[#0073E6] text-[#0073E6] shadow-sm bg-blue-50/40'
                        : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t('One-time', 'አንድ ጊዜ')}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGivingFrequency('monthly')}
                    className={`py-3 px-4 rounded-lg font-bold text-sm text-center transition-all duration-200 border flex items-center justify-center gap-1.5 ${
                      givingFrequency === 'monthly'
                        ? 'border-[#0073E6] text-[#0073E6] shadow-sm bg-blue-50/40'
                        : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-[#0073E6] text-[#0073E6]" />
                    <span>{t('Monthly', 'ወርሃዊ')}</span>
                  </button>
                </div>

                {/* Pre-set Amount Buttons Grid (2 rows x 3 columns) */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {PRESET_AMOUNTS.map((amt) => {
                    const isSelected = selectedAmount === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => handleAmountSelect(amt)}
                        className={`py-3 px-2 rounded-lg font-bold text-sm sm:text-base text-center transition-all border ${
                          isSelected
                            ? 'border-2 border-[#0073E6] text-[#0073E6] bg-blue-50/30 shadow-sm'
                            : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        ${amt.toLocaleString()}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input Box matching Image 1 */}
                <div className="relative mb-4">
                  <div className="flex items-center border border-slate-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-[#0073E6] focus-within:border-[#0073E6]">
                    <span className="text-xl sm:text-2xl font-bold text-[#0073E6] mr-2">
                      $
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Amount"
                      className="w-full text-xl sm:text-2xl font-bold text-[#0073E6] focus:outline-none bg-transparent"
                    />
                    <div className="flex items-center gap-1.5 ml-2 border-l border-slate-200 pl-3">
                      <button
                        type="button"
                        onClick={() => setCurrency(currency === 'USD' ? 'ETB' : 'USD')}
                        className="text-xs font-bold text-slate-500 hover:text-[#0073E6] uppercase tracking-wider"
                        title="Click to toggle between USD and ETB"
                      >
                        {currency}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add comment accordion link */}
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setIsCommentOpen(!isCommentOpen)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#0073E6] underline flex items-center gap-1"
                  >
                    <span>{t('Add comment', 'አስተያየት አክል')}</span>
                    {isCommentOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isCommentOpen && (
                    <div className="mt-3 animate-fade-in">
                      <textarea
                        rows={2}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder={t('Optional donation note or designation...', 'አማራጭ የመስጠት ማስታወሻ ወይም የተለየ ዓላማ...')}
                        className="w-full p-3 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>
                  )}
                </div>

                {/* Give Action Button */}
                <form onSubmit={handleFormSubmit}>
                  <button
                    type="submit"
                    className="w-full bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-base py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] tracking-wide"
                  >
                    {t('Give', 'ይስጡ')}
                  </button>
                </form>

                {/* Success feedback */}
                {isSubmitted && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm animate-fade-in flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      {t(
                        `Thank you for your generous ${givingFrequency} gift of $${customAmount} ${currency}! Your partnership empowers frontline workers.`,
                        `ለእርስዎ ልግስና እናመሰግናለን! የ$${customAmount} ${currency} ስጦታዎ የወንጌል አገልጋዮችን ያበረታታል።`
                      )}
                    </span>
                  </div>
                )}

                {/* Trust and Tax badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{t('Secure & Encrypted', 'አስተማማኝና የተጠበቀ')}</span>
                  </div>
                  <span>{t('Tax Deductible', 'ከግብር ተቀናሽ')}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "A SEASON OF GIVING" BANNER (Image 2)                          */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F4F9FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            <img
              src="https://globaldisciples.org/wp-content/uploads/2026/10/FY27_GIVEDays_Email-Banner-1.jpg"
              alt="A Season of Giving — Faithful Give, Extra Give, Giving Tuesday"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: THREE IMPACT CARDS (Image 3)                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Card 1: $102 Reaches One New Believer */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2023/10/CYEMan-768x512.jpg"
                  alt="Elderly African believer in straw hat smiling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#0c2340] mb-4 leading-snug">
                    {t('$102 Reaches One New Believer', '$102 አንድ አዲስ አማኝን ይደርሳል')}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {t(
                      'The Good News that God sent His Son to earth to die as a sin offering for every person is the essence of Global Disciples. Every human being has the right to hear about Jesus and choose to believe in Him. Last year, our disciple-makers shared this Good News in 79 countries and saw 95,305 people believe in Jesus. But we want to do more! We can see 100,000 people come to Christ.',
                      'እግዚአብሔር ልጁን ለሰው ልጆች ሁሉ የኃጢአት መሥዋዕት አድርጎ ወደ ምድር መላኩ የግሎባል ደቀመዛሙርት ዋና መሠረት ነው። እያንዳንዱ ሰው ስለ ኢየሱስ የመስማት እና በእርሱ የማመን መብት አለው። ባለፈው ዓመት ደቀመዛሙርት አፍሪዎቻችን ይህን የምሥራች በ79 አገሮች አካፍለው 95,305 ሰዎች በኢየሱስ አምነዋል። ሆኖም የበለጠ መሥራት እንፈልጋለን!'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: $250 Trains One Disciple-Maker/Church Planter */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2022/05/India-training.jpg"
                  alt="Leaders gathered in training circle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#0c2340] mb-4 leading-snug">
                    {t(
                      '$250 Trains One Disciple-Maker/Church Planter',
                      '$250 አንድ ደቀመዝሙር አፍሪ/ቤተክርስቲያን ተካይ ያሰለጥናል'
                    )}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {t(
                      'Jesus is moved with deep love for the vast multitudes of least-reached people. He tells his people to “Ask the Lord of the harvest to send out workers”. For almost 30 years, Global Disciples has focused on training near-culture disciple-makers/church planters to reap this harvest. Last year, we trained 41,004 disciple-makers. Let’s join together to do more!',
                      'ኢየሱስ ባልተዳረሱት ታላላቅ ሕዝቦች ላይ ጥልቅ ፍቅር አለው። ሕዝቡን "የመከሩን ጌታ ሠራተኞችን እንዲልክ ለምኑት" ይላቸዋል። ላለፉት 30 ዓመታት ያህል ግሎባል ደቀመዛሙርት ይህን መከር ለመሰብሰብ የአካባቢ ደቀመዛሙርት አፍሪዎችንና ቤተክርስቲያን ተካዮችን በማሰልጠን ላይ አተኩሯል። ባለፈው ዓመት 41,004 ደቀመዛሙርት አፍሪዎችን አሰልጥነናል።'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: $2,000 Plants a New Church */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2025/08/FY25FallBridgesBlog2-768x768.jpg"
                  alt="Believers gathered in church meeting hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1548625361-19597a7e8020?auto=format&fit=crop&w=700&q=80';
                  }}
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#0c2340] mb-4 leading-snug">
                    {t('$2,000 Plants a New Church', '$2,000 አዲስ ቤተክርስቲያን ይተክላል')}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {t(
                      'New believers need healthy churches to grow in the Lord. Last year, you helped us plant 4,685 new churches. These churches are often the first church in their community! Once a church is established, it puts a foothold for Jesus in a formerly least-reached community. For an investment of $2,000, a new church can be planted that will produce eternal spiritual fruit year after year.',
                      'አዳዲስ አማኞች በጌታ እንዲያድጉ ጤናማ አብያተ ክርስቲያናት ያስፈልጓቸዋል። ባለፈው ዓመት 4,685 አዳዲስ አብያተ ክርስቲያናት እንድንተክል ረድተውናል። እነዚህ አብያተ ክርስቲያናት በማህበረሰባቸው ውስጥ የመጀመሪያዎቹ ናቸው! በ$2,000 መዋዕለ ንዋይ ዓመት ከዓመት ዘላለማዊ መንፈሳዊ ፍሬ የሚያፈራ አዲስ ቤተክርስቲያን ሊተከል ይችላል።'
                    )}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WAYS TO GIVE (Images 4 & 5)                                     */}
      {/* ========================================================================= */}
      <section id="ways-to-give" className="py-20 sm:py-28 bg-[#F4F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0c2340] tracking-tight mb-16 sm:mb-20">
            {t('Ways to give', 'የመስጠት መንገዶች')}
          </h2>

          {/* Row 1: Online, Checks, Bank Transfers (Image 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-16 sm:mb-20">
            
            {/* 1. Online */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Online', 'በኢንተርኔት')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {t(
                    'Give Now! You choose how you give. Whether you prefer using Google Pay, Apple Pay, or a credit/debit card, your gift is secure and easy. Just select your preferred method, confirm your payment, and your generosity goes straight to reaching the least-reached.',
                    'አሁኑኑ ይስጡ! እንዴት እንደሚሰጡ እርስዎ ይመርጣሉ። በGoogle Pay፣ Apple Pay ወይም በክሬዲት/ዴቢት ካርድ መስጠት ቢመርጡ ስጦታዎ አስተማማኝና ቀላል ነው። የተመረጠውን ዘዴ ይምረጡ፣ ክፍያዎን ያረጋግጡ፣ ልግስናዎ በቀጥታ ላልተዳረሱት ይደርሳል።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Start Here', 'እዚህ ይጀምሩ')}
                </button>
              </div>
            </div>

            {/* 2. Checks */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                {t('Checks', 'በቼክ')}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 font-normal">
                {t(
                  'Prefer to pay by check? Just make the check payable to Global Disciples and mail to:',
                  'በቼክ መክፈል ይመርጣሉ? ቼኩን ለግሎባል ደቀመዛሙርት (Global Disciples) በማዘጋጀት ወደሚከተለው አድራሻ ይላኩ፡'
                )}
              </p>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                <p className="text-[#0c2340] font-bold">Global Disciples</p>
                <p>315 W. James St., Suite 202</p>
                <p>Lancaster, PA 17603</p>
                <p className="mt-2 text-slate-500 font-normal">
                  {t('Ethiopia Office: Bole Sub-City, Addis Ababa', 'የኢትዮጵያ ቢሮ፡ ቦሌ ክፍለ ከተማ፣ አዲስ አበባ')}
                </p>
              </div>
            </div>

            {/* 3. Bank Transfers */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Bank Transfers', 'በባንክ ማስተላለፍ')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {t(
                    'Your funds move directly from your account to ours – safe and secure. And more of your donation goes directly to the mission, since bank transfers often have lower or no processing fees. This method is ideal for larger gifts and allows for easy recurring giving. All you’ll need is your account holder name, account number, and routing number. Once you have these at hand, just follow the screens in our giving app.',
                    'ገንዘብዎ በቀጥታ ከሂሳብዎ ወደ እኛ ይተላለፋል - አስተማማኝና የተጠበቀ ነው። የባንክ ዝውውሮች አነስተኛ ወይም ምንም የአገልግሎት ክፍያ ስለሌላቸው፣ ከስጦታዎ ውስጥ የበለጠው በቀጥታ ለተልዕኮው ይውላል። ይህ ዘዴ ለትላልቅ ስጦታዎች ተስማሚ ነው።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Start Here', 'እዚህ ይጀምሩ')}
                </button>
              </div>
            </div>

          </div>

          {/* Row 2: Planned Giving, Commodity Giving, Tribute Gifts (Image 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-16 sm:mb-20">
            
            {/* 4. Planned Giving */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Planned Giving', 'የታቀደ ልግስና')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {t(
                    'Change lives today and maximize your impact for generations to come with a prayerful legacy plan. It’s a tangible way to sustain a ministry that shares your values and aligns with your passions. We’ll work alongside your trusted financial advisors or charitable foundation.',
                    'ዛሬ የሰዎችን ሕይወት ይለውጡ እና በጸሎት በተደገፈ የውርስ እቅድ ለመጪው ትውልድ ተፅዕኖዎን ያሳድጉ። እሴቶችዎን ከሚጋራ አገልግሎት ጋር ለመቆም ተጨባጭ መንገድ ነው። ከታመኑ የፋይናንስ አማካሪዎችዎ ጋር በጋራ እንሠራለን።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:giving@globaldisciples.org?subject=Planned%20Giving%20Inquiry"
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Learn More', 'ተጨማሪ ይወቁ')}
                </a>
              </div>
            </div>

            {/* 5. Commodity Giving */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                {t('Commodity Giving', 'የምርት ስጦታ')}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 font-normal">
                {t(
                  'Did you know that you can donate your commodities to the effort of empowering people to reach their nations? Simply tell you local elevator where you store your grain how many bushels you’d like to donate. They will then contact us; the grain will be sold; and the money will go toward reaching the unreached. Contact ',
                  'ሰዎች ሀገራቸውን እንዲደርሱ በሚደረገው ጥረት የግብርና ምርቶችዎን መለገስ እንደሚችሉ ያውቃሉ? እህልዎን በሚያከማቹበት ቦታ ምን ያህል መለገስ እንደሚፈልጉ ይንገሯቸው። እርሳቸው ያነጋግሩናል፤ እህሉ ይሸጣል፤ ገንዘቡም ላልተዳረሱት ለመድረስ ይውላል። ያነጋግሩን፡ '
                )}
                <a
                  href="mailto:finance@globaldisciples.org"
                  className="text-[#0073E6] font-semibold hover:underline"
                >
                  finance@globaldisciples.org
                </a>
              </p>
            </div>

            {/* 6. Tribute Gifts */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Tribute Gifts', 'የመታሰቢያ ስጦታዎች')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {t(
                    'Wish to honor a family member, colleague, or friend? Tribute gifts can be applied to organizational operations or recommended for work in a country or region that reflects the life story of your honoree. Simply click “Designate this Donation” and indicate the name of your honoree in the online giving app.',
                    'የቤተሰብ አባልን፣ የሥራ ባልደረባን ወይም ወዳጅን ማክበር ይፈልጋሉ? የመታሰቢያ ስጦታዎች ለድርጅታዊ ሥራዎች ወይም የሚወዱትን ሰው ታሪክ ለሚያንፀባርቅ ክልል ሊመደቡ ይችላሉ። በቀላሉ "ይህንን ስጦታ ለይ" የሚለውን ጠቅ ያድርጉ።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Give Now', 'አሁን ይስጡ')}
                </button>
              </div>
            </div>

          </div>

          {/* Row 3: Brokerage Cash, Securities, Sponsor an Event (Image 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* 7. Brokerage Account Cash Transfers */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Brokerage Account Cash Transfers', 'የደላላ ሂሳብ ጥሬ ገንዘብ ማስተላለፍ')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 font-normal">
                  {t(
                    'Looking for a strategic way to maximize your charitable impact? Transferring cash through your broker—especially via a Donor-Advised Fund (DAF)—offers immediate tax benefits, the potential for tax-free growth, and flexibility to support causes over time. Simply contact your broker to initiate the transfer.',
                    'የበጎ አድራጎት ተፅዕኖዎን ከፍ ለማድረግ ስትራቴጂካዊ መንገድ ይፈልጋሉ? በደላላዎ በኩል ጥሬ ገንዘብ ማስተላለፍ ፈጣን የግብር ጥቅሞችን እና ተለዋዋጭነትን ይሰጣል። ዝውውሩን ለመጀመር በቀላሉ ደላላዎን ያነጋግሩ።'
                  )}
                </p>

                {/* Collapsible Steps matching Image 5 */}
                <button
                  type="button"
                  onClick={() => setOpenBrokerageSteps(!openBrokerageSteps)}
                  className="text-xs font-bold text-[#0c2340] hover:text-[#0073E6] flex items-center gap-1.5 mb-3"
                >
                  <span>▶ {t('Follow Steps Below', 'የሚከተሉትን ደረጃዎች ይከተሉ')}</span>
                </button>

                {openBrokerageSteps && (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 mb-4 animate-fade-in">
                    <p className="font-bold text-[#0c2340]">National Christian Charitable Foundation Inc. (NCF):</p>
                    <p>Fidelity: Acct# 479-048720 (DTC 0226)</p>
                    <p>Schwab: Acct# 6595-8708 (DTC 0164)</p>
                    <p>Merrill Lynch: Acct# 210-04116 (DTC 8862)</p>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <a
                  href="mailto:finance@globaldisciples.org?subject=Brokerage%20Instructions"
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Download Instructions and Forms', 'መመሪያዎችንና ቅጾችን ያውርዱ')}
                </a>
              </div>
            </div>

            {/* 8. Publicly Traded Securities */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Publicly Traded Securities', 'በይፋ የሚገበያዩ አክሲዮኖች')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 font-normal">
                  {t(
                    'Want to make your gift go even further? By transferring stocks or mutual funds through your broker, you can avoid paying capital gains taxes on securities held for more than a year—allowing the full market value of your investment to go to reaching the least-reached. This approach not only maximizes the impact of your generosity but also lets you claim a charitable deduction for the full fair market value. It’s a powerful way to turn your long-term investments into lasting change.',
                    'ስጦታዎን የበለጠ ውጤታማ ማድረግ ይፈልጋሉ? አክሲዮኖችን ወይም የጋራ ፈንዶችን በደላላዎ በኩል በማስተላለፍ የካፒታል ትርፍ ግብርን ማስቀረት ይችላሉ። ይህ ዘዴ የልግስናዎን ተፅዕኖ ከማሳደጉም በላይ የረጅም ጊዜ ኢንቨስትመንቶችዎን ወደ ዘላቂ ለውጥ ለመቀየር ኃይለኛ መንገድ ነው።'
                  )}
                </p>

                {/* Collapsible Steps matching Image 5 */}
                <button
                  type="button"
                  onClick={() => setOpenSecuritiesSteps(!openSecuritiesSteps)}
                  className="text-xs font-bold text-[#0c2340] hover:text-[#0073E6] flex items-center gap-1.5 mb-3"
                >
                  <span>▶ {t('Follow Steps Below', 'የሚከተሉትን ደረጃዎች ይከተሉ')}</span>
                </button>

                {openSecuritiesSteps && (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 mb-4 animate-fade-in">
                    <p className="font-bold text-[#0c2340]">Contact Your Broker & Provide NCF Acct:</p>
                    <p>Fidelity: Acct# 479-048720 (DTC 0226)</p>
                    <p>Schwab: Acct# 6595-8708 (DTC 0164)</p>
                    <p>Merrill Lynch: Acct# 210-04116 (DTC 8862)</p>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <a
                  href="mailto:finance@globaldisciples.org?subject=Securities%20Transfer%20Forms"
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Download Forms for Electronic Transfers', 'የኤሌክትሮኒክ ማስተላለፊያ ቅጾችን ያውርዱ')}
                </a>
              </div>
            </div>

            {/* 9. Sponsor an Event */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
                  {t('Sponsor an Event', 'ዝግጅትን ይደግፉ')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  {t(
                    'Consider sponsoring an upcoming Global Disciples event in your area. Your sponsorship assists in covering the event expenses so that all gifts received at the event are tax deductible to the extent allowed by the law.',
                    'በአካባቢዎ የሚካሄድ የግሎባል ደቀመዛሙርት ዝግጅትን ለመደገፍ ያስቡ። የእርስዎ ስፖንሰርሺፕ የዝግጅቱን ወጪዎች ለመሸፈን ይረዳል፤ በዚህም በዝግጅቱ ላይ የሚሰበሰቡ ስጦታዎች ሁሉ ሙሉ በሙሉ ለተልዕኮው ይውላሉ።'
                  )}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/events"
                  className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-[13px] px-7 py-3 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  {t('Learn More', 'ተጨማሪ ይወቁ')}
                </Link>
              </div>
            </div>

          </div>

          {/* Partner Relations Team Contact Banner */}
          <div className="mt-16 text-center text-slate-700 text-sm sm:text-base border-t border-slate-200 pt-8">
            <p>
              {t(
                'If you have any questions on any of these opportunities, give our Partner Relations Team a call: ',
                'በእነዚህ ማናቸውም እድሎች ላይ ጥያቄ ካለዎት፣ ለአጋር ግንኙነት ቡድናችን ይደውሉ፡ '
              )}
              <a href="tel:7172907550" className="font-bold text-[#0073E6] hover:underline">
                (717) 290-7550
              </a>
              <span className="mx-2">•</span>
              <a href="tel:+251116630000" className="font-bold text-[#0073E6] hover:underline">
                +251 11 663 0000
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ETHIOPIAN LOCAL BANK & TELEBIRR DETAILS                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0073E6] mb-2 block">
              {t('LOCAL CONTRIBUTIONS', 'የአገር ውስጥ ድጋፍ')}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c2340]">
              {t('Direct Ethiopian Banking & Telebirr', 'የኢትዮጵያ ባንኮች እና ቴሌብር')}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {t(
                'For partners in Ethiopia making direct local currency (ETB) contributions.',
                'በኢትዮጵያ ውስጥ በቀጥታ በብር (ETB) ድጋፍ ማድረግ ለሚፈልጉ አጋሮች።'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Commercial Bank of Ethiopia */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  CBE
                </span>
                <h4 className="font-bold text-base text-[#0c2340] mb-1">
                  Commercial Bank of Ethiopia
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Account Name: Global Disciples Ethiopia
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-800 flex items-center justify-between">
                  <span>1000123456789</span>
                  <button
                    onClick={() => handleCopy('1000123456789', 'cbe')}
                    className="text-slate-400 hover:text-[#0073E6]"
                    title="Copy Account Number"
                  >
                    {copiedAccount === 'cbe' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Dashen Bank */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  Dashen Bank
                </span>
                <h4 className="font-bold text-base text-[#0c2340] mb-1">
                  Dashen Bank S.C.
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Account Name: Global Disciples Ethiopia
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-800 flex items-center justify-between">
                  <span>5062123456789</span>
                  <button
                    onClick={() => handleCopy('5062123456789', 'dashen')}
                    className="text-slate-400 hover:text-[#0073E6]"
                    title="Copy Account Number"
                  >
                    {copiedAccount === 'dashen' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Telebirr */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  Telebirr
                </span>
                <h4 className="font-bold text-base text-[#0c2340] mb-1">
                  Telebirr Merchant / Shortcode
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Pay Merchant: Global Disciples
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-800 flex items-center justify-between">
                  <span>884422</span>
                  <button
                    onClick={() => handleCopy('884422', 'telebirr')}
                    className="text-slate-400 hover:text-[#0073E6]"
                    title="Copy Shortcode"
                  >
                    {copiedAccount === 'telebirr' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GivePage;
