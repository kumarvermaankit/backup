import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text, Icon, Avatar, SkillTag } from '@indywise/uikit';
//import KPI from './KPI';
// import { IMentee } from '../../../interfaces/IMentee';
// import { api } from '../../../api';
// import Carousel from 'react-elastic-carousel';
// import Switch from './Switch';

// Accordion Import starts

import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { ExpandLess } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

// Accordion Import ends

const Accordion = withStyles({
  root: {
    '&:before': {
      display: 'none'
    },
    borderBottom: '1px solid #E9E9E9'
  }
})(MuiAccordion);

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 430, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 768, itemsToShow: 2 },
//   { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 1200, itemsToShow: 3 },
//   { width: 3000, itemsToShow: 3 }
// ];

const Bio: React.FC<any> = (props) => {
  const [basicDetails, setBasicDetails] = React.useState<any>({});
  // const [studiesAndCertification, setStudiesAndCertification] = React.useState<
  //   any
  // >({});
  const [skillExperience, setSkillExperience] = React.useState<any>({});
  const experience = skillExperience?.workExperience;
  // const education = studiesAndCertification?.education;
  // const certification = studiesAndCertification?.certifications;

  //eslint-disable-next-line
  // const [sessionDetails, setSessionDetails] = React.useState<any>({});
  // const [value, setValue] = React.useState(true);
  // const [, setToggleText] = React.useState<any>();
  // const toggletext = (val: boolean) => {
  //   if (val === true) setToggleText('enabled');
  //   else setToggleText('disabled');
  // };
  useEffect(() => {
    setBasicDetails(props.data.basicDetails);
    // setStudiesAndCertification(props.data.studiesAndCertification);
    setSkillExperience(props.data.workExperience);
  }, [props.data]);

  let priceToShow = 0;
  if (props?.profile?.sessions?.discountedPrice) {
    priceToShow = parseInt(
      (props?.profile?.sessions?.discountedPrice * 0.014).toFixed(2),
      10
    );
  } else if (props?.profile?.tier?.includes('Tier 1')) {
    priceToShow = 15;
  } else if (props?.profile?.tier?.includes('Tier 2')) {
    priceToShow = 25;
  } else if (props?.profile?.tier?.includes('Tier 3')) {
    priceToShow = 40;
  } else if (props?.profile?.tier?.includes('Tier X')) {
    priceToShow = parseInt(
      (props?.profile?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  } else {
    priceToShow = parseInt(
      (props?.profile?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  }

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
              className="avatar"
              style={{ marginRight: '16px' }}
              src={props?.profile?.avatar}
            />
            <BioPart>
              <Text type="h2" color="#262626">
                {`${props.user?.firstName} ${props.user?.lastName}`}
              </Text>
              <Detail>
                <Experience>
                  <Icon icon="jobIcons" color="#262626" size="20px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {skillExperience?.experience
                      ? `${skillExperience?.experience}y Experience`
                      : 'Currently Working(Not specified)'}
                  </Text>
                </Experience>
                {/* <Seperater /> */}
                <Location>
                  <Icon icon="location" color="#262626" size="20px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {props?.profile?.portfolio?.location
                      ? `${props?.profile?.portfolio?.location?.city},
                    ${props?.profile?.portfolio?.location?.country}`
                      : `No location Specified`}
                  </Text>
                </Location>
                {/*  <Seperater /> */}
                <Rating>
                  <Icon icon="star" size="16px" />
                  <Text type="paragraph" color="#4B4B4B">
                    {/* {rating ? rating : '--'} */}
                  </Text>
                </Rating>
              </Detail>
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
          <LineFlex>
            <HeadText>My Highlights</HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() => props.openModalHandler('My Highlights', 4)}
              />
            </IconContainer>
          </LineFlex>
          <Text type="body" color="#727272">
            {props?.profile?.about?.length
              ? props.profile.about
              : 'Write down your about your personality to give your portfolio a human touch (max 200 characters)'}
          </Text>
          <LineFlex>
            <HeadText>Skill Experience</HeadText>
            <IconContainer>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
                onClick={() => props.openModalHandler('Skills Experience', 5)}
              />
            </IconContainer>
          </LineFlex>
          {experience?.length ? (
            experience.map((e: any) => (
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span style={{ width: '75px' }}>
                    {
                      <Avatar
                        // src={e.avatar as string}

                        size="50px"
                        style={{ marginRight: '1.5rem', display: 'inline' }}
                        type="employment"
                      />
                    }
                  </span>
                  <Text type="subtitle" style={{ color: '#4B4B4B' }}>
                    <strong>
                      <span style={{ color: '#262626' }}>{e?.designation}</span>
                    </strong>{' '}
                    <br />
                    <small
                      style={{
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'inherit',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                    >
                      {e?.organizationName}
                      {e.workedFrom && (
                        <Icon
                          icon="dot"
                          size="0.25em"
                          style={{
                            display: 'inline',
                            margin: '0.5rem',
                            color: '#4B4B4B',
                            marginBottom: '29px'
                          }}
                        />
                      )}
                      {e.workedFrom.year} to {e.workedTill.year || 'Present'}
                    </small>
                    <br />
                    {e.skills && (
                      <small style={{ fontSize: '14px', color: 'inherit' }}>
                        {/* Map e.skills */}
                        Skills: {'  '}
                        {e.skills?.map((s: any) => (
                          <CustomSkillTag>{s}</CustomSkillTag>
                          // <SkillTag
                          //   style={{
                          //     // height: "24px",
                          //     color: '#4B4B4B',
                          //     // paddingBottom: "6px"
                          //     // marginRight: '4px',
                          //     // marginBottom: "4px",
                          //     // display: "inline"
                          //   }}
                          //   skill={s}
                          // />
                        ))}
                      </small>
                    )}
                  </Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text
                    size="16px"
                    style={{ lineHeight: '28px', color: '#262626' }}
                  >
                    {e.description && e.description}
                  </Text>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Text type="subtitle" style={{ color: '#262626' }}>
              No Information Regarding Employment
            </Text>
          )}
          {/* <LineFlex type="studyCert">
            <HeadText>External Links</HeadText>
            <IconContainer style={{ cursor: 'default' }}>
              <Icon
                icon="editPen"
                size="24px"
                color="#262626"
              // onClick={() => props.openModalHandler('External Links', 6)}
              />
            </IconContainer>
          </LineFlex>
          <SkillExp>
            {education?.length || certification?.length ? (
              <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                className="menteePortfolio"
              >
                {education?.map((data: any) => (
                  <Card>
                    <CardTop>
                      <Avatar type="education" size="64px" />
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
                    <CardBottom>
                      <Text type="paragraph">{data.description}</Text>
                    </CardBottom>
                  </Card>
                ))}
              </Carousel>
            ) : (
              <Text
                type="paragraph"
                style={{ width: '100%', textAlign: 'left' }}
                color="#727272"
              >
                Add links to external handles like Github, Behance to showcase
                your work and increase your profile credibility
              </Text>
            )}
          </SkillExp> */}
          {/* <div>
            <HeadText style={{ marginTop: '40px' }}>Reviews</HeadText>
            <NoReviewsContainer>
              <Icon icon="noReviews" size="10vw" />
              <Text type="body" color="#4B4B4B">
                No reviews added yet for this mentor
              </Text>
            </NoReviewsContainer>
          </div> */}
        </Col7>
        <Col5>
          <SessionCard>
            <Div>
              <Text type="h4" color="#262626">
                Session Details
              </Text>
              {/* <IconContainer>
                <Icon
                  icon="editPen"
                  size="24px"
                  color="#262626"
                  onClick={() => props.openModalHandler('Session Details', 8)}
                />
              </IconContainer> */}
            </Div>
            <Price>
              <Text size="16px" color="#262626" bold>
                {/* {props?.aboutYself?.length ? (
                  'Price'
                ) : (
                  <div style={{ fontWeight: 'bold', display: 'block' }}>
                    Finalize Price
                  </div>
                )} */}
                Price
              </Text>
              {window.innerWidth > 1001 ? (
                <Text size="20px" color="#262626">
                  {/* {props?.aboutYself?.length ? (
                  '$ 100'
                ) : (
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#727272',
                      display: 'block'
                    }}
                  >
                    Add the price of session on per hour basis
                  </div>
                )} */}
                  <>
                    <Icon icon="dollar" size="16px" />
                    {priceToShow}
                    <small>/hr</small>
                  </>
                </Text>
              ) : (
                <Text size="20px" color="#262626" style={{ marginTop: '24px' }}>
                  {/* {props?.aboutYself?.length ? (
                    '$ 100'
                  ) : (
                    <div
                      style={{
                        fontSize: '14px',
                        color: '#727272',
                        display: 'block'
                      }}
                    >
                      Add the price of session on per hour basis
                    </div>
                  )} */}
                  <Icon icon="dollar" size="16px" />
                  {priceToShow}
                  <small>/hr</small>
                </Text>
              )}
            </Price>
            {/* <Slot>
              <Switch
                isOn={value}
                onColor="#FAEFD9"
                handleToggle={() => setValue(!value)}
                onClick={() => toggletext(!value)}
              />
              <Text size="16px" color="#000000">
                Available for sessions
              </Text>
            </Slot>
            {/* </Main> */}
          </SessionCard>
        </Col5>
        {/* <Col7>
          <div>
            <HeadText style={{ marginTop: '40px' }}>Reviews</HeadText>
            <NoReviewsContainer>
              <Icon icon="noReviews" size="10vw" />
              <Text type="body" color="#4B4B4B">
                No reviews registered yet
              </Text>
            </NoReviewsContainer>
          </div>
        </Col7> */}
      </Row>
    </div>
  );
};

export default Bio;

const HeadText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  font-family: Mulish;
  color: #262626;
  margin-bottom: 30px;
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
  @media (max-width: 1263px) {
    -webkit-box-flex: 0;
    flex: 1 0 100%;
    max-width: 100%;
  }
  @media (min-width: 1263px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 35%;
    flex: 0 0 35%;
    max-width: 35%;
    display: flex;
    justify-content: flex-end;
  }
  // -webkit-box-flex: 0;
  // -ms-flex: 0 0 35%;
  // flex: 0 0 35%;
  // max-width: 35%;
  // display: flex;
  // justify-content: flex-end;
  // @media (max-width: 1263px) {
  //   display: none;
  //   // display: block;
  //   // flex: 0 0 100%;
  //   // max-width: 100%;
  // }
`;

const LineFlex = styled.div<{ type?: string }>`
  display: ${(props) => (props.type === 'mobileInternSkill' ? 'none' : 'flex')};
  flex-direction: ${(props) =>
    props.type === 'mobileInternSkill' ? 'column' : ''};
  justify-content: space-between;
  align-items: ${(props) =>
    props.type === 'bio' || 'mobileInternSkill' ? 'center' : 'center'};
  margin: 24px 0;
  margin-top: ${(props) => (props.type === 'studyCert' ? '46px' : '')};
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

// const NoReviewsContainer = styled.div`
//   width: 100%;
//   height: auto;
//   margin: 5vh auto 10vh auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   p {
//     margin-top: 1rem;
//   }
// `;

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

// const Seperater = styled.div`
//   width: 4px;
//   height: 4px;
//   border-radius: 2px;
//   background: #4b4b4b;
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;

const Detail = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px 0;
  @media (max-width: 760px) {
    /* flex-direction: column;
    justify-content: center; 
    align-items: flex-start; */
    margin: 0;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

const Experience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 4px;
  @media (max-width: 760px) {
    margin: 4px 0;
  }
`;

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

// const SkillExp = styled.div<{
//   eLen?: number;
// }>`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ExpCard = styled.div`
//   width: 292px;
//   // height: 374px;
//   padding: 16px;
//   box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
//   border-radius: 12px;
// `;

// const Card = styled.div`
//   width: 80%;
//   padding: 16px;
//   box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
//   border-radius: 12px;
// `;

// const CardTop = styled.div`
//   display: flex;
//   h1 {
//     font-size: 20px;
//     line-height: 28px;
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: bold;
//   }
//   p {
//     font-size: 16px;
//     line-height: 24px;
//   }
// `;
// const Details = styled.div`
//   margin-left: 16px;
//   div {
//     display: flex;
//     flex-wrap: wrap;
//   }
// `;
// const CardBottom = styled.div`
//   margin: 16px 0;
//   p {
//     color: #262626;
//   }
// `;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SessionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15vh !important;

  h4 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: 1263px) {
    position: sticky;
    top: 15%;
    height: fit-content;
    width: 23vw;
    padding: 2vw;
    box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
    border-radius: 20px;
    background: #ffffff;
  }
  @media (max-width: 1263px) {
    height: fit-content;
    padding: 0;
    margin: 24px 0;
    margin-top: 46px;
  }
  @media (max-width: 1099px) {
    //width: auto;
  }
  @media (max-width: 1263px) {
    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

/* const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }

  @media (max-width: 1024px) {
    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`; */

const CustomSkillTag = styled.span`
  padding: 2px 12px;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  border-radius: 14px;
  margin-right: 4px;
  margin-bottom: 4px;
`;

const Price = styled.div`
  margin-top: 30px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1263px) {
    /* flex-direction: column !important;*/
    align-items: flex-start;
    display: block;
  }
`;

// const Timing = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const Slot = styled.div`
//   margin-top: 24px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const Slot = styled.div`
//   margin-top: 8px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;
