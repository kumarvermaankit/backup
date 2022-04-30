import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Text, Icon, SkillTag } from '@indywise/uikit';
import { IMentee, SkillCategory } from '../../../interfaces/IMentee';
import { getSkillColorType } from '../../../utils/getSkillColorType';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MoreSkillsList from './MoreSkillsList';
import KPI from './KPI';
import CircleProgress from './CircularProgressValue';
import EnquireModal from './EnquireModal';
import { stopBubbling } from '../../../utils/helpers';

export interface IMenteeListItemProps extends RouteComponentProps {
  mentee: IMentee;
  page?: string | undefined;
}

const MenteeListItem: React.FC<IMenteeListItemProps> = (props) => {
  const [showMoreSkillsList, setShowMoreSkillsList] = React.useState(false);
  const [showMoreWinsList, setShowMoreWinsList] = React.useState(false);
  const { mentee, page } = props;

  // const gotoMenteeCardPage = (e: any) => {
  //   stopBubbling(e);
  //   props.history.push(`/mentee/${mentee.username}`);
  // };

  const showSkillsNumber = window.innerWidth >= 530 ? 2 : 1;
  // const showSkillsNumber = 1;

  // We want to show only first 2 skills and rest will be shown when clicked on `+X More` button.
  const skillRendered = mentee.skilledIn
    .slice(0, showSkillsNumber)
    .map((skill, index) => {
      return (
        <SkillTag
          skill={skill.skill}
          colorType={getSkillColorType(skill.category as SkillCategory)}
          key={index}
        />
      );
    });

  const WinRendered = mentee.wantsInternshipIn
    .slice(0, showSkillsNumber)
    .map((skill, index) => {
      return (
        <SkillTag
          skill={skill.skill}
          colorType={getSkillColorType(skill.category as SkillCategory)}
          key={index}
        />
      );
    });

  const totalSkills: number = mentee.skilledIn.length;
  // This value will be used on the button `+X More` to show a list of remaining skills.
  const numberOfSkillsHidden =
    totalSkills > showSkillsNumber ? totalSkills - showSkillsNumber : 0;
  const moreSkillsText = `+ ${numberOfSkillsHidden} More`; // Example - `+ 5 More`

  const numberOfWinsHidden =
    totalSkills > showSkillsNumber ? totalSkills - showSkillsNumber : 0;
  const moreWinsText = `+ ${numberOfWinsHidden} More`; // Example - `+ 5 More`

  const showMoreSkills = (e: any) => {
    stopBubbling(e);
    setShowMoreSkillsList(!showMoreSkillsList);
  };

  const showMoreWins = (e: any) => {
    stopBubbling(e);
    setShowMoreWinsList(!showMoreWinsList);
  };

  const overallScore = () => {
    if (mentee.KPIs?.length > 0) {
      const score =
        mentee.KPIs?.length > 0
          ? mentee.KPIs.reduce(
              (accum, item) => Number(accum) + Number(item.value),
              0
            )
          : 0;

      const finalScore = score / mentee.KPIs.length;
      return Number(finalScore.toFixed(1));
    }

    return 0;
  };

  return (
    // <Card page={page || ''} onClick={(e: any) => gotoMenteeCardPage(e)}>
    <Card page={page || ''}>
      <LeftPart certified={mentee.certified}>
        {mentee.avatar ? (
          <Avatar src={mentee.avatar} size="160px" type="mentee" />
        ) : (
          <Icon icon="defaultMentor" size="160px" />
        )}
        {mentee.certified ? (
          <Certified>
            <Icon icon="certified" size="28px" />
            <Text type="body" bold color="#6B4603">
              Certified Intern
            </Text>
          </Certified>
        ) : null}
      </LeftPart>
      <RightPart>
        <TopSection>
          <Text type="title" bold size="24px" color="#262626">
            {mentee.fullName}
          </Text>
          <SessionPrice>
            <Text color="#4B4B4B" type="body" size="16px">
              {overallScore() === 0
                ? 'No Assessment Score'
                : 'Overall KPI Score'}
            </Text>
            {mentee.kpiValue === 0 ? null : (
              <CircleProgress value={mentee.kpiValue} />
            )}
          </SessionPrice>
        </TopSection>
        <Flex>
          <Icon icon="star" size="16px" />
          <Text
            type="body"
            color="#4B4B4B"
            style={{ lineHeight: '19px', marginLeft: '2px' }}
          >
            {mentee.rating || '- -'}
          </Text>
          <HideLocation>
            <Icon
              icon="dot"
              size="0.25em"
              style={{ marginLeft: '16px', marginRight: '16px' }}
            />
            <Icon icon="location" size="24px" />
            <Text
              type="body"
              color="#4B4B4B"
              style={{ margin: '0 16px', alignSelf: 'center' }}
            >
              {`${mentee.locationCity || '-'}, ${
                mentee.locationCountry || '-'
              }`}
            </Text>
          </HideLocation>
          <Icon
            icon="dot"
            size="0.25em"
            style={{ alignSelf: 'baseline', marginRight: '16px' }}
          />
          <Icon icon="institute" size="24px" />
          <Text
            type="body"
            color="#4B4B4B"
            style={{ margin: '0 16px', lineHeight: '19px' }}
          >
            {`${mentee.collegeName || '-'}, ${mentee.collegeLocation || '-'}`}
          </Text>
          <Icon icon="dot" size="0.25em" style={{ alignSelf: 'baseline' }} />
          <Text
            type="body"
            color="#4B4B4B"
            style={{ marginLeft: '16px', lineHeight: '19px' }}
          >
            Experience - {mentee.experience || 0}y
          </Text>
        </Flex>
        <MobileSessionPrice>
          <HideLocation>
            <Icon icon="star" size="24px" />
            <Text
              type="body"
              color="#4B4B4B"
              style={{ lineHeight: '19px', marginLeft: '2px' }}
            >
              {mentee.rating || '-'}
            </Text>
            <Icon
              icon="dot"
              size="0.25em"
              style={{ marginLeft: '16px', marginRight: '16px' }}
            />
            <Icon icon="location" size="24px" />
            <Text
              type="body"
              color="#4B4B4B"
              style={{ margin: '0 16px', alignSelf: 'center' }}
            >
              {mentee.locationCountry || '-'}
            </Text>
          </HideLocation>
          <HideLocation>
            <Icon icon="dot" size="0.25em" style={{ marginRight: '16px' }} />
            <Icon icon="institute" size="24px" />
            <Text
              type="body"
              color="#4B4B4B"
              style={{ margin: '0 16px', alignSelf: 'center' }}
            >
              {`${mentee.collegeName || '-'}, ${mentee.collegeLocation || '-'}`}
            </Text>
          </HideLocation>
          <HideLocation>
            <Icon icon="dot" size="0.25em" />
            <Text
              type="body"
              style={{ marginLeft: '16px', lineHeight: '19px' }}
            >
              Experience - {mentee.experience || '0'}y
            </Text>
          </HideLocation>
          <HideLocation>
            <Text type="body" color="#4B4B4B" style={{ marginRight: '2vw' }}>
              {overallScore() === 0
                ? 'No Assessment Score'
                : 'Overall KPI Score'}
            </Text>
            {overallScore() === 0 ? null : (
              <CircleProgress value={overallScore()} />
            )}
          </HideLocation>
        </MobileSessionPrice>
        {overallScore() === 0 ? null : <KPI kpi={mentee.KPIs} />}
        <Skills>
          <Div>
            <Text type="body" color="#4B4B4B">
              Wants Internship In -{' '}
            </Text>
            {WinRendered}
            {numberOfWinsHidden > 0 && !showMoreWinsList && (
              <SkillTag
                skill={moreWinsText}
                onClick={(e: any) => showMoreWins(e)}
              />
            )}
            {showMoreWinsList && (
              <>
                <div
                  style={{ position: 'relative' }}
                  onClick={(e: any) => showMoreWins(e)}
                >
                  <Icon icon="closeModal" size="22px" />
                </div>
                <MoreSkillsList
                  skills={mentee.wantsInternshipIn.slice(showSkillsNumber)}
                />
              </>
            )}
          </Div>
          <Div>
            <Text type="body" color="#4B4B4B" style={{ marginLeft: '2vw' }}>
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
              <>
                <div
                  style={{ position: 'relative' }}
                  onClick={(e: any) => showMoreSkills(e)}
                >
                  <Icon icon="closeModal" size="22px" />
                </div>
                <MoreSkillsList
                  skills={mentee.skilledIn.slice(showSkillsNumber)}
                />
              </>
            )}
          </Div>
        </Skills>
        <Description>
          <Text type="paragraph" color="#4B4B4B">
            {!mentee.objective || mentee.objective === '-'
              ? 'Objective - Not Specified'
              : mentee.objective}
          </Text>
          <EnquireModal mentee={mentee} />
        </Description>
      </RightPart>
    </Card>
  );
};

