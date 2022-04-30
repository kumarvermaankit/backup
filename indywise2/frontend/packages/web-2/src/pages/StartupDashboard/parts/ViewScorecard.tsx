import React from 'react';
import { Button, Icon } from '@indywise/uikit';
import styled from 'styled-components';
// import Carousel from 'react-multi-carousel';
// import Carousel from 'react-elastic-carousel';
import 'react-multi-carousel/lib/styles.css';
import Intern from '../../../assets/Intern.jpeg';
import AddInterns from './AddInterns';
import { HashLink as Link } from 'react-router-hash-link';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1001 },
//     items: 3,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1001, min: 650 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 650, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 430, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 550, itemsToShow: 3, itemsToScroll: 1 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1000, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 1200, itemsToShow: 3 },
//   { width: 3000, itemsToShow: 3 }
// ];

const scorecards = [
  { name: 'Quresh Lakdawala', position: 'Software Dev Intern' }
  // Keep the last scorecard as a dummy one so that we can render AddInterns
];

const ViewScorecard: React.FC = () => {
  return (
    <div>
      {/* <Carousel isRTL={false} breakPoints={breakPoints} className="startup"> */}
      <>
        <div>
          <InternDiv>
            <RegularText
              style={{
                position: 'absolute',
                bottom: 8,
                left: 16,
                color: '#C6D475'
              }}
            >
              +7%
            </RegularText>
          </InternDiv>
          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px'
            }}
          >
            <RegularText style={{ marginRight: '8px' }}>
              {scorecards[0].name}
            </RegularText>
            <Icon icon="badge" size="20px" />
          </div>
          <RegularText style={{ color: '#727272', fontWeight: 400 }}>
            {scorecards[0].position}
          </RegularText>
          <Button
            color="secondary"
            style={{
              display: 'block',
              color: '#3C54AF',
              height: '36px',
              width: '192px',
              marginBottom: '8px',
              marginTop: '8px'
            }}
          >
            Give Feedback
          </Button>
          <Link
            to="/wiseup/scorecard"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <ViewScorecardButton>View Scorecard</ViewScorecardButton>
          </Link>
        </div>
        <AddInterns />
      </>
      {/* </Carousel> */}
    </div>
  );
};

export { scorecards };
export default ViewScorecard;

const InternDiv = styled.div`
  background: url(${Intern});
  border-radius: 12px;
  height: 240px;
  position: relative;
`;

const RegularText = styled.p`
  padding: 0px 16px 0px 16px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 0;
  margin-top: 0;
  color: #4b4b4b;
`;

const ViewScorecardButton = styled.button`
  background: #3c54af;
  color: white;
  display: block;
  height: 36px;
  width: 192px;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  border: none;
  cursor: pointer;
`;
