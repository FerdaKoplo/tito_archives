import React from "react";

interface RegionBubbleProps {
  centroid: [number, number];
  name: string;
  scale?: number;
}

const RegionBubble: React.FC<RegionBubbleProps> = ({
  name,
  centroid,
  scale = 1,
}) => {
  if (!centroid || Number.isNaN(centroid[0])) return null;

  const [x, y] = centroid;
  const bubbleWidth = 120 * scale;
  const bubbleHeight = 32 * scale;
  const yOffset = 40 * scale;
  const textOffset = 19 * scale;

  const arrowSize = 8 * scale;
  const boxBottomY = y - yOffset + bubbleHeight;

  return (
    <g className="pointer-events-none animate-in fade-in zoom-in duration-200">
      <rect
        x={x - bubbleWidth / 2 + 4}
        y={y - yOffset + 4}
        width={bubbleWidth}
        height={bubbleHeight}
        fill="black"
      />

      <polygon
        points={`
          ${x - arrowSize},${boxBottomY + 4} 
          ${x + arrowSize},${boxBottomY + 4} 
          ${x + 4},${boxBottomY + arrowSize + 4}
        `}
        fill="black"
      />

      <polygon
        points={`
          ${x - arrowSize},${boxBottomY} 
          ${x + arrowSize},${boxBottomY} 
          ${x},${boxBottomY + arrowSize}
        `}
        fill="white"
        stroke="black"
        strokeWidth={2 * scale}
      />

      <rect
        x={x - bubbleWidth / 2}
        y={y - yOffset}
        width={bubbleWidth}
        height={bubbleHeight}
        fill="white"
        stroke="black"
        strokeWidth={2 * scale}
      />

      <text
        x={x}
        y={y - textOffset}
        textAnchor="middle"
        style={{ fontSize: `${14 * scale}px` }}
        className="font-bold font-mono fill-black"
      >
        {name}
      </text>
    </g>
  );
};

export default RegionBubble;

