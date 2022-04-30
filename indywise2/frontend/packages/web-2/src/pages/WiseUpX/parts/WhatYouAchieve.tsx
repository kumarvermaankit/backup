import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import { HashLink as Link } from 'react-router-hash-link';
import CircleButton from './ButtonCircle';
import Carousel from 'react-elastic-carousel';

const WhatYouAchieve: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);

  const wiseupXType = getWiseupXType();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3 }
  ];
  return (
    <>
      <Container>
        <Flex>
          <Text type="h1" color="#262626">
            What you achieve
          </Text>
          <Pricing>
            <div>
              <Link to="/wiseupx/#pricing">
                <Text type="body" color="#A16A06">
                  Check Pricing
                </Text>
              </Link>
            </div>
            <ButtonWrapper>
              <CircleButton text="Apply Now" />
            </ButtonWrapper>
          </Pricing>
        </Flex>
        <Line>
          <div></div>
          <div></div>
        </Line>
        <Contain>
          {wiseupXType === 'student' ? (
            <Carousel isRTL={false} breakPoints={breakPoints}>
              <Each>
                <Icon icon="coins" />
                <Text type="h3" color="#19588F">
                  10X chance of securing High Paying Job
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Increase your chances to secure a high-paying job by 10 fold
                </Text>
              </Each>
              <Each>
                <Icon icon="clock" />
                <Text type="h3" color="#19588F">
                  3X Productivity
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Students end up being up to 3 times more focused and
                  productive
                </Text>
              </Each>
              <Each>
                <Icon icon="cost" />
                <Text type="h3" color="#19588F">
                  No Extra Costs
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Up to 10 times cheaper than other upskilling programs. Get up
                  to 100% savings on the spend for courses. Most courses are
                  available for free
                </Text>
              </Each>
              <Each>
                <Icon icon="thumbsUp" />
                <Text type="h3" color="#19588F">
                  Mentor Recommendation
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Get a letter of recommendation from your mentor and have a
                  chance to access their network, quality courses and knowledge
                  resources
                </Text>
              </Each>
              <Each>
                <Icon icon="findWay" />
                <Text type="h3" color="#19588F">
                  Find your way
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Don’t get lost trying to find a course in a sea of courses,
                  some while free, may not provide you with the results you
                  seek. Our mentors are here to guide you through
                </Text>
              </Each>
              <Each>
                <Icon icon="qresult" />
                <Text type="h3" color="#19588F">
                  Quick results
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Identify your areas of improvement in just 14 days
                </Text>
              </Each>
              <Each>
                <Icon icon="unlimited" />
                <Text type="h3" color="#19588F">
                  Unlimited mentoring
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Benefit from mentor’s experience through support via emails
                  and messages
                </Text>
              </Each>
            </Carousel>
          ) : (
            <Carousel isRTL={false} breakPoints={breakPoints}>
              <Each>
                <Icon icon="coins" />
                <Text type="h3" color="#19588F">
                  5X chance of securing Better Paying Job
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Increase your chances to secure a better-paying job by 5 fold
                </Text>
              </Each>
              <Each>
                <Icon icon="clock" />
                <Text type="h3" color="#19588F">
                  3X Productivity
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Professionals end up being up to 3 times more focused and
                  productive
                </Text>
              </Each>
              <Each>
                <Icon icon="cost" />
                <Text type="h3" color="#19588F">
                  No Extra Costs
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Up to 10 times cheaper than other upskilling programs. Save on
                  courses, most courses are often available for free
                </Text>
              </Each>
              <Each>
                <Icon icon="findWay" />
                <Text type="h3" color="#19588F">
                  Find your way
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Save up to 100% of your time from getting lost in the sea of
                  misleading information and cheap content
                </Text>
              </Each>
              <Each>
                <Icon icon="qresult" />
                <Text type="h3" color="#19588F">
                  Quick results
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Identify your areas of improvement in just 14 days thereby
                  reducing the time needed to see the results from the training
                </Text>
              </Each>
              <Each>
                <Icon icon="insight" />
                <Text type="h3" color="#19588F">
                  Real-life Insights
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  Real-life Insights from your mentor’s career experience
                  through unlimited mentoring
                </Text>
              </Each>
            </Carousel>
          )}
        </Contain>
      </Container>
    </>
  );
};

export default WhatYouAchieve;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;

  h1 {
    width: 30vw;
    margin-left: 4vw;
    font-weight: normal;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 530px) {
    height: auto;
  }
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px 0px 100px;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #5a9fdb;
  }
  div:nth-child(2) {
    width: 100%;
    height: 1px;
    background: #5a9fdb;
  }
`;

const Contain = styled.div`
  width: 100%;
  display: flex;
  margin: 8vh 0vw 2vh 0vw;
  overflow-x: scroll;
  justify-content: space-between;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    margin: 40px auto;
  }

  @media (max-width: 530px) {
    margin: 80px auto;
    width: 70%;
  }
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-top: 4vw;

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

const Each = styled.div`
  width: 400px;
  text-align: center;
  h3 {
    font-size: 24px;
    line-height: 32px;
    margin: 32px 0 16px 0;
  }
  span {
    svg {
      width: auto;
      height: 80px;
    }
  }

  h2 {
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
  }

  @media (min-width: 530px) and (max-width: 1024px) {
    width: 80%;
    height: auto;
    margin: 40px 0;
    span {
      svg {
        margin-bottom: 2vh;
      }
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
