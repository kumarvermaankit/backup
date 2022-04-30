import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@indywise/uikit';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import { IMentor } from '../../../interfaces/IMentor';
import { AuthContext } from '../../../contexts/AuthContext';

const Comments: React.FC<{ feedbackData: any; assessmentData: any }> = ({
  feedbackData,
  assessmentData
}) => {
  const [, setMentorData] = React.useState<IMentor>({} as IMentor);
  const { getMentorByName, fetchingList } = React.useContext(
    NewMentorsListContext
  );
  const { business } = React.useContext(AuthContext);

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
    <Container id="comments">
      <Title>COMMENTS</Title>
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
              // src="https://drive.google.com/uc?export=view&id=1Nk1Li5Ki-cTLSjuZ4xdMdQrybBuii9K8"
              src="https://drive.google.com/uc?export=view&id=1ilIn8lbIAZE6r5wCUDNhbrw19F_9ZmlQ"
              // src="https://drive.google.com/uc?export=view&id=1IJEbfuCqSwjwK4hedXJlW7213nxCUywT"
              // src="https://drive.google.com/uc?export=view&id=1ilIn8lbIAZE6r5wCUDNhbrw19F_9ZmlQ"
            />
            // <Icon size="52px" icon="defaultMentor" />
          )}
          <FeedBackUserInfoWrapper>
            <FeedbackUserInfoTitle>
              {assessmentData[0]?.mentorDetails?.name}
            </FeedbackUserInfoTitle>
            <p>Mentor</p>
          </FeedBackUserInfoWrapper>
        </Flex>
        <Comment>
          {assessmentData[0]?.comments}

          {/* {feedbackData['Weekly mentoring remarks']}
          <br />
          {feedbackData['Additional evaluation comments']}
          {feedbackData['Forecast specific remarks']} */}
        </Comment>
        {/* <Flex>
          <Avatar size="52px" />
          <TextDiv>
            <Text color="#262626" type="title" bold>
              Kabir Wadhwa
            </Text>
            <Text color="#262626" type="body">
              Manager
            </Text>
          </TextDiv>
        </Flex>
        <Text color="#4B4B4B" type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          vestibulum morbi diam donec. Adipiscing massa eget sed aliquam turpis
          morbi eu ut. Nascetur aliquet non nunc nisl volutpat mi feugiat
          vulputate. Aenean eget purus nisl non.
        </Text> */}
        {/* <Flex>
          <Icon icon="w" size="52px" />
          <TextDiv>
            <Text color="#262626" type="title" bold>
              IndyWise
            </Text>
          </TextDiv>
        </Flex>
        <Text color="#4B4B4B" type="body" size="14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          vestibulum morbi diam donec. Adipiscing massa eget sed aliquam turpis
          morbi eu ut. Nascetur aliquet non nunc nisl volutpat mi feugiat
          vulputate. Aenean eget purus nisl non.
        </Text> */}
      </MainFlex>
      {business ? (
        <div>
          <SubTitle>For Company</SubTitle>
          <SubParagraph>
            Want to share feedback about this mentee? Click on Share Feedback
            button to share your valuable opinions.
          </SubParagraph>
          <a href="https://docs.google.com/forms/d/1ttNdPfV2aOsdH9BeGkw1Snw02Fv9co_25ychwG8zF5E/">
            <Button>Share Feedback</Button>
          </a>
        </div>
      ) : null}
    </Container>
  );
};

export default Comments;

const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const MainFlex = styled.div`
  /* display: block; */
  /* width: 100%; */
  /* justify-content: space-between; */
  /* margin-bottom: 40px; */
  /* margin-top: 16px; */
`;

const FeedBackUserInfoWrapper = styled.div`
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
  color: #262626;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const SubParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #4b4b4b;
`;

const Container = styled.div`
  font-family: Roboto;
  margin-bottom: 5rem;
`;
