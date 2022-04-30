import React from 'react';
import styled from 'styled-components';
// import { AboutYourself } from '../../utils/interfaces';
// import MentorPortfolioImg from '../../../../assets/MentorPortfolioImg.svg';
import ModalBasicDetails from '../../../../assets/Modal-Basic-Details.png';
import {
  // CarouselSection,
  // CarouselSubDataContainer,
  SubData,
  ToggleBtnSection,
  ButtonWrapper,
  Input,
  YellowBtn
} from './UI-components';
import { useAuth } from '../../../../contexts/AuthContext';

const AY: React.FC<any> = ({ state, valueP, submitAY, mentorid }) => {
  const { user } = useAuth();
  const email = user?.email;
  const [updatedAboutYself, setUpdatedAboutYself] = React.useState(
    state ? state : ''
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
          Write down about your personality to give your portfolio a human touch
          (max 200 characters)
        </SubData>
        <Input
          placeholder="Write About Yourself *"
          value={updatedAboutYself}
          onChange={(e) => {
            setUpdatedAboutYself(e.target.value);
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
          {200 - updatedAboutYself.length} characters left
        </p>
      </div>
      <ImgDiv>
        <img
          src={ModalBasicDetails}
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
                    valueProposition: valueP || '-',
                    about: updatedAboutYself,
                    email: email,
                    wiseup_consent: true
                  };
                  submitAY(finalData, mentorid);
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

export default AY;

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
