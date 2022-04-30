import * as React from 'react';

export const GoldBadge: React.FC = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.6665" cy="12" r="12" fill="#FAD897" />
      <circle
        cx="12.6666"
        cy="12.0001"
        r="10.2857"
        fill="url(#paint0_linear)"
      />
      <path
        d="M12.1912 6.60635C12.3409 6.14569 12.9926 6.14569 13.1422 6.60635L14.094 9.5355C14.1609 9.74151 14.3529 9.88099 14.5695 9.88099H17.6494C18.1338 9.88099 18.3352 10.5008 17.9433 10.7855L15.4516 12.5958C15.2764 12.7231 15.203 12.9488 15.27 13.1548L16.2217 16.084C16.3714 16.5446 15.8441 16.9277 15.4523 16.643L12.9606 14.8327C12.7854 14.7054 12.5481 14.7054 12.3728 14.8327L9.88113 16.643C9.48928 16.9277 8.96204 16.5446 9.11171 16.084L10.0635 13.1548C10.1304 12.9488 10.0571 12.7231 9.88182 12.5958L7.39013 10.7855C6.99827 10.5008 7.19966 9.88099 7.68402 9.88099H10.7639C10.9805 9.88099 11.1725 9.74151 11.2394 9.5355L12.1912 6.60635Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="21.1665"
          y1="1"
          x2="2.6665"
          y2="20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F2A922" />
          <stop offset="1" stop-color="#FAD897" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="19.6667"
          y1="4.5"
          x2="5.16675"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CB870A" />
          <stop offset="1" stop-color="#F8BD4F" />
        </linearGradient>
      </defs>
    </svg>
  );
};
