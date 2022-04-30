import React from 'react';
import AOSWrapper from '../../../components/AOSWrapper';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import BoyWithDoor from '../../../assets/BoyWithDoorBlue.svg';
import ButtonPart from './ButtonPart';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';

const WhoCanApply: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);

  const wiseupXType = getWiseupXType();

  return (
    <>
      <Container>
        <Contain>
          <AOSWrapper styleValue="skew-anim">
            <Left>
              <img src={BoyWithDoor} alt="wise up we help you" />
            </Left>
          </AOSWrapper>
          <Right>
            <AOSWrapper styleValue="fade-right">
              <Text type="h2" color="#262626">
                Who can apply
              </Text>
            </AOSWrapper>
            {wiseupXType === 'student' ? (
              <>
                <AOSWrapper styleValue="fade">
                  <Circle />
                </AOSWrapper>
                <AOSWrapper styleValue="fade-right">
                  <Text type="body" color="#4B4B4B">
                    Any current student at a recognized University or college
                  </Text>
                </AOSWrapper>
                <AOSWrapper styleValue="fade">
                  <Circle />
                </AOSWrapper>
                <AOSWrapper styleValue="fade-right">
                  <Text type="body" color="#4B4B4B">
                    Recent graduates who completed their studies within the last
                    12 months
                  </Text>
                </AOSWrapper>
              </>
            ) : (
              <>
                <Circle />
                <Text type="body" color="#4B4B4B">
                  Professionals with at least one year work experience
                </Text>
              </>
            )}
            <AOSWrapper styleValue="fade">
              <ButtonPart />
            </AOSWrapper>
          </Right>
          <TabLeft>
            <img src={BoyWithDoor} alt="wise up we help you" />
          </TabLeft>
        </Contain>
      </Container>
    </>
  );
};

export default WhoCanApply;

const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

const Contain = styled.div`
  display: flex;
  margin: 20vh 10vw;
  justify-content: end;
  align-items: center;

  @media (max-width: 770px) {
    display: block;
    margin: 10vh 10vw;
  }
`;
const Circle = styled.div`
  width: 1vw !important;
  height: 1vw !important;
  border-radius: 50%;
  background: #f2a922;
  margin-bottom: -1vh;
  margin-top: 5vh;
  margin-right: 5vw;
  margin-left: -2vw;
`;

const Left = styled.div`
  margin-right: 15vw;

  @media (max-width: 1300px) {
    img {
      width: 280px;
    }
  }
  @media (max-width: 770px) {
    display: none;
  }
`;

const TabLeft = styled.div`
  display: none;

  @media (max-width: 770px) {
    display: block;
    margin-top: 5vh;
    text-align: center;
  }

  @media (max-width: 530px) {
    img {
      width: 50vw;
    }
  }
`;

const Right = styled.div`
  h2 {
    margin-left: -2vw;
    font-weight: normal;
    margin-bottom: 5vh;
  }

  h2 {
    margin-bottom: 5vh;
  }

  div {
    button {
      margin-left: -2vw;
      margin-top: 6vh;
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

  @media (max-width: 770px) {
    width: 80%;
    h2 {
      font-size: 6.5vw;
      line-height: 8vw;
    }
  }
`;
