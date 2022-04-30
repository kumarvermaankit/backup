import React, { useEffect } from 'react';
import AOS from 'aos';
import AOSWrapper from '../../../components/AOSWrapper';
import styled from 'styled-components';
import { Text, Icon, IconTypes } from '@indywise/uikit';
import GreenLine from '../../../assets/GreenLine.svg';
import { HashLink as Link } from 'react-router-hash-link';
import CircleButton from './ButtonCircle';
import Carousel from 'react-elastic-carousel';
import { IncludesArray } from '../constants/data';

const Includes: React.FC = () => {
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
              Includes
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
              {IncludesArray.map((data) => {
                return (
                  <Each>
                    <Icon icon={data.icon as IconTypes} />
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
                {IncludesArray.map((data) => {
                  return (
                    <Each>
                      <Icon icon={data.icon as IconTypes} />
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
              {IncludesArray.map((data) => {
                return (
                  <Each>
                    <Icon icon={data.icon as IconTypes} />
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

export default Includes;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: block;
  overflow: hidden;
  padding-top: 1.7rem;

  img {
    margin-left: 4vw;
    margin-top: 5vh;
    width: 100%;
  }

  h1 {
    width: 30vw;
    margin-left: 4vw;
    font-weight: normal;
  }

  h2 {
    margin: 15vh auto 10vh auto;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 530px) {
    height: auto;
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

const Each = styled.div`
  width: 25vw;
  text-align: left;
  margin-right: 5vw;

  span {
    svg {
      width: auto;
      height: 80px;
      margin-bottom: 2vh;
    }
  }

  h2 {
    width: 24vw;
    margin: 4vh auto;
    font-weight: normal;
    line-height: 25px;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
    text-align: center;

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
    }
    h2 {
      font-size: 14px;
      line-height: 20px;
      width: auto;
    }
  }
`;

const Second = styled.div`
  display: flex;
  margin: 5vh 4vw;
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
    margin: 5vh 4vw;
    display: flex;
    justify-content: space-between;
    scroll-snap-type: x mandatory;
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
