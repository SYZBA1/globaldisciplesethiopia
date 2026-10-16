import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { CTAButton } from '../components/ui/CTAButton';
import { Home, Search, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you requested could not be found. Explore our sitemap to return to Global Disciples Alliance Ethiopia."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg text-center space-y-6">
          <span className="font-display font-black text-6xl sm:text-8xl text-brand-gold block">
            404
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <CTAButton to="/" variant="primary" size="md">
              <Home className="w-4 h-4 mr-1.5" />
              <span>Return to Homepage</span>
            </CTAButton>
            <CTAButton to="/about" variant="outline" size="md">
              <span>About the Alliance</span>
            </CTAButton>
          </div>

          <div className="pt-8 border-t border-brand-sand text-xs text-slate-500">
            <span>Popular pages: </span>
            <Link to="/approach" className="text-brand-gold hover:underline mx-1">Our Approach</Link> •
            <Link to="/programs" className="text-brand-gold hover:underline mx-1">Programs</Link> •
            <Link to="/stories" className="text-brand-gold hover:underline mx-1">Stories</Link> •
            <Link to="/give" className="text-brand-gold hover:underline mx-1">Give</Link>
          </div>
        </div>
      </div>
    </>
  );
};
