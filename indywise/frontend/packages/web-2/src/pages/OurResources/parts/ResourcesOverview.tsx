import React from 'react';
import styled from 'styled-components';
import { Button } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';

const ResourcesOverview = () => {
  return (
    <ResourcesOverviewStyles>
      <div className="section">
        <h1>Give your Junior Employees Superpowers</h1>
        <p>
          Start your subscription and help your employees reach their full
          potential
        </p>
        <ButtonsWrapper>
          <Button
            icon="arrow"
            iconColor="#262626"
            iconAlign="right"
            iconRotate={270}
            color="secondary"
            style={{
              color: '#262626',

              filter: 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
            }}
          >
            Know More
          </Button>
          <Link to="/startup/wiseup-business">
            <Button
              icon="arrow"
              iconColor="#fff"
              iconAlign="right"
              color="primary"
              iconRotate={270}
              style={{
                backgroundColor: '#3C54AF',
                color: '#fff',

                filter: 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
              }}
            >
              Start WiseUp Now
            </Button>
          </Link>
        </ButtonsWrapper>
      </div>
      <HrText data-content="OR" />
      <div className="section">
        <h1>Hire Mentored Interns. Get them Upskilled.</h1>
        <p>
          Start hiring Interns mentored by top industry experts under WiseUp+
          Hiring program and <br /> resolve your resource crunch problem
        </p>
        <ButtonsWrapper>
          <Button
            icon="arrow"
            iconColor="#262626"
            iconAlign="right"
            iconRotate={270}
            color="secondary"
            style={{
              color: '#262626',
              filter: 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
            }}
          >
            Know More
          </Button>
          <Link to="/mentees">
            <Button
              icon="arrow"
              iconColor="#fff"
              iconAlign="right"
              color="primary"
              iconRotate={270}
              style={{
                backgroundColor: '#3C54AF',
                color: '#fff',
                filter: 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
              }}
            >
              Browse Mentored Interns
            </Button>
          </Link>
        </ButtonsWrapper>
      </div>
    </ResourcesOverviewStyles>
  );
};

export default ResourcesOverview;

const ResourcesOverviewStyles = styled.div`
  @media (max-width: 770px) {
    padding: 10px 0 60px 0;
  }

  margin-left: 2rem;

  @media (max-width: 770px) {
    margin-left: 0;
  }

  & > .section {
    & > h1 {
      font-size: 24px;
      line-height: 36px;
      color: #262626;
    }

    & > p {
      font-size: 16px;
      line-height: 28px;
      color: #4b4b4b;
    }

    & > button {
      min-width: 148px;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
  & > button:first-child {
    width: 148px;
    margin-right: 1.2rem;

    & > span > p {
      color: #262626;
    }

    &:hover,
    &:active {
      border: none !important;
      filter: box-shadow(none);
    }
  }

  & > *:last-child {
    min-width: 211px;

    & > span > p {
      color: #fff;
    }

    &:hover,
    &:active {
      border: none !important;
      filter: none !important;
    }
  }

  a {
    button {
      span {
        p {
          color: #fff;
        }
      }
    }
  }
`;

const HrText = styled.hr`
  margin: 1.5rem 0;
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: #4b4b4b;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: '';
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #cbcbcb, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: #000;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
`;
