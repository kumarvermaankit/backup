import React from 'react';
import { Text, Icon, SkillTag, Avatar, Button } from '@indywise/uikit';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getSkillColorType } from '../../../utils/getSkillColorType';
import { SkillCategory, IMentee } from '../../../interfaces/IMentee';
import MoreSkillsList from '../../MenteeList/parts/MoreSkillsList';
import { WorkExperience, Studies } from './';

// To stop the `onClick` event on Child element to trigger `onClick` event on Parent.
const stopBubbling = (event: any) => {
  event.stopPropagation();
  event.cancelBubble = true;
};

export interface IBioProps {
  mentee: IMentee;
  type?: string;
  showModal?: () => any;
  typeOfFile?: string;
  showPDFModal?: () => any;
  showVideoModal?: () => any;
  showDownloadModal?: () => any;
}

const Bio: React.FC<IBioProps> = (props) => {
  const [showMoreSkillsList, setShowMoreSkillsList] = React.useState(false);
  const mentee = props.mentee;

  const showSkillsNumber = window.innerWidth >= 530 ? 2 : 1;

  // We want to show only first 2 skills and rest will be shown when clicked on `+X More` button.
  const skillRendered = mentee.skilledIn
    .slice(0, showSkillsNumber)
    .map((skill) => {
      return (
        <SkillTag
          style={{ marginLeft: '16px' }}
          skill={skill.skill}
          colorType={getSkillColorType(skill.category as SkillCategory)}
          key={skill.skill}
        />
      );
    });

  const wantsInternshipInRendered = mentee.wantsInternshipIn
    .slice(0, showSkillsNumber)
    .map((skill) => {
      return (
        <SkillTag
          style={{ marginLeft: '16px' }}
          skill={skill.skill}
          colorType={getSkillColorType(skill.category as SkillCategory)}
          key={skill.skill}
        />
      );
    });

  const totalSkills: number = mentee.skilledIn.length;
  // This value will be used on the button `+X More` to show a list of remaining skills.
  const numberOfSkillsHidden =
    totalSkills > showSkillsNumber ? totalSkills - showSkillsNumber : 0;
  const moreSkillsText = `+ ${numberOfSkillsHidden} More`; // Example - `+ 5 More`

  const showMoreSkills = (e: any) => {
    stopBubbling(e);
    setShowMoreSkillsList(!showMoreSkillsList);
  };

  return (
    <>
      <FlexContainer>
        <BlockFlex>
          <AvatarContainer>
            <Avatar src={mentee.avatar} size="160px" />
          </AvatarContainer>
          <BioPart>
            {props.type !== 'pdf' && (
              <Text type="title" bold size="3vw" color="#262626">
                {mentee.fullName}
              </Text>
            )}
            <Flex>
              <Icon icon="star" size="16px" />
              <Text type="body" color="#4B4B4B">
                {mentee.rating}
              </Text>
              <Icon icon="dot" size="0.25em" />
              <Icon icon="location" color="#262626" size="20px" />
              <Text type="body" color="#4B4B4B">
                {`${mentee.locationCity}, ${mentee.locationCountry}`}
              </Text>
              <Icon icon="dot" size="0.25em" />
              <Icon icon="institute" color="#262626" size="20px" />
              <Text type="body" color="#4B4B4B">
                {`${mentee.collegeName}, ${mentee.collegeLocation}`}
              </Text>
              <Icon icon="dot" size="0.25em" />
              <Text type="body" color="#4B4B4B">
                {mentee.experience}y Experience
              </Text>
            </Flex>
            <MobileFlex>
              <Icon icon="star" size="16px" />
              <Text type="body" color="#4B4B4B">
                {mentee.rating}
              </Text>
              <Icon icon="dot" size="0.25em" />
              <Icon icon="location" color="#262626" size="20px" />
              <Text type="body" color="#4B4B4B">
                {`${mentee.locationCity}, ${mentee.locationCountry}`}
              </Text>
            </MobileFlex>
            <MobileFlex>
              <Icon icon="institute" color="#262626" size="20px" />
              <Text type="body" color="#4B4B4B">
                {`${mentee.collegeName}, ${mentee.collegeLocation}`}
              </Text>
              <Icon icon="dot" size="0.25em" />
              <Text type="body" color="#4B4B4B">
                {mentee.experience}y Experience
              </Text>
            </MobileFlex>
            <Skills>
              <Text type="body" color="#4B4B4B">
                Wants Internship In -
              </Text>
              {wantsInternshipInRendered}
            </Skills>
            <Skills>
              <Text type="body" color="#4B4B4B">
                Skilled In -
              </Text>
              {skillRendered}
              {numberOfSkillsHidden > 0 && !showMoreSkillsList && (
                <SkillTag
                  skill={moreSkillsText}
                  onClick={(e: any) => showMoreSkills(e)}
                />
              )}
              {showMoreSkillsList && (
                <CloseIcon onClick={(e: any) => showMoreSkills(e)}>
                  <Icon
                    icon="closeModal"
                    size="28px"
                    style={{ position: 'absolute', left: '72px' }}
                  />
                  <MoreSkillsList skills={mentee.skilledIn.slice(2)} />
                </CloseIcon>
              )}
            </Skills>
            <Flex>
              <Text type="body" color="#4B4B4B">
                Mentor -
              </Text>
              <Link to="/">
                <Text type="body" color="#A16A06">
                  {/* {mentee.mentor} */}
                  Rohit Mittal
                </Text>
              </Link>
            </Flex>
            {props.type !== 'pdf' && (
              <Flex>
                <Button color="secondary" onClick={props.showPDFModal}>
                  View CV
                </Button>
                <Button color="secondary" onClick={props.showVideoModal}>
                  View Video Assessment
                </Button>
                {/* <Button color="secondary" icon="download" onClick={props.showDownloadModal} >
                  Download Cv
                </Button> */}
                <Button color="secondary">View ICF Report</Button>
              </Flex>
            )}
          </BioPart>
        </BlockFlex>
      </FlexContainer>
      <Objective>
        <Text type="h4" color="#262626">
          Objective
        </Text>
        <Text type="subtitle" color="#4B4B4B">
          {mentee.objective}
        </Text>
      </Objective>
      <Objective>
        <Text type="h4" color="#262626">
          Mentor's Review
        </Text>
        <Text type="subtitle" color="#4B4B4B">
          {mentee.objective}
          {/* {mentee.mentors_review} */}
        </Text>
      </Objective>
      {props.type !== 'pdf' && (
        <>
          <Objective>
            <Text type="h4" color="#262626">
              Work Experience
            </Text>
          </Objective>
          <WorkExperience />
          <Objective>
            <Text type="h4" color="#262626">
              Studies
            </Text>
          </Objective>
          <Studies />
        </>
      )}
    </>
  );
};

