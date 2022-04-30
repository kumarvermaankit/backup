import * as React from 'react';
import { Text, Icon } from '@indywise/uikit';
import styled from 'styled-components';
// import IntroBackgrounds from '../../../assets/IntroBackgrounds.png';
import IntroBackgrounds from '../../../assets/BlueBg1.svg';

const WhoWillMentorYouLadys: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold color="#262626">
        Key Highlights
      </Text>
      <Flex>
        <Each>
          <Icon icon="duration" />
          <Text type="h3">30-120 Days</Text>
          <Text type="body">Program Duration</Text>
        </Each>
        <Each>
          <Icon icon="hours" />
          <Text type="h3">20-25 Hours</Text>
          <Text type="body">Working / Learning</Text>
        </Each>
        <Each>
          <Icon icon="zeroCost" />
          <Text type="h3">Zero Cost</Text>
          <Text type="body">Earn a stipend based on performance</Text>
        </Each>
      </Flex>
      <SFlex>
        <Each>
          <Icon icon="totalSessions" />
          <Text type="h3">Total 16 Sessions</Text>
          <Text type="body">1 mentoring session/week</Text>
        </Each>
        <Each>
          <Icon icon="getCertified" />
          <Text type="h3">Get Certified</Text>
          <Text type="body">
            {' '}
            Certificate of Internship and verified skills
          </Text>
        </Each>
      </SFlex>
    </Wrapper>
  );
};

export default WhoWillMentorYouLadys;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10vh 10vw;
  justify-content: space-around;
`;

const SFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10vh 20vw;
  justify-content: space-around;
`;

const Each = styled.div`
  span {
    svg {
      height: 15vw;
      width: 15vw;
    }
  }
  text-align: center;

  h3,
  p {
    margin-top: 2vh;
  }

  @media (max-width: 530px) {
    margin-top: 5vh;

    span {
      svg {
        height: 25vw;
        width: 25vw;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${IntroBackgrounds});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;

  h1 {
    margin-top: 16vh;
    line-height: 6vw;
    text-align: center;
    width: 100%;
    color: #042039;
  }

  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 15vh;
    }
  }
`;
