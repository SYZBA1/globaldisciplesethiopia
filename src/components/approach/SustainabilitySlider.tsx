import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface YearData {
  year: number;
  indigenousPercent: number;
  globalPercent: number;
  description?: string;
  greenCircles: { cx: number; cy: number; r: number }[];
  blueCircles: { cx: number; cy: number; r: number }[];
}

const YEARS: YearData[] = [
  {
    year: 1,
    indigenousPercent: 55,
    globalPercent: 45,
    greenCircles: [
      { cx: 155, cy: 135, r: 35 },
      { cx: 125, cy: 175, r: 24 },
      { cx: 175, cy: 175, r: 20 },
    ],
    blueCircles: [
      { cx: 285, cy: 140, r: 32 },
      { cx: 275, cy: 178, r: 18 },
      { cx: 315, cy: 168, r: 16 },
    ],
  },
  {
    year: 2,
    indigenousPercent: 70,
    globalPercent: 30,
    greenCircles: [
      { cx: 150, cy: 130, r: 38 },
      { cx: 115, cy: 170, r: 26 },
      { cx: 175, cy: 165, r: 24 },
      { cx: 215, cy: 160, r: 20 },
    ],
    blueCircles: [
      { cx: 290, cy: 148, r: 26 },
      { cx: 280, cy: 180, r: 16 },
      { cx: 315, cy: 175, r: 14 },
    ],
  },
  {
    year: 3,
    indigenousPercent: 85,
    globalPercent: 15,
    greenCircles: [
      { cx: 145, cy: 125, r: 40 },
      { cx: 110, cy: 165, r: 28 },
      { cx: 170, cy: 160, r: 26 },
      { cx: 220, cy: 150, r: 24 },
      { cx: 255, cy: 170, r: 20 },
    ],
    blueCircles: [
      { cx: 305, cy: 165, r: 20 },
      { cx: 325, cy: 178, r: 12 },
    ],
  },
  {
    year: 4,
    indigenousPercent: 100,
    globalPercent: 0,
    greenCircles: [
      { cx: 140, cy: 125, r: 40 },
      { cx: 105, cy: 165, r: 28 },
      { cx: 170, cy: 155, r: 26 },
      { cx: 220, cy: 135, r: 32 },
      { cx: 265, cy: 160, r: 26 },
      { cx: 305, cy: 165, r: 22 },
    ],
    blueCircles: [],
  },
];

export const SustainabilitySlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const prevYear = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : YEARS.length - 1));
  };

  const nextYear = () => {
    setCurrentIdx((prev) => (prev < YEARS.length - 1 ? prev + 1 : 0));
  };

  const current = YEARS[currentIdx];

  return (
    <div className="w-full max-w-[460px] mx-auto select-none">
      {/* Year Label */}
      <div className="text-center mb-4">
        <span className="font-serif font-bold text-xl sm:text-2xl text-slate-800">
          Year {current.year}
        </span>
      </div>

      {/* Main Interactive Graphic with Left / Right Navigation Chevrons */}
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevYear}
          aria-label="Previous Year"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#0073E6] hover:text-[#005bb5] hover:scale-110 active:scale-95 transition-all focus:outline-none"
        >
          <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
        </button>

        {/* The Graphic Canvas */}
        <div className="w-full max-w-[360px] sm:max-w-[380px] aspect-[4/3] flex items-center justify-center">
          <svg
            viewBox="0 0 440 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
          >
            {/* The Semicircle / Golden Yellow Bowl */}
            <path
              d="M 60 195 A 160 160 0 0 0 380 195 Z"
              fill="#F79E1B"
              className="drop-shadow-sm"
            />

            {/* Left Cluster: Indigenous Churches (Dark Teal Green) */}
            <g className="transition-all duration-500 ease-in-out">
              {current.greenCircles.map((circle, i) => (
                <circle
                  key={`green-${currentIdx}-${i}`}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="#005F53"
                  className="transition-all duration-500 ease-in-out animate-fadeIn"
                />
              ))}
            </g>

            {/* Right Cluster: Global Disciples (Vibrant Blue) */}
            <g className="transition-all duration-500 ease-in-out">
              {current.blueCircles.map((circle, i) => (
                <circle
                  key={`blue-${currentIdx}-${i}`}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="#0073E6"
                  className="transition-all duration-500 ease-in-out animate-fadeIn"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextYear}
          aria-label="Next Year"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#0073E6] hover:text-[#005bb5] hover:scale-110 active:scale-95 transition-all focus:outline-none"
        >
          <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
        </button>
      </div>

      {/* Percentage Breakdown Below Graphic */}
      <div className="grid grid-cols-2 gap-4 max-w-[360px] mx-auto mt-2 px-6">
        {/* Left: Indigenous Churches */}
        <div className="text-left">
          <div className="text-2xl sm:text-3xl font-black text-[#005F53] leading-none mb-1">
            {current.indigenousPercent}%
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">
            Indigenous
            <br />
            Churches
          </div>
        </div>

        {/* Right: Global Disciples */}
        <div className="text-right">
          <div className="text-2xl sm:text-3xl font-black text-[#0073E6] leading-none mb-1">
            {current.globalPercent}%
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">
            Global
            <br />
            Disciples
          </div>
        </div>
      </div>

      {/* Dot Pagination Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {YEARS.map((y, idx) => (
          <button
            key={y.year}
            type="button"
            onClick={() => setCurrentIdx(idx)}
            aria-label={`View Year ${y.year}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIdx === idx
                ? 'bg-[#0073E6] w-6'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
