import React, { useEffect, useState } from 'react';
import { Icon } from '@indywise/uikit';
import styled from 'styled-components';
// import MainImage from '../assets/images/ImageCircle.png';
import MainImage from '../assets/images/LGBT.png';
import MentorTop from '../assets/images/MentorTop.png';
import ISA from '../assets/images/ISA.png';
import Support from '../assets/images/Support.png';
import Startups from '../assets/images/Startups.png';

interface IBigImageProps {
  bigCircleColor?: string | undefined;
  midCircleColor?: string | undefined;
  smallCircleColor?: string | undefined;
  boxShadow?: string | undefined;
  page?: string;
}

const BigImageMain: React.FC<IBigImageProps> = (props) => {
  const [changeSize, setSize] = useState(false);
  const {
    bigCircleColor,
    midCircleColor,
    smallCircleColor,
    boxShadow,
    page
  } = props;

  const listenScrollEvent = () => {
    if (page) return;

    if (window.scrollY > 30) setSize(true);
    if (window.scrollY < 30) setSize(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BigDiv>
        <BigCircle changeSize={changeSize} bigCircleColor={bigCircleColor} />
      </BigDiv>
      <MidDiv>
        <MidCircle changeSize={changeSize} midCircleColor={midCircleColor} />
      </MidDiv>
      <SmallCircle
        changeSize={changeSize}
        smallCircleColor={smallCircleColor}
        boxShadow={boxShadow}
      />
      <>
        {page === 'about' ? (
          <AboutIcon>
            <Icon icon="w" size="20vw" />
          </AboutIcon>
        ) : page === 'join as a mentor' ? (
          <MentorDiv src={MentorTop} changeSize={changeSize} />
        ) : page === 'isa' ? (
          <ISADiv src={ISA} changeSize={changeSize} />
        ) : page === 'support' ? (
          <SupportDiv src={Support} changeSize={changeSize} />
        ) : page === 'startups' ? (
          <StartupsDiv src={Startups} changeSize={changeSize} />
        ) : (
          <MainImageDiv src={MainImage} changeSize={changeSize} />
        )}
      </>
    </>
  );
};

export default BigImageMain;

const BigCircle = styled.div<{
  bigCircleColor: string | undefined;
  changeSize: boolean;
}>`
  position: absolute;
  width: ${({ changeSize }) => (changeSize ? '81vw' : '80vw')};
  height: ${({ changeSize }) => (changeSize ? '81vw' : '80vw')};
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  top: 20vh;
  background: ${({ bigCircleColor }) => bigCircleColor};
  // box-shadow: 0px 0px 40px rgba(12, 53, 89, 0.2);
  border-radius: 50%;

  @media (max-width: 530px) {
    width: 455px;
    height: 455px;
    top: 301px;
    left: -20vw;
    right: -20vw;
  }

  @media (max-width: 320px) {
    top: 200px;
    left: -20vw;
    right: 0;
  }
`;

const MidCircle = styled.div<{
  midCircleColor: string | undefined;
  changeSize: boolean;
}>`
  position: absolute;
  width: ${({ changeSize }) => (changeSize ? '59vw' : '60vw')};
  height: ${({ changeSize }) => (changeSize ? '59vw' : '60vw')};
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  top: 35vh;
  background: ${({ midCircleColor }) => midCircleColor};
  // box-shadow: 0px 0px 160px rgba(12, 53, 89, 0.2);
  border-radius: 50%;

  @media (max-width: 1024px) {
    top: 28vh;
  }

  @media (max-width: 768px) {
    top: 28vh;
  }

  @media (max-width: 530px) {
    width: 341.25px;
    height: 341.25px;
    top: 357.88px;
  }
  @media (max-width: 320px) {
    top: 0px;
    left: -2vw;
  }
`;

const SmallCircle = styled.div<{
  smallCircleColor: string | undefined;
  changeSize: boolean;
  boxShadow: string | undefined;
}>`
  position: absolute;
  width: ${({ changeSize }) => (changeSize ? '41.6vw' : '40vw')};
  height: ${({ changeSize }) => (changeSize ? '41.6vw' : '40vw')};
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  top: 50vh;
  background: ${({ smallCircleColor }) => smallCircleColor};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: 50%;

  @media (max-width: 1024px) {
    top: 35vh;
  }

  @media (max-width: 768px) {
    top: 35vh;
  }

  @media (max-width: 530px) {
    width: 227.5px;
    height: 227.5px;
    top: 414.76px;
  }
  @media (max-width: 320px) {
    top: 350px;
  }
`;

const MainImageDiv = styled.img<{ changeSize: boolean }>`
  position: absolute;
  transition: all 0.6s ease;
  top: 55vh;
  left: 0%;
  right: 0%;
  margin-left: auto;
  margin-right: auto;
  width: ${({ changeSize }) => (changeSize ? '50vw' : '48vw')};
  height: auto;

  @media (max-width: 1264px) and (max-height: 600px) {
    top: 60vh;
  }

  @media (max-width: 530px) {
    width: 334.56px;
    height: auto;
    top: 389.73px;
  }

  @media (max-width: 530px) {
  }
`;

const MentorDiv = styled.img<{ changeSize: boolean }>`
  position: absolute;
  transition: all 0.6s ease;
  top: 40vh;
  left: 0px;
  right: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  height: auto;
  border-radius: 50%;

  @media (max-width: 1024px) {
    top: 32vh;
  }

  @media (max-width: 768px) {
    top: 32vh;
  }

  @media (max-width: 530px) {
    width: 234.51px;
    height: 266.97px;
    top: 376px;
    left: 10px;
  }

  @media (max-width: 320px) {
    top: 312px;
  }
`;

const ISADiv = styled.img<{ changeSize: boolean }>`
  position: absolute;
  transition: all 0.6s ease;
  top: 39vh;
  left: 10px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 41vw;
  height: auto;

  @media (max-width: 1024px) {
    top: 31vh;
    left: 5px;
  }

  @media (max-width: 768px) {
    top: 31vh;
    left: 5px;
  }

  @media (max-width: 530px) {
    top: 372px;
    left: 0px;
    width: 15rem;
  }

  @media (max-width: 320px) {
    top: 310px;
    left: 3px;
  }
`;

const SupportDiv = styled.img<{ changeSize: boolean }>`
  position: absolute;
  transition: all 0.6s ease;
  top: 34vh;
  left: -10px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 42vw;
  height: auto;

  @media (max-width: 1024px) {
    top: 30vh;
  }

  @media (max-width: 768px) {
    top: 30vh;
  }

  @media (max-width: 530px) {
    top: 373px;
    width: 15rem;
  }

  @media (max-width: 320px) {
    top: 305px;
    left: 0px;
  }
`;

const StartupsDiv = styled.img<{ changeSize: boolean }>`
  position: absolute;
  transition: all 0.6s ease;
  top: 50vh;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  height: auto;

  @media (max-width: 530px) {
    top: 420px;
    width: 14rem;
  }
`;

const AboutIcon = styled.div`
  span {
    position: absolute;
    top: 65vh;
    left: 0;
    right: 0;
  }

  @media (max-width: 530px) {
    span {
      top: 470px;

      svg {
        width: 118px;
        height: 117px;
      }
    }
  }
`;

const BigDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 180%;
  position: relative;

  @media (max-width: 530px) {
    height: 120%;
  }
`;

const MidDiv = styled.div`
  @media (max-width: 359px) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    top: -69vh;
  }
`;
