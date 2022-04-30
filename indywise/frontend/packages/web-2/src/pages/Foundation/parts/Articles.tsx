import React from 'react';
import { Icon, Text } from '@indywise/uikit';
import styled from 'styled-components';
// import Ellipse from '../../../assets/Ellipse.png';
import { HashLink as Link } from 'react-router-hash-link';

const Articles: React.FC<any> = ({ articles }) => {
  const [currIdx, setCurridx] = React.useState(1);

  const shuffleNext = () => {
    if (currIdx === articles.length) {
      setCurridx(1);
    } else {
      setCurridx(currIdx + 1);
    }
  };

  const shufflePrev = () => {
    if (currIdx === 1) {
      setCurridx(articles.length);
    } else {
      setCurridx(currIdx - 1);
    }
  };

  return (
    <>
      <SubMain>
        <Text type="title" color="#4B4B4B">
          Curated Articles
        </Text>
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Link to="/articles">
            <small
              style={{
                color: '#A16A06',
                textDecoration: 'underline',
                fontSize: '16px',
                fontFamily: 'Roboto',
                lineHeight: '24px',
                marginRight: '24px'
              }}
            >
              View all ({articles?.length})
            </small>
          </Link>
          {articles?.length > 1 ? (
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
          {articles.length > 0 &&
            articles.slice(currIdx - 1, currIdx).map((a: any) => (
              <>
                <Col4
                  style={{
                    background: `url(${a.image})`,
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
                        color: '#4B4B4B'
                      }}
                    >
                      {a.title}
                    </HeadText>
                  </div>
                  {/* <div
                    style={{
                      display: 'flex',
                      marginTop: '18px',
                      marginBottom: '26px'
                    }}
                  >
                    <Icon icon="skill" />
                    <SkillTag skill="2D Motion Designer" />
                    <SkillTag skill="See All" />
                  </div> */}
                  <hr style={{ borderTop: '1px solid #E9E9E9' }} />
                  <RegularText>{a.description}</RegularText>
                  {/* <RegularText>Recommended Mentor -</RegularText> */}
                  {/* <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <img
                      src={Ellipse}
                      alt="Ellipse"
                      height="40px"
                      width="40px"
                      style={{ marginRight: '8px' }}
                    />
                    <HeadText
                      style={{
                        color: '#4B4B4B'
                      }}
                    >
                      Brooklyn Cagle
                    </HeadText>
                    <Icon icon="diamondBadge" style={{ marginLeft: '8px' }} />
                  </div> */}
                  {/* <Button
                    color="secondary"
                    style={{
                      width: '100%',
                      height: '40px'
                    }}
                  >
                    <p
                      style={{
                        color: '#262626',
                        margin: '0 0'
                      }}
                    >
                      Take assessment
                    </p>
                  </Button> */}
                </Col8>
              </>
            ))}
        </Row>
      </Main>
    </>
  );
};

export default Articles;

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
  // margin-top: 24px;
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
