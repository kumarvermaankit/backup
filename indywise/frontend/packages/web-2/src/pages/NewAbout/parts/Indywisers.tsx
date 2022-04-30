import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import Naman from '../../../assets/Naman.svg';
import Rashika from '../../../assets/Rashika.svg';
import Narendra from '../../../assets/Narendra.svg';
import LubhanshiGarg from '../../../assets/LubhanshiGarg.svg';
import Kshitij from '../../../assets/Kshitij.svg';
import Shilpa from '../../../assets/Shilpa.svg';
import Harshita from '../../../assets/Harshita.svg';
import Tarun from '../../../assets/Tarun.svg';
import Vivek from '../../../assets/Vivek.svg';
import Harsha from '../../../assets/Harsha.svg';
import Surbhi from '../../../assets/Surbhi.svg';
import Urja from '../../../assets/Urja.svg';
import Tanmay from '../../../assets/Tanmay.svg';
import Shiwani from '../../../assets/Shiwani.svg';
import Agrima from '../../../assets/Agrima.svg';
import Vaidehi from '../../../assets/Vaidehi.svg';
import Amogh from '../../../assets/Amogh.svg';
import Akash from '../../../assets/Akash.svg';
import Pranjal from '../../../assets/Pranjal.svg';
import Ishan from '../../../assets/Ishan.svg';
import Dash from '../../../assets/Dash.svg';
import Madison from '../../../assets/Madison.svg';

