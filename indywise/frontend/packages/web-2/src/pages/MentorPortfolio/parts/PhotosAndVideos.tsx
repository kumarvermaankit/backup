import React from 'react';
import ReactPlayer from 'react-player';
import Axios, { baseURL } from '../../../utils/Axios';
import styled from 'styled-components';
import { Text, Button, Icon } from '@indywise/uikit';
import VideoBg from '../../../assets/VideoBg.png';
// import ImageBg from '../../../assets/ImageBg.png';
import { ModalState } from '../../../contexts/BookingModalContext';
import axios from 'axios';
import Instructions from './Carousels/Instructions';
import { LinearProgress } from '@material-ui/core';

const PhotosAndVideos: React.FC<{
  photos: any;
  video: any;
  openModal: (value: ModalState) => void;
  openModalHandler: (header: string, id: number) => void;
}> = ({ photos, video, openModal, openModalHandler }) => {
  const currentUser = JSON.parse(window.localStorage.getItem('user') || '{}');

  const formData = new FormData();
  // const [photoShow, setPhotoShow] = React.useState(false);
  const [videoShow, setVideoShow] = React.useState(false);

  // For photos
  // const [errors, setErrors] = React.useState<any>([]);
  // let signedResponses: any = [];
  // let uploadPromises: any = [];
  // let insertionIndex = 0;
  // 3
  // if (photos) {
  //   insertionIndex =
  //     (Object.keys(photos).length + 1) % 10 === 0
  //       ? 10
  //       : (Object.keys(photos).length + 1) % 10;
  // } else {
  //   insertionIndex = 1;
  // }
  // const handlePhotoSubmission = async (e: any) => {
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     formData.append(
  //       `photo${
  //         (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
  //       }`,
  //       e.target.files[i]
  //     );
  //   }
  //   const { ID } = currentUser;
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     uploadPromises.push(
  //       Axios.post(
  //         `${baseURL}/portfolios/portfolio/photo/presigned-url/${ID}`,
  //         {
  //           contentType: e.target.files[i].type,
  //           format: e.target.files[i].type.split('/')[1],
  //           photoName: `photo${
  //             (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
  //           }`
  //         }
  //       )
  //     );
  //   }
  //   const finalResponses: any = await Promise.all(uploadPromises);
  //   //   .catch((err: any) => {
  //   //   setErrors([...errors, err]);
  //   // });
  //   for (let i = 0; i < finalResponses.length; i++) {
  //     signedResponses.push(finalResponses[i].data.signed_url);
  //   }
  //   handlePhotoRequest();
  // };
  // const handlePhotoRequest = () => {
  //   setPhotoShow(true);
  //   // if (errors.length > 0) {
  //   //   alert('Error!');
  //   //   const keys = [];
  //   //   for (const key of formData.keys()) {
  //   //     keys.push(key);
  //   //   }
  //   //   for (const idx in keys) {
  //   //     formData.delete(keys[idx]);
  //   //   }
  //   // }
  //   for (let i = 0; i < signedResponses.length; i++) {
  //     axios
  //       .put(
  //         signedResponses[i],
  //         formData.get(
  //           `photo${
  //             (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
  //           }`
  //         )
  //       )
  //       .then((res) => {
  //         console.log('Response: ', res);
  //       });
  //   }
  //   setTimeout(() => window.location.reload(), 2000);
  // };

  // For Videos
  let signedResponse = '';
  // let videoUrl = '';

  const handleVideoSubmission = async (e: any) => {
    formData.append(
      'video',
      new Blob([e.target.files[0]], { type: 'application/octet-stream' })
    );

    const res = await Axios.post(
      `${baseURL}/portfolios/portfolio/video/presigned-url/${currentUser.ID}?type=mentor`,
      {
        contentType: e.target.files[0].type,
        format: e.target.files[0].type.split('/')[1]
      }
    );
    signedResponse = res.data['signed_url'];
    // videoUrl = res.data['video_url'];
    handleVideoRequest();
  };

  const handleVideoRequest = () => {
    setVideoShow(true);
    if (signedResponse) {
      axios.put(signedResponse, formData.get('video')).then((res) => {
        alert('File Uploaded Successfully!');
        window.location.reload();
      });
    }
  };
  const [videoWidth] = React.useState('100%');

  // React.useEffect(() => {
  // if (window.innerWidth < 740) {
  //   setVideoWidth('100%');
  // } else if (window.innerWidth < 1025) {
  //   setVideoWidth('63%');
  // } else {
  //   setVideoWidth('46%');
  // }
  //   setVideoWidth('100%');
  // }, [videoWidth]);

  const [modalShow, setModalShow] = React.useState<ModalState>(
    ModalState.CLOSE
  );

  return (
    <Container>
      {modalShow === ModalState.OPEN && (
        <ModalNew>
          <CrossDiv
            onClick={() => {
              setModalShow(ModalState.CLOSE);
            }}
          >
            <Icon icon="redexit" />
          </CrossDiv>
          <Instructions />
        </ModalNew>
      )}
      <LineFlex style={{ marginTop: '60px' }}>
        <HeadText style={{ marginBottom: '24px' }}>Video</HeadText>
        <IconContainer>
          <Icon
            icon="editPen"
            size="24px"
            color="#262626"
            onClick={() => openModalHandler('Photos', 1)}
          />
        </IconContainer>
      </LineFlex>
      <Flex>
        {video?.mentor ? (
          <ReactPlayer
            playing
            muted
            url={video?.mentor}
            className="react-player"
            height="100%"
            width={videoWidth}
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
            style={{
              overflow: 'hidden',
              borderRadius: '12px'
            }}
          />
        ) : (
          <BgImage bgImage={VideoBg} type="video">
            <div>
              <Text type="h4" color="#262626">
                Add Video
              </Text>
              <Text type="subtitle" color="#4B4B4B">
                Add a 30-90 seconds video showcasing yourself and the value you
                provide
              </Text>
            </div>
            <span>
              {videoShow && <LinearProgress style={{ marginTop: '8px' }} />}
              <LinkText
                style={{ cursor: 'pointer' }}
                onClick={() => setModalShow(ModalState.OPEN)}
              >
                See Instructions
              </LinkText>
              <FileInput
                type="file"
                id="video"
                onChange={handleVideoSubmission}
              />
              <div style={{ marginBottom: '8px' }}>
                <Btn>
                  <Button
                    color="tertiary"
                    icon="upload"
                    // onClick={handleVideoRequest}
                  >
                    <label htmlFor="video">Upload Video</label>
                  </Button>
                </Btn>
              </div>
              {/* <Btn>
                <Button onClick={handleVideoRequest} color="tertiary">
                  Submit
                </Button>
              </Btn> */}
            </span>
          </BgImage>
        )}
        {/* {photos && Object.values(photos).length > 0 ? (
          <>
            {Object.values(photos)
              .slice(0, 2)
              .map((item: any, index: number) => {
                if (index === 2) {
                  return <></>;
                }
                return (
                  <ImgDiv>
                    <img
                      style={{ borderRadius: '16px' }}
                      src={item}
                      key={item.id}
                      alt="Uploaded"
                    />
                  </ImgDiv>
                );
              })}
            {photos && Object.values(photos).length === 1 ? (
              <div
                style={{
                  width: '30%',
                  borderRadius: '16px'
                }}
              ></div>
            ) : null}
          </>
        ) : (
          <BgImage bgImage={ImageBg} type="photo">
            <div>
              <Text type="h4" color="#262626">
                Add Photos
              </Text>
              <Text type="subtitle" color="#4B4B4B">
                You can add upto 10 photos
              </Text>
            </div>
            <span>
              {photoShow && <LinearProgress style={{ marginTop: '8px' }} />}
              <LinkText
                style={{ cursor: 'pointer' }}
                onClick={() => setModalShow(ModalState.OPEN)}
              >
                See Instructions
              </LinkText>
              <FileInput
                multiple
                type="file"
                id="photo"
                onChange={handlePhotoSubmission}
              />
              <div style={{ marginBottom: '8px' }}>
                <Btn>
                  <Button
                    color="tertiary"
                    icon="upload"
                    //onClick={handlePhotoRequest}
                  >
                    <label htmlFor="photo">Upload Photos</label>
                  </Button>
                </Btn>
              </div>
            </span>
          </BgImage>
        )} */}
      </Flex>
      {/* {photos && Object.values(photos).length > 2 && (
        <ShowMoreButtonDiv style={{ marginBottom: '16px' }}>
          <ShowMoreButton onClick={() => openModal(ModalState.OPEN)}>
            Show all {Object.values(photos).length} Photos
          </ShowMoreButton>
        </ShowMoreButtonDiv>
      )} */}
    </Container>
  );
};

export default PhotosAndVideos;

const HeadText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  font-family: Mulish;
  color: #262626;
  margin-bottom: 30px;
`;

const CrossDiv = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 150px;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 601px) {
    right: 48px;
  }
`;

const ModalNew = styled.div`
  position: fixed;
  z-index: 1005;
  overflow-y: auto;
  background-color: white;
  width: 100vw;
  height: 100vh;
  top: 0;
`;
const LinkText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  text-decoration: underline;
  color: #a16a06;
  // margin-right: 1.4rem;
`;

const FileInput = styled.input`
  display: none;
  width: 224px;
  height: 44px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //margin: 24px 0;
`;

const LineFlex = styled.div<{ type?: string }>`
  display: ${(props) => (props.type === 'mobileInternSkill' ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: ${(props) =>
    props.type === 'bio' || 'mobileInternSkill' ? 'center' : 'center'};
  margin: 24px 0;
  margin-top: ${(props) => (props.type === 'studyCert' ? '46px' : '')};
  .avatar {
    margin-right: 24px;
    width: 120px;
    height: 120px;
  }
  h4 {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: ${(props) =>
      props.type === 'mobileInternSkill' ? 'column' : ''};
    align-items: ${(props) =>
      props.type === 'bio' || props.type === 'mobileInternSkill'
        ? 'flex-start'
        : 'center'};
    .avatar {
      width: 96px;
      height: 96px;
    }
    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

const IconContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 50%;
  padding: 10px;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 1200px) {
    margin: auto 0;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  margin: 0 auto;
  margin-bottom: 24px;
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    div:nth-child(3) {
      display: block;
    }
  }
`;

const BgImage = styled.div<{ bgImage: any; type: string }>`
  background-color: ${(props) =>
    props.type === 'video' ? '#faefd9' : '#EAF3FA'};
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  h2 {
    width: 45%;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  span {
    h2 {
      width: 100%;
      text-decoration: underline;
    }
  }

  @media (max-width: 1400px) {
    // width: 45%;
  }

  @media (max-width: 1024px) {
    // width: ${(props) => (props.type === 'video' ? '58%' : '28%')};
    width: 100%;
    background-image: ${(props) =>
      props.type === 'video' ? props.bgImage : 'none'};
    h2 {
      width: ${(props) => (props.type === 'video' ? '45%' : '100%')};
    }
  }

  @media (max-width: 740px) {
    width: 100%;
    background: #eaf3fa;
    margin: 16px 0;
    h2 {
      width: 100%;
    }
    span {
      //display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        width: max-content;
      }
      button {
        height: max-content;
      }
    }
  }
`;

// const ImgDiv = styled.div`
//   width: 23%;
//   height: 100%;
//   border-radius: 16px;
//   img {
//     width: 100%;
//     height: 100%;
//   }
//   @media (max-width: 1350px) {
//     width: 21%;
//   }
//   @media (max-width: 1024px) {
//     width: 28%;
//     div:nth-child(2) {
//       display: none;
//     }
//   }
//   @media (max-width: 740px) {
//     width: 48%;
//     height: 200px;
//     margin-top: 16px;
//   }
// `;

// const ShowMoreButtonDiv = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const ShowMoreButton = styled.div`
//   color: #262626;
//   border: 1px solid #262626;
//   box-sizing: border-box;
//   filter: drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.16));
//   border-radius: 8px;
//   width: max-content;
//   font-size: 14px;
//   font-family: Roboto, sans-serif;
//   text-align: center;
//   padding: 0.5rem 1rem;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const Btn = styled.div`
  button {
    background-color: #127776;
    filter: unset;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  }
  button:hover {
    background-color: #127776;
    /* border: 1px solid #127776; */
    filter: unset;
  }
  button:active {
    background-color: #127776;
    /* border: 1px solid #127776; */
    filter: unset;
  }

  button:focus {
    box-shadow: 0 0 0 2px #074e4d, 0 0 3px 5px #074e4d;
  }
`;
