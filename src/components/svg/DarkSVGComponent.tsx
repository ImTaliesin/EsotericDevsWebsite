import * as React from "react";
const SVGComponent = (props:any) => (
  <svg width="100%" {...props}>
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
        <stop offset={0} stopColor="#e0e0e0" /> {/* Lighter gray */}
        <stop offset={1} stopColor="#e0e0e0" /> {/* Lighter gray */}
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
          <polygon fill="#444" points="90 150 0 300 180 300" />
          <polygon points="90 150 180 0 0 0" />
          <polygon fill="#888" points="270 150 360 0 180 0" /> {/* Darker gray */}
          <polygon fill="#bbb" points="450 150 360 300 540 300" /> {/* Light gray */}
          <polygon fill="#777" points="450 150 540 0 360 0" /> {/* Dark gray */}
          <polygon points="630 150 540 300 720 300" />
          <polygon fill="#bbb" points="630 150 720 0 540 0" /> {/* Light gray */}
          <polygon fill="#444" points="810 150 720 300 900 300" />
          <polygon fill="#ccc" points="810 150 900 0 720 0" /> {/* Very light gray */}
          <polygon fill="#bbb" points="990 150 900 300 1080 300" /> {/* Light gray */}
          <polygon fill="#444" points="990 150 1080 0 900 0" />
          <polygon fill="#bbb" points="90 450 0 600 180 600" /> {/* Light gray */}
          <polygon points="90 450 180 300 0 300" />
          <polygon fill="#555" points="270 450 180 600 360 600" /> {/* Medium gray */}
          <polygon fill="#888" points="270 450 360 300 180 300" /> {/* Darker gray */}
          <polygon fill="#bbb" points="450 450 360 600 540 600" /> {/* Light gray */}
          <polygon fill="#777" points="450 450 540 300 360 300" /> {/* Dark gray */}
          <polygon fill="#777" points="630 450 540 600 720 600" /> {/* Dark gray */}
          <polygon fill="#ccc" points="630 450 720 300 540 300" /> {/* Very light gray */}
          <polygon points="810 450 720 600 900 600" />
          <polygon fill="#bbb" points="810 450 900 300 720 300" /> {/* Light gray */}
          <polygon fill="#888" points="990 450 900 600 1080 600" /> {/* Darker gray */}
          <polygon fill="#444" points="990 450 1080 300 900 300" />
          <polygon fill="#333" points="90 750 0 900 180 900" /> {/* Darker than #444 */}
          <polygon points="270 750 180 900 360 900" />
          <polygon fill="#bbb" points="270 750 360 600 180 600" /> {/* Light gray */}
          <polygon points="450 750 540 600 360 600" />
          <polygon points="630 750 540 900 720 900" />
          <polygon fill="#444" points="630 750 720 600 540 600" />
          <polygon fill="#888" points="810 750 720 900 900 900" /> {/* Darker gray */}
          <polygon fill="#555" points="810 750 900 600 720 600" /> {/* Medium gray */}
          <polygon fill="#777" points="990 750 900 900 1080 900" /> {/* Dark gray */}
          <polygon fill="#777" points="180 0 90 150 270 150" /> {/* Dark gray */}
          <polygon fill="#444" points="360 0 270 150 450 150" />
          <polygon fill="#ccc" points="540 0 450 150 630 150" /> {/* Very light gray */}
          <polygon points="900 0 810 150 990 150" />
          <polygon fill="#333" points="0 300 -90 450 90 450" /> {/* Darker than #444 */}
          <polygon fill="#ccc" points="0 300 90 150 -90 150" /> {/* Very light gray */}
          <polygon fill="#ccc" points="180 300 90 450 270 450" /> {/* Very light gray */}
          <polygon fill="#555" points="180 300 270 150 90 150" /> {/* Medium gray */}
          <polygon fill="#333" points="360 300 270 450 450 450" /> {/* Darker than #444 */}
          <polygon fill="#ccc" points="360 300 450 150 270 150" /> {/* Very light gray */}
          <polygon fill="#444" points="540 300 450 450 630 450" />
          <polygon fill="#333" points="540 300 630 150 450 150" /> {/* Darker than #444 */}
          <polygon fill="#888" points="720 300 630 450 810 450" /> {/* Darker gray */}
          <polygon fill="#555" points="720 300 810 150 630 150" /> {/* Medium gray */}
          <polygon fill="#ccc" points="900 300 810 450 990 450" /> {/* Very light gray */}
          <polygon fill="#777" points="900 300 990 150 810 150" /> {/* Dark gray */}
          <polygon points="0 600 -90 750 90 750" />
          <polygon fill="#555" points="0 600 90 450 -90 450" /> {/* Medium gray */}
          <polygon fill="#888" points="180 600 90 750 270 750" /> {/* Darker gray */}
          <polygon fill="#444" points="180 600 270 450 90 450" />
          <polygon fill="#444" points="360 600 270 750 450 750" />
          <polygon fill="#777" points="360 600 450 450 270 450" /> {/* Dark gray */}
          <polygon fill="#555" points="540 600 630 450 450 450" /> {/* Medium gray */}
          <polygon fill="#333" points="720 600 630 750 810 750" /> {/* Darker than #444 */}
          <polygon fill="#ccc" points="900 600 810 750 990 750" /> {/* Very light gray */}
          <polygon fill="#333" points="900 600 990 450 810 450" /> {/* Darker than #444 */}
          <polygon fill="#bbb" points="0 900 90 750 -90 750" /> {/* Light gray */}
          <polygon fill="#444" points="180 900 270 750 90 750" />
          <polygon fill="#ccc" points="360 900 450 750 270 750" /> {/* Very light gray */}
          <polygon fill="#888" points="540 900 630 750 450 750" /> {/* Darker gray */}
          <polygon fill="#ccc" points="720 900 810 750 630 750" /> {/* Very light gray */}
          <polygon fill="#333" points="900 900 990 750 810 750" /> {/* Darker than #444 */}
          <polygon fill="#333" points="1080 300 990 450 1170 450" /> {/* Darker than #444 */}
          <polygon fill="#ccc" points="1080 300 1170 150 990 150" /> {/* Very light gray */}
          <polygon points="1080 600 990 750 1170 750" />
          <polygon fill="#555" points="1080 600 1170 450 990 450" /> {/* Medium gray */}
          <polygon fill="#bbb" points="1080 900 1170 750 990 750" /> {/* Light gray */}
        </g>
      </pattern>
    </defs>
    <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
    <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
  </svg>
  
);
export default SVGComponent;
