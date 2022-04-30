import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WiseupTop from '../../../assets/Topboy.svg';
import ButtonPart from './ButtonPart';

const LandingArea: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Left>
            <Text type="h1" color="#3C54AF">
              Hire Mentored Interns. Get them Upskilled.
            </Text>
            <ButtonPart />
          </Left>
          <Right>
            <img src={WiseupTop} alt="wise up top" />
          </Right>
        </Contain>
      </Container>
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8fbfd;
  @media (max-width: 770px) {
    width: auto;
  }
`;

const Contain = styled.div`
  display: flex;
  margin: 25vh 10vw;
  justify-content: space-between;
  @media (max-width: 770px) {
    display: block;
    margin: 15vh 10vw;
    div {
      h1 {
        font-size: 8vw;
        text-align: center;
        margin-bottom: 2vh;
        line-height: 8vw;
      }
      h2 {
        text-align: center;
      }
    }
  }
`;

const Left = styled.div`
  h1 {
    font-weight: normal;
    margin-bottom: 5vh;
  }
  h2 {
    margin-bottom: 5vh;
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
  @media (max-width: 770px) {
    div {
      text-align: center;
    }
    button {
      margin-bottom: 2vh;
    }
  }
`;

const Right = styled.div`
  img {
    width: 40vw;
  }
  @media (max-width: 770px) {
    text-align: center;
    margin-top: 5vh;
    img {
      width: 50vw;
    }
  }
  @media (max-width: 530px) {
    img {
      width: 100%;
    }
  }
`;
