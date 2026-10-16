import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { EVENTS } from '../data/eventsData';
import { EventCard } from '../components/ui/EventCard';
import { Calendar, Filter } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');

  const filteredEvents = EVENTS.filter((e) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return e.status === 'Completed';
    return e.status === 'Upcoming' || e.status === 'Registration Open';
  });

  return (
    <>
      <SEO
        title="Events & Summits"
        description="Conferences, training retreats, prayer summits, and leadership gatherings organized by Global Disciples Alliance Ethiopia."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Events & Summits' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              GATHERINGS & SUMMITS
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Equipping Conferences & Summits
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect with pastors, directors, and frontline leaders at national vision summits, master trainer cohorts, and intercessory prayer gatherings.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Bar */}
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-brand-sand">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          <div className="flex items-center gap-2">
            {(['All', 'Upcoming', 'Completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === tab
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-brand-navy hover:bg-slate-100 border border-brand-sand'
                }`}
              >
                {tab} Events
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};
