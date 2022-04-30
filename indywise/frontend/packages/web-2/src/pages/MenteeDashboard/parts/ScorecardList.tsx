import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../../../contexts/AuthContext';

const Scorecard: React.FC<any> = ({ skillset }) => {
  const { user } = useAuth();
  return (
    <>
      <Container>
        <Flex>
          <Top>Scorecard List</Top>
          <IconWrapper>
            <Icon icon="decreasing" size="24px" />
          </IconWrapper>
        </Flex>
        <List>
          {skillset.map((s: any) => {
            const path = `/wiseup/scorecard/${user?.ID}/${s.sessionNumber}`;
            return (
              <>
                <ListItem>
                  <Content>
                    <Date>
                      {s?.sessionDate?.day} {s?.sessionDate?.month}{' '}
                      {s?.sessionDate?.year}
                    </Date>
                    <Number>WiseUp Scorecard {s.sessionNumber}</Number>
                  </Content>
                  <Link to={path} target="_blank">
                    <Icon icon="visit" size="21.82px" color="#317EC2" />
                  </Link>
                </ListItem>
                <Hr></Hr>
              </>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default Scorecard;

const Container = styled.div`
  background-color: white;
  box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
  border-radius: 12px;
  margin: 8px;
  font-family: Mulish;
  padding: 24px 24px 12px 24px;

  @media screen and (max-width: 375px) {
    width: fill-available;
    margin: 0.5rem 1rem;
  }
`;

const Top = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #4b4b4b;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const IconWrapper = styled.div`
  color: #0c3559;
  width: 24px;
  height: 24px;
`;

const List = styled.li`
  list-style: none;
  height: 220px;
  overflow-y: auto;

  @media screen and (max-width: 1320px) and (min-width: 650px) {
    overflow-y: auto;
    height: 119px;
  }
`;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  color: #4b4b4b;
  font-size: 16px;
  line-height: 24px;
`;

const Number = styled.div`
  color: #727272;
  font-size: 14px;
  line-height: 20px;
`;

const Hr = styled.div`
  margin: 16px 0;
  border: 1px solid #e9e9e9;
`;
