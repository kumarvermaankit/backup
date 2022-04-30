import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Icon, Avatar } from '@indywise/uikit';

import { IMentorUpdated, Review } from '../../../interfaces/IMentor';

// Dialog Imports start
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// Dialog imports end

const Reviews: React.FC<{ mentor: IMentorUpdated }> = (props) => {
  // Dialog functions start
  const [open, setOpen] = useState(false);
  const fullWidth = true;
  const maxWidth = 'sm';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Dialog functions end

  const mentor = props.mentor;
  const { reviews } = mentor;

  // console.log(reviews);

  const numberOfReviews = reviews && reviews.length ? reviews.length : 0;

  const NumberOfReviewsHeading = numberOfReviews ? (
    <NumberOfReviewsText>
      {mentor?.overAllRating} Rating ({numberOfReviews} Reviews)
    </NumberOfReviewsText>
  ) : (
    <Text type="h4"></Text>
  );

  return (
    <StickyContainer>
      <Main>
        <Div>
          <React.Fragment>
            <Dialog
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              open={open}
              onClose={handleClose}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <NumberOfReviewsText
                    style={{
                      marginBottom: '20px',
                      marginTop: '28px'
                    }}
                  >
                    All Reviews
                  </NumberOfReviewsText>
                  <Icon
                    icon="close"
                    onClick={handleClose}
                    style={{ cursor: 'pointer' }}
                  ></Icon>
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {reviews?.map((r: Review, i: number) => (
                    <RCard key={i}>
                      <div
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                      >
                        <AvatarDiv>
                          <Avatar src={r.avatar as string} size="40px" />
                        </AvatarDiv>
                      </div>
                      <div
                        style={{
                          marginBottom: '2rem',
                          lineHeight: '28px',
                          marginLeft: '10px'
                        }}
                      >
                        <Text
                          color="black"
                          type="body"
                          bold
                          size="20px"
                          style={{ lineHeight: '28px' }}
                        >
                          {r.subject}
                        </Text>
                        <Text
                          color="black"
                          type="subtitle"
                          style={{ marginTop: '1rem', lineHeight: '28px' }}
                        >
                          {r.review}
                        </Text>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '8px'
                          }}
                        >
                          <small
                            style={{
                              fontFamily: 'Roboto',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: '#727272'
                            }}
                          >
                            {r.name}
                          </small>
                          {/* Date prop isn't available for reviews */}
                          {/* <small
                            style={{
                              fontFamily: 'Roboto',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: '#727272'
                            }}
                          >
                            24th Sept, 2020
                          </small> */}
                        </div>
                      </div>
                      <div
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                      >
                        <Icon icon="star" size="24px" />
                        <Text
                          type="body"
                          bold
                          size="18px"
                          style={{ marginLeft: '5px', marginTop: '0.3rem' }}
                        >
                          5
                        </Text>
                      </div>
                    </RCard>
                  ))}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </React.Fragment>

          {NumberOfReviewsHeading}
          <ReviewContainer>
            {reviews?.length ? (
              reviews.slice(0, 2).map((r: Review, i: number) => (
                <RCard key={i}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AvatarDiv>
                      <Avatar src={r.avatar as string} size="40px" />
                    </AvatarDiv>
                  </div>
                  <OverflowDiv>
                    <Text
                      type="body"
                      bold
                      size="20px"
                      style={{ lineHeight: '28px', color: '#262626' }}
                    >
                      {r.subject}
                    </Text>
                    <Text
                      type="subtitle"
                      style={{
                        marginTop: '1rem',
                        lineHeight: '28px',
                        color: '#4B4B4B'
                      }}
                    >
                      {r.review.slice(0, 100)}...
                    </Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '8px'
                      }}
                    >
                      <small
                        style={{
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#727272'
                        }}
                      >
                        {r.name}
                      </small>
                      {/* Date prop isn't available for reviews */}
                      {/* <small
                        style={{
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#727272'
                        }}
                      >
                        24th Sept, 2020
                      </small> */}
                    </div>
                  </OverflowDiv>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Icon color="black" icon="star" size="24px" />
                    <Text
                      type="body"
                      bold
                      size="18px"
                      style={{
                        marginLeft: '5px',
                        marginTop: '0.3rem',
                        color: '#4B4B4B'
                      }}
                    >
                      5
                    </Text>
                  </div>
                </RCard>
              ))
            ) : (
              <NoReviewsYet />
            )}
          </ReviewContainer>
          {reviews?.length ? (
            <ShowAllReviewsDiv>
              <ShowAllReviewsButton onClick={handleClickOpen}>
                Show All Reviews
              </ShowAllReviewsButton>
            </ShowAllReviewsDiv>
          ) : null}
        </Div>
      </Main>
    </StickyContainer>
  );
};

const NoReviewsYet: React.FC = () => {
  return (
    <NoReviewsContainer>
      <HeadText>No Ratings (0 Reviews)</HeadText>
      <Icon icon="noReviews" size="120px" style={{ margin: '20px' }} />
      <Text
        size="16px"
        style={{ textAlign: 'center', lineHeight: '24px', color: '#727272' }}
      >
        No reviews added yet for this mentor
      </Text>
    </NoReviewsContainer>
  );
};

export default Reviews;

// Styles start

const OverflowDiv = styled.div`
  margin-bottom: 2rem;
  margin-left: 10px;
  @media (max-width: 1263px) {
    margin-right: 270px;
  }
  @media (max-width: 943px) {
    margin-right: 0;
  }
`;

const Main = styled.div`
  margin-right: 64px;
  margin-left: 40px;

  @media (max-width: 415px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 96px;
`;

const HeadText = styled.p`
  font-size: 24px;
  color: #262626;
  font-family: Mulish;
  font-weight: 700;
  margin: 0 0 5px 0;
  @media (max-width: 1280px) {
    text-align: left;
  }
  @media (max-width: 767px) {
    text-align: left;
  }
  @media (max-width: 530px) {
    text-align: center;
  }
`;

const NumberOfReviewsText = styled.h4`
  font-family: Mulish;
  color: #262626;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-left: 1.5rem;
  @media (max-width: 1281px) {
    margin-left: 0;
  }
`;

const Div = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  box-shadow: 0px 0px 0px 0px;
`;

const RCard = styled.div`
  width: 90%;
  display: flex;
  margin: 1.5rem auto;
  @media (max-width: 1263px) {
    width: 100%;
  }
  border-bottom: 1px solid lightgray;
  &:last-child {
    border-bottom: 0px solid lightgray;
  }
`;

const ReviewContainer = styled.div`
  margin-top: 2.5em;
  position: relative;
`;

const NoReviewsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const ShowAllReviewsButton = styled.button`
  background: white;
  font-family: Roboto;
  font-weight: 400;
  color: #262626;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 12px 18px rgba(164, 164, 164, 0.349);
  margin-right: 32px;
  margin-left: 32px;
  height: 40px;
  width: 240px;

  @media (max-width: 1263px) {
    margin-right: 0px;
    margin-left: 0px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ShowAllReviewsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AvatarDiv = styled.div`
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
`;
