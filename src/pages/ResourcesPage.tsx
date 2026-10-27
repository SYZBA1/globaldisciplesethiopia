import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RESOURCES } from '../data/resourcesData';
import { ResourceCard } from '../components/ui/ResourceCard';
import { Search, Filter, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const types = [
    { key: 'All', labelEn: 'All', labelAm: 'ሁሉም' },
    { key: 'Report', labelEn: 'Report', labelAm: 'ሪፖርት' },
    { key: 'Guide', labelEn: 'Guide', labelAm: 'መመሪያ' },
    { key: 'Download', labelEn: 'Download', labelAm: 'ማውረጃ' },
    { key: 'Training Material', labelEn: 'Training Material', labelAm: 'የስልጠና ማቴሪያል' },
    { key: 'Video', labelEn: 'Video', labelAm: 'ቪዲዮ' },
    { key: 'Article', labelEn: 'Article', labelAm: 'ጽሑፍ' },
  ];

  const filteredResources = RESOURCES.filter((res) => {
    const matchesType = selectedType === 'All' || res.type === selectedType;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <>
      <SEO
        title={t('Resource Library & Downloads | Global Disciples', 'የመረጃ እና የማውረጃ ቤተ-መጽሐፍት | ግሎባል ዲሳይፕልስ')}
        description={t(
          'Free training guides, ministry reports, prayer calendars, and missiological papers from Global Disciples Alliance Ethiopia.',
          'ነፃ የስልጠና መመሪያዎች፣ የአገልግሎት ሪፖርቶች፣ የጸሎት የቀን መቁጠሪያዎች እና የጽሑፍ ማቴሪያሎች ከግሎባል ዲሳይፕልስ ኢትዮጵያ።'
        )}
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: t('Resources', 'የመረጃ ማዕከል') }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              {t('PUBLICATIONS & TOOLS', 'ህትመቶች እና መሣሪያዎች')}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              {t('Resource Library & Downloads', 'የመረጃ እና የማውረጃ ቤተ-መጽሐፍት')}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t(
                'Equip yourself and your congregation with field-tested guides, prayer calendars, annual financial reports, and discipleship curriculum materials.',
                'እራስዎን እና ማህበርዎን በተግባር በተፈተኑ መመሪያዎች፣ የጸሎት የቀን መቁጠሪያዎች፣ ዓመታዊ የፋይናንስ ሪፖርቶች እና የደቀመዝሙርነት ስርዓተ-ትምህርቶች ያስታጥቁ።'
              )}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-brand-sand">
          {/* Type Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {types.map((type) => (
              <button
                key={type.key}
                onClick={() => setSelectedType(type.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedType === type.key
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-brand-navy hover:bg-slate-100 border border-brand-sand'
                }`}
              >
                {t(type.labelEn, type.labelAm)}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search resources, topics...', 'መረጃዎችን፣ ርዕሶችን ይፈልጉ...')}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-brand-sand rounded-full text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold shadow-subtle"
            />
          </div>
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-brand-sand">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
              {t('No resources found', 'ምንም መረጃ አልተገኘም')}
            </h3>
            <p className="text-xs text-brand-muted">
              {t('Try adjusting your category selection or search keywords.', 'የምድብ ምርጫዎን ወይም የፍለጋ ቃላትን ይቀይሩ።')}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
