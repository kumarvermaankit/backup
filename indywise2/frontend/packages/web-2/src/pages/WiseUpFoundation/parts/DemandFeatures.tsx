import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import OnDemandFeatures from '../../../assets/OnDemandFeatures.svg';
import ButtonPart from './ButtonPart';
import Wiseupboys from '../../../assets/Wiseupboy.svg';

const DemandFeatures: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <div>
            <img src={OnDemandFeatures} alt="On Demand Features" />
          </div>
          <Right>
            <div>
              <Text type="h2" color="#262626" size="48px">
                On Demand Features
              </Text>
              <Center>
                <Div>
                  <div>
                    <Circle />
                  </div>
                  <Text type="subtitle" color="#4B4B4B">
                    On-demand assessment based on standard KPIs and progress
                    overview
                  </Text>
                </Div>
                <Div>
                  <div>
                    <Circle />
                  </div>
                  <Text type="subtitle" color="#4B4B4B">
                    Certificate of Merit from IndyWise
                  </Text>
                </Div>
                <Div>
                  <div>
                    <Circle />
                  </div>
                  <Text type="subtitle" color="#4B4B4B">
                    Letter of recommendation from mentors
                  </Text>
                </Div>
                <ButtonPart />
              </Center>
            </div>
            <Mobile>
              <img src={Wiseupboys} alt="wise up boy" />
            </Mobile>
          </Right>
        </Contain>
      </Container>
    </>
  );
};

export default DemandFeatures;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    height: auto;
    margin: auto;
  }
`;

const Center = styled.div`
  align-self: center;

  div {
    button {
      margin-top: 2vh;
    }
  }

  @media (max-width: 1024px) {
    margin: auto 5vw;
  }

  @media (max-width: 600px) {
    margin: 5vh 10vw;
  }
`;

const Circle = styled.div`
  width: 1vw !important;
  height: 1vw !important;
  border-radius: 50%;
  background: #f2a922;

  @media (max-width: 600px) {
    width: 12px !important;
    height: 12px !important;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: auto !important;

  p {
    margin-left: 1vw;
  }

  @media (max-width: 600px) {
    align-items: baseline;
  }
`;

const Contain = styled.div`
  display: flex;
  margin: auto 15vw auto 0vw;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    height: 100vh;
    img {
      height: 100vh;
    }
  }

  @media (max-width: 1024px) {
    margin: auto;
    div {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      img {
        display: none;
      }
    }
  }
`;

const Mobile = styled.div`
  img {
    display: none;
  }

  @media (max-width: 768px) {
    margin: auto !important;
    img {
      display: block !important;
      width: 100%;
      height: auto !important;
    }
  }
`;

const Right = styled.div`
  z-index: 1;
  margin-left: 10vw;
  height: unset !important;

  div {
    height: unset;
  }

  h1 {
    font-weight: normal;
  }

  h2 {
    margin: auto 5vw 40px 0vw;
  }

  div {
    div {
      h2 {
        margin: 24px 2vw;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: auto;

    div {
      text-align: left;
      h2 {
        margin: auto 5vw;
      }
      div {
        h2 {
          font-size: 16px;
        }
      }
    }
    button {
      margin-bottom: 2vh;
    }
  }

  @media (max-width: 768px) {
    div {
      h2 {
        margin: auto 10vw;
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
      line-height: 40px;
      margin: 5vh auto;
    }

    div {
      div {
        h2 {
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
  }
`;
