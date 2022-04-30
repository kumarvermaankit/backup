import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageView, initGA } from '../../pages/Tracking';
import Landing from './parts/Landing';
import BioAndScore from './parts/BioAndScore';
import Skillset from './parts/Skillset';
import WorkDone from './parts/WorkDone';
import PainPoints from './parts/PainPoints';
import Comments from './parts/Comments';
import Footer from './parts/Footer';
import LoadingScreen from '../../components/LoadingScreen';

import Axios, { baseURL } from '../../utils/Axios';

import { feedback } from './constants/data';
import { NewMentorsListContext } from '../../contexts/NewMentorsListContext';
import { RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

// import Navigation from './parts/Navigation';

const WiseupScorecard: React.FC<RouteComponentProps<{
  ID: string;
  sessionNumber: string;
}>> = ({ match, history }) => {
  const { getMentors } = React.useContext(NewMentorsListContext);
  const { business } = React.useContext(AuthContext);
  const [, setMentorsList] = React.useState([] as Array<any>);

  const [profileData, setProfileData] = React.useState<any>({});
  const [assessmentsData, setAssessmentsData] = React.useState<any[]>([]);
  const [coursesAssesment, setCoursesAssesment] = React.useState<any>([]);

  const [ready, setReady] = React.useState<boolean>(false);

  const ID = match.params.ID;
  const sessionNumber = parseInt(match.params.sessionNumber);

  const fetchMenteeData = async () => {
    let path = '';
    if (business) {
      path = `${baseURL}/assessment/assessment/business/all/${ID}`;
    } else {
      path = `${baseURL}/assessment/assessment/mentee`;
    }

    const res = await Axios.get(path);

    // const res = await Axios.get(
    //   `${baseURL}/assessment/assessment/business/all/${ID}`
    // );
    const res1 = await Axios.get(`${baseURL}/profile/user-info?ID=${ID}`);
    setProfileData(res1?.data);

    const filteredData = res?.data?.data?.Items?.filter(
      (item: any) => item.sessionNumber === sessionNumber
    );
    setAssessmentsData(filteredData);

    const res2 = await Axios.get(`${baseURL}/mentees/mentees/${ID}`);
    console.log('res data', res2);
    setCoursesAssesment(res2?.data?.data?.menteeCourses);

    // const filteredCourses = res?.data?.data?.Items?.map((item: any) => item)

    setReady(true);
  };

  useEffect(() => {
    initGA();
    PageView('WiseUp Scorecard');
    fetchMenteeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mentors = React.useMemo(() => {
    return getMentors();
  }, [getMentors]);

  useEffect(() => {
    setMentorsList(mentors);
  }, [mentors]);

  const feedbackData: any = feedback[14];

  return (
    <>
      {ready ? (
        <>
          <Container>
            {/* <Navigation /> */}
            <Wrapper>
              <Landing />
              <BioAndScore
                feedbackData={feedbackData}
                profileData={profileData}
                assessmentData={assessmentsData}
              />
              <Skillset
                assessmentData={assessmentsData}
                feedbackData={feedbackData}
              />
              <WorkDone
                coursesAssesment={coursesAssesment}
                feedbackData={feedbackData}
              />
              {business ? (
                <PainPoints
                  feedbackData={feedbackData}
                  assessmentData={assessmentsData}
                />
              ) : null}
              <Comments
                assessmentData={assessmentsData}
                feedbackData={feedbackData}
              />
            </Wrapper>
          </Container>
          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default WiseupScorecard;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const Wrapper = styled.div`
  // margin-left: 72px;
  flex: 1 1 0;
  padding: 35px;

  @media (max-width: 770px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: 25px;
  }
`;
