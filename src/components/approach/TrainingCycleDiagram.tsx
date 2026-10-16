import React from 'react';

export const TrainingCycleDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] aspect-square mx-auto relative select-none">
      <svg
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Arrowhead marker for clockwise flow arrows */}
          <marker
            id="red-arrowhead"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#E11D48" />
          </marker>
        </defs>

        {/* 1. Top-Left Circle: Discipleship Mission Training */}
        <g className="transition-transform duration-300 hover:scale-105 origin-[140px_140px]">
          <circle
            cx="140"
            cy="140"
            r="82"
            fill="#CCE9E4"
            className="transition-colors duration-300"
          />
          <text
            x="140"
            y="126"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Discipleship
          </text>
          <text
            x="140"
            y="145"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Mission
          </text>
          <text
            x="140"
            y="164"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Training
          </text>
        </g>

        {/* Arrow 1: Top-Left to Top-Right (Horizontal Right) */}
        <line
          x1="225"
          y1="140"
          x2="235"
          y2="140"
          stroke="#E11D48"
          strokeWidth="2"
          markerEnd="url(#red-arrowhead)"
        />

        {/* 2. Top-Right Circle: Small Business Training */}
        <g className="transition-transform duration-300 hover:scale-105 origin-[320px_140px]">
          <circle
            cx="320"
            cy="140"
            r="82"
            fill="#CCE9E4"
            className="transition-colors duration-300"
          />
          <text
            x="320"
            y="126"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Small
          </text>
          <text
            x="320"
            y="145"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Business
          </text>
          <text
            x="320"
            y="164"
            textAnchor="middle"
            className="font-serif font-bold text-[15px] fill-slate-800"
          >
            Training
          </text>
        </g>

        {/* Arrow 2: Top-Right to Bottom-Right (Vertical Down) */}
        <line
          x1="320"
          y1="225"
          x2="320"
          y2="235"
          stroke="#E11D48"
          strokeWidth="2"
          markerEnd="url(#red-arrowhead)"
        />

        {/* 3. Bottom-Right Circle: Leadership Training */}
        <g className="transition-transform duration-300 hover:scale-105 origin-[320px_320px]">
          <circle
            cx="320"
            cy="320"
            r="82"
            fill="#CCE9E4"
            className="transition-colors duration-300"
          />
          <text
            x="320"
            y="314"
            textAnchor="middle"
            className="font-serif font-bold text-[16px] fill-slate-800"
          >
            Leadership
          </text>
          <text
            x="320"
            y="336"
            textAnchor="middle"
            className="font-serif font-bold text-[16px] fill-slate-800"
          >
            Training
          </text>
        </g>

        {/* Arrow 3: Bottom-Right to Bottom-Left (Horizontal Left) */}
        <line
          x1="235"
          y1="320"
          x2="225"
          y2="320"
          stroke="#E11D48"
          strokeWidth="2"
          markerEnd="url(#red-arrowhead)"
        />

        {/* 4. Bottom-Left Circle: Multiplying Churches (Vibrant Blue with White Text) */}
        <g className="transition-transform duration-300 hover:scale-105 origin-[140px_320px]">
          <circle
            cx="140"
            cy="320"
            r="82"
            fill="#0073E6"
            className="transition-colors duration-300 shadow-md"
          />
          <text
            x="140"
            y="314"
            textAnchor="middle"
            className="font-serif font-bold text-[16px] fill-white"
          >
            Multiplying
          </text>
          <text
            x="140"
            y="336"
            textAnchor="middle"
            className="font-serif font-bold text-[16px] fill-white"
          >
            Churches
          </text>
        </g>

        {/* Arrow 4: Bottom-Left to Top-Left (Vertical Up) */}
        <line
          x1="140"
          y1="235"
          x2="140"
          y2="225"
          stroke="#E11D48"
          strokeWidth="2"
          markerEnd="url(#red-arrowhead)"
        />
      </svg>
    </div>
  );
};
