import React from 'react';
import styled from 'styled-components';

import RadialChart from './RadialChart';
import RadarChart from './RadarChart';

const SkillsetEvaluation: React.FC<{
  feedbackData: any;
  assessmentData: any;
}> = ({ feedbackData, assessmentData }) => {
  // Conditions for initial and current
  // const avgTS: any =
  //   (feedbackData['Quality & testing: Writing code'] +
  //     feedbackData['Quality & testing: Testing'] +
  //     feedbackData['Debugging & observability: Debugging'] +
  //     feedbackData['Software design & architecture: Understanding Code'] +
  //     feedbackData['Software design & architecture: Software Architecture'] +
  //     feedbackData['Security']) /
  //   30;

  // const avgDM: any =
  //   (feedbackData['Data Analysis: Ability to analyze data and draw insights'] +
  //     feedbackData['Content: Writing and editing skills'] +
  //     feedbackData['Social Media Marketing: SEM and SEO campaigns'] +
  //     feedbackData['Paid Campaigns and Email Marketing: PPC, EM, Advertising'] +
  //     feedbackData['Basic Design Skills: graphics design and videos'] +
  //     feedbackData['Listening and CRM Skills']) /
  //   30;

  // const avgDM: any =
  //   (feedbackData['Data Analysis: Ability to analyze data and draw insights'] +
  //     feedbackData['Content: Writing and editing skills'] +
  //     feedbackData['Social Media Marketing: SEM and SEO campaigns'] +
  //     feedbackData['Paid Campaigns and Email Marketing: PPC, EM, Advertising'] +
  //     feedbackData['Basic Design Skills: graphics design and videos'] +
  //     feedbackData['Listening and CRM Skills']) /
  //   30;

  // const avgNT: any =
  //   (feedbackData['Knowledge about Typescript'] +
  //     feedbackData['Software design & architecture: Software Architecture__3'] +
  //     feedbackData['Quality & Testing: Writing code in NodeJS'] +
  //     feedbackData['Testing (unit, functional) & Debugging'] +
  //     feedbackData['Security__1'] +
  //     feedbackData['Database Usage']) /
  //   30;

  // const avgDM: any =
  //   (feedbackData['Data Analysis: Ability to analyze data and draw insights'] +
  //     feedbackData['Content: Writing and editing skills'] +
  //     feedbackData['Social Media Marketing: SEM and SEO campaigns'] +
  //     feedbackData['Paid Campaigns and Email Marketing: PPC, EM, Advertising'] +
  //     feedbackData['Basic Design Skills: graphics design and videos'] +
  //     feedbackData['Listening and CRM Skills']) /
  //   30;

  // const avgTSEA: any =
  //   (feedbackData['Organisation: Time Management'] +
  //     feedbackData['Organization: Documents Management (GDrive, etc)'] +
  //     feedbackData['Administration: Website Management'] +
  //     feedbackData['Administration: Agenda Coordination'] +
  //     feedbackData[
  //       'Content Creation: Office Suite (MS Word, Excel, Powerpoint)'
  //     ] +
  //     feedbackData['Content Creation: Email Management']) /
  //   30;

  // const avgD: any =
  //   (feedbackData['Incremental value delivery: Work breakdown'] +
  //     feedbackData['Incremental value delivery: Prioritisation, dependencies'] +
  //     feedbackData['Self-organization: Reliability, delivery accountability'] +
  //     feedbackData['Self-organization: Economic thinking']) /
  //   20;

  // const avgFCC: any =
  //   (feedbackData['Feedback: Delivering Feedback'] +
  //     feedbackData['Feedback: Seeking and receiving feedback'] +
  //     feedbackData['Communication: Effective communication'] +
  //     feedbackData['Communication: Knowledge Sharing'] +
  //     feedbackData['Collaboration: Teamwork'] +
  //     feedbackData['Collaboration: Relationship building'] +
  //     feedbackData['Collaboration: Handling disagreement']) /
  //   35;

  // const avgL: any =
  //   (feedbackData['Decision making'] +
  //     feedbackData['Driving alignment'] +
  //     feedbackData['Process thinking'] +
  //     feedbackData['Mentoring']) /
  //   20;

  // const avgSI: any =
  //   (feedbackData['Business Acumen & Strategy: Business Acumen'] +
  //     feedbackData['Business Acumen & Strategy: Product Thinking']) /
  //   10;

  const calculateAvg = (val: any): any => {
    const avg: any = (val / 5).toFixed(2);
    return (avg * 100).toFixed(2);
  };

  // const toFixedFn = (val: any): any => {
  //   const avg: any = val.toFixed(2);
  //   return parseInt((avg * 100).toFixed(1), 10);
  // };

  // const wiseupScore =
  //   (
  //     // toFixedFn(avgTS) +
  //     // toFixedFn(avgBD) +
  //     // toFixedFn(avgTSCS) +
  //     toFixedFn(avgNT) +
  //     // toFixedFn(avgDM) +
  //     // toFixedFn(avgRB) +
  //     // toFixedFn(avgTSEA) +
  //     toFixedFn(avgD) +
  //     toFixedFn(avgFCC) +
  //     toFixedFn(avgL) +
  //     toFixedFn(avgSI)
  //   ) / 5;

  //  const series=[{
  //    name:'series 1',
  //    data:[final()]
  //  }]

  const seriesData = () => {
    const skill = [
      'Technical Skills',
      'Delivery',
      'Communication',
      'Leadership',
      'Strategic Impact'
    ];

    const final = [];
    const initial = [];
    const current: any[] = [];

    for (let s of skill) {
      switch (s) {
        case 'Technical Skills':
          final.push(
            calculateAvg(assessmentData[0]?.forcastedKPIs?.technicalSkills)
          );
          initial.push(
            calculateAvg(assessmentData[0]?.initialKPIs?.technicalSkills)
          );
          current.push(
            calculateAvg(assessmentData[0]?.overAllWeeklyKPIs?.technicalSkills)
          );
          break;

        case 'Delivery':
          final.push(calculateAvg(assessmentData[0]?.forcastedKPIs?.delivery));
          initial.push(calculateAvg(assessmentData[0]?.initialKPIs?.delivery));
          current.push(
            calculateAvg(assessmentData[0]?.overAllWeeklyKPIs?.delivery)
          );

          break;

        case 'Communication':
          final.push(calculateAvg(assessmentData[0]?.forcastedKPIs?.feedback));
          initial.push(calculateAvg(assessmentData[0]?.initialKPIs?.feedback));
          current.push(
            calculateAvg(assessmentData[0]?.overAllWeeklyKPIs?.feedback)
          );
          break;

        case 'Leadership':
          final.push(
            calculateAvg(assessmentData[0]?.forcastedKPIs?.leadership)
          );
          initial.push(
            calculateAvg(assessmentData[0]?.initialKPIs?.leadership)
          );
          current.push(
            calculateAvg(assessmentData[0]?.overAllWeeklyKPIs?.leadership)
          );
          break;

        case 'Strategic Impact':
          final.push(
            calculateAvg(assessmentData[0]?.forcastedKPIs?.strategicImpact)
          );
          initial.push(
            calculateAvg(assessmentData[0]?.initialKPIs?.strategicImpact)
          );
          current.push(
            calculateAvg(assessmentData[0]?.overAllWeeklyKPIs?.strategicImpact)
          );
          break;
      }
    }
    return [initial, current, final];
  };

  return (
    <Container id="skill-evaluation">
      <Title>SKILLSET EVALUATION</Title>
      {/* <Title>SKILLSET EVALUATION {wiseupScore}</Title> */}
      <Paragraph>
        These scores are given by the mentor on a weekly basis and indicate the
        potential and capabilities of the mentee on each of the set KPIs. They
        are based on the Indywise Competency Framework tailored to the mentee’s
        role. Expectations are set by the mentor and represent the forecasted
        outcome should the mentee follow the upskilling plan as designed. Better
        scores are represented by higher percentages.
      </Paragraph>
      <ChartsContainer>
        <RadarChart
          kpi=""
          final={seriesData()[2]}
          current={seriesData()[1]}
          initial={seriesData()[0]}
        />
        <Grid>
          <RadialChart
            kpi="Technical Skills"
            current={calculateAvg(
              assessmentData[0]?.overAllWeeklyKPIs?.technicalSkills
            )}
            final={calculateAvg(
              assessmentData[0]?.forcastedKPIs?.technicalSkills
            )}
            initial={calculateAvg(
              assessmentData[0]?.initialKPIs?.technicalSkills
            )}
          />

          <RadialChart
            kpi="Delivery"
            current={calculateAvg(
              assessmentData[0]?.overAllWeeklyKPIs?.delivery
            )}
            final={calculateAvg(assessmentData[0]?.forcastedKPIs?.delivery)}
            initial={calculateAvg(assessmentData[0]?.initialKPIs?.delivery)}
          />

          <RadialChart
            kpi="Communication"
            current={calculateAvg(
              assessmentData[0]?.overAllWeeklyKPIs?.feedback
            )}
            final={calculateAvg(assessmentData[0]?.forcastedKPIs?.feedback)}
            initial={calculateAvg(assessmentData[0]?.initialKPIs?.feedback)}
          />

          <RadialChart
            kpi="Leadership"
            current={calculateAvg(
              assessmentData[0]?.overAllWeeklyKPIs?.leadership
            )}
            final={calculateAvg(assessmentData[0]?.forcastedKPIs?.leadership)}
            initial={calculateAvg(assessmentData[0]?.initialKPIs?.leadership)}
          />

          <RadialChart
            kpi="Strategic Impact"
            current={calculateAvg(
              assessmentData[0]?.overAllWeeklyKPIs?.strategicImpact
            )}
            final={calculateAvg(
              assessmentData[0]?.forcastedKPIs?.strategicImpact
            )}
            initial={calculateAvg(
              assessmentData[0]?.initialKPIs?.strategicImpact
            )}
          />
        </Grid>
      </ChartsContainer>
    </Container>
  );
};

export default SkillsetEvaluation;

const Container = styled.div`
  p {
    line-height: 20px;
    margin-top: 2vh;
  }

  div {
    button {
      span {
        p {
          margin: auto;
        }
      }
    }
  }
`;

const Title = styled.h3`
  font-family: Mulish;
  line-height: 32px;
  font-style: normal;
  font-size: 24px;
  color: #262626;
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto;
  color: #4b4b4b;
`;

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;

  & > *:first-child {
    flex-basis: 50%;
  }

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  flex: 1 1 0;
  margin: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  row-gap: 30px;
`;
