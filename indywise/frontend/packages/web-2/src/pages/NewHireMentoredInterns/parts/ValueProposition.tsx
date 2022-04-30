import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from '@indywise/uikit';
import { Link } from 'react-router-dom';

const ValueProposition: React.FC = () => {
  return (
    <>
      <Container>
        <Text type="h2" color="#262626">
          Value Proposition
        </Text>
        <Contain>
          <Each>
            <Icon icon="quickResults" />
            <Text type="h3" color="#3C54AF">
              Recruitment Solved
            </Text>
            <Text type="body" color="#4B4B4B">
              Get Mentored Interns tailored to your needs, with applications
              coming worldwide. You need not to spend time on posting jobs,
              screening or interviews.
            </Text>
          </Each>
          <Each>
            <Icon icon="monitor" />
            <Text type="h3" color="#3C54AF">
              Global Interns
            </Text>
            <Text type="body" color="#4B4B4B">
              We have partnered with universities worldwide to bring the best
              interns from all the geographies to our platform.
            </Text>
          </Each>
          <Each>
            <Icon icon="affordable" />
            <Text type="h3" color="#3C54AF">
              Cheaper than a local internship
            </Text>
            <Text type="body" color="#4B4B4B">
              Get your interns at a cheaper cost than a local internship, even
              unpaid ones.
            </Text>
          </Each>
          <Each>
            <Icon icon="upskillingIncluded" />
            <Text type="h3" color="#3C54AF">
              Upskilling included
            </Text>
            <Text type="body" color="#4B4B4B">
              Every intern is part of our <Link to="/wiseup">WiseUp</Link>{' '}
              program, which ensures up to 75% time savings on training.
            </Text>
          </Each>
        </Contain>
      </Container>
    </>
  );
};

export default ValueProposition;

const Container = styled.div`
  width: 100%;
  height: auto;
  h2 {
    margin: 15vh auto 10vh auto;
    text-align: center;
  }
  @media (max-width: 770px) {
    align-items: center;
    h2 {
      margin: 10vh auto;
      font-size: 8vw;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  margin: 6vh 5vw;
  justify-content: space-between;
  subtitle {
    margin-top: -2vh;
  }
  @media (max-width: 770px) {
    display: block;
  }
`;

const Each = styled.div`
  width: 35vw;
  margin-left: 2vw;
  span {
    svg {
      padding-left: 4vw;
      width: auto;
      height: 85px;
    }
  }
  h3 {
    margin-top: 5vh;
  }
  p {
    text-align: left;
    margin: 5vh auto;
    font-weight: normal;
    line-height: 28px;
  }
  @media (max-width: 770px) {
    img {
      width: 20vw;
      height: 10vh;
      padding-left: 5vw;
    }
    span {
      svg {
        padding-left: 0px;
        width: 40vw;
        height: 10vh;
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
`;
