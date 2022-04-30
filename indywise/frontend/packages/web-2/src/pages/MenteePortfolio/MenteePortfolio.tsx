import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  // Text,
  Icon
  // Button
} from '@indywise/uikit';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ModalComponent, PendingModal, PhotosModal } from './parts/index';
import { PageView, initGA } from '../../pages/Tracking';
// import Header from '../../components/Header/Header';
import PortfolioHeader from '../../components/PortfolioHeader';
// import Footer from '../../components/Footer';
import kpi from '../../assets/KPI.svg';
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
import KPIModal from './parts/Carousels/KPIModal';
import Modal from '@material-ui/core/Modal';

const MenteePortfolio: React.FC<RouteComponentProps<any>> = () => {
  const history = useHistory();
  const [skills, setSkills] = React.useState<any>([]);
  const [menteeData, setMenteeData] = React.useState<any>({});
  const [menteePortfolioData, setMenteePortfolioData] = React.useState<any>({});
  const [modalState, setModalState] = React.useState<{
    state: ModalState;
    id: number;
  }>({ state: ModalState.CLOSE, id: 0 });

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

  const [kpiModal, setKpiModal] = React.useState(false);

  const { user } = useAuth();

  useEffect(
    () => {
      if (!user) {
        return history.push('/sign-in');
      }
      initGA();
      PageView('Mentee Portfolio');
      fetchPortfolio();
      fetchMenteePortfolio();
      fetchSkills();
    },
    //eslint-disable-next-line
    [history, user]
  );

  //--------------------------------------------------------------------------------

  // state updation section
  //--------------------------------------------------------------------------------

  const submitBD = React.useCallback((data1, data2) => {
    Axios.put(
      `${baseURL}/portfolios/portfolio?section=basicDetails&user_type=mentee`,
      data1
    )
      .then((res) => fetchPortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    Axios.put(`${baseURL}/mentees/mentees/portfolio?section=career`, data2)
      .then((res) => fetchMenteePortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const submitCO = React.useCallback((data: any) => {
    Axios.put(`${baseURL}/mentees/mentees/portfolio?section=career`, data)
      .then((res) => fetchMenteePortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const submitWorkExp = React.useCallback((data: any) => {
    Axios.put(
      `${baseURL}/portfolios/portfolio?section=workExperience&user_type=mentee`,
      data
    )
      .then((res) => fetchPortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const submitStudies = React.useCallback((data: any) => {
    Axios.put(
      `${baseURL}/portfolios/portfolio?section=studiesAndCertification&user_type=mentee`,
      data
    )
      .then((res) => fetchPortfolio())
      .catch((error) => {
        console.error('There was an error!', error);
      });
    setModalState({ state: ModalState.CLOSE, id: 0 });
  }, []);

  const fetchPortfolio = async () => {
    const res = await api.mentee.FetchPortfolio();
    setMenteeData(res.data.data);
  };

  const fetchMenteePortfolio = async () => {
    const res = await api.mentee.FetchMenteePortfolio();
    setMenteePortfolioData(res.data.data.menteePortfolio);
  };

  const fetchSkills = async () => {
    const res = await Axios.get(`${baseURL}/skills/all/skills/user/`);
    setSkills(res.data.skillsInDB.skills);
  };

  delete menteePortfolioData?.career?.wantsInternshipIn;
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
      <KPI>
        <img
          onClick={() => {
            setKpiModal(true);
          }}
          src={kpi}
          alt="Kpi"
        />
      </KPI>
      <Helmet>
        <title>Mentee - IndyWise</title>
      </Helmet>
      <Modal
        open={kpiModal}
        onClose={() => setKpiModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <KPIModal setModalState={() => setKpiModal(false)} />
      </Modal>
      {/* <ModalNew>
         <KPIModal setModalState={() => setKpiModal(false)} />
       </ModalNew> */}
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
            <Icon
              onClick={() => {
                setImageModalShow(ModalState.CLOSE);
              }}
              icon="redexit"
            />
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
          <IconDiv
            onClick={() => setModalState({ state: ModalState.CLOSE, id: 0 })}
          >
            <Icon icon="redexit" />
          </IconDiv>
          <ModalComponent
            deleteImageHandler={imageDeleteHandler}
            photos={menteeData?.portfolioPhotos}
            video={menteeData?.video}
            skills={skills}
            user={user}
            title={currentModalHeader}
            id={modalState.id}
            BDState1={menteeData.basicDetails}
            BDState2={menteePortfolioData?.career}
            submitBD={submitBD}
            careerState={menteePortfolioData?.career}
            submitCS={submitCO}
            submitStd={submitStudies}
            submitWorkExp={(data: any) => submitWorkExp(data)}
            shuffleNav={openModalHandler}
            currWE={menteeData.workExperience!}
            currStd={menteeData.studiesAndCertification!}
            closeModaUtilFunction={() =>
              setModalState({ state: ModalState.CLOSE, id: 0 })
            }
          />
        </ModalNew>
      ) : null}
      {imageModalShow === ModalState.OPEN ? (
        <ModalNew>
          <CrossDiv
            onClick={() => {
              setImageModalShow(ModalState.CLOSE);
            }}
            // style={{
            //   position: 'absolute',
            //   top: '3.4rem',
            //   right: '40px',
            //   zIndex: 100,
            //   cursor: 'pointer'
            // }}
          >
            <Icon
              onClick={() => {
                setImageModalShow(ModalState.CLOSE);
              }}
              icon="redexit"
            />
          </CrossDiv>
          <PhotosModal photos={menteeData?.portfolioPhotos} />
        </ModalNew>
      ) : null}
      <Helmet>
        <title>{`${menteeData.fullName} - IndyWise`}</title>
        <meta name="description" content={menteeData.objective} />
      </Helmet>
      {/* <Header /> */}
      <PortfolioHeader type="portfolio" />
      {/* <Root> */}
      <InRoot>
        <Helmet>
          <title>Mentee - IndyWise</title>
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
        {/* <Div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Text type="h4" color="#262626">
              Status
            </Text>
          <Button
              color="secondary"
              onClick={() => setPendingModalShow(ModalState.OPEN)}
            >
              See Pending Actions
          </Button>
        </Div> */}
        {/* <Status openModal={() => setPendingModalShow(ModalState.OPEN)} /> */}
        <PhotosAndVideos
          video={menteeData?.video}
          photos={menteeData?.portfolioPhotos}
          openModal={imageModalHandler}
          openModalHandler={openModalHandler}
        />
        <Bio
          user={user}
          careerObj={menteePortfolioData?.career?.careerObjective}
          wantsInternshipIn={menteePortfolioData?.career?.wantsInternshipIn}
          data={menteeData}
          openModalHandler={openModalHandler}
        />
      </InRoot>
      {/* </Root> */}
      {/* <Footer /> */}
    </>
  );
};

export default MenteePortfolio;

const IconDiv = styled.div`
  position: absolute;
  top: 36px;
  right: 3rem;
  cursor: pointer;
  @media (max-width: 601px) {
    top: 54px;
  }
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

// const Div = styled.div`
//   button {
//     &:hover {
//       border: none;
//     }
//   }
// `;

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

// const Root = styled.div`
//   // width: unset;
//   // margin: 5vh auto 5vh 72px;
//   // @media (max-width: 1024px) {
//   //   margin: 5vh auto;
//   // }
// `;

const KPI = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1263px) {
    display: block;
    // background-color: red;
    position: fixed;
    bottom: 117px;
    z-index: 1000;
    right: 50px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
`;

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
