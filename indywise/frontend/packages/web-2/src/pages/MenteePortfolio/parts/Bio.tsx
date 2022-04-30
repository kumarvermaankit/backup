import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Icon, Avatar, SkillTag } from '@indywise/uikit';
import KPI from './KPI';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 430, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3 },
  { width: 3000, itemsToShow: 3 }
];

const Bio: React.FC<{
  user: any;
  careerObj: '';
  wantsInternshipIn: Array<string>;
  data: any;
  openModalHandler: (header: string, id: number) => void;
}> = (props) => {
  const [basicDetails, setBasicDetails] = React.useState<any>({});
  const [studiesAndCertification, setStudiesAndCertification] = React.useState<
    any
  >({});
  const [workExperience, setWorkExperience] = React.useState<any>({});
  const experience = workExperience?.workExperience;
  const education = studiesAndCertification?.education;
  const certification = studiesAndCertification?.certifications;

  useEffect(() => {
    setBasicDetails(props.data.basicDetails);
    setStudiesAndCertification(props.data.studiesAndCertification);
    setWorkExperience(props.data.workExperience);
  }, [props.data]);

  return (
    <div>
      <Row>
        <Col7>
          <LineFlex style={{ marginTop: 0 }}>
            <HeadText>Basic Details</HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() => props.openModalHandler('Basic Details', 3)}
              />
            </IconContainer>
          </LineFlex>
          <LineFlex type="bio">
            <Avatar
              type="mentee"
              src={props.user?.avatar?.large}
              className="avatar"
              style={{ marginRight: '16px' }}
            />
            <BioPart>
              <Text type="h2" color="#262626">
                {`${props.user?.firstName} ${props.user?.lastName}`}
              </Text>
              <Detail>
                <Rating>
                  <Icon icon="star" size="16px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {/* {rating ? rating : '--'} */}
                  </Text>
                </Rating>
                <Seperater />
                <Location>
                  <Icon icon="location" color="#262626" size="20px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {basicDetails?.location?.city},{' '}
                    {basicDetails?.location?.country}
                  </Text>
                </Location>
                <Seperater />
                <College>
                  <Icon icon="institute" color="#262626" size="20px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {education && education[0]?.instituteName}
                  </Text>
                </College>
                <Seperater />
                <Experience>
                  <Icon icon="jobIcons" color="#262626" size="20px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {workExperience?.experience
                      ? `${workExperience?.experience}y`
                      : 'No'}{' '}
                    Experience
                  </Text>
                </Experience>
              </Detail>
              {/* <WantInternship type="desktop">
                <Text type="paragraph" color="#4B4B4B">
                  Wants Internship In -
                </Text>
                {props?.wantsInternshipIn?.length ? (
                  props.wantsInternshipIn.map((i: any) => (
                    <SkillTag
                      style={{ margin: '0 2px', padding: '1px 8px' }}
                      skill={i}
                      key={i}
                    />
                  ))
                ) : (
                  <Text type="paragraph" color="#727272">
                    Not Filled
                  </Text>
                )}
              </WantInternship> */}
              <MentorSkills type="desktop">
                <Text type="paragraph" color="#4B4B4B">
                  Skills -
                </Text>
                {basicDetails?.skills?.length ? (
                  basicDetails?.skills?.map((i: any) => (
                    <SkillTag
                      style={{ margin: '0 2px', padding: '1px 8px' }}
                      skill={i}
                      key={i}
                    />
                  ))
                ) : (
                  <Text type="paragraph" color="#727272">
                    Not Filled
                  </Text>
                )}
              </MentorSkills>
            </BioPart>
          </LineFlex>
          <LineFlex type="mobileInternSkill">
            {/* <WantInternship>
              <Text type="paragraph" color="#4B4B4B">
                Wants Internship In -{' '}
              </Text>
              {props?.wantsInternshipIn?.length ? (
                props.wantsInternshipIn.map((i: any) => (
                  <SkillTag
                    key={i}
                    skill={i}
                    style={{ margin: '2px', padding: '1px 8px' }}
                  />
                ))
              ) : (
                <p>Not Filled</p>
              )}
            </WantInternship> */}
            <MentorSkills>
              <Text type="paragraph" color="#4B4B4B">
                Skills -{' '}
              </Text>
              {basicDetails?.skills?.length ? (
                basicDetails?.skills?.map((i: any) => (
                  <SkillTag
                    style={{ margin: '2px', padding: '1px 8px' }}
                    skill={i}
                    key={i}
                  />
                ))
              ) : (
                <p>Not Filled</p>
              )}
            </MentorSkills>
          </LineFlex>
          <LineFlex style={{ marginBottom: 0 }}>
            <HeadText style={{ marginTop: '32px' }}>Career Objective</HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() => props.openModalHandler('Career Objective', 4)}
              />
            </IconContainer>
          </LineFlex>
          <Text type="body" color="#727272">
            {props?.careerObj?.length
              ? props.careerObj
              : 'Write down your Career Objective in brief (max 200 characters)'}
          </Text>
          <LineFlex style={{ marginTop: '28px', marginBottom: 0 }}>
            <HeadText style={{ marginBottom: '32px' }}>
              Work Experience
            </HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() => props.openModalHandler('Work Experience', 5)}
              />
            </IconContainer>
          </LineFlex>

          <WorkExp eLen={experience?.length}>
            {experience?.length === 1 && (
              <ExpCard>
                <CardTop>
                  <Avatar type="employment" size="64px" />
                  <Details>
                    <Text type="h1" color="#262626">
                      {experience[0]?.designation}
                    </Text>
                    <div>
                      <Text type="paragraph" color="#4B4B4B">
                        {experience[0]?.organizationName}{' '}
                        {experience[0]?.job_status} <br />
                        {experience[0]?.workedFrom.year} -{' '}
                        {experience[0]?.workedTill.year}{' '}
                        {experience[0]?.workedTill.year -
                          experience[0]?.workedFrom.year}
                        y<br />
                        {experience[0]?.location}
                      </Text>
                    </div>
                  </Details>
                </CardTop>
                <CardBottom>
                  <Text type="paragraph">{experience[0]?.description}</Text>
                </CardBottom>
              </ExpCard>
            )}
          </WorkExp>

          <WorkExp eLen={experience?.length}>
            {experience?.length > 1 ? (
              <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                className="menteePortfolio"
              >
                {experience?.map((data: any) => (
                  <Card>
                    <CardTop>
                      {data?.avatar ? (
                        <Avatar
                          src={data?.avatar}
                          type="employment"
                          size="64px"
                        />
                      ) : (
                        <Avatar type="employment" size="64px" />
                      )}
                      <Details>
                        <Text type="h1" color="#262626">
                          {data.designation}
                        </Text>
                        <div>
                          <Text type="paragraph" color="#4B4B4B">
                            {data.organizationName} {data.job_status} <br />
                            {data.workedFrom.year} - {data.workedTill.year}{' '}
                            {data.workedTill.year - data.workedFrom.year}y<br />
                            {data.location}
                          </Text>
                        </div>
                      </Details>
                    </CardTop>
                    <CardBottom>
                      <Text type="paragraph">{data.description}</Text>
                    </CardBottom>
                  </Card>
                ))}
              </Carousel>
            ) : null}

            {(experience?.length === 0 || !experience) && (
              <Text
                type="paragraph"
                style={{ width: '100%', textAlign: 'left' }}
                color="#727272"
              >
                Add the details about the places you have worked before or are
                currently working
              </Text>
            )}
          </WorkExp>
          <LineFlex type="studyCert" style={{ marginBottom: 0 }}>
            <HeadText>Studies and Certifications</HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() =>
                  props.openModalHandler('Studies and Certifications', 6)
                }
              />
            </IconContainer>
          </LineFlex>
          <EdExp sLen={education?.length} cLen={certification?.length}>
            {education?.length === 1 && certification?.length === 0 ? (
              <ExpCard>
                <CardTop>
                  <Avatar type="education" size="64px" />
                  <Details>
                    <Text type="h1" color="#262626">
                      {education[0]?.courseName}
                    </Text>
                    <div>
                      <Text type="paragraph" color="#4B4B4B">
                        {education[0]?.instituteName}
                        <br />
                        Issued in {education[0].end.month},{' '}
                        {education[0]?.end.year}
                      </Text>
                    </div>
                  </Details>
                </CardTop>
                <CardBottom>
                  <Text type="paragraph">{education[0].description}</Text>
                  {education[0]?.certificate?.linkToCertificate?.length > 0 && (
                    <p
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        color: '#4B4B4B',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }}
                      onClick={() =>
                        window.open(
                          education[0]?.certificate?.linkToCertificate,
                          '_blank'
                        )
                      }
                    >
                      See Credential
                    </p>
                  )}
                </CardBottom>
              </ExpCard>
            ) : null}

            {certification?.length === 1 && education?.length === 0 ? (
              <ExpCard>
                <CardTop>
                  <Avatar type="education" size="64px" />
                  <Details>
                    <Text type="h1" color="#262626">
                      {certification[0]?.courseName}
                    </Text>
                    <div>
                      <Text type="paragraph" color="#4B4B4B">
                        {certification[0]?.instituteName}
                        <br />
                        Issued in {certification[0]?.end?.month},{' '}
                        {certification[0]?.end?.year}
                      </Text>
                    </div>
                  </Details>
                </CardTop>
                <CardBottom>
                  <Text type="paragraph">{certification[0].description}</Text>
                  {certification[0]?.certificate?.linkToCertificate?.length >
                    0 && (
                    <p
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        color: '#4B4B4B',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }}
                      onClick={() =>
                        window.open(
                          certification[0]?.certificate?.linkToCertificate,
                          '_blank'
                        )
                      }
                    >
                      See Credential
                    </p>
                  )}
                </CardBottom>
              </ExpCard>
            ) : null}

            {education?.length >= 1 && certification?.length >= 1 ? (
              <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                className="menteePortfolio"
              >
                {education?.map((data: any) => (
                  <Card>
                    <CardTop>
                      {data?.institutionAvatar ? (
                        <Avatar
                          src={data?.institutionAvatar}
                          type="education"
                          size="64px"
                        />
                      ) : (
                        <Avatar type="education" size="64px" />
                      )}
                      <Details>
                        <Text type="h1" color="#262626">
                          {data.courseName}
                        </Text>
                        <div>
                          <Text type="paragraph" color="#4B4B4B">
                            {data.instituteName}
                            <br />
                            Issued in {data.end.month}, {data.end.year}
                          </Text>
                        </div>
                      </Details>
                    </CardTop>
                    <CardBottom>
                      <Text type="paragraph">{data.description}</Text>
                      {data?.certificate?.linkToCertificate.length > 0 && (
                        <p
                          style={{
                            fontFamily: 'Roboto',
                            fontSize: '16px',
                            color: '#4B4B4B',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}
                          onClick={() =>
                            window.open(
                              data.certificate.linkToCertificate,
                              '_blank'
                            )
                          }
                        >
                          See Credential
                        </p>
                      )}
                    </CardBottom>
                  </Card>
                ))}
                {certification?.map((data: any) => (
                  <Card>
                    <CardTop>
                      <Avatar type="education" size="64px" />
                      <Details>
                        <Text type="h1" color="#262626">
                          {data.name}
                        </Text>
                        <div>
                          <Text type="paragraph" color="#4B4B4B">
                            {data.issuingOrganisation}
                            <br />
                            Issued in {data.recievedIn.month},{' '}
                            {data.recievedIn.year}
                          </Text>
                        </div>
                      </Details>
                    </CardTop>
                    <CardBottom>
                      <Text type="paragraph">{data.description}</Text>
                      {data?.certificate?.linkToCertificate.length > 0 && (
                        <p
                          style={{
                            fontFamily: 'Roboto',
                            fontSize: '16px',
                            color: '#4B4B4B',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}
                          onClick={() =>
                            window.open(
                              data.certificate.linkToCertificate,
                              '_blank'
                            )
                          }
                        >
                          See Credential
                        </p>
                      )}
                    </CardBottom>
                  </Card>
                ))}
              </Carousel>
            ) : null}

            {((!education && !certification) ||
              (education?.length === 0 && certification?.length === 0)) && (
              <Text
                type="paragraph"
                style={{ width: '100%', textAlign: 'left' }}
                color="#727272"
              >
                Add the details about the places you have taken Education or the
                Certificates you have received
              </Text>
            )}
          </EdExp>
          <div style={{ marginBottom: '100px' }}>
            <HeadText style={{ marginTop: '40px' }}>Reviews</HeadText>
            {props?.user?.username === 'qureshlakdawala' ||
            props?.user?.username === 'halirashika11' ? (
              <ReviewContainer>
                <RCard>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AvatarDiv>
                      <Avatar
                        src="https://drive.google.com/uc?export=view&id=18s4T46-aXx_fGxAVwE4zn7sPeYoQRmYe"
                        size="40px"
                      />
                    </AvatarDiv>
                  </div>
                  <OverflowDiv>
                    <Text
                      type="body"
                      bold
                      size="20px"
                      style={{ lineHeight: '28px', color: '#262626' }}
                    >
                      An excellent talent if guided well
                    </Text>
                    <Text
                      type="subtitle"
                      style={{
                        marginTop: '1rem',
                        lineHeight: '28px',
                        color: '#4B4B4B'
                      }}
                    >
                      When I first started mentoring Quresh he had a fairly good
                      theoretical knowledge but lacked the confidence to execute
                      and was slightly taken aback when he was made sole
                      incharge of the project. His main goal was just to earn
                      money and really didn’t care about having the right skills
                      to grow in his career. After our first session and
                      detailed discussion, Quresh was eager to learn more, he
                      did some detailed research on topics that i suggested that
                      he needed to improve on and came back with interesting
                      questions for the second session. Gradually there was a
                      spark in him to learn and grow his skills and industry
                      knowledge. He soon working on his soft skills and gained a
                      bit of confidence to handle and deliver the project given
                      to him on his own. Overall Quresh could develop into an
                      excellent talent with right guidance and in no time could
                      be a team lead.
                    </Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '8px'
                      }}
                    >
                      <small
                        style={{
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#727272'
                        }}
                      >
                        Deepak Verma
                      </small>
                    </div>
                  </OverflowDiv>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Icon color="black" icon="star" size="24px" />
                    <Text
                      type="body"
                      bold
                      size="18px"
                      style={{
                        marginLeft: '5px',
                        marginTop: '0.3rem',
                        color: '#4B4B4B'
                      }}
                    >
                      5
                    </Text>
                  </div>
                </RCard>
              </ReviewContainer>
            ) : (
              <NoReviewsContainer>
                <Icon icon="noReviews" size="10vw" />
                <Text type="body" color="#4B4B4B">
                  No reviews added yet for this mentee
                </Text>
              </NoReviewsContainer>
            )}
          </div>
        </Col7>
        <Col5>
          <KPI />
        </Col5>
      </Row>
    </div>
  );
};

