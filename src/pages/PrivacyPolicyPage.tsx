import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';


export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data governance practices of Global Disciples Alliance Ethiopia."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Privacy Policy' }]}
            className="text-slate-400 mb-6"
          />
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Effective Date: October 2026 • Global Disciples Alliance Ethiopia
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none text-brand-navy space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              1. Our Commitment to Your Privacy
            </h2>
            <p className="text-brand-muted">
              Global Disciples Alliance Ethiopia ("GDA Ethiopia", "we", "us", or "our") respects the privacy of our website visitors, donors, church partners, and prayer network subscribers. This Privacy Policy explains how we collect, use, and safeguard personal information collected through our public website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              2. Information We Collect
            </h2>
            <p className="text-brand-muted">
              We only collect information voluntarily submitted through our online forms, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-muted">
              <li>Contact details (name, email address, telephone number, city, and church affiliation).</li>
              <li>Inquiry subjects and feedback submitted via our Contact and Partnership forms.</li>
              <li>Event registration responses for leadership summits and training cohorts.</li>
              <li>Subscription preferences for frontline field reports and prayer digests.</li>
            </ul>
            <p className="text-brand-muted">
              We do not store bank passwords, PINs, or financial secrets on our servers. All donations made via Telebirr or direct bank transfer occur inside secure banking apps or counter deposits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              3. Protection of Frontline Worker & Believer Identity
            </h2>
            <p className="text-brand-muted">
              In accordance with Section 49 & 50 of our ministry governance principles, certain field stories from sensitive regional borders feature pseudonyms or generalized district locations to protect the safety of newly planted fellowships and frontline disciple-makers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              4. How We Use Your Information
            </h2>
            <p className="text-brand-muted">
              Information collected is strictly used to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-brand-muted">
              <li>Respond directly to your inquiries and cluster partnership requests.</li>
              <li>Send email confirmations for event registrations and resource downloads.</li>
              <li>Distribute monthly prayer guides to registered intercessors.</li>
              <li>Provide contribution acknowledgment and official receipting.</li>
            </ul>
            <p className="text-brand-muted">
              We never sell, rent, or trade your personal information to third parties or marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
              5. Contact Us Regarding Privacy
            </h2>
            <p className="text-brand-muted">
              If you have any questions or would like to update your communication preferences, please email us at <a href="mailto:info@globaldisciplesethiopia.org" className="text-brand-gold font-bold underline">info@globaldisciplesethiopia.org</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
