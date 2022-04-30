import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Pankaj from '../../../assets/Pankaj.svg';
import Asheesh from '../../../assets/Asheesh.svg';
import Siddharth from '../../../assets/Siddharth.svg';
import John from '../../../assets/John.svg';
import Jason from '../../../assets/Jason.svg';
import SAP from '../../../assets/SAP.svg';
import ChadTech from '../../../assets/ChadTech.svg';
import Chadlogo from '../../../assets/Chadlogo.svg';
import Ibm from '../../../assets/IbmLogo.png';
import Oracle from '../../../assets/OracleLogo.svg';
import hourVillage from '../../../assets/hourvillage.svg';
import Ethaum from '../../../assets/EthAumLogo.png';
import Veeco from '../../../assets/VeecoLogo.png';
import Toshiba from '../../../assets/ToshibaLogo.png';
import Siemens from '../../../assets/SiemensLogo.png';
import XOPA from '../../../assets/X0PALogo.png';
import microsoft from '../../../assets/microsoft.svg';
import StandardChartered from '../../../assets/StandardChartered.svg';
import ANZ from '../../../assets/ANZ.svg';
import SayeNVest from '../../../assets/SayeNVest.svg';
import rapid from '../../../assets/rapid.svg';
import Suresh from '../../../assets/Suresh.svg';
import Aseem from '../../../assets/Aseem.svg';

const Advisor = [
  {
    Img: Asheesh,
    name: 'Asheesh Khaneja',
    designation: 'Operating Partner at Mach49 Asia',
    id: 1,
    company: [Ibm, Oracle, hourVillage],
    linkedIn: 'https://www.linkedin.com/in/asheesh-khaneja-b910862/'
  },
  {
    Img: Pankaj,
    name: 'Pankaj Gupta',
    designation: 'Founder at Ethaum Venture Partners',
    id: 2,
    company: [Ethaum, Veeco, Toshiba],
    linkedIn: 'https://www.linkedin.com/in/pg-ethaum/'
  },
  {
    Img: Siddharth,
    name: 'Siddharth Somasundaram',
    designation: 'NUS',
    id: 3,
    company: [XOPA, Siemens],
    linkedIn: 'https://www.linkedin.com/in/siddharthsoma/'
  },
  {
    Img: Jason,
    name: 'Jason Chad',
    designation: 'Executive Recruiter | Sales Leader | Tech Enthusiast',
    id: 4,
    company: [Ibm, ChadTech, Chadlogo],
    linkedIn: 'https://www.linkedin.com/in/jichad/'
  },
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
    Img: Suresh,
    name: 'Suresh Kalpathy',
    designation: 'Founder & President at Rapid E-Suite | Founder ConnectDott',
    id: 6,
    company: [Ibm, Oracle, rapid, microsoft],
    linkedIn: 'https://www.linkedin.com/in/suresh-kalpathy-848828/'
  },
  {
    Img: Aseem,
    name: 'Aseem Goyal',
    designation: 'Chief Business Officer , SayeNvest Asset Management',
    id: 7,
    company: [StandardChartered, ANZ, SayeNVest],
    linkedIn: 'https://www.linkedin.com/in/aseemgoyal/'
  }
];

const Advisors: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Wrapper>
        <StickyContainer>
          <Text type="h1">ADVISORS</Text>
        </StickyContainer>
        <Content>
          <Container>
            {Advisor.map((val) => {
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
                      } else if (item === Toshiba) {
                        width = 104;
                        height = 32;
                      } else if (item === Oracle) {
                        width = 120;
                        height = 16;
                      } else if (item === hourVillage) {
                        width = 79;
                        height = 32;
                      } else if (item === Ethaum) {
                        width = 136;
                        height = 32;
                      } else if (item === Veeco) {
                        width = 83;
                        height = 32;
                      } else if (item === rapid) {
                        width = 67;
                        height = 32;
                      } else if (item === Siemens) {
                        width = 110;
                        height = 22;
                      } else if (item === XOPA) {
                        width = 67;
                        height = 40;
                      } else {
                        height = 45;
                        width = 45;
                      }
                      return (
                        <img
                          src={item}
                          alt="Advisor"
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
      </Wrapper>
    </div>
  );
};

export default Advisors;
const Wrapper = styled.div`
  width: 100%;
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #cb870a !important;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  @media (max-width: 1024px) {
    h1 {
      left: -16px !important;
      font-size: 32px !important;
      line-height: 40px !important;
    }
  }
  @media (max-width: 500px) {
    h1 {
      left: 0px !important;
      font-size: 24px !important;
      line-height: 32px !important;
      top: 0px !important;
    }
  }
`;

const DivA = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: -300px 147px 0px 100px;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    width: 320px;
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
        color:#317EC2;
        width:320px;
        text-align:center;
        margin-top: 24px;
      }

      p {
        font-family: Roboto;
        font-style: normal;
        font-weight:400;
        font-size: 16px;
        line-height: 24px
        width:320px;
        text-align:center;
        margin-top:8px;
        color: #262626;
      }
    }
  }
  @media(max-width: 1024px) {
    width: 90%;
    justify-content: center;
    margin: 0;
    margin-top: -200px;
    div {   
      padding: inherit;
      width:280px;
      img {
        height:160px;
        width:160px;
      }
      h2 {
        font-size:24px;
        line-height:36px;
        width:280px;
      }
      p {
        font-size:16px;
        line-height:24px;
        width:280px;
        text-align: center;
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
    width: 280px !important;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  bottom: 80vh;
  top: 20vh;

  @media (max-width: 1024px) {
    bottom: 70vh;
    top: 30vh;
  }
`;
