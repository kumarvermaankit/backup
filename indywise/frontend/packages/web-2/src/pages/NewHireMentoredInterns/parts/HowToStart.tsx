import * as React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import ReadyTS from '../../../assets/StartRocket.svg';
import ButtonPart from './ButtonPart';

const ReadyToStart: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={ReadyTS} alt="ready to start" />
        <Div>
          <Text type="h2" color="#262626">
            How To Start?
          </Text>
          <Text type="body" color="#262626">
            1. Fill the interest form
          </Text>
          <Text type="body" color="#262626">
            2. Our Business Experience Manager will get in touch with you to
            configure a tailored package for your needs
          </Text>
          <ButtonPart />
        </Div>
      </Wrapper>
    </Container>
  );
};

export default ReadyToStart;

const Div = styled.div`
  h2 {
    margin-bottom: 3vh;
  }
  p {
    margin-bottom: 2vh;
    line-height: 28px;
  }
  button {
    span {
      p {
        margin-bottom: auto;
      }
      i {
        span {
          svg {
            line {
              stroke: #262626;
            }
          }
        }
      }
    }
  }

  @media (max-width: 530px) {
    margin: 5vh 10vw;

    h2 {
      font-size: 8vw;
    }

    p {
      text-align: left;
      margin-bottom: 2vh;
    }
  }
`;

const Container = styled.div`
  background: #f8fbfd;
  margin-bottom: 10vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12vh 12vw;

  img {
    width: 20vw;
    margin-right: 10vw;
  }

  @media (max-width: 530px) {
    margin: 5vh auto;
    text-align: center;
    display: block;

    img {
      width: 40%;
      margin: auto;
    }
  }
`;
