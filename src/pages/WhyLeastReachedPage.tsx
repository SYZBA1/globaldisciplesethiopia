import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';

interface BlockData {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
  image: string;
  alt: string;
}

interface FloatingPortrait {
  id: string;
  image: string;
  alt: string;
  className: string;
}

interface ApproachRevealData {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  floatingPortraits: FloatingPortrait[];
}

interface OneThirdContentData {
  eyebrow: string;
  mainTitle: string;
  initialPercentage: number;
  blocks: BlockData[];
  approachReveal: ApproachRevealData;
}

// Fallback data in case of network/fetch errors
const DEFAULT_DATA: OneThirdContentData = {
  eyebrow: 'WHY LEAST-REACHED',
  mainTitle: 'One Third',
  initialPercentage: 29.0984,
  blocks: [
    {
      id: 'block-1',
      eyebrow: 'THE ONE-THIRD REALITY',
      title: 'A third of our world has not yet heard the good news of Jesus.',
      paragraphs: [
        'Global Disciples refers to this third of the world as "least-reached". We live in a time where many of these people are within reach of a local church.',
        'Through our simple and effective strategy of training and coaching, believers share the Gospel in their own nations and cultures.',
        'We understand it\'s impossible to accomplish this mission alone. That\'s why we partner with hundreds of clusters of churches across Ethiopia and 2,541 clusters globally.'
      ],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85',
      alt: 'Smiling children in least-reached community'
    },
    {
      id: 'block-2',
      eyebrow: 'WHY LEAST-REACHED',
      title: 'Why we focus on the least-reached',
      paragraphs: [
        'We believe every person should have an opportunity to hear and respond to the Gospel of Jesus Christ. And we live in a time when many of those least-reached with the Good News of Jesus are within reach of a local church.',
        'Rather than sending traditional cross-oceanic missionaries who face language barriers and high costs, we believe the church closest to the least-reached is God\'s primary instrument for transformation.'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
      alt: 'Elderly Ethiopian man with beard and colorful scarf smiling'
    },
    {
      id: 'block-3',
      eyebrow: 'EQUIPPING NEAR-NEIGHBORS',
      title: 'How we reach the least-reached',
      paragraphs: [
        'We do this by equipping "near-culture" mission workers—those who share the same or a similar culture with those they are working to reach.',
        'We come alongside the local church to train ordinary men and women to share the Gospel, make disciples, and plant churches in their own nations.'
      ],
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
      alt: 'Joyful smiling young Ethiopian girl with headscarf'
    },
    {
      id: 'block-4',
      eyebrow: 'SUSTAINABLE MULTIPLICATION',
      title: 'Equipping Churches for Reproducible Movements',
      paragraphs: [
        'By pairing frontline discipleship with small business development and servant leadership, local fellowships thrive without continuous foreign dependency.',
        'We partner with more than 2,541 clusters of churches in 79 nations to train, send, and sustain workers who establish living fellowships in zero-access communities.'
      ],
      buttonText: 'Our Approach',
      buttonLink: '/approach',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85',
      alt: 'Community leaders gathering for discipleship training'
    }
  ],
  approachReveal: {
    eyebrow: 'Our Approach',
    title: 'Equipping People to Reach Their Nations.',
    subtitle: 'We train leaders living near least-reached communities to multiply disciples.',
    buttonText: 'Learn More',
    buttonLink: '/approach',
    floatingPortraits: [
      {
        id: 'fp-1',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
        alt: 'Joyful elder leader',
        className: 'left-2 sm:left-6 lg:left-12 top-10 sm:top-8 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72'
      },
      {
        id: 'fp-2',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85',
        alt: 'Woman in yellow scarf',
        className: 'left-1/2 -translate-x-1/2 -top-6 sm:-top-8 w-28 h-28 sm:w-44 sm:h-44 lg:w-52 lg:h-52'
      },
      {
        id: 'fp-3',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        alt: 'Elderly disciple maker',
        className: 'left-[54%] sm:left-[55%] top-12 sm:top-14 w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28'
      },
      {
        id: 'fp-4',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        alt: 'Near-culture worker',
        className: 'left-[28%] sm:left-[32%] bottom-6 sm:bottom-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32'
      },
      {
        id: 'fp-5',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        alt: 'Leader in green turban',
        className: 'left-[48%] sm:left-[50%] bottom-2 sm:bottom-4 w-22 h-22 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
      },
      {
        id: 'fp-6',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85',
        alt: 'Young boy in community',
        className: 'right-2 sm:right-6 lg:right-12 top-4 sm:top-6 w-44 h-44 sm:w-64 sm:h-64 lg:w-84 lg:h-84'
      }
    ]
  }
};

export const WhyLeastReachedPage: React.FC = () => {
  const [content, setContent] = useState<OneThirdContentData>(DEFAULT_DATA);
  const [activeBlock, setActiveBlock] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(29.0984);
  const [revealProgress, setRevealProgress] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const approachSectionRef = useRef<HTMLDivElement | null>(null);

  // Dynamic Backend Data Binding: Fetch from /api/one-third-content.json
  useEffect(() => {
    fetch('/api/one-third-content.json')
      .then((res) => {
        if (!res.ok) throw new Error('API fetch failed');
        return res.json();
      })
      .then((data: OneThirdContentData) => {
        setContent(data);
      })
      .catch((err) => {
        console.warn('Backend API endpoint offline or returned error; using robust built-in dataset:', err);
      });
  }, []);

  // Scroll-Bound Animation Mechanics: Downward & Reverse Upward Synchronization
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const halfwayThreshold = vh * 0.5;

          // 1. Text-Block Activation & Image Swapping (#block-1 to #block-4)
          let currentActive = 0;
          blockRefs.current.forEach((el, index) => {
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= halfwayThreshold) {
                currentActive = index;
              }
            }
          });
          setActiveBlock(currentActive);

          // 2. Dynamic Blue Fill Receding & Image Expansion (29.0984% -> 100%)
          // Calculate scroll progress across block-3 and block-4 towards approach reveal
          if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const totalScrollable = containerRect.height - vh;
            
            if (totalScrollable > 0) {
              // Current scroll position within the container
              const currentOffset = -containerRect.top;
              const overallRatio = Math.min(1, Math.max(0, currentOffset / totalScrollable));

              // Expansion starts actively as user progresses through block 3 and block 4
              // From 0% to 55% of section: hold initial 29.0984% split
              // From 55% to 95% of section: interpolate smoothly to 100%
              let targetPerc = 29.0984;
              if (overallRatio > 0.5) {
                const expandT = Math.min(1, Math.max(0, (overallRatio - 0.5) / 0.45));
                targetPerc = 29.0984 + (100 - 29.0984) * expandT;
              }
              setPercentage(targetPerc);
            }
          }

          // 3. Post-Scroll Floating Portraits & Approach Section Transition
          if (approachSectionRef.current) {
            const rect = approachSectionRef.current.getBoundingClientRect();
            const triggerStart = vh * 0.85;
            const triggerEnd = vh * 0.25;

            if (rect.top <= triggerStart) {
              const prog = Math.min(1, Math.max(0, (triggerStart - rect.top) / (triggerStart - triggerEnd)));
              setRevealProgress(prog);
            } else {
              setRevealProgress(0);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-gd-blue selection:text-white">
      <SEO
        title="One Third | Why Least-Reached"
        description="A third of our world has not yet heard the good news of Jesus. Explore how Global Disciples equips near-culture workers to reach zero-access communities."
      />

      {/* Top Title Banner matching Screenshot 3 */}
      <section className="bg-[#F4F9FB] pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1EA5FC] mb-4 block">
            {content.eyebrow}
          </span>
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-none inline-flex items-baseline justify-center">
            <span>{content.mainTitle}</span>
            {/* Signature sky-blue accent motif */}
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-tl-full bg-[#1EA5FC] ml-2 inline-block shrink-0 shadow-sm" />
          </h1>
        </div>
      </section>

      {/* Main Wrapper matching exact DevTools DOM: div.gdc-content-animation */}
      <div
        ref={containerRef}
        className="gdc-content-animation max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        {/* Left Column matching exact DOM: div.section.col-1 */}
        <div className="section col-1 lg:col-span-7 space-y-32 sm:space-y-48 lg:space-y-64 py-16 sm:py-24 lg:py-32">
          {content.blocks.map((block, index) => (
            <div
              key={block.id}
              id={`text-${block.id}`}
              ref={(el) => (blockRefs.current[index] = el)}
              className={`transition-all duration-700 ease-out ${
                activeBlock === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-40 translate-y-2'
              }`}
            >
              {/* Active Indicator Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-[#1EA5FC]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1EA5FC]">
                  {block.eyebrow}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
                {block.title}
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {block.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Optional Call to Action Button */}
              {block.buttonText && block.buttonLink && (
                <div className="mt-8">
                  <Link
                    to={block.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-sm hover:scale-105 active:scale-95"
                  >
                    {block.buttonText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column matching exact DOM: section.col-2 */}
        <section className="col-2 lg:col-span-5 sticky top-24 sm:top-28 lg:top-[22vh] z-20 py-6 sm:py-10 flex justify-center items-center pointer-events-none">
          <figure className="m-0 p-0">
            {/* Circular Mask Container matching exact DevTools DOM: figure > div */}
            <div
              className="circle-mask w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] shadow-2xl bg-[#0B63CE] transition-transform duration-500 ease-out"
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px transparent solid',
                position: 'relative',
              }}
            >
              {/* Inner Elements matching exact DOM structure: #block-1 to #block-4 */}
              {content.blocks.map((block, idx) => (
                <img
                  key={block.id}
                  id={block.id}
                  decoding="async"
                  src={block.image}
                  alt={block.alt}
                  className="scroll-img absolute top-0 left-0 w-full object-cover object-top transition-opacity duration-500 ease-in-out"
                  style={{
                    height: `${percentage.toFixed(4)}%`,
                    opacity: activeBlock === idx ? 1 : 0,
                    zIndex: activeBlock === idx ? 2 : 1,
                  }}
                />
              ))}

              {/* The Blue Fill Overlay matching exact DOM: div.fill.percentage */}
              {/* Starts at top: 29.0984% and interpolates down to top: 100% as user scrolls */}
              <div
                className="fill percentage absolute left-0 right-0 bottom-0 bg-[#0B63CE] transition-all duration-300 ease-out"
                style={{
                  top: `${percentage.toFixed(4)}%`,
                  zIndex: 3,
                }}
              >
                &nbsp;
              </div>

              {/* Placeholder element matching exact DevTools DOM: img.placeholder-animate */}
              <img
                decoding="async"
                src={content.blocks[activeBlock]?.image || content.blocks[0].image}
                alt=""
                aria-hidden="true"
                className="placeholder-animate absolute top-0 left-0 w-full object-cover object-top pointer-events-none opacity-0"
                style={{
                  height: `${percentage.toFixed(4)}%`,
                  zIndex: 0,
                }}
              />
            </div>
          </figure>
        </section>
      </div>

      {/* Post-Scroll Floating Portraits & Approach Section */}
      {/* Matches Image_57.png (media_1792152150838_e99ce561.png) and storyboard panel ③ & ④ */}
      <section
        ref={approachSectionRef}
        className="relative bg-[#0B63CE] text-white pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden transition-colors duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#084FA7] via-[#0B63CE] to-[#0A56B8] opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Round Portraits Collage */}
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] mb-12 sm:mb-16">
            {content.approachReveal.floatingPortraits.map((portrait, pIdx) => (
              <div
                key={portrait.id}
                className={`absolute rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transition-all duration-700 ease-out ${portrait.className}`}
                style={{
                  transform: `scale(${0.7 + 0.3 * revealProgress}) translateY(${(1 - revealProgress) * (30 + pIdx * 5)}px)`,
                  opacity: revealProgress,
                  transitionDelay: `${pIdx * 50}ms`,
                }}
              >
                <img
                  src={portrait.image}
                  alt={portrait.alt}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Centered Thematic Narrative */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 mb-3 block">
              {content.approachReveal.eyebrow}
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
              Equipping People to Reach <em className="italic font-serif">Their</em> Nations.
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
              {content.approachReveal.subtitle}
            </p>
            <Link
              to={content.approachReveal.buttonLink}
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gd-yellow hover:bg-gd-yellow-hover text-slate-950 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              {content.approachReveal.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
