import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import GoodMorning from '../../../assets/GoodDay.svg';

const Greeting: React.FC = () => {
  return (
    <>
      {/* <Container></Container> */}
      <GoodMorningDiv>
        <Text type="title" color="#4B4B4B">
          Good Day
        </Text>
        <Text type="body" color="#4B4B4B">
          Curated Content just for you
        </Text>
      </GoodMorningDiv>
    </>
  );
};

export default Greeting;

const GoodMorningDiv = styled.div`
  width: fill-available;
  height: 160px;
  margin: 6.25rem 0.5rem 0.5rem 0.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  background-image: url(${GoodMorning});

  h1 {
    padding: 2vh;
    font-family: Mulish;
  }
  p {
    padding: 2vh;
  }

  @media screen and (max-width: 375px) {
    margin: 6.25rem 1rem 0.5rem 1rem;
  }
`;

// const Container = styled.div`
//   width: 100%;
//   height: 160px;
//   background-color: white;
//   border: solid 1px white;
//   box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
//   border-radius: 12px;
//   margin: 6.25rem 0.5rem 0.5rem 0.5rem; //
//   font-family: Mulish;
// `;
