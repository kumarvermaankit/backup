import React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import BackgroundD from '../../../assets/JoinAsMentorBgD.svg';
import BackgroundT from '../../../assets/JoinAsMentorBgT.svg';
import MixPanel from 'mixpanel-browser';

MixPanel.init('443966eb9316ce0c87909b540848ebb5');

const LandingArea: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  // const handleJoinAsMentor = () => {
  //   const value = MixPanel.get_property('join-as-mentor');

  //   let update: any = {};
  //   if (value && typeof value == 'number') {
  //     update['no-of-click'] = value + 1;
  //   } else {
  //     update['no-of-click'] = 1;
  //   }
  //   MixPanel.register(update);

  //   showModal();
  // };

  return (
    <>
      <Wrapper>
        <Container>
          <Content>
            <Text type="h1">Impact Careers and Lives</Text>
            <Text type="h2">Become a Mentor at IndyWise</Text>
            {/* <Button color="primary" onClick={handleJoinAsMentor}> */}
            <Button color="primary" onClick={showModal}>
              Join as a Mentor
            </Button>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingArea;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #eaf3fa 100%);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${BackgroundD});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    background: url(${BackgroundT});
    background-repeat: no-repeat;
    background-size: auto 100vw;
    background-position: bottom;
  }
`;

const Content = styled.div`
  max-width: 700px;
  text-align: center;
  margin-bottom: 150px;
  h1 {
    color: #074e4d;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 96px;
    padding-bottom: 16px;
  }
  h2 {
    color: #219a99;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    padding-bottom: 24px;
  }
  button {
    color: #042039;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 44px;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 64px;
      line-height: 72px;
    }
    h2 {
      font-size: 32px;
      line-height: 40px;
    }
    button {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 540px) {
    max-width: 350px;
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
    h2 {
      font-size: 20px;
      line-height: 28px;
    }
    button {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
