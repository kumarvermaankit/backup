import * as React from 'react';

export const DefaultMentor: React.FC = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#FAEFD9" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <circle cx="50" cy="50" r="50" fill="#FAEFD9" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="50" cy="94" r="48" fill="#219A99" />
        <path d="M53.5 62L57.5 58H44L48 62H53.5Z" fill="white" />
        <path
          d="M45 103.5L48 64H53.5L57 103.5L51 109.5L45 103.5Z"
          fill="white"
        />
        <ellipse cx="63" cy="41" rx="2" ry="4" fill="#F8BD4F" />
        <ellipse cx="37" cy="41" rx="2" ry="4" fill="#F8BD4F" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.6007 39.996C67.7492 49.127 59.6772 56 50 56C40.3228 56 32.2508 49.127 30.3993 39.996C29.0653 39.8903 28 37.6939 28 35C28 32.2386 29.1193 30 30.5 30C30.6348 30 30.7671 30.0213 30.8961 30.0624C33.4253 21.916 41.0218 16 50 16C58.9782 16 66.5747 21.916 69.1039 30.0624C69.2329 30.0213 69.3652 30 69.5 30C70.8807 30 72 32.2386 72 35C72 37.6939 70.9347 39.8903 69.6007 39.996Z"
          fill="url(#paint0_linear)"
        />
        <circle cx="43" cy="34" r="4" fill="white" />
        <circle cx="58" cy="34" r="4" fill="white" />
        <circle cx="43" cy="34" r="2" fill="#042039" />
        <circle cx="58" cy="34" r="2" fill="#042039" />
      </g>
      <path
        d="M45 45C45.6667 45.6667 47 47 50 47C54 47 55.5 45.6667 56 45"
        stroke="#042039"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M36 28C37.2 27.2 37.8333 25 38 23C36.1667 22.1667 31.9 19 29.5 21C26.5 23.5 27.5 32 28.5 31C29.3 30.2 30.1667 30 30.5 30V36C31 35.8334 32.1 35 32.5 33C33 30.5 34.5 29 36 28Z"
        fill="#042039"
      />
      <path
        d="M49 22C44.2 22 39.3333 22.8333 38 22.5C36.8 22.5 35 21 32.5 20.0001C34 14 39 6.49981 52 6.99981C65 7.49981 70 23 70.5 24.5C70.9 25.7 69.6667 28.6666 69 30V33.5L68 34.5C68 29 61.5 20 57.5 19.5C53.5 19 55 22 49 22Z"
        fill="#042039"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="70"
          y1="16"
          x2="69"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6DEF3" />
          <stop offset="1" stop-color="#317EC2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
