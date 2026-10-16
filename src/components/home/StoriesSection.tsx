import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { STORIES } from '../../data/storiesData';
import { StoryCard } from '../ui/StoryCard';
import { CTAButton } from '../ui/CTAButton';

export const StoriesSection: React.FC = () => {
  const featuredStory = STORIES.find((s) => s.featured) || STORIES[0];
  const secondaryStories = STORIES.filter((s) => s.id !== featuredStory.id).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>STORIES FROM THE FRONTLINE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Testimonies of Transformation Across Ethiopia
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Read how everyday men and women, equipped by their local church clusters, are breaking spiritual ground in remote valleys and bustling marketplaces.
            </p>
          </div>

          <CTAButton to="/stories" variant="outline" size="md" className="self-start md:self-end">
            <span>Read All Stories</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>

        {/* Featured Story Layout (PRD Section 20) */}
        <div className="mb-10">
          <StoryCard story={featuredStory} layout="featured" />
        </div>

        {/* Secondary Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};
