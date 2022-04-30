import React from 'react';
import styled from 'styled-components';
import { Text, Icon, IconTypes } from '@indywise/uikit';

export interface IValueCardProps {
  title: string;
  subTitle: string;
  icon: IconTypes;
}

const ValueCard: React.FC<IValueCardProps> = (props) => {
  return (
    <Wrapper>
      <IconContainer>
        <Icon icon={props.icon} size="4vw" />
      </IconContainer>
      <Text type="hl" size="2vw">
        {props.title}
      </Text>
      <Text type="body" size="1.2vw">
        {props.subTitle}
      </Text>
    </Wrapper>
  );
};

export default ValueCard;

const Wrapper = styled.div`
  border: 1px solid #030f44;
  box-sizing: border-box;
  border-radius: 20px;
  width: 28vw;
  height: auto;
  padding: 2vw;

  h1 {
    font-family: Roboto;
    line-height: 3vw !important;
    margin-top: 4.5vh !important;
    text-align: left !important;
  }

  p {
    font-family: Roboto;
    line-height: 2vw;
    margin-top: 2vh;
  }

  @media (max-width: 530px) {
    margin: 10vh auto;
    height: auto;
    width: 80vw;
    padding: 5vw;

    h1 {
      margin-top: 2vh !important;
      font-size: 6vw !important;
      line-height: 30px !important;
    }

    p {
      font-size: 3.5vw;
      line-height: 24px;
    }
  }
`;

const IconContainer = styled.div`
  width: 8vw;
  height: 8vw;
  background: #8597dd;
  border-radius: 50%;
  margin-top: -11vh;
  text-align: center;

  i,
  span {
    svg {
      margin-top: 2vw;
    }
  }

  @media (max-width: 530px) {
    width: 24vw;
    height: 24vw;
    margin-top: -10vh;

    i,
    span {
      svg {
        width: 12vw;
        height: 12vw;
        margin-top: 6vw;
      }
    }
  }
`;
