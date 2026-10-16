import React, { useState } from 'react';

interface YearConfig {
  year: number;
  indigenousPercent: number;
  globalPercent: number;
  tiltAngle: number; // degrees
  tealCircles: { cx: number; cy: number; r: number }[];
  blueCircles: { cx: number; cy: number; r: number }[];
}

const YEARS_DATA: YearConfig[] = [
  {
    year: 1,
    indigenousPercent: 55,
    globalPercent: 45,
    tiltAngle: 0,
    tealCircles: [
      { cx: 145, cy: 114, r: 33 }, // Top large
      { cx: 112, cy: 172, r: 21 }, // Bottom left
      { cx: 160, cy: 176, r: 31 }, // Bottom right resting
    ],
    blueCircles: [
      { cx: 268, cy: 118, r: 29 }, // Top large
      { cx: 260, cy: 178, r: 25 }, // Bottom medium
      { cx: 304, cy: 164, r: 16 }, // Bottom right small
    ],
  },
  {
    year: 2,
    indigenousPercent: 70,
    globalPercent: 30,
    tiltAngle: -12,
    tealCircles: [
      { cx: 140, cy: 96, r: 33 },  // Top large
      { cx: 108, cy: 182, r: 21 }, // Bottom left
      { cx: 162, cy: 190, r: 30 }, // Bottom right resting
    ],
    blueCircles: [
      { cx: 285, cy: 88, r: 29 },  // Top large
      { cx: 258, cy: 152, r: 25 }, // Bottom medium resting
    ],
  },
  {
    year: 3,
    indigenousPercent: 85,
    globalPercent: 15,
    tiltAngle: -23,
    tealCircles: [
      { cx: 128, cy: 104, r: 43 }, // Top giant
      { cx: 125, cy: 210, r: 35 }, // Bottom deep in bowl
      { cx: 185, cy: 170, r: 30 }, // Middle right
    ],
    blueCircles: [
      { cx: 278, cy: 142, r: 27 }, // Single small circle high on rim
    ],
  },
  {
    year: 4,
    indigenousPercent: 100,
    globalPercent: 0,
    tiltAngle: -33,
    tealCircles: [
      { cx: 145, cy: 120, r: 40 }, // Top left
      { cx: 140, cy: 220, r: 28 }, // Bottom deep
      { cx: 205, cy: 170, r: 26 }, // Center resting
      { cx: 255, cy: 110, r: 33 }, // Upper right
    ],
    blueCircles: [],
  },
];

export const SustainabilitySlider: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const prevYear = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : YEARS_DATA.length - 1));
  };

  const nextYear = () => {
    setActiveIdx((prev) => (prev < YEARS_DATA.length - 1 ? prev + 1 : 0));
  };

  const current = YEARS_DATA[activeIdx];

  return (
    <div className="w-full max-w-[440px] mx-auto select-none py-2">
      {/* Year Label */}
      <div className="text-center mb-2">
        <span className="font-serif font-bold text-2xl text-slate-900">
          Year {current.year}
        </span>
      </div>

      {/* Main Interactive Graphic Canvas */}
      <div className="relative flex items-center justify-between px-2 sm:px-4">
        {/* Previous Chevron Button */}
        <button
          type="button"
          onClick={prevYear}
          aria-label="Previous Year"
          className="p-2 -ml-2 text-[#0073E6] hover:scale-115 active:scale-90 transition-transform focus:outline-none z-10"
        >
          <svg
            viewBox="0 0 24 34"
            className="w-6 h-8 sm:w-7 sm:h-9"
            fill="none"
            stroke="#0073E6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 18 4 L 6 17 L 18 30" />
          </svg>
        </button>

        {/* Balance Scale Graphic */}
        <div className="w-[300px] sm:w-[330px] aspect-[400/320] flex items-center justify-center relative">
          <svg
            viewBox="0 0 400 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
          >
            {/* Tilted Balance Scale Assembly: Golden Bowl + Circles */}
            <g
              style={{
                transform: `rotate(${current.tiltAngle}deg)`,
                transformOrigin: '200px 200px',
                transition: 'transform 600ms cubic-bezier(0.34, 1.4, 0.64, 1)',
              }}
            >
              {/* Semicircle Golden-Orange Bowl */}
              <path
                d="M 80 200 A 120 120 0 0 0 320 200 Z"
                fill="#F79E1B"
              />

              {/* Teal Circles (Indigenous Churches) */}
              {current.tealCircles.map((circle, i) => (
                <circle
                  key={`teal-${activeIdx}-${i}`}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="#005F53"
                  style={{
                    transition: 'cx 600ms ease, cy 600ms ease, r 600ms ease',
                  }}
                />
              ))}

              {/* Blue Circles (Global Disciples) */}
              {current.blueCircles.map((circle, i) => (
                <circle
                  key={`blue-${activeIdx}-${i}`}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="#0073E6"
                  style={{
                    transition: 'cx 600ms ease, cy 600ms ease, r 600ms ease',
                  }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Next Chevron Button */}
        <button
          type="button"
          onClick={nextYear}
          aria-label="Next Year"
          className="p-2 -mr-2 text-[#0073E6] hover:scale-115 active:scale-90 transition-transform focus:outline-none z-10"
        >
          <svg
            viewBox="0 0 24 34"
            className="w-6 h-8 sm:w-7 sm:h-9"
            fill="none"
            stroke="#0073E6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 6 4 L 18 17 L 6 30" />
          </svg>
        </button>
      </div>

      {/* Percentage Breakdown Below Graphic matching Reference Exactly */}
      <div className="flex items-start justify-between px-6 sm:px-10 mt-1">
        {/* Left: Indigenous Churches */}
        <div className="text-left">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#005F53] leading-none mb-1">
            {current.indigenousPercent}%
          </div>
          <div className="text-sm font-bold text-[#005F53] leading-tight">
            Indigenous
            <br />
            Churches
          </div>
        </div>

        {/* Right: Global Disciples */}
        <div className="text-right">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#0073E6] leading-none mb-1">
            {current.globalPercent}%
          </div>
          <div className="text-sm font-bold text-[#0073E6] leading-tight">
            Global
            <br />
            Disciples
          </div>
        </div>
      </div>

      {/* Dot Pagination Indicator */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {YEARS_DATA.map((y, idx) => (
          <button
            key={y.year}
            type="button"
            onClick={() => setActiveIdx(idx)}
            aria-label={`View Year ${y.year}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              activeIdx === idx
                ? 'bg-[#0073E6] scale-110'
                : 'bg-[#334155] hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
