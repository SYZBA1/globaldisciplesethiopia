import React, { useState } from 'react';
import { Download, FileText, Video, BookOpen, Check, ExternalLink } from 'lucide-react';
import { ResourceItem } from '../../types';

interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className = '' }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleAction = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const getTypeIcon = (type: ResourceItem['type']) => {
    switch (type) {
      case 'Video':
        return <Video className="w-5 h-5 text-red-500" />;
      case 'Report':
      case 'PDF':
      case 'Article':
        return <FileText className="w-5 h-5 text-brand-navy" />;
      default:
        return <BookOpen className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card border border-brand-sand transition-all duration-300 hover:shadow-elevated ${className}`}>
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 shadow-sm">
          {getTypeIcon(resource.type)}
          <span>{resource.type}</span>
        </div>
        {resource.fileSize && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-medium px-2 py-0.5 rounded shadow-sm">
            {resource.fileSize}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
          {resource.category}
        </div>

        <h3 className="font-display text-lg font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
          {resource.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3 flex-grow">
          {resource.description}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            <span>By {resource.author}</span>
          </div>

          <button
            onClick={handleAction}
            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded transition-all ${
              downloaded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-stone hover:bg-brand-navy hover:text-white text-brand-navy'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Downloaded</span>
              </>
            ) : resource.type === 'Video' ? (
              <>
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Watch Video</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
