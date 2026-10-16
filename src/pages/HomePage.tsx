import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { MissionNeedSection } from '../components/home/MissionNeedSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';
import { EthiopiaContextSection } from '../components/home/EthiopiaContextSection';
import { ApproachProcessSection } from '../components/home/ApproachProcessSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { ImpactSection } from '../components/home/ImpactSection';
import { StoriesSection } from '../components/home/StoriesSection';
import { VideoDocSection } from '../components/home/VideoDocSection';
import { TransformationSection } from '../components/home/TransformationSection';
import { GetInvolvedSection } from '../components/home/GetInvolvedSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { VideoModal } from '../components/ui/VideoModal';

export const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Equipping Churches, Reaching the Least-Reached"
        description="Global Disciples Alliance Ethiopia partners with local churches to equip, train, and send disciple-makers to communities with no access to the Gospel."
      />

      {/* Section 1: Hero (PRD Section 13) */}
      <HeroSection onPlayVideo={() => setIsVideoModalOpen(true)} />

      {/* Section 2: Mission / Need (PRD Section 14) */}
      <MissionNeedSection />

      {/* Section 3: Who We Are (PRD Section 15) */}
      <WhoWeAreSection />

      {/* Section 4: Why Ethiopia / Least-Reached (PRD Section 16) */}
      <EthiopiaContextSection />

      {/* Section 5: Our Approach (PRD Section 17) */}
      <ApproachProcessSection />

      {/* Section 6: Programs (PRD Section 18) */}
      <ProgramsSection />

      {/* Section 7: Impact (PRD Section 19) */}
      <ImpactSection />

      {/* Section 8: Stories (PRD Section 20) */}
      <StoriesSection />

      {/* Section 9: Video / Documentary (PRD Section 21) */}
      <VideoDocSection onPlayVideo={() => setIsVideoModalOpen(true)} />

      {/* Section 10: Transformation (PRD Section 22) */}
      <TransformationSection />

      {/* Section 11: Get Involved (PRD Section 23) */}
      <GetInvolvedSection />

      {/* Section 12: Final CTA (PRD Section 24) */}
      <FinalCTASection />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Global Disciples Alliance Ethiopia — Field Documentary"
      />
    </>
  );
};
