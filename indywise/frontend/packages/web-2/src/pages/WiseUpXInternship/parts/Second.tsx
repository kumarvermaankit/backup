import React from 'react';
import AOS from 'aos';
import AOSWrapper from '../../../components/AOSWrapper';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Women from '../../../assets/Women.svg';
import { useEffect } from 'react';

const Second: React.FC = () => {
  useEffect(() => {
    AOS.init({
      delay: 400
    });
  }, []);
  return (
    <>
      <Container>
        <Contain>
          <Left>
            <AOSWrapper styleValue="skew-anim">
              <img src={Women} alt="wise up we help you" />
            </AOSWrapper>
          </Left>
          <Right>
            <AOSWrapper styleValue="fade-right" easing="ease-in-out">
              <Text type="h3" color="#262626">
                100% personalized, customized, live and mentoring driven.
              </Text>
            </AOSWrapper>
            <AOSWrapper styleValue="fade">
              <Line />
            </AOSWrapper>
            <AOSWrapper styleValue="fade-right" easing="ease-in-out">
              <Text type="body" color="#4B4B4B">
                We pair you with a dedicated mentor. Get a friendly hand to help
                you through your journey with live, unlimited mentoring, course
                recommendations, and much more
              </Text>
            </AOSWrapper>
            <AOSWrapper styleValue="fade-right" easing="ease-in-out">
              <Text type="h3" color="#262626">
                Be part of a live project and get a certificate of internship.
              </Text>
            </AOSWrapper>
            <AOSWrapper styleValue="fade">
              <Line />
            </AOSWrapper>
            <AOSWrapper styleValue="fade-right" easing="ease-in-out">
              <Text type="body" color="#4B4B4B">
                You learn through practice, we will place you on a live project
                (with real-life results) and provide you a certificate of
                internship on completion.
              </Text>
            </AOSWrapper>
          </Right>
          <TabLeft>
            <img src={Women} alt="wise up we help you" />
          </TabLeft>
        </Contain>
      </Container>
    </>
  );
};

export default Second;

const Container = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
`;

const Line = styled.div`
  border: 4px solid #f2a922;
  width: 64px;
  margin: 16px 0px;
  border-radius: 5px;
`;

const Contain = styled.div`
  display: flex;
  margin: 25vh 10vw 20vh 10vw;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 530px) and (max-width: 1024px) {
    display: block;
    margin: 5vh 10vw;
  }

  @media (max-width: 530px) {
    margin: 130px 10vw;
  }
`;

const Left = styled.div`
  margin-right: 10vw;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TabLeft = styled.div`
  display: none;

  @media (min-width: 530px) and (max-width: 1024px) {
    display: block;
    margin-top: 5vh;
    text-align: center;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const Right = styled.div`
  h1,
  h3 {
    margin-top: 3vh;
    font-weight: normal;
    margin-bottom: 4vh;
  }

  h3 {
    margin-bottom: 3vh;
  }

  p {
    line-height: 28px;
    margin: 3vh 0vw 6vh 2vw;
  }

  div {
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
  }

  @media (max-width: 1024px) {
    width: 100%;

    h3 {
      font-size: 32px;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 20px;
      line-height: 28px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
