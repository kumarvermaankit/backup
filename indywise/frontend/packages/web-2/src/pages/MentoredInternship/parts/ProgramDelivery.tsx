import * as React from 'react';
import { Text } from '@indywise/uikit';
import styled from 'styled-components';
import Background from '../../../assets/YellowBg1.svg';
import Curve from '../../../assets/Curve.png';

const ProgramDelivery: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Text type="hl" size="5vw" bold color="#262626">
          Program Delivery
        </Text>
        <Flex>
          <Points>
            <Each>
              <div
                style={{
                  marginTop: '10vh',
                  display: 'flex',
                  float: 'right',
                  alignItems: 'center'
                }}
              >
                <Text type="body">Assessment session</Text>
                <Circle>1</Circle>
              </div>
              <Fl>
                <Text type="body">
                  Mentee is placed to work with a startup/business
                </Text>
                <Circle>3</Circle>
              </Fl>
              <Fl>
                <Text type="body">
                  Mentoring sessions will be conducted on key areas like -
                  interview prep, mock interviews, comm. skills, resume
                  curation, industry exposure, expert advice, and so on
                </Text>
                <Circle>5</Circle>
              </Fl>
              <Fl>
                <Text type="body">
                  Successful completion of the program awards internship
                  certification from partner
                </Text>
                <Circle>7</Circle>
              </Fl>
            </Each>
          </Points>
          <img src={Curve} alt="curve" />
          <Points>
            <Each>
              <SFl>
                <Circle>2</Circle>
                <Text type="body">
                  Signing of program agreement and non disclosure agreement
                </Text>
              </SFl>
              <SFl>
                <Circle>4</Circle>
                <Text type="body">Mentor is assigned to the mentee</Text>
              </SFl>
              <SFl>
                <Circle>6</Circle>
                <Text type="body">
                  Mentee works on the live enterprise project as directed by the
                  internship partner
                </Text>
              </SFl>
              <SFl>
                <Circle>8</Circle>
                <Text type="body">
                  IndyWise Certificate of Completion after assessment on set
                  KPIs
                </Text>
              </SFl>
            </Each>
          </Points>
        </Flex>
        <MWrapper>
          <Single>
            <MCircle>1</MCircle>
            <Text type="body">Assessment session</Text>
          </Single>
          <Single>
            <MCircle>2</MCircle>
            <Text type="body">
              Signing of program agreement and non disclosure agreement
            </Text>
          </Single>
          <Single>
            <MCircle>3</MCircle>
            <Text type="body">
              Mentee is placed to work with a startup/business
            </Text>
          </Single>
          <Single>
            <MCircle>4</MCircle>
            <Text type="body">Mentor is assigned to the mentee</Text>
          </Single>
          <Single>
            <MCircle>5</MCircle>
            <Text type="body">
              Mentoring sessions will be conducted on key areas like - interview
              prep, mock interviews, comm. skills, resume curation, industry
              exposure, expert advice, and so on
            </Text>
          </Single>
          <Single>
            <MCircle>6</MCircle>
            <Text type="body">
              Mentee works on the live enterprise project as directed by the
              internship partner
            </Text>
          </Single>
          <Single>
            <MCircle>7</MCircle>
            <Text type="body">
              Successful completion of the program awards internship
              certification from partner
            </Text>
          </Single>
          <Single>
            <MCircle>8</MCircle>
            <Text type="body">
              IndyWise Certificate of Completion after assessment on set KPIs
            </Text>
          </Single>
        </MWrapper>
      </Wrapper>
    </>
  );
};

export default ProgramDelivery;

const Flex = styled.div`
  margin: 10vh 10vw;
  display: flex;

  img {
    width: 10%;
    height: fit-content;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

const Fl = styled.div`
  display: flex;
  margin-top: 10vh;
  float: right;
  align-items: center;

  p,
  div {
    margin-top: 20vh;
  }

  p {
    font-size: 1.5vw;
  }
`;

const SFl = styled.div`
  display: flex;
  align-items: center;

  p,
  div {
    margin-top: 30vh;
  }
`;

const Points = styled.div`
  width: 45%;
`;

const Each = styled.div`
  p {
    font-size: 32px;
    line-height: 48px;
  }

  @media (max-width: 1030px) {
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 530px) {
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;

  h1 {
    margin: 15vh auto 10vh auto;
    text-align: center;
    color: #262626;
    font-size: 96px;
    line-height: 120px;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (max-width: 530px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

const Circle = styled.div`
  background: #eaf3fa;
  border-radius: 50%;
  margin-left: 2vw;
  margin-right: 2vw;
  font-weight: bold;
  font-size: 2vw;
  color: #262626;
  font-family: Roboto;
  padding: 1vw 1.5vw;
`;

const MWrapper = styled.div`
  height: auto;
  display: none;
  margin: 5vh 10vw;

  h1 {
    margin: 15vh auto 10vh auto;
    text-align: center;
  }

  @media (max-width: 770px) {
    display: block;
  }
`;

const Single = styled.div`
  display: flex;
  margin-top: 3vh;
  align-items: center;
`;

const MCircle = styled.div`
  background: #f2a922;
  border-radius: 50%;
  margin-right: 2vw;
  font-weight: bold;
  font-size: 4vw;
  color: #262626;
  font-family: Roboto;
  padding: 2vw 3vw;
`;
