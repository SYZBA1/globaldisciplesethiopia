import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { STORIES } from '../data/storiesData';
import { StoryCard } from '../components/ui/StoryCard';
import { CTAButton } from '../components/ui/CTAButton';
import { MapPin, Calendar, Clock, Share2, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const story = STORIES.find((s) => s.slug === slug || s.id === slug);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const relatedStories = STORIES.filter((s) => s.id !== story.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Story URL copied to clipboard!');
    }
  };

  return (
    <>
      <SEO
        title={story.title}
        description={story.excerpt}
        ogImage={story.featured_image}
      />

      {/* Header */}
      <section className="bg-brand-navy-dark text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Stories', href: '/stories' }, { label: story.title }]}
            className="text-slate-400 mb-6"
          />

          <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
            <span>{story.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5" />
              {story.location}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-4">
              <span>By {story.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                {story.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                {story.reading_time || '4 min read'}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Story</span>
            </button>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-elevated mb-12 aspect-[16/9] bg-brand-navy">
          <img
            src={story.featured_image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pull Quote */}
        {story.quote && (
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-brand-cream border-l-4 border-brand-gold text-lg sm:text-xl font-display font-bold text-brand-navy italic leading-relaxed">
            "{story.quote}"
          </div>
        )}

        {/* Body Paragraphs */}
        <div className="prose prose-lg max-w-none text-brand-navy leading-relaxed space-y-6 text-base sm:text-lg">
          {story.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-slate-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Gallery if present */}
        {story.gallery && story.gallery.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
              Field Photos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {story.gallery.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm">
                  <img src={img} alt="Field Gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-brand-navy text-white text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
            Support Frontline Workers Like Those in This Story
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
            Your gift provides seed capital for small business sustainability and discipleship materials for partner churches.
          </p>
          <div className="flex justify-center gap-4">
            <CTAButton to="/give" variant="primary" size="md">
              <Heart className="w-4 h-4 mr-1 fill-white" />
              <span>Give to Frontline Ministry</span>
            </CTAButton>
            <CTAButton to="/stories" variant="outline-white" size="md">
              <span>Back to Stories</span>
            </CTAButton>
          </div>
        </div>

        {/* Related Stories */}
        <div className="mt-16 pt-12 border-t border-brand-sand">
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-6">
            More Stories from Ethiopia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedStories.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
