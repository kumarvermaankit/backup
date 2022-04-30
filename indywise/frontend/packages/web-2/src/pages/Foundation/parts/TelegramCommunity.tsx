import {
  Button
  // Icon, SkillTag
} from '@indywise/uikit';
import React from 'react';
import styled from 'styled-components';
// import ArticlesPlaceholder from '../../../assets/ArticlesPlaceholder.svg';
import Telegram from '../../../assets/TelegramCommunity.png';
// import Ellipse from '../../../assets/Ellipse.png';

function TelegramCommunity() {
  return (
    <Main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '5%',
          paddingRight: '5%',
          alignItems: 'center'
        }}
      >
        <div style={{ paddingTop: '3%' }}>
          <HeadText>Join our Telegram Community</HeadText>
          <RegularText>
            and get your questions answered by Mentors who are industry experts
          </RegularText>
          <a
            href="https://t.me/joinchat/vzZ0A4EO-QNiZDI1"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              icon="arrow"
              iconAlign="right"
              iconRotate={-90}
              color="secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                width: '240px'
              }}
            >
              Join Now
            </Button>
          </a>
        </div>
        <div>
          <img
            src={Telegram}
            alt="Telegram"
            style={{
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
    </Main>
  );
}

export default TelegramCommunity;

const Main = styled.div`
  background-color: #faefd9;
  border-radius: 20px;
  height: 240px;
  margin-bottom: 40px;
  @media (max-width: 1263px) {
    margin-bottom: 200px;
  }
`;

const HeadText = styled.p`
  font-family: Mulish;
  color: #4b4b4b;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0;
  @media (max-width: 1263px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const RegularText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #727272;
  @media (max-width: 1263px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
