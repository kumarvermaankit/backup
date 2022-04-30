import * as React from 'react';
import styled from 'styled-components';

export interface IBubbleProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  color?: string;
  size?: string;
}

export const Bubble: React.FC<IBubbleProps> = (props) => {
  return (
    <>
      <BubbleBody
        size={props.size}
        color={props.color}
        style={props.style || {}}
      />
    </>
  );
};

const BubbleBody = styled.div<{
  size: string | undefined;
  color: string | undefined;
}>`
  height: ${(props) => props.size || '100px'};
  width: ${(props) => props.size || '100px'};
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  background: ${(props) => props.color || '#DDC2E4'};
`;