export default Bio;

const ReviewContainer = styled.div`
  margin-top: 2.5em;
  position: relative;
`;

const HeadText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  font-family: Mulish;
  color: #262626;
  margin-bottom: 30px;
`;

const OverflowDiv = styled.div`
  margin-bottom: 2rem;
  margin-left: 10px;
  @media (max-width: 1263px) {
    margin-right: 270px;
  }
  @media (max-width: 943px) {
    margin-right: 0;
  }
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const Col7 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 65%;
  flex: 0 0 65%;
  max-width: 65%;
  @media (max-width: 1263px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Col5 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 35%;
  flex: 0 0 35%;
  max-width: 35%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1263px) {
    display: none;
    // display: block;
    // flex: 0 0 100%;
    // max-width: 100%;
  }
`;

// const HeadText = styled.p`
//   //styleName: Mulish/Title Bold 20;
//   font-family: Mulish;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 28px;
//   letter-spacing: 0em;
//   text-align: left;
//   color: #262626;
// `;

const LineFlex = styled.div<{ type?: string }>`
  display: ${(props) => (props.type === 'mobileInternSkill' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: ${(props) =>
    props.type === 'bio' || 'mobileInternSkill' ? 'center' : 'center'};
  margin: 24px 0;
  // margin-top: ${(props) => (props.type === 'studyCert' ? '46px' : '')};
  .avatar {
    margin-right: 24px;
    width: 120px;
    height: 120px;
  }
  h4 {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: ${(props) =>
      props.type === 'mobileInternSkill' ? 'column' : ''};
    align-items: ${(props) =>
      props.type === 'bio' || props.type === 'mobileInternSkill'
        ? 'flex-start'
        : 'center'};
    .avatar {
      width: 96px;
      height: 96px;
    }
    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const IconContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 50%;
  padding: 10px;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 1200px) {
    margin: auto 0;
  }
`;

const NoReviewsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 5vh auto 8vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 1rem;
  }
`;

const BioPart = styled.div`
  width: 100%;
  h2 {
    font-size: 24px;
    line-height: 32px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0 8px;
  }
`;

const Seperater = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: #4b4b4b;
  @media (max-width: 760px) {
    display: none;
  }
`;

const Detail = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
  @media (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

const College = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

const Experience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

// const WantInternship = styled.div<{ type?: string }>`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   @media (max-width: 760px) {
//     display: ${(props) => (props.type === 'desktop' ? 'none' : 'flex')};
//   }
// `;

const MentorSkills = styled.div<{ type?: string }>`
  display: flex;
  align-items: center;
  margin-top: 4px;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    margin-top: 0.2rem;
  }
  @media (max-width: 720px) {
    margin-top: 0.2rem;
    align-items: center;
  }
  @media (max-width: 760px) {
    display: ${(props) => (props.type === 'desktop' ? 'none' : 'flex')};
  }
`;

const EdExp = styled.div<{
  cLen: number;
  sLen: number;
}>`
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    (props?.cLen === 1 && props?.sLen === 0) ||
    (props?.sLen === 1 && props?.cLen === 0)
      ? 'start'
      : 'center'};
  align-items: center;
`;

const WorkExp = styled.div<{
  eLen?: number;
}>`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props?.eLen === 1 ? 'start' : 'center')};
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  padding: 16px;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
`;

const ExpCard = styled.div`
  width: 292px;
  // height: 374px;
  padding: 16px;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
`;

const CardTop = styled.div`
  display: flex;
  h1 {
    font-size: 20px;
    line-height: 28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
`;
const Details = styled.div`
  margin-left: 16px;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
const CardBottom = styled.div`
  margin: 16px 0;
  p {
    color: #262626;
  }
`;

const RCard = styled.div`
  width: 90%;
  display: flex;
  margin: 1.5rem auto;
  @media (max-width: 1263px) {
    width: 100%;
  }
  border-bottom: 1px solid lightgray;
  &:last-child {
    border-bottom: 0px solid lightgray;
  }
`;

const AvatarDiv = styled.div`
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
`;
