import React, { useEffect } from 'react';
import AOS from 'aos';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import { useBookingModal } from '../../../contexts/BookingModalContext';
import GirlOnbike from '../../../assets/GirlOnBike.svg';
import BikerMobile from '../../../assets/BikerMobile.svg';
import SpaceShipX from '../../../assets/SpaceShipX.svg';

const LandingArea: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);
  const { openBookingModal } = useBookingModal();

  const wiseupXType = getWiseupXType();

  const applyNow = () => {
    openBookingModal(wiseupXType === 'student' ? 72 : 73);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <Contain back={wiseupXType}>
        {wiseupXType === 'student' ? (
          <div>
            <Text type="h3">
              Level Up, Leverage and Boost Your Prospects.
              <br /> Your Goals at Your Pace.
            </Text>
            <Text type="paragraph">
              Upskill and get career ready with IndyWise’s unique competency
              framework and mentoring ecosystem
            </Text>
            <Button onClick={applyNow}>Apply Now</Button>
          </div>
        ) : (
          <div>
            <Text type="h3">
              Level-Up and Supercharge Your Professional Career
            </Text>
            <Text type="paragraph">
              Upskill yourself with IndyWise’s unique competency framework and
              mentoring ecosystem
            </Text>
            <Button onClick={applyNow}>Apply Now</Button>
          </div>
        )}
      </Contain>
    </Container>
  );
};

export default LandingArea;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Contain = styled.div<{
  back?: any;
}>`
  width: 100%;
  height: 100%;
  background: url(${(props) =>
    props.back === 'student' ? GirlOnbike : SpaceShipX});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 724px) {
    background: url(${(props) =>
      props.back === 'student' ? BikerMobile : SpaceShipX});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 0 200px;

    h3 {
      font-size: 40px;
      line-height: 48px;
      color: #19588f;
      margin: 24px 0;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: #727272;
    }

    button {
      width: 50%;
      margin: 24px 0;
      P {
        color: #042039;
      }
    }
  }

  @media (max-width: 1024px) {
    div {
      width: 60%;
      margin: 0 100px;

      h3 {
        font-size: 32px;
        line-height: 40px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        color: #727272;
      }
    }
  }

  @media (max-width: 724px) {
    div {
      width: 80%;
      margin: 0 100px;

      h3 {
        font-size: 24px;
        line-height: 32px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 540px) {
    div {
      width: 100%;
      margin: 0 40px;
    }
  }
`;
