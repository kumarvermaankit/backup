import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Img1 from '../../../assets/mission.svg';
import Img2 from '../../../assets/vision.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const MissionVision: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper>
      <Content>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="300"
          data-aos-distance="0px"
        >
          <img src={Img1} alt="missionIcon"></img>
          <Text type="h1">Our Mission</Text>
          <Text type="body">
            Our mission is to create a success ecosystem connecting mentors,
            mentees and businesses. We aim to help mentee fulfill their career
            aspirations and upskilling needs. We enable mentors to make an
            impact, get paid and get recognized for their work and expertise. We
            help startups to fulfill their talent and learning & development
            needs.
          </Text>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="800"
          data-aos-distance="16px"
        >
          <img src={Img2} alt="visionIcon"></img>
          <Text type="h1">Our Vision</Text>
          <Text type="body">
            To become the largest global mentoring and learning platform that
            allows anyoneto succeed in their dreams and ambitions by leveraging
            the global knowledge resources.
          </Text>
        </div>
      </Content>
    </Wrapper>
  );
};
export default MissionVision;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  background-color: #faefd9;

  @media (max-width: 600px) {
    height: auto;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  div {
    h1 {
      font-family: Mulish;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
      text-align: left;
      margin-top: 24px;
      color: #262626;
    }
    p {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      text-align: left;
      margin-top: 24px;
      color: #4b4b4b;
      width: 496px;
    }
    img {
      width: 160px;
      height: 160px;
    }
  }
  @media (max-width: 1024px) {
    width: 90%;
    div {
      padding: 20px 0;
      img {
        height: 120px;
        width: 120px;
      }
      h1 {
        font-size: 32px;
        line-height: 40px;
        margin-top: 24px;
      }
      p {
        margin-top: 24px;
      }
    }
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    width: 100%;
    div {
      p {
        width: 300px;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 50px 24px;
    div {
      width: 327px;
      height: auto;
      margin-bottom: 24px;
      img {
        width: 80px;
        height: 80px;
      }
      h1 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        width: 327px;
      }
    }
  }
  @media (max-width: 320px) {
    margin: 24px;
    div {
      width: 100%;
      height: auto;
      margin-bottom: 24px;
      p {
        width: 100%;
      }
    }
  }
`;
