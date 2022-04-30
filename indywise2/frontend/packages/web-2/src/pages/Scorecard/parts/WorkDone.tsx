import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { useMediaQuery } from '@material-ui/core';
import Axios, { baseURL } from '../../../utils/Axios';

const Truncate = (str: string | any) =>
  str.length >= 40 ? str.slice(0, 30) + '. . .' : str;

const WorkDone: React.FC<{ feedbackData: any; coursesAssesment: any }> = ({
  feedbackData,
  coursesAssesment
}) => {
  const matches = useMediaQuery('min-width:770px');

  const fetchCourses = async () => {
    const res = await Axios.get(`${baseURL}/courses/courses/list`);

    let structuredCourses: any[] = [];
    coursesAssesment?.forEach((target: any) => {
      res?.data?.data?.courses?.forEach((course: any) => {
        if (target?.courseID === course?.ID) {
          structuredCourses.push({
            ...course,
            status: target.status,
            expectedDateOfCompletion: target.expectedDateOfCompletion
          });
        }
      });
    });
    // console.log('structuredCourses:', structuredCourses);
    setCourses(structuredCourses);
  };

  const [courses, setCourses] = React.useState<any>([]);

  React.useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {courses?.length ? (
        <Container>
          <Title>WORK DONE / PLANNED</Title>
          <Paragraph>
            Courses proposed by the mentor are an integral part of the
            upskilling program. A mentee should aim to complete these on the
            proposed timelines as these are incorporated into any projected
            forecasts and expectations. Courses may vary across the upskilling
            program due to changing needs and results.
          </Paragraph>
          <Main>
            {courses?.length
              ? courses?.map((c: any, i: number) => {
                  return (
                    <WrokProgressCard
                      color={
                        c?.status === 'finished'
                          ? 'green'
                          : c?.status === 'in_progress'
                          ? 'yellow'
                          : 'grey'
                      }
                    >
                      <Fl spaceInBetween={false}>
                        <ImageWrapper>
                          <img src={c?.service_avatar} alt="work-done-icon" />
                          {/* <Icon icon="defaultCourse" size="50px" /> */}
                        </ImageWrapper>
                        <WorkDetail>
                          <>
                            {!matches ? (
                              <h2>{Truncate(c?.title)}</h2>
                            ) : (
                              <h2>{c?.title}</h2>
                            )}

                            <p>
                              Expected date of completion :{' '}
                              {`${c?.expectedDateOfCompletion?.day}/${c?.expectedDateOfCompletion?.month}/${c?.expectedDateOfCompletion?.year}`}
                            </p>
                          </>
                        </WorkDetail>
                      </Fl>
                      <Fl spaceInBetween={true} align>
                        {c?.status === 'finished' ? (
                          <WorkStatus>
                            <Icon icon="verified" />
                            <p>Completed</p>
                          </WorkStatus>
                        ) : c?.status === 'in_progress' ? (
                          <WorkStatus>
                            <Icon icon="pending" />
                            <p>In Progress</p>
                          </WorkStatus>
                        ) : (
                          <WorkStatus>
                            <Icon icon="pending" />
                            <p>Not Started</p>
                          </WorkStatus>
                        )}
                        <IconWrapper>
                          <a
                            href={c.courseLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon icon="visit" size="40px" />
                          </a>
                        </IconWrapper>
                      </Fl>
                    </WrokProgressCard>
                  );
                })
              : null}
          </Main>
          <Line />
        </Container>
      ) : null}
    </>
  );
};

export default WorkDone;

const Title = styled.h3`
  margin: 0;
  font-family: Mulish;
  font-weight: bold;
  line-height: 32px;
  font-size: 24px;
  color: #262626;
`;

const Paragraph = styled.p`
  font-size: 14px;

  color: #4b4b4b;
  line-height: 20px;
`;

const Fl = styled.div<{ spaceInBetween: boolean; align?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.align ? 'center' : 'initial')};
  justify-content: ${(props) =>
    props.spaceInBetween ? 'space-between' : null};
`;

const WorkDetail = styled.div`
  margin-left: 4px;
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > h2 {
      margin: 0;

      margin-bottom: 8px;
    }
    & > p {
      margin: 0;
    }
  }
  @media (max-width: 475px) {
    & > h2 {
      font-size: 20px;
    }

    & > p {
      font-size: 14px;
    }
  }
  @media (max-width: 375px) {
    & > h2 {
      font-size: 16px;
    }

    & > p {
      font-size: 12px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 75px;
  height: 75px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  margin-right: 10px;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;

    & > span {
      width: 40px;
      height: 40px;
    }

    & > span > svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 375px) {
    width: 50px;
    height: 50px;

    & > span {
      width: 30px;
      height: 30px;
    }

    & > span > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const WorkStatus = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-size: 16px;
    margin-left: 0.4rem;
  }

  & > span > svg {
    width: 20px;
    height: 20px;
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.div`
  margin-left: 1.5rem;
  display: grid;
  place-items: center;
  width: 75px;
  height: 75px;
  padding: 5px;
  background-color: #fff;
  border-radius: 50%;

  & > span {
    margin-top: 2px;
  }

  @media (max-width: 600px) {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    border-radius: 22px;

    & > a > span {
      width: 30px;
      height: 30px;
    }

    & > a > span > svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;

    & > a > span {
      width: 20px;
      height: 20px;
    }

    & > a > span > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Line = styled.div`
  margin: 5vh auto 0vh auto;
  border: 1px solid #e9e9e9;
`;

const Main = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const WrokProgressCard = styled.div<{ color: string }>`
  background: ${(props) =>
    props.color === 'yellow'
      ? '#FAEFD9'
      : props.color === 'grey'
      ? '#E9E9E9'
      : '#E4F6E1'};
  border-radius: 50px;
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 12px;
  }
`;

const Container = styled.div`
  font-family: Roboto;
`;
