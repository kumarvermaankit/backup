import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import StartRocket from '../../../assets/StartRocket.png';

const HowToStart: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        How to Start
      </Text>
      <Container>
        <div>
          <img src={StartRocket} alt="How to Start" />
        </div>
        <Center>
          <Flex>
            <Text type="subtitle" size="1.5vw" bold>
              1.
            </Text>
            <Text type="body" size="1.5vw">
              Fill the interest form
              <span style={{}} onClick={showModal}>
                here
              </span>
            </Text>
          </Flex>
          <Flex>
            <Text type="subtitle" size="1.5vw" bold>
              2.
            </Text>
            <Text type="body" size="1.5vw">
              Our Business Experience Manager will get in touch with you to
              configure a tailored package for your needs
            </Text>
          </Flex>
          <Button onClick={showModal}>
            <span>Contact Sales</span>
          </Button>
        </Center>
      </Container>
    </Wrapper>
  );
};

export default HowToStart;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 0;
  h1 {
    line-height: 6vw;
    text-align: center;
    width: 100%;
    color: #042039;
  }

  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 2rem;
    }
  }

  @media (max-width: 359px) {
    h1 {
      width: 90vw;
      margin: 5vh auto 2vh auto;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 3vh;
  @media (max-width: 530px) {
    h2 {
      line-height: 24px !important;
      font-size: 4vw;
    }
    p {
      font-size: 4vw !important;
      line-height: 24px !important;
      margin-top: 0 !important;
    }
  }
`;

const Container = styled.div`
  margin: 8vh 5vw 10vh 5vw;
  display: flex;
  div {
    img {
      width: 26vw;
      height: 26vw;
    }
  }
  @media (max-width: 530px) {
    margin: 10vh 5vw;
    display: block;
    div {
      img {
        width: 90vw;
        height: 90vw;
      }
    }
  }
`;

const Center = styled.div`
  align-self: center;
  margin-left: 5vw;
  font-weight: 400;
  h1 {
    display: inherit;
  }
  h2 {
    line-height: 48px;
    margin-right: 1.5vw;
    color: #000;
  }
  p {
    line-height: 48px;
    display: inherit;
    span {
      cursor: pointer;
      text-decoration: none;
      color: #a16a06;
      margin-left: 0.6vw;
    }
  }
  @media (max-width: 530px) {
    margin: 5vh auto;
    h1 {
      display: none;
    }
    p {
      margin-top: 3em;
      font-size: 24px;
      line-height: 48px;
    }
  }
`;

const Button = styled.button`
  background: #f2a922;
  box-shadow: 0px 8px 16px rgba(242, 169, 34, 0.32);
  border-radius: 8px;
  padding: 1vh 1vw;
  border: 0;
  cursor: pointer;
  span {
    font-family: Roboto;
    font-size: 2vw;
    line-height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #042039;
  }
  @media (max-width: 530px) {
    padding: 0vh 5vw;
    span {
      font-family: Roboto;
      font-size: 5vw;
      line-height: 48px;
    }
  }
`;
