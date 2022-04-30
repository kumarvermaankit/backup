import React, { useEffect } from 'react';
import AOS from 'aos';
import AOSWrapper from '../../../components/AOSWrapper';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import GirlOnbike from '../../../assets/GirlOnBike.svg';
import BikerMobile from '../../../assets/BikerMobile.svg';
import ButtonPart from './ButtonPart';

const LandingArea: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Contain>
        <Left>
          <AOSWrapper
            styleValue="zoom-up-right"
            offset={100}
            easing="ease-in-out"
          >
            <Text type="h1" color="#317EC2">
              Get a real Upskilling
            </Text>
            <br />
            <Text type="h3" color="#367229">
              Supercharge your career readiness.
              <br />
              Set your own goals.
            </Text>
            <Text type="subtitle" color="#727272">
              Work on real projects starting tomorrow and upskill yourself with
              IndyWise’s unique competency framework and mentoring ecosystem.
              <LimitedStyle>{` LIMITED PLACES !`}</LimitedStyle>
            </Text>
            <ButtonPart />
          </AOSWrapper>
        </Left>
      </Contain>
      {window.innerWidth < 531 ? (
        <img src={BikerMobile} alt="wise up x top" />
      ) : (
        <img src={GirlOnbike} alt="wise up x top" />
      )}
    </Container>
  );
};

export default LandingArea;

const LimitedStyle = styled.div`
  color: #367229;
  font-weight: bold;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: auto;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    z-index: 0;
    height: auto;
    justify-content: center;
    img {
      height: auto;
      margin-top: 72px;
      z-index: -1;
    }
  }

  @media (max-width: 530px) {
    img {
      z-index: -1;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  margin: 10vh 10vw auto 10vw;
  height: 100%;
  justify-content: space-between;

  @media (min-width: 530px) and (max-width: 1024px) {
    display: block;
    margin: 70px 0vw auto 0vw;

    div {
      h1 {
        z-index: 1;
        font-size: 6vw;
        text-align: center;
        line-height: 8vw;
      }
      h3 {
        line-height: 4vw;
        font-size: 2vw;
        text-align: center;
      }
    }
  }

  @media (max-width: 530px) {
    margin: 100px 10vw auto 10vw;
    div {
      h1,
      h2 {
        text-align: left;
      }
    }
  }
`;

const Left = styled.div`
  z-index: 1;
  width: 45%;
  margin: auto 0;

  h1 {
    line-height: 56px;
    font-size: 48px;
    font-weight: normal;
  }

  h2 {
    margin: 3vh 0vw;
  }

  h3 {
    // font-size: 2vw;
    // line-height: 5vh;
    margin-bottom: 3vh;
  }

  button {
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

  @media (min-width: 530px) and (max-width: 1024px) {
    z-index: 1;
    margin-left: 5vw;
    text-align: center;
    margin-bottom: 5vh;
    h1 {
      margin-top: 10vh;
      font-size: 2vw;
    }
    div {
      text-align: center;
    }
    button {
      margin-bottom: 2vh;
    }
  }

  @media (max-width: 530px) {
    width: auto;
    margin: 10px 0;
  }
`;
