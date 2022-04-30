import * as React from 'react';

export const CircularAdd: React.FC = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z"
        fill="white"
      />
      <path
        d="M14 22H30M22 30L22 14"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M22 43C10.402 43 1 33.598 1 22H-1C-1 34.7025 9.29745 45 22 45V43ZM43 22C43 33.598 33.598 43 22 43V45C34.7025 45 45 34.7025 45 22H43ZM22 1C33.598 1 43 10.402 43 22H45C45 9.29745 34.7025 -1 22 -1V1ZM22 -1C9.29745 -1 -1 9.29745 -1 22H1C1 10.402 10.402 1 22 1V-1Z"
        fill="#262626"
      />
    </svg>
  );
};
