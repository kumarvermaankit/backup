import React from 'react';
import {
  Button
  // Icon
} from '@indywise/uikit';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
// import NewMentorsListItem from '../../MentorsList/parts/NewMentorsListItem';
import { HashLink as Link } from 'react-router-hash-link';
import Item from './Item';
import { useEffect } from 'react';

const Mentors: React.FC<any> = ({ mentor, currency, exchangeRate }) => {
  const [items, setItems] = React.useState<any>([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 430, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3 },
    { width: 3000, itemsToShow: 3 }
  ];

  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(3);

  useEffect(() => {
    const T1 = mentor.filter((m: any) => m?.tier[0] === 'Tier 1');
    const T2 = mentor.filter((m: any) => m?.tier[0] === 'Tier 2');
    const T3 = mentor.filter((m: any) => m?.tier[0] === 'Tier 3');
    const TX = mentor.filter((m: any) => m?.tier[0] === 'Tier X');

    const data = [
      {
        tier: 'Gold Tier',
        cost: 15,
        iconName: 'goldBadge',
        background: '#FAEFD9',
        mentor: T1[0]
      },
      {
        tier: 'Diamond Tier',
        cost: 25,
        iconName: 'diamondBadge',
        background: '#EAF3FA',
        mentor: T2[0]
      },
      {
        tier: 'Platinum Tier',
        cost: 40,
        iconName: 'platinumBadge',
        background: '#F0E6F9',
        mentor: T3[0]
      },
      {
        tier: 'Indyfluencer',
        cost: '40-200',
        iconName: 'indyfluencer',
        background: '#E9E9E9',
        mentor: TX[0]
      }
    ];

    setItems(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '51px'
        }}
      >
        <HeadText>Mentor Network</HeadText>
        <Link
          to="/tier/choose"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <Button
            color="tertiary"
            style={{
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              marginRight: '16px'
            }}
          >
            Find me a Mentor
          </Button>
          {/* <IconWrapper>
            <Link to="#" style={{ textDecoration: 'none' }}>
              <Icon icon="arrow" size="24px" color="#317EC2" />
            </Link>
          </IconWrapper> */}
        </Link>
      </div>
      <Row>
        <Carousel
          isRTL={false}
          breakPoints={breakPoints}
          className="menteePortfolio"
        >
          {items.map((d: any) => {
            return (
              <Item
                mentor={d.mentor}
                exchangeRate={exchangeRate}
                currency={currency}
                data={d}
              />
            );
          })}
        </Carousel>
      </Row>
    </>
  );
};

export default Mentors;

const Row = styled.div`
  margin-top: 32px;
  padding-bottom: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media (max-width: 1264px) {
    padding-bottom: 12vh;
  }
`;

const HeadText = styled.p`
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0;
`;

// const IconWrapper = styled.div`
//   width: 24px;
//   height: 24px;
//   margin: 0;
//   transform: rotate(-90deg);
//   cursor: pointer;
// `;
