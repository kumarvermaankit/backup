import React from 'react';
import styled from 'styled-components';
import Dollar from '../../../assets/Dollar 24px.svg';
import Rupee from '../../../assets/Rupee 24px.svg';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const CurrencyModal: React.FC = () => {
  const { setPriceContext, getCurrency } = React.useContext(
    NewMentorsListContext
  );

  const [currency, setCurrency] = React.useState('inr');

  React.useEffect(() => {
    setCurrency(getCurrency());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCurrencyChange = (input: string) => {
    switch (input) {
      case 'inr':
        setCurrency('inr');
        setPriceContext('inr');
        break;
      case 'usd':
        setCurrency('usd');
        setPriceContext('usd');
        break;
    }
  };

  return (
    <CurrencyModalContainer>
      <SubDivision
        onClick={() => handleCurrencyChange('inr')}
        style={
          currency === 'inr'
            ? {
                borderLeft: '2px solid #F2A922',
                fontWeight: 'bold'
              }
            : { borderLeft: '2px solid transparent' }
        }
      >
        <img src={Rupee} alt="rupee"></img>
        <div>Indian Rupees</div>
      </SubDivision>
      <SubDivision
        onClick={() => handleCurrencyChange('usd')}
        style={
          currency === 'usd'
            ? {
                borderLeft: '2px solid #F2A922',
                fontWeight: 'bold'
              }
            : { borderLeft: '2px solid transparent' }
        }
      >
        <img src={Dollar} alt="dollar"></img>
        <div>American Dollars</div>
      </SubDivision>
    </CurrencyModalContainer>
  );
};

export default CurrencyModal;

const SubDivision = styled.div`
  display: flex;
  height: 50%;
  padding-left: 5% !important;
  &:hover {
    cursor: pointer;
  }
  div {
    font-family: Roboto;
    font-size: 16px;
    position: relative;
    top: 33%;
    margin-left: 5%;
  }
  img {
    width: 13%;
    position: relative;
    top: 0rem;
  }
`;

const CurrencyModalContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;
  z-index: 2;
  width: 212px;
  height: 114px;

  background: #ffffff;
  /* /Card/Normal */

  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
`;
