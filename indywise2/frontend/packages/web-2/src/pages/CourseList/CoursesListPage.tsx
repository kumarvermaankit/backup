import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Helmet } from 'react-helmet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Filters from './parts/Filters';
import CourseCard from './parts/CourseCard';
import CoursePageBg from '../../assets/CoursePageBg.svg';
import Search from './parts/Search';
import PortfolioHeader from '../../components/PortfolioHeader';
import { useAuth } from '../../contexts/AuthContext';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';

import { CoursesListContext } from '../../contexts/CoursesListContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { ICourse } from './../../interfaces/ICourse';

const CoursesListPage: React.FC = () => {
  const { user } = useAuth();
  const { coursesList, showSearchForm, toggleSearchForm } = React.useContext(
    CoursesListContext
  );
  const showSearchMedia = useMediaQuery('(max-width:760px)');

  return (
    <>
      <Helmet>
        <title>Recommended Courses</title>
      </Helmet>
      {!user && (
        <Header
          headerColor="#042039"
          textColor="white"
          buttonTextColor="#042039"
          buttonColor="#E9E9E9"
        />
      )}
      {!user && (
        <HeadingContainer userV={user ? true : false}>
          <img src={CoursePageBg} alt="CoursePageBg" />
          <div>
            <h1>IndyWise Recommended Courses</h1>
          </div>
        </HeadingContainer>
      )}
      {user && (
        <>
          <PortfolioHeader type="courses" />
          <PortfolioMainHeader name="Courses" />
        </>
      )}
      {/* <Main> */}
      <InRoot userV={user ? true : false}>
        {user && (
          <HeadingContainer userV={user ? true : false}>
            <img src={CoursePageBg} alt="CoursePageBg" />
            <div>
              <h1>IndyWise Recommended Courses</h1>
            </div>
          </HeadingContainer>
        )}
        <Wrapper>
          <Flex>
            <div>
              <a href="/">
                <ArrowBackIosIcon style={{ color: '#000', marginTop: '5px' }} />
              </a>
              <span className="text">{coursesList.length} Results</span>
            </div>
            <Filters />
          </Flex>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showSearchForm && showSearchMedia && (
              <Search toggleForm={toggleSearchForm} />
            )}
          </div>
          <CourseListGrid>
            {coursesList.map((course: ICourse) => (
              <CourseCard key={course.ID} course={course} />
            ))}
          </CourseListGrid>
        </Wrapper>
      </InRoot>
      {!user && <Footer color="#042039" />}
      {/* </Main> */}
    </>
  );
};

export default CoursesListPage;

const InRoot = styled.div<{
  userV: boolean | undefined;
}>`
  padding-left: ${(props) => (props.userV ? '112px' : '80px')};
  padding-right: ${(props) => (props.userV ? '40px' : '80px')};
  // padding-left: 112px;
  // padding-right: 80px;
  @media (max-width: 1263px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 375px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  // margin: auto;
  // width: 100%;

  // @media (max-width: 1024px) {
  //   width: 95%;
  // }
`;

// const Main = styled.div`
//   width: unset;
//   user-select: none;
//   margin: 10vh auto 5vh 72px;

//   @media (max-width: 1024px) {
//     margin: 5vh auto;
//   }
// `;

const Wrapper = styled.div`
  padding: 2rem 0 12vh 0;
  display: flex;
  flex-direction: column;
  // width: 90%;
  // margin: 0 auto;

  @media (min-width: 1500px) {
    margin: 0 auto;
  }

  // @media (max-width: 1024px) {
  //   width: 95%;
  // }
  // @media (max-width: 530px) {
  //   width: 100%;
  // }
`;

const HeadingContainer = styled.div<{
  userV: boolean | undefined;
}>`
  margin-top: ${(props) => (props.userV ? '104px' : '54px')};
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 720px) {
    height: 10rem;
  }
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(props) => (props.userV ? '20px' : '0')};
  }

  div {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div > h1 {
    margin: 0;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    color: #f2a922;

    @media (min-width: 1500px) {
      font-size: 48px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
    @media (max-width: 575px) {
      font-size: 20px;
    }
    @media (max-width: 411px) {
      font-size: 18px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    font-family: Mulish;
    font-style: normal;

    & > .text {
      @media (max-width: 475px) {
        font-size: 15px;
      }
    }

    & > a > svg {
      @media (max-width: 475px) {
        width: 15px;
        height: 15px;
      }
    }
  }

  @media (max-width: 530px) {
    padding: 0 5px;
    // flex-direction: column;
  }
`;

const CourseListGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 12px;

  /* @media (min-width: 1500px) {
    margin: 0 auto;
  } */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    margin: 0;
    padding: 1.2em 0.5em;
  }
`;
