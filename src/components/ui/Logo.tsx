import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
  compact?: boolean;
  clipped?: boolean;
  scale?: 'normal' | 'enlarged' | 'compact';
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  showSubtitle = false,
  compact = false,
  clipped = false,
  scale = 'normal',
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#111820]';

  // Proportional scaling
  const scaleClass =
    scale === 'enlarged'
      ? 'scale-110 sm:scale-115'
      : compact || scale === 'compact'
      ? 'scale-90 sm:scale-95'
      : 'scale-100';

  return (
    <Link
      to="/"
      className={`inline-flex flex-col items-center justify-center group select-none shrink-0 transition-all duration-300 ease-out origin-top ${
        clipped ? '-translate-y-[19px] sm:-translate-y-[21px]' : 'translate-y-0'
      } ${scaleClass} ${className}`}
      aria-label="Global Disciples Home"
    >
      {/* The signature sky-blue semi-circle dome matching Image 1 & Image 2 */}
      <div
        className={`rounded-t-full bg-[#1EA5FC] transition-all duration-300 group-hover:scale-105 mb-0.5 shadow-sm shrink-0 w-10 h-5 sm:w-11 sm:h-[22px]`}
      />

      {/* The high-contrast serif typography matching Image 1 & Image 2 */}
      <div
        className={`font-['Playfair_Display',Georgia,serif] font-bold tracking-[-0.03em] leading-[0.88] text-center shrink-0 transition-colors duration-300 ${textColor} text-xl sm:text-2xl`}
      >
        <div>global</div>
        <div>disciples</div>
      </div>

      {showSubtitle && (
        <span className="text-[8px] font-sans font-bold tracking-widest text-[#E28723] uppercase mt-1 shrink-0">
          ALLIANCE ETHIOPIA
        </span>
      )}
    </Link>
  );
};
