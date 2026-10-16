import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SITE_CONFIG } from '../data/siteData';
import { CTAButton } from '../components/ui/CTAButton';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: 'General Inquiry',
    message: '',
    consent: false,
    honeypot: '', // Spam protection
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please agree to our privacy policy to submit.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Global Disciples Alliance Ethiopia secretariat, regional offices, and church mobilization team in Addis Ababa."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Contact Us' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              WE'D LOVE TO CONNECT
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Get in Touch with Our Team
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about church clustering, training programs, giving, or partnership in Ethiopia? Reach out to our secretariat.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-sand shadow-card">
              <div className="mb-6 pb-4 border-b border-brand-sand">
                <h2 className="font-display text-2xl font-bold text-brand-navy">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs text-brand-muted mt-1">
                  Our communications team typically responds within 1 business day.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs mb-6">
                  {errorMessage}
                </div>
              )}

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-emerald-950">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>"{formData.subject}"</em> has been received by our Secretariat. A team member will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        subject: 'General Inquiry',
                        message: '',
                        consent: false,
                        honeypot: '',
                      });
                    }}
                    className="text-xs font-bold text-emerald-900 underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam prevention (PRD Section 35) */}
                  <input
                    type="text"
                    name="website_url"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Abebe Kebede"
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
                        placeholder="abebe@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Phone (Ethiopia)
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
                        Church or Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Local Church or Denomination"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    >
                      <option>General Inquiry</option>
                      <option>Church Cluster Partnership</option>
                      <option>Discipleship Training Information</option>
                      <option>Small Business Program Inquiries</option>
                      <option>Giving, Receipts & Financials</option>
                      <option>Intercessory Prayer Network</option>
                      <option>Media, Press & Stories</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 text-brand-gold rounded border-slate-300 focus:ring-brand-gold"
                    />
                    <label htmlFor="consent-checkbox" className="text-xs text-brand-muted leading-relaxed">
                      I agree to the processing of my contact information to respond to this message in accordance with the Global Disciples Alliance Ethiopia privacy policy.
                    </label>
                  </div>

                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full font-bold shadow-accent mt-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-1.5" />
                  </CTAButton>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Location, Map, and Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info Card */}
            <div className="p-8 rounded-3xl bg-brand-cream border border-brand-sand space-y-6">
              <h3 className="font-display text-xl font-bold text-brand-navy">
                National Secretariat Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-navy">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Physical Address:</strong>
                    <span className="text-brand-muted">{SITE_CONFIG.address.street}</span>
                    <span className="text-brand-muted block">{SITE_CONFIG.address.city}, Ethiopia</span>
                    <PlaceholderBadge label="Pending Exact Suite/Bole Building ID" className="mt-1" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Email Addresses:</strong>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-brand-gold hover:underline block">
                      {SITE_CONFIG.contact.email}
                    </a>
                    <a href={`mailto:${SITE_CONFIG.contact.partnershipsEmail}`} className="text-brand-muted hover:underline block">
                      {SITE_CONFIG.contact.partnershipsEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Phone Numbers:</strong>
                    <span className="text-brand-muted block">Office: {SITE_CONFIG.contact.phone}</span>
                    <span className="text-brand-muted block">Mobile: {SITE_CONFIG.contact.mobile}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy">Office Hours:</strong>
                    <span className="text-brand-muted block">{SITE_CONFIG.address.officeHours}</span>
                    <span className="text-slate-400 text-xs block">Closed on Ethiopian Public Holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder (PRD Section 35) */}
            <div className="rounded-3xl overflow-hidden border border-brand-sand shadow-subtle bg-slate-900 relative aspect-[16/10]">
              {/* Map Graphic Simulation */}
              <iframe
                title="Office Location Map Addis Ababa"
                className="w-full h-full border-0 grayscale opacity-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.1154564855!2d38.6946083!3d9.0107934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-navy shadow-sm">
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
