import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import BoyWithDoor from '../../../assets/BoyWithDoorBlue.svg';
import ButtonPart from './ButtonPart';

const Pricing: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Left>
            <img src={BoyWithDoor} alt="wise up we help you" />
          </Left>
          <Right>
            <Text type="h2" color="#262626" size="32px">
              Who can apply
            </Text>
            <Text type="body" color="#4B4B4B">
              Open to all students and working professionals
            </Text>
            <Text type="h2" color="#262626" size="32px">
              Pricing
            </Text>
            <Free>
              <span>FREE</span>
            </Free>
            <ButtonPart />
          </Right>
          <TabLeft>
            <img src={BoyWithDoor} alt="wise up we help you" />
          </TabLeft>
        </Contain>
      </Container>
    </>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Contain = styled.div`
  display: flex;
  margin: auto 10vw;
  justify-content: end;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    margin: 10vh auto;
  }

  @media (max-width: 360px) {
    margin: 10vh 5vw;
  }
`;
const Free = styled.div`
  width: 79px;
  height: 32px;
  margin: 18px 0px 4px;
  background: #317ec2;
  border: 1px solid #5a9fdb;
  box-sizing: border-box;
  border-radius: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 16px;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
  }
`;

const Left = styled.div`
  margin-right: 15vw;

  @media (max-width: 770px) {
    display: none;
  }
`;

const TabLeft = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 5vh;
    text-align: center;
    img {
      width: 320px;
    }
  }

  @media (max-width: 530px) {
    img {
      width: 50vw;
    }
  }
`;

const Right = styled.div`
  h2 {
    font-weight: normal;
  }

  p {
    margin: 16px auto 40px auto;
  }

  div {
    button {
      margin-top: 6vh;
      p {
        margin: auto;
      }
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
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;
