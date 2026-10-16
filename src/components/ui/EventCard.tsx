import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { EventItem } from '../../types';

interface EventCardProps {
  event: EventItem;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
  const getStatusBadge = (status: EventItem['status']) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Upcoming':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Completed':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className={`group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-card border border-brand-sand transition-all duration-300 hover:shadow-elevated ${className}`}>
      <div className="md:w-5/12 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-900">
        <img
          src={event.featured_image}
          alt={event.title}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${getStatusBadge(event.status)}`}>
            {event.status}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow md:w-7/12">
        <div>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-brand-muted mb-3">
            <span className="flex items-center gap-1.5 font-semibold text-brand-gold">
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">
            <Link to={`/events/${event.slug}`}>
              {event.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-2">
            {event.description}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
            <span className="truncate">{event.location} • {event.address}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 bg-brand-stone rounded text-brand-navy">
            {event.category}
          </span>
          <Link
            to={`/events/${event.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
          >
            <span>Event Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
