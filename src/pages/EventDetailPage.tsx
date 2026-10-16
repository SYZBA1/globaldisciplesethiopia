import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { EVENTS } from '../data/eventsData';
import { Calendar, Clock, MapPin, Mail, Users, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { CTAButton } from '../components/ui/CTAButton';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = EVENTS.find((e) => e.slug === slug || e.id === slug);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    churchOrOrganization: '',
    role: 'Pastor / Church Leader',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title={`${event.title} — Event Registration`}
        description={event.description}
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Events', href: '/events' }, { label: event.title }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-brand-navy mb-4">
              {event.status}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 font-semibold text-brand-gold">
                <Calendar className="w-4 h-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Event Overview & Image */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-card aspect-[16/10] bg-slate-900">
              <img
                src={event.featured_image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                About This Gathering
              </h2>
              <p className="text-base text-brand-muted leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="p-6 rounded-2xl bg-brand-cream border border-brand-sand space-y-3">
                <h3 className="font-display font-bold text-sm text-brand-navy">
                  Logistical Details:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-navy">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Venue & Address:</span>
                    <strong className="block">{event.address}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Capacity / Attendance:</span>
                    <strong className="block">{event.capacity || 'Limited Capacity'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Inquiries Email:</span>
                    <strong className="block">{event.contactEmail || 'events@globaldisciplesethiopia.org'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Language:</span>
                    <strong className="block">Amharic & English (Translation Available)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration Card */}
          <div className="lg:col-span-5" id="register">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-sand shadow-elevated sticky top-24">
              <div className="mb-6 pb-4 border-b border-brand-sand">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                  SECURE YOUR SEAT
                </span>
                <h3 className="font-display text-xl font-bold text-brand-navy">
                  Delegate Registration
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Complete this form to reserve your delegate badge and conference materials.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    Registration Confirmed!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A confirmation email with logistics, badge retrieval instructions, and venue maps has been sent to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline mt-2"
                  >
                    Register another delegate
                  </button>
                </div>
              ) : event.status === 'Completed' ? (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <p className="text-sm font-semibold text-slate-600">
                    This event has concluded. Check our resources page for recorded video sessions and reports.
                  </p>
                  <CTAButton to="/resources" variant="outline" size="sm" className="mt-4">
                    <span>View Conference Resources</span>
                  </CTAButton>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Pastor Yohannes Bekele"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Phone Number (Ethiopia)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+251 91 100 0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Church or Fellowship
                    </label>
                    <input
                      type="text"
                      value={formData.churchOrOrganization}
                      onChange={(e) => setFormData({ ...formData, churchOrOrganization: e.target.value })}
                      placeholder="e.g. Addis Ababa Baptist Cluster"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Ministry Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    >
                      <option>Pastor / Senior Minister</option>
                      <option>Cluster Program Director</option>
                      <option>Frontline Disciple-Maker / Planter</option>
                      <option>Business Professional / Mentor</option>
                      <option>Intercessor / Prayer Coordinator</option>
                      <option>Church Youth Leader</option>
                    </select>
                  </div>

                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full font-bold shadow-accent mt-2"
                  >
                    <span>Submit Registration</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </CTAButton>

                  <p className="text-[11px] text-slate-400 text-center">
                    Registration is free for accredited partner church cluster leaders.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
