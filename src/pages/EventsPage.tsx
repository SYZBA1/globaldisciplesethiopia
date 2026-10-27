import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { EVENTS } from '../data/eventsData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Check, 
  X, 
  Filter, 
  Users, 
  Mail, 
  Phone, 
  Building 
} from 'lucide-react';

interface SponsorLogo {
  name: string;
  imgUrl: string;
  website?: string;
}

const SPONSORS: SponsorLogo[] = [
  {
    name: 'Adams Wells',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/AW-Logo-500w-300x89.png',
    website: 'https://adamswells.com/',
  },
  {
    name: 'Alderfer Eggs',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/03/Alderfer-Egg.png',
    website: 'https://alderfereggs.com/',
  },
  {
    name: 'Andrews Auto',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/04/andrewsauto-logo-jpg-2024-edit-300x220.jpg',
    website: 'https://www.andrews-auto.com/',
  },
  {
    name: 'ARI Legacy Sleepers',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/ari-legacy.jpg',
    website: 'https://legacysleepers.com',
  },
  {
    name: 'Bare Wealth Advisors',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/BareWealthAdvisors-300x166.png',
    website: 'https://barewealthadvisors.com/',
  },
  {
    name: 'Ben & Sue Sprunger',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/Ben-Sue-Sprunger-300x200.png',
  },
  {
    name: "Bergey's Electric",
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/02/Bergeys-Electric-Black-with-black-contractor-number-Copy-300x126.jpg',
    website: 'https://bergeys-electric.com/',
  },
  {
    name: 'Coram Deo',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/04/Coram-Deo-Logo_Secondary-logo-full-color-02-002-300x82.png',
  },
  {
    name: 'D&S Flooring',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/03/dandsflooring-300x93.png',
    website: 'https://dandsflooring.com/',
  },
  {
    name: "Dienner's Country Restaurant",
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/12/Dienners-Country-Restaurant-Logo-Black-and-Yellow-300x114.png',
    website: 'https://dienners.com/',
  },
  {
    name: 'Everence',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/Everence-with-descriptor-300x132.jpg',
    website: 'https://everence.com/',
  },
  {
    name: 'Grauer',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/Grauer-300x164.png',
  },
  {
    name: 'JBA Offroad',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/08/JBA-Offroad-Color-480x90_TM-300x64.jpg',
    website: 'https://jbaoffroad.com/',
  },
  {
    name: 'KK Soffit',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/05/KK-SOFFIT-300x232.png',
  },
  {
    name: 'Knechel Demolition',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/02/Knechel-Demolition-Excavating-logo-300x145.jpg',
  },
  {
    name: 'Lancaster Log Cabins',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/Lancaster-Log-Cabins-300x104.jpg',
    website: 'https://lancasterlogcabins.com/',
  },
  {
    name: 'Landis Graphics',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/Landis-Logo-846x334-1-300x118.png',
  },
  {
    name: 'Martin Tree Services',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/03/MTS-Logo-300x124.png',
  },
  {
    name: 'Midwest Building Systems',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/Logo-midwest-2-002-300x93.jpg',
  },
  {
    name: 'New Holland Church Furniture',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/NewHollandChurchFurniture-300x116.png',
    website: 'https://www.newhollandwood.com/',
  },
  {
    name: 'North Group Consultants',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/04/NG_Consultants_LogoRevised_RGB-300x241.png',
    website: 'https://northgroupconsultants.com/',
  },
  {
    name: 'Oregon Dairy',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/oregon-dairy-logo-300x129.jpg',
    website: 'https://www.oregondairy.com/',
  },
  {
    name: 'Paul B Zimmerman',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/PaulB-300x106.jpg',
    website: 'https://www.pbzinc.com/',
  },
  {
    name: 'Ringger Soft Water',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/03/MicrosoftTeams-image-3-300x128.png',
  },
  {
    name: 'Signature Custom Cabinetry',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/02/1-Signature-Logo-Print-Color-300x254.jpg',
    website: 'https://signaturecustomcabinetry.com/',
  },
  {
    name: 'Sweatshirt of Hope',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/03/SOH-Broken-Logo-02-300x178.png',
    website: 'https://sweatshirtofhope.org/',
  },
  {
    name: "Master's Advisors",
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2025/04/Masters-Advisors-300x172.png',
    website: 'https://mastersadvisors.com/',
  },
  {
    name: 'Twin Pine Ford',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/06/Twin-Pines-Logo-300x125.png',
    website: 'https://www.twinpineford.com/',
  },
  {
    name: 'Vertex Mechanical',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2022/05/VertexMechanical-copy-300x107.png',
    website: 'https://www.vertex-mechanical.com/',
  },
  {
    name: 'WBYN 107.5 Alive',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/02/WBYN-Logo-color-OL-300x117.png',
    website: 'https://1075alive.com/',
  },
  {
    name: "Weaver's Toasted Grains",
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2024/03/Weaver-Toasted-Grains-Full-Color-Logo-300x300.png',
  },
  {
    name: 'Wolf Kline Electric',
    imgUrl: 'https://globaldisciples.org/wp-content/uploads/2026/04/2024-WK-1-300x197.jpg',
    website: 'https://www.wolfkline.com/',
  },
];

