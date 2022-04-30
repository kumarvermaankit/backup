import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from '@indywise/uikit';
// import Axios, { baseURL } from '../../../utils/Axios';

const Courses: React.FC<any> = ({ coursesAssesment }) => {
  const [filterCourses, setFilterCourses] = React.useState<any[]>([]);

  const fetchCourses = async () => {
    const res = coursesAssesment?.sort((a: any, b: any) => {
      return (
        new Date(
          `${b?.expectedDateOfCompletion?.day} ${b?.expectedDateOfCompletion?.month} ${b?.expectedDateOfCompletion?.year}}`
        ).valueOf() -
        new Date(
          `${a?.expectedDateOfCompletion?.day} ${a?.expectedDateOfCompletion?.month} ${a?.expectedDateOfCompletion?.year}}`
        ).valueOf()
      );
    });
    setFilterCourses(res.splice(0, 2));
  };

  React.useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [, setDropdownItem] = React.useState(1);
  const [isDropDownVisible, toggleDropDown] = React.useState<boolean[]>(
    new Array(2).fill(false)
  );

  const handleClick = async (
    index: number,
    e: any,
    invalid: boolean,
    ID: string
  ) => {
    // console.log('yoo', e.target.innerText, invalid, ID);
    isDropDownVisible[index] = !isDropDownVisible[index];
    toggleDropDown([
      ...isDropDownVisible.slice(0, index),
      isDropDownVisible[index],
      ...isDropDownVisible.slice(index + 1)
    ]);

    // if (!invalid && e.target.innerText) {
    //   const status =
    //     e.target.innerText === 'Completed'
    //       ? 'completed'
    //       : e.target.innerText === 'In Progress'
    //       ? 'in_progress'
    //       : 'not_started';
    //   const res = await Axios.put(
    //     `${baseURL}/mentees/mentees/recommend/courses`,
    //     { courseID: ID, status }
    //   );
    //   console.log(res);
    // }
  };

  return (
    <>
      <Container>
        <Flex>
          <Top>Courses</Top>
          <IconWrapper>
            <Link to="/courses" style={{ textDecoration: 'none' }}>
              <Icon icon="arrow" size="24px" color="#317EC2" />
            </Link>
          </IconWrapper>
        </Flex>
        <CourseList>
          {filterCourses?.length
            ? filterCourses?.map((c: any, i: number) => (
                <>
                  <Course>
                    <div>
                      <CourseIcon>
                        <Icon icon="defaultCourse" size="32px" />
                      </CourseIcon>
                      <CourseName>{c?.courseName}</CourseName>
                    </div>
                    <span>
                      <div>
                        <DropDownContainer
                          onClick={(e) => handleClick(i, e, true, '')}
                        >
                          <CourseStatus>
                            {c?.status === 'not_started' ? (
                              <div
                                style={{
                                  border: '1px solid #A11B1B',
                                  color: '#A11B1B',
                                  borderRadius: '20px',
                                  padding: '4px 16px'
                                }}
                              >
                                <span style={{ marginRight: '0.5rem' }}>
                                  Not started
                                </span>
                                <Icon
                                  icon="arrow"
                                  size="20px"
                                  color="#A11B1B"
                                />
                              </div>
                            ) : c?.status === 'in_progress' ? (
                              <div
                                style={{
                                  border: '1px solid #CB870A',
                                  color: '#CB870A',
                                  borderRadius: '20px',
                                  padding: '4px 16px'
                                }}
                              >
                                <span style={{ marginRight: '0.5rem' }}>
                                  In Progress
                                </span>
                                <Icon
                                  icon="arrow"
                                  size="20px"
                                  color="#CB870A"
                                />
                              </div>
                            ) : (
                              c?.status === 'finished' && (
                                <div
                                  style={{
                                    border: '1px solid #209755',
                                    color: '#209755',
                                    borderRadius: '20px',
                                    padding: '4px 16px'
                                  }}
                                >
                                  <span style={{ marginRight: '0.5rem' }}>
                                    Completed
                                  </span>
                                  <Icon
                                    icon="arrow"
                                    size="20px"
                                    color="#209755"
                                  />
                                </div>
                              )
                            )}
                          </CourseStatus>
                        </DropDownContainer>

                        {isDropDownVisible[i] && (
                          <DropDown>
                            <DropDownItem
                              onClick={() => {
                                setDropdownItem(1);
                              }}
                            >
                              <div
                                onClick={(e) =>
                                  handleClick(
                                    i,
                                    e,
                                    false,
                                    c?.recommendedCourseID
                                  )
                                }
                              >
                                Not Started
                              </div>
                            </DropDownItem>
                            <DropDownItem
                              onClick={() => {
                                setDropdownItem(2);
                              }}
                            >
                              <div
                                onClick={(e) =>
                                  handleClick(
                                    i,
                                    e,
                                    false,
                                    c?.recommendedCourseID
                                  )
                                }
                              >
                                In Progress
                              </div>
                            </DropDownItem>
                            <DropDownItem
                              onClick={() => {
                                setDropdownItem(3);
                              }}
                            >
                              <div
                                onClick={(e) =>
                                  handleClick(
                                    i,
                                    e,
                                    false,
                                    c?.recommendedCourseID
                                  )
                                }
                              >
                                Completed
                              </div>
                            </DropDownItem>
                          </DropDown>
                        )}
                      </div>
                      <AHref href={c?.courseLink}>
                        <Icon icon="visit" size="24px" color="#317EC2" />
                      </AHref>
                    </span>
                  </Course>
                  {i !== filterCourses?.length - 1 && <Hr />}
                </>
              ))
            : null}
        </CourseList>
      </Container>
    </>
  );
};

