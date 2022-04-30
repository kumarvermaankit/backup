import React from 'react';
import styled from 'styled-components';
import { Icon, Avatar, Text, SkillTag } from '@indywise/uikit';
// import CourseraLogo from '../../../assets/coursera-logo.svg';
// import YoutubeLogo from '../../../assets/youtube-logo.svg';
// import Udemy from '../../../assets/Udemy.png';
import { ICourse } from '../../../interfaces/ICourse';

interface Props {
  course: ICourse;
}

const truncateSkill = (skill: any, numberProvided?: number) => {
  if (!skill) return;

  var number: number | undefined;

  if (numberProvided === undefined) {
    number = 5;
  } else {
    number = numberProvided;
  }

  const str = skill;
  if (str.length <= number!) {
    return str;
  }

  if (number <= 3) {
    var editedString = str.substr(0, number) + '';
  } else {
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    var editedString = str.substr(0, number) + '...';
  }

  return editedString;
};

const TruncateTitle = (title: string) => {
  if (!title) return;

  switch (true) {
    case window.innerWidth <= 1200:
      return truncateSkill(title, 35);
    case window.innerWidth <= 1000:
      return truncateSkill(title, 28);
    case window.innerWidth <= 475:
      return truncateSkill(title, 20);

    case window.innerWidth <= 425:
      return truncateSkill(title, 15);
    case window.innerWidth <= 400:
      return truncateSkill(title, 12);

    case window.innerWidth <= 375:
      return truncateSkill(title, 10);
    case window.innerWidth <= 355:
      return truncateSkill(title, 6);
    default:
      return truncateSkill(title, 40);
  }
};

const TruncateAuthor = (title: string) => {
  if (!title) return;

  switch (true) {
    case window.innerWidth <= 1200:
      return truncateSkill(title, 35);
    case window.innerWidth <= 1000:
      return truncateSkill(title, 28);
    case window.innerWidth <= 475:
      return truncateSkill(title, 20);
    case window.innerWidth <= 425:
      return truncateSkill(title, 15);
    case window.innerWidth <= 400:
      return truncateSkill(title, 12);

    case window.innerWidth <= 375:
      return truncateSkill(title, 10);
    case window.innerWidth <= 355:
      return truncateSkill(title, 8);
    default:
      return truncateSkill(title, 40);
  }
};

const CourseCard: React.FC<Props> = ({ course }) => {
  const CourseDuration = React.useCallback((time: any): string[] => {
    return time?.split(' ');
  }, []);

  const renderSkill = () => {
    if (course.skills) {
      return course.skills[0];
    }
  };

  return (
    <CardWrapper>
      <a
        key={course.ID}
        href={course.courseLink}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <CourseLogo>
          {course?.service_avatar ? (
            <Avatar
              src={course?.service_avatar}
              defaultValue="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/service-avatars/DefaultCourse.svg"
            />
          ) : (
            <Avatar src="https://public-assets-indywise.s3.ap-south-1.amazonaws.com/service-avatars/DefaultCourse.svg" />
          )}
        </CourseLogo>
      </a>
      <DetailsWrapper>
        <DetailSecOne>
          <a
            key={course.ID}
            href={course.courseLink}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div>
              <CourseTitle> {TruncateTitle(course?.title)} </CourseTitle>
              <Author>By {TruncateAuthor(course?.creator) || '--'}</Author>
            </div>
          </a>
          <LabelsWrapper>
            {
              <Label>
                {course?.skills?.length > 0 && window.innerWidth <= 425
                  ? truncateSkill(renderSkill(), 15) || '--'
                  : window.innerWidth <= 765
                  ? truncateSkill(renderSkill(), 15) || '--'
                  : renderSkill() || '--'}
              </Label>
            }

            {course?.skills?.slice(1).length > 0 && (
              <MoreSkillsModal moreSkills={course?.skills?.slice(1)} />
            )}
          </LabelsWrapper>
          <RatingDetails>
            <Icon icon="star" size="24px" style={{ marginTop: '1.5px' }} />
            <span>--</span>
          </RatingDetails>
        </DetailSecOne>
        <DetailSecTwo>
          <p className="duration-wrapper">
            {CourseDuration(course?.duration)?.map((el) => (
              <span>{el}</span>
            ))}
            {!course.duration && '--'}
          </p>
          <div className="price-wrapper">
            <Icon icon="rupee" color="#262626" size="20px" />
            <span style={{ color: '#262626' }} className="price-text">
              {course?.price}
            </span>
          </div>
        </DetailSecTwo>
      </DetailsWrapper>
    </CardWrapper>
  );
};
// eslint-disable-next-line
const MoreSkillsModal: React.FC<{ moreSkills: string[] }> = ({
  moreSkills
}) => {
  const [viewMore, setViewMore] = React.useState(false);

  const toggleMoreSkillsModal = () => {
    setViewMore((prevState) => !prevState);
  };

  return (
    <ModalContainer>
      {!viewMore ? (
        // <Label onClick={toggleMoreSkillsModal} style={{ cursor: 'pointer' }}>
        //   See All
        // </Label>
        <SkillDiv>
          <SkillTag
            skill={
              window.innerWidth < 800
                ? truncateSkill('See All', 7)
                : window.innerWidth > 800 && window.innerWidth < 1300
                ? truncateSkill('See All', 7)
                : truncateSkill('See All', 10)
            }
            onClick={toggleMoreSkillsModal}
          />
        </SkillDiv>
      ) : (
        <div className="modal-main-wrapper">
          <span onClick={toggleMoreSkillsModal}>
            <Icon
              icon="closeModal"
              size="20px"
              style={{ marginBottom: '2px', cursor: 'pointer' }}
            />
          </span>
          <SkillsModalWrapper>
            {moreSkills.map((skill: string) => (
              <Text type="body">{skill}</Text>
            ))}
          </SkillsModalWrapper>
        </div>
      )}
    </ModalContainer>
  );
};

