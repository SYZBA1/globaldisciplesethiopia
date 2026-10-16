import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { Sparkles, Church, HandHeart, CheckCircle, ArrowRight, Heart } from 'lucide-react';

export const GetInvolvedPage: React.FC = () => {
  const location = useLocation();

  // Determine active tab based on route if navigated via /get-involved/pray, etc.
  const getInitialTab = () => {
    if (location.pathname.includes('/pray')) return 'pray';
    if (location.pathname.includes('/partner')) return 'partner';
    if (location.pathname.includes('/volunteer') || location.pathname.includes('/serve')) return 'volunteer';
    return 'pray';
  };

  const [activeTab, setActiveTab] = useState<'pray' | 'partner' | 'volunteer'>(getInitialTab);

  // Form state
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    churchName: '',
    city: 'Addis Ababa',
    skills: 'Prayer Intercessor',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      if (activeTab === 'pray') {
        setSubmittedMessage(`Thank you, ${formData.name}! You are registered on the Ethiopian Frontline Prayer Network. The monthly prayer calendar has been sent to ${formData.email}.`);
      } else if (activeTab === 'partner') {
        setSubmittedMessage(`Thank you, Pastor ${formData.name}! Our church mobilization team has received your cluster request for ${formData.churchName} and will contact you within 48 hours.`);
      } else {
        setSubmittedMessage(`Thank you, ${formData.name}! Your volunteer application has been received. Our secretariat will connect with you regarding upcoming field projects.`);
      }
    }
  };

  return (
    <>
      <SEO
        title="Get Involved — Pray, Partner, Serve"
        description="Join what God is doing through Global Disciples Alliance Ethiopia: become an intercessor, partner your local church, or volunteer your professional skills."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Get Involved' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              PARTICIPATE IN THE MISSION
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Step Into the Harvest in Ethiopia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every disciple of Jesus has a role in reaching the unreached. Choose how you want to stand with frontline Ethiopian workers.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 3 Main Action Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => { setActiveTab('pray'); setSubmittedMessage(null); }}
            className={`p-6 rounded-2xl text-left border transition-all ${
              activeTab === 'pray'
                ? 'bg-brand-navy text-white border-brand-navy shadow-elevated scale-[1.02]'
                : 'bg-white text-brand-navy border-brand-sand hover:bg-slate-50'
            }`}
          >
            <Sparkles className={`w-6 h-6 mb-3 ${activeTab === 'pray' ? 'text-brand-gold' : 'text-slate-400'}`} />
            <h3 className="font-display font-extrabold text-lg mb-1">01. PRAY WITH US</h3>
            <p className={`text-xs ${activeTab === 'pray' ? 'text-slate-300' : 'text-brand-muted'}`}>
              Join our nationwide intercession network for least-reached peoples.
            </p>
          </button>

          <button
            onClick={() => { setActiveTab('partner'); setSubmittedMessage(null); }}
            className={`p-6 rounded-2xl text-left border transition-all ${
              activeTab === 'partner'
                ? 'bg-brand-navy text-white border-brand-navy shadow-elevated scale-[1.02]'
                : 'bg-white text-brand-navy border-brand-sand hover:bg-slate-50'
            }`}
          >
            <Church className={`w-6 h-6 mb-3 ${activeTab === 'partner' ? 'text-brand-gold' : 'text-slate-400'}`} />
            <h3 className="font-display font-extrabold text-lg mb-1">02. PARTNER AS A CHURCH</h3>
            <p className={`text-xs ${activeTab === 'partner' ? 'text-slate-300' : 'text-brand-muted'}`}>
              Cluster your congregation to sponsor and send trained disciple-makers.
            </p>
          </button>

          <button
            onClick={() => { setActiveTab('volunteer'); setSubmittedMessage(null); }}
            className={`p-6 rounded-2xl text-left border transition-all ${
              activeTab === 'volunteer'
                ? 'bg-brand-navy text-white border-brand-navy shadow-elevated scale-[1.02]'
                : 'bg-white text-brand-navy border-brand-sand hover:bg-slate-50'
            }`}
          >
            <HandHeart className={`w-6 h-6 mb-3 ${activeTab === 'volunteer' ? 'text-brand-gold' : 'text-slate-400'}`} />
            <h3 className="font-display font-extrabold text-lg mb-1">03. SERVE & VOLUNTEER</h3>
            <p className={`text-xs ${activeTab === 'volunteer' ? 'text-slate-300' : 'text-brand-muted'}`}>
              Offer your professional, business, medical, or translation skills.
            </p>
          </button>
        </div>

        {/* Tab Content & Action Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Description of selected mode */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'pray' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  SPIRITUAL WARFARE ON THE FRONTLINE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Prayer is the Primary Missionary Work
                </h2>
                <p className="text-base text-brand-muted leading-relaxed">
                  Before a single worker steps into an unreached borderland or pastoralist clan, the ground must be prepared in intercessory prayer. Our Prayer Network unites over 2,000 believers across Ethiopia and the diaspora who pray systematically for identified least-reached people groups.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Monthly digital prayer calendar with verified cultural intelligence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Emergency prayer alerts when workers encounter security or health trials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Quarterly online and in-person prayer summits</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'partner' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  LOCAL CONGREGATIONAL COOPERATION
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Form a Cluster with Neighboring Churches
                </h2>
                <p className="text-base text-brand-muted leading-relaxed">
                  Is your local congregation longing to obey the Great Commission beyond your own walls? Global Disciples Alliance Ethiopia assists pastoral teams in establishing cooperative clusters with 2 to 6 neighboring churches.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">No change to your denomination or doctrinal convictions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Free access to accredited discipleship & business training curriculum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Ongoing coaching for your local program director</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  VOCATIONAL STEWARDSHIP
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Use Your Profession for Kingdom Advance
                </h2>
                <p className="text-base text-brand-muted leading-relaxed">
                  Frontline church planting is holistic. We invite Ethiopian professionals, business owners, educators, tech specialists, and health workers to volunteer their expertise to strengthen workers and their community enterprises.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Mentor disciple-makers launching small businesses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Translate curriculum into Ethiopian regional languages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ethiopia-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-navy">Provide IT, photography, or video documentary skills</span>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-brand-cream border border-brand-sand">
              <span className="font-bold text-sm text-brand-navy block mb-1">
                Also Interested in Financial Support?
              </span>
              <p className="text-xs text-brand-muted mb-3">
                You can support worker seed capital directly through Ethiopian bank accounts or Telebirr.
              </p>
              <CTAButton to="/give" variant="primary" size="sm">
                <Heart className="w-3.5 h-3.5 fill-white mr-1" />
                <span>Go to Giving Page</span>
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Interactive Commitment Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-sand shadow-card">
              <div className="mb-6 pb-4 border-b border-brand-sand">
                <h3 className="font-display text-xl font-bold text-brand-navy">
                  {activeTab === 'pray' && 'Register for Frontline Prayer Updates'}
                  {activeTab === 'partner' && 'Request Church Cluster Consultation'}
                  {activeTab === 'volunteer' && 'Submit Volunteer Application'}
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Fill in your details below. We value your privacy and never share your contact details.
                </p>
              </div>

              {submittedMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-950">
                    Submission Received
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    {submittedMessage}
                  </p>
                  <button
                    onClick={() => setSubmittedMessage(null)}
                    className="text-xs font-bold text-emerald-900 underline mt-2"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Martha Haile"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="martha@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>
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
                  </div>

                  {activeTab === 'partner' && (
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Church or Ministry Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.churchName}
                        onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                        placeholder="e.g. Evangelical Church of Hawassa"
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>
                  )}

                  {activeTab === 'volunteer' && (
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                        Area of Expertise / Skills
                      </label>
                      <select
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                      >
                        <option>Business Mentoring / Accounting</option>
                        <option>Language Translation (Amharic, Afaan Oromo, Somali, Afar, etc.)</option>
                        <option>Media, Photography & Video</option>
                        <option>Medical & Community Healthcare</option>
                        <option>IT, Web & Database Administration</option>
                        <option>Prayer Intercession & Mobilization</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase mb-1">
                      Notes or Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share how God is moving in your heart regarding this ministry..."
                      className="w-full px-4 py-2 rounded-lg border border-brand-sand text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full font-bold shadow-accent"
                  >
                    <span>Submit & Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </CTAButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
