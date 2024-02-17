import * as React from "react";
const SVGComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" {...props}>
    <defs>
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={0}
        x2={0}
        y1={0}
        y2="100%"
        gradientTransform="rotate(240)"
      >
        <stop offset={0} stopColor="#555" /> {/* Lightened shade */}
        <stop offset={1} stopColor="#555" /> {/* Lightened shade */}
      </linearGradient>
      <pattern
        patternUnits="userSpaceOnUse"
        id="b"
        width={540}
        height={450}
        x={0}
        y={0}
        viewBox="0 0 1080 900"
      >
        <g fillOpacity={0.1}>
          <polygon fill="#333" points="90 150 0 300 180 300" /> {/* Lightened */}
          <polygon points="90 150 180 0 0 0" />
          <polygon fill="#666" points="270 150 360 0 180 0" /> {/* Lightened */}
          <polygon fill="#888" points="450 150 360 300 540 300" /> {/* Lightened */}
          <polygon fill="#777" points="450 150 540 0 360 0" /> {/* Lightened */}
          <polygon points="630 150 540 300 720 300" />
          <polygon fill="#888" points="630 150 720 0 540 0" /> {/* Lightened */}
          <polygon fill="#333" points="810 150 720 300 900 300" /> {/* Lightened */}
          <polygon fill="#999" points="810 150 900 0 720 0" /> {/* Lightened */}
          <polygon fill="#888" points="990 150 900 300 1080 300" /> {/* Lightened */}
          <polygon fill="#333" points="990 150 1080 0 900 0" /> {/* Lightened */}
          {/* Continue adjusting other polygons with similarly lightened shades */}
        </g>
      </pattern>
    </defs>
    <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
    <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
  </svg>
);
export default SVGComponent;