const CardWrapper = styled.div`
  /* position: relative; */
  box-sizing: border-box;
  font-family: Roboto;
  font-style: normal;
  display: flex;
  padding: 24px;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 12px;
  height: 168px;

  @media (max-width: 975px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 675px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 12px;
  }
`;

const CourseLogo = styled.div`
  margin-right: 12px;
  width: 64px;
  height: 64px;
  border-radius: 50%;

  & > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* @media(max-width:) */
  @media (max-width: 475px) {
    width: 48px;
    height: 48px;
  }
`;

const DetailsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const DetailSecOne = styled.div`
  /* width: 80%; */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-right: 8px;
`;

const CourseTitle = styled.h1`
  color: #262626;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 17px;
    line-height: 25px;
  }
  @media (max-width: 530px) {
    font-size: 15px;
  }
  @media (max-width: 425px) {
    font-size: 13px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const Author = styled.p`
  color: #4b4b4b;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }

  /* @media (max-width: 525px) {
    font-size: 10px;
  } */
`;

const LabelsWrapper = styled.div`
  margin-top: 0.5rem;
  position: relative;
  padding: 4px 0;

  & > *:not(:last-child) {
    margin-right: 4px;
  }
  @media (max-width: 300px) {
    margin: 0;
    margin-top: 3px;
  }
`;

const Label = styled.li`
  user-select: none;

  display: inline-block;
  text-align: center;
  max-width: fit-content;
  height: fit-content;
  /* margin: 5px 0px; */
  list-style: none;
  padding: 2px 12px;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  border-radius: 14px;
  color: #4b4b4b;
  font-size: 14px;
  line-height: 20px;
  @media (max-width: 765px) {
    font-size: 12px;
    padding: 2px 10px;
  }
  @media (max-width: 400px) {
    display: block;
  }
  @media (max-width: 375px) {
    font-size: 10px;
    padding: 2px 10px;
  }
`;
// eslint-disable-next-line
const RatingDetails = styled.div`
  /* margin-top: 4px; */
  align-self: flex-start;
  margin-top: auto;
  display: flex;
  align-items: center;
  color: #4b4b4b;
  font-size: 16;
  line-height: 24px;

  & > span {
    width: 20px;
    height: 20px;

    & > svg {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 475px) {
      width: 14px;
      height: 14px;
    }
  }

  & > *:not(:last-child) {
    margin-right: 4px;
  }
`;

const DetailSecTwo = styled.div`
  width: min-content;
  margin-left: auto;
  display: flex;

  flex-direction: column;
  align-items: flex-end;
  .duration-wrapper {
    margin: 0;
    font-weight: normal;
    font-size: 19px;
    line-height: 28px;
    color: #262626;
    margin-bottom: auto;

    @media (max-width: 975px) {
      font-size: 17px;
    }

    @media (max-width: 545px) {
      font-size: 14px;
    }
    @media (max-width: 425px) {
      font-size: 12px;
    }

    & > :last-child {
      margin-left: 4px;
    }
  }
  div {
    display: flex;
    align-self: flex-end;

    & > span > svg {
      width: 20px;
      height: 20px;

      @media (max-width: 545px) {
        width: 14px;
        height: 14px;
      }
    }

    .price-text {
      font-weight: bold;
      font-size: 20px;
      align-self: stretch;

      @media (max-width: 545px) {
        font-size: 14px;
      }
    }
    /* & > span {
      font-weight: bold;
      font-size: 20px;
      align-self: stretch;

      @media (max-width: 545px) {
        font-size: 13px;
      }
    } */
  }
`;

const ModalContainer = styled.div`
  user-select: none;
  display: inline-block;
  position: absolute;

  .modal-main-wrapper {
    position: relative;
  }
`;

const SkillsModalWrapper = styled.div`
  position: absolute;
  z-index: 2;
  margin-right: 2px;
  background-color: #fff;
  width: 193px;

  max-height: 130px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 4px;

  @media (max-width: 425px) {
    left: -80px;

    & > p {
      font-size: 12px;
    }
  }

  & > :not(:first-child) {
    margin-top: 10px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a4a4a4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SkillDiv = styled.div`
  margin-top: 2px;
  & > div {
    color: #317ec2;
    border: 1px solid #317ec2;

    & > p {
      color: #317ec2;
    }
  }
`;

export default CourseCard;