export default Courses;

const Container = styled.div`
  flex: 1 0 auto;
  width: 62%;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(4, 32, 57, 0.08);
  border-radius: 12px;
  margin: 8px;
  padding: 24px;
  @media screen and (max-width: 1320px) {
    width: fill-available;
  }
  @media screen and (max-width: 375px) {
    margin: 0.5rem 1rem !important;
  }
`;

const AHref = styled.a``;

const Top = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #4b4b4b;
  font-family: Mulish;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin: 0;
  transform: rotate(-90deg);
  cursor: pointer;
`;

const CourseList = styled.li`
  list-style: none;
  font-family: Roboto;
`;

const Course = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 627px) {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
  }
  span {
    display: flex;
    align-items: center;
    @media screen and (max-width: 627px) {
      justify-content: flex-end;
    }
  }
`;

const CourseIcon = styled.div``;

const CourseName = styled.div`
  margin-left: 13px;
  font-size: 1rem;
  color: #4b4b4b;
  line-height: 1.5rem;
`;

const CourseStatus = styled.div`
  display: flex;
  align-item: center;
  /* margin: 0 1.5rem; */
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;

  span {
    /* margin-right:0.5rem; */
  }
`;

const Hr = styled.div`
  border: 1px solid #e9e9e9;
  margin: 10px 0px;
`;

export const DropDownContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  //border-bottom: 1px solid #727272;
  //margin-top: 44px;
  // padding-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
  h1 {
    font-family: Roboto, sans-serif;
    margin: 0px;
    font-weight: 500;
    color: #4b4b4b;
    font-size: 16px;
  }
`;

export const DropDown = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  font-family: Roboto;
  height: fit-content;
  overflow-y: auto;
  width: 140px;
  position: absolute;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  margin-top: 2.4rem;
  margin-left: 20px;
  padding-top: 8px;
  h1 {
    font-size: 16px;
    font-weight: normal;
    font-family: Roboto, sans-serif;
    margin: 24px 40px 30px 25px;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
  @media (max-width: 1001px) {
    height: 250px;
  }
`;

const DropDownItem = styled.div`
  cursor: pointer;
  padding: 0.8em 0.8em;
  &:hover,
  &:active,
  &:focus {
    font-weight: 700;
  }
`;
