import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
// import MenteeHeader from '../../components/Header/MenteeHeader';
import SkillsetEvolution from './parts/SkillsetEvolution';
import SkillsetEvaluation from './parts/SkillsetEvaluation';
import ScorecardList from './parts/ScorecardList';
import Courses from './parts/Courses';
import PendingActions from './parts/PendingActions';
import Greeting from './parts/Greeting';
import LeftNav from './parts/LeftNav';
import { Helmet } from 'react-helmet';
import PortfolioHeader from '../../components/PortfolioHeader';
import { useAuth } from '../../contexts/AuthContext';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import Axios, { baseURL } from '../../utils/Axios';
import LoadingScreen from '../../components/LoadingScreen';

const MenteeDashBoard: React.FC = () => {
  const { user } = useAuth();

  const [coursesAssesment, setCoursesAssesment] = React.useState<any>([]);
  const [timeline, setTimeline] = React.useState([]);
  const [currentKpi, setCurrentKpi] = React.useState([]);
  const [skillset, setSkillset] = React.useState<any[]>([]);
  const [ready, setReady] = React.useState<boolean>(false);

  const fetchTimeline = async () => {
    const res = await Axios.get(`${baseURL}/assessment/assessment/mentee`);
    const res2 = await Axios.get(`${baseURL}/mentees/mentees/${user?.ID}`);
    setCoursesAssesment(res2?.data?.data?.recommendedCourses);

    const timelines = res?.data?.data?.Items?.map((i: any) => ({
      sessionNumber: i?.sessionNumber,
      wiseUpScore: i?.wiseUpScore
    })).sort((a: any, b: any) => a?.sessionNumber - b?.sessionNumber);
    setTimeline(timelines);
    const kpi = res?.data?.data?.Items[res?.data?.data?.Items?.length - 1];
    setCurrentKpi(kpi);

    const skillsets = res?.data?.data?.Items?.map((i: any) => ({
      sessionNumber: i?.sessionNumber,
      sessionDate: i?.sessionDate
    })).sort((a: any, b: any) => a?.sessionNumber - b?.sessionNumber);

    setSkillset(skillsets);
    setReady(true);
  };

  useEffect(() => {
    initGA();
    PageView('Mentee Dashboard');
    fetchTimeline();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {ready ? (
        <>
          <Helmet>
            <title>Mentee Dashboard</title>
          </Helmet>
          {user && (
            <>
              <PortfolioHeader type="dashboard" />
              <PortfolioMainHeader name="Dashboard" />
            </>
          )}
          <LeftNav />
          <Container>
            <Greeting />
            <SkillsetEvolution timeline={timeline} />
            <SkillsetEvaluation currentKpi={currentKpi} />
            <Desktop>
              <ScorecardList skillset={skillset} />
            </Desktop>
            <Courses
              coursesAssesment={coursesAssesment ? coursesAssesment : []}
            />
            <TabMob>
              <ScorecardList skillset={skillset} />
            </TabMob>
            <PendingActions />
          </Container>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default MenteeDashBoard;

const Container = styled.div`
  font-family: Mulish;
  padding-left: 100px;
  padding-right: 32px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 782px) {
    width: 100%;
    padding: 0 1rem;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    padding: 0 !important;
    flex-direction: column;
  }
`;

const Desktop = styled.div`
  flex: 1 0 auto;
  display: block;
  @media screen and (max-width: 1320px) {
    display: none;
  }
`;

const TabMob = styled.div`
  flex: 1 0 auto;
  display: none;
  @media screen and (max-width: 1320px) {
    display: block;
  }
`;
