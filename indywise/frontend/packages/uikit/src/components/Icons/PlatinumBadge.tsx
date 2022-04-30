import * as React from 'react';

export const PlatinumBadge: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#E9E9E9" />
      <circle
        cx="12.0001"
        cy="12.0001"
        r="10.2857"
        fill="url(#paint0_linear)"
      />
      <path
        d="M12.1128 4.88721L16.2931 12.1127L12.1128 19.3383L7.70028 12.1127L12.1128 4.88721Z"
        fill="url(#paint1_diamond)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="19"
          y1="2.50012"
          x2="3"
          y2="20.5001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A3A3A3" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <radialGradient
          id="paint1_diamond"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.1128 12.1128) rotate(129.041) scale(12.0861)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#E9E9E9" />
        </radialGradient>
      </defs>
    </svg>
  );
};
