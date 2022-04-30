import React from 'react';
import styled from 'styled-components';
import Filter from '../../../assets/Filter 24px.svg';
// import Sort from '../../../assets/Increasing 24px.svg';
import Rupee from '../../../assets/Rupee 24px.svg';
import Dollar from '../../../assets/Dollar 24px.svg';
import MobileModalView from './MobileModalView';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const MobileDrawerModal: React.FC<{ currency: string }> = (props) => {
  const { setPriceContext, getCurrency } = React.useContext(
    NewMentorsListContext
  );

  React.useEffect(() => {
    setCurrency(getCurrency());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filterModalToShow, setFilterModalToShow] = React.useState('');
  const [currencySwitcher, setCurrencySwitcher] = React.useState(true);
  const [currency, setCurrency] = React.useState('inr');

  const toggleFilterModal = () => {
    if (filterModalToShow === 'filter') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('filter');
    }
  };

  // const toggleSortFilterModal = () => {
  //   if (filterModalToShow === 'sort') {
  //     setFilterModalToShow('');
  //   } else {
  //     setFilterModalToShow('sort');
  //   }
  // };

  const currencySwitchingHandler = (indicator: any) => {
    setCurrencySwitcher(!currencySwitcher);

    switch (indicator) {
      case true:
        setCurrency('usd');
        setPriceContext('usd');
        break;
      case false:
        setCurrency('inr');
        setPriceContext('inr');
        break;
    }
  };

  return (
    <ModalContainer>
      <SubDivision onClick={toggleFilterModal}>
        <img src={Filter} alt="filter icon"></img>
        <div>Filter</div>
        {filterModalToShow === 'filter' && (
          <>
            <MobileModalView
              currency={props.currency}
              filterToShow={filterModalToShow}
            />
            {/* <FilterModalMobile currency={props.currency} /> */}
          </>
        )}
      </SubDivision>
      {/* <SubDivision onClick={toggleSortFilterModal}>
        <img src={Sort} alt="Sort icon"></img>
        <div>Sort</div>
        {filterModalToShow === 'sort' && (
          <MobileModalView
            currency={props.currency}
            filterToShow={filterModalToShow}
          />
          //   <SortFilterModalMobile onClick={closeMobileDrawer} />
        )}
      </SubDivision> */}
      <SubDivision onClick={() => currencySwitchingHandler(currencySwitcher)}>
        <img
          src={currency === 'inr' ? Rupee : Dollar}
          alt="Currency icon"
        ></img>
        <div>Change Currency</div>
      </SubDivision>
    </ModalContainer>
  );
};

export default MobileDrawerModal;

const SubDivision = styled.div`
  display: flex;
  height: 30%;
  padding: 6% !important;
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

const ModalContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;
  z-index: 2;
  width: 212px;
  height: 9rem;

  background: #ffffff;
  /* /Card/Normal */

  box-shadow: 0px 16px 32px rgba(12, 53, 89, 0.24);
  border-radius: 12px;
`;
