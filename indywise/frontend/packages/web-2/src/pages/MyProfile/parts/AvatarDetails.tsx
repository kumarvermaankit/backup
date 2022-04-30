import * as React from 'react';
import styled from 'styled-components';
import { Avatar, Button, Text } from '@indywise/uikit';
import { IUser, useAuth } from '../../../contexts/AuthContext';
import DefaultAvatar from '../../../assets/DefaultAvatar.svg';
import { api } from '../../../api';
import FormErrorMsg from '../../../components/FormErrorMsg';
import axios from 'axios';

const AvatarDetails: React.FC<{ user: IUser }> = ({ user }) => {
  const { updateUser } = useAuth();
  const [fileSelected, setFileSelected] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState<null | string>(null);
  const [avatarToUpload, setAvatarToUpload] = React.useState<File | null>(null);
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');

    if (e.target.files) {
      const maxSizeInMB = 5;
      const avatar = e.target.files[0];
      const fileSize = avatar?.size / 1024 / 1024;

      if (fileSize < maxSizeInMB) {
        avatar ? setFileSelected(true) : setFileSelected(false);
        setImageSrc(URL.createObjectURL(avatar));
        setAvatarToUpload(avatar);
      } else {
        setErrorMsg('Image is too large');
      }
    }
  };

  let intervalTimer: any;
  const handleAvatarUpload = async () => {
    setSendingRequest(true);

    try {
      const presignedUrlRes = await api.user.getAvatarPresignedUrl();
      // await api.user.uploadAvatar(formData);
      const url = presignedUrlRes.data.url;
      const hash = presignedUrlRes.data.hash;

      await axios({
        method: 'PUT',
        url,
        data: avatarToUpload
      });

      // When we upload the avatar via presigned URL. We have to call
      // `updateUser()` to update the `user.avatar` to the new avatar URLs.
      // Although it's not async, once the image is uploaded, a couple of
      // business logic happens on the raw avatar image and then we get the
      // updated Avatar URLs. So this can take anywhere from 300ms to 1000ms.
      // That's why we retry after every 500ms for 3 times.
      //
      // We compare the `user.avatar.hash` after calling updateUser with the
      // `hash` received in `getAvatarPresignedUrl` and if they match, we
      // successfully know the avatar was processed and saved.
      //
      // Even after 5000ms, it's not updated, we ask the user to reupload the
      // image, saying `Something went wrong, please upload again`.
      // Every 1000ms we will retry for maximum of 5 times or if we know
      // the image was uploaded successfully
      const MAX_RETRIES = 5;
      const RETRY_AFTER = 1000;
      let count = 0;
      let newUser: IUser | null = null;

      const checkIfAvatarUploaded = async () => {
        count++;
        if (newUser?.avatar?.hash === hash) {
          clearInterval(intervalTimer);
          setSendingRequest(false);
          setFileSelected(false);
        }

        newUser = await updateUser();
        if (count === MAX_RETRIES) {
          clearInterval(intervalTimer);
          setErrorMsg('Something went wrong, please upload again');
          setSendingRequest(false);
          setFileSelected(false);
        }
      };

      intervalTimer = setInterval(checkIfAvatarUploaded, RETRY_AFTER);
    } catch (err) {
      console.log(err);
      setErrorMsg('Something went wrong, please try again!');
    }
  };

  React.useEffect(() => {}, []);

  const handleCancel = () => {
    setFileSelected(false);
    setImageSrc(null);
  };

  const handleDeleteAvatar = async () => {
    setSendingRequest(true);

    try {
      await api.user.deleteMyAvatar();
      await updateUser();
      setIsDeleted(true);
      setImageSrc(null);
      setErrorMsg('');
    } catch (err) {
      setErrorMsg('Something went wrong, please try again!');
    }

    setSendingRequest(false);
  };

  return (
    <Container>
      <Avatar
        src={
          imageSrc
            ? imageSrc
            : user?.avatar?.large
            ? user?.avatar?.large
            : isDeleted
            ? DefaultAvatar
            : DefaultAvatar
        }
        size="240px"
      />
      {fileSelected ? (
        <>
          <Button
            color="secondary"
            text="Cancel"
            onClick={handleCancel}
            isDisabled={sendingRequest}
          />
          <Button
            color="primary"
            text="Save Photo"
            onClick={handleAvatarUpload}
            isDisabled={sendingRequest}
          />
        </>
      ) : (
        <div>
          <FileUploadContainer disabled={sendingRequest}>
            <input
              id="file"
              type="file"
              name="file"
              accept=".png, .jpg, .jpeg"
              disabled={sendingRequest}
              onChange={(e) => handleFileSelect(e)}
              className="inputfile"
            />
            {/* This label is designed to look like a button */}
            <label htmlFor="file">Upload New Photo</label>
          </FileUploadContainer>
          <Button
            color="secondary"
            text="Remove Photo"
            onClick={handleDeleteAvatar}
            isDisabled={sendingRequest || !user?.avatar?.large}
          />
          <Text size="14px" color="#727272" style={{ marginTop: '1em' }}>
            * File size should not exceed 5MB
          </Text>
        </div>
      )}
      {errorMsg && <FormErrorMsg text={errorMsg} />}
    </Container>
  );
};

export default AvatarDetails;

const Container = styled.div`
  width: 22%;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 240px;
    margin-top: 0.5em;

    p {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 240px;
      height: 240px;
    }

    button {
      width: 240px;
    }
  }
`;

const FileUploadContainer = styled.div<{ disabled: boolean }>`
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    background: #ffffff;
    color: #0c3559;
    margin-top: 0.5em;
    display: inline-block;
    width: 240px;
    padding: 0.5em 0;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    text-align: center;
    border-radius: 0.4em;
    filter: drop-shadow(0px 8px 16px rgba(12, 53, 89, 0.24));

    @media screen and (max-width: 1200px) {
      width: 240px;
    }
  }
  .inputfile:hover + label {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => (props.disabled ? '#ffffff' : '#EAF3FA')};
    filter: ${(props) =>
      !props.disabled && 'drop-shadow(0px 16px 32px rgba(12, 53, 89, 0.16))'};
  }
  .inputfile:active + label {
    filter: ${(props) =>
      props.disabled ? '' : 'drop-shadow(0px 4px 8px rgba(12, 53, 89, 0.32))'};
  }
  .inputfile:focus + label {
    box-shadow: 0 0 0 2px #e9e9e9, 0 0 3px 5px #727272;
    outline: 2px dotted transparent;
    outline-offset: 2px;
  }
`;
