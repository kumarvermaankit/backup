import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import WeHelpWiseup from '../../../assets/Boywithlaptop.svg';
import ButtonPart from './ButtonPart';

const WeHelp: React.FC = () => {
  return (
    <>
      <Container>
        <Contain>
          <Left>
            <img src={WeHelpWiseup} alt="wise up we help" />
          </Left>
          <Right>
            <div id="head">
              <Text type="h2" color="#262626">
                Facing a resource crunch?
              </Text>
            </div>
            <Text type="body" color="#4B4B4B">
              Solve your problem instantly. IndyWise enables startups to source
              mentored interns, globally, 5 times cheaper than a local unpaid
              internship. We augment interns sourced globally with our WiseUp
              program, effectively saving up to 75% of the training time and
              helping you get your work delivered faster and better.
            </Text>
            <ButtonPart />
          </Right>
        </Contain>
      </Container>
    </>
  );
};

export default WeHelp;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Contain = styled.div`
  display: flex;
  margin: 20vh 10vw;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    margin: 10vh 10vw;
    display: block;
  }
`;

const Right = styled.div`
  h1 {
    font-weight: normal;
    margin-bottom: 5vh;
  }
  h2 {
    margin-bottom: 5vh;
  }
  p {
    line-height: 28px;
  }
  button {
    margin-top: 3vh;
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
      line-height: 8vw;
    }
  }
`;

const Left = styled.div`
  padding-right: 8vw;
  padding-bottom: 2vh;
  @media (max-width: 770px) {
    text-align: center;
  }
  @media (max-width: 530px) {
    img {
      width: 100%;
    }
  }
`;
