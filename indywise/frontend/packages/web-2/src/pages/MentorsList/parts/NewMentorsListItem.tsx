import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Text, Icon, SkillTag, Button } from '@indywise/uikit';
import { IMentorUpdated } from '../../../interfaces/IMentor';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MoreSkillsList from './MoreSkillsList';
import { stopBubbling } from '../../../utils/helpers';
import companyIcon from '../../../assets/company24.png';
import { useAuth } from '../../../contexts/AuthContext';
import Rupee from '../../../assets/Rupee 24px.svg';
import Dollar from '../../../assets/Dollar 24px.svg';
import Modal from '@material-ui/core/Modal';
import Axios, { baseURL } from '../../../utils/Axios';
import EnquireFinish from '../../../assets/EnquireFinish.svg';
import goldBadge from '../../../assets/GoldBadge.svg';
import platinumBadge from '../../../assets/PlatinumBadge.svg';
import diamondBadge from '../../../assets/DiamondBadge.svg';
import indyfluencerBadge from '../../../assets/IndyfluencerBadge.svg';

export interface IMentorListItemProps extends RouteComponentProps {
  mentor: IMentorUpdated;
  page?: string | undefined;
  currency?: string;
  exchangeRate?: number;
}

const NewMentorListItem: React.FC<IMentorListItemProps> = (props) => {
  const { user } = useAuth();
  const [showMoreSkillsList, setShowMoreSkillsList] = React.useState(false);
  const { mentor, page } = props;
  const [open, setOpen] = React.useState(false);
  const [fin, setFin] = React.useState(false);

  //eslint-disable-next-line
  const [name, setName] = React.useState('');
  //eslint-disable-next-line
  const [email, setEmail] = React.useState('');
  //eslint-disable-next-line
  const [phone, setPhone] = React.useState('');
  //eslint-disable-next-line
  const [organization, setOrganization] = React.useState('');
  //eslint-disable-next-line
  const [skills, setSkills] = React.useState('');
  //eslint-disable-next-line
  const [aim, setAim] = React.useState('');

  const tierNames: any = {
    'Tier 1': 'Gold',
    'Tier 2': 'Diamond',
    'Tier 3': 'Platinum',
    'Tier X': 'Indyfluencer'
  };

  const badgeNames: any = {
    'Tier 1': 'goldBadge',
    'Tier 2': 'diamondBadge',
    'Tier 3': 'platinumBadge',
    'Tier X': 'indyfluencer'
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFinOpen = () => {
    setFin(true);
  };

  const handleFinClose = () => {
    setFin(false);
  };

  const gotoMentorCardPage = (e: any) => {
    stopBubbling(e);
    props.history.push(`/mentor/${mentor.username}`);
  };

  const truncateName = (str1: any, str2: any, numberProvided?: number) => {
    var number: number | undefined;

    if (numberProvided === undefined) {
      number = 5;
    } else {
      number = numberProvided;
    }

    const str = str1 + ', ' + str2;
    if (str?.length <= number!) {
      return str;
    }
    const editedString = str?.substr(0, number) + ' ...';
    return editedString;
  };

  const truncateSkill = (skill: any, numberProvided?: number) => {
    var number: number | undefined;

    if (numberProvided === undefined) {
      number = 5;
    } else {
      number = numberProvided;
    }

    const str = skill;
    if (str?.length <= number!) {
      return str;
    }

    if (number <= 3) {
      var editedString = str?.substr(0, number) + '';
    } else {
      // eslint-disable-next-line @typescript-eslint/no-redeclare
      var editedString = str?.substr(0, number) + '...';
    }

    return editedString;
  };

  // We want to show only first 2 skills and rest will be shown when clicked on `+X More` button.
  const skillRendered = mentor?.skills?.slice(0, 3).map((skill, index) => {
    return (
      <>
        <SkillTag
          // style={{ marginLeft: '16px' }}
          skill={
            window.innerWidth < 800 && window.location.href.includes('mentor/')
              ? truncateSkill(skill, 8)
              : window.innerWidth < 500
              ? truncateSkill(skill, 16)
              : window.innerWidth > 400 && window.innerWidth < 600
              ? truncateSkill(skill, 8)
              : window.innerWidth > 600 && window.innerWidth < 800
              ? truncateSkill(skill, 14)
              : window.innerWidth > 800 &&
                window.location.href.includes('mentor/')
              ? truncateSkill(skill, 8)
              : window.innerWidth > 800 && window.innerWidth < 1025
              ? truncateSkill(skill, 16)
              : window.innerWidth > 1025 && window.innerWidth < 1400
              ? truncateSkill(skill, 16)
              : truncateSkill(skill, 16)
          }
          // colorType={getSkillColorType(skill.category as SkillCategory)}
          key={index}
          style={{ margin: '2px' }}
        />
      </>
    );
  });

  const moreSkillsText = 'See All';

  const showMoreSkills = (e: any) => {
    stopBubbling(e);
    setShowMoreSkillsList(!showMoreSkillsList);
  };

  let source;
  if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'goldBadge') {
    source = goldBadge;
  } else if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'platinumBadge') {
    source = platinumBadge;
  } else if (badgeNames[mentor?.tier && mentor?.tier[0]] === 'diamondBadge') {
    source = diamondBadge;
  } else {
    source = indyfluencerBadge;
  }

  let priceToShow = 0;
  if (mentor?.sessions?.discountedPrice) {
    priceToShow = parseInt(
      (mentor?.sessions?.discountedPrice * 0.014).toFixed(2),
      10
    );
  } else if (mentor?.tier?.includes('Tier 1')) {
    priceToShow = 15;
  } else if (mentor?.tier?.includes('Tier 2')) {
    priceToShow = 25;
  } else if (mentor?.tier?.includes('Tier 3')) {
    priceToShow = 40;
  } else if (mentor?.tier?.includes('Tier X')) {
    priceToShow = parseInt(
      (mentor?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  } else {
    priceToShow = parseInt(
      (mentor?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  }

  return (
    <Card page={page || ''}>
      <Top onClick={(e: any) => gotoMentorCardPage(e)}>
        <Avatar src={mentor?.avatar} size="72px" type="mentor" />
        <Text
          type="title"
          bold
          size="20px"
          color="#262626"
          style={{ marginLeft: '1rem', lineHeight: '24px', width: '100%' }}
        >
          {window.innerWidth < 300 && window.location.href.includes('mentor/')
            ? truncateSkill(mentor?.name, 4)
            : window.innerWidth > 300 &&
              window.innerWidth < 400 &&
              window.location.href.includes('mentor/')
            ? truncateSkill(mentor?.name, 8)
            : window.innerWidth > 400 &&
              window.innerWidth < 500 &&
              window.location.href.includes('mentor/')
            ? truncateSkill(mentor?.name, 10)
            : window.innerWidth > 500 &&
              window.innerWidth < 800 &&
              window.location.href.includes('mentor/')
            ? truncateSkill(mentor?.name, 12)
            : window.innerWidth < 500
            ? truncateSkill(mentor?.name, 18)
            : window.innerWidth > 500 && window.innerWidth < 600
            ? truncateSkill(mentor?.name, 14)
            : window.innerWidth > 600 && window.innerWidth < 800
            ? truncateSkill(mentor?.name, 11)
            : window.innerWidth > 800 && window.innerWidth < 1025
            ? truncateSkill(mentor?.name, 20)
            : window.innerWidth > 1025 && window.innerWidth < 1200
            ? truncateSkill(mentor?.name, 9)
            : window.innerWidth > 1200 && window.innerWidth < 1400
            ? truncateSkill(mentor?.name, 14)
            : window.innerWidth > 1400 && window.innerWidth < 1600
            ? truncateSkill(mentor?.name, 22)
            : truncateSkill(mentor?.name, 100)}

          <Text
            type="body"
            size="14px"
            color="#4B4B4B"
            style={{ marginTop: '4px', marginBottom: '-3px' }}
          >
            {`${mentor?.portfolio?.location?.city} ${mentor?.portfolio?.location?.country}`}
          </Text>
          <MobileFlex>
            <Flex>
              <JobTitle style={{ margin: '5px 0' }}>
                {/* <Icon
                  icon="google"
                  size="16px"
                  style={{ marginRight: '5px' }}
                /> */}
                {/* {mentor?.employment?.slice(0, 1).map((company) => ( */}
                <div>
                  <img
                    alt="companyicon"
                    src={companyIcon}
                    style={{
                      width: '16px',
                      position: 'relative',
                      top: '1.5px'
                    }}
                  />
                </div>
                {/* ))} */}

                <Text
                  type="body"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    marginLeft: '5px'
                  }}
                  color="#4B4B4B"
                >
                  {window.innerWidth < 400 &&
                  window.location.href.includes('mentor/')
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        10
                      )
                    : window.innerWidth > 400 &&
                      window.innerWidth < 800 &&
                      window.location.href.includes('mentor/')
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        15
                      )
                    : window.innerWidth > 800 &&
                      window.innerWidth < 1000 &&
                      window.location.href.includes('mentor/')
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        25
                      )
                    : window.innerWidth > 1000 &&
                      window.innerWidth < 1200 &&
                      window.location.href.includes('mentor/')
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        50
                      )
                    : window.innerWidth > 1200 &&
                      window.location.href.includes('mentor/')
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        35
                      )
                    : window.innerWidth < 500
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        23
                      )
                    : window.innerWidth > 400 && window.innerWidth < 600
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        20
                      )
                    : window.innerWidth > 600 && window.innerWidth < 800
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        18
                      )
                    : window.innerWidth > 800 && window.innerWidth < 1025
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        28
                      )
                    : window.innerWidth > 1025 && window.innerWidth < 1200
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        16
                      )
                    : window.innerWidth > 1200 && window.innerWidth < 1400
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        22
                      )
                    : window.innerWidth > 1400 && window.innerWidth < 1600
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        27
                      )
                    : window.innerWidth > 1600 && window.innerWidth < 2000
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        38
                      )
                    : window.innerWidth >= 2000
                    ? truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        53
                      )
                    : truncateName(
                        mentor?.portfolio?.currentEmployment?.designation,
                        mentor?.portfolio?.currentEmployment?.companyName,
                        20
                      )}
                </Text>
              </JobTitle>
            </Flex>
          </MobileFlex>
          <MobileFlex>
            <Flex
              style={{
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center'
              }}
            >
              <JobTitle style={{ margin: '0 0' }}>
                {parseInt(mentor?.overAllRating + '') !== 0 ? (
                  <Star>
                    <Icon icon="star" size="20px" />
                    <Text
                      type="body"
                      size="16px"
                      color="#4B4B4B"
                      style={{ lineHeight: '19px', marginLeft: '2px' }}
                    >
                      {mentor?.overAllRating}
                    </Text>
                  </Star>
                ) : null}
              </JobTitle>
              <Icon icon="dot" size="4px" style={{ marginBottom: '30px' }} />
              <Text
                type="body"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  marginLeft: '5px',
                  float: 'end'
                }}
                color="#4B4B4B"
              >
                {mentor?.portfolio?.currentEmployment?.experience}y experience
              </Text>
            </Flex>
          </MobileFlex>
        </Text>
        {mentor?.sessions?.discountedPrice ? (
          <Icon icon="discount" size="32px" />
        ) : null}
      </Top>
      <hr style={{ width: '100%', border: '1px solid #E9E9E9' }} />
      <Bottom>
        <Skills style={{ marginBottom: '36px' }}>
          <Icon icon="skill" size="20px" />
          {skillRendered}

          <SkillDiv>
            <SkillTag
              style={{ color: '#317EC2', border: '1px solid #317EC2' }}
              skill={
                window.innerWidth < 800
                  ? truncateSkill(moreSkillsText, 7)
                  : window.innerWidth > 800 && window.innerWidth < 1300
                  ? truncateSkill(moreSkillsText, 7)
                  : truncateSkill(moreSkillsText, 10)
              }
              onClick={(e: any) => showMoreSkills(e)}
            />
          </SkillDiv>
          {showMoreSkillsList && (
            <>
              <div
                style={{ position: 'relative' }}
                onClick={(e: any) => showMoreSkills(e)}
              >
                <Icon icon="closeModal" size="20px" />
              </div>
              <MoreSkillsList skills={mentor.skills} />
            </>
          )}
        </Skills>
        <MainFlex>
          {mentor?.tier?.length > 0 ? (
            parseInt(mentor.overAllRating + '') !== 0 ? (
              <Star>
                {/* <Icon icon={badgeNames[mentor?.tier[0]]} size="20px" /> */}
                <img src={source} alt="Badge name" />
                <Text
                  type="body"
                  size="16px"
                  color="#4B4B4B"
                  style={{ lineHeight: '19px', marginLeft: '8px' }}
                >
                  {tierNames[mentor?.tier[0]]}
                </Text>
              </Star>
            ) : null
          ) : null}

          <Flex2>
            <SessionPrice>
              {!user ? (
                <>
                  <Button
                    color="tertiary"
                    style={{
                      height: '30px',
                      width: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                      // zIndex: 1000
                      // paddingBottom: "36px"
                    }}
                    onClick={handleOpen}
                  >
                    <p>Enquire</p>
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <ModalDiv>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <ModalH1>Check Mentor Availability</ModalH1>
                        <span
                          onClick={() => {
                            handleClose();
                            // handleFinOpen();
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Icon icon="redexit" />
                        </span>
                      </div>
                      <Input
                        placeholder="Name *"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Input
                        placeholder="Email *"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Input
                        placeholder="Phone *"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <Input
                        placeholder="Organization Name *"
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                      <Input
                        placeholder="Which skills are you looking to improve *"
                        onChange={(e) => setSkills(e.target.value)}
                      />
                      <Input
                        placeholder="What do you aim to achieve in this mentoring session? *"
                        onChange={(e) => setAim(e.target.value)}
                      />
                      <Button
                        color="primary"
                        style={{
                          float: 'right',
                          marginTop: '24px',
                          height: '40px',
                          width: '200px'
                        }}
                        onClick={() => {
                          if (
                            name.length > 0 &&
                            email.length > 0 &&
                            phone.length > 0 &&
                            organization.length > 0 &&
                            skills.length > 0 &&
                            aim.length > 0
                          ) {
                            const finalObject = {
                              name,
                              email,
                              phone,
                              organization,
                              skills,
                              aim,
                              ID: mentor.ID,
                              username: mentor.username,
                              link: `https://indywise.com/mentor/${mentor.username}`
                            };
                            Axios.post(
                              `${baseURL}/mentors/mentor-user/enquire`,
                              finalObject
                            ).then(() => {
                              handleClose();
                              handleFinOpen();
                            });
                          } else {
                            alert('Please fill out all the fields!');
                          }
                        }}
                      >
                        Enquire
                      </Button>
                    </ModalDiv>
                  </Modal>
                  <Modal
                    open={fin}
                    onClose={handleFinClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <EnquireFinishDiv>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }}
                      >
                        <img src={EnquireFinish} alt="Enquire Finish" />
                        <ModalH1 style={{ color: '#0C3559' }}>Success</ModalH1>
                        <p
                          style={{
                            fontFamily: 'Roboto',
                            color: '#4B4B4B'
                          }}
                        >
                          Our Mentor Experience Team will get back to you
                          shortly
                        </p>
                        <Button
                          color="primary"
                          style={{
                            // float: "right",
                            marginTop: '24px',
                            height: '40px',
                            width: '200px'
                          }}
                          onClick={handleFinClose}
                        >
                          Close
                        </Button>
                      </div>
                    </EnquireFinishDiv>
                  </Modal>
                </>
              ) : (
                <>
                  {!mentor?.sessions?.sessionPrice ||
                  mentor?.sessions?.sessionPrice === '0' ? null : (
                    <SessionPrice>
                      {props.currency === 'inr' ? (
                        <img
                          src={Rupee}
                          alt="rupee"
                          style={{
                            position: 'relative',
                            width: '16px',
                            height: '16px'
                          }}
                        ></img>
                      ) : props.currency === 'usd' ? (
                        <img
                          src={Dollar}
                          alt="dollar"
                          style={{
                            position: 'relative',
                            width: '16px',
                            left: '3px',
                            height: '16px'
                          }}
                        ></img>
                      ) : (
                        <img
                          src={Rupee}
                          alt="rupee"
                          style={{
                            position: 'relative',
                            width: '16px',
                            height: '16px'
                          }}
                        ></img>
                      )}
                      <Text
                        type="body"
                        size="12px"
                        style={{
                          margin: '0 0 0 2px',
                          display: 'flex'
                        }}
                        color="#262626"
                      >
                        <div
                          className="sessionPriceDiv"
                          style={{ fontSize: '16px', fontWeight: 'bold' }}
                        >
                          {props.currency === 'inr'
                            ? priceToShow * 73
                            : priceToShow}
                        </div>
                        /hr
                      </Text>
                    </SessionPrice>
                  )}
                </>
              )}
            </SessionPrice>
          </Flex2>
        </MainFlex>
      </Bottom>
    </Card>
  );
};

