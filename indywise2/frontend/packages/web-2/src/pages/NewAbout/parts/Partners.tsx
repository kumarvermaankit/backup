import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import AOS from 'aos';
import Oracle from '../../../assets/Oracle2.png';
import EthAum from '../../../assets/EthAum1.png';
import Deel from '../../../assets/Deel.svg';
import WorkWolf from '../../../assets/Workwolf.svg';
import Afthonia from '../../../assets/Afthonia.svg';
import TechEspace from '../../../assets/TechEspace.svg';
import MitEco from '../../../assets/MitEco.svg';
import ITease from '../../../assets/iTease.png';
import SaltAndPepper from '../../../assets/SaltAndPepper.svg';
import RetainUP from '../../../assets/RetainUP.svg';
import JDP from '../../../assets/JDP.svg';
import Freshworks from '../../../assets/Freshworks.svg';
import Microsoft from '../../../assets/microsoft.svg';
import Rapidez from '../../../assets/Rapidez.svg';
import 'aos/dist/aos.css';

const Partner = [
  {
    link: 'https://www.oracle.com/',
    name: 'Oracle',
    img: Oracle,
    id: 1
  },
  {
    link: 'https://www.ethaum.com/',
    name: 'EthAum Venture Partners',
    img: EthAum,
    id: 2
  },
  {
    link: 'https://www.letsdeel.com/',
    name: 'Deel',
    img: Deel,
    id: 3
  },
  {
    link: 'https://workwolf.com/',
    name: 'Workwolf',
    img: WorkWolf,
    id: 4
  },
  {
    link: 'https://techespacetechnologies.com/',
    name: 'TechEspace',
    img: TechEspace,
    id: 5
  },
  {
    link: 'https://www.miteco.org/',
    name: 'Mit-Eco',
    img: MitEco,
    id: 6
  },
  {
    link: 'https://www.afthonialab.com/',
    name: 'Afthonia',
    img: Afthonia,
    id: 7
  },
  {
    link: 'https://itease.in/',
    name: 'ITease',
    img: ITease,
    id: 8
  },
  {
    link: 'https://saltandpeppermediainc.com/',
    name: 'Salt and Pepper Media Inc.',
    img: SaltAndPepper,
    id: 9
  },
  {
    link: 'https://retainup.co/',
    name: 'RetainUP',
    img: RetainUP,
    id: 10
  },
  {
    link: 'https://jdprosperities.com/',
    name: 'JD Prosperities',
    img: JDP,
    id: 11
  },
  {
    link: 'https://www.freshworks.com/',
    name: 'Freshworks',
    img: Freshworks,
    id: 12
  },
  {
    link: 'https://rapidezwriter.com/',
    name: 'Rapidez Writer',
    img: Rapidez,
    id: 13
  },
  {
    link: 'https://www.microsoft.com/',
    name: 'Microsoft',
    img: Microsoft,
    id: 14
  }
];

const Partners: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Wrapper id="partners">
      <Content>
        <Text type="h1">
          <div data-aos="fade-in"> Partners </div>
        </Text>
        <Container data-aos="fade-up">
          {Partner.map((val) => {
            const { id, name, img, link } = val;
            return (
              <Each key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  <div>
                    <img src={img} alt="img1"></img>
                  </div>
                </a>
                <Text type="body">{name}</Text>
              </Each>
            );
          })}
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #eaf3fa;

  @media (max-width: 500px) {
    height: auto;
  }

  @media (max-width: 950px) and (max-height: 550px) {
    height: auto;
    padding: 50px 0;
  }

  @media (max-width: 650px) and (max-height: 1000px) {
    height: auto;
    padding: 50px 0;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
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
  }
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 1000px) and (max-height: 650px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    margin: 120px 24px;
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;

const Each = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  div {
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    div {
      img {
        width: 80px;
        height: auto;
      }
    }
  }
  p {
    font-family: Mulish;
    font-size: 20px;
    line-height: 28px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    color: #317ec2;
    width: 320px;
    margin-top: 24px;
  }
  @media (max-width: 1300px) {
    div {
      height: 160px;
      width: 160px;
      align-item: center;
      img {
        height: 16px;
        width: 123px;
        top: 72px !important;
        left: 10 !important;
      }
    }
    p {
      font-size: 24px;
      line-height: 36px;
      width: 240px;
    }
  }
  @media (max-width: 1024px) {
    div {
      height: 160px;
      width: 160px;
      align-item: center;
      img {
        height: 16px;
        width: 123px;
        top: 72px !important;
        left: 10 !important;
      }
    }
    p {
      font-size: 24px;
      line-height: 36px;
      width: 240px;
    }
  }
  @media (max-width: 1024px) and (max-height: 650px) {
    div {
      width: 150px;
      height: 150px;
      img {
        width: 100px;
        height: auto;
      }
    }
    p {
      width: 150px;
    }
  }
`;
