import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LevelUpWF from '../../../assets/LevelUpWF.svg';

const LevelUp: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <div>
            <img src={LevelUpWF} alt="Level up" />
          </div>
          <Right>
            <div>
              <Text type="h3" color="#262626">
                Level up your skills to succeed.
              </Text>
              <Line />
              <Text type="subtitle" color="#4B4B4B">
                Engage in quality mentoring and upskilling inching you closer to
                your goals, by the community for the community
              </Text>
            </div>
            <div>
              <Text type="h3" color="#262626">
                Mentor Driven Live + Recorded Content.
              </Text>
              <Line />
              <Text type="subtitle" color="#4B4B4B">
                Upskill yourself with tailored live mentoring sessions conducted
                by our dedicated subject matter experts
              </Text>
            </div>
          </Right>
        </Contain>
      </Container>
    </>
  );
};

export default LevelUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Contain = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  margin: auto 15vw;

  div {
    img {
      width: 120%;
    }
  }

  @media (max-width: 768px) {
    display: block;
    height: auto;
    margin: 10vh 10vw;

    div {
      display: flex;
      justify-content: center;

      img {
        width: 240px;
      }

      h3 {
        font-size: 32px;
        line-height: 40px;
      }

      h2 {
        font-size: 16px;
        line-height: 28px;
      }
    }
  }

  @media (max-width: 530px) {
    div {
      h3 {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;

const Line = styled.div`
  border: 4px solid #f2a922;
  width: 64px;
  margin: 16px 0px;
  border-radius: 5px;
`;

const Right = styled.div`
  z-index: 1;
  margin-left: 10vw;

  h1 {
    font-weight: normal;
  }

  h2 {
    margin: 3vh 0vw 6vh 2vw;
  }

  button {
    span {
      i {
        span {
          svg {
            line {
              stroke: #262626;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block !important;
    margin-top: 10vh;
    margin-left: auto;

    div {
      text-align: left;
      display: block;
    }
    button {
      margin-bottom: 2vh;
    }
  }
`;
