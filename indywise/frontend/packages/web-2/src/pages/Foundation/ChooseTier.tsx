import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import PortfolioHeader from '../../components/PortfolioHeader';
import {
  WiseUpXPageContext,
  WiseupXType
} from '../../contexts/WiseUpXPageContext';
import GoldTier from './parts/upskilling/GoldTier';
import PlatinumTier from './parts/upskilling/PlatinumTier';
import DiamondTier from './parts/upskilling/DiamondTier';
import Gold from './parts/mentorship/Gold';
import Diamond from './parts/mentorship/Diamond';
import Platinum from './parts/mentorship/Platinum';

const ChooseTier: React.FC<any> = () => {
  const {
    getWiseupXType,
    toggleToStudent,
    toggleToProfessional
  } = React.useContext(WiseUpXPageContext);

  const wiseupXType = getWiseupXType();
  const [upskilling, setUpskilling] = useState(false);
  const [mentorship, setMentorship] = useState(true);

  return (
    <>
      <PortfolioHeader type="mentor" />
      <PortfolioMainHeader name="Find a Mentor" back filters={false} />
      <Wrapper>
        <ToggleWrapper wiseupXType={wiseupXType}>
          <Slider wiseupXType={wiseupXType} />
          <Option
            onClick={() => {
              toggleToStudent();
              setMentorship(true);
              setUpskilling(false);
            }}
            wiseupXType={wiseupXType}
            id="student"
          >
            <Text type="h3">Mentorship</Text>
          </Option>
          <Option
            onClick={() => {
              toggleToProfessional();
              setUpskilling(true);
              setMentorship(false);
            }}
            wiseupXType={wiseupXType}
            id="pro"
          >
            <Text type="h2">Upskilling</Text>
          </Option>
        </ToggleWrapper>
      </Wrapper>

      {upskilling && (
        <Row>
          <Col4>
            <GoldTier />
          </Col4>
          <Col4>
            <DiamondTier />
          </Col4>
          <Col4>
            <PlatinumTier />
          </Col4>
        </Row>
      )}

      {mentorship && (
        <Row>
          <Col4>
            <Gold />
          </Col4>
          <Col4>
            <Diamond />
          </Col4>
          <Col4>
            <Platinum />
          </Col4>
        </Row>
      )}
    </>
  );
};

export default ChooseTier;

const Row = styled.div`
  padding-left: 112px;
  padding-right: 40px;
  padding-bottom: 40px;

  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33%;
  flex: 0 0 33%;
  max-width: 33%;
  display: flex;
  justify-content: center;
  @media (max-width: 1001px) {
    margin-top: 10px;
    margin-bottom: 10px;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  // position: fixed;
  // top: 100px;
  // z-index: 1;
  width: 100%;

  h1 {
    font-size: 6vw;
    line-height: 10vh;
    margin-bottom: 10vh;
    text-align: center;
  }

  @media (max-width: 530px) {
    bottom: 0px;
    h1 {
      font-size: 8vw;
      line-height: 10vw;
      margin-bottom: 4vh;
    }
  }
`;

const ToggleWrapper = styled.div<{ wiseupXType: WiseupXType }>`
  width: 400px;
  margin: 100px auto 40px auto;
  height: 40px;
  background: #fff;
  padding: 10px;
  background: white;
  box-shadow: 0px 8px 16px rgb(17 17 17 / 16%);
  border-radius: 10vw;
  position: relative;
  z-index: 0;
  display: flex;
  user-select: none;

  #pro {
    &:hover {
      cursor: ${(props) =>
        props.wiseupXType !== 'professional' ? 'pointer' : ''};
    }
  }

  #fresher {
    &:hover {
      cursor: ${(props) =>
        props.wiseupXType === 'professional' ? 'pointer' : ''};
    }
  }

  @media (max-width: 530px) {
    width: 90vw;
    height: 40px;
    margin-bottom: 1vh;
  }
`;

const Slider = styled.div<{ wiseupXType: WiseupXType }>`
  position: absolute;
  width: 200px;
  height: 40px;
  right: ${(props) => (props.wiseupXType === 'professional' ? '10px' : '')};
  background: #0c3559;
  box-shadow: 15px 15px 30px rgba(12, 53, 89, 0.2);
  border-radius: 10vw;
  z-index: -10;

  @media (min-width: 1366px) and (max-width: 1599px) {
    box-shadow: 10.245px 10.245px 20.49px rgba(12, 53, 89, 0.2);
  }

  @media (max-width: 530px) {
    width: 45vw;
    height: 40px;
  }
`;

const Option = styled.div<{ wiseupXType: WiseupXType }>`
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: ${(props) => (props.wiseupXType === 'student' ? '#FFF' : '#0C3559')};
    font-size: 16px;
    line-height: 24px;
  }

  h2 {
    color: ${(props) =>
      props.wiseupXType === 'professional' ? '#FFF' : '#0C3559'};
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 530px) {
    h3 {
      font-size: 4vw;
      line-height: 2.5vh;
    }
    h2 {
      font-size: 4vw;
      line-height: 2.5vh;
    }
  }
`;
