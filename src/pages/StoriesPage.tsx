import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { STORIES } from '../data/storiesData';
import { StoryCard } from '../components/ui/StoryCard';
import { Search, Filter, BookOpen } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Testimony', 'Discipleship', 'Leadership', 'Church', 'Community'];

  const filteredStories = STORIES.filter((story) => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Field Stories & Testimonies"
        description="Inspiring testimonies and stories of transformation from Ethiopian church planters and disciple-makers in least-reached communities."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Stories & Testimonies' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              FRONTLINE DISPATCHES
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Stories from the Ethiopian Harvest
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Real accounts of God at work through ordinary disciples, church clusters, and tentmaking businesses across Ethiopia's mountains and lowlands.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-brand-sand">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-brand-navy hover:bg-slate-100 border border-brand-sand'
                }`}
              >
                {cat}
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
              placeholder="Search stories or location..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-brand-sand rounded-full text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold shadow-subtle"
            />
          </div>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-brand-sand">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
              No stories found
            </h3>
            <p className="text-xs text-brand-muted">
              Try adjusting your category selection or search keywords.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
