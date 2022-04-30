import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import {
  WiseUpXPageContext,
  WiseupXType
} from '../contexts/WiseUpXPageContext';

const ToggleButton: React.FC = () => {
  const {
    getWiseupXType,
    toggleToStudent,
    toggleToProfessional
  } = React.useContext(WiseUpXPageContext);

  const wiseupXType = getWiseupXType();

  return (
    <Wrapper>
      <ToggleWrapper wiseupXType={wiseupXType}>
        <Slider wiseupXType={wiseupXType} />
        <Option
          onClick={toggleToStudent}
          wiseupXType={wiseupXType}
          id="student"
        >
          <Text type="h3">for Students</Text>
        </Option>
        <Option
          onClick={toggleToProfessional}
          wiseupXType={wiseupXType}
          id="pro"
        >
          <Text type="h2">for Professionals</Text>
        </Option>
      </ToggleWrapper>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  z-index: 1;
  width: 100%;

  h1 {
    font-size: 6vw;
    line-height: 10vh;
    margin-bottom: 10vh;
    text-align: center;
  }

  @media (max-width: 530px) {
    margin-top: 10vh;
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
  margin: 0 auto;
  height: 6vh;
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
    height: 6vh;
    margin-bottom: 1vh;
  }
`;

const Slider = styled.div<{ wiseupXType: WiseupXType }>`
  position: absolute;
  width: 200px;
  height: 6vh;
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
    height: 6vh;
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
