import React from 'react';

interface FlagProps {
  className?: string;
}

/**
 * High-precision vector representation of the National Flag of Ethiopia
 * Tricolor (Green, Yellow, Red) with the national blue disc and golden pentagram star with rays.
 */
export const EthiopiaFlag: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-black/15 inline-block shrink-0 align-middle`}
      aria-hidden="true"
    >
      {/* Top Green Stripe */}
      <rect x="0" y="0" width="36" height="8" fill="#078930" />
      {/* Middle Yellow Stripe */}
      <rect x="0" y="8" width="36" height="8" fill="#FCD116" />
      {/* Bottom Red Stripe */}
      <rect x="0" y="16" width="36" height="8" fill="#DA121A" />
      
      {/* Central Blue Disc */}
      <circle cx="18" cy="12" r="5.2" fill="#0F47AF" />

      {/* Central Golden Pentagram Star & Rays */}
      <g fill="#FCD116" stroke="#FCD116">
        {/* Five-pointed star */}
        <polygon
          points="18,7.8 19.3,11.3 23,11.3 20,13.4 21.1,16.8 18,14.7 14.9,16.8 16,13.4 13,11.3 16.7,11.3"
          strokeWidth="0.3"
        />
        {/* 5 Rays between points */}
        <line x1="18" y1="12" x2="18" y2="7.1" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="18" y1="12" x2="22.6" y2="9.6" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="18" y1="12" x2="20.9" y2="15.8" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="18" y1="12" x2="15.1" y2="15.8" strokeWidth="0.5" strokeLinecap="round" />
        <line x1="18" y1="12" x2="13.4" y2="9.6" strokeWidth="0.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * Clean vector representation of the US flag for toggling back to English
 */
export const USFlag: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`${className} rounded-[3px] shadow-sm overflow-hidden border border-black/15 inline-block shrink-0 align-middle`}
      aria-hidden="true"
    >
      {/* 13 Stripes */}
      <rect width="36" height="24" fill="#B22234" />
      <rect y="1.85" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="5.54" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="9.23" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="12.92" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="16.62" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="20.31" width="36" height="1.85" fill="#FFFFFF" />
      {/* Blue Canton */}
      <rect width="14.4" height="12.92" fill="#3C3B6E" />
      {/* Stars Grid */}
      <g fill="#FFFFFF">
        <circle cx="2.8" cy="2.5" r="0.65" />
        <circle cx="7.2" cy="2.5" r="0.65" />
        <circle cx="11.6" cy="2.5" r="0.65" />
        <circle cx="5.0" cy="4.5" r="0.65" />
        <circle cx="9.4" cy="4.5" r="0.65" />
        <circle cx="2.8" cy="6.5" r="0.65" />
        <circle cx="7.2" cy="6.5" r="0.65" />
        <circle cx="11.6" cy="6.5" r="0.65" />
        <circle cx="5.0" cy="8.5" r="0.65" />
        <circle cx="9.4" cy="8.5" r="0.65" />
        <circle cx="2.8" cy="10.5" r="0.65" />
        <circle cx="7.2" cy="10.5" r="0.65" />
        <circle cx="11.6" cy="10.5" r="0.65" />
      </g>
    </svg>
  );
};
