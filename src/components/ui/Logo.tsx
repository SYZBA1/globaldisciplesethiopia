import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  theme = 'light',
  className = '',
  showSubtitle = false,
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';

  return (
    <Link
      to="/"
      className={`inline-flex flex-col items-center group select-none ${className}`}
      aria-label="Global Disciples Home"
    >
      {/* The signature sky-blue semi-circle dome matching Image 1 */}
      <div className="w-10 h-5 sm:w-11 sm:h-[22px] rounded-t-full bg-[#1EA5FC] transition-transform group-hover:scale-105 mb-0.5 shadow-sm" />

      {/* The high-contrast serif typography matching Image 1 */}
      <div className={`font-['Playfair_Display',Georgia,serif] font-bold tracking-[-0.03em] leading-[0.85] text-center ${textColor}`}>
        <div className="text-xl sm:text-2xl">global</div>
        <div className="text-xl sm:text-2xl">disciples</div>
      </div>

      {showSubtitle && (
        <span className="text-[8px] font-sans font-bold tracking-widest text-[#E28723] uppercase mt-1">
          ALLIANCE ETHIOPIA
        </span>
      )}
    </Link>
  );
};
