import * as React from 'react';

export const JobIcons: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <rect
          x="1.33334"
          y="4"
          width="13.3333"
          height="9.33333"
          rx="0.666667"
        />
      </mask>
      <rect
        x="1.33334"
        y="4"
        width="13.3333"
        height="9.33333"
        rx="0.666667"
        stroke="#262626"
        stroke-width="2.33333"
        mask="url(#path-1-inside-1)"
      />
      <line x1="2" y1="8.16699" x2="14" y2="8.16699" stroke="#262626" />
      <mask id="path-3-inside-2" fill="white">
        <rect x="6" y="6.66699" width="4" height="2.66667" rx="0.666667" />
      </mask>
      <rect
        x="6"
        y="6.66699"
        width="4"
        height="2.66667"
        rx="0.666667"
        fill="white"
        stroke="#262626"
        stroke-width="2"
        mask="url(#path-3-inside-2)"
      />
      <mask id="path-4-inside-3" fill="white">
        <rect
          x="5.33334"
          y="2"
          width="5.33333"
          height="2.66667"
          rx="0.666667"
        />
      </mask>
      <rect
        x="5.33334"
        y="2"
        width="5.33333"
        height="2.66667"
        rx="0.666667"
        stroke="#262626"
        stroke-width="2"
        mask="url(#path-4-inside-3)"
      />
    </svg>
  );
};
