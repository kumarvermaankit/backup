import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';
import { Text, Icon, IconTypes } from '@indywise/uikit';
import GreenLine from '../../../assets/GreenLine.svg';
import CreamBg from '../../../assets/CreamBg.svg';
import { HashLink as Link } from 'react-router-hash-link';
import CircleButton from './ButtonCircle';
import AOSWrapper from '../../../components/AOSWrapper';
import Carousel from 'react-elastic-carousel';
import { KeyHighlightsArray } from '../constants/data';

const KeyHighlight: React.FC = () => {
  useEffect(() => {
    AOS.init({
      delay: 400
    });
  }, []);

  return (
    <>
      <Container>
        <Flex>
          <AOSWrapper styleValue="fade-up">
            <Text type="h1" color="#225219">
              Key Highlights
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
        <img src={GreenLine} alt="greenline" />
        <AOSWrapper styleValue="fade-left">
          <Contain>
            <SecondHor>
              {KeyHighlightsArray.map((data) => {
                return (
                  <Each>
                    <Icon icon={data.icon as IconTypes} />
                    <img src={CreamBg} alt="highlight" />
                    <Text type="h3" color="#116E3B">
                      {data.title}
                    </Text>
                    <Text type="subtitle" color=" #209755">
                      {data.subtitle}
                    </Text>
                  </Each>
                );
              })}
            </SecondHor>
            <Second>
              <Carousel
                isRTL={false}
                itemsToShow={3}
                showEmptySlots={true}
                enableMouseSwipe={false}
                itemPadding={[0, 0, 0, 100]}
              >
                {KeyHighlightsArray.map((data) => {
                  return (
                    <Each>
                      <Icon icon={data.icon as IconTypes} />
                      <img src={CreamBg} alt="highlight" />
                      <Text type="h3" color="#116E3B">
                        {data.title}
                      </Text>
                      <Text type="subtitle" color=" #209755">
                        {data.subtitle}
                      </Text>
                    </Each>
                  );
                })}
              </Carousel>
            </Second>
            <SecondSmall>
              {KeyHighlightsArray.map((data) => {
                return (
                  <Each>
                    <Icon icon={data.icon as IconTypes} />
                    <img src={CreamBg} alt="highlight" />
                    <Text type="h3" color="#116E3B">
                      {data.title}
                    </Text>
                    <Text type="subtitle" color=" #209755">
                      {data.subtitle}
                    </Text>
                  </Each>
                );
              })}
            </SecondSmall>
          </Contain>
        </AOSWrapper>
      </Container>
    </>
  );
};

export default KeyHighlight;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #e4f6e1;
  display: block;
  overflow: hidden;
  padding-top: 3rem;

  img {
    margin-left: 4vw;
    margin-top: 5vh;
    margin-top: 10px;
    width: 100%;
  }

  h1 {
    width: 30vw;
    margin-left: 4vw;
    font-weight: normal;
  }

  h2 {
    margin: 15vh auto 10vh auto;
    margin-top: 10px;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 530px) {
    height: auto;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vw;

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
  margin: 50px 4vw 15px 0vw;
  justify-content: space-between;
  display: block;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0 !important;
  }
   {
    overflow: -moz-scrollbars-none;
  }
   {
    -ms-overflow-style: none;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    margin: auto;
  }

  @media (max-width: 530px) {
    margin: auto;
    width: 70%;
  }
`;

const Second = styled.div`
  display: flex;
  margin: 30px 4vw;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SecondHor = styled.div`
  display: none;
  @media (min-width: 530px) and (max-width: 1024px) {
    display: flex;
    margin: 30px 4vw;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const SecondSmall = styled.div`
  display: none;
  @media (max-width: 529px) {
    display: flex;
    margin: 5vh 4vw;
    justify-content: space-between;
    scroll-snap-type: x mandatory;
  }
`;

const Each = styled.div`
  width: 24vw;
  text-align: center;
  margin-right: 9vw;
  img {
    margin-left: -2vw;
    z-index: 0;
  }
  h3 {
    margin-top: -8vh;
  }
  span {
    svg {
      margin-right: 3vw;
      width: auto;
      height: 80px;
      margin-bottom: 0.5vh;
    }
  }

  h2 {
    width: 24vw;
    margin: 30px auto;
    font-weight: normal;
    line-height: 28px;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;

    span {
      svg {
        margin-bottom: 2vh;
      }
    }

    h3 {
      margin-top: auto;
    }

    h2 {
      margin: 2vh auto 4vh auto;
      width: auto;
    }
  }

  @media (max-width: 530px) {
    width: 100%;
    height: auto;
    margin: 0 20vw;

    h3 {
      font-size: 24px;
      line-height: 32px;
      margin-top: -45px;
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
