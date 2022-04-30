import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WhuBg from '../../../assets/WYABg.svg';
import WhatYouA from '../../../assets/WhatYouA.svg';

const WhatYouAchieve: React.FC = () => {
  return (
    <>
      <Container>
        <img src={WhuBg} alt="wise up we help you bg"></img>
        <Flexy>
          <div>
            <Text type="h2" color="#262626">
              What You Achieve
            </Text>
            <Flex>
              <img src={WhatYouA} alt="What you achieve" />
              <Second>
                <OneThird>
                  <Text type="h4" color="#262626">
                    100% Free
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Upskill yourself and get a career ready at absolutely zero
                    cost
                  </Text>
                </OneThird>
                <OneThird>
                  <Text type="h4" color="#262626">
                    Networking with peers
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Network with like-minded peers who can help you level-up
                    your skills and advance in your career
                  </Text>
                </OneThird>
                <OneThird>
                  <Text type="h4" color="#262626">
                    Enterprise Work Experience
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Chance to work on live projects for most active and
                    outstanding participants
                  </Text>
                </OneThird>
                <OneThird>
                  <Text type="h4" color="#262626">
                    Find your way
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Save upto 100% of your time from getting lost in the sea of
                    misleading information and cheap content
                  </Text>
                </OneThird>
                <OneThird>
                  <Text type="h4" color="#262626">
                    10X Efficiency
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Increase your chances to secure a high-paying job by 10 fold
                  </Text>
                </OneThird>
                <OneThird>
                  <Text type="h4" color="#262626">
                    3X Productivity
                  </Text>
                  <Text type="paragraph" color="#4B4B4B">
                    Students end up being up to 3 times more focused and
                    productive
                  </Text>
                </OneThird>
              </Second>
            </Flex>
          </div>
        </Flexy>
        {/* <img src={Effects} alt="wise up we help you bg" /> */}
      </Container>
    </>
  );
};

export default WhatYouAchieve;

const Flexy = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;

  h2 {
    margin: auto auto 5vh auto;
    text-align: center;
    z-index: 1;
  }

  img {
    position: absolute;
    width: 30%;
    z-index: 0;
  }

  @media (max-width: 768px) {
    height: auto;

    img {
      height: auto;
    }

    h2 {
      margin: 5vh auto;
    }

    div {
      img {
        width: 240px;
        height: auto;
      }
    }
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 5vh 5vw;

  img {
    width: 20vw;
    position: unset;
    align-self: end;
    margin-right: 5vw;
  }

  @media (max-width: 768px) {
    height: auto;
    display: block;

    img {
      width: 240px;
      display: flex;
      margin: 5vh auto;
    }
  }
`;

const Second = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 60vw;

  @media (max-width: 768px) {
    height: auto;
    display: block;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }
`;

const OneThird = styled.div`
  width: 50%;
  margin-bottom: 3vh;

  h4 {
    margin: 2vh auto;
    font-weight: normal;
  }

  p {
    line-height: 28px;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    h4 {
      line-height: 36px;
    }
  }
`;
