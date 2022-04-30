import React from 'react';
import { Icon, Text, Button, SkillTag, Avatar } from '@indywise/uikit';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { CoursesListContext } from '../../../contexts/CoursesListContext';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const Articles: React.FC<any> = () => {
  const { articlesData } = React.useContext(CoursesListContext);
  const { getMentors } = React.useContext(NewMentorsListContext);

  const [currIdx, setCurridx] = React.useState(1);

  const shuffleNext = () => {
    if (currIdx === articlesData.length) {
      setCurridx(1);
    } else {
      setCurridx(currIdx + 1);
    }
  };

  const shufflePrev = () => {
    if (currIdx === 1) {
      setCurridx(articlesData.length);
    } else {
      setCurridx(currIdx - 1);
    }
  };

  const mentorSelectFunction = (category: string) => {
    // For now category based recommended mentor calculated
    // Will change this with skill based logic, all mentors with skills
    // in the article and then select mentor with most skills matching

    const mentorsData = getMentors();
    const filtered = mentorsData.filter((m: any) =>
      m.category.includes(category)
    );
    const randomMentor = Math.random() * filtered.length;
    const selectedMentor = parseInt(randomMentor.toFixed(), 10);
    if (filtered.length > 0 && filtered[selectedMentor || 0]) {
      return filtered[selectedMentor || 0];
    } else {
      return false;
    }
  };

  const MentorR = ({ rMentor }: any) => {
    return (
      <>
        <RegularText>Recommended Mentor -</RegularText>
        <a
          href={`https://indywise.com/mentor/${rMentor?.username}`}
          style={{ textDecoration: 'none', color: '#4B4B4B' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px'
            }}
          >
            <Avatar
              src={rMentor?.avatar}
              type="mentor"
              size="40px"
              style={{ marginRight: '8px' }}
            />
            <HeadText
              style={{
                color: '#4B4B4B'
              }}
            >
              {rMentor?.name}
            </HeadText>
            {/* <Icon icon="diamondBadge" style={{ marginLeft: '8px' }} /> */}
          </div>
        </a>
      </>
    );
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
              View all ({articlesData?.length})
            </small>
          </Link>
          {articlesData?.length > 1 ? (
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
          {articlesData.length > 0 &&
            articlesData.slice(currIdx - 1, currIdx).map((a: any) => (
              <>
                <Col4>
                  <img
                    src={a.thumbnail}
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center',
                      borderRadius: '12px',
                      width: '100%'
                    }}
                    alt="a.title"
                  />
                </Col4>
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
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      marginTop: '18px',
                      marginBottom: '26px'
                    }}
                  >
                    <Icon icon="skill" />
                    {a?.skills?.length > 0
                      ? a?.skills?.map((s: string) => <SkillTag skill={s} />)
                      : null}
                  </div>
                  <hr style={{ borderTop: '1px solid #E9E9E9' }} />
                  <RegularText>{a.description}</RegularText>
                  {a?.category ? (
                    <MentorR rMentor={mentorSelectFunction(a?.category)} />
                  ) : null}
                  <a
                    href={a.courseLink}
                    style={{ textDecoration: 'none', color: '#4B4B4B' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
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
                        Read Article
                      </p>
                    </Button>
                  </a>
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
  height: 80%;
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
  height: 100%;
`;

const Col4 = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 35%;
  flex: 0 0 35%;
  max-width: 35%;
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
  height: 100%;
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
