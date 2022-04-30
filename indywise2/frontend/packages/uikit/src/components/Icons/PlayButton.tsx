import * as React from 'react';

export const PlayButton: React.FC = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="100" fill="white" />
      <path
        d="M148 93.0718C153.333 96.151 153.333 103.849 148 106.928L82 145.033C76.6667 148.113 70 144.264 70 138.105V61.8949C70 55.7365 76.6667 51.8875 82 54.9667L148 93.0718Z"
        fill="#5A9FDB"
      />
    </svg>
  );
};