export const EventsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);
  const [sponsorForm, setSponsorForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: 'National Summit',
    notes: '',
  });

  const filteredEvents = EVENTS.filter((e) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return e.status === 'Completed';
    return e.status === 'Upcoming' || e.status === 'Registration Open';
  });

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sponsorForm.name && sponsorForm.email) {
      setSponsorSubmitted(true);
      setTimeout(() => {
        setIsSponsorModalOpen(false);
        setSponsorSubmitted(false);
        setSponsorForm({
          name: '',
          email: '',
          phone: '',
          organization: '',
          eventType: 'National Summit',
          notes: '',
        });
      }, 3000);
    }
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-[#0073E6] selection:text-white">
      <SEO
        title={t('Events & Gatherings | Global Disciples', 'ዝግጅቶች እና ስብሰባዎች | ግሎባል ዲሳይፕልስ')}
        description={t(
          "Connect with church leaders, discipleship directors, and prayer partners at Global Disciples summits, cohorts, and vision gatherings.",
          "ከቤተክርስቲያን መሪዎች፣ የደቀመዝሙርነት ዳይሬክተሮች እና የጸሎት አጋሮች ጋር በግሎባል ዲሳይፕልስ ጉባኤዎች እና ስብሰባዎች ላይ ይገናኙ።"
        )}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO & "WANT TO SPONSOR AN EVENT?" (Reference Image 1)         */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow / Super Title matching Screenshot 1 */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3 block">
            {t('GET INVOLVED', 'ይሳተፉ')}
          </span>

          {/* Main Title: "Events" with blue semi-circle arc motif */}
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-slate-950 tracking-tight leading-none mb-12 sm:mb-16 inline-flex items-baseline justify-center">
            <span>{t('Events', 'ዝግጅቶች')}</span>
            {/* The signature sky-blue curved arc emblem right beside "Events" */}
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

          {/* Callout Card: "Want to Sponsor an Event?" */}
          <div className="max-w-2xl mx-auto space-y-4 pt-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {t('Want to Sponsor an Event?', 'ዝግጅትን ስፖንሰር ማድረግ ይፈልጋሉ?')}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              {t(
                "You're invited to help support the work of near culture workers and to multiply prayer partners, donors, and advocates in the U.S. and across Ethiopia and East Africa.",
                "የተቀራራቢ ባህል ሠራተኞችን አገልግሎት ለመደገፍ እና የጸሎት አጋሮችን፣ ለጋሾችን እና ደጋፊዎችን በኢትዮጵያ እና በዓለም ዙሪያ ለማባዛት ተጋብዘዋል።"
              )}
            </p>

            {/* "Sponsor an Event" Button matching Reference Image 1 */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsSponsorModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0073E6] hover:bg-[#005bb5] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none"
              >
                {t('Sponsor an Event', 'ዝግጅት ስፖንሰር ያድርጉ')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: UPCOMING GATHERINGS & SUMMITS (Ethiopian Context)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0073E6] mb-2 block">
                {t('GATHERINGS & CONFERENCES', 'ስብሰባዎች እና ጉባኤዎች')}
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {t('Upcoming Gatherings & Events', 'መጪ ስብሰባዎች እና ዝግጅቶች')}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                {t(
                  'Join cluster directors, frontline disciple-makers, and ministry leaders across Ethiopia.',
                  'ከክላስተር ዳይሬክተሮች፣ ከግንባር ደቀመዝሙር አፍሪዎች እና ከአገልጋዮች ጋር በመላው ኢትዮጵያ ይገናኙ።'
                )}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm shrink-0 self-start md:self-auto">
              {(['All', 'Upcoming', 'Completed'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    filter === tab
                      ? 'bg-[#0073E6] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab === 'All'
                    ? t('All Events', 'ሁሉም ዝግጅቶች')
                    : tab === 'Upcoming'
                    ? t('Upcoming', 'መጪዎች')
                    : t('Completed', 'የተጠናቀቁ')}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Event Thumbnail */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={event.featured_image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        event.status === 'Registration Open'
                          ? 'bg-emerald-600 text-white'
                          : event.status === 'Upcoming'
                          ? 'bg-[#0073E6] text-white'
                          : 'bg-slate-700 text-white'
                      }`}>
                        {event.status === 'Registration Open'
                          ? t('Registration Open', 'ምዝገባ ክፍት ነው')
                          : event.status === 'Upcoming'
                          ? t('Upcoming', 'በቅርብ ቀን')
                          : t('Completed', 'የተጠናቀቀ')}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                      {event.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5 font-bold text-[#0073E6]">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#0073E6] transition-colors mb-3 leading-snug">
                      <Link to={`/events/${event.slug}`}>
                        {event.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate">{event.location} • {event.address}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {event.capacity || t('Limited seats', 'የተወሰነ ቦታ')}
                  </span>
                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0073E6] group-hover:text-[#005bb5] transition-colors"
                  >
                    <span>{t('Event Details', 'ዝርዝር መረጃ')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: "OUR SPONSORS" LOGO GALLERY (From Live Site Structure)         */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0073E6] mb-3 block">
              {t('PARTNERS & SUPPORTERS', 'አጋሮች እና ደጋፊዎች')}
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              {t('Our Sponsors', 'ስፖንሰሮቻችን')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-3">
              {t(
                'Grateful for businesses and community partners who stand behind our frontline mission.',
                'ከግንባር ተልዕኳችን በስተጀርባ ለቆሙ ንግዶች እና ማህበረሰብ አጋሮች ምስጋና ይሁን።'
              )}
            </p>
          </div>

          {/* Responsive Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            {SPONSORS.map((sponsor, idx) => {
              const content = (
                <div className="p-4 sm:p-5 h-24 sm:h-28 w-full flex items-center justify-center rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200 group">
                  <img
                    src={sponsor.imgUrl}
                    alt={sponsor.name}
                    loading="lazy"
                    className="max-h-14 sm:max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              );

              return sponsor.website ? (
                <a
                  key={idx}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full focus:outline-none"
                  title={sponsor.name}
                >
                  {content}
                </a>
              ) : (
                <div key={idx} className="w-full" title={sponsor.name}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Become a Sponsor Callout */}
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={() => setIsSponsorModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#0073E6] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all hover:scale-105"
            >
              <span>{t('Become an Event Sponsor', 'የዝግጅት ስፖንሰር ይሁኑ')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CIRCLE IMAGES & "OUR APPROACH" (Exact Reference Image 2)       */}
      {/* ========================================================================= */}
      <section className="relative bg-white pt-10 overflow-hidden select-none">
        
        {/* Floating Round Portraits overlapping White top and Blue bottom */}
        {/* Exact 6 authentic images matching Reference Image 2 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px]">
            
            {/* 1. Large Circle Left: Older laughing man in white tank top (reproducible.png) */}
            <div className="absolute left-[0%] sm:left-[2%] lg:left-[4%] top-[2%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/07/reproducible.png"
                alt="Smiling elderly believer in discipleship community"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. Medium Circle Center-Top: Smiling woman with yellow headscarf (reach-1-768x513.jpg) */}
            <div className="absolute left-[34%] sm:left-[35%] lg:left-[36%] top-[0%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 sm:border-[5px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/07/reach-1-768x513.jpg"
                alt="Smiling woman in yellow headscarf"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 3. Small-Medium Circle Center-Right Top: Elder woman with white headscarf (Ellipse-19-768x512.jpg) */}
            <div className="absolute left-[52%] sm:left-[52%] lg:left-[53%] top-[8%] w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/07/Ellipse-19-768x512.jpg"
                alt="Elderly disciple leader praying"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 4. Small Circle Lower-Center Left: Smiling woman in colorful pattern (Ellipse-12-768x514.jpg) */}
            <div className="absolute left-[31%] sm:left-[32%] lg:left-[33%] bottom-[6%] sm:bottom-[10%] w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/07/Ellipse-12-768x514.jpg"
                alt="Smiling young woman near-culture worker"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 5. Medium-Small Circle Lower-Center Right: Woman in green patterned headwrap (DSC2749-768x768.jpg) */}
            <div className="absolute left-[47%] sm:left-[48%] lg:left-[49%] bottom-[2%] sm:bottom-[4%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/08/DSC2749-768x768.jpg"
                alt="Leader in green patterned headscarf"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 6. Very Large Circle Far Right: Boy in orange shirt with necklace (DSC_5931-768x768.jpg) */}
            <div className="absolute right-[0%] sm:right-[1%] lg:right-[3%] top-[4%] w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 transition-transform duration-700 hover:scale-105">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2021/08/DSC_5931-768x768.jpg"
                alt="Young boy looking ahead attentively"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

        {/* Solid Blue Banner Section matching Reference Image 2 */}
        <div className="relative bg-[#0073E6] pt-24 sm:pt-36 md:pt-48 lg:pt-56 pb-20 sm:pb-28 text-white text-center -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            
            {/* Kicker: "Our Approach" */}
            <h5 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 mb-4 block">
              {t('Our Approach', 'አካሄዳችን')}
            </h5>

            {/* Headline: "Equipping People to Reach Their Nations." */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.15] mb-5">
              {t('Equipping People to Reach', 'ሰዎች እንዲደርሱ ማስታጠቅ')} <em className="italic font-serif font-bold">{t('Their', 'ሀገራቸውን')}</em> {t('Nations.', '')}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
              {t(
                'We train leaders living near least-reached communities to multiply disciples.',
                'ደቀመዛሙርትን እንዲያባዙ በትንሹ በተደረሱ ማህበረሰቦች አቅራቢያ የሚኖሩ መሪዎችን እናሰለጥናለን።'
              )}
            </p>

            {/* Vibrant Yellow "Learn More" Button matching Screenshot 2 */}
            <div className="pt-2">
              <Link
                to="/approach"
                className="inline-block bg-[#FFD434] hover:bg-[#ffcd1a] text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none"
              >
                {t('Learn More', 'ተጨማሪ ይወቁ')}
              </Link>
            </div>
          </div>

          {/* Dividing Arc Curve matching Screenshot 2 bottom */}
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

      {/* ========================================================================= */}
      {/* INTERACTIVE SPONSORSHIP INQUIRY MODAL                                    */}
      {/* ========================================================================= */}
      {isSponsorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 overflow-hidden">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsSponsorModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {sponsorSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900">
                  {t('Thank You for Partnering!', 'አጋር ስለሆኑ እናመሰግናለን!')}
                </h3>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  {t(
                    'Our Ethiopia and international event coordinators will connect with you within 24 hours.',
                    'የኢትዮጵያ እና የዓለም አቀፍ የዝግጅት አስተባባሪዎቻችን በ24 ሰዓታት ውስጥ ያነጋግሩዎታል።'
                  )}
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0073E6] block mb-1">
                    {t('EVENT PARTNERSHIP', 'የዝግጅት አጋርነት')}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                    {t('Sponsor an Event', 'ዝግጅት ስፖንሰር ያድርጉ')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {t(
                      'Help underwrite meals, venue logistics, and travel for frontline pastors and disciple makers.',
                      'ለግንባር አገልጋዮች እና ደቀመዝሙር አፍሪዎች የምግብ፣ የስብሰባ አዳራሽ እና የጉዞ ወጪዎችን ይደግፉ።'
                    )}
                  </p>
                </div>

                <form onSubmit={handleSponsorSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Your Name / Contact Person *', 'የእርስዎ ስም / ተወካይ *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={sponsorForm.name}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, name: e.target.value })}
                      placeholder="e.g. Dawit Tadesse"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('Email Address *', 'ኢሜይል አድራሻ *')}
                      </label>
                      <input
                        type="email"
                        required
                        value={sponsorForm.email}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                        placeholder="you@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t('Phone Number', 'ስልክ ቁጥር')}
                      </label>
                      <input
                        type="tel"
                        value={sponsorForm.phone}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, phone: e.target.value })}
                        placeholder="+251 91 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Business / Church / Organization', 'ድርጅት / ቤተክርስቲያን')}
                    </label>
                    <input
                      type="text"
                      value={sponsorForm.organization}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, organization: e.target.value })}
                      placeholder="e.g. Grace Fellowship / Sunshine Tech"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Event You Would Like to Sponsor', 'ስፖንሰር ማድረግ የሚፈልጉት ዝግጅት')}
                    </label>
                    <select
                      value={sponsorForm.eventType}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6] bg-white"
                    >
                      <option value="National Summit">{t('National Church Leaders Summit', 'ብሔራዊ የቤተክርስቲያን መሪዎች ጉባኤ')}</option>
                      <option value="Master Trainer Certification">{t('Master Trainer Certification Cohort', 'የአሰልጣኞች ማሰልጠኛ ስልጠና')}</option>
                      <option value="Prayer Summit">{t('Horn of Africa Intercessory Prayer Summit', 'የጸሎት ጉባኤ')}</option>
                      <option value="General Sponsorship">{t('General Event & Travel Underwriting', 'አጠቃላይ የዝግጅት ድጋፍ')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('Comments / Questions', 'አስተያየት ወይም ጥያቄ')}
                    </label>
                    <textarea
                      rows={3}
                      value={sponsorForm.notes}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, notes: e.target.value })}
                      placeholder={t('Tell us about your sponsorship vision...', 'ስለ ስፖንሰርሺፕ ራዕይዎ ያጋሩን...')}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#0073E6] hover:bg-[#005bb5] transition-all shadow-md focus:outline-none"
                    >
                      {t('Submit Sponsorship Inquiry', 'የስፖንሰርሺፕ ጥያቄ ያስገቡ')}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
