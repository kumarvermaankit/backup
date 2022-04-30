import * as React from 'react';

export const Close: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {' '}
      <line
        x1="4.41421"
        y1="4"
        x2="21"
        y2="20.5858"
        stroke="#DD5D00"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="24.4558"
        y2="-1"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 21 4)"
        stroke="#DD5D00"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
