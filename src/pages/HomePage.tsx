import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { InvestModelSection } from '../components/home/InvestModelSection';
import { BigVideoSection } from '../components/home/BigVideoSection';
import { ImpactSection } from '../components/home/ImpactSection';
import { TransformationSection } from '../components/home/TransformationSection';
import { EthiopiaContextSection } from '../components/home/EthiopiaContextSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { StoriesSection } from '../components/home/StoriesSection';
import { GetInvolvedSection } from '../components/home/GetInvolvedSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { VideoModal } from '../components/ui/VideoModal';

export const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Global Disciples Alliance Ethiopia Documentary');

  const handleOpenVideo = (title?: string) => {
    if (title) setModalTitle(title);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Equipping Churches, Reaching the Least-Reached"
        description="A third of our world has not yet heard the Good News of Jesus. Global Disciples Alliance Ethiopia equips local churches to train and send disciple-makers to least-reached communities."
      />

      {/* 1. Hero Section matching Screenshot 1 */}
      <HeroSection onPlayVideo={() => handleOpenVideo('A Third of Our World — Global Disciples Mission')} />

      {/* 2. Season of Giving Banner & 2-Card Video Models matching Screenshot 2 */}
      <InvestModelSection onPlayVideo={handleOpenVideo} />

      {/* 3. Big 16:9 Cinematic Video Feature matching Screenshot 3 */}
      <BigVideoSection />

      {/* 4. Impact Statistics: "Mobilize Their People" matching Screenshot 4 */}
      <ImpactSection />

      {/* 5. "How Communities Are Transformed" (1-2-3 + Faces Collage) matching Screenshot 5 */}
      <TransformationSection />

      {/* 6. Strategic Regional Corridors in Ethiopia */}
      <EthiopiaContextSection />

      {/* 7. Core Training Programs */}
      <ProgramsSection />

      {/* 8. Field Stories & Dispatches */}
      <StoriesSection />

      {/* 9. Get Involved (Pray, Partner, Serve, Give) */}
      <GetInvolvedSection />

      {/* 10. Final Call to Action */}
      <FinalCTASection />

      {/* Interactive Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={modalTitle}
      />
    </>
  );
};
