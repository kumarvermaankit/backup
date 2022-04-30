import React from 'react';
import styled from 'styled-components';
import StartupHeader from '../../components/StartupHeader';

import emptyResources from '../../assets/empty-resources.svg';
import ResourcesOverview from './parts/ResourcesOverview';

const OurResources: React.FC = () => {
  return (
    <Container>
      <StartupHeader type="getresources" />

      <Wrapper>
        <Center>
          <div className="emptyResource">
            <img src={emptyResources} alt="empty-resources" />
            <div>
              <p className="p-dark">Nothing to show as of now</p>
              <p className="p-light">
                Resources under WiseUp+ and WiseUp+ Hiring show up here
              </p>
            </div>
          </div>

          <ResourcesOverview />
        </Center>
      </Wrapper>
    </Container>
  );
};

export default OurResources;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-left: 72px;
  flex: 1 1 0;
  padding: 35px;
  display: grid;
  place-items: center;
  @media (max-width: 770px) {
    margin: 0;
  }
  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  font-family: Roboto;
  justify-content: space-around;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  .emptyResource {
    max-width: 281px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  & > p {
    font-size: 14px;
    line-height: 24px;
  }

  .p-dark {
    color: #262626;
  }

  .p-light {
    color: #727272;
  }
`;
