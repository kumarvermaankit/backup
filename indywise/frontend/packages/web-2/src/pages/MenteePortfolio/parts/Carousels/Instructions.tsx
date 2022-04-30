import React from 'react';
import styled from 'styled-components';

function Instructions() {
  return (
    <>
      <Title>Instructions</Title>
      <Container>
        <div style={{ display: 'flex' }}>
          <Header style={{ marginRight: '16px' }}>1.</Header>
          <div>
            <Header>Add Video</Header>
            <SubHeader>
              Dress as you would for an interview and maintain a professional
              demeanour. Avoid slang and, of course, cursing
            </SubHeader>
          </div>
        </div>
        <Divider />
        <div style={{ display: 'flex' }}>
          <Header style={{ marginRight: '16px' }}>2.</Header>
          <div>
            <Header>Find a good background</Header>
            <SubHeader>
              Pay attention to the background of shots: make sure it looks tidy
              and that there are no noises in the background and ensure the
              lighting is good
            </SubHeader>
          </div>
        </div>
        <Divider />
        <div style={{ display: 'flex' }}>
          <Header style={{ marginRight: '16px' }}>3.</Header>
          <div>
            <Header>Prepare a script</Header>
            <SubHeader>
              Don't ad-lib your video. You want to seem natural and off the cuff
              but should have a sense of what you want to say and how you want
              to phrase it
            </SubHeader>
          </div>
        </div>
        <Divider />
        <div style={{ display: 'flex' }}>
          <Header style={{ marginRight: '16px' }}>4.</Header>
          <div>
            <Header>Know your audience</Header>
            <SubHeader>
              As you plan your script and filming location, consider who will
              watch the video and calibrate accordingly
            </SubHeader>
          </div>
        </div>
        <Divider />
        <div style={{ display: 'flex' }}>
          <Header style={{ marginRight: '16px' }}>4.</Header>
          <div>
            <Header>Shoot in Landscape</Header>
            <SubHeader>
              Make sure you soot the entire video in landscape mode for perfect
              screen fit
            </SubHeader>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            marginBottom: '64px'
          }}
        >
          <Header style={{ marginRight: '16px' }}>5.</Header>
          <div>
            <Header>Show, don't tell</Header>
            <SubHeader>
              Use visuals to illustrate what you're saying in the video script,
              ones that showcase your talents and skills
            </SubHeader>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Instructions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 48px;
  padding-top: 24px;
`;

const Divider = styled.div`
  height: 1px;
  // width: 100%;
  background-color: #e9e9e9;
  margin-top: 3rem;
  margin-bottom: 1.4rem;
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

const Title = styled.div`
  font-size: 32px;
  color: #262626;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  margin-top: 48px;
  margin-left: 24px;
`;
