import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { FAQ_DATA } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { CTAButton } from '../components/ui/CTAButton';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });

  const categories = [
    'All',
    'About the Alliance',
    'Programs & Training',
    'Partnership & Churches',
    'Giving & Stewardship',
    'Volunteering'
  ];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ)"
        description="Find answers to common questions about Global Disciples Alliance Ethiopia, our ministry approach, church clusters, training, and giving."
      />

      <section className="bg-brand-navy-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Frequently Asked Questions' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              CLARITY & TRANSPARENCY
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Find answers to the most common questions from pastors, donors, intercessors, and supporters regarding our Ethiopian alliance.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword (e.g. cluster, giving, training, business)..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-brand-sand rounded-2xl text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold shadow-card text-sm"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-brand-navy hover:bg-slate-100 border border-brand-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-brand-sand bg-white overflow-hidden shadow-subtle transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base sm:text-lg text-brand-navy hover:text-brand-gold transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-gold' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-brand-muted leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-brand-sand">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
              No matching questions found
            </h3>
            <p className="text-xs text-brand-muted">
              Have a question not listed here? Please contact our team directly.
            </p>
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-sand text-center">
          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
            Still Have Questions?
          </h3>
          <p className="text-sm text-brand-muted max-w-md mx-auto mb-6">
            Our secretariat and church mobilization facilitators are happy to speak with you or visit your church pastoral council.
          </p>
          <CTAButton to="/contact" variant="primary" size="md">
            <span>Contact Secretariat</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </CTAButton>
        </div>
      </div>
    </>
  );
};
