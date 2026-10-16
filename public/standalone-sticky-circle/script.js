/**
 * Framework-Agnostic Backend-Driven Sticky Circle & Dynamic Reveal Animation
 * 60fps Scroll-Bound Synchronization with RequestAnimationFrame
 */

(function () {
  'use strict';

  let config = {
    initialPercentage: 29.0984,
    currentPercentage: 29.0984,
    activeBlockIndex: 0,
    data: null,
  };

  // Elements
  const headerNav = document.querySelector('.header-nav');
  const col1Container = document.querySelector('.section.col-1');
  const circleMask = document.querySelector('.circle-mask');
  const approachSection = document.querySelector('.approach-reveal-section');
  const floatingPortraitsWrapper = document.querySelector('.floating-portraits-wrapper');

  /**
   * 1. Initialize and Fetch Content from Backend API / JSON
   */
  async function init() {
    try {
      const response = await fetch('data.json');
      if (!response.ok) throw new Error('Network error loading data.json');
      config.data = await response.json();
    } catch (err) {
      console.warn('Could not load remote data.json, using fallback structure.', err);
      // Fallback data
      config.data = {
        initialPercentage: 29.0984,
        blocks: [],
      };
    }

    renderContent(config.data);
    setupScrollListeners();
  }

  /**
   * 2. Dynamically Render Backend Content into Exact DOM Structure
   */
  function renderContent(data) {
    if (!data || !data.blocks) return;

    // Render 4 Left-Hand Column Text Blocks
    col1Container.innerHTML = '';
    data.blocks.forEach((block, idx) => {
      const blockEl = document.createElement('div');
      blockEl.className = `text-block-item ${idx === 0 ? 'active' : ''}`;
      blockEl.id = `text-${block.id}`;
      blockEl.dataset.index = idx;

      blockEl.innerHTML = `
        <div class="block-tag">
          <span class="block-tag-dot"></span>
          <span>${block.eyebrow || 'THE ONE-THIRD REALITY'}</span>
        </div>
        <h2 class="block-title">${block.title}</h2>
        <div class="block-body">
          ${block.paragraphs.map(p => `<p class="block-paragraph">${p}</p>`).join('')}
        </div>
        ${block.buttonText ? `<a href="${block.buttonLink || '#'}" class="block-btn">${block.buttonText}</a>` : ''}
      `;

      col1Container.appendChild(blockEl);
    });

    // Render Exact Circular Mask DOM Elements
    circleMask.innerHTML = '';

    // A) 4 Sequential Images: #block-1, #block-2, #block-3, #block-4
    data.blocks.forEach((block, idx) => {
      const img = document.createElement('img');
      img.decoding = 'async';
      img.src = block.image;
      img.alt = block.alt || '';
      img.id = block.id; // e.g. "block-1", "block-2", etc.
      img.className = `scroll-img ${idx === 0 ? 'active' : ''}`;
      img.style.height = `${data.initialPercentage}%`;
      circleMask.appendChild(img);
    });

    // B) Exact Blue Fill Overlay: div.fill.percentage
    const fillDiv = document.createElement('div');
    fillDiv.className = 'fill percentage';
    fillDiv.style.top = `${data.initialPercentage}%`;
    fillDiv.innerHTML = '&nbsp;';
    circleMask.appendChild(fillDiv);

    // C) Exact Placeholder Image: img.placeholder-animate
    const placeholderImg = document.createElement('img');
    placeholderImg.decoding = 'async';
    placeholderImg.src = data.blocks[0].image;
    placeholderImg.className = 'placeholder-animate';
    placeholderImg.style.height = `${data.initialPercentage}%`;
    circleMask.appendChild(placeholderImg);

    // Render Floating Portraits for Post-Scroll Approach Section
    if (data.approachReveal && data.approachReveal.floatingPortraits) {
      floatingPortraitsWrapper.innerHTML = '';
      data.approachReveal.floatingPortraits.forEach(fp => {
        const fpDiv = document.createElement('div');
        fpDiv.className = 'floating-portrait';
        fpDiv.id = fp.id;
        fpDiv.style.cssText = fp.pos || '';
        fpDiv.innerHTML = `<img src="${fp.image}" alt="${fp.alt || ''}">`;
        floatingPortraitsWrapper.appendChild(fpDiv);
      });
    }
  }

  /**
   * 3. Scroll-Bound Animation Engine (Bidirectional Scrubbing)
   */
  function setupScrollListeners() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollUpdate();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial run
    handleScrollUpdate();
  }

  function handleScrollUpdate() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    // 1. Sticky Navbar Transition (Sinking blur & scale down)
    if (headerNav) {
      if (scrollY > 20) {
        headerNav.classList.add('compact');
      } else {
        headerNav.classList.remove('compact');
      }
    }

    // 2. Synchronized Text-Image Swap (#block-1 to #block-4)
    const textBlocks = document.querySelectorAll('.text-block-item');
    const scrollImgs = document.querySelectorAll('.scroll-img');
    const fillPercentage = document.querySelector('.fill.percentage');
    const placeholderAnimate = document.querySelector('.placeholder-animate');

    if (!textBlocks.length) return;

    let activeIdx = 0;
    const centerThreshold = vh * 0.5;

    textBlocks.forEach((block, idx) => {
      const rect = block.getBoundingClientRect();
      if (rect.top <= centerThreshold) {
        activeIdx = idx;
      }
    });

    config.activeBlockIndex = activeIdx;

    // Update Text active classes
    textBlocks.forEach((block, idx) => {
      if (idx === activeIdx) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });

    // Update Image active classes (Crossfade)
    scrollImgs.forEach((img, idx) => {
      if (idx === activeIdx) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    // 3. Dynamic Blue Fill Receding & Image Expansion (29.0984% -> 100%)
    const animationWrapper = document.querySelector('.gdc-content-animation');
    if (animationWrapper) {
      const containerRect = animationWrapper.getBoundingClientRect();
      const totalScrollable = containerRect.height - vh;

      if (totalScrollable > 0) {
        const scrolledOffset = -containerRect.top;
        const overallRatio = Math.min(1, Math.max(0, scrolledOffset / totalScrollable));

        // Smoothly interpolate from 29.0984% to 100% across the latter half of the scroll
        let calculatedPercentage = config.initialPercentage;
        if (overallRatio > 0.45) {
          const expansionRatio = Math.min(1, Math.max(0, (overallRatio - 0.45) / 0.5));
          calculatedPercentage = config.initialPercentage + (100 - config.initialPercentage) * expansionRatio;
        }

        config.currentPercentage = calculatedPercentage;

        // Apply interpolated percentage to all images and fill element
        const formattedPercentage = calculatedPercentage.toFixed(4) + '%';

        scrollImgs.forEach(img => {
          img.style.height = formattedPercentage;
        });

        if (placeholderAnimate) {
          placeholderAnimate.style.height = formattedPercentage;
        }

        if (fillPercentage) {
          fillPercentage.style.top = formattedPercentage;
        }
      }
    }

    // 4. Post-Scroll Floating Portraits Reveal & Scale Up
    if (approachSection) {
      const rect = approachSection.getBoundingClientRect();
      const triggerStart = vh * 0.85;
      const triggerEnd = vh * 0.25;

      const portraits = document.querySelectorAll('.floating-portrait');

      if (rect.top <= triggerStart) {
        const revealProgress = Math.min(1, Math.max(0, (triggerStart - rect.top) / (triggerStart - triggerEnd)));
        
        portraits.forEach((p, idx) => {
          const delayOffset = idx * 0.05;
          const individualProgress = Math.min(1, Math.max(0, (revealProgress - delayOffset) / (1 - delayOffset)));
          
          p.style.opacity = individualProgress;
          p.style.transform = `scale(${0.65 + 0.35 * individualProgress}) translateY(${(1 - individualProgress) * 40}px)`;
        });
      } else {
        portraits.forEach(p => {
          p.style.opacity = 0;
          p.style.transform = 'scale(0.65) translateY(40px)';
        });
      }
    }
  }

  // Start on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
