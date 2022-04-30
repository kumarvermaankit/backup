import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Oracle from '../../../assets/OracleLogo.svg';
import John from '../../../assets/John.svg';
import Krzysztof from '../../../assets/Krzysztof.svg';
import Rohit from '../../../assets/Rohit.svg';
import Deepak from '../../../assets/Deepak.svg';
import SAP from '../../../assets/SAP.svg';
import Porr from '../../../assets/Porr.svg';
import Accuity from '../../../assets/Accuity.svg';
import Deloitte from '../../../assets/Deloitte.svg';
import Snapdeal from '../../../assets/Snapdeal.svg';
import Freecharge from '../../../assets/Freecharge.svg';
import 'aos/dist/aos.css';

const Investor = [
  {
    Img: John,
    name: 'John Gibson',
    designation:
      'Head of Global Centre of Excellence, Platform & Technologies at SAP',
    id: 5,
    company: [SAP, Oracle],
    linkedIn: 'https://www.linkedin.com/in/johngibsonsap/'
  },
  {
    Img: Krzysztof,
    name: 'Krzysztof Rzeznikiewicz',
    designation: 'Technical Director, PORR Polska Infrastructure S.A.',
    id: 5,
    company: [Porr],
    linkedIn:
      'https://www.linkedin.com/in/krzysztof-rze%C5%BAnikiewicz-1a2728141/'
  },
  {
    Img: Rohit,
    name: 'Rohit Mittal',
    designation: 'Regional Lead, Professional Services - South APAC at Accuity',
    id: 5,
    company: [Accuity, Deloitte],
    linkedIn: 'https://www.linkedin.com/in/rmittal/'
  },
  {
    Img: Deepak,
    name: 'Deepak Verma',
    designation:
      'Associate Director - Technology at Freecharge Payment Technologies Pvt Ltd.',
    id: 5,
    company: [Freecharge, Snapdeal],
    linkedIn: 'https://www.linkedin.com/in/deepak-verma-22638522/'
  }
];

const Investors: React.FC = () => {
  return (
    <ContentA id="investors">
      <Text type="h1">
        <div> Investors </div>
      </Text>
      <Content>
        <Container>
          {Investor.map((val) => {
            const { id, name, Img, designation, company, linkedIn } = val;
            return (
              <div key={id}>
                <a href={linkedIn} target="_blank" rel="noreferrer">
                  <DivA>
                    <img src={Img} alt="Indy"></img>
                  </DivA>
                  <Text type="h2">{name}</Text>
                </a>
                <Text type="body">{designation}</Text>
                <Company>
                  {company?.map((item) => {
                    let height;
                    let width;
                    if (item === SAP) {
                      width = 64;
                      height = 32;
                    } else if (item === Accuity) {
                      width = 136;
                      height = 32;
                    } else if (item === Deloitte) {
                      width = 149.49;
                      height = 40;
                    } else if (item === Freecharge) {
                      width = 157.29;
                      height = 40;
                    } else if (item === Oracle) {
                      width = 124;
                      height = 16;
                    } else {
                      height = 40;
                      width = 40;
                    }
                    return (
                      <img
                        src={item}
                        alt="Investor"
                        style={{ maxHeight: height, maxWidth: width }}
                      />
                    );
                  })}
                </Company>
              </div>
            );
          })}
        </Container>
      </Content>
    </ContentA>
  );
};

export default Investors;

const ContentA = styled.div`
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 10vh auto;

  h1 {
    font-family: Mulish;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: #262626;
    margin-bottom: 5vh;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const DivA = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin: auto;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    width: 320px;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      text-align: center;
      &:hover {
        h2 {
          color: #CB870A;
        }
        div {
          img {
            height: 110%;
            width: 110%;
          }
        }
      }

      div {
        height: 240px;
        width: 240px;
        overflow: hidden;
        border-radius: 50%;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
        }
      }

      h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 48px;
        color: #317EC2;
        text-align: center;
        margin-top: 24px;
      }
    }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight:400;
        font-size: 16px;
        line-height: 24px
        width: 320px;
        text-align: center;
        margin-top:8px;
        color: #262626;
      }
  }
  @media(max-width: 1024px) {
    width: 90%;
    justify-content: center;
    margin: 0;
    div {
      padding: inherit;
      a {
        img {
          height:160px;
          width:160px;
        }
        h2 {
          font-size:24px;
          line-height:36px;
        }
      }
      p {
        font-size:16px;
        line-height:24px;
      }
    }
  }

  @media(max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
    div {
      width: 100%:
    }
  }
`;

const Company = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  align-items: flex-start !important;
  margin-top: 24px !important;
  margin-bottom: 40px;

  img {
    margin: 0px 20px;
  }

  @media (max-width: 1024px) {
  }
`;
