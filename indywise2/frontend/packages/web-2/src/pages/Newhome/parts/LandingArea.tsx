import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button, Icon } from '@indywise/uikit';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import BigImageMain from '../../../components/BigImageMain';
import { useAuth } from '../../../contexts/AuthContext';
import WiseUpLogo from '../../../assets/WiseUpLogo.svg';

const LandingArea: React.FC = () => {
  const history = useHistory();
  const { user, business } = useAuth();
  const [show, setShow] = useState(true);

  const showFreeSessionModal = () => {
    if (!user) {
      window.localStorage.setItem('from', 'FirstFoundation');
      history.push('/sign-in');
      return;
    } else if (business) {
      history.push('/');
    } else {
      history.push('/foundation');
    }
  };

  return (
    <>
      <Container>
        <BigImageMain />
        <div>
          {show && (
            <Banner>
              <img src={WiseUpLogo} alt="deel logo" />
              <Text type="body" color="#4B4B4B">
                WiseUp Foundation is live NOW !
              </Text>
              <Link to="/foundation">
                <Text type="body" color="#A16A06">
                  Visit Page
                </Text>
              </Link>
              <div onClick={() => setShow(false)}>
                <Icon icon="close" size="20px" />
              </div>
            </Banner>
          )}
          <ResponsiveDiv>
            <Text type="hl">Mentoring. Upskilling. Level up.</Text>
          </ResponsiveDiv>
          <MidText>
            <MarginDiv>
              <Text type="h2">
                We help people succeed through mentoring-driven Upskilling with
                AI insights.
              </Text>
            </MarginDiv>
            <Button onClick={showFreeSessionModal}>Start for Free</Button>
          </MidText>
        </div>
      </Container>
      <Below />
    </>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #042039;
  text-align: -webkit-center;
  @media (max-width: 1030px) {
    height: 1300px;
    h3 {
      font-size: 5vw;
      margin-top: 3vh;
    }
  }
  @media (max-width: 770px) {
    height: 720px;
    img {
      top: 40vh;
    }
  }
  @media (max-width: 541px) {
    height: 300px;
    width: 100%;
  }
  @media (max-width: 530px) {
    height: 600px;
    width: 100%;
    img {
      top: 65vh;
    }
  }
  @media screen and (max-width: 380px) {
    height: 650px;
    img {
      width: 90%;
      top: 75vh;
    }
  }
  @media screen and (max-width: 321px) {
    width: 100%;
    height: 500px;
  }
  @media screen and (max-width: 281px) {
    img {
      top: 65vh;
    }
  }
`;

const ResponsiveDiv = styled.div`
  top: 22vh;
  left: 0px;
  right: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #eaf3fa;
  h1 {
    font-size: 72px;
    line-height: 120px;
    font-family: Mulish;
    color: white;
  }
  @media (max-width: 1250px) {
    h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 56px;
      line-height: 48px;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 48px;
    }
  }
  @media (max-width: 770px) {
    top: 16vh;
    h1 {
      font-size: 32px;
      line-height: 48px;
    }
  }
  @media (max-width: 530px) {
    top: 18vh;
    padding: 0 50px;
    h1 {
      font-size: 40px;
      line-height: 60px;
    }
  }
`;

const Below = styled.div`
  width: 100%;
  height: 100vh;
  text-align: -webkit-center;
  background: linear-gradient(180deg, #042039 0%, rgba(4, 32, 57, 0) 100%);
  h3 {
    margin-top: 30vh;
  }
  @media (max-width: 1030px) {
    height: 700px;
    h3 {
      font-size: 5vw;
      margin-top: 3vh;
    }
  }
  @media (max-width: 770px) {
    height: 700px;
    h3 {
      font-size: 6vw;
      margin-top: -15vh;
      line-height: 7vw;
    }
  }
  @media (max-width: 530px) {
    height: 100vh;
    h3 {
      font-size: 5vw;
      margin-top: 3vh;
    }
  }
  @media (max-width: 380px) {
    height: 700px;
    h3 {
      font-size: 5vw;
      margin-top: 3vh;
    }
  }
`;

const MidText = styled.div`
  position: absolute;
  display: block;
  align-items: center;
  width: fit-content;
  top: 40vh;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    color: white;
    font-size: 24px;
    line-height: 36px;
  }
  button {
    margin-top: 2vh;
  }
  @media (max-width: 1024px) {
    top: 35vh;
    h2 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (max-width: 770px) {
    top: 28vh;
    align-items: baseline;
    width: auto;
    justify-content: center;
    h2 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (max-width: 530px) {
    top: 40vh;
    h2 {
      font-size: 12px;
      line-height: 16px;
    }
  }
  @media (max-width: 380px) {
    top: 45vh;
  }
`;

const MarginDiv = styled.div`
  h1 {
    color: white;
    font-size: 5vw;
  }
  h2 {
    color: white;
    font-size: 1.5vw;
    font-weight: normal;
  }
  @media (max-width: 530px) {
    margin-right: auto;
    h1 {
      font-size: 2.1rem;
      line-height: 3.125rem;
    }
    h2 {
      font-size: 1.23rem;
      line-height: 36px;
    }
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: #c6def3;
  border-radius: 28px;
  width: fit-content;
  height: auto;
  margin: 5vh auto;
  position: absolute;
  top: 45px;
  left: 0px;
  right: 0px;
  a {
    color: #a16a06;
    margin: auto 2vw;
  }
  img {
    margin-right: 2vw;
  }
  div {
    background: #fff;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      height: 20px;
    }
  }
  @media screen and (max-width: 530px) {
    padding: 4px;
    div {
      padding: 4px;
      span {
        width: 14px;
        height: 14px;
        svg {
          width: 12px;
          height: 14px;
        }
      }
    }
    img {
      width: 18px;
      height: 18px;
    }
    p {
      font-size: 10px;
    }
    a {
      p {
        font-size: 10px;
      }
    }
  }
`;