export default withRouter(NewMentorListItem);

const Card = styled.div<{ page: string }>`
  // height: 125px;
  // height: 256px;
  width: 88%;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.349);
  border-radius: 12px;
  display: flex;
  padding: 16px 24px;
  margin-right: 16px;
  flex-direction: column;
  /* margin: ${({ page }) =>
    page === 'card' ? '3rem 2rem 6rem 1rem' : '0 0 2rem 0'}; */
  position: relative;

  user-select: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 540px) {
    // width: 19rem;
  }

  @media (max-width: 415px) {
    // margin-left: 1.5rem;
    // width: 21.5rem !important;
  }
  @media (max-width: 411px) {
    // margin-left: 1.5rem;
    // width: 21rem;
  }

  /* @media (max-width: 530px) {
    width: ${({ page }) => (page === 'card' ? 'auto' : '90%')};
    height: auto;
    margin: ${({ page }) =>
    page === 'card' ? 'auto 1vw 4vh auto' : 'auto auto 4vh auto'};
  } */
`;

const ModalDiv = styled.div`
  height: 85vh;
  width: 480px;
  overflow-y: auto;
  padding: 40px 40px 24px 40px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  margin: auto;
  @media (max-width: 1001px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const EnquireFinishDiv = styled.div`
  height: 360px;
  width: 480px;
  padding: 40px 40px 24px 40px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  margin: auto;
  margin-top: 150px;
  @media (max-width: 1001px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 7vh;
  border: 0px;
  border-bottom: 1px solid #a3a3a3;
  ouline: none;
  padding-bottom: 4px;
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;
  &:focus {
    outline: none;
  }
`;

const ModalH1 = styled.h1`
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #262626;
`;

const Top = styled.div`
  display: flex;

  @media (max-width: 530px) {
    h1 {
      font-size: 16px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  position: relative;
`;

const MainFlex = styled.div`
  position: absolute;
  bottom: 16px;
  width: 87%;
  display: flex;
  justify-content: space-between;
`;

const Flex2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
`;

const MobileFlex = styled.div`
  @media (max-width: 530px) {
  }

  @media (max-width: 415px) {
  }
`;

const SkillDiv = styled.div`
  margin-left: 2px !important;
  div {
    margin-left: 2px !important;
    p {
      color: #317ec2;
    }
  }
`;

const SessionPrice = styled.div`
  display: flex;
  align-items: center;
  // position: absolute;
  // right: 30px !important;
  // bottom: 24px;

  @media (max-width: 530px) {
    display: none;
  }

  @media (max-width: 415px) {
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 24px;

  span {
    svg {
      path {
        stroke: #727272;
      }
    }
  }

  width: fit-content;

  div {
    margin-left: 10px;
  }
  @media (max-width: 1024px) {
    // width: 40vw;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 2vw;

    div {
      margin-left: 2vw !important;
      p {
      }
    }
  }

  @media (max-width: 415px) {
    // position: relative !important;
    // bottom: 1.5rem;
    // right: 5rem !important;

    // width: 20rem;
    margin-left: 2vw;
    div {
      // width: 20rem;
    }
  }
`;

const JobTitle = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;
