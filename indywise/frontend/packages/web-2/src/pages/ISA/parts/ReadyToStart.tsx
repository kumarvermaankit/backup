import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import { Button } from '@indywise/uikit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReadyToStart: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Ready to Start?">
        <Link to="/internship/apply" target="_blank" rel="noreferrer">
          <Button text="Apply Here" />
        </Link>
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default ReadyToStart;

const Wrapper = styled.div`
  margin-top: 8vh;
  margin-bottom: 16vh;
  width: 99vw;

  button {
    margin-top: 1.5rem;
    width: 36vw;
    height: 10vh;
    border-radius: 1vw;

    p {
      font-size: 2.5vw;
      line-height: 6vh;
    }
  }

  @media (max-width: 530px) {
    margin-top: 5vh;
    margin-bottom: 5vh;

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
