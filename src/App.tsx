import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AboutStoryPage } from './pages/AboutStoryPage';
import { AboutVisionMissionPage } from './pages/AboutVisionMissionPage';
import { AboutLeadershipPage } from './pages/AboutLeadershipPage';
import { AboutPartnersPage } from './pages/AboutPartnersPage';
import { WhyLeastReachedPage } from './pages/WhyLeastReachedPage';
import { EthiopiaContextPage } from './pages/EthiopiaContextPage';
import { ApproachPage } from './pages/ApproachPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { GivePage } from './pages/GivePage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        {/* Homepage with 12 PRD sections */}
        <Route path="/" element={<HomePage />} />

        {/* About Section */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/story" element={<AboutStoryPage />} />
        <Route path="/about/vision-mission" element={<AboutVisionMissionPage />} />
        <Route path="/about/leadership" element={<AboutLeadershipPage />} />
        <Route path="/about/partners" element={<AboutPartnersPage />} />

        {/* Why Least-Reached */}
        <Route path="/why-least-reached/one-third" element={<WhyLeastReachedPage />} />
        <Route path="/why/least-reached" element={<WhyLeastReachedPage />} />
        <Route path="/why/ethiopia-context" element={<EthiopiaContextPage />} />

        {/* Approach */}
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/why-least-reached/approach" element={<ApproachPage />} />

        {/* Programs */}
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />

        {/* Stories */}
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:slug" element={<StoryDetailPage />} />

        {/* Events */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />

        {/* Resources */}
        <Route path="/resources" element={<ResourcesPage />} />

        {/* Get Involved */}
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/get-involved/:action" element={<GetInvolvedPage />} />

        {/* Give */}
        <Route path="/give" element={<GivePage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* FAQ */}
        <Route path="/faq" element={<FAQPage />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
