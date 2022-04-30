import React from 'react';
import styled from 'styled-components';
import {
  ButtonWrapper,
  VPContainer
  // YellowBtn
} from './UI-components';
// import { useDropzone } from 'react-dropzone';
import Axios, { baseURL } from '../../../../utils/Axios';
import axios from 'axios';
import { Button, Icon } from '@indywise/uikit';
import ReactPlayer from 'react-player';
import { LinearProgress } from '@material-ui/core';

const Videos: React.FC<{
  deleteImageHandler: () => void;
  photos: any;
  video: any;
  closeModal: () => void;
}> = ({ video, closeModal, deleteImageHandler, photos }) => {
  const currentUser = JSON.parse(window.localStorage.getItem('user') || '{}');
  const [disable, setDisable] = React.useState(true);
  const [videoShow, setVideoShow] = React.useState(false);
  const [photoShow, setPhotoShow] = React.useState(false);

  // const onDrop = (activeFile: any) => {
  //   // converting the file to base64 data
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     uploadHandler(reader.result as string);
  //   };
  //   reader.readAsDataURL(activeFile[0]);
  // };
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop
  // });

  let signedResponse = '';
  // let video_url = '';
  const formData = new FormData();

  const handleSubmission = async (e: any) => {
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
    // video_url = res.data['video_url'];
    handleRequest();
  };

  const handleRequest = async () => {
    setVideoShow(true);
    // if (video) {
    //   const result = await Axios.delete(`${baseURL}/portfolios/portfolio/videos`)
    //   if (!result) {
    //     console.log("Error in delete");
    //   }
    // }
    if (signedResponse) {
      axios.put(signedResponse, formData.get('video')).then((res) => {
        alert('File Uploaded Successfully! Click on Finish to save!');
        setVideoShow(false);
        setDisable(false);
      });
    }
  };

  let signedResponses: any = [];
  let uploadPromises: any = [];
  let insertionIndex = 0;

  // 3
  if (photos) {
    insertionIndex = Object.keys(photos).length + 1;
  } else {
    insertionIndex = 1;
  }

  const handlePhotoSubmission = async (e: any) => {
    // e.preventDefault();
    // setShow(true);
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(
        `photo${
          (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
        }`,
        e.target.files[i]
      );
    }

    const { ID } = currentUser;
    for (let i = 0; i < e.target.files.length; i++) {
      uploadPromises.push(
        Axios.post(
          `${baseURL}/portfolios/portfolio/photo/presigned-url/${ID}`,
          {
            contentType: e.target.files[i].type,
            format: e.target.files[i].type.split('/')[1],
            photoName: `photo${
              (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
            }`
          }
        )
      );
    }
    const finalResponses: any = await Promise.all(uploadPromises);

    for (let i = 0; i < finalResponses.length; i++) {
      signedResponses.push(finalResponses[i].data.signed_url);
    }
    handlePhotoRequest();
  };

  const handlePhotoRequest = () => {
    setPhotoShow(true);

    for (let i = 0; i < signedResponses.length; i++) {
      axios
        .put(
          signedResponses[i],
          formData.get(
            `photo${
              (i + insertionIndex) % 10 === 0 ? 10 : (i + insertionIndex) % 10
            }`
          )
        )
        .then((res) => {});
    }
    alert('File Uploaded Successfully!');
    setDisable(false);
  };

  return (
    <>
      <Col4 style={{ position: 'relative' }}>
        <VPContainer>
          <div className="headingContainer">
            <p>Video</p>
            <p>
              Add a 30-90 seconds video showcasing yourself and the value you
              provide
            </p>
            {videoShow && <LinearProgress style={{ marginTop: '8px' }} />}
          </div>
          <div
            className="dropContainer"
            // {...getRootProps()}
          >
            <div style={{ width: '100%' }}>
              {video?.mentor?.length > 0 && (
                <span
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 10,
                    right: 6
                  }}
                  onClick={() => {
                    Axios.delete(
                      `${baseURL}/portfolios/portfolio/videos?type=mentor`
                    ).then((res) => {
                      window.location.reload();
                    });
                  }}
                >
                  <Icon icon="redexit" size="16px" />
                </span>
              )}
              {video?.mentor ? (
                <ReactPlayer
                  playing
                  muted
                  url={video?.mentor}
                  className="react-player"
                  height="250px"
                  width="100%"
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
                <>
                  <p>Drag and drop a video</p>
                  <p>OR</p>
                </>
              )}
            </div>
            <FileInput type="file" id="video" onChange={handleSubmission} />
            <div
              style={{
                // width: '224px',
                // height: '44px',
                margin: '10px auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {video?.mentor ? (
                <Button
                  color="secondary"
                  icon="upload"
                  iconAlign="left"
                  iconColor="#262626"
                >
                  <label htmlFor="video">Change Video</label>
                </Button>
              ) : (
                <Button
                  color="secondary"
                  icon="upload"
                  iconAlign="left"
                  iconColor="#262626"
                >
                  <label htmlFor="video">Upload Video</label>
                </Button>
              )}
              {/* <Button
                // style={{ marginTop: '10px' }}
                color="primary"
                onClick={handleRequest}
              >
                Submit
              </Button> */}
            </div>
            {/* )} */}
          </div>
          {/* <button onClick={handleRequest}>Submit</button> */}
        </VPContainer>
        {window.innerWidth > 1000 && (
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              right: 25
            }}
          >
            <ButtonWrapper>
              <Button
                color="primary"
                onClick={() => {
                  closeModal();
                  window.location.reload();
                }}
                isDisabled={disable}
              >
                Finish
              </Button>
            </ButtonWrapper>
          </div>
        )}

        {window.innerWidth < 1000 && (
          <>
            <VPContainer
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                marginTop: '48px'
              }}
            >
              <hr
                style={{
                  color: '#CBCBCB',
                  // borderTop: "1px solid #CBCBCB",
                  width: '80%'
                }}
              />
              <div className="headingContainer">
                <p>Photos</p>
                <p>You can add upto 10 photos</p>
                {photoShow && <LinearProgress style={{ marginTop: '8px' }} />}
              </div>
              <div className="dropContainer">
                <p>Drag and drop a photo</p>
                <p>OR</p>
                <FileInput
                  multiple
                  type="file"
                  id="certificate"
                  onChange={handlePhotoSubmission}
                />
                <div
                  style={{
                    // width: '224px',
                    // height: '44px',
                    margin: '10px auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Button color="secondary" icon="upload" iconAlign="left">
                    <label htmlFor="certificate">Upload Photo(s)</label>
                  </Button>
                  <Button
                    style={{
                      height: '50px',
                      marginTop: '10px',
                      marginLeft: '24px'
                    }}
                    color="primary"
                    onClick={handlePhotoRequest}
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                {photos &&
                  Object.entries(photos).length > 0 &&
                  Object.entries(photos).map(([key, value]: any): any => (
                    <span
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        marginRight: '8px'
                      }}
                    >
                      <span
                        style={{
                          cursor: 'pointer',
                          position: 'absolute',
                          top: 0,
                          right: 0
                        }}
                        onClick={() => {
                          // deletePromises.push(
                          Axios.delete(
                            `${baseURL}/portfolios/portfolio/photos/${key}`
                          )
                            .then((res: any) => {
                              deleteImageHandler();
                            })
                            .catch((err: any) =>
                              console.log('delete failed', err.message)
                            );
                        }}
                      >
                        <Icon icon="redexit" size="20px" />
                      </span>
                      <img
                        src={value}
                        alt="Portfolio"
                        key={key}
                        height="100px"
                        width="100px"
                        style={{
                          // flex: "0 0 20%",
                          borderRadius: '8px'
                          // marginRight: '2px',
                        }}
                      />
                    </span>
                  ))}
              </div>
            </VPContainer>
            <div
              style={{
                float: 'right'
                // position: 'absolute',
                // bottom: '0px',
                // right: 25
              }}
            >
              <ButtonWrapper style={{ paddingRight: '24px' }}>
                <Button
                  onClick={() => {
                    closeModal();
                    window.location.reload();
                  }}
                  isDisabled={disable}
                >
                  Finish
                </Button>
              </ButtonWrapper>
            </div>
          </>
        )}
      </Col4>
    </>
  );
};

export default Videos;

const Col4 = styled.div`
  min-height: 1px;
  // overflow-y: auto;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40.33%;
  flex: 0 0 40.33%;
  max-width: 40.33%;
  height: 700px;
  @media (max-height: 700px) {
    height: 400px;
  }
  @media (max-height: 800px) {
    height: 600px;
  }
  @media (max-width: 1001px) {
    overflow-y: scroll;
    flex: 0 0 70%;
    max-width: 70%;
    display: block;
  }
  @media (max-width: 505px) {
    flex: 0 0 100%;
    max-width: 100%;
    display: block;
  }
`;

const FileInput = styled.input`
  display: none;
  width: 224px;
  height: 44px;
  margin: 0 auto;
`;
