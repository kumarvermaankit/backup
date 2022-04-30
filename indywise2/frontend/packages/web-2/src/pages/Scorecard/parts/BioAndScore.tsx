import React from 'react';
import styled from 'styled-components';

import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import { IMentor } from '../../../interfaces/IMentor';

const BioAndScore: React.FC<{
  feedbackData: any;
  profileData: any;
  assessmentData: any;
}> = ({ feedbackData, profileData, assessmentData }) => {
  // Replace mentee image to dynamic
  const [, setMentorData] = React.useState<IMentor>({} as IMentor);

  const { getMentorByName, fetchingList } = React.useContext(
    NewMentorsListContext
  );

  React.useEffect(() => {
    if (!fetchingList) {
      const data: IMentor = getMentorByName(feedbackData['Mentor Name']);
      if (!data) {
        console.log('No data');
      }
      setMentorData(data);
    }
  }, [getMentorByName, fetchingList, feedbackData]);

  return (
    <>
      <Container id="bio">
        <FlexDiv>
          <InfoContainer>
            <div>
              <img
                // src="https://media-exp3.licdn.com/dms/image/C5103AQEsFps63as3zw/profile-displayphoto-shrink_400_400/0/1575392589702?e=1632355200&v=beta&t=4isprotr9SyNtAyRHyqDlbRR-2rRWxdVTGcYNTItWdg"
                // src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Satyajit.png"
                // src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/Lavneesh.jpeg"
                // src="https://media-exp1.licdn.com/dms/image/C4D03AQEaXgCBDC2VTg/profile-displayphoto-shrink_400_400/0/1538573825560?e=1626912000&v=beta&t=GZItYGey125R3xoRZuV5CW4J3gcK7e1HLzhh9XwBV8w"
                // src="https://media-exp3.licdn.com/dms/image/C4E03AQGmt5Z8xC8oyw/profile-displayphoto-shrink_400_400/0/1622524410260?e=1629936000&v=beta&t=DgWMLXscJwXNBmht5jxzeMw9ppPbdE2ETNDVabdSfkQ"
                src={profileData?.avatar?.large}
                alt="heading"
              />
            </div>
            <InfoTextWrapper>
              <h2>{profileData?.first_name + ' ' + profileData?.last_name}</h2>
              {/* <h2>{feedbackData['Mentee Name'] || 'Mentee'}</h2> */}
              {/* <h3>{feedbackData['Please select the assessment type']}</h3> */}
              <h3>{assessmentData[0]?.assessmentType}</h3>

              <h3 style={{ color: '#4B4B4B' }}>
                Mentor -
                <a
                  href={
                    assessmentData[0]?.mentorDetails?.username
                      ? assessmentData[0]?.mentorDetails?.username
                      : `https://indywise.com/mentor/vivek_tiwary`
                  }
                  style={{ textDecoration: 'none' }}
                >
                  {/* <Colored> {feedbackData['Mentor Name']}</Colored> */}
                  <Colored> {assessmentData[0]?.mentorDetails?.name}</Colored>
                </a>
              </h3>
              <p style={{ color: '#4B4B4B' }}>
                Session Date - {/* Wise Up Assessment Number -{' '} */}
                {/* {feedbackData['Assessment number'] || 'Not specified'} */}
                {`${assessmentData[0]?.sessionDate?.day}/${assessmentData[0]?.sessionDate?.month}/${assessmentData[0]?.sessionDate?.year}` ||
                  'Not specified'}
              </p>
              <p style={{ color: '#4B4B4B' }}>
                Session Number -{' '}
                {assessmentData[0]?.sessionNumber || 'Not specified'}
              </p>
            </InfoTextWrapper>
          </InfoContainer>
          <WiseupScoreWrapper>
            <FlexCenter>
              <h2>{assessmentData[0]?.wiseUpScore}%</h2>
              {/* <h2>57.4%</h2> */}
              {/* <h2>54.2%</h2> */}
              <h3>WiseUp Score</h3>
            </FlexCenter>
          </WiseupScoreWrapper>
        </FlexDiv>
      </Container>
    </>
  );
};

export default BioAndScore;

const Container = styled.div`
  margin-top: 2rem;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;

  & > *:first-child {
    align-self: center;
    width: 140px;

    margin-right: 2rem;

    border-radius: 100%;

    @media (max-width: 770px) {
      margin-right: 1.5rem;
    }

    @media (max-width: 600px) {
      margin: 0;
    }

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoTextWrapper = styled.div`
  font-family: Roboto;

  & > h2 {
    font-weight: bold;
    font-size: 32px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #262626;

    @media (max-width: 770px) {
      font-size: 24px;
    }
  }
  & > h3 {
    font-size: 16px;
    font-weight: normal;
    color: #4b4b4b;
  }

  & > p {
    font-size: 14px;
  }

  & > *:not(:first-child) {
    margin-top: 0;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 0.6rem;
  }
`;

const WiseupScoreWrapper = styled.div`
  align-self: center;
  padding: 40px 50px 40px;
  background: #faefd9;
  border-radius: 1000px 0px 0px 1000px;

  @media (max-width: 975px) {
    padding: 35px 20px;
  }

  @media (max-width: 770px) {
    padding: 30px 50px;
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
    padding: 16px 40px;
    border-radius: 1000px;
    width: 70%;
  }
`;

const FlexCenter = styled.div`
  flex: 0 1 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: space-evenly;
  font-family: Roboto;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  h2 {
    color: '#262626';
    margin: 0;
    font-size: 64px;
    margin-right: 2rem;

    @media (max-width: 975px) {
      font-size: 52px;
    }

    @media (max-width: 770px) {
      font-size: 32px;
      margin-right: 0;
    }

    @media (max-width: 600px) {
      margin-right: 1.2rem;
    }
  }

  h3 {
    font-size: 24px;
    margin: 0;
    color: '#4B4B4B';
    font-weight: normal;

    @media (max-width: 975px) {
      font-size: 22px;
    }

    @media (max-width: 770px) {
      font-size: 16px;
    }
  }
`;

const Colored = styled.span`
  color: #a16a06;
`;
