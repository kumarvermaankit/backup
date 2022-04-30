import React, { useCallback } from 'react';
import styled from 'styled-components';
/* import ModalImage from '../../../assets/Mentee-Portfolio-Modal-Pic.svg';
import CareerImg from '../../../assets/Career-Obj-Pic.svg';
import WorkImg from '../../../assets/Work-Experience-Pic.svg';
import StudiesPic from '../../../assets/Studies-Cert-Pic.svg'; */
import MentorPortfolioImg from '../../../assets/MentorPortfolioImg.svg';
import SkillsImg from '../../../assets/SKillsImg.svg';
import Videos from './Carousels/Videos';
// import Photos from './Carousels/Photos';
import BasicDetails from './Carousels/BasicDetails';
import AboutYself from './Carousels/AboutYourself';
import SkillsExp from './Carousels/SkillsExperience';
import SessionDet from './Carousels/SessionDetails';
import ExternalLinks from './Carousels/External Links';
//import StdCert from './Carousels/Studies';
import Instructions from './Carousels/Instructions';
//import MentorPortfolio from '../MentorPortfolio';

interface MCProps {
  profile: any;
  mentorid: string;
  deleteImageHandler: () => any;
  photos: any;
  video: any;
  skills: any;
  user: any;
  title: string;
  id: number;
  BDState1: {
    location: { country: string; city: string };
    // skills: Array<string>;
  };
  BDState2: any;
  // SEState1: {
  //   location: { country: string; city: string };
  //   skills: Array<string>;
  // };
  //SEState2: any;
  careerState: string;
  // linkState: { externalLinks: string; };
  currSE: any;
  //currStd: any;
  submitBD: (data1: any, data2: any, mentorid?: string) => void;
  submitAY: (data: any, id: any) => void;
  submitEL: (data: any, id: any) => void;
  submitSkillsExp: (data: any) => void;
  //submitStd: (data: any) => void;
  shuffleNav: (header: string, id: number) => void;
  closeModaUtilFunction: () => void;
  // SDState1: {
  //   price: {
  //     currency: string;
  //   }
  // };
  SDState1: any;
  submitSD: (data: any) => void;
}

