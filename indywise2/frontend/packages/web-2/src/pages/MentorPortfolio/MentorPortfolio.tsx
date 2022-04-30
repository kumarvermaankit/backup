import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  //Text,
  Icon
  //Button
} from '@indywise/uikit';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ModalComponent, PendingModal, PhotosModal } from './parts/index';
import { PageView, initGA } from '../../pages/Tracking';
// import Header from '../../components/Header/Header';
import PortfolioHeader from '../../components/PortfolioHeader';
// import Footer from '../../components/Footer';
import Axios, { baseURL } from '../../utils/Axios';
import {
  // Status,
  PhotosAndVideos,
  Bio
} from './parts';
import { ModalState } from '../../contexts/BookingModalContext';
import { api } from '../../api';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';

const MentorPortfolio: React.FC<RouteComponentProps<any>> = () => {
  const history = useHistory();
  const [skills, setSkills] = React.useState<any>([]);
  const [profile, setProfile] = React.useState<any>({});
  const [mentorData, setMentorData] = React.useState<any>({});
  const [modalState, setModalState] = React.useState<{
    state: ModalState;
    id: number;
  }>({ state: ModalState.CLOSE, id: 0 });

  const [mentorId, setMentorid] = React.useState('');
  // state for modal show
  const [pendingModalShow, setPendingModalShow] = React.useState<ModalState>(
    ModalState.CLOSE
  );
  const [imageModalShow, setImageModalShow] = React.useState<ModalState>(
    ModalState.CLOSE
  );
  //-----------------------
  const [currentModalHeader, setCurrentModalHeader] = React.useState<string>(
    'Add Basic Details'
  );

  const { user } = useAuth();
  const email = user?.email;

  useEffect(
    () => {
      if (!user) {
        return history.push('/sign-in');
      }
      initGA();
      PageView('Mentor Portfolio');
      fetchPortfolio();
      // fetchMentorPortfolio();
      fetchSkills();
      fetchMentorID();
    },
    //eslint-disable-next-line
    [history, user]
  );

  //--------------------------------------------------------------------------------

  // state updation section
  //--------------------------------------------------------------------------------

  const submitBD = React.useCallback((data1, data2, mentorid) => {
    // Axios.put(`${baseURL}/portfolios/portfolio?section=basicDetails`, data1)
    //   .then((res) => fetchPortfolio())
    //   .catch((error) => {
    //     console.error('There was an error!', error);
    //   });
    const portfolioPayload = {
      location: data1?.location,
      currentEmployment: data2
    };

    Axios.put(
      `${baseURL}/mentors/mentors/${mentorid}?section=portfolio`,
      portfolioPayload
    )
      .then((res) => fetchMentorID())
      .catch((error) => {
        console.error('There was an error!', error);
      });

    setModalState({ state: ModalState.CLOSE, id: 0 });

    // Axios.put(`${baseURL}/mentors/mentors/portfolio?section=about`, data2)
    //   .then((res) => fetchPortfolio())
    //   .catch((error) => {
    //     console.error('There was an error!', error);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitAY = React.useCallback((data: any, id: any) => {
    Axios.put(`${baseURL}/mentors/mentors/${id}?section=basicDetails`, data)
      .then((res) => fetchMentorID())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSkillsExp = React.useCallback((data: any) => {
    Axios.put(
      `${baseURL}/portfolios/portfolio?section=workExperience&user_type=mentor`,
      data
    )
      .then((res) => fetchPortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const submitEL = React.useCallback((data: any, id: any) => {
    Axios.put(
      `${baseURL}/mentors/mentor/portfolio/${id}?section=externalLinks`,
      data
    )
      .then((res) => console.log('response in external links: ', res))
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const submitSD = React.useCallback((data: any) => {
    Axios.put(
      `${baseURL}/mentors/mentors/portfolio?section=sessionDetails`,
      data
    )
      .then((res) => fetchMentorID())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const submitStudies = React.useCallback((data: any) => {
    Axios.put(
      `${baseURL}/portfolios/portfolio?section=studiesAndCertification`,
      data
    )
      .then((res) => fetchPortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, [baseURL]); */

  const fetchPortfolio = async () => {
    const res = await api.mentor.FetchPortfolio();
    setMentorData(res.data.data);
  };

  const fetchSkills = async () => {
    const res = await Axios.get(`${baseURL}/skills/all/skills/user/`);
    setSkills(res.data.skillsInDB.skills);
  };

  const fetchMentorID = async () => {
    const res = await Axios.get(
      `${baseURL}/mentors/mentor-user/email/${email}`
    );
    setProfile(res.data);
    setMentorid(res.data.ID);
    // try {
    // } catch(err) {
    //   return history.push('/sign-in');
    // }
  };

  //----------------------------------------------------------------------------------
  // utility functions section

  const imageModalHandler = (value: ModalState) => {
    setImageModalShow(value);
  };

  const imageDeleteHandler = () => {
    fetchPortfolio();
  };

  const openModalHandler = React.useCallback((header: string, id: number) => {
    setCurrentModalHeader(`Add ${header}`);
    setModalState({ state: ModalState.OPEN, id });
    document.documentElement.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <Helmet>
        <title>Mentor - IndyWise</title>
      </Helmet>
      {pendingModalShow === ModalState.OPEN ? (
        <ModalNew>
          <CrossDiv
            onClick={() => {
              document.documentElement.style.overflow = 'scroll';
              setPendingModalShow(ModalState.CLOSE);
            }}
            style={{
              position: 'absolute',
              top: '3.4rem',
              right: '24px',
              cursor: 'pointer'
            }}
          >
            <Icon icon="redexit" />
          </CrossDiv>
          <PendingModal
            openModal={(header: string, id: number) => {
              setPendingModalShow(ModalState.CLOSE);
              openModalHandler(header, id);
            }}
          />
        </ModalNew>
      ) : null}
      {modalState.state === ModalState.OPEN ? (
        <ModalNew>
          <div
            onClick={() => setModalState({ state: ModalState.CLOSE, id: 0 })}
            style={{
              position: 'absolute',
              top: '3.4rem',
              right: '3rem',
              cursor: 'pointer'
            }}
          >
            <Icon icon="redexit" />
          </div>
          <ModalComponent
            profile={profile ? profile : {}}
            mentorid={mentorId ? mentorId : ''}
            deleteImageHandler={imageDeleteHandler}
            photos={mentorData?.portfolioPhotos}
            video={mentorData?.video}
            skills={skills}
            user={user}
            title={currentModalHeader}
            id={modalState.id}
            BDState1={profile?.portfolio}
            BDState2={profile?.portfolio?.currentEmployment || {}}
            submitBD={submitBD}
            careerState={profile?.about}
            submitAY={submitAY}
            // SEState1={mentorData.skillsExperience}
            // SEState2={mentorPortfolioData?.career}
            // submitStd={submitStudies}
            submitSkillsExp={(data: any) => submitSkillsExp(data)}
            shuffleNav={openModalHandler}
            currSE={mentorData.workExperience!}
            //currStd={mentorData.studiesAndCertification!}
            closeModaUtilFunction={() =>
              setModalState({ state: ModalState.CLOSE, id: 0 })
            }
            // linkState={mentorPortfolioData?.links}
            submitEL={submitEL}
            SDState1={{}}
            submitSD={submitSD}
          />
        </ModalNew>
      ) : null}
      {imageModalShow === ModalState.OPEN ? (
        <ModalNew>
          <div
            onClick={() => {
              setImageModalShow(ModalState.CLOSE);
            }}
            style={{
              position: 'absolute',
              top: '24px',
              right: '16px',
              zIndex: 100,
              cursor: 'pointer'
            }}
          >
            <Icon
              onClick={() => {
                setImageModalShow(ModalState.CLOSE);
              }}
              icon="redexit"
            />
          </div>
          <PhotosModal photos={mentorData?.portfolioPhotos} />
        </ModalNew>
      ) : null}
      <Helmet>
        <title>{`${mentorData.fullName} - IndyWise`}</title>
        <meta name="description" content={mentorData.objective} />
      </Helmet>
      {/* <Header /> */}
      <PortfolioHeader type="portfolio" />
      {/* <Root> */}
      <InRoot>
        <Helmet>
          <title>Mentor - IndyWise</title>
        </Helmet>
        <PortfolioMainHeader
          name="Portfolio"
          setPendingModalShow={() => setPendingModalShow(ModalState.OPEN)}
        />
        {/* <Container>
            <Text type="h3" color="#262626">
              Portfolio
            </Text>
            <Button color="secondary">Switch to Public View</Button>
          </Container> */}
        <Div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            //marginTop: '112px'
          }}
        >
          {/* <Text type="h4" color="#262626">
              Status
            </Text>
            <Button
              color="secondary"
              onClick={() => setPendingModalShow(ModalState.OPEN)}
            >
              See Pending Actions
            </Button> */}
        </Div>
        {/* <Status openModal={() => setPendingModalShow(ModalState.OPEN)} /> */}
        <PhotosAndVideos
          video={mentorData?.video}
          photos={mentorData?.portfolioPhotos}
          openModal={imageModalHandler}
          openModalHandler={openModalHandler}
        />
        <Bio
          profile={profile}
          user={user}
          // aboutYself={mentorPortfolioData?.about?.aboutYourself}
          //wantsInternshipIn={mentorPortfolioData?.career?.wantsInternshipIn}
          data={mentorData}
          openModalHandler={openModalHandler}
        />
      </InRoot>
      {/* </Root> */}
      {/* <Footer /> */}
    </>
  );
};

export default MentorPortfolio;

const Div = styled.div`
  button {
    &:hover {
      border: none;
    }
  }
`;

const InRoot = styled.div`
  padding-top: 40px;
  padding-left: 112px;
  padding-right: 40px;
  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  // margin: auto;
  // width: 90%;
  // @media (max-width: 1024px) {
  //   width: 95%;
  // }
`;

const CrossDiv = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 40px;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 601px) {
    top: 32px;
  }
`;
/* const Root = styled.div`
  width: unset;
  margin: 5vh auto 5vh 72px;
margin-left: 2rem;
  @media (max-width: 1024px) {
    margin: 5vh auto;
    margin-left: 2rem; 
  }
`; */

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: auto;
// `;

const ModalNew = styled.div`
  position: fixed;
  z-index: 1002;
  overflow-y: auto;
  background-color: white;
  width: 100vw;
  height: 100vh;
  top: 0;
`;
