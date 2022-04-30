import React from 'react';
import styled from 'styled-components';
// import { ExternalLinks } from '../../utils/interfaces';
// import MentorPortfolioImg from '../../../../assets/MentorPortfolioImg.svg';
import CircularAdd from '../../../../assets/CircularAdd.png';
import ModalBasicDetails from '../../../../assets/Modal-Basic-Details.png';
//import { Text, Icon, Avatar, SkillTag } from '@indywise/uikit';
import {
  // CarouselSection,
  // CarouselSubDataContainer,
  SubData,
  // ToggleBtnSection,
  // ButtonWrapper,
  Input,
  // YellowBtn,
  // DropDownContainer,
  // DropDown,
  SmallDropDownContainer,
  SmallDropDown
} from './UI-components';
import { Icon } from '@indywise/uikit';

const EL: React.FC<any> = ({ state, submitEL, mentorid }) => {
  /* const [updatedAboutYself, setUpdatedAboutYself] = React.useState(
    state ? state.aboutYourself : ''
  ); */
  const externalLinks = state;
  const [nameDropdown, setNamedropdown] = React.useState(false);
  // const [name, setName] = React.useState(state?.name ? state?.name : [])
  // const [externalLinks, setUpdatedExtLinks] = React.useState(
  //   state ? state : []
  // );
  const [newName, setNewName] = React.useState('');
  const [newLink, setNewlink] = React.useState('');
  /* const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []); */
  return (
    <Col4 style={{ position: 'relative' }}>
      <div
        style={{
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        <SubData style={{ marginTop: '0px' }}>
          Add links to external handles like Github, Behance to showcase your
          work and increase your profile credibility
        </SubData>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}
        >
          <SmallDropDownContainer
            style={{
              marginTop: '45px',
              height: '20px',
              paddingBottom: 0,
              width: '23%'
            }}
            onClick={() => setNamedropdown((prev) => !prev)}
          >
            <h1>{newName ? newName : 'Name'}</h1>
            <Icon
              icon={!nameDropdown ? 'darkdownarrow' : 'uparrow'}
              color="black"
              size="20px"
            />
          </SmallDropDownContainer>
          {nameDropdown ? (
            <SmallDropDown style={{ top: 160 }}>
              {['Github', 'Udemy', 'Coursera'].map((desg) => (
                <h1
                  key={desg}
                  onClick={(e) => {
                    setNamedropdown(false);
                    setNewName(e.currentTarget.innerText.toString());
                  }}
                >
                  {desg}
                </h1>
              ))}
            </SmallDropDown>
          ) : null}
          <Input
            style={{ width: '75%' }}
            placeholder="Add Link 1"
            value={newLink}
            onChange={(e) => {
              setNewlink(e.target.value);
              //setInputHeight(e, '10px');
            }}
          />
        </div>
        <ButtonContainer>
          <img
            alt="circular add"
            src={CircularAdd}
            //onClick={() => openModal('Video', 1)}
            style={{
              width: '35px',
              cursor: 'pointer',
              border: '1px solid #fff'
            }}
            onClick={() => {
              // const finalData = {
              //   externalLinks:
              // };
              const externalLink = {
                name: newName,
                link: newLink
              };
              const finalData = {
                externalLinks: [...externalLinks, externalLink]
              };
              // const finalData =
              submitEL(finalData, mentorid);
            }}
          />
        </ButtonContainer>
      </div>
      <ImgDiv>
        <img
          src={ModalBasicDetails}
          style={{ marginTop: '104px', marginBottom: '120px' }}
          alt="Career Objectives"
        />
      </ImgDiv>
      {/* <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
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
                  // const finalData = {
                  //   externalLinks: 
                  // };
                  const externalLink = {
                    name: newName,
                    link: newLink,
                  }
                  const finalData = {
                    externalLinks: [...externalLinks, externalLink]
                  }
                  // const finalData = 
                  submitEL(finalData, mentorid);
                }}
              >
                Finish
              </YellowBtn>
            </ButtonWrapper>
          </div>
        </ToggleBtnSection>
      </div> */}
    </Col4>
  );
};

export default EL;

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
  -ms-flex: 0 0 33.33%;
  flex: 0 0 33.33%;
  max-width: 33.33%;

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

/* const IconContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 50%;
  padding: 16px;
  width: 20px;
  height: 20px;
  @media screen and (max-width: 1200px) {
    margin: auto 0;
  }
`; */

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  img {
    border: 1px solid #fff;
  }
`;
