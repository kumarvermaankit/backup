import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import WhoCanApplyBoy from '../../../assets/WhoCanApplyBoys.png';
import CircleButton from '../../../components/CircleCallToAction';

const WhoCanApplyBoys: React.FC = () => {
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold color="#262626">
        Who can Apply
      </Text>
      <Container>
        <ImgWrapper>
          <img src={WhoCanApplyBoy} alt="WhoCanApplyBoys" />
          {
            <ButtonWrapper>
              <Link to="/internship/apply" target="_blank" rel="noreferrer">
                <CircleButton text="Apply Now" color="purple" />
              </Link>
            </ButtonWrapper>
          }
        </ImgWrapper>
        <Center>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              <strong>Job seekers</strong> - Freshers or people who lost jobs
              due to certain reasons
            </Text>
          </Div>
          <Div>
            <Circle />
            <Text type="body" size="1.2vw" color="#4B4B4B">
              <strong>Experienced working professionals</strong> working in the
              industries as mentioned above
            </Text>
          </Div>
        </Center>
      </Container>
    </Wrapper>
  );
};

export default WhoCanApplyBoys;

const Wrapper = styled.div`
  height: auto;
  margin: 8vh 0;
  h1 {
    font-size: 90px;
    line-height: 120px;
    text-align: center;
    width: 100%;
    color: #042039;
  }

  p {
    font-size: 32px;
    line-height: 48px;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
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
      width: 90%;
    }
    p {
      font-size: 16px;
      line-height: 24px;
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
  margin-left: 5vw;
  font-weight: 400;
  h1 {
    display: inherit;
  }
  h2 {
    line-height: 72px;
    color: #042039;
  }

  @media (max-width: 530px) {
    margin: 5vh auto auto auto;

    h1 {
      display: none;
    }
    h2 {
      line-height: 32px;
      font-size: 6vw;
      margin-top: 5vh;
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
      margin-left: 2vw;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -10vh;
  right: 0;
  a {
    text-decoration: none;
  }

  @media (max-width: 1030px) {
    top: -3vh;
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
