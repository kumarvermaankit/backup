import React from 'react';
import { Icon, Text } from '@indywise/uikit';
import MostPopular from '../../../../assets/MostPopular.png';
import styled from 'styled-components';
import EnquirePlan from '../EnquirePlan';

function DiamondTier() {
  return (
    <Main>
      <div
        style={{
          textAlign: 'center',
          paddingLeft: '12px',
          paddingRight: '12px'
        }}
      >
        {/* <img
          src={MostPopular}
          alt="Most Popular"
          style={{ marginBottom: '18px' }}
        /> */}
        <div
          style={{
            background: `url(${MostPopular})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '26px'
          }}
        >
          <Text type="small">Most Popular</Text>
        </div>
        <Text
          color="#4B4B4B"
          size="24px"
          style={{
            fontFamily: 'Mulish',
            marginBottom: '26px',
            marginTop: '16px'
          }}
        >
          Diamond Tier
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
          100
          <small
            style={{
              fontSize: '16px'
            }}
          >
            /mo
          </small>
        </Text>
        <EnquirePlan tier="Tier 2" />
      </div>
      <Seperator />

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
            Mentor with at least 15 years of total work experience and 10 years
            of experience in the mentoring skills
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
            Mentor has management and strategic understanding of the tooling and
            structure involved
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
            Mentor has an international network of at least 4 countries
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
            Mentor have worked in a company in a Director position
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
            Mentor have worked in at least two companies of over 1000 employees
            or have built and scaled successful startups as the
            founder/co-founder/CXO
          </Text>
        </ContentDiv>
      </SubMain>
    </Main>
  );
}

export default DiamondTier;

const Main = styled.div`
  width: 75%;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #fad897;
  background: #faefd9;

  @media (max-width: 1001px) {
    display: flex;
    align-items: center;
    background: #eaf3fa;
    border: 1px solid #e9e9e9;
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

const Seperator = styled.hr`
  border: 1px solid #fad897;
  margin-top: 24px;

  @media (max-width: 1001px) {
    border: 1px solid #c6def3;
  }
`;
