import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Img1 from '../../../assets/Devender.svg';
import Img2 from '../../../assets/Josep.svg';

const Founders: React.FC = () => {
  return (
    <Wrapper id="team">
      <StickyContainer>
        <Text type="h1">FOUNDERS</Text>
      </StickyContainer>
      <Content>
        <Container>
          <div>
            <a
              href="https://www.linkedin.com/in/devenderks/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src={Img1} alt="Devender"></img>
              </div>
              <Text type="body">Devender K Saini</Text>
            </a>{' '}
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/josepmc/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src={Img2} alt="josep"></img>
              </div>
              <Text type="body">Josep Mateu Clemente</Text>
            </a>
          </div>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Founders;

const Wrapper = styled.div`
  margin: 120px 0;
  width: 100%;

  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #cb870a !important;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  @media (max-width: 1024px) {
    h1 {
      left: 16px !important;
      font-size: 32px !important;
      line-height: 40px !important;
    }
  }
  @media (max-width: 500px) {
    h1 {
      left: 0px !important;
      font-size: 24px !important;
      line-height: 32px !important;
      top: 50px !important;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 800px;
  margin: -300px auto 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;

    a {
      text-decoration: none;
      text-align: center;
      &:hover {
        p {
          color: #cb870a;
        }
        img {
          height: 110%;
          width: 110%;
        }
      }
      div {
        height: 240px;
        width: 240px;
        overflow: hidden;
        border-radius: 50%;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
        }
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
        color: #317ec2;
        margin-top: 24px;
        width: 360px;
        text-align: center;
      }
    }

    @media (max-width: 1024px) {
      a {
        img {
          height: 160px;
          width: 160px;
        }
        p {
          width: 280px;
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 600px;
    margin-top: -200px;
  }

  @media (max-width: 540px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    div {
      margin-top: 24px;
      width: 100%;
    }
  }
`;

const StickyContainer = styled.div`
  bottom: 80vh;

  @media (max-width: 1024px) {
    bottom: 58vh;
  }
  @media (max-width: 500px) {
    position: sticky;
    top: 10vh;
    bottom: 90vh;
  }
`;
