import React from 'react';
import { Button, Icon } from '@indywise/uikit';
import Modal from '@material-ui/core/Modal';
import Axios, { baseURL } from '../../../utils/Axios';
import EnquireFinish from '../../../assets/EnquireFinish.svg';
import styled from 'styled-components';

const EnquirePlan: React.FC<any> = ({ tier }) => {
  const [open, setOpen] = React.useState(false);
  const [fin, setFin] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [organization, setOrganization] = React.useState('');
  const [skills, setSkills] = React.useState('');
  const [aim, setAim] = React.useState('');

  const handleOpen = () => {
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

  return (
    <>
      <Button
        style={{
          width: '174px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          marginTop: '24px'
        }}
        onClick={handleOpen}
      >
        Choose Plan
      </Button>
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
            <ModalH1>Check availability</ModalH1>
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
                  freeSession: false,
                  tier: [tier]
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
    </>
  );
};

export default EnquirePlan;

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
