import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import IdealMentorImg from '../../../assets/IdealMentor.svg';
import AOS from 'aos';

const IdealMentor: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Wrapper>
        <Container data-aos="fade" data-aos-delay="100">
          <Content>
            <Text type="h1">IndyWise Ideal Mentor Profile</Text>
            <Text type="h2">
              This is a unique opportunity to join a curated network of experts,
              specialists and mentors from across the globe with a mission to
              impact careers and lives sharing your hard earned expertise and
              knowledge
            </Text>
            <Text type="h3">
              Professionals who have over 8+ years of proven experience in
              business and industries, working in the senior positions, leading
              teams or organisations and have an average to large network size
              are ideal mentors for IndyWise Impact Network
            </Text>
            <Button color="primary" onClick={showModal}>
              Join as a Mentor
            </Button>
          </Content>
          <ImageContainer>
            <img src={IdealMentorImg} alt="Ideal Mentors Map" />
          </ImageContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default IdealMentor;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 320px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #074e4d;
    margin-bottom: 16px;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #727272;
    margin-bottom: 24px;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #262626;
    margin-bottom: 40px;
  }
  button {
    width: max-content;
    padding: 8px 16px;
    color: #042039;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
  }
  @media (max-width: 1024px) {
    width: 70%;
    padding: 0;
    padding-bottom: 40px;
    h1 {
      font-size: 48px;
      line-height: 40px;
    }
    h3 {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 540px) {
    padding: 0;
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    h2 {
      font-size: 14px;
      line-height: 24px;
    }
    h3 {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (max-width: 320px) {
    margin: 40px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    img {
      width: 450px;
    }
  }
  @media (max-width: 540px) {
    display: none;
  }
`;
