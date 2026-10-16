import React from 'react';

interface MultiplicationMatrixProps {
  activeStep: number; // 0, 1, 2, or 3
}

// Generate the 77-dot hexagonal lattice for Steps 1, 2, and 3
const LATTICE_DOTS: { x: number; y: number; id: string; distToCenter: number }[] = [];
for (let r = 0; r < 9; r++) {
  const y = 50 + r * 46;
  const isOdd = r % 2 === 1;
  const count = isOdd ? 8 : 9;
  const startX = isOdd ? 135 : 110;
  for (let c = 0; c < count; c++) {
    const x = startX + c * 50;
    const distToCenter = Math.hypot(x - 310, y - 234);
    LATTICE_DOTS.push({ x, y, id: `l-${r}-${c}`, distToCenter });
  }
}

// Sort by distance to center so neighbors activate symmetrically
const SORTED_LATTICE = [...LATTICE_DOTS].sort((a, b) => a.distToCenter - b.distToCenter);
const CENTER_DOT_ID = SORTED_LATTICE[0].id;
const STEP_2_IDS = new Set(SORTED_LATTICE.slice(1, 16).map(d => d.id));
const STEP_3_IDS = new Set(SORTED_LATTICE.slice(1, 72).map(d => d.id));

// Generate the 3 Church Shapes for Step 4 (25 dots per church = 75 dots)
function createChurchDots(cx: number, cy: number, prefix: string) {
  const dots: { x: number; y: number; id: string }[] = [];
  // Row 0: Apex spire (1 dot)
  dots.push({ x: cx, y: cy, id: `${prefix}-0` });
  // Row 1: Upper tower (1 dot)
  dots.push({ x: cx, y: cy + 22, id: `${prefix}-1` });
  // Row 2: Roof pitch (3 dots)
  [-1, 0, 1].forEach((i, idx) => dots.push({ x: cx + i * 20, y: cy + 44, id: `${prefix}-2-${idx}` }));
  // Rows 3 to 6: Church body (5 dots per row)
  for (let r = 0; r < 4; r++) {
    [-2, -1, 0, 1, 2].forEach((i, idx) => {
      dots.push({ x: cx + i * 20, y: cy + 66 + r * 22, id: `${prefix}-body-${r}-${idx}` });
    });
  }
  return dots;
}

const CHURCH_1 = createChurchDots(310, 40, 'c1');   // Top Center Church
const CHURCH_2 = createChurchDots(170, 260, 'c2');  // Bottom Left Church
const CHURCH_3 = createChurchDots(450, 260, 'c3');  // Bottom Right Church
const ALL_CHURCH_DOTS = [...CHURCH_1, ...CHURCH_2, ...CHURCH_3];

export const MultiplicationMatrix: React.FC<MultiplicationMatrixProps> = ({ activeStep }) => {
  return (
    <div className="w-full max-w-[540px] aspect-[600/500] select-none">
      <svg
        viewBox="0 0 620 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Layer 1: The Hexagonal Lattice for Steps 1, 2, 3, and background for 4 */}
        <g>
          {LATTICE_DOTS.map((dot) => {
            const isCenter = dot.id === CENTER_DOT_ID;
            let fillColor = '#EEF2F6'; // Default faint grey
            let radius = 19;

            if (activeStep < 3 && isCenter) {
              fillColor = '#E11D48'; // Red director circle for steps 1-3
              radius = 21;
            } else if (activeStep === 1 && STEP_2_IDS.has(dot.id)) {
              fillColor = '#0073E6'; // Vibrant blue for 15 disciple makers
            } else if (activeStep === 2 && STEP_3_IDS.has(dot.id)) {
              fillColor = '#0073E6'; // Vibrant blue for 71 new disciples
            }

            return (
              <circle
                key={dot.id}
                cx={dot.x}
                cy={dot.y}
                r={radius}
                fill={fillColor}
                style={{
                  fill: fillColor,
                  transition: 'fill 450ms ease, r 450ms ease',
                }}
              />
            );
          })}
        </g>

        {/* Layer 2: The 3 Church Shapes for Step 4 */}
        <g
          style={{
            opacity: activeStep === 3 ? 1 : 0,
            transform: activeStep === 3 ? 'scale(1)' : 'scale(0.92)',
            transformOrigin: '310px 240px',
            transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: activeStep === 3 ? 'auto' : 'none',
          }}
        >
          {ALL_CHURCH_DOTS.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={7.5}
              fill="#0073E6"
              style={{
                fill: '#0073E6',
                transition: 'transform 300ms ease',
              }}
              className="hover:scale-125"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
