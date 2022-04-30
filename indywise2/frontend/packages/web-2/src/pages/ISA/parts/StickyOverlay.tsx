import * as React from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { Link } from 'react-router-dom';

const StickyOverlay: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Text type="title">Ready to Start?</Text>
        <Link to="/internship/apply" target="_blank" rel="noreferrer">
          <Button text="Apply Here" />
        </Link>
      </Container>
    </Wrapper>
  );
};

export default StickyOverlay;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 10vh;
  z-index: 999;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0px -10px 20px rgba(12, 53, 89, 0.2);

  @media (min-width: 1366px) and (max-width: 1599px) {
    box-shadow: 0px -7.11458px 14.2292px rgba(12, 53, 89, 0.2);
  }

  @media (max-width: 530px) {
    margin: 2vw auto;
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 0 6vw;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2vw;
  }

  button {
    width: 24vw;
    height: 7vh;
    border-radius: 0.6vw;

    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 530px) {
    padding: 1vw 2vw;

    h1 {
      font-size: 3vw;
      line-height: 2.5vh;
      margin-right: 1vw;
    }
    button {
      width: 60vw;
      height: 8vh;
      border-radius: 2vw;

      p {
        font-size: 5vw;
        line-height: 0;
      }
    }
  }
`;
