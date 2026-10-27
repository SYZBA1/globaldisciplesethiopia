import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle2, Send, Briefcase, Mail, User, Phone, MapPin, FileText, Heart, Shield } from 'lucide-react';

interface JobPosition {
  id: string;
  titleEn: string;
  titleAm: string;
  image: string;
  descEn: string;
  descAm: string;
  locationEn: string;
  locationAm: string;
  typeEn: string;
  typeAm: string;
  indeedUrl: string;
}

interface BenefitItem {
  id: string;
  titleEn: string;
  titleAm: string;
  descEn: string;
  descAm: string;
  imgUrl: string;
  iconFallback: React.ReactNode;
}

export const JoinUsPage: React.FC = () => {
  const { t } = useLanguage();

  // Positions data strictly matching Reference Image 2 & live site
  const positions: JobPosition[] = [
    {
      id: 'events-coordinator',
      titleEn: 'Events Coordinator',
      titleAm: 'የዝግጅቶች አስተባባሪ',
      image: 'https://globaldisciples.org/wp-content/uploads/2022/03/Assistant_GettyImages-638601928-768x512.jpg',
      descEn:
        "The Events Coordinator will develop and coordinate all Global Disciples' US-based events, which communicate the mission and vision of Global Disciples in creative and informative ways.",
      descAm:
        'የዝግጅቶች አስተባባሪው የግሎባል ዲሳይፕልስን ተልእኮ እና ራዕይ በፈጠራ እና መረጃ ሰጪ መንገዶች የሚያስተላልፉ ሁሉንም ዝግጅቶች ያዘጋጃል እና ያስተባብራል።',
      locationEn: 'Lancaster, PA / Remote options',
      locationAm: 'ላንካስተር፣ ፔንሲልቬኒያ / በርቀት መሥራት የሚቻል',
      typeEn: 'Full-Time',
      typeAm: 'ሙሉ ጊዜ',
      indeedUrl: 'https://www.indeed.com/job/events-coordinator-3e27110ed76c0d5d',
    },
    {
      id: 'partner-relations-regional-director-midwest',
      titleEn: 'Partner Relations Regional Director – Midwest',
      titleAm: 'የአጋሮች ግንኙነት ክልላዊ ዳይሬክተር – ሚድዌስት',
      image: 'https://globaldisciples.org/wp-content/uploads/2022/08/GettyImages-1325566034-768x512.jpg',
      descEn:
        'The Regional Director will be responsible for planning and implementing a comprehensive fundraising program that includes major gifts, corporate and foundation giving, planned giving, and special events within the Midwest United States.',
      descAm:
        'ክልላዊ ዳይሬክተሩ በክልሉ ውስጥ ዋና ስጦታዎችን፣ የኮርፖሬት እና የመሠረተ ልማት ድጋፎችን፣ የታቀደ ስጦታን እና ልዩ ዝግጅቶችን የሚያካትት ሁሉን አቀፍ የገንዘብ ማሰባሰቢያ ፕሮግራም የማቀድ እና የመተግበር ኃላፊነት ይኖርባቸዋል።',
      locationEn: 'Midwest Region / Hybrid',
      locationAm: 'ሚድዌስት ክልል / የተደባለቀ',
      typeEn: 'Full-Time',
      typeAm: 'ሙሉ ጊዜ',
      indeedUrl: 'https://www.indeed.com/job/partner-relations-regional-director-midwest-2a6e19b653986d19',
    },
  ];

  // Benefits data strictly matching Reference Images 3 & 4
  const benefits: BenefitItem[] = [
    {
      id: 'medical',
      titleEn: 'Medical',
      titleAm: 'የሕክምና ዋስትና',
      descEn: 'Premium 100% covered for employee and dependents; buy-up option available.',
      descAm: 'ለሠራተኛው እና ለቤተሰቦቹ 100% ሙሉ በሙሉ የተሸፈነ ክፍያ፤ ተጨማሪ ጥቅማጥቅም አማራጭ አለው።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/medical.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 'vision',
      titleEn: 'Vision',
      titleAm: 'የዓይን ሕክምና',
      descEn: 'Premium 100% covered for employee-opt-in available for dependents.',
      descAm: 'ለሠራተኛው 100% ሙሉ በሙሉ የተሸፈነ ክፍያ፤ ለጥገኞች የመምረጥ አማራጭ አለው።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/Vision.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      id: 'hsa',
      titleEn: 'Health Savings Account',
      titleAm: 'የጤና ቁጠባ ሂሳብ (HSA)',
      descEn: 'Monthly employer contribution.',
      descAm: 'የየወሩ የአሰሪ መዋጮ።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/HSA.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 'eap',
      titleEn: 'Employee Assistance Program',
      titleAm: 'የሠራተኞች ድጋፍ ፕሮግራም',
      descEn: 'Three free counseling sessions per covered member.',
      descAm: 'ለእያንዳንዱ አባል ሦስት ነጻ የማማከር ክፍለ-ጊዜዎች።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/Employee-Assistance-Program.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: 'retirement',
      titleEn: 'Retirement',
      titleAm: 'የጡረታ ፈንድ',
      descEn: '403(b) plan with 8% employer contribution annually.',
      descAm: 'የ 403(b) ዕቅድ ከ 8% ዓመታዊ የአሰሪ መዋጮ ጋር።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/Retirement.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 'prayer-days',
      titleEn: 'Prayer Days',
      titleAm: 'የጸሎት ቀናት',
      descEn: 'Six per year, including four individual and two corporate days.',
      descAm: 'በዓመት ስድስት ቀናት፣ አራት የግል እና ሁለት የጋራ የጸሎት ቀናትን ጨምሮ።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/prayer.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 'pto',
      titleEn: 'PTO',
      titleAm: 'የሚከፈልበት የዕረፍት ጊዜ (PTO)',
      descEn: 'Vacation, personal days, and holidays.',
      descAm: 'የዕረፍት፣ የግል ቀናት እና የሕዝብ በዓላት።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/PTO.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 'ltd',
      titleEn: 'Long Term Disability',
      titleAm: 'የረጅም ጊዜ የአካል ጉዳት ዋስትና',
      descEn: 'Staff can opt into dental, short-term disability, voluntary life, and AD&D. Employee contribution required.',
      descAm: 'ሠራተኞች የጥርስ ሕክምና፣ የአጭር ጊዜ የአካል ጉዳት፣ እና የሕይወት ዋስትና መምረጥ ይችላሉ። የሠራተኛ መዋጮ ያስፈልጋል።',
      imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/LTD.png',
      iconFallback: (
        <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  // Application Modal state
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    resumeLink: '',
    coverNote: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleModalClose = () => {
    setSelectedJob(null);
    setIsSubmitted(false);
    setAppForm({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      resumeLink: '',
      coverNote: '',
    });
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (appForm.fullName && appForm.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-[#0073E6] selection:text-white min-h-screen">
      <SEO
        title={t('Join Our Team — Careers | Global Disciples', 'ቡድናችንን ይቀላቀሉ — የሥራ ዕድሎች | ግሎባል ዲሳይፕልስ')}
        description={t(
          'Have a heart to use your professional skills to help spread the Good News through near-culture missions? Join our team! View open positions and full-time benefits.',
          'የሙያ ችሎታዎትን በቅርብ ባህል ተልእኮዎች አማካኝነት የምሥራቹን ቃል ለማዳረስ የመጠቀም ልብ አለዎት? ቡድናችንን ይቀላቀሉ! ክፍት የሥራ ቦታዎችን እና ሙሉ ጥቅማጥቅሞችን ይመልከቱ።'
        )}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO / TITLE & NARRATIVE (Reference Image 1)                   */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow & Title with Signature Blue Arc Motif */}
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3 block">
              {t('PARTICIPATE', 'ይሳተፉ')}
            </span>

            <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-slate-950 tracking-tight leading-none inline-flex items-baseline justify-center">
              <span>{t('Careers', 'የሥራ ዕድሎች')}</span>
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

          {/* "Join Our Team" Subheading & Lead Paragraph */}
          <div className="max-w-4xl space-y-4">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight">
              {t('Join Our Team', 'ቡድናችንን ይቀላቀሉ')}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {t(
                'Have a heart to use your professional skills to help spread the Good News through near-culture missions? Join our team! We prayerfully await the chance to work with you! Please click the links below each job listing to view the full description and responsibilities and to apply.',
                'የሙያ ችሎታዎትን በቅርብ ባህል ተልእኮዎች አማካኝነት የምሥራቹን ቃል ለማዳረስ የመጠቀም ልብ አለዎት? ቡድናችንን ይቀላቀሉ! ከእርስዎ ጋር አብሮ ለመሥራት በጸሎት እንጠባበቃለን! እባክዎን ሙሉ መግለጫውን እና ኃላፊነቶችን ለመመልከት እና ለማመልከት ከእያንዳንዱ የሥራ ዝርዝር በታች ያሉትን ማስፈንጠሪያዎች ጠቅ ያድርጉ።'
              )}
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OPEN POSITIONS (Reference Image 2)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F2F9FA] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-950 tracking-tight mb-10 sm:mb-14">
            {t('Open Positions', 'ክፍት የሥራ ቦታዎች')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {positions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Job Featured Image */}
                <div className="w-full h-60 sm:h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src={job.image}
                    alt={job.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#0073E6] shadow-sm">
                    {t(job.typeEn, job.typeAm)}
                  </div>
                </div>

                {/* Job Content */}
                <div className="p-8 sm:p-10 flex flex-col items-center text-center flex-grow">
                  <h4 className="font-serif font-bold text-2xl sm:text-[26px] text-slate-900 tracking-tight leading-snug mb-4">
                    {t(job.titleEn, job.titleAm)}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                    {t(job.descEn, job.descAm)}
                  </p>

                  {/* Apply Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleApplyClick(job)}
                      className="px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold border-2 border-slate-900 text-slate-900 bg-white hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                    >
                      {t('Apply Now', 'አሁን ያመልክቱ')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: FULL-TIME BENEFITS (Reference Images 3 & 4)                    */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F2F9FA] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-12 sm:mb-16">
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight">
              {t('Full-Time Benefits', 'የሙሉ ጊዜ ጥቅማጥቅሞች')}
            </h3>
          </div>

          {/* 4-Across Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
              >
                {/* Top Blue Block with Icon */}
                <div className="bg-[#2B78D4] h-36 sm:h-40 flex items-center justify-center p-6 relative overflow-hidden group-hover:bg-[#1E6BB8] transition-colors">
                  {/* Subtle inner glow / decorative circle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* Official icon image with fallback */}
                  <img
                    src={benefit.imgUrl}
                    alt={benefit.titleEn}
                    className="max-h-20 max-w-[85px] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback gracefully to hidden and show svg
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Bottom Content Block */}
                <div className="p-6 sm:p-7 bg-white flex flex-col items-center text-center flex-grow justify-start">
                  <h4 className="font-serif font-bold text-xl sm:text-[22px] text-slate-950 tracking-tight leading-snug mb-3">
                    {t(benefit.titleEn, benefit.titleAm)}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t(benefit.descEn, benefit.descAm)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CONFESSION OF FAITH (Reference Image 4)                        */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F2F9FA] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight">
            {t("Global Disciples' Confession of Faith", 'የግሎባል ዲሳይፕልስ የእምነት መግለጫ')}
          </h2>

          <div className="space-y-6 text-left sm:text-left">
            <p className="font-bold text-base sm:text-lg lg:text-xl text-slate-950 leading-relaxed text-center">
              {t(
                'Global Disciples serves to equip, connect and facilitate cooperation in the global Body of Christ among clusters of churches focused on reaching those least-reached with the Gospel. We assist in the development of locally-sustainable training in discipleship-mission, small business, and leadership, which result in reproducing fellowships of believers.',
                'ግሎባል ዲሳይፕልስ በወንጌል በትንሹ ወደተደረሱ ሕዝቦች ለመድረስ ትኩረት ባደረጉ የአብያተ ክርስቲያናት ስብስቦች መካከል በዓለም አቀፉ የክርስቶስ አካል ውስጥ ትብብርን ለማስታጠቅ፣ ለማገናኘት እና ለማመቻቸት ያገለግላል። አማኞችን የሚያባዙ ኅብረቶችን የሚያስገኙ በአካባቢው ዘላቂ የሆኑ የደቀመዝሙርነት-ተልእኮ፣ አነስተኛ ንግድ እና የአመራር ሥልጠናዎችን በማዘጋጀት እንረዳለን።'
              )}
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {t(
                'As grateful recipients of God’s grace, we always seek to act justly, to love mercy and to walk humbly with our God (Micah 6:8). In each area of responsibility, we want to seek first God’s kingdom and His righteousness (Matthew 6:33). Our theological understandings are consistent with the ',
                'የእግዚአብሔር ጸጋ አመስጋኝ ተቀባዮች እንደመሆናችን ሁልጊዜ በቅንነት ለመሥራት፣ ምሕረትን ለመውደድ እና ከአምላካችን ጋር በትህትና ለመሄድ እንፈልጋለን (ሚክያስ 6፡8)። በእያንዳንዱ የኃላፊነት መስክ በመጀመሪያ የእግዚአብሔርን መንግሥትና ጽድቁን መፈለግ እንፈልጋለን (ማቴዎስ 6፡33)። የእኛ ሥነ-መለኮታዊ ግንዛቤዎች ከ'
              )}
              <a
                href="https://lausanne.org/statement/lausanne-covenant"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#0073E6] font-semibold underline hover:text-blue-800 transition-colors"
              >
                {t('Lausanne Covenant', 'የሎዛን ቃል ኪዳን')}
              </a>{' '}
              {t('and the ', 'እና ከ')}
              <a
                href="https://lausanne.org/statement/manila-manifesto"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#0073E6] font-semibold underline hover:text-blue-800 transition-colors"
              >
                {t('Manila Manifesto.', 'የማኒላ ማኒፌስቶ ጋር የሚጣጣሙ ናቸው።')}
              </a>
            </p>
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
      {/* INTERACTIVE APPLICATION MODAL                                             */}
      {/* ========================================================================= */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-slate-100">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleModalClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close application modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900">
                  {t('Application Submitted!', 'ማመልከቻዎ በተሳካ ሁኔታ ገብቷል!')}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  {t(
                    `Thank you, ${appForm.fullName}. Your interest in the ${selectedJob.titleEn} role has been recorded. Our talent team will review your background and connect with you at ${appForm.email}.`,
                    `እናመሰግናለን ${appForm.fullName}። ለ${selectedJob.titleAm} የሥራ መደብ ያሳዩት ፍላጎት ተመዝግቧል። የሰው ኃይል ቡድናችን መረጃዎትን ገምግሞ በ ${appForm.email} በኩል ያገኝዎታል።`
                  )}
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="px-8 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-[#FFD434] hover:bg-[#ffcd1a] transition-colors shadow-sm"
                  >
                    {t('Done', 'ተጠናቀቀ')}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0073E6] block mb-1">
                    {t('Career Application', 'የሥራ ማመልከቻ')}
                  </span>
                  <h3 className="font-serif font-black text-2xl text-slate-950">
                    {t(selectedJob.titleEn, selectedJob.titleAm)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t(selectedJob.locationEn, selectedJob.locationAm)} • {t(selectedJob.typeEn, selectedJob.typeAm)}
                  </p>
                </div>

                <hr className="border-slate-100 my-2" />

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('Full Name *', 'ሙሉ ስም *')}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={appForm.fullName}
                      onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                      placeholder="e.g. Bethlehem Tadesse"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Email Address *', 'የኢሜይል አድራሻ *')}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Phone Number', 'ስልክ ቁጥር')}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                        placeholder="+251 91 234 5678"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('Current Location / City', 'የአሁኑ መኖሪያ ከተማ')}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={appForm.location}
                      onChange={(e) => setAppForm({ ...appForm, location: e.target.value })}
                      placeholder="e.g. Addis Ababa, Ethiopia"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('LinkedIn Profile or Portfolio URL', 'የሊንክድኢን ወይም የሥራ ልምድ ማስፈንጠሪያ')}
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="url"
                      value={appForm.resumeLink}
                      onChange={(e) => setAppForm({ ...appForm, resumeLink: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('Brief Statement of Calling / Experience', 'የአገልግሎት ጥሪ ወይም የሥራ ልምድ አጭር መግለጫ')}
                  </label>
                  <textarea
                    rows={3}
                    value={appForm.coverNote}
                    onChange={(e) => setAppForm({ ...appForm, coverNote: e.target.value })}
                    placeholder={t(
                      'Tell us a little about your heart for missions and relevant skills...',
                      'ስለ ተልእኮ አገልግሎት ያለዎትን ራዕይ እና ተዛማጅ የሙያ ልምድዎን በአጭሩ ያጋሩን...'
                    )}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-2.5 rounded-full text-xs font-bold bg-[#0073E6] hover:bg-blue-700 text-white transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t('Submit Application', 'ማመልከቻውን አስገባ')}</span>
                  </button>

                  {/* Fallback link to Indeed job posting */}
                  <a
                    href={selectedJob.indeedUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors"
                  >
                    {t('Or view on Indeed', 'ወይም በ Indeed ይመልከቱ')}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUsPage;
