import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from '@indywise/uikit';

const PlansDetailOverview = () => {
  return (
    <DetailsOverviewStyles>
      <h1>Start your WiseUp plan today</h1>

      <ListsWrapperStyles>
        <List>
          <ListIcon>
            <Icon icon="totalSessions" />
          </ListIcon>
          <ListContent>
            <h2 className="title">Unlimited Mentoring</h2>
            <p className="text">
              Our unlimited mentoring with guaranteed 4 live sessions every
              month
            </p>
          </ListContent>
        </List>
        <List>
          <ListIcon>
            <Icon icon="totalSessions" />
          </ListIcon>
          <ListContent>
            <h2 className="title">Employee Evaluation</h2>
            <p className="text">
              Our unlimited mentoring with guaranteed 4 live sessions every
              month
            </p>
          </ListContent>
        </List>
        <List>
          <ListIcon>
            <Icon icon="totalSessions" />
          </ListIcon>
          <ListContent>
            <h2 className="title">Unlimited Mentoring</h2>
            <p className="text">
              Our unlimited mentoring with guaranteed 4 live sessions every
              month
            </p>
          </ListContent>
        </List>
        {/* <Icon icon="investment" size="50px" />
        <Icon icon="startupMentoring" size="50px" />
        <Icon icon="hours" size="50px" />
      <Icon icon="circle" size="50px" /> */}
      </ListsWrapperStyles>
      <Button
        color="primary"
        icon="arrow"
        iconAlign="right"
        iconRotate={270}
        iconColor="#fff"
        style={{
          minWidth: '194px',
          backgroundColor: '#3C54AF',
          alignSelf: 'flex-end',
          marginTop: '.5rem',
          filter: 'drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16))'
        }}
      >
        Check full details
      </Button>
    </DetailsOverviewStyles>
  );
};

export default PlansDetailOverview;

const DetailsOverviewStyles = styled.div`
  flex-basis: 50%;
  flex-shrink: 1;
  padding: 40px 40px 24px;
  background: #e5e9f6;
  border-radius: 12px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-basis: 540px;
  }

  @media (max-width: 475px) {
    padding: 30px 30px 18px;
  }

  & > h1 {
    color: #262626;
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;

    @media (max-width: 475px) {
      font-size: 35px;
    }
  }

  & > button > span > p {
    color: #fff;
    background-color: '#3C54AF';
  }
`;

const ListsWrapperStyles = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const List = styled.li`
  display: flex;
  align-items: flex-start;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ListIcon = styled.div`
  & > span > svg {
    width: 80px;
    height: 80px;
  }
`;

const ListContent = styled.div`
  margin-left: 1.5rem;
  flex: 1 1 0;

  @media (max-width: 375px) {
    margin: 0;
    text-align: center;
  }

  & > .title {
    margin: 0;
    color: #262626;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
  }

  & > .text {
    color: #4b4b4b;
    font-size: 14px;
    line-height: 24px;
  }
`;
