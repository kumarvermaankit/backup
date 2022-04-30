import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Background from '../../../assets/ValueProposition.png';
import LaptopImage1 from '../../../assets/RecruitmentSolved.png';
import LaptopImage2 from '../../../assets/MostAffordable.png';
import LaptopImage3 from '../../../assets/KeepFocused.png';

const ValueProposition: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        Value Proposition
      </Text>
      <Flex>
        <Image src={LaptopImage1} />
        <TextDiv>
          <Text type="hl" size="2.5vw" bold>
            Recruitment Solved
          </Text>
          <Text type="body" size="1.3vw">
            Get Mentored Interns tailored to your needs just in 7-10 days time.
            You need not to spend time on job posting, screening or going
            through a cumbersome interview process.
          </Text>
        </TextDiv>
      </Flex>
      <FlexMid>
        <ImageH src={LaptopImage2} />
        <TextDiv>
          <Text type="hl" size="2.5vw" bold>
            Most Affordable
          </Text>
          <Text type="body" size="1.3vw">
            Get Mentored Interns who are paired with a dedicated mentor, all at
            5X lower cost than a local unpaid internship.
          </Text>
        </TextDiv>
        <ImageD src={LaptopImage2} />
      </FlexMid>
      <Flex>
        <Image src={LaptopImage3} />
        <TextDiv>
          <Text type="hl" size="2.5vw" bold>
            Keep Focused
          </Text>
          <Text type="body" size="1.3vw">
            Save about 75% of your time worth thousands of dollars. IndyWise
            ensures that you as a founder can keep your focus on the critical
            work for your business, without having to worry about the training
            needs and work delivery of your interns.
          </Text>
        </TextDiv>
      </Flex>
    </Wrapper>
  );
};

export default ValueProposition;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: repeat;
  h1 {
    color: #042039;
    margin-top: 16vh;
    line-height: 6vw;
    text-align: center;
    width: 100%;
  }
  @media (min-width: 900px) and (max-width: 1599px) {
    height: auto;
  }
  @media (max-width: 530px) {
    margin: 10vh 0px;
    height: auto;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
    }
  }
  @media (max-width: 359px) {
    h1 {
      width: 90vw;
      margin: 5vh auto 2vh auto;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
  margin: 5vh auto 5vh 3vw;
  align-items: center;
  @media (max-width: 530px) {
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
    text-align-last: center;
  }
`;

const FlexMid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
  margin: 5vh 3vw 5vh auto;
  align-items: center;
  @media (max-width: 530px) {
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
    text-align-last: center;
  }
`;

const TextDiv = styled.div`
  width: 45%;
  margin-right: 2vw;
  h1 {
    color: #102373;
    text-align: left;
    margin: auto;
    line-height: 4vw;
  }
  p {
    line-height: 2vw;
    margin: 2vh auto auto auto;
  }
  @media (max-width: 530px) {
    width: 100%;
    h1 {
      margin: 5vh auto auto auto;
    }
    p {
      margin: 5vh auto;
      line-height: 5vw;
      font-size: 3vw;
    }
  }
`;

const Image = styled.img`
  width: 20vw;
  height: 20vw;
  display: block;
  margin: auto;
  @media (max-width: 530px) {
    width: 75vw;
    height: 75vw;
  }
`;

const ImageH = styled.img`
  display: none;
  margin: auto;
  @media (max-width: 530px) {
    display: block;
    width: 75vw;
    height: 75vw;
  }
`;

const ImageD = styled.img`
  width: 20vw;
  height: 20vw;
  margin: auto;
  @media (max-width: 530px) {
    display: none;
  }
`;
