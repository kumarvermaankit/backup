import React from 'react';
import 'aos/dist/aos.css';

interface AOSProps {
  styleValue: string;
  offset?: number;
  easing?: string;
}

let AOSWrapper: React.FC<AOSProps> = (props) => {
  return (
    <div
      data-aos={props.styleValue}
      data-aos-offset={props.offset}
      data-aos-easing={props.easing}
    >
      {props.children}
    </div>
  );
};

export default AOSWrapper;
