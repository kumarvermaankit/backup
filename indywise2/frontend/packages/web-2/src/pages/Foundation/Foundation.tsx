import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Text, Button } from '@indywise/uikit';
import { api } from '../../api';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import MoreContent from '../../assets/MoreContent.svg';
import PortfolioHeader from '../../components/PortfolioHeader';
import PortfolioMainHeader from '../../components/Header/PortfolioMainHeader';
import { CoursesListContext } from '../../contexts/CoursesListContext';
// import { ModalState } from '../../contexts/BookingModalContext';
// import { initModalState } from '../../utils/helpers';
// import Modal from '../../components/GoogleFormModal';

const Foundation: React.FC = () => {
  // const path = useLocation().pathname;
  const { articlesData } = React.useContext(CoursesListContext);
  const { user } = useAuth();
  const [show, toggleShow] = useState<boolean>(true);
  const [toast, setToast] = useState<boolean>(true);
  // const [item, setItem] = useState<number>(0);
  const history = useHistory();
  // const [modalState, setModalState] = React.useState<ModalState>(
  //   initModalState(path)
  // );

  if (!user) {
    history.push('/sign-in');
    return null;
  }
  if (user?.userType?.includes('mentor')) {
    history.push('/portfolio/mentor');
  }
  // const closeModal = () => {
  //   setModalState(ModalState.CLOSE);
  // };

  // const showModal = () => {
  //   setModalState(ModalState.OPEN);
  // };

  const addSkills = () => {
    history.push('/my-profile');
  };
  const noThanks = () => {
    setToast(false);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    try {
      const getPortfolio = async () => {
        try {
          const res = await api.user.getPortfolio();
          if (res.data.data.signUpData.categoriesOfInterest) {
            if (res.data.data.signUpData.categoriesOfInterest.length) {
              setToast(false);
            }
          }
        } catch (e) {
          setToast(true);
        }
      };
      getPortfolio();
    } catch (e) {
      setToast(true);
    }
  }, []);

  const setShow = () => {
    toggleShow(false);
  };

  // const indexSet = (ind: number) => {
  //   setItem(ind);
  //   showModal();
  // }

  return (
    <>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <PortfolioMainHeader name="Curated Articles" />
      <PortfolioHeader type="home" />
      {/* <Div> */}
      <InRoot>
        {/* <Container>
          <img src={FoundationS} alt="heading" />
          <div>
            <Text type="h3" color="#042039">
              WiseUp Foundation
            </Text>
          </div>
        </Container> */}
        {articlesData?.length && articlesData.length > 0 ? (
          <>
            <Courses>
              {articlesData.length > 0 &&
                articlesData.map((a: any, i: number) => (
                  <>
                    <Item key={a.title}>
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <Img bg={a.thumbnail} />
                        <Content>
                          <Text type="title" bold color="#262626">
                            {a.title}
                          </Text>
                          <Text type="body" color="#727272">
                            {a.description}
                          </Text>
                          {/* <Skills>
                          <Icon icon="skill" size="20px" />
                          <SkillTag skill="Astral Projection" style={{ margin: '2px' }} />
                        </Skills> */}
                          {/* <Button color='secondary'>Take assessment</Button>
                        <Separator />
                        <RelatedMentor>
                          <Text type='h1' color='#4B4B4B'>Recommended Mentor -</Text>
                        </RelatedMentor>
                        <Mentor>
                          <img src="https://www.cnet.com/a/img/ivPkiOLIQO7mxnkJ4mKIErDEwSk=/1092x0/2021/04/23/6efae7ef-4936-4348-a7b1-6ac158660ac6/7c6df1c8-0ec9-4d36-ac86-6211196d218a-loki-tom-hiddleston.png" alt="Avatar" />
                          <MentorName>
                            <Text type='h2' color='#262626'>Loki Laufeyson</Text>
                            <Text type='paragraph' color='#262626'>Astral Projection, Asgard</Text>
                          </MentorName>
                          <Icon icon='visit' size='16px' />
                        </Mentor> */}
                        </Content>
                      </a>
                    </Item>
                  </>
                ))}
            </Courses>
            <Flex>
              <img src={MoreContent} alt="heading" />
              <Text type="body" color="#727272">
                More Weekly Content is on its way !
              </Text>
            </Flex>
          </>
        ) : (
          <No>
            <img src={MoreContent} alt="heading" />
            <Text type="body" color="#727272">
              Weekly Content is on its way !
            </Text>
          </No>
        )}
      </InRoot>
      {/* </Div> */}
      {show && window.localStorage.from === 'FirstFoundation' ? (
        <Banner>
          <Text type="body" color="#E9E9E9">
            Welcome to WiseUp Foundation! We hope you enjoy the curated content
            as much as we enjoyed curating it for you
          </Text>
          <div>
            <Button onClick={() => setShow()}>Ok, got it</Button>
          </div>
        </Banner>
      ) : null}
      {/* <Footer /> */}

      {toast ? (
        <Toast>
          <Text type="h2" color="#262626">
            Please enter your preferred categories to see relevant content here
          </Text>
          <div>
            <Button color="secondary" onClick={noThanks}>
              No Thanks
            </Button>
            <Button
              color="primary"
              iconAlign="left"
              icon="modaladd"
              iconColor="#262626"
              iconSize="16px"
              onClick={addSkills}
            >
              Add Categories
            </Button>
          </div>
        </Toast>
      ) : (
        <></>
      )}
    </>
  );
};

