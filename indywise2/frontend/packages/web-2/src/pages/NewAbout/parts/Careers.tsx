import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import BuisnessMan from '../../../assets/BuisnessMan.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper id="careers">
      <Content>
        <img
          data-aos="fade-zoom-up"
          data-aos-easing="ease-in-out"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="800"
          src={BuisnessMan}
          alt="Buisnessaman"
        ></img>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          <Text type="h1">Careers</Text>
          <Text type="h2">Want to join us? Check job openings Here</Text>
          <a
            href="https://www.linkedin.com/company/indywise/jobs/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Check Job Openings</Button>
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Careers;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #fff;
  @media (max-width: 950px) and (max-height: 550px) {
    height: auto;
    padding: 50px 0;
  }
`;
const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  img {
    height: 340px;
    width: 466px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-family: Mulish;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: left;
      color: #262626;
    }
    h2 {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #262626;
      margin-top: 40px;
    }
    button {
      margin-top: 24px;
      height: 44px;
      width: 252px;
      left: 0px;
      top: 48px;
      border-radius: 8px;
      padding: 8px 16px;
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  @media (max-width: 1024px) {
    width: 50%;
    img {
      width: 383px;
      height: 280px;
    }
    div {
      margin-bottom: 80px;
      h1 {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
  @media (max-width: 500px) {
    margin: 200px 37px;
    justify-content: center;
    img {
      width: 219px;
      height: 160px;
      margin-top: 80px;
    }
    div {
      h1 {
        font-size: 32px;
        line-height: 40px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 320px) {
    margin: 200px 37px;
    justify-content: center;
    img {
      width: 219px;
      height: 160px;
      margin-top: 0px;
    }
  }
`;
