import * as React from 'react';

export const MenteeDefaultAvatar: React.FC = () => {
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
        <circle cx="50" cy="94" r="48" fill="#19588F" />
        <ellipse
          cx="66.5455"
          cy="42.3639"
          rx="2.54545"
          ry="5.09091"
          fill="#F8BD4F"
        />
        <ellipse
          cx="33.4546"
          cy="42.3639"
          rx="2.54545"
          ry="5.09091"
          fill="#F8BD4F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.9464 41.0856C72.59 52.7069 62.3165 61.4545 50 61.4545C37.6836 61.4545 27.4103 52.7071 25.0537 41.0861C23.3558 40.9516 22 38.1562 22 34.7275C22 31.213 23.4245 28.3639 25.1818 28.3639C25.3533 28.3639 25.5217 28.391 25.6859 28.4433C28.9047 18.075 38.5731 10.5454 50 10.5454C61.4268 10.5454 71.095 18.0748 74.314 28.4429C74.4782 28.3906 74.6466 28.3635 74.8182 28.3635C76.5755 28.3635 78 31.2126 78 34.7271C78 38.1557 76.6442 40.9511 74.9464 41.0856Z"
          fill="url(#paint0_linear)"
        />
        <circle cx="41.0909" cy="33.4547" r="5.09091" fill="white" />
        <circle cx="60.1817" cy="33.4542" r="5.09091" fill="white" />
        <circle cx="41.0914" cy="33.4541" r="2.54545" fill="#042039" />
        <circle cx="60.1822" cy="33.4541" r="2.54545" fill="#042039" />
      </g>
      <path
        d="M43.6367 47.4546C44.4852 48.3031 46.1822 50 50.0004 50C55.0913 50 57.0004 48.3031 57.6367 47.4546"
        stroke="#042039"
        stroke-width="2.54545"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="75.4545"
          y1="10.5454"
          x2="74.1818"
          y2="61.4545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6DEF3" />
          <stop offset="1" stop-color="#317EC2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
