import { Icon } from '@indywise/uikit';
import React from 'react';
import styled from 'styled-components';
import CircularAdd from '../../../assets/CircularAdd.png';
import { ModalState } from '../../../contexts/BookingModalContext';
import Instructions from './Carousels/Instructions';

const PendingModalComponent: React.FC<{
  openModal: (header: string, id: number) => void;
}> = ({ openModal }) => {
  const [modalShow, setModalShow] = React.useState<ModalState>(
    ModalState.CLOSE
  );
  return (
    <>
      {modalShow === ModalState.OPEN && (
        <ModalNew>
          <div
            onClick={() => {
              setModalShow(ModalState.CLOSE);
            }}
            style={{
              position: 'absolute',
              top: '3.4rem',
              right: '16px',
              cursor: 'pointer',
              zIndex: 1007
            }}
          >
            <Icon icon="redexit" />
          </div>
          <Instructions />
        </ModalNew>
      )}
      <Title>Pending Fields</Title>
      <Container>
        <FieldContainer>
          <div>
            <Header>Add Video</Header>
            <SubHeader>
              Add a video with a duration of 30-90 seconds to impress Mentors
              and Startups with your skills
            </SubHeader>
          </div>
          <ButtonContainer
            style={{
              display: 'flex',
              alignItems: 'flex-end'
            }}
          >
            <img
              alt="circular add"
              src={CircularAdd}
              onClick={() => openModal('Video', 1)}
              style={{
                width: '35px',
                cursor: 'pointer'
              }}
            />
            <LinkText
              style={{ cursor: 'pointer' }}
              onClick={() => setModalShow(ModalState.OPEN)}
            >
              See Instructions
            </LinkText>
          </ButtonContainer>
        </FieldContainer>
        <Divider />
        <FieldContainer>
          <div>
            <Header>Add Photos</Header>
            <SubHeader>
              Add a maximum of 10 photos to give more personality to your
              portfolio
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('Photos', 2)}>
            <img
              alt="circular add"
              src={CircularAdd}
              style={{ width: '35px' }}
            />
          </ButtonContainer>
          {/* <ButtonContainer
            style={{
              display: 'flex',
              alignItems: 'flex-end'
            }}
          >
            <img
              alt="circular add"
              src={CircularAdd}
              onClick={() => openModal('Photos', 2)}
              style={{
                width: '35px',
                cursor: 'pointer'
              }}
            />
            <LinkText
              style={{ cursor: 'pointer' }}
              onClick={() => setModalShow(ModalState.OPEN)}
            >
              See Instructions
            </LinkText>
          </ButtonContainer> */}
        </FieldContainer>
        <Divider />
        <FieldContainer>
          <div>
            <Header>Add Basic Details</Header>
            <SubHeader>
              Add details like your location, your skills and skill you want
              internship in
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('Basic Details', 3)}>
            <img
              alt="circular add"
              src={CircularAdd}
              style={{ width: '35px' }}
            />
          </ButtonContainer>
        </FieldContainer>
        <Divider />
        <FieldContainer>
          <div>
            <Header>Add Career Objective</Header>
            <SubHeader>
              Write a beautifully curated career objective fulfilling the
              maximum character limit of 200
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('Career Objective', 4)}>
            <img
              alt="circular add"
              src={CircularAdd}
              style={{ width: '35px' }}
            />
          </ButtonContainer>
        </FieldContainer>
        <Divider />
        <FieldContainer>
          <div>
            <Header>Add Work Experience</Header>
            <SubHeader>
              Add the details about the people and places you have worked for/on
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('Work Experience', 5)}>
            <img
              alt="circular add"
              src={CircularAdd}
              style={{ width: '35px' }}
            />
          </ButtonContainer>
        </FieldContainer>
        <Divider />
        <FieldContainer>
          <div>
            <Header>Add Studies and Certifications</Header>
            <SubHeader>
              Add the details about the places you have studied and the
              certifications you did
            </SubHeader>
          </div>
          <ButtonContainer
            onClick={() => openModal('Studies and Certifications', 6)}
          >
            <img
              alt="circular add"
              src={CircularAdd}
              style={{ width: '35px' }}
            />
          </ButtonContainer>
        </FieldContainer>
      </Container>
    </>
  );
};

export default PendingModalComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;

const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 3rem;
  margin-bottom: 1.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  color: #262626;
`;

const SubHeader = styled.p`
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;
`;

const LinkText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  text-decoration: underline;
  color: #a16a06;
  // margin-right: 1.4rem;
`;

const Title = styled.div`
  font-size: 32px;
  color: #262626;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  margin-top: 48px;
  margin-left: 24px;
`;

const ModalNew = styled.div`
  position: fixed;
  z-index: 1005;
  overflow-y: auto;
  background-color: white;
  width: 100vw;
  height: 100vh;
  top: 0;
`;