export default Bio;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vh;

  p {
    align-self: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Objective = styled.div`
  margin-top: 4vh;

  h2 {
    margin-top: 2vh;
  }
`;

const BioPart = styled.div`
  margin: auto 0;
  h1 {
    line-height: 4vw;
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 7vw;
      font-family: Mulish;
      text-align: center;
      margin-bottom: 3vh;
    }
  }
`;

const AvatarContainer = styled.div`
  margin-right: 1.5rem;

  @media (max-width: 530px) {
    margin: 0vh 0vw 5vh 0vw;
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-top: 2vh;

  span {
    margin-right: 1vw;
  }

  p {
    margin-right: 1vw;
  }

  a {
    color: #a16a06;
  }

  button {
    margin-right: 2vw;
    padding: 0.2vw 1vw;
    height: auto;

    h2 {
      margin-top: 0.3vh;
    }
  }

  @media (max-width: 1099px) {
    button {
      p {
        span {
          margin-top: 0.3vh;
        }
      }
      h2 {
        margin-top: auto;
      }
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const MobileFlex = styled.div`
  display: none;
  margin-top: 2vh;
  justify-content: center;

  span,
  p {
    margin-right: 1vw;
  }

  @media (max-width: 530px) {
    display: flex;
  }
`;

const BlockFlex = styled.div`
  display: flex;

  @media (max-width: 530px) {
    display: block;
  }
`;

const CloseIcon = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