const Indywisers: React.FC = () => {
  const teams = [
    {
      Img: Naman,
      name: 'Naman Mishra',
      designation: 'UI/UX Engineer-II',
      id: 1,
      linkedIn: 'https://www.linkedin.com/in/naman-mishra-54224912b/'
    },
    {
      Img: Rashika,
      name: 'Rashika Hali',
      designation: 'Engineering Lead',
      id: 2,
      linkedIn: 'https://www.linkedin.com/in/rashika-hali-86841b93/'
    },
    {
      Img: Narendra,
      name: 'Narendra Hampole',
      designation: 'Lead-Business Development',
      id: 3,
      linkedIn: 'https://www.linkedin.com/in/narenhampole95/'
    },
    {
      Img: Harsha,
      name: 'Harsha Nanda',
      designation: 'Manager Mentor Experience',
      id: 13,
      linkedIn: 'https://www.linkedin.com/in/harsha-nanda-679b0b98/'
    },
    {
      Img: LubhanshiGarg,
      name: 'Lubhanshi Garg',
      designation: 'Sr Outreach Associate',
      id: 4,
      linkedIn: 'https://www.linkedin.com/in/lubhanshi-garg-29a14a208/'
    },
    {
      Img: Shilpa,
      name: 'Shilpa Narayan',
      designation: 'Head of Engagement',
      id: 6,
      linkedIn: 'https://www.linkedin.com/in/shilpa-narayan-2704/'
    },
    {
      Img: Kshitij,
      name: 'Kshitij Ramrakhiani',
      designation: 'Buisness Development Associate (Sales and BD intern) ',
      id: 5,
      linkedIn: 'https://www.linkedin.com/in/kshitij-ramrakhiani-47159118a/'
    },
    {
      Img: Vivek,
      name: 'Vivek Chauhan',
      designation: 'Software Development Intern (Frontend/ReactJS)',
      id: 7,
      linkedIn: 'https://www.linkedin.com/in/itsvivekchauhan/'
    },
    {
      Img: Harshita,
      name: 'Harshita Gupta',
      designation: 'Software Development Intern (Frontend/ReactJS)',
      id: 8,
      linkedIn: 'https://www.linkedin.com/in/harshita-gupta-38b35117a/'
    },
    {
      Img: Urja,
      name: 'Urja Jhaveri',
      designation: 'Outreach Associate',
      id: 10,
      linkedIn: 'https://www.linkedin.com/in/urja-jhaveri/'
    },
    {
      Img: Tanmay,
      name: 'Tanmay Anand',
      designation: 'Software Development Intern (Backend)',
      id: 12,
      linkedIn: 'https://www.linkedin.com/in/tanmay-a-462640a0/'
    },
    {
      Img: Surbhi,
      name: 'Surbhi Pal',
      designation: 'Marketing Intern',
      id: 14,
      linkedIn: 'https://www.linkedin.com/in/surbhi-pal-80421917a/'
    },
    {
      Img: Tarun,
      name: 'Tarun Mehta',
      designation: 'Business Development Associate (Sales and BD Intern)',
      id: 15,
      linkedIn: 'https://www.linkedin.com/in/athemetarun/'
    },
    {
      Img: Shiwani,
      name: 'Shiwani Priya',
      designation: 'Strategic Consulting Associate',
      id: 16,
      linkedIn: 'https://www.linkedin.com/in/shiwanip/'
    },
    {
      Img: Agrima,
      name: 'Agrima Gulati',
      designation: 'Content Writer and Digital Marketing Intern',
      id: 18,
      linkedIn: 'https://www.linkedin.com/in/agrima-gulati-4287441a2/'
    },
    {
      Img: Vaidehi,
      name: 'Vaidehi Modi',
      designation: 'Outreach Associate',
      id: 19,
      linkedIn: 'https://www.linkedin.com/in/vaidehi-modi-9a413218b/'
    },
    {
      Img: Amogh,
      name: 'Amogh Godbole',
      designation: 'Software Developer Intern',
      id: 20,
      linkedIn: 'https://www.linkedin.com/in/amogh-godbole-231796183/'
    },
    {
      Img: Akash,
      name: 'Akash Prasad',
      designation: 'Software Development Intern (Frontend/ReactJS)',
      id: 21,
      linkedIn: 'https://www.linkedin.com/in/akash-prasad-a243ab190/'
    },
    {
      Img: Pranjal,
      name: 'Pranjal Walia',
      designation: 'Software Development Intern (Backend)',
      id: 22,
      linkedIn: 'https://www.linkedin.com/in/pranjal-walia/'
    },
    {
      Img: Madison,
      name: 'Madison Ruddell',
      designation: 'Graphic Design Intern',
      id: 23,
      linkedIn: 'https://www.linkedin.com/in/madison-ruddell-61113b202/'
    },
    {
      Img: Dash,
      name: 'Kalpataru Dash',
      designation: 'Growth Associate',
      id: 24,
      linkedIn: 'https://www.linkedin.com/in/kalpataru-dash-908704127/'
    },
    {
      Img: Ishan,
      name: 'Ishan Shanware',
      designation: 'Software Development Intern (Backend)',
      id: 25,
      linkedIn: 'https://www.linkedin.com/in/ishan-shanware-1078a3165/'
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Wrapper>
        <StickyContainer>
          <Text type="h1">INDYWISERS</Text>
        </StickyContainer>
        <Content>
          <Container>
            {teams.map((val) => {
              const { id, name, Img, designation, linkedIn } = val;
              return (
                <div key={id}>
                  <a href={linkedIn} target="_blank" rel="noreferrer">
                    <div>
                      <img src={Img} alt="Indy" />
                    </div>
                    <Text type="h2">{name}</Text>
                  </a>
                  <Text type="body">{designation}</Text>
                </div>
              );
            })}
          </Container>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Indywisers;

const Wrapper = styled.div`
  width: 100%;
  margin: 60px 0 0 0;
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
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin: -300px 147px 0px 100px;
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
          color: #cb870a;
        }
        img {
          height: 110%;
          width: 110%;
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
        color: #317ec2;
        width: 320px;
        text-align: center;
        margin-top: 24px;
      }
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      width: 320px;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1024px) {
    margin: 0;
    margin-top: -200px;
    width: 90%;
    div {
      width: 280px;
      img {
        height: 160px;
        width: 160px;
      }
      h2 {
        width: 280px;
        font-size: 24px;
        line-height: 36px;
      }
      p {
        width: 280px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: -180px;
  }

  @media (max-width: 320px) {
    div {
      width: 100%;
    }
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 20vh;

  @media (max-width: 1024px) {
    top: 42vh;
  }
`;
