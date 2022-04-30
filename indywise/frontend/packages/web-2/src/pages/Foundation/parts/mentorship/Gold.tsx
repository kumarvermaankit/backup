import React from 'react';
import styled from 'styled-components';
import { Icon, Text } from '@indywise/uikit';
import EnquirePlan from '../EnquirePlan';

function Gold() {
  return (
    <Main>
      <div
        style={{
          textAlign: 'center',
          paddingLeft: '12px',
          paddingRight: '12px'
        }}
      >
        <Text
          color="#4B4B4B"
          size="24px"
          style={{ fontFamily: 'Mulish', marginBottom: '26px' }}
        >
          Gold Tier
        </Text>
        <Text
          color="#4B4B4B"
          size="40px"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon icon="dollar" color="#4B4B4B" size="40px" />
          15
          <small
            style={{
              fontSize: '16px'
            }}
          >
            /hr
          </small>
        </Text>
        <EnquirePlan tier="Tier 1" />
      </div>
      <hr
        style={{
          border: '1px solid #E9E9E9',
          marginTop: '45px'
        }}
      />

      <SubMain>
        <ContentDiv>
          <Icon
            size="14px"
            icon="tick"
            color="#F2A922"
            style={{ marginTop: '4px' }}
          />
          <Text
            size="14px"
            color="#4B4B4B"
            style={{
              lineHeight: '24px',
              width: '90%'
            }}
          >
            Mentor with at least 7-8 years of total work experience and 4 years
            of experience in mentoring skills
          </Text>
        </ContentDiv>

        <ContentDiv>
          <Icon
            size="14px"
            icon="tick"
            color="#F2A922"
            style={{ marginTop: '4px' }}
          />
          <Text
            size="14px"
            color="#4B4B4B"
            style={{
              lineHeight: '24px',
              width: '90%'
            }}
          >
            Mentor has hands-on approach with deep knowledge of tools and
            software involved
          </Text>
        </ContentDiv>

        <ContentDiv>
          <Icon
            size="14px"
            icon="tick"
            color="#F2A922"
            style={{ marginTop: '4px' }}
          />
          <Text
            size="14px"
            color="#4B4B4B"
            style={{
              lineHeight: '24px',
              width: '90%'
            }}
          >
            Mentor has local network (national / regional international)
          </Text>
        </ContentDiv>

        <ContentDiv>
          <Icon
            size="14px"
            icon="tick"
            color="#F2A922"
            style={{ marginTop: '4px' }}
          />
          <Text
            size="14px"
            color="#4B4B4B"
            style={{
              lineHeight: '24px',
              width: '90%'
            }}
          >
            Mentor have worked in a company at a Head Of position
          </Text>
        </ContentDiv>

        <ContentDiv>
          <Icon
            size="14px"
            icon="tick"
            color="#F2A922"
            style={{ marginTop: '4px' }}
          />
          <Text
            size="14px"
            color="#4B4B4B"
            style={{
              lineHeight: '24px',
              width: '90%'
            }}
          >
            Mentor have worked in at least two companies of over 500 employees
            or have built successful startups as the founder/co-founder
          </Text>
        </ContentDiv>
      </SubMain>
    </Main>
  );
}

export default Gold;

const Main = styled.div`
  width: 75%;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e9e9e9;

  @media (max-width: 1001px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const SubMain = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
`;

const ContentDiv = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
`;
