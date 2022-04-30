import React from 'react';
import styled from 'styled-components';
import { Text, Icon, Avatar } from '@indywise/uikit';
import {
  UpdatedEmployment,
  IMentorUpdated,
  UpdatedEducation
} from '../../../interfaces/IMentor';
import '../../../components/otherBenefits.css';
import ArrowDown from '../../../assets/Arrow Down 24px.svg';
// Accordion imports start

import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandLess } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

// Accordion imports end

// Accordion Declaration

const Accordion = withStyles({
  root: {
    '&:before': {
      display: 'none'
    },
    borderBottom: '1px solid #E9E9E9'
  }
})(MuiAccordion);

const WorkExperience: React.FC<{
  mentor: IMentorUpdated;
  portfolioData: any;
}> = (props) => {
  const mentor = props.mentor;
  const {
    workExperience = {},
    studiesAndCertification = {}
  } = props?.portfolioData;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);

    if (open) {
      document
        .querySelector('#scrollTop')
        ?.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <Main>
      <div id="scrollTop">
        <HeadText>What I bring to you?</HeadText>
        <AboutShort>{mentor?.valueProposition}</AboutShort>
        <CWEText>Credentials and Work Experience</CWEText>

        {!open &&
          (workExperience?.workExperience?.length &&
          workExperience?.workExperience?.length > 0 ? (
            workExperience?.workExperience
              ?.slice(0, 2)
              .map((e: UpdatedEmployment) => (
                <Accordion elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span style={{ width: '75px' }}>
                      {
                        <Avatar
                          src={e.avatar as string}
                          size="50px"
                          style={{ marginRight: '1.5rem', display: 'inline' }}
                          type="employment"
                        />
                      }
                    </span>
                    <Text type="subtitle" style={{ color: '#4B4B4B' }}>
                      <strong>
                        <span style={{ color: '#262626' }}>
                          {e?.designation} at {e?.organizationName}
                        </span>
                      </strong>{' '}
                      <br />
                      {e.job_status}
                      {e.workedFrom && (
                        <Icon
                          icon="dot"
                          size="0.25em"
                          style={{
                            display: 'inline',
                            margin: '0.5rem',
                            color: '#4B4B4B'
                          }}
                        />
                      )}
                      {`${e.workedFrom.month || ''} ${e.workedFrom.year || ''}`}{' '}
                      to{' '}
                      {`${e?.workedTill?.month || ''} ${
                        e?.workedTill?.year || ''
                      }`}
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
            <Text type="subtitle" style={{ color: '262626' }}>
              No Information Regarding Employment
            </Text>
          ))}
        {!open &&
        workExperience?.workExperience?.length +
          studiesAndCertification?.education?.length >
          2 ? (
          <ReadButton onClick={handleOpen}>
            <img
              src={ArrowDown}
              alt="Arrow Down"
              style={{ marginRight: '12px', marginTop: '2px' }}
            />
            {workExperience?.workExperience?.length +
              studiesAndCertification?.education?.length -
              2}{' '}
            More
          </ReadButton>
        ) : null}

        {open &&
          (workExperience?.workExperience?.length &&
          workExperience?.workExperience?.length > 0 ? (
            workExperience?.workExperience?.map((e: UpdatedEmployment) => (
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span style={{ width: '75px' }}>
                    {
                      <Avatar
                        src={e.avatar as string}
                        size="50px"
                        style={{ marginRight: '1.5rem', display: 'inline' }}
                        type="employment"
                      />
                    }
                  </span>
                  <Text type="subtitle" style={{ color: '#4B4B4B' }}>
                    <strong>
                      <span style={{ color: '#262626' }}>
                        {e?.designation || ''} at {e?.organizationName || ''}
                      </span>
                    </strong>{' '}
                    <br />
                    {e?.job_status || ''}
                    {e?.workedFrom?.month && e?.workedFrom?.year && (
                      <Icon
                        icon="dot"
                        size="0.25em"
                        style={{
                          display: 'inline',
                          margin: '0.5rem',
                          color: '#4B4B4B'
                        }}
                      />
                    )}
                    {`${e?.workedFrom?.month || ''} ${
                      e?.workedFrom?.year || ''
                    }`}{' '}
                    to{' '}
                    {`${e?.workedTill?.month || ''} ${
                      e?.workedTill?.year || ''
                    }`}
                  </Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text
                    size="16px"
                    style={{ lineHeight: '28px', color: '#262626' }}
                  >
                    {e?.description && e?.description}
                  </Text>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Text type="subtitle" style={{ color: '#262626' }}>
              No Information Regarding Employment
            </Text>
          ))}
        {open &&
          (studiesAndCertification?.education?.length &&
          studiesAndCertification?.education?.length > 0 ? (
            studiesAndCertification?.education?.map((e: UpdatedEducation) => (
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span style={{ width: '75px' }}>
                    {
                      <Avatar
                        src={e?.institutionAvatar as string}
                        size="50px"
                        style={{ marginRight: '1.5rem', display: 'inline' }}
                        type="education"
                      />
                    }
                  </span>
                  <Text type="subtitle" style={{ color: '#4B4B4B' }}>
                    <strong>
                      <span style={{ color: '#262626' }}>
                        {e.courseName} from {e.instituteName}
                      </span>
                    </strong>{' '}
                    <br />
                    {e.courseType}
                    {e?.end?.year && e?.end?.month && (
                      <Icon
                        icon="dot"
                        size="0.25em"
                        style={{
                          display: 'inline',
                          margin: '0.5rem',
                          color: '#4B4B4B'
                        }}
                      />
                    )}
                    {`${e?.end?.month || ''} ${e?.end?.year || ''}`}
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
              No Information Regarding Education
            </Text>
          ))}
        {open && (
          <ReadButton onClick={handleOpen}>
            <ExpandLess />
            See Less
          </ReadButton>
        )}
      </div>
    </Main>
  );
};

export default WorkExperience;

const Main = styled.div`
  margin-right: 40px;
  margin-left: 64px;

  @media (max-width: 415px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;

const HeadText = styled.p`
  color: #262626;
  font-size: 24px;
  line-height: 32px;
  font-family: Mulish;
  font-weight: 700;
  margin-bottom: 16px;
`;

const CWEText = styled.p`
  color: #262626;
  font-size: 24px;
  line-height: 32px;
  font-family: Mulish;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const AboutShort = styled.p`
  font-family: Roboto;
  line-height: 28px;
  color: #4b4b4b;
  margin-top: 0;
  font-size: 16px;
`;

const ReadButton = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 8px;
  align-items: center;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #262626;
  border-radius: 8px;
  box-shadow: 0px 12px 18px rgba(164, 164, 164, 0.349);
  width: 160px;
  height: 40px;
  margin-bottom: 40px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }
`;
