import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Play, X, Search, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VideoStory {
  id: string;
  titleEn: string;
  titleAm: string;
  descriptionEn: string;
  descriptionAm: string;
  thumbnail: string;
  badge?: string;
  quote?: string;
  videoUrl: string;
}

interface Article {
  id: string;
  titleEn: string;
  titleAm: string;
  date: string;
  category: string;
  categoryAm: string;
  tags: string[];
  tagsAm: string[];
  image?: string;
  slug: string;
  hasButton?: boolean;
}

const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'god-provides',
    titleEn: 'God Provides',
    titleAm: 'እግዚአብሔር ያዘጋጃል',
    descriptionEn:
      'Followers of Jesus in Nepal are committed to help to equip church planters and disciple-makers. God honors their faith and generosity in miraculous ways.',
    descriptionAm:
      'በኔፓል ያሉ የኢየሱስ ተከታዮች ቤተክርስቲያን ተካዮችን እና ደቀመዝሙር አፍሪዎችን ለማስታጠቅ ቆርጠው ተነስተዋል። እግዚአብሔር እምነታቸውንና ልግስናቸውን በተአምራዊ ሁኔታ ያከብራል።',
    thumbnail:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
  {
    id: 'ebsas-vision',
    titleEn: "Ebsa's Vision",
    titleAm: 'የኤብሳ ራዕይ',
    descriptionEn:
      'Ebsa shares his vision as a near-culture mission worker to equip disciples to share Jesus, to plant churches, develop as leaders, and use small business to multiply more disciples across his nation.',
    descriptionAm:
      'ኤብሳ እንደ ተቀራራቢ ባህል ሚሽን ሠራተኛ ደቀመዛሙርት ኢየሱስን እንዲያካፍሉ፣ አብያተ ክርስቲያናትን እንዲተክሉ፣ በአመራር እንዲያድጉ እና አነስተኛ ንግድን ተጠቅመው ደቀመዛሙርትን እንዲያባዙ ያለውን ራዕይ ያካፍላል።',
    thumbnail:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
    badge: 'Ebsa',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
  {
    id: 'what-is-a-disciple',
    titleEn: 'What is a Disciple?',
    titleAm: 'ደቀመዝሙር ማለት ምን ማለት ነው?',
    descriptionEn: 'Moses explains how he sees being a disciple of Jesus Christ.',
    descriptionAm: 'ሞሰስ የኢየሱስ ክርስቶስ ደቀመዝሙር መሆንን እንዴት እንደሚመለከተው ያብራራል።',
    thumbnail:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
  {
    id: 'questions-to-purpose',
    titleEn: 'From Questions to Purpose',
    titleAm: 'ከልመና ወደ ዓላማ',
    descriptionEn:
      'Young believers discover their God-given identity and calling to reach their peers and community with the hope of the Gospel.',
    descriptionAm:
      'ወጣት አማኞች እኩዮቻቸውንና ማህበረሰባቸውን በወንጌል ተስፋ ለመድረስ ከእግዚአብሔር የተሰጣቸውን ማንነትና ጥሪ ያገኛሉ።',
    thumbnail:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
  {
    id: 'when-god-moves',
    titleEn: 'When God Moves',
    titleAm: 'እግዚአብሔር ሲንቀሳቀስ',
    descriptionEn:
      'When God directed Beni to take his team of disciple-makers to a gang-controlled community, he had no idea of the transformation that awaited.',
    descriptionAm:
      'እግዚአብሔር ቤኒን የደቀመዝሙር አፍሪ ቡድኑን በወንጀለኞች ወደሚመራ ማህበረሰብ እንዲወስድ ሲመራው፣ ምን ዓይነት አስደናቂ ለውጥ እንደሚመጣ አላወቀም ነበር።',
    thumbnail:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    quote: 'Beni heeded the advice, but he soon realized his mistake.',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
  {
    id: 'power-of-forgiveness',
    titleEn: 'The Power of Forgiveness',
    titleAm: 'የይቅርታ ኃይል',
    descriptionEn:
      'In a region torn by tribal conflict, radical forgiveness opens closed doors to establish vibrant new fellowships.',
    descriptionAm:
      'በጎሳ ግጭት በታመሰ አካባቢ፣ አስደናቂ ይቅርታ የተዘጉ በሮችን በመክፈት አዳዲስ ሕያው ሕብረቶችን መሰረተ።',
    thumbnail:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/5-9Fw9kO_kU',
  },
];

const ARTICLES: Article[] = [
  {
    id: 'equipping-leaders',
    titleEn: 'Equipping Leaders',
    titleAm: 'መሪዎችን ማስታጠቅ',
    date: '13/10/26',
    category: 'GENERAL, NEWSLETTER',
    categoryAm: 'አጠቃላይ፣ ዜና መጽሔት',
    tags: [
      'CHURCHES',
      'COMMUNITY',
      'FAMILY',
      'GLOBAL DISCIPLES APPROACH',
      'LEADERS',
      'LEADERSHIP DEVELOPMENT',
      'LEADERSHIP TRAINING',
      'LIFE TRANSFORMATION',
    ],
    tagsAm: ['አብያተ ክርስቲያናት', 'ማህበረሰብ', 'ቤተሰብ', 'የአመራር ስልጠና', 'የሕይወት ለውጥ'],
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80',
    slug: 'equipping-leaders',
  },
  {
    id: 'undaunted-courage',
    titleEn: 'Undaunted Courage',
    titleAm: 'የማይናወጥ ድፍረት',
    date: '06/10/26',
    category: 'NEWSLETTER, TESTIMONY',
    categoryAm: 'ዜና መጽሔት፣ ምስክርነት',
    tags: [
      'COURAGE',
      'DISCIPLE-MAKER',
      'GOSPEL',
      'HEALING',
      'OPPOSITION',
      'OUTREACH',
      'PRAYER',
      'SPIRITUAL WARFARE',
      'VISION',
    ],
    tagsAm: ['ድፍረት', 'ደቀመዝሙር አፍሪ', 'ወንጌል', 'ፈውስ', 'ጸሎት', 'ራዕይ'],
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80',
    slug: 'undaunted-courage',
    hasButton: true,
  },
  {
    id: 'the-right-fit',
    titleEn: 'The Right Fit',
    titleAm: 'ትክክለኛው ተስማሚ',
    date: '15/09/26',
    category: 'GENERAL, TESTIMONY',
    categoryAm: 'አጠቃላይ፣ ምስክርነት',
    tags: [
      'MISSION',
      'PURPOSE',
      'SMALL BUSINESS',
      'TRAINING',
      'VALUE',
      'VALUES',
      'WITNESS',
    ],
    tagsAm: ['ተልዕኮ', 'ዓላማ', 'አነስተኛ ንግድ', 'ስልጠና', 'እሴቶች', 'ምስክር'],
    slug: 'the-right-fit',
  },
  {
    id: 'groundbreaking-prayer',
    titleEn: 'Groundbreaking Prayer',
    titleAm: 'መሠረት ጣይ ጸሎት',
    date: '08/09/26',
    category: 'DEVOTIONAL, ENGAGEMENT',
    categoryAm: 'መንፈሳዊ ንባብ፣ ተሳትፎ',
    tags: [
      'GROUNDBREAKING PRAYER',
      'HARD PLACES',
      'INTERCESSION',
      'PRAYER PREPARATION',
      'RESILIENCE',
      'SPIRITUAL BATTLES',
    ],
    tagsAm: ['መሠረት ጣይ ጸሎት', 'አስቸጋሪ ስፍራዎች', 'ምልጃ', 'መንፈሳዊ ተጋድሎ'],
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80',
    slug: 'groundbreaking-prayer',
  },
  {
    id: 'circle-of-silence',
    titleEn: 'The Circle of Silence',
    titleAm: 'የዝምታ ክበብ',
    date: '01/09/26',
    category: 'GENERAL, TESTIMONY',
    categoryAm: 'አጠቃላይ፣ ምስክርነት',
    tags: [
      'CIRCLE OF SILENCE',
      'HARD PLACES',
      'INTERCESSION',
      'PERSECUTION',
      'RESILIENCE',
      'UNREACHED GROUPS',
    ],
    tagsAm: ['የዝምታ ክበብ', 'አስቸጋሪ ስፍራዎች', 'ምልጃ', 'ስደት', 'ያልተዳረሱ ቡድኖች'],
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
    slug: 'circle-of-silence',
  },
  {
    id: 'gods-promises',
    titleEn: "God's Promises",
    titleAm: 'የእግዚአብሔር ተስፋዎች',
    date: '25/08/26',
    category: 'GENERAL, TESTIMONY',
    categoryAm: 'አጠቃላይ፣ ምስክርነት',
    tags: [
      'BIBLE',
      'CALLING',
      'DISCIPLES',
      'EQUIPPING',
      'HEALING',
      'HOPE',
      'LIFE CHANGE',
      'TESTIMONY',
    ],
    tagsAm: ['መጽሐፍ ቅዱስ', 'ጥሪ', 'ደቀመዛሙርት', 'ማስታጠቅ', 'ተስፋ', 'ምስክርነት'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    slug: 'gods-promises',
  },
  {
    id: 'has-your-will-kept-up',
    titleEn: 'Has Your Will Kept Up with Your Life?',
    titleAm: 'ኑዛዜዎ ከሕይወትዎ ጋር ተስማምቷልን?',
    date: '14/08/26',
    category: 'GENERAL, GENEROSITY',
    categoryAm: 'አጠቃላይ፣ ልግስና',
    tags: [
      'FINANCIAL PLANNING',
      'GENEROSITY',
      'GIVING',
      'IMPACT',
      'LEGACY',
      'MINISTRY',
      'WILLS',
    ],
    tagsAm: ['የፋይናንስ እቅድ', 'ልግስና', 'መስጠት', 'ውርስ', 'አገልግሎት'],
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    slug: 'has-your-will-kept-up',
  },
  {
    id: 'least-of-these',
    titleEn: 'The Least of These',
    titleAm: 'ከእነዚህ ከታናናሾቹ',
    date: '14/08/26',
    category: 'GENERAL, TESTIMONY',
    categoryAm: 'አጠቃላይ፣ ምስክርነት',
    tags: [
      'CHURCH PLANTING',
      'LEAST-REACHED PEOPLE',
      'MISSION',
      'MULTIPLICATION',
      'NOMADS',
      'OUTREACH',
    ],
    tagsAm: ['ቤተክርስቲያን ተከላ', 'ያልተዳረሱ ሰዎች', 'ሚሽን', 'ማባዛት', 'ዘላኖች'],
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=700&q=80',
    slug: 'least-of-these',
    hasButton: true,
  },
  {
    id: 'amritas-new-kitchen',
    titleEn: "Amrita's New Kitchen",
    titleAm: 'የአምሪታ አዲስ ወጥ ቤት',
    date: '21/07/26',
    category: 'GENERAL, TESTIMONY',
    categoryAm: 'አጠቃላይ፣ ምስክርነት',
    tags: [
      'HEALING',
      'HOSPITALITY',
      'MISSION',
      'MULTIPLICATION',
      'PRAYER',
      'SPIRITUAL FREEDOM',
      'WOMEN',
    ],
    tagsAm: ['ፈውስ', 'እንግዳ ተቀባይነት', 'ሚሽን', 'ጸሎት', 'መንፈሳዊ ነፃነት', 'ሴቶች'],
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    slug: 'amritas-new-kitchen',
  },
];

export const StoriesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCat =
        selectedCategory === 'All' ||
        article.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchTag =
        selectedTag === 'All' ||
        article.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()));
      const matchSearch =
        searchQuery.trim() === '' ||
        article.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.titleAm.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchTag && matchSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <div className="bg-[#F4F9FB] text-slate-900 selection:bg-[#0073E6] selection:text-white">
      <SEO
        title={t('Stories | Global Disciples', 'ታሪኮች | ግሎባል ዲሳይፕልስ')}
        description={t(
          "We're about people. We see every individual as a symbol of God's grace. And each person has their own unique story—a story worth sharing.",
          'እኛ ስለ ሰዎች ግድ ይለናል። እያንዳንዱን ግለሰብ የእግዚአብሔር ጸጋ ምልክት አድርገን እንመለከታለን። እያንዳንዱ ሰው የራሱ የሆነ ልዩ ታሪክ አለው።'
        )}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO & STORIES INSPIRE US (Image 1)           */}
      {/* ========================================================= */}
      <section
        className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center text-white overflow-hidden bg-slate-950"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/70 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#1EA5FC] mb-4">
            {t('STORIES', 'ታሪኮች')}
          </p>

          {/* Main Title: Stories Inspire Us . */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 inline-flex items-baseline justify-center">
            <span>{t('Stories Inspire Us', 'ታሪኮች ያነሳሱናል')}</span>
            <span
              className="inline-block ml-3 w-4 h-4 sm:w-5 sm:h-5 bg-[#0073E6] rounded-tr-full rounded-br-full"
              aria-hidden="true"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            {t(
              "We're about people. We see every individual as a symbol of God's grace. And each person has their own unique story—a story worth sharing.",
              'እኛ ስለ ሰዎች ግድ ይለናል። እያንዳንዱን ግለሰብ የእግዚአብሔር ጸጋ ምልክት አድርገን እንመለከታለን። እያንዳንዱ ሰው ሊካፈል የሚገባው የራሱ የሆነ ልዩ ታሪክ አለው።'
            )}
          </p>

          {/* CTA Button: Play Susan's Story */}
          <div>
            <button
              type="button"
              onClick={() => setActiveVideoUrl('https://www.youtube.com/embed/5-9Fw9kO_kU')}
              className="inline-flex items-center gap-2 bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>{t("Play Susan's Story", 'የሱዛንን ታሪክ ይመልከቱ')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: STORIES OF ORDINARY DISCIPLES (Image 2)       */}
      {/* ========================================================= */}
      <section className="bg-[#0B151F] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white">
              {t('Stories of Ordinary Disciples', 'የተራ ደቀመዛሙርት ታሪኮች')}
            </h2>
          </div>

          {/* 3-Column Video Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {VIDEO_STORIES.map((story) => (
              <div
                key={story.id}
                className="group cursor-pointer flex flex-col"
                onClick={() => setActiveVideoUrl(story.videoUrl)}
              >
                {/* Video Card Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-white/10 shadow-xl mb-5">
                  <img
                    src={story.thumbnail}
                    alt={story.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                  />

                  {/* Play Button Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Badge (e.g. "Ebsa" in Card 2) */}
                  {story.badge && (
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-bold text-white tracking-wide">
                      {story.badge}
                    </div>
                  )}

                  {/* Quote Overlay (e.g. Beni's quote in Card 5) */}
                  {story.quote && (
                    <div className="absolute bottom-3 right-3 max-w-[200px] text-right text-[11px] font-medium text-white/90 drop-shadow">
                      {story.quote}
                    </div>
                  )}
                </div>

                {/* Card Title: Editorial Serif Bold */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#1EA5FC] transition-colors">
                  {language === 'am' ? story.titleAm : story.titleEn}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  {language === 'am' ? story.descriptionAm : story.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FILTERS, SEARCH & BLOG ARTICLES (Images 3 & 4) */}
      {/* ========================================================= */}
      <section className="bg-[#F4F9FB] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Control Bar matching Image 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: FILTERS with 2 Dropdowns */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-600 block mb-2">
              {t('FILTERS', 'ማጣሪያዎች')}
            </span>

            <div className="flex flex-wrap items-center gap-3">
              {/* Dropdown 1: Category */}
              <div className="relative min-w-[170px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-xs sm:text-[13px] text-slate-700 shadow-sm pr-9 focus:outline-none focus:ring-2 focus:ring-[#0073E6] cursor-pointer"
                >
                  <option value="All">{t('Select Category', 'ምድብ ይምረጡ')}</option>
                  <option value="General">{t('General', 'አጠቃላይ')}</option>
                  <option value="Newsletter">{t('Newsletter', 'ዜና መጽሔት')}</option>
                  <option value="Testimony">{t('Testimony', 'ምስክርነት')}</option>
                  <option value="Devotional">{t('Devotional', 'መንፈሳዊ ንባብ')}</option>
                  <option value="Generosity">{t('Generosity', 'ልግስና')}</option>
                  <option value="Engagement">{t('Engagement', 'ተሳትፎ')}</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Dropdown 2: Tag */}
              <div className="relative min-w-[170px]">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-xs sm:text-[13px] text-slate-700 shadow-sm pr-9 focus:outline-none focus:ring-2 focus:ring-[#0073E6] cursor-pointer"
                >
                  <option value="All">{t('Select Tag', 'መለያ ይምረጡ')}</option>
                  <option value="Churches">{t('Churches', 'አብያተ ክርስቲያናት')}</option>
                  <option value="Community">{t('Community', 'ማህበረሰብ')}</option>
                  <option value="Disciples">{t('Disciples', 'ደቀመዛሙርት')}</option>
                  <option value="Leadership">{t('Leadership', 'አመራር')}</option>
                  <option value="Mission">{t('Mission', 'ሚሽን')}</option>
                  <option value="Prayer">{t('Prayer', 'ጸሎት')}</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right: SEARCH Input */}
          <div className="w-full md:w-72">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-600 block mb-2">
              {t('SEARCH', 'ፈልግ')}
            </span>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search', 'ፈልግ...')}
                className="w-full bg-white border border-slate-300 rounded-lg pl-4 pr-10 py-2.5 text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0073E6]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 9 Articles Grid matching Images 3 & 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredArticles.slice(0, visibleCount).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Optional Article Top Image */}
              {article.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Article Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] mb-3 leading-snug group-hover:text-[#0073E6] transition-colors">
                    {language === 'am' ? article.titleAm : article.titleEn}
                  </h3>

                  {/* Metadata: Date & Category */}
                  <div className="text-[11px] sm:text-xs font-bold text-slate-500 mb-2 tracking-wide uppercase">
                    <span>{t('DATE: ', 'ቀን፡ ')}{article.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-[#0073E6]">
                      {t('CATEGORY: ', 'ምድብ፡ ')}
                      {language === 'am' ? article.categoryAm : article.category}
                    </span>
                  </div>

                  {/* Metadata: Tags */}
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 leading-relaxed tracking-wider uppercase mb-5">
                    <span className="text-slate-600 font-bold">{t('TAGS: ', 'መለያዎች፡ ')}</span>
                    {(language === 'am' ? article.tagsAm : article.tags).join(', ')}
                  </p>
                </div>

                {/* Optional Read More Button (matching Undaunted Courage & Least of These in Image 3 & 4) */}
                {article.hasButton && (
                  <div className="pt-2">
                    <Link
                      to={`/stories/${article.slug}`}
                      className="inline-block px-5 py-1.5 rounded-full border border-[#0073E6] text-[#0073E6] hover:bg-[#0073E6] hover:text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      {t('Read More', 'ተጨማሪ ያንብቡ')}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button matching Image 4 */}
        {visibleCount < filteredArticles.length && (
          <div className="text-center mt-14 sm:mt-16">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-block bg-[#0073E6] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-sm px-9 py-3 rounded-full shadow-md transition-all duration-200 hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              {t('Load More', 'ተጨማሪ ጫን')}
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EQUIPPING PEOPLE TO REACH THEIR NATIONS (Image 5)              */}
      {/* ========================================================================= */}
      <section className="relative bg-[#F4F9FB] pt-24 sm:pt-32 lg:pt-40 select-none overflow-hidden">
        {/* Floating Circular Portraits (Overlapping light top & royal blue horizon) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center">
            
            {/* 1. Far Left Circle (Large - Silhouetted people crossing pedestrian footbridge at sunset) */}
            <div className="absolute left-[0%] sm:left-[2%] lg:left-[4%] top-[4%] w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-84 lg:h-84 xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80"
                alt="Silhouetted people on bridge"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 2. Small Center-Left Circle (Church dome with cross) */}
            <div className="absolute left-[26%] sm:left-[27%] lg:left-[28%] top-[12%] sm:top-[10%] w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-30 lg:h-30 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1548625361-19597a7e8020?auto=format&fit=crop&w=400&q=80"
                alt="Church dome with cross"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 3. Center Large Circle (Elderly African gentleman with cross necklace) */}
            <div className="absolute left-[36%] sm:left-[37%] lg:left-[38%] top-[0%] w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-68 lg:h-68 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://globaldisciples.org/wp-content/uploads/2022/01/948f93bc3cd5ab872d2ca36717d7b6f7-768x512.jpg"
                alt="Elderly gentleman with cross necklace"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>

            {/* 4. Small Center-Top Circle (Historic stone colonnade arches) */}
            <div className="absolute left-[54%] sm:left-[55%] lg:left-[56%] top-[2%] w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
                alt="Historic stone colonnade"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 5. Center-Right Circle (Woman leading horse across Andean hills) */}
            <div className="absolute left-[48%] sm:left-[49%] lg:left-[50%] bottom-[8%] w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-full overflow-hidden border-3 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Woman leading horse across hills"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 6. Far Right Circle (Large - Farmer in conical hat in green rice terrace) */}
            <div className="absolute right-[0%] sm:right-[1%] lg:right-[3%] top-[2%] w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=85"
                alt="Farmer in lush rice fields"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Solid Blue Horizon Banner */}
        <div className="relative bg-[#0073E6] h-28 sm:h-36 md:h-44 lg:h-52 -mt-28 sm:-mt-36 md:-mt-44 lg:-mt-52 z-10" />

        {/* Lower Left Floating Circle (Sitting in white area below the blue band matching Image 5) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="relative -mt-10 sm:-mt-14 mb-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl ml-6 sm:ml-12">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80"
                alt="Person on green ridge"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Big Centered Headline: Equipping People to Reach Their Nations. */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-20 sm:pb-28">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0c2340] tracking-tight leading-tight">
            {language === 'am' ? (
              'ሰዎች ሀገራቸውን እንዲደርሱ ማስታጠቅ።'
            ) : (
              <>
                Equipping People to Reach <em className="italic font-normal">Their</em> Nations.
              </>
            )}
          </h2>
        </div>

        {/* Bottom Convex Arch Wave Dipping into Footer (matching Image 5) */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mt-1">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-24 block text-[#F4F9FB]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,25 Q720,95 0,25 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Global Video Modal */}
      {activeVideoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/60 p-2 rounded-full transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`${activeVideoUrl}?autoplay=1`}
              title="Global Disciples Story Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesPage;