export default withRouter(MenteeListItem);

const Card = styled.div<{ page: string }>`
  width: ${({ page }) => (page === 'card' ? 'auto' : '100%')};
  height: auto;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.349);
  border-radius: 10px;
  display: flex;
  margin: ${({ page }) =>
    page === 'card' ? '3rem 2rem 6rem 1rem' : '0 0 2rem 0'};
  position: relative;
  user-select: none;

  // &:hover {
  //   cursor: pointer;
  // }

  @media (max-width: 530px) {
    width: ${({ page }) => (page === 'card' ? 'auto' : '90%')};
    height: auto;
    margin: ${({ page }) =>
      page === 'card' ? 'auto 1vw 4vh auto' : 'auto auto 4vh auto'};
  }
`;

const Flex = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 530px) {
    display: none;
  }
`;

const MobileSessionPrice = styled.div`
  display: none;

  @media (max-width: 530px) {
    display: block;
    margin-top: 2vh;
  }
`;

const LeftPart = styled.div<{ certified: boolean }>`
  padding: 2vw;
  width: 15vw;

  span {
    svg {
      border: ${({ certified }) => (certified ? '2px solid #F2A922' : 'unset')};
      border-radius: 50%;
    }
  }

  div {
    img {
      border: ${({ certified }) => (certified ? '2px solid #F2A922' : 'unset')};
      border-radius: 50%;
    }
  }

  @media (min-width: 530px) and (max-width: 900px) {
    span {
      svg {
        height: 15vw;
        width: 15vw;
      }
    }
    div {
      img {
        height: 15vw;
        width: 15vw;
      }
    }
  }

  @media (max-width: 530px) {
    padding: 3vw;
    width: auto;
    height: 25vw;

    div {
      img {
        height: 25vw;
        width: 25vw;
      }
    }
    span {
      svg {
        height: 25vw;
        width: 25vw;
      }
    }
  }
