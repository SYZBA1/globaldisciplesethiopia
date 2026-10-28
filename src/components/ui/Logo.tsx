import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
  compact?: boolean;
  clipped?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  showSubtitle = false,
  compact = false,
  clipped = false,
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#111820]';

  return (
    <Link
      to="/"
      className={`inline-flex flex-col items-center justify-center group select-none shrink-0 transition-all duration-300 ease-out ${className}`}
      aria-label="Global Disciples Home"
    >
      {/* 
        When NOT clipped (Top / Instant view - Image 1):
        Display the full blue semi-circle dome icon above the typography.
        When clipped (Scrolled down - Image 2):
        The thin blue line is pinned at top: 0 of the header, leaving "global" 100% fully visible!
      */}
      {!clipped && (
        <div
          className="rounded-t-full bg-[#1EA5FC] transition-all duration-300 group-hover:scale-105 mb-1 shadow-sm shrink-0 w-10 h-5 sm:w-11 sm:h-[20px]"
        />
      )}

      {/* The high-contrast serif typography matching Image 1 & Image 2 */}
      <div
        className={`font-['Playfair_Display',Georgia,serif] font-bold tracking-[-0.03em] leading-[0.92] text-center shrink-0 transition-colors duration-300 ${textColor} ${
          compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
        }`}
      >
        <div className="leading-[0.95]">global</div>
        <div className="leading-[0.95]">disciples</div>
      </div>

      {showSubtitle && (
        <span className="text-[8px] font-sans font-bold tracking-widest text-[#E28723] uppercase mt-1 shrink-0">
          ALLIANCE ETHIOPIA
        </span>
      )}
    </Link>
  );
};
