import React from 'react';
import styled from 'styled-components';
// import { Image } from '../utils/interfaces';
import { Icon } from '@indywise/uikit';
import { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const PhotosModal: React.FC<{
  photos: any;
}> = ({ photos }) => {
  const [value, setValue] = React.useState<number>(0);
  const changeValue = (data: number) => {
    setValue(data);
  };
  PhotoImage.defaultProps = {
    src: `${photos[`photo${value + 1}`]}`
  };
  return (
    <>
      <div
        style={{
          width: '100%',
          margin: '0% auto',
          position: 'relative'
        }}
      >
        <TitleDiv>
          <Title>
            Photos({value + 1}/{Object.values(photos).length})
          </Title>
        </TitleDiv>

        <div>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <PhotoImage alt="data" />
            <IconDiv style={{ position: 'absolute', left: 0, top: 230 }}>
              {value === 0 ? (
                <div></div>
              ) : (
                <div
                  onClick={() =>
                    setValue((prev) => (prev > 0 ? prev - 1 : prev))
                  }
                >
                  <Icon icon="carouselLeft" size="5rem" />
                </div>
              )}
            </IconDiv>
            <IconDiv style={{ position: 'absolute', right: 0, top: 230 }}>
              {value === Object.values(photos).length - 1 ? (
                <div></div>
              ) : (
                <div
                  onClick={() =>
                    setValue((prev) =>
                      prev < Object.values(photos).length - 1 ? prev + 1 : prev
                    )
                  }
                >
                  <Icon icon="carouselRight" size="5rem" />
                </div>
              )}
            </IconDiv>
            <SmallIconDiv style={{ position: 'absolute', left: 0, top: 264 }}>
              {value === 0 ? (
                <div></div>
              ) : (
                <div
                  onClick={() =>
                    setValue((prev) => (prev > 0 ? prev - 1 : prev))
                  }
                >
                  <Icon icon="carouselLeft" size="5rem" />
                </div>
              )}
            </SmallIconDiv>
            <SmallIconDiv style={{ position: 'absolute', right: 0, top: 264 }}>
              {value === Object.values(photos).length - 1 ? (
                <div></div>
              ) : (
                <div
                  onClick={() =>
                    setValue((prev) =>
                      prev < Object.values(photos).length - 1 ? prev + 1 : prev
                    )
                  }
                >
                  <Icon icon="carouselRight" size="5rem" />
                </div>
              )}
            </SmallIconDiv>
          </div>
        </div>
        <Dots
          // number={10 % Object.values(photos).length}
          // style={{
          //   paddingLeft: "24px",
          //   paddingRight: "24px"
          // }}
          value={value}
          onChange={changeValue}
          thumbnails={Object.values(photos).map((item: any, index: number) => (
            <img
              src={item}
              alt="Portfolio"
              key={index}
              height="80px"
              width="80px"
              style={{
                borderRadius: '8px'
              }}
            />
          ))}
        />
      </div>
    </>
  );
};

export default PhotosModal;

const PhotoImage = styled.img`
  height: 500px;
  width: 500px;
  // margin-top: 165px;
  @media (max-width: 601px) {
    height: 276px;
    width: 276px;
    margin-top: 50px;
  }
`;

const TitleDiv = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 601px) {
    margin-top: 28px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  margin-left: 64px;
  color: #262626;
  font-family: Mulish, sans-serif;
  font-weight: 700;
  @media (max-width: 1001px) {
    margin-left: 40px;
  }
  @media (max-width: 501px) {
    margin-left: 24px;
  }
`;

const IconDiv = styled.div`
  @media (max-width: 501px) {
    display: none;
  }
`;

const SmallIconDiv = styled.div`
  display: none;
  @media (max-width: 501px) {
    display: block;
  }
`;