const ModalComponent: React.FC<MCProps> = ({
  profile,
  mentorid,
  deleteImageHandler,
  photos,
  video,
  skills,
  user,
  title,
  id,
  currSE,
  //currStd,
  BDState1,
  BDState2,
  submitBD,
  careerState,
  submitAY,
  submitSkillsExp,
  //submitStd,
  shuffleNav,
  closeModaUtilFunction,
  // linkState,
  submitEL,
  // SEState1,
  SDState1,
  submitSD
  //SEState2
}) => {
  const getComponent = useCallback(
    (id: number) => {
      switch (id) {
        case 1:
          return (
            <Videos
              video={video}
              closeModal={closeModaUtilFunction}
              deleteImageHandler={deleteImageHandler}
              photos={photos}
              // closeModal={closeModaUtilFunction}
            />
          );

        // case 2:
        //   return (
        //     <Photos
        //       deleteImageHandler={deleteImageHandler}
        //       photos={photos}
        //       closeModal={closeModaUtilFunction}
        //     />
        //   );
        case 3:
          return (
            <BasicDetails
              skills={skills}
              user={user}
              state1={BDState1}
              state2={BDState2}
              submitBD={submitBD}
              mentorid={mentorid}
            />
          );
        case 4:
          return (
            <AboutYself
              mentorid={mentorid}
              state={profile?.about}
              valueP={profile?.valueProposition}
              submitAY={submitAY}
            />
          );
        case 5:
          return (
            <SkillsExp
              workList={currSE}
              skills={skills}
              //state2={SEState2}
              submitWorkExp={submitSkillsExp}
            />
          );
        case 6:
          //  return <StdCert submitStd={submitStd} currStd={currStd} />;
          return (
            <ExternalLinks
              mentorid={mentorid}
              state={profile?.externalLinks}
              submitEL={submitEL}
            />
          );
        case 7:
          return <Instructions />;
        case 8:
          return <SessionDet submitSD={submitSD} state1={SDState1} />;
      }
    },
    [
      profile,
      mentorid,
      deleteImageHandler,
      photos,
      video,
      skills,
      user,
      currSE,
      //currStd,
      BDState1,
      BDState2,
      submitBD,
      // careerState,
      submitAY,
      submitSkillsExp,
      //submitStd,
      closeModaUtilFunction,
      // linkState,
      submitEL,
      // SEState1,
      SDState1,
      submitSD
      //SEState2
    ]
  );
  return (
    <>
      <TitleDiv>
        <Title>{title}</Title>
      </TitleDiv>
      <HeadDiv>
        <HeadText>{title}</HeadText>
      </HeadDiv>
      <Row>
        <Col4>
          <ImageDiv>
            <img
              src={id === 5 ? SkillsImg : MentorPortfolioImg}
              alt="modal-alt"
              height="100%"
              width="100%"
            />
          </ImageDiv>
        </Col4>
        <CustomCol4>
          <NavContainer>
            <NavData
              color={id === 1 ? '700' : '400'}
              onClick={() => shuffleNav('Video', 1)}
            >
              Video
            </NavData>
            {/* <NavData
              color={id === 2 ? '700' : '400'}
              onClick={() => shuffleNav('Photos', 2)}
            >
              Photos
            </NavData> */}
            <NavData
              color={id === 3 ? '700' : '400'}
              onClick={() => shuffleNav('Basic Details', 3)}
            >
              Basic Details
            </NavData>
            <NavData
              color={id === 4 ? '700' : '400'}
              onClick={() => shuffleNav('My Highlights', 4)}
            >
              My Highlights
            </NavData>
            <NavData
              color={id === 5 ? '700' : '400'}
              onClick={() => shuffleNav('Skill Experience', 5)}
            >
              Skills Experience
            </NavData>
            {/* <NavData
              color={id === 6 ? '700' : '400'}
              onClick={() => shuffleNav('External Links', 6)}
            >
              External Links
            </NavData> */}
            <NavData
              color={id === 8 ? '700' : '400'}
              onClick={() => shuffleNav('Session Details', 8)}
            >
              Session Details
            </NavData>
          </NavContainer>
        </CustomCol4>
        {getComponent(id)}
      </Row>
    </>
  );
};

export default ModalComponent;

const TitleDiv = styled.div`
  margin-top: 32px;
  margin-bottom: 40px;
  @media (max-width: 601px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 32px;
  margin-left: 64px;
  color: #262626;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  @media (max-width: 1001px) {
    margin-left: 40px;
  }
`;

const HeadDiv = styled.div`
  display: none;
  @media (max-width: 601px) {
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-top: 16px;
    margin-left: 24px;
  }
  @media (max-width: 501px) {
    margin-left: 8px;
  }
`;

const HeadText = styled.p`
  font-family: Mulish;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  width: 75%;
  margin-bottom: 40px;
`;

const ImageDiv = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 64px;
  background-color: #dff6f5;
  border-radius: 20px;
  @media (max-height: 700px) {
    height: 400px;
  }
  @media (max-height: 800px) {
    height: 600px;
  }
  @media (max-width: 1001px) {
    margin-left: 40px;
    /*  height: 824px;
     height: 100%; */
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media (max-width: 505px) {
    margin-top: 0;
  }
`;

const Col4 = styled.div`
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25.33%;
  flex: 0 0 25.33%;
  max-width: 25.33%;
  @media (max-width: 1001px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 505px) {
    display: none;
  }
  display: flex;
  justify-content: center;

  // @media (max-width: 1001px) {
  //   display: none;
  // }
`;

const CustomCol4 = styled.div`
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25.33%;
  flex: 0 0 25.33%;
  max-width: 25.33%;
  @media (max-width: 1001px) {
    flex: 0 0 30%;
    max-width: 30%;
  }
  @media (max-width: 505px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  @media (max-width: 1001px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 348px;
`;

const NavData = styled.div`
  // On active, font size and line height should be 20px and 28px
  // font-size: 20px;
  // line-height: 28px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
  font-weight: ${(props) => props.color};
  color: black;
  font-family: Roboto, sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
