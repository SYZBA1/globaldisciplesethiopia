import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Play, Download, CheckCircle2, X, BookOpen, Calendar, HeartHandshake, ArrowRight, Mail, User, Sparkles } from 'lucide-react';

export const DiscoverMorePage: React.FC = () => {
  const { t } = useLanguage();

  // Video play state
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Download booklet modal state
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadForm, setDownloadForm] = useState({ name: '', email: '' });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadForm.name && downloadForm.email) {
      setDownloadSuccess(true);
    }
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
    setDownloadSuccess(false);
    setDownloadForm({ name: '', email: '' });
  };

  return (
    <div className="bg-[#F0F9FB] text-slate-900 selection:bg-[#0073E6] selection:text-white min-h-screen">
      <SEO
        title={t('Discover More — Testimonies & Stories | Global Disciples', 'ተጨማሪ ይመልከቱ — ምስክርነቶች እና ታሪኮች | ግሎባል ዲሳይፕልስ')}
        description={t(
          'Discover testimonies of God at work, download God’s Stories Volume 3, watch Within Reach, and learn how local churches reach least-reached peoples.',
          'እግዚአብሔር በሥራ ላይ ያለበትን ምስክርነቶች ይመልከቱ፣ የእግዚአብሔር ታሪኮች ቅጽ 3ን ያውርዱ፣ እና የአገር ውስጥ አብያተ ክርስቲያናት በትንሹ ወደተደረሱ ሕዝቦች እንዴት እንደሚደርሱ ይወቁ።'
        )}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO / TESTIMONIES OF GOD AT WORK (Reference Image 1)          */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-slate-200/60 bg-[#F0F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headings, narrative & download CTA */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.1]">
                {t('Testimonies of God at Work', 'እግዚአብሔር በሥራ ላይ መሆኑ ምስክርነቶች')}
              </h1>

              <p className="text-sm sm:text-base font-bold text-slate-800 tracking-wide">
                {t(
                  "Download your copy of God's Stories, Volume 3 now!",
                  "የእግዚአብሔር ታሪኮች፣ ቅጽ 3 ቅጂዎን አሁኑኑ ያውርዱ!"
                )}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t(
                  'God is at work! Redeeming lives, changing families, transforming communities, and multiplying disciples. These testimonies come from men and women engaged in pursuing the mission to share the Good News of Jesus with those waiting to hear. Join our community of monthly donors bringing the hope of Jesus to least-reached people groups around the world.',
                  'እግዚአብሔር በሥራ ላይ ነው! ሕይወትን በመዋጀት፣ ቤተሰቦችን በመለወጥ፣ ማህበረሰቦችን በማደስ እና ደቀ መዛሙርትን በማብዛት ላይ ነው። እነዚህ ምስክርነቶች የመጡት የኢየሱስን የምሥራች ቃል ለመስማት ለሚጠባበቁት ለማካፈል በተሰማሩ ወንዶች እና ሴቶች ነው። በዓለም ዙሪያ ላሉ በትንሹ ወደተደረሱ ሕዝቦች የኢየሱስን ተስፋ ከሚያመጡ ወርሃዊ ደጋፊዎች ማህበረሰብ ጋር ይቀላቀሉ።'
                )}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsDownloadOpen(true)}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#0073E6] hover:bg-blue-700 text-white transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('Download Your Copy Now!', 'ቅጂዎን አሁኑኑ ያውርዱ!')}</span>
                </button>
              </div>
            </div>

            {/* Right Column: God's Stories Volume 3 Booklet Cover */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setIsDownloadOpen(true)}
                className="w-full max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group cursor-pointer hover:scale-[1.02] transition-transform duration-300 relative"
              >
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2025/04/Gods-Stories-3-Cover.png"
                  alt="God's Stories Volume 3 Cover"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#0073E6]" />
                    {t('Preview & Download', 'ቅድመ-ዕይታ እና ማውረድ')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHO FIRST TOLD YOU ABOUT JESUS & VIDEO (Reference Image 2)      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F0F9FB] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Embedded Video or Video Player Card */}
            <div className="lg:col-span-6">
              <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 relative group">
                {isPlayingVideo ? (
                  <iframe
                    title="Within Reach - Global Disciples"
                    src="https://www.youtube-nocookie.com/embed/swD4opAm5gU?autoplay=1&rel=0"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                    {/* YouTube High-Res Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/swD4opAm5gU/maxresdefault.jpg"
                      alt="Within Reach Video Thumbnail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30 group-hover:from-black/80 transition-colors" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-white/90 p-1 flex items-center justify-center shadow">
                        <Sparkles className="w-4 h-4 text-[#0073E6]" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold leading-none drop-shadow">Within Reach</p>
                        <p className="text-white/70 text-[10px] mt-0.5">Global Disciples International</p>
                      </div>
                    </div>

                    {/* Center Red Play Button matching YouTube reference */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-12 bg-red-600 group-hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Watch on YouTube badge */}
                    <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-white/90 font-medium">
                      Watch on <span className="font-bold text-white">YouTube</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: "Who First Told You About Jesus?" Heading & text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight leading-snug">
                {t('Who First Told You About Jesus?', 'ስለ ኢየሱስ መጀመሪያ ማን ነገረዎት?')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {t(
                  'We invite you to discover more about Global Disciples.',
                  'ስለ ግሎባል ዲሳይፕልስ የበለጠ እንዲያውቁ በአክብሮት እንጋብዝዎታለን።'
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: VISION & APPROACH (Reference Image 2 & 3)                      */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F0F9FB] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Large Headline */}
          <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
              {t(
                'One third of our world has not yet heard the Good News of Jesus…',
                'የዓለማችን አንድ ሦስተኛው ገና የኢየሱስን የምሥራች ቃል አልሰማም…'
              )}
            </h2>
          </div>

          {/* Two-Column: Vision & Model narrative + Discipleship Training Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Vision & Approach copy */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t('As Global Disciples, our ', 'እንደ ግሎባል ዲሳይፕልስ፣ የእኛ ')}
                <Link
                  to="/about/vision-mission"
                  className="text-[#0073E6] font-bold underline hover:text-blue-800 transition-colors"
                >
                  {t('vision', 'ራዕይ')}
                </Link>
                {t(
                  ' is to see that every person has an opportunity to choose and follow Jesus. To accomplish this, we make it possible for local churches—in almost 80 countries—to multiply disciples and plant churches among least-reached peoples.',
                  ' እያንዳንዱ ሰው ኢየሱስን የመምረጥ እና የመከተል ዕድል እንዲኖረው ማየት ነው። ይህንን ለማሳካት በአካባቢው ያሉ አብያተ ክርስቲያናት—በ80 በሚጠጉ አገሮች ውስጥ—ደቀመዛሙርትን እንዲያባዙ እና በትንሹ ወደተደረሱ ሕዝቦች መካከል አብያተ ክርስቲያናትን እንዲተክሉ እናስችላለን።'
                )}
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {t('We equip leaders at the local level through the ', 'በአካባቢ ደረጃ ያሉ መሪዎችን የምናስታጥቀው ')}
                <Link
                  to="/approach"
                  className="text-[#0073E6] font-bold underline hover:text-blue-800 transition-colors"
                >
                  {t('approach', 'በአካሄዳችን')}
                </Link>
                {t(
                  ' of training people in local churches and sending them out to their own people. This innovative training model is reproducible, sustainable, and amazingly effective in spreading the Gospel, and multiplying disciples.',
                  ' አማካኝነት ሰዎችን በአካባቢ አብያተ ክርስቲያናት በማሰልጠን እና ወደራሳቸው ሕዝብ በመላክ ነው። ይህ አዲስ የሥልጠና ሞዴል ሊባዛ የሚችል፣ ዘላቂ እና ወንጌልን ለማዳረስ እና ደቀ መዛሙርትን ለማብዛት እጅግ በጣም ውጤታማ ነው።'
                )}
              </p>
            </div>

            {/* Right Column: Training Session Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[550px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://globaldisciples.org/wp-content/uploads/2024/01/WIGImage-1024x768.jpg"
                  alt="Local church leaders in discipleship mission training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EVENTS & PRAYER CALLOUTS (Reference Image 3)                    */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F0F9FB] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Card: Events */}
            <div className="space-y-4">
              <h3 className="font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                {t('Events', 'ዝግጅቶች')}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[72px]">
                {t(
                  "Join one of our events in your area. We're holding dinners this year in Indiana, Ohio, Oklahoma, and Pennsylvania. Choose from any of our events and hear personal stories of families, businesses, and communities being transformed by the Good News.",
                  'በአካባቢዎ ከሚካሄዱት ዝግጅቶቻችን በአንዱ ይሳተፉ። በዝግጅቶቻችን ላይ በመገኘት በምሥራቹ ቃል የተለወጡ ቤተሰቦች፣ የንግድ ድርጅቶች እና ማህበረሰቦችን የግል ምስክርነቶች ያዳምጡ።'
                )}
              </p>

              <div className="pt-2">
                <Link
                  to="/events"
                  className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#0073E6] hover:bg-blue-700 text-white transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>{t('Events', 'ዝግጅቶች')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Prayer */}
            <div className="space-y-4">
              <h3 className="font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                {t('Prayer', 'ጸሎት')}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[72px]">
                {t(
                  'Sign up for our monthly prayer calendar, ask about intercessory teams, or find more ways that you can pray by visiting our prayer page.',
                  'ለወርሃዊ የጸሎት የቀን መቁጠሪያችን ይመዝገቡ፣ ስለ አማላጅ ቡድኖች ይጠይቁ፣ ወይም የጸሎት ገጻችንን በመጎብኘት የሚጸልዩባቸውን ተጨማሪ መንገዶች ያግኙ።'
                )}
              </p>

              <div className="pt-2">
                <Link
                  to="/get-involved/pray"
                  className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#0073E6] hover:bg-blue-700 text-white transition-colors shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>{t('Prayer', 'ጸሎት')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SIGNATURE CONCAVE ARC TO FOOTER (#0D161D)                                  */}
        {/* ========================================================================= */}
        <div className="w-full overflow-hidden leading-none mt-20 sm:mt-28">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 md:h-16 text-[#0D161D] block preserve-3d"
          >
            <path
              d="M0 60C380 15 1060 15 1440 60V60H0V60Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE BOOKLET DOWNLOAD MODAL                                        */}
      {/* ========================================================================= */}
      {isDownloadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-100">
            <button
              type="button"
              onClick={handleCloseDownload}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {downloadSuccess ? (
              <div className="py-6 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif font-black text-2xl text-slate-950">
                  {t('Your Download is Ready!', 'ቅጂዎ ዝግጁ ነው!')}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {t(
                    `Thank you, ${downloadForm.name}! A digital copy of God's Stories, Volume 3 has been sent to ${downloadForm.email}.`,
                    `እናመሰግናለን ${downloadForm.name}። የእግዚአብሔር ታሪኮች ቅጽ 3 ዲጂታል ቅጂ ወደ ${downloadForm.email} ተልኳል።`
                  )}
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://globaldisciples.org/wp-content/uploads/2025/04/Gods-Stories-3-Cover.png"
                    download="Gods-Stories-Volume-3.png"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#0073E6] hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('Open PDF / Reader', 'ፒዲኤፉን ክፈት')}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseDownload}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    {t('Done', 'ተጠናቀቀ')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://globaldisciples.org/wp-content/uploads/2025/04/Gods-Stories-3-Cover.png"
                    alt="Booklet cover thumbnail"
                    className="w-14 h-20 object-cover rounded-xl shadow-md border border-slate-200"
                  />
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0073E6] block">
                      {t('Free Digital Booklet', 'ነጻ ዲጂታል መጽሐፍ')}
                    </span>
                    <h3 className="font-serif font-black text-xl text-slate-950">
                      {t("God's Stories, Volume 3", 'የእግዚአብሔር ታሪኮች፣ ቅጽ 3')}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t('Stories of God’s Mission to the Least-reached', 'በጥቂቱ ወደተደረሱ ሕዝቦች የእግዚአብሔር ተልእኮ ታሪኮች')}
                    </p>
                  </div>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('Your Name *', 'ስምዎ *')}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={downloadForm.name}
                      onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                      placeholder="e.g. Dawit Bekele"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('Email Address *', 'የኢሜይል አድራሻ *')}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={downloadForm.email}
                      onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                      placeholder="e.g. dawit@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-full text-xs font-bold bg-[#0073E6] hover:bg-blue-700 text-white transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('Send Me God’s Stories Now', 'የእግዚአብሔርን ታሪኮች አሁኑኑ ላኩኝ')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoverMorePage;
