import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon, Text } from '@indywise/uikit';
import { CoursesListContext } from '../../../contexts/CoursesListContext';
import CourseCard from '../../CourseList/parts/CourseCard';
import { ICourse } from '../../../interfaces/ICourse';
// import Axios, { baseURL } from '../../../utils/Axios';

const Courses: React.FC<any> = () => {
  const { coursesList } = React.useContext(CoursesListContext);

  const [currIdx, setCurridx] = React.useState(1);

  const shufflePrev = () => {
    if (currIdx === 1) {
      setCurridx(coursesList.length);
    } else {
      setCurridx(currIdx - 1);
    }
  };

  const shuffleNext = () => {
    if (currIdx === coursesList.length) {
      setCurridx(1);
    } else {
      setCurridx(currIdx + 1);
    }
  };

  return (
    <>
      <Container>
        {/* <Flex>
          <Top>Courses</Top>
          <IconWrapper>
            <Link to="/courses" style={{ textDecoration: 'none' }}>
              <Icon icon="arrow" size="24px" color="#317EC2" />
            </Link>
          </IconWrapper>
        </Flex> */}
        <SubMain>
          <Text type="title" color="#4B4B4B">
            Curated Courses
          </Text>
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Link to="/courses">
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
                View all ({coursesList?.length})
              </small>
            </Link>
            {coursesList?.length > 1 ? (
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
        <div>
          {coursesList.slice(currIdx - 1, currIdx).map((course: ICourse) => (
            <CourseCard key={course.ID} course={course} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Courses;

const Container = styled.div`
  flex: 1 0 auto;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  @media screen and (max-width: 1320px) {
    width: fill-available;
  }
  @media screen and (max-width: 375px) {
    margin: 0.5rem 1rem !important;
  }
`;

const SubMain = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: Mulish;
    margin: 0;
    margin-bottom: 22px;
  }
  @media (max-width: 1263px) {
    margin-top: 24px;
  }
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
