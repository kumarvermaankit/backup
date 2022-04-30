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
import { LinearProgress } from '@material-ui/core';

const Photos: React.FC<{
  deleteImageHandler: () => any;
  photos: any;
  // uploadHandler: (data: string) => void;
  closeModal: () => void;
}> = ({ photos, closeModal, deleteImageHandler }) => {
  const currentUser = JSON.parse(window.localStorage.getItem('user') || '{}');
  const formData = new FormData();
  const [disable, setDisable] = React.useState(true);
  const [photoShow, setPhotoShow] = React.useState(false);

  let signedResponses: any = [];
  let uploadPromises: any = [];

  let insertionIndex = 0;

  // 3
  if (photos) {
    insertionIndex = Object.keys(photos).length + 1;
  } else {
    insertionIndex = 1;
  }

  const handleSubmission = async (e: any) => {
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
    handleRequest();
  };

  const handleRequest = () => {
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
        .then((res) => {
          console.log('Response: ', res);
        });
    }
    alert('File Uploaded Successfully!');
    setDisable(false);
  };

  return (
    <Col4 style={{ position: 'relative' }}>
      <VPContainer style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="headingContainer">
          <p>Photos</p>
          {/* {show && <LinearProgress style={{ marginTop: '8px' }} />} */}
          <p>You can add upto 10 photos</p>
          {photoShow && <LinearProgress style={{ marginTop: '8px' }} />}
        </div>
        <div
          className="dropContainer"
          // {...getRootProps()}
        >
          <p>Drag and drop a photo</p>
          <p>OR</p>
          <FileInput
            multiple
            type="file"
            id="certificate"
            onChange={handleSubmission}
          />
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
            <Button
              color="secondary"
              icon="upload"
              iconColor="#262626"
              iconAlign="left"
            >
              <label htmlFor="certificate">Upload Photo(s)</label>
            </Button>
            {/* <Button
              style={{ height: '50px', marginTop: '10px', marginLeft: '24px' }}
              color="primary"
              onClick={handleRequest}
            >
              Submit
            </Button> */}
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
          // bottom: 0,
          // right: 25
        }}
      >
        <ButtonWrapper style={{ paddingRight: '24px' }}>
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
    </Col4>
  );
};

export default Photos;

const Col4 = styled.div`
  height: 500px;
  overflow-y: auto;
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40.33%;
  flex: 0 0 40.33%;
  max-width: 40.33%;

  @media (max-width: 1001px) {
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
