import { Button, Icon, SkillTag, Text, Avatar } from '@indywise/uikit';
import React from 'react';
import styled from 'styled-components';

const UpcomingIndyTalks: React.FC<any> = ({ webinars }) => {
  const [currIdx, setCurridx] = React.useState(1);

  const shuffleNext = () => {
    if (currIdx === webinars.length) {
      setCurridx(1);
    } else {
      setCurridx(currIdx + 1);
    }
  };

  const shufflePrev = () => {
    if (currIdx === 1) {
      setCurridx(webinars.length);
    } else {
      setCurridx(currIdx - 1);
    }
  };

  return (
    <>
      <SubMain>
        <Text type="title" color="#4B4B4B">
          Upcoming IndyTalks
        </Text>
        {/* <IconWrapper onClick={shuffleNext}>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <Icon icon="arrow" size="24px" color="#317EC2" />
          </Link>
        </IconWrapper> */}
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {webinars?.length > 1 ? (
            <>
              <IconWrapper onClick={shufflePrev} left>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </IconWrapper>
              <IconWrapper onClick={shuffleNext}>
                <Icon icon="arrow" size="17.45px" color="#317EC2" />
              </IconWrapper>
            </>
          ) : null}
        </span>
      </SubMain>
      <Main>
        <Row>
          {webinars.length > 0 &&
            webinars.slice(currIdx - 1, currIdx).map((w: any, i: number) => (
              <>
                <Col4
                  style={{
                    background: `url(${w.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    borderRadius: '12px'
                  }}
                ></Col4>
                <Col8>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      color: '#4B4B4B'
                    }}
                  >
                    <HeadText
                      style={{
                        width: '65%',
                        color: '#4B4B4B'
                      }}
                    >
                      {/* How to Make a Great Impression When...ewfk w efb */}
                      {w.title}
                    </HeadText>
                    <p style={{ margin: '0 0' }}>
                      <HeadSmall
                        style={{
                          color: '#4B4B4B'
                        }}
                      >
                        {w.date}
                      </HeadSmall>
                      <br />
                      <small
                        style={{
                          fontFamily: 'Roboto',
                          fontSize: '14px',
                          margin: '0 0',
                          color: '#4B4B4B'
                        }}
                      >
                        {w.time}
                      </small>
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '16px',
                      marginBottom: '16px'
                    }}
                  >
                    <Icon icon="skill" />
                    {w?.skills?.length > 0
                      ? w?.skills?.map((s: string) => <SkillTag skill={s} />)
                      : null}
                  </div>
                  <hr style={{ borderTop: '1px solid #E9E9E9' }} />
                  <RegularText>IndyTalks Mentors -</RegularText>
                  {w?.webinarMentors?.length
                    ? w?.webinarMentors?.map((ws: any) => (
                        <a
                          href={ws.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px'
                          }}
                        >
                          <Avatar
                            src={ws.avatar}
                            size="40px"
                            style={{
                              borderRadius: '50%'
                            }}
                            type="mentor"
                          />
                          <Text
                            type="body"
                            color="#4B4B4B"
                            style={{ marginLeft: '12px' }}
                          >
                            {ws.name}
                          </Text>
                        </a>
                      ))
                    : null}
                  <Button
                    color="secondary"
                    style={{
                      width: '100%',
                      height: '40px'
                    }}
                  >
                    <a
                      href={w?.bookingLink || ''}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p
                        style={{
                          color: '#262626',
                          margin: '0 0'
                        }}
                      >
                        Book your slot
                      </p>
                    </a>
                  </Button>
                </Col8>
              </>
            ))}
        </Row>
      </Main>
    </>
  );
};

export default UpcomingIndyTalks;

const SubMain = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: Mulish;
  }

  @media (max-width: 1263px) {
    margin-top: 24px;
  }
`;

const Main = styled.div`
  margin-top: 22px;
  border: 1px solid #e9e9e9;
  padding: 16px 24px;
  border-radius: 16px;
`;

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
  // @media (max-width: 768px) {
  //   flex: 0 0 100%;
  //   max-width: 100%;
  // }
`;

const Col8 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 58%;
  flex: 0 0 58%;
  max-width: 58%;
  padding-left: 24px;
  padding-top: 10px;
  // @media (max-width: 768px) {
  //   flex: 0 0 100%;
  //   max-width: 100%;
  // }
`;

const HeadText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0;
`;

const HeadSmall = styled.small`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0;
`;

const RegularText = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
`;

const IconWrapper = styled.div<{ left?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.28px;
  cursor: pointer;
  border: 0.727273px solid #317ec2;
  border-radius: 50%;
  background-color: #ffffff;
  transform: ${({ left }) => (left ? 'rotate(90deg)' : 'rotate(-90deg)')};
  margin-right: ${({ left }) => (left ? '8px' : 0)};
`;