export default Foundation;

const InRoot = styled.div`
  // padding-top: 40px;
  padding-left: 112px;
  padding-right: 40px;
  @media (max-width: 1263px) {
    padding-left: 40px;
  }
  @media (max-width: 501px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  // margin: auto;
  // width: 90%;
  // @media (max-width: 1024px) {
  //   width: 95%;
  // }
`;

// const Div = styled.div`
//   width: auto;
//   margin: 5vh auto 5vh 72px;
//   @media (max-width: 1024px) {
//     margin: 5vh auto;
//   }
// `;

const No = styled.div`
  margin: 5vh auto 10vh auto;
  text-align: center;

  img {
    width: 200px;
    height: auto;
    margin: 100px auto 24px auto;
  }
`;

const Courses = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 6.5em auto 40px auto;
`;

const Item = styled.div`
  width: 32%;
  height: auto;
  box-shadow: 0px 16px 32px rgba(17, 17, 17, 0.08);
  border-radius: 12px;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 48%;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const Img = styled.div<{ bg: string }>`
  width: 100%;
  height: 250px;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
`;

const Content = styled.div`
  margin: 24px;
  h1 {
    font-size: 20px;
    line-height: 28px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
  }
  button {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
// const Skills = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 16px 0;
//   p {
//     font-size: 14px;
//     line-height: 20px;
//   }
// `;
// const Separator = styled.div`
//   width: 100%;
//   height: 1px;
//   background: #E9E9E9;
//   margin: 16px 0;
// `;

// const RelatedMentor = styled.div`
//   h1 {
//     font-style: normal;
//     font-weight: normal;
//     font-size: 16px;
//     line-height: 24px;
//   }
//   margin-bottom: 4px;
// `;

// const Mentor = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   img {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//   }
//   span {
//     border-radius: 50%;
//     padding: 8px;
//     box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
//   }
// `;
// const MentorName = styled.div`
//   width: 100%;
//   margin: 0 8px;
//   h2 {
//     font-size: 20px;
//     line-height: 28px;
//   }

//   p {
//     font-size: 14px;
//     line-height: 20px;
//   }
// `;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vh auto 10vh auto;
  p {
    margin-left: 24px;
  }
`;

// const Container = styled.div`
//   margin: 6.5em auto 40px auto;
//   text-align: center;

//   img {
//     width: 100%;
//     height: auto;
//   }

//   div {
//     position: absolute;
//     left: 20%;
//     top: 10em;

//     h3 {
//       display: flex;
//       align-items: center;
//       height: 100%;
//       justify-content: center;
//     }
//   }

//   @media (max-width: 768px) {
//     img {
//       display: none;
//     }
//     div {
//       position: unset;
//     }
//   }
// `;

const Banner = styled.div`
  background: #0c3559;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 12px;
  height: 40px;
  width: 80%;
  padding: 12px 12px 12px 24px;
  margin: auto;
  position: sticky;
  z-index: 10;
  bottom: 30px;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1140px) {
    display: block;
    text-align: center;
    height: auto;

    div {
      width: 200px;
      margin: 12px auto 0px auto;
    }
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px 24px;
  left: 0;
  right: 0;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 12px;

  div {
    display: flex;
    button {
      width: 200px;
      margin: 0 8px;
      &:hover {
        border: none;
      }
    }
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 90%;
    display: block;
    margin-bottom: 65px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
    }
  }
`;
