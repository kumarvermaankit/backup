import * as React from 'react';

export const EmpDefaultAvatar: React.FC = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="39.5" stroke="#262626" />
      <mask id="path-2-inside-1" fill="white">
        <rect x="20" y="28" width="40" height="28" rx="2" />
      </mask>
      <rect
        x="20"
        y="28"
        width="40"
        height="28"
        rx="2"
        stroke="#262626"
        strokeWidth="6"
        mask="url(#path-2-inside-1)"
      />
      <line
        x1="22"
        y1="40.5"
        x2="58"
        y2="40.5"
        stroke="#262626"
        strokeWidth="3"
      />
      <mask id="path-4-inside-2" fill="white">
        <rect x="34" y="36" width="12" height="8" rx="2" />
      </mask>
      <rect
        x="34"
        y="36"
        width="12"
        height="8"
        rx="2"
        fill="white"
        stroke="#262626"
        strokeWidth="6"
        mask="url(#path-4-inside-2)"
      />
      <mask id="path-5-inside-3" fill="white">
        <rect x="32" y="22" width="16" height="8" rx="2" />
      </mask>
      <rect
        x="32"
        y="22"
        width="16"
        height="8"
        rx="2"
        stroke="#262626"
        strokeWidth="6"
        mask="url(#path-5-inside-3)"
      />
    </svg>
  );
};
