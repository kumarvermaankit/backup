import * as React from 'react';

export const DefaultMentee: React.FC = () => {
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
        <ellipse
          cx="66.5455"
          cy="42.3624"
          rx="2.54545"
          ry="5.09091"
          fill="#F8BD4F"
        />
        <ellipse
          cx="33.4546"
          cy="42.3624"
          rx="2.54545"
          ry="5.09091"
          fill="#F8BD4F"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.9464 41.0852C72.59 52.7064 62.3165 61.454 50 61.454C37.6836 61.454 27.4103 52.7067 25.0537 41.0856C23.3558 40.9511 22 38.1558 22 34.7271C22 31.2125 23.4245 28.3634 25.1818 28.3634C25.3533 28.3634 25.5217 28.3906 25.6859 28.4428C28.9047 18.0745 38.5731 10.5449 50 10.5449C61.4268 10.5449 71.095 18.0743 74.314 28.4424C74.4782 28.3901 74.6466 28.363 74.8182 28.363C76.5755 28.363 78 31.2121 78 34.7266C78 38.1552 76.6442 40.9506 74.9464 41.0852Z"
          fill="url(#paint0_linear)"
        />
        <circle cx="41.0909" cy="33.4542" r="5.09091" fill="white" />
        <circle cx="60.1817" cy="33.4542" r="5.09091" fill="white" />
        <circle cx="41.0909" cy="33.4537" r="2.54545" fill="#042039" />
        <circle cx="60.1819" cy="33.4537" r="2.54545" fill="#042039" />
      </g>
      <path
        d="M43.6365 47.4551C44.485 48.3036 46.1819 50.0005 50.0001 50.0005C55.091 50.0005 57.0001 48.3036 57.6365 47.4551"
        stroke="#042039"
        stroke-width="2.54545"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="75.4545"
          y1="10.5449"
          x2="74.1818"
          y2="61.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6DEF3" />
          <stop offset="1" stop-color="#317EC2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
