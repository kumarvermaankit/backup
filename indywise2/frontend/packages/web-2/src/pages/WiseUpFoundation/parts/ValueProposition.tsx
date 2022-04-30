import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';

const ValueProposition: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <Text type="h2" color="#262626">
            Value Proposition
          </Text>
          <Contain>
            <Each>
              <Icon icon="ladder" />
              <Text type="h3" color="#19588F" size="24px">
                Unique Career Opportunities
              </Text>
              <Text type="body" color="#4B4B4B" size="14px">
                Become a top learner for a chance to get an interview with
                fortune 500 companies
              </Text>
            </Each>
            <Each>
              <Icon icon="masterclass" />
              <Text type="h3" color="#19588F" size="24px">
                Live Masterclass
              </Text>
              <Text type="body" color="#4B4B4B" size="14px">
                by top mentors conducted on weekends
              </Text>
            </Each>
            <Each>
              <Icon icon="communityUpskilling" />
              <Text type="h3" color="#19588F" size="24px">
                Community-led Upskilling
              </Text>
              <Text type="body" color="#4B4B4B" size="14px">
                Participate and get answers to your questions from IndyWise
                mentors
              </Text>
            </Each>
            <Each>
              <Icon icon="communityDriven" />
              <Text type="h3" color="#19588F" size="24px">
                Be Part of a Real Team
              </Text>
              <Text type="body" color="#4B4B4B" size="14px">
                Engage in community driven standups, retrospectives,
                competitions, discussions and planning sessions. Evaluation will
                be team-driven too, learn how real work looks like
              </Text>
            </Each>
            <Each>
              <Icon icon="freeResources" />
              <Text type="h3" color="#19588F" size="24px">
                Get Access
              </Text>
              <Text type="body" color="#4B4B4B" size="14px">
                to free courses, guidance, videos, podcasts, articles, reports,
                use cases and knowledge resources
              </Text>
            </Each>
          </Contain>
        </div>
      </Container>
    </>
  );
};

export default ValueProposition;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin: auto auto 5vh auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 5vh;

    h2 {
      margin: 10vh auto;
      font-size: 48px;
      line-height: 56px;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
      margin: 5vh auto;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto ​4v;
  justify-content: center;
  subtitle {
    margin-top: -2vh;
  }

  @media (max-width: 768px) {
    display: block;
    margin: auto 10vw;
  }
`;

const Each = styled.div`
  width: 33%;
  text-align: center;

  span {
    svg {
      width: auto;
      height: 78px;
      path {
        stroke: #19588f;
      }
    }
  }

  h3 {
    margin-top: 24px;
  }

  p {
    margin: 8px auto 5vh auto;
    font-weight: normal;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    img {
      width: 20vw;
      height: 10vh;
      padding-left: 5vw;
    }
    span {
      svg {
        padding-left: 0px;
        height: 15vw;
        width: auto;
      }
    }

    h3 {
      margin-top: 2vh;
    }

    h2 {
      margin: 2vh auto;
    }

    display: block;
    width: auto;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