`;

const RightPart = styled.div`
  margin: 24px 0;
  width: 100%;

  @media (max-width: 530px) {
    max-width: none;

    h1 {
      margin: 3vw auto 1vh auto;
      font-size: 6vw;
    }
  }
`;

const SessionPrice = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  div {
    margin-left: 16px;
    div {
      margin: auto;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const HideLocation = styled.div`
  display: flex;

  @media (max-width: 530px) {
    align-items: center;
    margin-top: 1vh;

    span {
      svg {
        vertical-align: top;
      }
    }
  }
`;

const Div = styled.div`
  p,
  div {
    margin-right: 1vw;
  }

  @media (max-width: 530px) {
    margin-left: -28vw !important;
    flex-wrap: wrap;
  }
`;

const Skills = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  width: fit-content;
  position: relative;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1100px) {
    width: 100%;
    display: contents;

    div {
      margin-top: 1vh;
      p {
        margin-left: 0% !important;
      }
    }
  }

  @media (max-width: 530px) {
    width: 85vw;
    margin-left: -28vw;
    margin-top: 6vh;

    div {
      p {
        font-size: 3.5vw;
      }
    }
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;

  p {
    line-height: 24px;
  }

  @media (max-width: 530px) {
    display: block;
    margin: 2vh 0vw 3vh -28vw;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Certified = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 10px;
    svg {
      border: none;
    }
  }
`;
