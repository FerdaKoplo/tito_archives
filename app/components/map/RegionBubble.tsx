import React from 'react'

interface RegionBubbleProps {
    centroid: [number, number]
    name: string
}

const RegionBubble: React.FC<RegionBubbleProps> = ({ name, centroid }) => {
    if (!centroid || Number.isNaN(centroid[0])) return null

    const [x, y] = centroid
    const bubbleWidth = 120
    const bubbleHeight = 32


    return (
        <g className="pointer-events-none animate-in fade-in zoom-in duration-200">
            <rect
                x={x - (bubbleWidth / 2) + 4}
                y={y - 40 + 4}
                width={bubbleWidth}
                height={bubbleHeight}
                fill="black"
            />

            <rect
                x={x - (bubbleWidth / 2)}
                y={y - 40}
                width={bubbleWidth}
                height={bubbleHeight}
                fill="white"
                stroke="black"
                strokeWidth="2"
            />

            <text
                x={x}
                y={y - 19}
                textAnchor="middle"
                className="text-sm font-bold font-mono fill-black"
            >
                {name}
            </text>
        </g>
    )
}

export default RegionBubble