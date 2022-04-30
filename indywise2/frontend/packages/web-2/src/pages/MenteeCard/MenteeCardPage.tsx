import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';

import { Bio, KPI } from '../MenteeCard/parts';
import { MenteesListContext } from '../../contexts/MenteesListContext';
import { IMentee } from '../../interfaces/IMentee';
import { Helmet } from 'react-helmet';

import GoogleFormModal from '../../components/GoogleFormModal';
import { ModalState } from '../../contexts/BookingModalContext';
import { initModalState, isOnApplyPage } from '../../utils/helpers';
import { useLocation } from 'react-router-dom';

const MenteeCard: React.FC<RouteComponentProps<{ username: string }>> = ({
  match,
  history
}) => {
  const path = useLocation().pathname;
  const [, setModalState] = React.useState<ModalState>(initModalState(path));
  const [PdfModalState, setPDFModalState] = React.useState<ModalState>(
    initModalState(path)
  );
  const [VideoModalState, setVideoModalState] = React.useState<ModalState>(
    initModalState(path)
  );
  const [DownloadModalState, setDownloadModalState] = React.useState<
    ModalState
  >(initModalState(path));

  // const closeModal = () => {
  //   setModalState(ModalState.CLOSE);
  //   if (isOnApplyPage(path)) history.push('/mentees');
  // };

  const closePDFModal = () => {
    setPDFModalState(ModalState.CLOSE);
    if (isOnApplyPage(path)) history.push('/mentees');
  };

  const closeVideoModal = () => {
    setVideoModalState(ModalState.CLOSE);
    if (isOnApplyPage(path)) history.push('/mentees');
  };

  const closeDownloadModal = () => {
    setDownloadModalState(ModalState.CLOSE);
    if (isOnApplyPage(path)) history.push('/mentees');
  };

  const showModal = () => {
    setModalState(ModalState.OPEN);
  };

  const showPDFModal = () => {
    setPDFModalState(ModalState.OPEN);
  };

  const showVideoModal = () => {
    setVideoModalState(ModalState.OPEN);
  };

  // const showDownloadModal = () => {
  //   setDownloadModalState(ModalState.OPEN);
  // };

  const [menteeData, setMenteeData] = React.useState<IMentee>({} as IMentee);
  const [loading, setLoading] = React.useState(true);

  const { getMentee, fetchingList } = React.useContext(MenteesListContext);
  const username = match.params.username;

  useEffect(() => {
    initGA();
    PageView('Mentee Card');
  }, []);

  useEffect(() => {
    setLoading(true);

    if (!fetchingList) {
      const data: IMentee = getMentee(username);
      if (!data) {
        // TODO: When we have a 404 page, we can show that instead of redirecting
        history.push('/mentees');
      }
      setMenteeData(data);
      setLoading(false);
    }
  }, [getMentee, username, history, fetchingList]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Mentee - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${menteeData.fullName} - IndyWise`}</title>
        <meta name="description" content={menteeData.objective} />
      </Helmet>

      <GoogleFormModal
        modalState={PdfModalState}
        closeModal={closePDFModal}
        src="https://drive.google.com/file/d/177rqqpeUyWLNpHDCKyVzxtxvFNQn1N_2/preview"
        title="mentee cv"
      />
      <GoogleFormModal
        modalState={VideoModalState}
        closeModal={closeVideoModal}
        src="https://drive.google.com/file/d/1CvU5VqMYrJcKAZMMe_UJvv0unHI9J24c/preview"
        title="mentee video assessment"
      />
      <GoogleFormModal
        modalState={DownloadModalState}
        closeModal={closeDownloadModal}
        src="https://drive.google.com/uc?export=download&id=177rqqpeUyWLNpHDCKyVzxtxvFNQn1N_2"
        title="mentee cv download"
      />
      <Header />
      <Container>
        <Wrapper>
          <Bio
            mentee={menteeData}
            showModal={showModal}
            showPDFModal={showPDFModal}
            showVideoModal={showVideoModal}
            // showDownloadModal={showDownloadModal}
          />
        </Wrapper>
        <KPI />
      </Container>
      <Footer />
    </>
  );
};

export default MenteeCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92vw;
  margin: 20vh auto;

  @media (max-width: 1099px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64vw;

  @media (max-width: 1099px) {
    width: 90vw;
  }
`;
