import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';

export interface Points {
  point: string;
}

export interface INumberSectionProps {
  title?: string;
  subTitle?: string;
  number?: string;
  reverse?: string;
  points?: Points[];
}

const NumberSection: React.FC<INumberSectionProps> = (props) => {
  const { number, title, subTitle, points, reverse } = props;
  const newArr = points?.map((p) => p.point);

  return (
    <OverviewSection reverse={reverse}>
      <div>
        <Circle reverse={reverse}>
          <Text type="hl" bold size="8vw">
            {number}
          </Text>
        </Circle>
      </div>
      <div>
        <Text type="h2">{title}</Text>
        {subTitle ? (
          <Text type="h3">{subTitle}</Text>
        ) : (
          <Text type="h3">
            {newArr?.map((n, i) => (
              <>
                <span>{`${i + 1}. `}</span>
                {n}
                <br />
                <br />
              </>
            ))}
          </Text>
        )}
      </div>
    </OverviewSection>
  );
};

export default NumberSection;

const OverviewSection = styled.div<{ reverse: string | undefined }>`
  margin: 0em 8vw 10vh 8vw;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'none')};

  h2 {
    line-height: 7vh;
    font-size: 2.5vw;
  }

  h3 {
    margin-top: 4vh;
    font-family: Roboto;
    line-height: 7vh;
    font-weight: 400;
    font-size: 1.7vw;

    span {
      line-height: 7vh;
      font-size: 2.5vw;
    }
  }

  @media (max-width: 530px) {
    margin: 8vh 0% 0% 0%;

    h2 {
      line-height: 5vh;
      font-size: 5vw;
    }

    h3 {
      margin-top: 3vh;
      line-height: 5vh;
      font-size: 3.5vw;

      span {
        line-height: 5vh;
        font-size: 5vw;
      }
    }
  }
`;

const Circle = styled.div<{ reverse: string | undefined }>`
  background: #0c3559;
  height: 14vw;
  width: 14vw;
  border-radius: 50%;
  margin-right: ${(props) => (props.reverse ? '0em' : '8vw')};
  margin-left: ${(props) => (props.reverse ? '8vw' : '0em')};

  h1 {
    line-height: 14vw;
    color: #f2a922;
  }

  @media (max-width: 530px) {
    height: 30vw;
    width: 30vw;
    margin-right: ${(props) => (props.reverse ? '0vw' : '2vw')};
    margin-left: ${(props) => (props.reverse ? '2vw' : '0vw')};

    h1 {
      line-height: 15vh !important;
    }
  }
`;
