import React from 'react';
import styled from 'styled-components';
import { Text, Pill } from '@indywise/uikit';
import SuperBoy from '../../../assets/SuperBoy.svg';
import ButtonPart from './ButtonPart';
import { WiseUpXPageContext } from '../../../contexts/WiseUpXPageContext';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const Pricing: React.FC = () => {
  const { getWiseupXType } = React.useContext(WiseUpXPageContext);

  const wiseupXType = getWiseupXType();
  const { getCurrency, getExchangeRate, setPriceContext } = React.useContext(
    NewMentorsListContext
  );

  const [currencySwitcher, setCurrencySwitcher] = React.useState(true);

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
        <Contain>
          <Left>
            <Text type="h2" color="#262626">
              Pricing
            </Text>
            <br />
            <br />
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
              {wiseupXType === 'student' ? (
                <>
                  <Text type="h2" color="#262626">
                    {currency === 'usd'
                      ? '$60.00'
                      : `₹ ${(exchangeRate * 60).toFixed(0)}`}
                  </Text>
                </>
              ) : (
                <Text type="h2" color="#262626">
                  {currency === 'usd'
                    ? '$99.00'
                    : `₹ ${(exchangeRate * 99).toFixed(0)}`}
                </Text>
              )}
              <Text type="subtitle" color="#4B4B4B">
                / Month
              </Text>
              {wiseupXType === 'student' ? (
                <Text type="h3" color="#262626">
                  {currency === 'usd'
                    ? '$99.00'
                    : `₹ ${(exchangeRate * 99).toFixed(0)}`}
                </Text>
              ) : null}
            </div>
            <ButtonPart />
          </Left>
          <Right>
            <img src={SuperBoy} alt="wise up we help" />
          </Right>
        </Contain>
      </Container>
    </>
  );
};

export default Pricing;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eaf3fa;
  margin-bottom: 10vh;

  @media (max-width: 770px) {
    height: auto;
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
  margin: auto 10vw;
  height: inherit;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 770px) {
    display: block;
    margin: 10vh 10vw;
  }
`;

const Left = styled.div`
  h1 {
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 2vh;

    h2 {
      margin-right: 1vw;
    }
    h3 {
      margin-right: 1vw;
      text-decoration-line: line-through;
    }
  }

  h2 {
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

  @media (min-width: 530px) and (max-width: 1024px) {
  }
`;

const Right = styled.div`
  @media (max-width: 770px) {
    img {
      width: 50vw;
      margin-top: 5vh;
      margin-left: 15vw;
    }
  }
`;
