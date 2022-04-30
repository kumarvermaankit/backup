import React, { useContext } from 'react';
import styled from 'styled-components';
import DashboardBgFrame from '../../../assets/DashboardBgFrame.svg';
import { Icon, Text } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import { AuthContext } from '../../../contexts/AuthContext';
import DefaultAvatar from '../../../assets/DefaultAvatar.svg';
// import GoogleFormModal from '../../../components/GoogleFormModal';
// import { ModalState } from '../../../contexts/BookingModalContext';
// import { initModalState } from '../../../utils/helpers';
// import { useLocation } from 'react-router-dom';

const PendingAction: React.FC<{ avatar?: any }> = ({ avatar }) => {
  const { user } = useContext(AuthContext);
  const [step, setStep] = React.useState(1);
  // const path = useLocation().pathname;
  // const [modalState, setModalState] = React.useState<ModalState>(
  //   initModalState(path)
  // );

  // const closeModal = () => {
  //   setModalState(ModalState.CLOSE);
  // };

  // const showModal = () => {
  //   setModalState(ModalState.OPEN);
  // };

  const increaseStep = (): any => {
    const newStep = step + 1;
    if (newStep > 0 && newStep <= 3) setStep(newStep);
  };

  const decreaseStep = (): any => {
    const newStep = step - 1;
    if (newStep > 0 && newStep <= 3) setStep(newStep);
  };

  return (
    <>
      <Container>
        {/* <GoogleFormModal
          modalState={modalState}
          closeModal={closeModal}
          src="https://docs.google.com/forms/d/1pLBySaoE8FDKgkPzu52x38vbKah_RZZtNgBr4Mv1ct8"
          title="Mentor Review Form"
        /> */}
        <ComponentHead>
          <Head>{`Pending Actions(${step}/3)`}</Head>
          <Icons>
            <LeftIconWrapper onClick={decreaseStep}>
              <Icon icon="arrow" size="17.45px" color="#317EC2" />
            </LeftIconWrapper>
            <RightIconWrapper onClick={increaseStep}>
              <Icon icon="arrow" size="17.45px" color="#317EC2" />
            </RightIconWrapper>
          </Icons>
        </ComponentHead>
        <Content>
          {/* <Avatar src={avatar ? avatar : DefaultAvatar} /> */}
          {step === 1 ? (
            <a href="https://indywise.com/mentor/deepakverma">
              <Avatar src="https://drive.google.com/uc?export=view&id=18s4T46-aXx_fGxAVwE4zn7sPeYoQRmYe" />
            </a>
          ) : step === 2 ? (
            <Avatar
              src={user?.avatar?.medium ? user?.avatar?.medium : DefaultAvatar}
            />
          ) : (
            <Avatar src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/assets/CourseHat.png" />
          )}
          {step === 1 ? (
            <PendingActions>
              <div
                style={{
                  color: '#4B4B4B',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  fontWeight: 'bolder'
                }}
              >
                <a
                  href="https://indywise.com/mentor/deepakverma"
                  style={{ textDecoration: 'none', color: '#4B4B4B' }}
                >
                  Deepak Verma
                </a>
              </div>
              <div
                style={{
                  color: '#4B4B4B',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  fontWeight: 'normal',
                  letterSpacing: '0.02em'
                }}
              >
                Rate your previous session’s Mentor
              </div>
              <GiveReview>
                <a
                  href="https://docs.google.com/forms/d/1pLBySaoE8FDKgkPzu52x38vbKah_RZZtNgBr4Mv1ct8/edit?ts=60a24ed1"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGR>
                    <Icon icon="editPen" size="18px" color="#262626" />
                  </IconGR>
                  <Text type="body" color="#262626">
                    Give Review
                  </Text>
                </a>
              </GiveReview>
            </PendingActions>
          ) : step === 2 ? (
            <PendingActions>
              <div
                style={{
                  color: '#4B4B4B',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  fontWeight: 'bolder'
                }}
              >
                Complete your portfolio
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  visibility: 'hidden'
                }}
              >
                Rate your previous session’s Mentor
              </div>
              <GiveReview>
                <Link
                  to="/portfolio/mentee"
                  style={{ textDecoration: 'none', color: '#4B4B4B' }}
                >
                  <IconGR>
                    <Icon icon="editPen" size="18px" color="#262626" />
                  </IconGR>
                  <Text type="body" color="#262626">
                    Complete Portfolio
                  </Text>
                </Link>
              </GiveReview>
            </PendingActions>
          ) : (
            <PendingActions>
              <div
                style={{
                  color: '#4B4B4B',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  fontWeight: 'bolder'
                }}
              >
                Courses
              </div>
              <div
                style={{
                  color: '#4B4B4B',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  fontWeight: 'normal',
                  letterSpacing: '0.02em'
                }}
              >
                Complete your courses
              </div>
              <GiveReview>
                <Link
                  to="/courses"
                  style={{ textDecoration: 'none', color: '#4B4B4B' }}
                >
                  <IconGR>
                    <Icon icon="editPen" size="18px" color="#262626" />
                  </IconGR>
                  <Text type="body" color="#262626">
                    See Courses
                  </Text>
                </Link>
              </GiveReview>
            </PendingActions>
          )}
        </Content>
      </Container>
    </>
  );
};

export default PendingAction;

const Container = styled.div`
  flex: 1 0 auto;
  min-width: 266px;
  width: 27%;
  box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
  border-radius: 0.75rem;
  margin: 0.5rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  font-family: Mulish;
  background: url(${DashboardBgFrame});
  background-size: cover;
  background-blend-mode: lighten;

  @media screen and (max-width: 650px) {
    width: fill-available;
  }

  @media screen and (max-width: 375px) {
    margin: 0.5rem 1rem !important;
  }

  @media screen and (min-width: 650px) {
    max-width: 35%;
  }
`;

const ComponentHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const Head = styled.div`
  font-family: Mulish;
  color: #4b4b4b;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
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
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 50%;
  background-color: #ffffff;
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
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 50%;
  background-color: #ffffff;
  transform: rotate(-90deg);
`;

const Content = styled.div`
  font-family: Roboto;
  display: flex;
`;

const PendingActions = styled.div`
  width: fill-available;
`;

const GiveReview = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.762rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #262626;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(17, 17, 17, 0.16);
  border-radius: 0.5rem;

  float: right;
  margin-top: 0.25rem;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
  }
`;

const IconGR = styled.span`
  margin: 4px 0.5rem -4px 0.5rem;
  color: #262626;
`;
const Avatar = styled.img<{ color?: string }>`
  height: 64px;
  width: 64px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
  margin: 0 8px 0 0;
`;
