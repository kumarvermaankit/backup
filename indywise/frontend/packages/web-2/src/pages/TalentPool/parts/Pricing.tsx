import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TPPricing from '../../../assets/TPPricing.svg';
import ButtonPart from './ButtonPart';

const Pricing: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <Text type="h2" color="#262626" size="48px">
            How to access it ?
          </Text>
          <Contain>
            <Left>
              <img src={TPPricing} alt="wise up we help you" />
            </Left>
            <Right>
              <Text type="h4" color="#262626">
                Step 1:
              </Text>
              <Text type="body" color="#4B4B4B">
                Contact our sales team at sales@indywise.com for a business
                account
              </Text>
              <Text type="h4" color="#262626">
                Step 2:
              </Text>
              <Text type="body" color="#4B4B4B">
                Sign in with the credentials you’ll get and have access to
                thousands of profiles, for free!
              </Text>
              <ButtonPart />
            </Right>
            <TabLeft>
              <img src={TPPricing} alt="wise up we help you" />
            </TabLeft>
          </Contain>
        </div>
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
  background: #e5e9f6;

  div {
    h2 {
      margin: auto 10vw 5vh 10vw;
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    div {
      width: 100%;
      h2 {
        margin: 5vh auto;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
`;

const Contain = styled.div`
  display: flex;
  margin: auto 10vw;
  justify-content: end;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    width: auto !important;
    margin: 10vh 24px;
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
    margin: auto !important;
  }

  p {
    margin: 16px auto 40px auto;
    line-height: 28px;
  }

  div {
    button {
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
    width: auto !important;
  }
`;
