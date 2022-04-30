import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import LaptopImage from '../../../assets/BrowseMentorsLaptop.svg';
import CircleButton from '../../../components/CircleCallToAction';
import Background from '../../../assets/YellowBg1.svg';
import { Link } from 'react-router-dom';

const BrowseMentors: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Text type="hl" size="5vw" bold>
          <ColoredText>Personalized Sessions </ColoredText>with Industry Experts
        </Text>
        <Text type="paragraph" size="1.5vw">
          Have 1:1 mentoring sessions. Buy subscriptions. Succeed in placement
          interviews.
          <br />
          Book personalized mentoring sessions with our verified and curated
          mentors. We ensure you get the best, by partnering with the top
          experts and mentors including from fortune 500 companies.
        </Text>
        <ImageAndButtonWrapper>
          <Image src={LaptopImage} />
          <ButtonWrapper>
            <Link to="/mentors">
              <CircleButton text="Browse Mentors" color="purple" />
            </Link>
          </ButtonWrapper>
        </ImageAndButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default BrowseMentors;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 5%;

  h1 {
    text-align: center;
    width: 80%;
    z-index: 1;
    margin-top: 15vh;
    line-height: 5vw;
  }

  p {
    line-height: 36px;
    width: 1200px;
    font-size: 24px;
    text-align: center;
    margin: 10vh auto 0 auto;
    z-index: 1;
  }
  @mdia {
    max-width: 1200px;
  }
   {
    p {
      width: 90%;
    }
  }

  @media (min-width: 900px) and (max-width: 1599px) {
    height: auto;
  }

  @media (max-width: 1030px) {
    p {
      width: 523px;
      font-size: 14px;
    }
  }

  @media (max-width: 530px) {
    margin-top: 75px;
    height: 710px;

    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 4rem;
      width: 90vw;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      width: 85vw;
      margin: 43px auto 0 auto;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ImageAndButtonWrapper = styled.div`
  position: relative;

  @media (max-width: 530px) {
    margin-top: 30px;
  }
`;

const Image = styled.img`
  margin-top: 10vh;
  width: 75vw;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
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
`;

const ColoredText = styled.span`
  color: #a16a06;
`;
