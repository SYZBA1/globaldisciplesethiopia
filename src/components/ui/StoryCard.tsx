import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Story } from '../../types';

interface StoryCardProps {
  story: Story;
  layout?: 'standard' | 'featured' | 'compact';
  className?: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  layout = 'standard',
  className = '',
}) => {
  if (layout === 'featured') {
    return (
      <article className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-card border border-brand-sand transition-all duration-300 hover:shadow-elevated ${className}`}>
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden">
          <img
            src={story.featured_image}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Featured Testimony
          </div>
        </div>
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs font-medium text-brand-muted mb-3">
            <span className="text-brand-gold font-bold uppercase tracking-wider">{story.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {story.location}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">
            <Link to={`/stories/${story.slug}`}>
              {story.title}
            </Link>
          </h3>

          <p className="mt-4 text-brand-muted text-sm sm:text-base leading-relaxed line-clamp-3">
            {story.excerpt}
          </p>

          {story.quote && (
            <div className="editorial-quote mt-5 text-sm font-medium text-slate-700">
              "{story.quote}"
            </div>
          )}

          <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-100">
            <div className="text-xs text-brand-muted flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.reading_time || '4 min read'}</span>
            </div>
            <Link
              to={`/stories/${story.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-hover group-hover:translate-x-1 transition-all"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`group flex flex-col bg-white rounded-xl overflow-hidden shadow-card border border-brand-sand transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={story.featured_image}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-brand-navy text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
          {story.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-brand-muted mb-2.5">
          <MapPin className="w-3.5 h-3.5 text-brand-gold" />
          <span className="truncate">{story.location}</span>
          <span>•</span>
          <span>{story.date}</span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
          <Link to={`/stories/${story.slug}`}>
            {story.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3 flex-grow">
          {story.excerpt}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
          <span className="text-brand-muted">{story.reading_time || '3 min read'}</span>
          <Link
            to={`/stories/${story.slug}`}
            className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-hover group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
