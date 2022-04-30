import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import CircleButton from '../../../components/CircleCallToAction';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import Mindtreelogo from '../../../assets/Mindtree.png';
// import Deologo from '../../../assets/Deo.png';
// import Amazonlogo from '../../../assets/Amazon.png';
// import STenglogo from '../../../assets/STEngineering.png';
// import Freeclogo from '../../../assets/Freecharge.svg';
// import HSBClogo from '../../../assets/HSBC.png';
// import Knowlogo from '../../../assets/Know.png';
// import Aristocratlogo from '../../../assets/Aristocrat.png';
// import MCkinseylogo from '../../../assets/MCKinsey.png';
// import Ethaumlogo from '../../../assets/EthAum1.png';
// import IBMlogo from '../../../assets/IBM.png';
// import Oraclelogo from '../../../assets/Oracle1.png';
import Carousel from 'react-elastic-carousel';

const JoinAsAMentor: React.FC = () => {
  const [logos, setLogos] = React.useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3 }
  ];

  const getLogos = async () => {
    try {
      const res = await Axios.get(
        'https://public-assets-indywise.s3.ap-south-1.amazonaws.com/companies.json'
      );
      setLogos(res.data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const chunkSize = 5;
  const mobileLogo = logos
    .map((e, i) => {
      return i % chunkSize === 0 ? logos.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });

  React.useEffect(() => {
    getLogos();
  }, []);

  console.log(mobileLogo);
  return (
    <Wrapper>
      <Text type="hl" size="5vw" bold>
        Help people succeed
      </Text>
      <Text type="hl" size="5vw" bold style={{ marginTop: '2vw' }}>
        <ColoredText>Get Paid. Be Recognized.</ColoredText>
      </Text>
      <Text type="paragraph" size="1.5vw">
        Become part of a Global Mentoring Community and join other top-class
        experts in a bid to change the way mentoring is held worldwide. Share
        the success of your mentees and have a fulfilling experience for your
        role in shaping the brilliant minds of the future.
      </Text>
      <ImageAndButtonWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ButtonWrapper style={{ margin: '0 0 3vh 0' }}>
            <Link to="/join-as-a-mentor">
              <CircleButton text="Join as a Mentor" color="purple" />
            </Link>
          </ButtonWrapper>
          <Text type="h3" color="#0C3559">
            Where Our Proud Mentors Come From
          </Text>
          <Logos style={{ margin: '6vh 0' }}>
            {logos.map((logo) => (
              <img src={logo} alt="CompanyLogo" />
            ))}
          </Logos>
          <LogosM>
            <Carousel
              isRTL={false}
              breakPoints={breakPoints}
              className="startup"
            >
              {mobileLogo.map((logoChuck) => (
                <Part>
                  {logoChuck?.map((logo) => (
                    <img src={logo} alt="Company Name" />
                  ))}
                </Part>
              ))}
            </Carousel>
          </LogosM>
        </div>
      </ImageAndButtonWrapper>
    </Wrapper>
  );
};

export default JoinAsAMentor;

const Wrapper = styled.div`
  height: auto;
  margin-top: 12vh;

  h1 {
    line-height: 4vw;
    text-align: center;
    width: 100%;
  }

  p {
    line-height: 2.7vw;
    width: 50vw;
    text-align: center;
    margin: 3vh auto;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 530px) {
    margin: 0px;
    height: auto;

    h1 {
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      margin-top: 2rem;
    }

    p {
      font-size: 12px;
      line-height: 18px;
      width: 85vw;
      margin: 6vh auto;
    }
  }
`;

const ImageAndButtonWrapper = styled.div`
  position: relative;
  text-align: center;

  div {
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-family: Mulish;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
  }
`;

const ButtonWrapper = styled.div`
  a {
    text-decoration: none;
  }

  @media (max-width: 530px) {
    a {
      button {
        width: 30vw;
        height: 30vw;

        h2 {
          font-size: 4vw;
          line-height: 6vw;
        }
        i {
          img {
            width: 24px;
            height: 12px;
          }
        }
      }
    }
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    padding: 4vh;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 770px) {
    img {
      margin: 2vh;
      width: auto;
    }
  }
`;

const LogosM = styled.div`
  display: none;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    justify-content: space-between;
  }
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    padding: 4vh;
  }

  @media (max-width: 770px) {
    img {
      margin: 2vh;
      width: auto;
      padding: 1vh;
    }
  }
`;

const ColoredText = styled.span`
  color: #a16a06;
`;
