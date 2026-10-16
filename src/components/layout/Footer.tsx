import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { ShieldCheck, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eNewsletter: true,
    newsletterMail: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background African Agricultural Field Photograph with Dark Gradient matching Image 3 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=2000&q=85"
          alt="Ethiopian farmer in agricultural landscape"
          className="w-full h-full object-cover opacity-25 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Centered Logo matching Image 3 */}
        <div className="flex justify-center mb-14">
          <Logo theme="dark" showSubtitle={true} />
        </div>

        {/* 3 Columns Layout matching Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Column 1: Get Involved & Ways to Give (md:col-span-3) */}
          <div className="md:col-span-3 space-y-8">
            {/* Get Involved */}
            <div>
              <span className="text-xs font-bold text-[#1EA5FC] tracking-wide block mb-3 font-sans">
                Get Involved
              </span>
              <div className="space-y-1 font-serif text-2xl font-bold text-white">
                <div>
                  <Link to="/get-involved/pray" className="hover:text-[#1EA5FC] transition-colors block">
                    Pray
                  </Link>
                </div>
                <div>
                  <Link to="/give" className="hover:text-[#1EA5FC] transition-colors block">
                    Give
                  </Link>
                </div>
                <div>
                  <Link to="/events" className="hover:text-[#1EA5FC] transition-colors block">
                    Events
                  </Link>
                </div>
              </div>
            </div>

            {/* Ways to Give */}
            <div>
              <span className="text-xs font-bold text-[#1EA5FC] tracking-wide block mb-3 font-sans">
                Ways to Give
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/give" className="hover:text-[#1EA5FC] transition-colors">
                    Sponsor an Event
                  </Link>
                </li>
                <li>
                  <Link to="/give#bank-details" className="hover:text-[#1EA5FC] transition-colors">
                    Planned Giving & Bank Transfer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons matching Image 3 */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/GlobalDisciplesEthiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1EA5FC]/20 text-[#1EA5FC] flex items-center justify-center hover:bg-[#1EA5FC] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1EA5FC]/20 text-[#1EA5FC] flex items-center justify-center hover:bg-[#1EA5FC] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1EA5FC]/20 text-[#1EA5FC] flex items-center justify-center hover:bg-[#1EA5FC] hover:text-white transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1EA5FC]/20 text-[#1EA5FC] flex items-center justify-center hover:bg-[#1EA5FC] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Get to Know Us, Connect, Participate (md:col-span-4) */}
          <div className="md:col-span-4 space-y-6">
            {/* Get to Know Us */}
            <div>
              <span className="text-xs font-bold text-[#1EA5FC] tracking-wide block mb-2 font-sans">
                Get to Know Us
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/about" className="hover:text-[#1EA5FC] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/give#transparency" className="hover:text-[#1EA5FC] transition-colors">
                    Financials
                  </Link>
                </li>
                <li>
                  <Link to="/about/story" className="hover:text-[#1EA5FC] transition-colors">
                    Our Origin
                  </Link>
                </li>
                <li>
                  <Link to="/stories" className="hover:text-[#1EA5FC] transition-colors">
                    Blog & Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <span className="text-xs font-bold text-[#1EA5FC] tracking-wide block mb-2 font-sans">
                Connect
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/contact" className="hover:text-[#1EA5FC] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#1EA5FC] transition-colors">
                    Request a Speaker
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#1EA5FC] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Participate */}
            <div>
              <span className="text-xs font-bold text-[#1EA5FC] tracking-wide block mb-2 font-sans">
                Participate
              </span>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-200">
                <li>
                  <Link to="/resources" className="hover:text-[#1EA5FC] transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/about/partners" className="hover:text-[#1EA5FC] transition-colors">
                    Church Resources
                  </Link>
                </li>
                <li>
                  <Link to="/get-involved/volunteer" className="hover:text-[#1EA5FC] transition-colors">
                    Join Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Sign up for our Newsletter Card matching Image 3 (md:col-span-5) */}
          <div className="md:col-span-5">
            <div className="bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-5">
                Sign up for our Newsletter
              </h3>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Thank you for subscribing to Global Disciples frontline updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      First Name<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1EA5FC]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Last Name<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1EA5FC]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1EA5FC]"
                    />
                  </div>

                  {/* Checkboxes matching Image 3 */}
                  <div className="space-y-1.5 pt-1 text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.eNewsletter}
                        onChange={(e) => setFormData({ ...formData, eNewsletter: e.target.checked })}
                        className="rounded border-slate-300 text-[#0070E0] focus:ring-[#0070E0]"
                      />
                      <span>E-Newsletter</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletterMail}
                        onChange={(e) => setFormData({ ...formData, newsletterMail: e.target.checked })}
                        className="rounded border-slate-300 text-[#0070E0] focus:ring-[#0070E0]"
                      />
                      <span>Newsletter Mail</span>
                    </label>
                  </div>

                  {/* reCAPTCHA Box Simulation */}
                  <div className="p-2.5 rounded bg-white text-slate-700 flex items-center justify-between text-[11px] border border-slate-200 mt-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <span>protected by <strong>reCAPTCHA</strong></span>
                    </div>
                    <span className="text-slate-400">Privacy - Terms</span>
                  </div>

                  {/* Blue Submit Button matching Image 3 */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2 rounded bg-[#0070E0] hover:bg-[#0055B3] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Terms */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Global Disciples Alliance Ethiopia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
