import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//-------------ICONS-------------------------
import RupeeIcon from '../../../assets/Rupee 24px.svg';
import DollarIcon from '../../../assets/Dollar 24px.svg';

const CurrencyModal = () => {
  const [activeOption, setActiveOption] = React.useState('rupee');

  const showCurrencySwitchBtn = useMediaQuery('(max-width:570px)');

  if (showCurrencySwitchBtn) {
    return (
      <>
        <ToggleBtn
          onClick={() => {
            if (activeOption === 'rupee') setActiveOption('dollar');
            else setActiveOption('rupee');
          }}
        >
          <img
            src={activeOption === 'rupee' ? RupeeIcon : DollarIcon}
            alt={activeOption}
          ></img>
          <span>Change Currency</span>
        </ToggleBtn>
      </>
    );
  }

  return (
    <Wrapper>
      <OptionDiv
        isActive={activeOption === 'rupee' ? true : false}
        onClick={() => setActiveOption('rupee')}
      >
        <img src={RupeeIcon} alt="rupee"></img>
        <span>Rupee</span>
      </OptionDiv>
      <OptionDiv
        isActive={activeOption === 'dollar' ? true : false}
        onClick={() => setActiveOption('dollar')}
      >
        <img src={DollarIcon} alt="dollar"></img>
        <span>Dollar</span>
      </OptionDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 212px;
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;

  background-color: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 12px;
  font-family: Roboto;
  font-style: normal;
`;

const OptionDiv = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0.8em 0.8em;
  display: flex;
  border-left: ${({ isActive }) =>
    isActive ? '2px solid  rgb(242, 169, 34)' : '2px solid tranparent'};

  & > img {
    margin-right: 2em;
  }

  & > span {
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  }
`;

const ToggleBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.8em 0.8em;
  font-size: 16px;
  background-color: #fff;

  display: flex;
  align-items: center;
  & > img {
    margin-right: 2em;
  }
`;

export default CurrencyModal;
