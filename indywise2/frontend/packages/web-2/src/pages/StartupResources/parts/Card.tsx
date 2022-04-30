import React from 'react';
import styled from 'styled-components';
// import resourceProfile from '../../../assets/resourceProfile.png';
import { HashLink as Link } from 'react-router-hash-link';

import { Icon } from '@indywise/uikit';

import Progress from './Progress';
import Axios, { baseURL } from '../../../utils/Axios';

const Card: React.FC<{ mentee: any; source: any }> = (props) => {
  const [type, setType] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);
  const [redirectLink, setRedirectLink] = React.useState<string>('');

  const fetchMenteeAssesment = async () => {
    const res = await Axios.get(
      `${baseURL}/assessment/assessment/business/${props.mentee.ID}`
    );
    setType(res?.data?.data?.assessmentType);
    setScore(res?.data?.data?.wiseUpScore);

    setRedirectLink(
      `/wiseup/scorecard/${props?.mentee?.ID}/${res?.data?.data?.sessionNumber}`
    );
  };

  React.useEffect(() => {
    fetchMenteeAssesment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardWrapper>
      <SectionOne>
        <img src={props?.source} alt="profile" />
        <InfoWrapper>
          <DetailWrapper>
            <Title>{props?.mentee?.name}</Title>
            <Description>{props?.mentee?.position}</Description>
            <SkillLabel>{type}</SkillLabel>
          </DetailWrapper>
          <ProgressWrapper>
            <Progress value={score} />
          </ProgressWrapper>
        </InfoWrapper>
      </SectionOne>
      <SectionTwo>
        {/* <a
          href="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/scorecards/Quresh-week6-Company.pdf"
          target="_blank"
          rel="noreferrer"
        > */}
        <Icon icon="wiseuplogo" size="50px" />
        <DownloadLink>
          <Link to={redirectLink} style={{ textDecoration: 'none' }}>
            VIEW SCORECARD
          </Link>
        </DownloadLink>
        {/* </a> */}
      </SectionTwo>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  font-family: Roboto;
  font-style: normal;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  box-shadow: 0px 8px 24px rgba(60, 84, 175, 0.16);
  border-radius: 12px;

  @media (max-width: 820px) {
    padding: 12px 20px;
  }
`;

const SectionOne = styled.section`
  display: flex;

  & > img {
    width: 76px;
    height: 76px;
    border-radius: 50%;
  }
  @media (max-width: 820px) {
    & > img {
      width: 70px;
      height: 70px;
    }
  }
  @media (max-width: 820px) {
    & > img {
      width: 76px;
      height: 76px;
    }
  }
`;

const SectionTwo = styled.div`
  // a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // }
`;

const InfoWrapper = styled.div`
  margin-left: 15px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 7px;
  }
`;

const ProgressWrapper = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  line-height: 20px;
  color: #262626;

  @media (max-width: 820px) {
    font-size: 18px;
    line-height: 18px;
  }

  @media (max-width: 675px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #4b4b4b;
  @media (max-width: 820px) {
    font-size: 13px;
    line-height: 18px;
  }
  @media (max-width: 675px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const SkillLabel = styled.div`
  padding: 2px 16px;
  box-sizing: border-box;
  border: 1px solid #cbcbcb;
  border-radius: 1000px;

  align-self: flex-start;

  @media (max-width: 820px) {
    padding: 2px 14px;
  }

  @media (max-width: 675px) {
    padding: 2px 16px;
  }
`;

const DownloadLink = styled.a`
  color: #a16a06;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 820px) {
    font-size: 14px;
  }
`;
