import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Icon, Pill } from '@indywise/uikit';
import PricingImg from '../../../assets/Pricing.svg';
import ButtonPart from './ButtonPart';
import DeelLogo from '../../../assets/DeelLogo.svg';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const Pricing: React.FC = () => {
  const { getCurrency, getExchangeRate, setPriceContext } = React.useContext(
    NewMentorsListContext
  );

  const [currencySwitcher, setCurrencySwitcher] = React.useState(true);

  const [show, setShow] = useState(true);

  const currency = getCurrency();
  const exchangeRate = getExchangeRate();

  const toggleCurrencyModal = (indicator: any) => {
    setCurrencySwitcher(!currencySwitcher);

    switch (indicator) {
      case true:
        setPriceContext('usd');
        break;
      case false:
        setPriceContext('inr');
        break;
    }
  };

  return (
    <>
      <Container id="pricing">
        <Main>
          <Contain>
            <Left>
              <Text type="h2" color="#262626">
                Pricing
              </Text>
              <ContainPill>
                <Text type="body" color="#4B4B4B">
                  Payable Amount
                </Text>
                <Pill
                  leftIcon={currency === 'inr' ? 'rupee' : 'dollar'}
                  rightIcon="arrow"
                  iconColor="#262626"
                  iconSize="20px"
                  style={
                    window.innerWidth >= 1024
                      ? { width: '4rem', height: '2.2rem' }
                      : { width: '4rem' }
                  }
                  text={''}
                  onClick={() => toggleCurrencyModal(currencySwitcher)}
                />
              </ContainPill>
              <div>
                <Text type="h2" color="#262626" size="40px">
                  {currency === 'usd'
                    ? '$99.00'
                    : `₹ ${(exchangeRate * 99).toFixed(0)}`}
                </Text>
                <Text type="subtitle" color="#4B4B4B">
                  / Month (per Employee)
                </Text>
              </div>
              <ButtonPart page="pricing" />
            </Left>
            <Right>
              <img src={PricingImg} alt="wise up we help" />
            </Right>
          </Contain>
          {show && (
            <Banner>
              <img src={DeelLogo} alt="deel logo" />
              <Text type="body" color="#FFF">
                Onboard your workforce globally for FREE
              </Text>
              <a
                href="https://www.letsdeel.com/partners/indywise"
                target="_blank"
                rel="noreferrer"
              >
                <Text type="body" color="#FAD897">
                  Visit Deel
                </Text>
              </a>
              <div onClick={() => setShow(false)}>
                <Icon icon="close" size="20px" />
              </div>
            </Banner>
          )}
        </Main>
      </Container>
    </>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8fbfd;
  margin-bottom: 6vh;

  @media (max-width: 770px) {
    height: auto;
  }
`;

const Main = styled.div`
  margin: 15vh 10vw;

  @media (max-width: 770px) {
    margin: 10vh 10vw;
  }
`;

const ContainPill = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-right: 8px;
  }

  button {
    div {
      margin-top: 0;
    }
  }
`;

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 530px) {
    display: block;
  }
`;

const Left = styled.div`
  h1 {
    font-weight: normal;
    margin-bottom: 5vh;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 2vh;

    h2 {
      margin-right: 1vw;
    }
  }

  h2 {
    margin-bottom: 5vh;
  }

  p {
    line-height: 28px;
  }

  button {
    span {
      i {
        span {
          svg {
            line {
              stroke: #262626;
            }
          }
        }
      }
    }
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 24px;
  background: #3c54af;
  border-radius: 28px;
  width: fit-content;
  height: auto;
  margin: 5vh auto;

  a {
    color: #fad897;
    margin: auto 2vw;
  }
  img {
    margin-right: 2vw;
  }
  div {
    background: #fff;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      height: 20px;
    }
  }
`;

const Right = styled.div`
  @media (max-width: 770px) {
    img {
      width: 100%;
      margin-top: 5vh;
    }
  }
`;
