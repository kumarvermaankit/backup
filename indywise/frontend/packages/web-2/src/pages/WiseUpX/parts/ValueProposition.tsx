import React, { useEffect } from 'react';
import AOS from 'aos';
import AOSWrapper from '../../../components/AOSWrapper';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import { HashLink as Link } from 'react-router-hash-link';
import CircleButton from './ButtonCircle';
import Carousel from 'react-elastic-carousel';

const ValueProposition: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);
  useEffect(() => {
    AOS.init({
      delay: 500
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3 }
  ];

  const wiseupXType = getWiseupXType();
  return (
    <>
      <Container>
        <Flex>
          <AOSWrapper styleValue="fade-up">
            <Text type="h1" color="#262626">
              Value Proposition
            </Text>
          </AOSWrapper>
          <Pricing>
            <div>
              <Link to="/wiseupx/#pricing">
                <AOSWrapper styleValue="fade">
                  <Text type="body" color="#A16A06">
                    Check Pricing
                  </Text>
                </AOSWrapper>
              </Link>
            </div>
            <ButtonWrapper>
              <AOSWrapper styleValue="zoom-in">
                <CircleButton text="Apply Now" />
              </AOSWrapper>
            </ButtonWrapper>
          </Pricing>
        </Flex>
        <Line>
          <div></div>
          <div></div>
        </Line>
        <AOSWrapper styleValue="fade-left">
          <Contain>
            {wiseupXType === 'student' ? (
              <Carousel isRTL={false} breakPoints={breakPoints}>
                <Each>
                  <Icon icon="goals" />
                  <Text type="h3" color="#19588F">
                    Set your own goals. Your own pace.
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    We don’t believe in one size fits all! Transform yourself
                    into an industry ready professional by setting your goals
                    with the help of your mentor and in the cognitive style that
                    suits you the best
                  </Text>
                </Each>
                <Each>
                  <Icon icon="gcomputer" />
                  <Text type="h3" color="#19588F">
                    Personalized Mentoring with ICF KPIs
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    See the results through weekly assessments on KPI’S set you
                    under the guidance of your mentor based on the IndyWise
                    competency frameworks (ICF)
                  </Text>
                </Each>
                <Each>
                  <Icon icon="ladder" />
                  <Text type="h3" color="#19588F">
                    Unique career opportunities
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Mentored graduates have higher chances of getting placed in
                    Fortune 500 companies
                  </Text>
                </Each>
                <Each>
                  <Icon icon="liveProject" />
                  <Text type="h3" color="#19588F">
                    Live Project and Certificate of Internship
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Participate in unique projects under the guidance of a
                    mentor based on your interest and engagement in the
                    community
                  </Text>
                </Each>
                <Each>
                  <Icon icon="qresult" />
                  <Text type="h3" color="#19588F">
                    Quick results
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Find out areas of improvement in just two weeks. Don’t
                    struggle to choose the path to success, let our mentors
                    guide you
                  </Text>
                </Each>
                <Each>
                  <Icon icon="afford" />
                  <Text type="h3" color="#19588F">
                    Affordable
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Everyone should have a chance to succeed in life. Avoid
                    spending thousands of dollars on courses that don’t deliver
                    any value to you and get the right ones (often for free)
                    with the help of our mentors
                  </Text>
                </Each>
                <Each>
                  <Icon icon="progressA" />
                  <Text type="h3" color="#19588F">
                    Earn 15 key credentials
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    12 WiseUp scorecards, 1 letter of recommendation from the
                    mentor, 1 ICF report, 1 Certificate of merit, access to
                    mentor’s network, LinkedIn page overview and CV review
                  </Text>
                </Each>
              </Carousel>
            ) : (
              <Carousel isRTL={false} breakPoints={breakPoints}>
                <Each>
                  <Icon icon="goals" />
                  <Text type="h3" color="#19588F">
                    Set your own goals. Your own pace.
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    We don’t believe in one size fits all! Transform yourself
                    into a highly efficient and performing professional
                    achieving career success, growth and key domain skills by
                    setting your goals with the help of your mentor and in the
                    cognitive style that suits you the best
                  </Text>
                </Each>
                <Each>
                  <Icon icon="gcomputer" />
                  <Text type="h3" color="#19588F">
                    Personalized Mentoring with ICF KPIs
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Upskill yourself with tailored training by our dedicated
                    subject matter experts with live unlimited mentoring. See
                    the results through weekly assessments on KPI’S set you
                    under the guidance of your mentor based on the IndyWise
                    competency frameworks (ICF)
                  </Text>
                </Each>
                <Each>
                  <Icon icon="ladder" />
                  <Text type="h3" color="#19588F">
                    Unique career opportunities
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    A chance to get recommended by the mentor to their network
                  </Text>
                </Each>
                <Each>
                  <Icon icon="qresult" />
                  <Text type="h3" color="#19588F">
                    Quick results
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Find out areas of improvement in just two weeks. Don’t
                    struggle to choose the path to success, let our mentors
                    guide you
                  </Text>
                </Each>
                <Each>
                  <Icon icon="afford" />
                  <Text type="h3" color="#19588F">
                    Affordable
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    Everyone should have a chance to succeed in life. Avoid
                    spending thousands of dollars on courses that don’t deliver
                    any value to you and get the right ones (often available for
                    free) with the help of our mentors
                  </Text>
                </Each>
                <Each>
                  <Icon icon="progressA" />
                  <Text type="h3" color="#19588F">
                    Earn 15 key credentials
                  </Text>
                  <Text type="subtitle" color="#4B4B4B">
                    12 WiseUp scorecards, 1 letter of recommendation from the
                    mentor, 1 ICF report, 1 Certificate of merit, access to
                    mentor’s network, LinkedIn page overview and CV review
                  </Text>
                </Each>
              </Carousel>
            )}
          </Contain>
        </AOSWrapper>
      </Container>
    </>
  );
};

export default ValueProposition;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eaf3fa;
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
    margin: auto;
  }

  @media (max-width: 530px) {
    margin: auto;
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
