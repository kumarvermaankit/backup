import React from 'react';
import styled from 'styled-components';
import RadialChart from './RadialChart';
import { Icon } from '@indywise/uikit';

const SkillsetEvaluation: React.FC<{ currentKpi: any }> = ({ currentKpi }) => {
  const [step, setStep] = React.useState(1);

  const increaseStep = (): any => {
    const newStep = step + 1;
    if (newStep > 0 && newStep <= 3) setStep(newStep);
  };

  const decreaseStep = (): any => {
    const newStep = step - 1;
    if (newStep > 0 && newStep <= 3) setStep(newStep);
  };

  const calculateAvg = (val: any): any => {
    const avg: any = (val / 5).toFixed(2);
    return avg * 100;
  };

  return (
    <>
      <Container>
        <Flex>
          <Heading>Skill Evaluation</Heading>

          {step === 1 ? (
            <Icons>
              <LeftIconWrapper
                onClick={decreaseStep}
                style={{ borderColor: '#CBCBCB', cursor: 'auto' }}
              >
                <Icon icon="arrow" size="17.45px" color="#CBCBCB" />
              </LeftIconWrapper>
              <RightIconWrapper onClick={increaseStep}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </RightIconWrapper>
            </Icons>
          ) : step === 3 ? (
            <Icons>
              <LeftIconWrapper onClick={decreaseStep}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </LeftIconWrapper>
              <RightIconWrapper
                onClick={increaseStep}
                style={{ borderColor: '#CBCBCB', cursor: 'auto' }}
              >
                <Icon icon="arrow" size="17.45px" color="#CBCBCB" />
              </RightIconWrapper>
            </Icons>
          ) : (
            <Icons>
              <LeftIconWrapper onClick={decreaseStep}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </LeftIconWrapper>
              <RightIconWrapper onClick={increaseStep}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </RightIconWrapper>
            </Icons>
          )}
        </Flex>
        {step === 1 ? (
          <Grid>
            <Chartarea>
              <RadialChart
                kpi="Technical Skills"
                current={calculateAvg(
                  currentKpi?.overAllWeeklyKPIs?.technicalSkills
                )}
                final={calculateAvg(currentKpi?.forcastedKPIs?.technicalSkills)}
                initial={calculateAvg(currentKpi?.initialKPIs?.technicalSkills)}
              />
            </Chartarea>
            <Chartarea1>
              <RadialChart
                kpi="Delivery"
                current={calculateAvg(currentKpi?.overAllWeeklyKPIs?.delivery)}
                final={calculateAvg(currentKpi?.forcastedKPIs?.delivery)}
                initial={calculateAvg(currentKpi?.initialKPIs?.delivery)}
              />
            </Chartarea1>
          </Grid>
        ) : step === 2 ? (
          <Grid>
            <Chartarea>
              <RadialChart
                kpi="Communication"
                current={calculateAvg(currentKpi?.overAllWeeklyKPIs?.feedback)}
                final={calculateAvg(currentKpi?.forcastedKPIs?.feedback)}
                initial={calculateAvg(currentKpi?.initialKPIs?.feedback)}
              />
            </Chartarea>
            <Chartarea1>
              <RadialChart
                kpi="Leadership"
                current={calculateAvg(
                  currentKpi?.overAllWeeklyKPIs?.leadership
                )}
                final={calculateAvg(currentKpi?.forcastedKPIs?.leadership)}
                initial={calculateAvg(currentKpi?.initialKPIs?.leadership)}
              />
            </Chartarea1>
          </Grid>
        ) : (
          <Grid>
            <Chartarea>
              <RadialChart
                kpi="Strategic Impact"
                current={calculateAvg(
                  currentKpi?.overAllWeeklyKPIs?.strategicImpact
                )}
                final={calculateAvg(currentKpi?.forcastedKPIs?.strategicImpact)}
                initial={calculateAvg(currentKpi?.initialKPIs?.strategicImpact)}
              />
            </Chartarea>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default SkillsetEvaluation;

const Container = styled.div`
  width: 28%;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
  border-radius: 12px;
  margin: 8px;
  font-family: Mulish;
  padding: 24px 24px 16px 24px;

  @media screen and (max-width: 1320px) {
    min-width: 222px;
    width: min-content;
    flex: 1 0 auto;
  }

  /* @media screen and (max-width: 768px) {
    width: 30%;
  } */

  /* @media screen and (min-width: 768px) and (max-width: 1030px){
    min-width: 340px;
  } */

  @media screen and (max-width: 375px) {
    width: fill-available;
    margin: 0.5rem 1rem;
  }
`;

const Heading = styled.div`
  font-family: Mulish;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4b4b4b;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (min-width: 650px) and (max-width: 810px) {
    width: 100px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
`;

const LeftIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  border: 0.727273px solid #317ec2;
  border-radius: 50%;
  transform: rotate(90deg);
  margin-right: 8px;
`;

const RightIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  border: 0.727273px solid #317ec2;
  border-radius: 50%;
  background-color: #ffffff;
  transform: rotate(-90deg);
`;
const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chartarea = styled.div`
  height: 180px;
  width: 152px;
  margin: 0 16px;

  @media screen and (max-width: 650px) {
    margin: 0 16px 16px 16px;
  }
`;

const Chartarea1 = styled.div`
  height: 180px;
  width: 152px;
  margin: 0 16px;
  display: block;

  @media screen and (max-width: 955px) and (min-width: 650px) {
    /*700 is for testing*/
    display: none !important;
  }

  @media screen and (max-width: 432px) {
    display: none !important;
  }

  @media screen and (max-width: 650px) {
    margin: 0 16px 16px 16px;
  }
`;
