import styled from 'styled-components';

export const CarouselContainer = styled.div`
  height: 100vh;
  position: relative;
  margin-top: 8.4rem;
  margin-left: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;

export const CarouselSubDataContainer = styled.div`
  height: 100vh;
  margin-top: 7.4rem;
  margin-left: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

export const CarouselSection = styled.div`
  height: 400px;
  overflow-y: auto;
  @media (max-width: 505px) {
    height: 100vh;
  }
`;

export const ToggleBtnSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
  p {
    font-family: Roboto, sans-serif;
    color: #262626;
    font-size: 20px;
  }
  @media (max-width: 505px) {
    position: static;
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 800;
  color: #262626;
`;

export const DateHeader = styled.div`
  font-family: Roboto;
  color: #262626;
  font-size: 16px;
  font-weight: 700;
  margin-top: 1.4rem;
`;

export const SubHeader = styled.h1`
  font-family: Roboto;
  font-size: 16px;
  color: #262626;
  margin-top: 3rem;
  margin-bottom: 1.7rem;
`;

export const SubData = styled.div`
  font-family: Roboto;
  color: #4b4b4b;
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
`;

export const SubHeading = styled.div`
  font-family: Roboto;
  color: #4b4b4b;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
`;

export const DropDownContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #727272;
  margin-top: 44px;
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
  height: 200px;
  overflow-y: auto;
  width: 90%;
  position: absolute;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  margin-top: 1.4rem;
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

export const SmallDropDownContainer = styled.div`
  width: 140px;
  @media (max-width: 1001px) {
    width: 225px;
  }
  @media (max-width: 768px) {
    width: 120px;
  }
  border-bottom: 1px solid #727272;
  margin-top: 0.1rem;
  padding-bottom: 0.4rem;
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

export const SmallDropDown = styled.div`
  overflow-y: auto;
  height: 350px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
  background-color: white;
  // width: 16%;
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
`;

export const InputContainer = styled.textarea`
  width: 100%;
  margin-top: 2.5rem;
  border: 0px;
  border-bottom: 1px solid #727272;
  ouline: none;
  padding-bottom: 8px;
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 2.5rem;
  border: 0px;
  border-bottom: 1px solid #727272;
  ouline: none;
  padding-bottom: 4px;
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;

  &:focus {
    outline: none;
  }
`;

export const FlexData = styled.div`
  display: inline-block;
  color: #262626;
  font-size: 16px;
  font-family: Roboto;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  button {
    margin: 0 auto;
    display: flex;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    border-radius: 8px;
    ouline: none;
    border: 0px;
    padding: 8px 16px;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    color: #262626;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const YellowBtn = styled.button`
  background: #f2a922;
  box-shadow: 0px 8px 16px rgba(242, 169, 34, 0.32);
  border-radius: 8px;
  border: 0px;
  padding: 8px 16px;
  position: relative;
  bottom: 40px;
  margin-top: 5px;
  margin-right: 10px;
  outline: none;
  color: #042039;
  font-size: 20px;
  line-height: 28px;
  font-family: Roboto;
  &:hover {
    cursor: pointer;
  }

  span {
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

export const BlueBtn = styled.button`
  background: #0c3559;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 8px;
  border: 0px;
  padding: 8px 16px;
  position: relative;
  bottom: 40px;
  margin-top: 5px;
  margin-right: 10px;
  outline: none;
  color: #fff;
  font-size: 20px;
  line-height: 28px;
  font-family: Roboto;
  &:hover {
    cursor: pointer;
  }

  span {
    svg {
      path {
        stroke: white;
      }
    }
  }
`;

// styles for not added container

export const NotAddedContainer = styled.div`
  p {
    text-align: center;
    color: #4b4b4b;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
  }
`;

// styles for list in modal
export const ListFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 83vh;
`;

export const ListContainer = styled.div`
  font-family: Roboto, sans-serif;
  // overflow: scroll;
  // height: 28rem;
`;

export const ListItem = styled.div`
  // width: 43%;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 26px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
`;

export const LeftSideItem = styled.div`
  width: 100%;
  #heading {
    font-family: Roboto;
    color: #262626;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    margin: 0px;
  }
  #sub-heading {
    font-family: Roboto;
    margin-top: 10px;
    color: #262626;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
  }
  #data {
    display: flex;
    align-items: center;
    p {
      font-family: Roboto;
      margin-top: 4px;
      font-size: 12px;
      line-height: 16px;
      color: #4b4b4b;
    }
  }
`;

export const RightSideItem = styled.div`
  display: flex;
  img {
    // &:first-of-type {
    //   margin-right: 16px;
    // }
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 501px) {
    display: inline-block;
  }
`;

// Container for the videos and photos and the styles for internal
export const VPContainer = styled.div`
  font-family: Roboto, sans-serif;
  padding-left: 24px;
  padding-right: 24px;

  p {
    width: 100%;
    margin: 0px;
    &:first-of-type {
      color: #262626;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &:last-of-type {
      // width: 80%;
      font-size: 16px;
    }
  }

  button {
    p {
      &:first-of-type {
        margin-bottom: 0px;
      }
    }
  }

  .dropContainer {
    position: relative;
    border: 1px dashed #0c3559;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;
    margin-top: 3rem;
    p {
      text-align: center;
      color: #4b4b4b;
      font-weight: normal;
      font-size: 16px;
    }
    div {
      button {
        p {
          &:first-of-type {
            margin-bottom: 0px;
          }
        }
      }
    }
    .uploadBtn {
      margin-top: 1rem;
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
      border-radius: 6px;
      width: 63%;
      padding: 0.8rem 1rem;
      color: #262626;
      font-weight: 400;
      &:hover {
        cursor: pointer;
      }
    }
  }
  // @media (max-width: 505px) {
  //   margin-bottom: 200px;
  // }
`;
/*
// Container for the videos and photos and the styles for internal
 export const VPContainer = styled.div`
  font-family: Roboto, sans-serif;
  padding-left: 24px;
  padding-right: 24px;

  p {
    width: 100%;
    margin: 0px;
    &:first-of-type {
      color: #262626;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &:last-of-type {
      // width: 80%;
      font-size: 16px;
    }
  }

  button {
    p {
      &:first-of-type {
        margin-bottom: 0px;
      }
    }
  }

  .dropContainer {
    border: 1px dashed #0c3559;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px;
    margin-top: 3rem;
    p {
      text-align: center;
      color: #4b4b4b;
      font-weight: normal;
      font-size: 16px;
    }
    div {
      button {
        p {
          &:first-of-type {
            margin-bottom: 0px;
          }
        }
      }
    }
    .uploadBtn {
      margin-top: 1rem;
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
      border-radius: 6px;
      width: 63%;
      padding: 0.8rem 1rem;
      color: #262626;
      font-weight: 400;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 505px) {
    margin-bottom: 200px;
  }
`; */
