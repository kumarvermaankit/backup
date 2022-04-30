import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@indywise/uikit';

import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import { IMentor } from '../../../interfaces/IMentor';

const PainPoints: React.FC<{ feedbackData: any; assessmentData: any }> = ({
  feedbackData,
  assessmentData
}) => {
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
    <Container id="pain-points">
      <Title>PAIN POINTS</Title>
      <Paragraph>
        Indications by the mentors on areas that are significantly affecting
        performance and are not directly related to the upskilling program’s
        objectives. These should be addressed by the mentee and his/her
        environment (including any company (s)he is working with).
      </Paragraph>
      <MainFlex>
        <Flex>
          {assessmentData[0]?.mentorDetails?.avatar ? (
            <Avatar
              size="52px"
              src={assessmentData[0]?.mentorDetails?.avatar}
            />
          ) : (
            <Avatar
              size="52px"
              // src="https://drive.google.com/uc?export=view&id=1ifbdu2x3fqemvI1YBSF_n-18HZm5-HXw"
              // src="https://drive.google.com/uc?export=view&id=1ilIn8lbIAZE6r5wCUDNhbrw19F_9ZmlQ"
              // src="https://drive.google.com/uc?export=view&id=1Nk1Li5Ki-cTLSjuZ4xdMdQrybBuii9K8"
              // src="https://drive.google.com/uc?export=view&id=1IJEbfuCqSwjwK4hedXJlW7213nxCUywT"
              src="https://drive.google.com/uc?export=view&id=1ilIn8lbIAZE6r5wCUDNhbrw19F_9ZmlQ"
            />
            // <Icon size="52px" icon="defaultMentor" />
          )}
          <FeedbackUserInfo>
            <FeedbackUserInfoTitle>
              {assessmentData[0]?.mentorDetails?.name}
            </FeedbackUserInfoTitle>
            <p>Mentor</p>
          </FeedbackUserInfo>
        </Flex>
        <Comment>{assessmentData[0]?.painPoints}</Comment>
      </MainFlex>
      <Line />
    </Container>
  );
};

export default PainPoints;

const Line = styled.div`
  margin: 5vh auto 0vh auto;
  border: 1px solid #e9e9e9;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const MainFlex = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

const FeedbackUserInfo = styled.div`
  margin-left: 0.5rem;
`;

const FeedbackUserInfoTitle = styled.h2`
  margin: 0;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: bold;
  color: #262626;
  @media (max-width: 475px) {
    font-size: 1rem;
  }

  & + p {
    font-size: 14px !important;
    color: #4b4b4b !important;
    margin: none;
    margin-top: 5px;

    @media (max-width: 475px) {
      font-size: 0.7rem !important;
    }
  }
`;

const Comment = styled.p`
  font-size: 14px;
  color: #262626;
  line-height: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  color: '#262626';
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: '#4B4B4B';
  line-height: 20px;

  @media (max-width: 475px) {
    font-size: 14px;
  }
`;

const Container = styled.div`
  font-family: Roboto;
`;
