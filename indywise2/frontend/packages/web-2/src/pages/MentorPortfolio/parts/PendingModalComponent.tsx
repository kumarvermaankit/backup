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
              Add a 30-90 seconds video showcasing yourself and the value you
              provide
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
        {/* <FieldContainer>
          <div>
            <Header>Add Photos</Header>
            <SubHeader>
              Add a maximum of 10 photos to give more personality to your
              portfolio
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
          </ButtonContainer>
        </FieldContainer>
        <Divider /> */}
        <FieldContainer>
          <div>
            <Header>Add Basic Details</Header>
            <SubHeader>
              Add details like your location, current employement status etc.
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
            <Header>Add My Highlights</Header>
            <SubHeader>
              Write down about your personality to give your portfolio a human
              touch (max 1000 characters)
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('My Highlights', 4)}>
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
            <Header>Add Skills Experience</Header>
            <SubHeader>
              Add the details about the people and places you have worked for/on
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('Skills Experience', 5)}>
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
            <Header>Add External Links</Header>
            <SubHeader>
              Add links to external handles like Github, Behnace to showcase
              your work and increase your profile credibility
            </SubHeader>
          </div>
          <ButtonContainer onClick={() => openModal('External Links', 6)}>
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
