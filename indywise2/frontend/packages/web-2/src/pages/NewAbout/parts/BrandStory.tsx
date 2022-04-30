import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Img from '../../../assets/BrandStory.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandStory: React.FC = () => {
  const scrollHandler = () => {
    let element = document.getElementById('container') as HTMLDivElement;
    if (window.scrollY > element.offsetTop) {
      element.classList.add('widthAdd');
    } else {
      element.classList.remove('widthAdd');
    }
  };
  useEffect(() => {
    AOS.init();
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <Content>
          <ImageContainer
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={Img} alt="brandStoryImg"></img>
          </ImageContainer>

          <Container>
            <Text type="h1">
              <div
                data-aos="fade"
                data-aos-delay="1000"
                data-aos-easing="linear"
              >
                The IndyWise Story
              </div>
              <div
                id="container"
                data-aos="progress-div"
                data-aos-mirror={true}
                style={{
                  height: '5px'
                }}
              ></div>
            </Text>
            <div data-aos="fade" data-aos-delay="300">
              <Text type="body">
                IndyWise was founded in July 2020 by Devender Kumar and Josep
                Mateu Clemente as an incubated company through EthAum's
                accelerator programme, with the purpose of making mentorship
                accessible and affordable to the masses. In our initial
                research, we discovered that only C-level executives presently
                have access to a dedicated mentor; we aim to change that.
                Through our mentored upskilling programs, mentees can unlock
                their hidden potential, allowing them to be their best with
                increased focus, drive, and a greater sense of direction and
                purpose.<br></br>
                <br></br>
                IndyWise is continuously attracting quality mentors to its
                thriving platform, who want to make an impact through their
                expertise and leave a legacy of knowledge transfer behind. With
                our community-focused commitment, we aim to create a thriving
                success ecosystem.
              </Text>
            </div>
          </Container>
        </Content>
      </Wrapper>
    </>
  );
};
export default BrandStory;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 320px) {
    height: auto;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    width: auto;
  }
  @media (max-width: 500px) {
    margin: 154px 24px;
  }
`;
const Container = styled.div`
  h1 {
    font-family: Mulish;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: #262626;
    h2 {
      margin-top: 16px;
      width: 64px;
      height: 5px;
      background: #f2a922;
      border-radius: 3px;
    }
  }
  p {
    margin-left: 80px;
    width: 600px;
    font-family: Roboto;
    font-size: 16px;
    line-height: 28px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 40px;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 14px;
      line-height: 24px;
      width: 565px;
      margin-left: 74px;
    }
  }
  @media (max-width: 650px) and (max-height: 1000px) {
    width: 100%;
    P {
      width: 90%;
    }
  }
  @media (max-width: 850px) and (max-height: 650px) {
    width: 90%;
    p {
      width: 80%;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    p {
      width: 327px;
      margin-left: 0;
    }
  }
  @media (max-width: 320px) {
    p {
      width: 100%;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 0 0;
  img {
    height: 320px;
    width: 320px;
    border-radius: 50%;
    align-item: center;
    filter: grayscale(100%);
  }
  @media (max-width: 1024px) {
    padding: 0;
    img {
      height: 280px;
      width: 280px;
      padding: 40px 0;
    }
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    img {
      height: 200px;
      width: 200px;
    }
  }
  @media (max-width: 850px) and (max-height: 650px) {
    img {
      display: none;
    }
  }
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;
