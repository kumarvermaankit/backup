import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import ReadyToJoinSvg from '../../../assets/ReadyToJoin.svg';
import CircleButton from './CircleButton';
import AOS from 'aos';
const ReadyToJoin: React.FC<{ showModal: () => void }> = ({ showModal }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Main>
      <Abs>
        <div>
          <div data-aos="fade" data-aos-delay="100">
            <Text type="h1" size="64px" color="#074E4D">
              Ready to Join the IndyWise Impact Network?
            </Text>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <CircleButton
              text="Join as a Mentor"
              color="#F2A922"
              shadow="0px 8px 16px rgba(242, 169, 34, 0.32)"
              showModal={showModal}
            />
          </div>
        </div>
      </Abs>
    </Main>
  );
};

export default ReadyToJoin;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${ReadyToJoinSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Abs = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-weight: bold;
    width: 70%;
    text-align: center;
    margin: auto auto 40px auto;
    line-height: 72px;
  }

  div {
    margin: auto;
  }

  button {
    margin: auto;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;
