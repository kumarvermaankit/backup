import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import ValueGenerationBoy from '../../../assets/ValueGenerationBoys.png';
import CircleButton from '../../../components/CircleCallToAction';

const ValueGenerationBoys: React.FC = (props) => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold color="#262626">
        Get Mentored, for <span style={{ color: '#F2A922' }}>FREE !</span>
      </Text>
      <Container>
        <Center>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              Zero fees, no payments
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              Mentorship by top IndyWise mentors
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              1 mentoring session/week. Total 16 mentoring sessions
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              Get direction, industry exposure and precious knowledge of your
              domain
            </Text>
          </Div>
        </Center>
        <ImgWrapper>
          <img src={ValueGenerationBoy} alt="ValueGenerationBoys" />
          {
            <ButtonWrapper>
              <Link to="/internship/apply" target="_blank" rel="noreferrer">
                <CircleButton text="Apply Now" color="purple" />
              </Link>
            </ButtonWrapper>
          }
        </ImgWrapper>
      </Container>
    </Wrapper>
  );
};

export default ValueGenerationBoys;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 0;

  h1 {
    font-size: 96px;
    line-height: 120px;
    text-align: center;
    width: 100%;
    color: #042039;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 530px) {
    margin: 0px;
    height: auto;
    h1 {
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      margin: 5vh auto 2vh auto;
    }
  }
`;

const Container = styled.div`
  margin: 16vh 8vw 10vh 8vw;
  display: flex;
  div {
    width: fit-content;
    img {
      width: 30vw;
      height: 30vw;
    }
  }
  @media (max-width: 530px) {
    margin: 10vh 5vw;
    display: block;
    div {
      img {
        width: 328px;
        height: 328px;
      }
    }
  }
  @media (max-width: 359px) {
    div {
      img {
        width: 90vw;
        height: 90vw;
      }
    }
  }
`;

const Center = styled.div`
  align-self: center;
  margin-right: 5vw;
  font-weight: 400;

  p {
    font-size: 32px;
    line-height: 48px;
  }

  @media (max-width: 1030px) {
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 530px) {
    margin: 5vh auto auto auto;

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const Circle = styled.div`
  width: 1vw !important;
  height: 1vw;
  border-radius: 50%;
  background: #f2a922;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3vh;
  p {
    margin-left: 1vw;
  }
  @media (max-width: 530px) {
    p {
      font-size: 4vw;
      margin-left: 2vw;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -10vh;
  right: 20vw;

  a {
    text-decoration: none;
  }

  @media (max-width: 1030px) {
    top: 0;
  }

  @media (max-width: 530px) {
    right: 0;
    top: 0;
    a {
      button {
        width: 120px;
        height: 120px;
        h2 {
          font-size: 16px;
          line-height: 24px;
        }
        i {
          svg {
            width: 24px;
            height: 12px;
          }
        }
      }
    }
  }
`;
