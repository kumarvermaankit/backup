import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@indywise/uikit';
//import {SessionDetails} from '../../utils/interfaces';
import currencyData from '../../../../data/currency-data.json';
import MentorPortfolioImg from '../../../../assets/MentorPortfolioImg.svg';
import {
  // CarouselSection,
  // CarouselSubDataContainer,
  SubData,
  SubHeading,
  ToggleBtnSection,
  ButtonWrapper,
  DropDownContainer,
  DropDown,
  Input,
  YellowBtn
} from './UI-components';

interface SDProps {
  //skills: any;
  //user: object;
  // state1: {
  //   price: { currency: string; };
  //   //skills: Array<string>;
  // };
  state1: any;
  //state2: any;
  submitSD: (data1: any /* , data2: any */) => void;
}

const SessionDetails: React.FC<SDProps> = ({ state1, submitSD }) => {
  const [priceCurrency, setPriceCurrency] = React.useState(
    state1?.price?.currency ? state1?.price?.currency : ''
  );

  const updatedSessionDetails = {
    price: { currency: priceCurrency }
  };

  const [dropDown, setDropDown] = React.useState<{
    currency: boolean;
  }>({
    currency: false
  });

  const setDropDownHandler = React.useCallback(
    // (name: 'currency') => {
    //   setDropDown((data) => ({
    //     ...data,
    //     [name]: !data[name]
    //   }));
    // },
    (name: 'currency') => {
      setDropDown((data) => ({
        ...data,
        [name]: false
      }));
    },
    []
  );

  return (
    <>
      <Col4 style={{ position: 'relative' }}>
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <div>
            <SubHeading>Price per session</SubHeading>
            <SubData style={{ marginTop: '0px' }}>
              Enter the price of session on per hour basis
            </SubData>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '40px', marginTop: '1px' }}>
                <DropDownContainer
                  onClick={() => setDropDownHandler('currency')}
                >
                  <h1>
                    {updatedSessionDetails?.price.currency
                      ? updatedSessionDetails?.price.currency
                      : ' '}
                  </h1>
                  <Icon
                    icon={!dropDown.currency ? 'darkdownarrow' : 'uparrow'}
                    color="#262626"
                    size="16px"
                  />
                </DropDownContainer>
                {dropDown.currency ? (
                  <DropDown style={{ height: '122px' }}>
                    {currencyData.data.map((currency) => (
                      <h1
                        key={currency}
                        onClick={(e) => {
                          setPriceCurrency(e.currentTarget.innerText);
                          setDropDownHandler('currency');
                        }}
                      >
                        {currency}
                      </h1>
                    ))}
                  </DropDown>
                ) : null}
              </div>
              <Input
                style={{ paddingLeft: '12px', paddingBottom: '0' }}
                placeholder="Enter Price"
                disabled={true}
                //value={updatedAboutYself}
                //onChange={(e) => {
                //setUpdatedAboutYself(e.target.value);
                //setInputHeight(e, '10px');
                //}}
              />
            </div>
          </div>
          <div>
            <SubHeading style={{ marginTop: '40px' }}>
              Select available timings
            </SubHeading>
            <SubData>
              Add the time slots you are available to conduct sessions
            </SubData>
            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <Btn>
                <Button
                  color="tertiary"
                  icon="arrow"
                  iconAlign="right"
                  iconRotate={-90}
                  iconColor="white"
                  iconSize="24px"
                  isDisabled={true}
                  // onClick={handleVideoRequest}
                >
                  <label
                    htmlFor="timeSlot"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    Edit available time slots
                  </label>
                </Button>
              </Btn>
            </div>
          </div>
        </div>
        <ImgDiv>
          <img
            src={MentorPortfolioImg}
            style={{ marginTop: '104px', marginBottom: '120px' }}
            alt="Session Details"
          />
        </ImgDiv>
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <ToggleBtnSection>
            <p
              style={{
                position: 'relative',
                bottom: '48px'
              }}
            >
              1/1
            </p>
            <div>
              <ButtonWrapper>
                <YellowBtn
                /* onClick={() => {
                  const finalData = {
                    aboutYourself: updatedAboutYself
                  };
                  submitAY(finalData);
                }} */
                >
                  Finish
                </YellowBtn>
              </ButtonWrapper>
            </div>
          </ToggleBtnSection>
        </div>
      </Col4>
    </>
  );
};

export default SessionDetails;

const Col4 = styled.div`
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

const ImgDiv = styled.div`
  display: none;
  @media (max-width: 505px) {
    display: flex;
    justify-content: center;
  }
`;

const Btn = styled.div`
  button {
    background-color: #074e4d;
    filter: unset;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  }
  button:hover {
    background-color: #074e4d;
    filter: unset;
  }
  button:active {
    background-color: #074e4d;
    filter: unset;
  }
  button: focus {
    box-shadow: 0 0 0 2px #074e4d, 0 0 3px 5px #074e4d;
  }
`;
