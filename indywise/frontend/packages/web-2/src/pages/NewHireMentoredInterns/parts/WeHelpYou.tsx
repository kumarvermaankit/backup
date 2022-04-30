import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WhuWiseup from '../../../assets/Internboy.svg';
import WhuBg from '../../../assets/WhuBg.svg';
import ButtonPart from './ButtonPart';

const WeHelpYou: React.FC = () => {
  return (
    <>
      <Container>
        <Image src={WhuBg} alt="wise up we help you bg" />
        <Contain>
          <Left>
            <Text type="h2" color="#262626">
              Who are Mentored Interns?
            </Text>
            <Text type="body" color="#4B4B4B">
              Mentored Interns are selected from hundreds of final year
              applicants worldwide, filtered through our rigorous assessment
              process and empowered with our WiseUp program so that they can
              deliver the work you need them to do. We tailor the KPIs and
              Competency Framework to your specific needs so that you can track
              and evaluate how these are being fulfilled.
            </Text>
            <ButtonPart />
          </Left>
          <Right>
            <img src={WhuWiseup} alt="wise up we help you" />
          </Right>
          <TabLeft>
            <img src={WhuWiseup} alt="wise up we help you" />
          </TabLeft>
        </Contain>
      </Container>
    </>
  );
};

export default WeHelpYou;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #f8fbfd;
`;

const Image = styled.img`
  position: absolute;
  width: 30%;
  z-index: 0;
`;

const Contain = styled.div`
  display: flex;
  margin: 20vh 10vw;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 770px) {
    display: block;
    margin: 10vh 10vw;
  }
`;

const Right = styled.div`
  margin-left: 10vw;

  @media (max-width: 770px) {
    display: none;
  }
`;

const TabLeft = styled.div`
  display: none;

  @media (max-width: 770px) {
    display: block;
    margin-top: 5vh;
    text-align: center;
  }

  @media (max-width: 530px) {
    img {
      width: 50vw;
    }
  }
`;

const Left = styled.div`
  z-index: 1;
  h1,
  h2 {
    font-weight: normal;
    margin-bottom: 5vh;
  }

  h2 {
    margin-bottom: 5vh;
  }

  p {
    line-height: 28px;
  }

  button {
    margin-top: 3vh;
    span {
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

  @media (max-width: 770px) {
    h2 {
      font-size: 6.5vw;
      line-height: 8vw;
    }
  }
`;
