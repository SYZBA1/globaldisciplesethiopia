import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { CTAButton } from '../components/ui/CTAButton';
import { PlaceholderBadge } from '../components/ui/PlaceholderBadge';
import { Calendar, Compass, ArrowRight } from 'lucide-react';

export const AboutStoryPage: React.FC = () => {
  const timeline = [
    {
      year: "1996",
      title: "Global Disciples International Founded",
      description: "Global Disciples was founded in the United States with a vision to equip local churches in developing nations to train disciple-makers to reach unreached people groups.",
      isVerified: true
    },
    {
      year: "2004",
      title: "Initial Vision-Casting in Ethiopia",
      description: "Pastors and mission leaders from across evangelical denominations in Addis Ababa met to explore church-based, self-funding missionary sending models.",
      isVerified: true
    },
    {
      year: "2008",
      title: "First Church Clusters Formed in Southern Ethiopia",
      description: "Clusters of partner congregations in Sidama and Southern regions launched their first cooperative Discipleship-Mission cohorts, sending workers into unreached lowland communities.",
      isVerified: true
    },
    {
      year: "2014",
      title: "Launch of Small Business Development Program",
      description: "Recognizing that frontline workers needed self-sufficiency, micro-enterprise training was integrated to help disciple-makers start viable shops, tailoring, and agricultural trades.",
      isVerified: true
    },
    {
      year: "2020",
      title: "Expansion to 5 Regional Geographic Corridors",
      description: "Cluster church networks expanded into Afar, Somali border regions, Benishangul-Gumuz, Gambella, and Oromia, engaging 34 identified least-reached people groups.",
      isVerified: true
    },
    {
      year: "2025–2026",
      title: "National Alliance Formalization & Board Governance",
      description: "Formal establishment of Global Disciples Alliance Ethiopia as an indigenous national legal entity governed by an Ethiopian Board of Trustees and Secretariat.",
      isVerified: false,
      isPendingPlaceholder: true
    }
  ];

  return (
    <>
      <SEO
        title="Our Story & History"
        description="The history and journey of Global Disciples Alliance Ethiopia and our multiplication of church clusters."
      />

      {/* Header */}
      <section className="bg-brand-navy-dark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'About Us', href: '/about' }, { label: 'Our Story & History' }]}
            className="text-slate-400 mb-6"
          />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">
              HISTORY & TIMELINE
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Our Journey: God's Faithfulness in Ethiopia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From an initial conviction among local pastors to a nationwide alliance of multiplying church clusters.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section (PRD Section 27) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative border-l-2 border-brand-sand pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-gold shadow-sm flex items-center justify-center group-hover:scale-125 transition-transform" />

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sand shadow-subtle hover:shadow-card transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-display text-2xl sm:text-3xl font-black text-brand-navy">
                    {item.year}
                  </span>
                  {item.isPendingPlaceholder ? (
                    <PlaceholderBadge label="Pending Final Formalization Date" />
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-brand-gold font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      Historical Milestone
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-brand-cream border border-brand-sand text-center">
          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
            Be Part of the Next Chapter
          </h3>
          <p className="text-sm text-brand-muted max-w-lg mx-auto mb-6">
            Join hundreds of Ethiopian churches working together to see least-reached people groups reached with the love of Christ.
          </p>
          <div className="flex justify-center gap-4">
            <CTAButton to="/get-involved/partner" variant="primary" size="md">
              <span>Partner With Us</span>
            </CTAButton>
            <CTAButton to="/about/vision-mission" variant="outline" size="md">
              <span>Vision & Mission</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
};
