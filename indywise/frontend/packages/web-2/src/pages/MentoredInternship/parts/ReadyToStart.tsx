import * as React from 'react';
import { Button, Text } from '@indywise/uikit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReadyTS from '../../../assets/ReadyTS.png';

const ReadyToStart: React.FC = () => {
  return (
    <Wrapper>
      <img src={ReadyTS} alt="ready to start" />
      <Div>
        <Text type="h3">Ready to Start ?</Text>
        <Link to="/internship/apply" target="_blank" rel="noreferrer">
          <Button text="Apply Here" />
        </Link>
      </Div>
    </Wrapper>
  );
};

export default ReadyToStart;

const Div = styled.div`
  h3 {
    margin-bottom: 3vh;
  }
`;

const Wrapper = styled.div`
  margin: 8vh 10vw 16vh 10vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20vw;
    margin-right: 10vw;
  }

  @media (max-width: 530px) {
    margin: 5vh auto;
    text-align: center;
    display: block;

    img {
      width: 40%;
      margin: auto;
    }
  }
`;
