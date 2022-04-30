import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Text, Button, Icon } from '@indywise/uikit';
import { IMentorUpdated } from '../../../interfaces/IMentor';
import Modal from '@material-ui/core/Modal';
import Axios, { baseURL } from '../../../utils/Axios';
import EnquireFinish from '../../../assets/EnquireFinish.svg';

export interface ICheckoutprops extends RouteComponentProps {
  mentor: IMentorUpdated;
  mentorId: string;
}

const NewCheckout: React.FC<ICheckoutprops> = (props) => {
  const { mentor } = props;
  const [open, setOpen] = React.useState(false);
  const [fin, setFin] = React.useState(false);

  const [name, setName] = React.useState('');
  const [free, setFree] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [organization, setOrganization] = React.useState('');
  const [skills, setSkills] = React.useState('');
  const [aim, setAim] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenFree = () => {
    setFree(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFinOpen = () => {
    setFin(true);
  };

  const handleFinClose = () => {
    setFin(false);
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
    <StickyContainer>
      <Main>
        <Div>
          <div>
            <Type>
              <Session>
                <Icon icon="tick" style={{ marginTop: '8px' }} />
                <span style={{ marginLeft: '26px', width: '80%' }}>
                  <Text type="h2" style={{ margin: '0 0' }}>
                    Custom Mentorship
                  </Text>
                  <Text
                    size="14px"
                    color="#4B4B4B"
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    Starts from
                    <Icon icon="dollar" size="14px" color="#4B4B4B" />
                    <strong>{priceToShow}</strong>/hr
                  </Text>
                </span>
                {/* <Icon
                  icon="infoCircular"
                  color="#262626"
                  style={{ marginTop: '8px' }}
                /> */}
              </Session>
              <Session>
                <Icon icon="tick" style={{ marginTop: '8px' }} />
                <span style={{ marginLeft: '26px', width: '80%' }}>
                  <Text type="h2" style={{ margin: '0 0' }}>
                    Wiseup Upskilling
                  </Text>
                  <Text
                    size="14px"
                    color="#4B4B4B"
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    Starts from
                    <Icon icon="dollar" size="14px" color="#4B4B4B" />
                    <strong>{priceToShow * 4}</strong>/mo
                  </Text>
                </span>
                {/* <Icon
                  icon="infoCircular"
                  color="#262626"
                  style={{ marginTop: '8px' }}
                /> */}
              </Session>
              {mentor.wiseup_consent && !mentor?.tier?.includes('Tier X') ? (
                <Session>
                  <Icon icon="tick" style={{ marginTop: '8px' }} />
                  <span style={{ marginLeft: '26px', width: '80%' }}>
                    <Text type="h2" style={{ margin: '0 0' }}>
                      FREE Introductory Session
                    </Text>
                    <Text
                      size="14px"
                      color="#4B4B4B"
                      style={{
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      First 30m free introductory session
                    </Text>
                  </span>
                </Session>
              ) : null}
              <Button
                color="tertiary"
                style={{ marginTop: '32px' }}
                onClick={handleOpen}
              >
                Book Session
              </Button>
              {mentor.wiseup_consent && !mentor?.tier?.includes('Tier X') ? (
                <Button
                  color="primary"
                  style={{ marginTop: '16px' }}
                  onClick={handleOpenFree}
                >
                  Book Free Exploratory Session
                </Button>
              ) : null}
            </Type>
          </div>
        </Div>
      </Main>
      <Modal
        open={open}
        onClose={handleClose}
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
            <ModalH1>
              {free ? 'Free Exploratory Session' : 'Check Mentor Availability'}
            </ModalH1>
            <span
              onClick={() => {
                handleClose();
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
            placeholder="Organization Name *"
            onChange={(e) => setOrganization(e.target.value)}
          />
          {free ? null : (
            <Input
              placeholder="Which skills are you looking to improve *"
              onChange={(e) => setSkills(e.target.value)}
            />
          )}
          <Input
            placeholder={
              free
                ? 'What do you aim to achieve in this mentoring session? *'
                : 'What do you aim to achieve in this session? *'
            }
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
                aim.length > 0
              ) {
                const finalObject = {
                  name,
                  email,
                  phone,
                  organization,
                  skills,
                  aim,
                  freeSession: free,
                  ID: props?.mentor?.ID,
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
    </StickyContainer>
  );
};

export default withRouter(NewCheckout);

const Main = styled.div`
  margin-right: 64px;

  @media (max-width: 1281px) {
    margin-right: 40px;
    margin-left: 40px;
  }

  @media (max-width: 1262px) {
    display: none;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 96px;
`;

const Div = styled.div`
  background-color: white;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  padding: 40px 32px 24px 32px;
  button {
    width: 100%;
  }
`;

const Type = styled.div`
  h2 {
    font-size: 20px;
    line-height: 28px;
    color: #262626;
    margin: 0 16px;
  }
`;
const Session = styled.div`
  display: flex;
  margin-top: 24px;
`;

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
  height: 80vh;
  width: 480px;
  overflow-y: auto;
  padding: 40px 40px 24px 40px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 20px;
  margin: auto;
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
