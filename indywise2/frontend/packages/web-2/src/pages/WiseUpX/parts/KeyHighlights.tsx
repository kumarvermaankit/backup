import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import CreamBg from '../../../assets/CreamBg.svg';
import { HashLink as Link } from 'react-router-hash-link';
import CircleButton from './ButtonCircle';
import AOSWrapper from '../../../components/AOSWrapper';
import Carousel from 'react-elastic-carousel';

const KeyHighlight: React.FC = () => {
  useEffect(() => {
    AOS.init({
      delay: 400
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3 }
  ];

  return (
    <>
      <Container>
        <Flex>
          <AOSWrapper styleValue="fade-up">
            <Text type="h1" color="#262626">
              Key <br />
              Highlights
            </Text>
          </AOSWrapper>
          <Pricing>
            <div>
              <Link to="/wiseupx/#pricing">
                <AOSWrapper styleValue="fade">
                  <Text type="body" color="#A16A06">
                    Check Pricing
                  </Text>
                </AOSWrapper>
              </Link>
            </div>
            <ButtonWrapper>
              <AOSWrapper styleValue="zoom-in">
                <CircleButton text="Apply Now" />
              </AOSWrapper>
            </ButtonWrapper>
          </Pricing>
        </Flex>
        <Line>
          <div></div>
          <div></div>
        </Line>
        <AOSWrapper styleValue="fade-left">
          <Contain>
            <Carousel isRTL={false} breakPoints={breakPoints}>
              <Each>
                <Icon icon="time" />
                <Text type="h3" color="#19588F">
                  Program Duration
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  3 Months (12 weeks)
                </Text>
              </Each>
              <Each>
                <Icon icon="gcomputer" />
                <Text type="h3" color="#19588F">
                  12 Live Personalized Mentoring Sessions
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  by mentors who are industry experts
                </Text>
              </Each>
              <Each>
                <Icon icon="ladder" />
                <Text type="h3" color="#19588F">
                  Unique career opportunities
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Mentored and UpSkilled professionals have higher chance of
                  promotions or find it easy to switch jobs
                </Text>
              </Each>
              <Each>
                <Icon icon="unlimited" color="#19588F" />
                <Text type="h3">Unlimited Mentoring</Text>
                <Text type="subtitle" color="#4B4B4B">
                  Unlimited mentoring support through emails,messages and calls
                </Text>
              </Each>
              <Each>
                <Icon icon="progressA" />
                <Text type="h3" color="#19588F">
                  15 Certificates and Reports
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Exclusive reports, LoR and certificates
                </Text>
              </Each>
              <Each>
                <Icon icon="forecast" />
                <Text type="h3" color="#19588F">
                  Career Forecast
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Dynamic career progression forecasts
                </Text>
              </Each>
            </Carousel>
          </Contain>
        </AOSWrapper>
      </Container>
    </>
  );
};

export default KeyHighlight;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;

  img {
    margin-left: 4vw;
    margin-top: 4vh;
    width: 100%;
  }

  h1 {
    margin-left: 4vw;
    font-weight: normal;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin: 100px 0;
  }

  @media (max-width: 530px) {
    height: auto;
  }
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px 0px 100px;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #5a9fdb;
  }
  div:nth-child(2) {
    width: 100%;
    height: 1px;
    background: #5a9fdb;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    h1 {
      font-size: 40px;
      line-height: 60px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5vw;

  a {
    color: #a16a06;
  }

  @media (max-width: 530px) {
    display: block;
  }
`;

const Contain = styled.div`
  width: 100%;
  display: flex;
  margin: 8vh 0vw 2vh 0vw;
  overflow-x: scroll;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    margin: auto;
  }

  @media (max-width: 530px) {
    margin: auto;
    width: 70%;
  }
`;

const Each = styled.div`
  width: 400px;
  text-align: center;
  h3 {
    font-size: 24px;
    line-height: 32px;
    background: url(${CreamBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 32px 0 16px 0;
  }
  span {
    svg {
      width: auto;
      height: 80px;
    }
  }

  h2 {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 80%;
    height: auto;
    margin: 40px 0;
    span {
      svg {
        margin-bottom: 2vh;
      }
    }
  }

  @media (max-width: 530px) {
    width: 100%;
    height: auto;
    margin: 0 20vw;

    h3 {
      font-size: 24px;
      line-height: 32px;
    }
    h2 {
      font-size: 14px;
      line-height: 20px;
      width: auto;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 2vw;

  a {
    text-decoration: none;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
  }

  @media (max-width: 530px) {
    margin-left: auto;
    margin-top: 10px;

    a {
      button {
        width: 100px;
        height: 100px;
        p {
          font-size: 14px;
          line-height: 2px;
        }
      }
    }
  }
`;
