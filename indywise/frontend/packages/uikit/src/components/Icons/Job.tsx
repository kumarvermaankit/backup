import * as React from 'react';

export const Job: React.FC = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="#0C3559"
        stroke="#F2A922"
        strokeWidth="4"
      />
      <rect
        x="33.1274"
        y="38.5234"
        width="54.4125"
        height="43.6759"
        rx="3"
        stroke="#F2A922"
        strokeWidth="4"
      />
      <mask id="path-3-inside-1" fill="white">
        <rect x="32" y="37" width="57" height="23" rx="3" />
      </mask>
      <rect
        x="32"
        y="37"
        width="57"
        height="23"
        rx="3"
        stroke="#F2A922"
        strokeWidth="8"
        mask="url(#path-3-inside-1)"
      />
      <mask id="path-4-inside-2" fill="white">
        <rect x="48.6519" y="27.5859" width="23.365" height="11.919" rx="2" />
      </mask>
      <rect
        x="48.6519"
        y="27.5859"
        width="23.365"
        height="11.919"
        rx="2"
        stroke="#F2A922"
        strokeWidth="8"
        mask="url(#path-4-inside-2)"
      />
      <rect
        x="55.0308"
        y="54.9141"
        width="10.6031"
        height="7.91897"
        rx="2"
        fill="white"
        stroke="#F2A922"
        strokeWidth="4"
      />
    </svg>
  );
};
