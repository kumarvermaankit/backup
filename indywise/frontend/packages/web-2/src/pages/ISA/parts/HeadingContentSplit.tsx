import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

interface IHeadingContentSplitProps {
  heading: string;

  // If set to `true` then the heading will have a Cirlce BG otherwise an Underline.
  circleHeading?: boolean;

  circleColor?: string;
}

const HeadingContentSplit: React.FC<IHeadingContentSplitProps> = (props) => {
  const HeadingWithUnderline = (
    <SVGDiv>
      <Text type="h3">{props.heading}</Text>
      <svg
        width="437"
        height="12"
        viewBox="0 0 437 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="6"
          x2="431"
          y2="6"
          stroke="#F2A922"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="431" cy="6" r="6" fill="#F2A922" />
      </svg>
    </SVGDiv>
  );

  const HeadingWithCircleBg = (
    <CircleBg bgColor={props.circleColor}>
      <Text type="h2">{props.heading}</Text>
    </CircleBg>
  );

  const Heading = props.circleHeading
    ? HeadingWithCircleBg
    : HeadingWithUnderline;

  return (
    <Wrapper>
      <HeadingContainer circleHeading={props.circleHeading}>
        {Heading}
      </HeadingContainer>
      <ContentContainer circleHeading={props.circleHeading}>
        {props.children}
      </ContentContainer>
    </Wrapper>
  );
};

export default HeadingContentSplit;

const Wrapper = styled.div`
  display: flex;
  margin: auto auto 5vh auto;

  @media (max-width: 530px) {
    width: 94vw;
  }
`;

const SVGDiv = styled.div`
  width: min-content;

  @media (max-width: 530px) {
    svg {
      width: 30vw;
    }
  }
`;

const HeadingContainer = styled.div<{ circleHeading: boolean | undefined }>`
  margin: ${(props) => (props.circleHeading ? '0 0 0 8vw' : '0 6vw 0 8vw')};

  h2 {
    font-size: 3vw;
    line-height: 5vw;
  }

  h3 {
    font-size: 2.5vw;
    line-height: 6vh;
  }

  @media (max-width: 530px) {
    margin: 0;

    h3 {
      font-size: 4vw;
      line-height: 5vh;
    }
  }
`;

const ContentContainer = styled.div<{ circleHeading: boolean | undefined }>`
  margin-right: 8vw;
  margin: ${(props) => (props.circleHeading ? 'auto 8vw auto 6vw' : '')};

  p {
    font-size: 1.7vw;
    line-height: 6vh;
  }

  @media (max-width: 530px) {
    margin: auto 4vw;

    p {
      font-size: 4vw;
      line-height: 5vh;
    }
  }
`;

const CircleBg = styled.div<{ bgColor: string | undefined }>`
  height: 18vw;
  width: 18vw;
  border-radius: 50%;
  background: ${(props) => props.bgColor || 'red'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 530px) {
    height: 30vw;
    width: 30vw;
    h2 {
      font-size: 4vw;
    }
  }
`;
