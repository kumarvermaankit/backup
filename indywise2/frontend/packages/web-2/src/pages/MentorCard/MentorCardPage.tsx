import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';

import {
  Bio,
  WorkExperience,
  About,
  RelatedMentors,
  // Reviews,
  // Checkout,
  NewCheckout,
  CheckOutMobile
} from './parts';
import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
import { IMentorUpdated } from '../../interfaces/IMentor';
import { Helmet } from 'react-helmet';
import { isOnApplyPage } from '../../utils/helpers';
// import BackgroundDesktop from '../../assets/Mentor-Card-Background.png';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import PortfolioHeader from '../../components/PortfolioHeader';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../api';

const MentorCard: React.FC<RouteComponentProps<{ username: string }>> = ({
  match,
  history
}) => {
  const [mentorData, setMentorData] = React.useState<IMentorUpdated>(
    {} as IMentorUpdated
  );
  const [portfolioData, setPortfolioData] = React.useState<any>({} as any);
  const [loading, setLoading] = React.useState(true);
  const path = useLocation().pathname;

  const { getMentor, fetchingList } = React.useContext(NewMentorsListContext);
  const username = match.params.username;
  const { user } = useAuth();
  useEffect(() => {
    initGA();
    PageView('Mentor Card');
  }, []);
  const mentorId = mentorData?.userID;

  const fetchPortfolio = async () => {
    const res = await api.mentor.FetchPortfolioMentorCard(mentorId);
    setPortfolioData(res.data.data);
  };

  useEffect(() => {
    setLoading(true);

    if (!fetchingList) {
      const data: IMentorUpdated = getMentor(username);
      if (mentorId) fetchPortfolio();
      if (isOnApplyPage(path)) {
        // As our route `mentor/apply` & `mentors/apply` conflict with the
        // routes of mentor card page, we need to do this here.
        history.push('/join-as-a-mentor/apply');
        return;
      } else if (!data) {
        // TODO: When we have a 404 page, we can show that instead of redirecting
        history.push('/mentors');
      }
      setMentorData(data);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMentor, username, history, fetchingList, path, mentorId]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Mentor - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${mentorData.name} - IndyWise`}</title>
        <meta name="description" content={mentorData?.valueProposition} />
      </Helmet>
      {!user && <Header />}
      {user && (
        <>
          <PortfolioMainHeader name="Mentor Card" />
          <PortfolioHeader type="mentor" />
        </>
      )}
      <Wrapper userV={user ? true : false}>
        <Row>
          {/* <CoverPhoto /> */}
          <Col8>
            <Bio mentor={mentorData} />
            <WorkExperience mentor={mentorData} portfolioData={portfolioData} />
            <About mentor={mentorData} />
            {/* <Reviews mentor={mentorData} /> */}
          </Col8>
          <Col4>
            {/* <Checkout mentorId={mentorId} mentor={mentorData} /> */}
            <NewCheckout mentorId={mentorId} mentor={mentorData} />
            <CheckOutMobile mentorId={mentorId} mentor={mentorData} />
          </Col4>
          <Col8>
            <RelatedMentors mentor={mentorData} />
          </Col8>
        </Row>
      </Wrapper>
      {!user && <Footer />}
    </>
  );
};

export default MentorCard;

// Styles start

// let width = window.innerWidth;
// width -= 128;

const Wrapper = styled.div<{
  userV: boolean | undefined;
}>`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  padding-top: 40px;
  padding-left: 40px;
  // padding-left: ${(props) => (props.userV ? '40px' : '40px')};
  padding-right: 0px;
  @media (max-width: 1263px) {
    padding-bottom: 20vh;
    padding-left: 40px;
    margin-top: 40px;
  }
  @media (max-width: 501px) {
    margin-top: 120px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 3vw;
`;

const Col8 = styled.div`
  flex: 0 0 66.666667%;
  position: relative;
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  @media (max-width: 1263px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Col4 = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  @media (max-width: 1263px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

// Styles end

// const CoverPhoto = styled.div`
//   width: 100%;
//   height: 240px;
//   margin: 20px 24px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   border-radius: 20px;
//   background-image: url(${BackgroundDesktop});
// `;
