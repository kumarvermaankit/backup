import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Text, Button, Icon } from '@indywise/uikit';
import { useAuth } from '../../../contexts/AuthContext';
import { IMentorUpdated } from '../../../interfaces/IMentor';
// import { useBookingModal } from '../../../contexts/BookingModalContext';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import Modal from '@material-ui/core/Modal';
import Axios, { baseURL } from '../../../utils/Axios';
import EnquireFinish from '../../../assets/EnquireFinish.svg';
export interface ICheckoutprops extends RouteComponentProps {
  mentor: IMentorUpdated;
  mentorId: string;
}

const CheckoutMobile: React.FC<ICheckoutprops> = (props) => {
  const { getCurrency } = React.useContext(NewMentorsListContext);
  const mentor = props.mentor;
  // const id = props.mentorId;

  const { user, business } = useAuth();

  const [sessonType, setSessonType] = React.useState('1to1');
  const [currency] = React.useState<string>(getCurrency());
  const [exchangeRate] = React.useState<number>(0.014);
  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);
  const [fin, setFin] = React.useState(false);
  const [name, setName] = React.useState('');
  //eslint-disable-next-line
  const [email, setEmail] = React.useState('');
  //eslint-disable-next-line
  const [phone, setPhone] = React.useState('');
  //eslint-disable-next-line
  const [organization, setOrganization] = React.useState('');
  //eslint-disable-next-line
  const [skills, setSkills] = React.useState('');
  //eslint-disable-next-line
  const [aim, setAim] = React.useState('');

  const handleOpenn = () => {
    setOpenn(true);
  };

  const handleClosee = () => {
    setOpenn(false);
  };

  const handleFinOpen = () => {
    setFin(true);
  };

  const handleFinClose = () => {
    setFin(false);
  };

  // const { openBookingModal } = useBookingModal();

  // useEffect(() => {
  //   const exchangeUpdate = async () => {
  //     await axios
  //       .get(
  //         'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=f7c04dfa3db28727e37e'
  //       )
  //       .then((res) => setExchangeRate(1 / res.data.USD_INR));
  //   };
  //   exchangeUpdate();
  // }, []);

  const setActive = (id: string) => {
    setSessonType(id);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonlink = () => {
    if (sessonType === '1to1') {
      handleOpenn();
      // openBookingModal(mentor.service, mentor.sessionBookingLink);
      // if (
      //   name.length > 0 &&
      //   email.length > 0 &&
      //   phone.length > 0 &&
      //   organization.length > 0 &&
      //   skills.length > 0 &&
      //   aim.length > 0
      // ) {
      //   const finalObject = {
      //     name,
      //     email,
      //     phone,
      //     organization,
      //     skills,
      //     aim,
      //     ID: id
      //   };
      //   Axios.post(
      //     `${baseURL}/mentors/mentor-user/enquire`,
      //     finalObject
      //   ).then(() => {
      //     handleClose();
      //     handleFinOpen();
      //   });
      // } else {
      //   alert('Please fill out all the fields!');
      // }
    } else {
      const win: any = window.open('/wiseupx', '_blank');
      win?.focus();
    }
  };

  let priceToShow = 0;
  if (mentor?.sessions?.discountedPrice) {
    priceToShow = parseInt(
      (mentor?.sessions?.discountedPrice * 0.014).toFixed(2),
      10
    );
  } else if (mentor?.tier?.includes('Tier 1')) {
    priceToShow = 15;
  } else if (mentor?.tier?.includes('Tier 2')) {
    priceToShow = 25;
  } else if (mentor?.tier?.includes('Tier 3')) {
    priceToShow = 40;
  } else if (mentor?.tier?.includes('Tier X')) {
    priceToShow = parseInt(
      (mentor?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  } else {
    priceToShow = parseInt(
      (mentor?.sessions?.sessionPrice * 0.014).toFixed(2),
      10
    );
  }

  return (
    <>
      <CheckModel
        mentor={mentor}
        sessonType={sessonType}
        setActive={setActive}
        open={open}
        handleClose={handleClose}
        currency={currency}
        exchangeRate={exchangeRate}
        priceToShow={priceToShow}
      />
      <Container>
        <Main>
          <Type>
            <Session onClick={handleOpen}>
              <Text type="h2" color="#317EC2">
                {sessonType === '1to1' ? '1:1 Session' : 'WiseUp Session'}
                <Icon icon="arrow" rotate={180} color="#317EC2" size="16px" />
              </Text>
            </Session>
            <Price>
              {sessonType === '1to1' ? (
                <>
                  {user || business ? (
                    <>
                      {!mentor?.sessions?.sessionPrice ||
                      mentor?.sessions?.sessionPrice === '0' ? null : (
                        <>
                          Price:{' '}
                          <span>
                            {currency === 'inr' ? (
                              <Icon icon="rupee" color="#262626" size="14px" />
                            ) : (
                              <Icon icon="dollar" color="#262626" size="14px" />
                            )}
                            {currency === 'inr'
                              ? priceToShow * 73
                              : priceToShow}
                          </span>
                          /hr
                        </>
                      )}
                    </>
                  ) : null}
                </>
              ) : (
                'Included in the WiseUp program once per week'
              )}
            </Price>
          </Type>
          <Button color="primary" onClick={buttonlink}>
            {sessonType === '1to1' ? 'Enquire' : 'Check Pricing'}
          </Button>
        </Main>
        <Modal
          open={openn}
          onClose={handleClosee}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalDiv>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <ModalH1>Check Mentor Availability</ModalH1>
              <span
                onClick={() => {
                  handleClosee();
                  // handleFinOpen();
                }}
                style={{ cursor: 'pointer' }}
              >
                <Icon icon="redexit" />
              </span>
            </div>
            <Input
              placeholder="Name *"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email *"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Phone *"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Organization Name"
              onChange={(e) => setOrganization(e.target.value)}
            />
            <Input
              placeholder="Which skills are you looking to improve *"
              onChange={(e) => setSkills(e.target.value)}
            />
            <Input
              placeholder="What do you aim to achieve in this mentoring session? *"
              onChange={(e) => setAim(e.target.value)}
            />
            <Button
              color="primary"
              style={{
                float: 'right',
                marginTop: '24px',
                height: '40px',
                width: '200px'
              }}
              onClick={() => {
                if (
                  name.length > 0 &&
                  email.length > 0 &&
                  phone.length > 0 &&
                  skills.length > 0 &&
                  aim.length > 0
                ) {
                  const finalObject = {
                    name,
                    email,
                    phone,
                    organization,
                    skills,
                    aim,
                    ID: props?.mentor.ID,
                    freeSession: false,
                    username: props?.mentor?.username,
                    link: `https://indywise.com/mentor/${props?.mentor?.username}`
                  };
                  Axios.post(
                    `${baseURL}/mentors/mentor-user/enquire`,
                    finalObject
                  ).then(() => {
                    handleClose();
                    handleFinOpen();
                  });
                } else {
                  alert('Please fill out all the fields!');
                }
              }}
            >
              Enquire
            </Button>
          </ModalDiv>
        </Modal>
        <Modal
          open={fin}
          onClose={handleFinClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <EnquireFinishDiv>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <img src={EnquireFinish} alt="Enquire Finish" />
              <ModalH1 style={{ color: '#0C3559' }}>Success</ModalH1>
              <p
                style={{
                  fontFamily: 'Roboto',
                  color: '#4B4B4B'
                }}
              >
                Our Mentor Experience Team will get back to you shortly
              </p>
              <Button
                color="primary"
                style={{
                  // float: "right",
                  marginTop: '24px',
                  height: '40px',
                  width: '200px'
                }}
                onClick={handleFinClose}
              >
                Close
              </Button>
            </div>
          </EnquireFinishDiv>
        </Modal>
      </Container>
    </>
  );
};

export const CheckModel: React.FC<{
  mentor: IMentorUpdated;
  sessonType: string;
  setActive: any;
  open: boolean;
  handleClose: any;
  currency: string;
  exchangeRate: number;
  priceToShow: number;
}> = (props) => {
  const setActive = props.setActive;
  const sessonType = props.sessonType;
  const open = props.open;
  const handleClose = props.handleClose;
  const currency = props.currency;
  const priceToShow = props.priceToShow;
  const { user, business } = useAuth();

  return (
    <MainModel show={open}>
      <CloseButton onClick={handleClose}>
        <Icon icon="close" size="20px" />
      </CloseButton>
      <Div>
        <div>
          <Type>
            <Session>
              <Circle
                onClick={() => setActive('1to1')}
                type={sessonType}
                activeType="1to1"
              >
                <div />
              </Circle>
              <Text type="h2">1:1 Personalized Session</Text>
            </Session>
            <Price>
              {user || business ? (
                <>
                  Price:{' '}
                  <span>
                    {currency === 'inr' ? (
                      <Icon icon="rupee" color="#262626" size="20px" />
                    ) : (
                      <Icon icon="dollar" color="#262626" size="20px" />
                    )}
                    {currency === 'inr' ? priceToShow * 73 : priceToShow}
                  </span>
                  /hr
                </>
              ) : null}
            </Price>
          </Type>
        </div>
        <Seprator />
        <div>
          <Type>
            <Session>
              <Circle
                onClick={() => setActive('wiseup')}
                type={sessonType}
                activeType="wiseup"
              >
                <div />
              </Circle>
              <Text type="h2">WiseUp Session</Text>
            </Session>
            <Price>Included in the WiseUp program once per week</Price>
          </Type>
        </div>
      </Div>
    </MainModel>
  );
};

export default withRouter(CheckoutMobile);

const EnquireFinishDiv = styled.div`
  height: 360px;
  width: 480px;
  padding: 40px 40px 24px 40px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  margin: auto;
  margin-top: 150px;
  @media (max-width: 1001px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const ModalDiv = styled.div`
  height: 85vh;
  width: 480px;
  padding: 40px 40px 24px 40px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  margin: auto;
  margin-top: 25px;
  @media (max-width: 1001px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 7vh;
  border: 0px;
  border-bottom: 1px solid #a3a3a3;
  ouline: none;
  padding-bottom: 4px;
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;
  &:focus {
    outline: none;
  }
`;

const ModalH1 = styled.h1`
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #262626;
`;

const Container = styled.div`
  display: none;
  position: fixed;
  z-index: 999;
  bottom: 80px;
  left: 0px;
  width: 100%;
  background: #fff;
  box-shadow: 0px -4px 12px rgba(17, 17, 17, 0.08);
  @media (max-width: 1263px) {
    display: block;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  @media (max-width: 360px) {
    padding: 8px;
  }
`;

const Type = styled.div`
  flex-direction: column;
  h2 {
    font-size: 16px;
    line-height: 24px;
    color: #262626;
    svg {
      margin: 0 4px;
    }
  }
`;

const Session = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b4b;

  span {
    display: flex;
    align-items: center;
    margin: 0 0 0 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }
`;

const MainModel = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: fixed;
  bottom: 180px;

  @media (max-width: 360px) {
    bottom: 80px;
  }
`;

const Div = styled.div`
  // width: 70%;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  padding: 32px;
  button {
    width: 100%;
  }
`;

const Seprator = styled.div`
  width: 100%;
  height: 2px;
  background: #e9e9e9;
  margin: 32px 0;
`;

const Circle = styled.div<{ type: string; activeType: string }>`
  width: 20px;
  height: 20px;
  border: 2px solid #4b4b4b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 8px;

  div {
    width: 60%;
    height: 60%;
    background: ${(props) =>
      props.type === props.activeType ? '#4B4B4B' : ''};
    border-radius: 100%;
  }
`;

const CloseButton = styled.div`
  background: #fff;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 50%;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
`;
