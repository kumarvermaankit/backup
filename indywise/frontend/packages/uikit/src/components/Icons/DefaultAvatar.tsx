import * as React from 'react';

export const DefaultAvatar: React.FC = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#C6DEF3" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <circle cx="50" cy="50" r="50" fill="#C6DEF3" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="50" cy="82" r="36" fill="#19588F" />
        <circle cx="50" cy="36" r="20" fill="#F2A922" />
        <ellipse cx="63" cy="39" rx="2" ry="4" fill="#F8BD4F" />
        <ellipse cx="37" cy="39" rx="2" ry="4" fill="#F8BD4F" />
        <circle cx="42" cy="32" r="3" fill="#FAD897" />
        <circle cx="58" cy="32" r="3" fill="#FAD897" />
        <circle cx="42" cy="31" r="1" fill="#0C3559" />
        <circle cx="58" cy="31" r="1" fill="#0C3559" />
        <path
          d="M42 44C43.0256 45 45.5692 47 50 47C54.4308 47 57.3846 45 58 44"
          stroke="#FAD897"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
