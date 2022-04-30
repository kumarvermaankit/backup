import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';

import Jobprofiles from '../../../assets/Jobprofile.svg';
import Vectors from '../../../assets/StartRocket.svg';

const Pricing: React.FC = () => {
  const [price] = useState('5+');

  return (
    <>
      <Container id="pricing">
        <Text type="h2" color="#262626">
          Job Profiles
        </Text>
        <Contain>
          <Left>
            <img src={Jobprofiles} alt="Job profiles"></img>
            <div>
              <Button icon="arrow">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: '#042039' }}
                  href={`mailto:sales@indywise.com?subject=To enquire regarding IndyWise WiseUp&body=I would like to know more about pricing of ${price} intern / interns per month in the WiseUp program.`}
                >
                  Contact Sales
                </a>
              </Button>
            </div>
          </Left>
          <div>
            <img src={Vectors} alt="start here"></img>

            <Text type="h2">How to start</Text>
            <Text type="h3">1. Fill the interest form</Text>
            <Text type="h4">
              2. Our Business Experience Manager will get in touch with you to
              configure a tailored package for your needs
            </Text>
            <div>
              <Button icon="arrow">
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: '#042039' }}
                  href={`mailto:sales@indywise.com?subject=To enquire regarding IndyWise WiseUp&body=I would like to know more about pricing of ${price} intern / interns per month in the WiseUp program.`}
                >
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </Contain>
      </Container>
    </>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  height: 182vh;
  img {
    width: 30vw;
    height: auto;
  }

  h2 {
    margin-top: 5vh;
    text-align: center;
    margin-bottom: -17vh;
  }

  @media (max-width: 770px) {
    height: auto;
  }
`;

const Contain = styled.div`
  margin: 20vh 10vw;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-top: -60vh;
    margin-left: 45vw;
    display: flex;
    font-size: 5vw;
    font-family: Mulish;
    color: #262626;
    width: 40vw;
  }
  h3 {
    padding-left: 45vw;
    margin-top: 22vh;
  }
  h4 {
    font-size: 2vw;
    padding-left: 45vw;
    margin-top: 5vh;
  }
  img {
    margin-top: 10vh;
  }
  div {
    div {
      margin-top: 8vh;
      margin-left: 45vw;
    }
  }

  @media (max-width: 530px) {
    display: block;
    margin: 10vh 10vw;
    img {
      padding-left: 5vw;
    }
    h2 {
      padding-top: 15vh;
      margin-left: -8vw;
      font-size: 4vw;
    }
    h3 {
      margin-left: -40vw;
      font-size: 2vw;
    }
  }
`;

const Left = styled.div`
  img {
    width: 65vw;
    height: auto;
    padding-left: 7vw;
    margin-bottom: 3vh;
  }

  Button {
    margin-left: -11vw;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 2vh;

    h2 {
      margin-right: 1vw;
    }
  }

  h2 {
    margin-bottom: 5vh;
  }

  p {
    line-height: 28px;
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
    h2 {
      font-size: 6.5vw;
    }
    Button {
      padding-right: 4vw;
      margin-right: 2vw;

      a {
        font-size: 3vw;
      }
    }
  }
`;
