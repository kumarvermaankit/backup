import * as React from 'react';

export const DiamondBadge: React.FC = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.3335" cy="12" r="12" fill="#E9E9E9" />
      <circle
        cx="12.3336"
        cy="12.0001"
        r="10.2857"
        fill="url(#paint0_linear)"
      />
      <path
        d="M9.57686 10.5112H5.52246L12.3063 18.4213L9.57686 10.5112Z"
        fill="#CBCBCB"
      />
      <path
        d="M15.0491 10.5112H19.1035L12.3197 18.4213L15.0491 10.5112Z"
        fill="#A3A3A3"
      />
      <path
        d="M15.0488 10.5112H9.57666L12.3193 18.4213L15.0488 10.5112Z"
        fill="white"
      />
      <path
        d="M9.57686 10.5112H5.52246L8.34464 7L9.57686 10.5112Z"
        fill="#A3A3A3"
      />
      <path
        d="M15.0491 10.5112H19.1035L16.2813 7L15.0491 10.5112Z"
        fill="#CBCBCB"
      />
      <path
        d="M9.57646 10.5112L8.34424 7H12.3191L9.57646 10.5112Z"
        fill="white"
      />
      <path
        d="M15.0622 10.5112L16.2944 7H12.3195L15.0622 10.5112Z"
        fill="#E9E9E9"
      />
      <path
        d="M9.57666 10.5112L12.3193 7L15.062 10.5112H9.57666Z"
        fill="#CBCBCB"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="20.8335"
          y1="1"
          x2="2.3335"
          y2="20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CBCBCB" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};
