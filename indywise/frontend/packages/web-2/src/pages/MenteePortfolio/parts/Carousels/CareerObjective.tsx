import React from 'react';
import styled from 'styled-components';
import { CareerObjective } from '../../utils/interfaces';
import CareerObjectiveImage from '../../../../assets/Career-Objective.png';
import {
  // CarouselSection,
  // CarouselSubDataContainer,
  SubData,
  ToggleBtnSection,
  ButtonWrapper,
  Input,
  YellowBtn
} from './UI-components';

const CO: React.FC<CareerObjective> = ({ state, submitCS }) => {
  const [updatedCareerObj, setUpdatedCareerObj] = React.useState(
    state ? state.careerObjective : ''
  );
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  return (
    <Col4 style={{ position: 'relative' }}>
      <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <SubData style={{ marginTop: '0px' }}>
          Write a beautifully curated career objective fulfilling the maximum
          character limit of 200
        </SubData>
        <Input
          placeholder="Write Career Objective"
          value={updatedCareerObj}
          onChange={(e) => {
            setUpdatedCareerObj(e.target.value);
            setInputHeight(e, '10px');
          }}
        />
        <p
          style={{
            color: '#4B4B4B',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '12px'
          }}
        >
          {200 - updatedCareerObj.length} characters left
        </p>
      </div>
      <ImgDiv>
        <img
          src={CareerObjectiveImage}
          style={{ marginTop: '104px', marginBottom: '120px' }}
          alt="Career Objectives"
        />
      </ImgDiv>
      <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <ToggleBtnSection>
          <p
            style={{
              position: 'relative',
              bottom: '48px'
            }}
          >
            1/1
          </p>
          <div>
            <ButtonWrapper>
              <YellowBtn
                onClick={() => {
                  const finalData = {
                    careerObjective: updatedCareerObj
                  };
                  submitCS(finalData);
                }}
              >
                Finish
              </YellowBtn>
            </ButtonWrapper>
          </div>
        </ToggleBtnSection>
      </div>
    </Col4>
  );
};

export default CO;

const ImgDiv = styled.div`
  display: none;
  @media (max-width: 505px) {
    display: flex;
    justify-content: center;
  }
`;

const Col4 = styled.div`
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40.33%;
  flex: 0 0 40.33%;
  max-width: 40.33%;

  @media (max-width: 1001px) {
    flex: 0 0 70%;
    max-width: 70%;
    display: block;
  }
  @media (max-width: 505px) {
    flex: 0 0 100%;
    max-width: 100%;
    display: block;
  }
`;
