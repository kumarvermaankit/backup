import * as React from 'react';
import HeadingContentSplit from './HeadingContentSplit';
import styled from 'styled-components';
import IndustriesImage from '../../../assets/Industries.png';

const Industries: React.FC = () => {
  return (
    <Wrapper>
      <HeadingContentSplit heading="Industries">
        <img src={IndustriesImage} alt="industries we mentor for" />
      </HeadingContentSplit>
    </Wrapper>
  );
};

export default Industries;

const Wrapper = styled.div`
  margin-top: 16vh;
  width: 100%;

  img {
    width: 45vw;
  }

  @media (max-width: 530px) {
    margin-top: 10vh;

    img {
      width: 60vw;
    }
  }
`;
