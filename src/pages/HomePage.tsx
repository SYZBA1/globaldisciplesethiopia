import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { InvestModelSection } from '../components/home/InvestModelSection';
import { BigVideoSection } from '../components/home/BigVideoSection';
import { ImpactSection } from '../components/home/ImpactSection';
import { TransformationSection } from '../components/home/TransformationSection';
import { OurApproachCalloutSection } from '../components/home/OurApproachCalloutSection';
import { VideoModal } from '../components/ui/VideoModal';

export const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Global Disciples Mission Video');

  const handleOpenVideo = (title?: string) => {
    if (title) setModalTitle(title);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Equipping People to Reach Their Nations"
        description="A third of our world has not yet heard the Good News of Jesus. Global Disciples Alliance Ethiopia equips local churches to train and send disciple-makers to least-reached communities."
      />

      {/* 1. Hero: "A Third of Our World has not yet heard the Good News of Jesus." + Blue circle with laughing woman */}
      <HeroSection onPlayVideo={() => handleOpenVideo('A Third of Our World — Global Disciples Mission')} />

      {/* 2. "A Season of Giving" banner + 2 Video Model Cards */}
      <InvestModelSection onPlayVideo={handleOpenVideo} />

      {/* 3. "30 Years of Mission" Cinematic Centered Video Feature */}
      <BigVideoSection />

      {/* 4. Impact Statistics: "Global Disciples comes alongside the local church to help mobilize their people." */}
      <ImpactSection />

      {/* 5. "How Communities Are Transformed" (1-2-3 Steps) */}
      <TransformationSection />

      {/* 6. Overlapping Faces Collage over Blue Curve: "Our Approach: Equipping People to Reach Their Nations." */}
      <OurApproachCalloutSection />

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
};
