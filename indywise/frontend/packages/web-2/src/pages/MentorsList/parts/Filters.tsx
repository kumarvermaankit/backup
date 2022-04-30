import * as React from 'react';
import { Pill } from '@indywise/uikit';
import styled from 'styled-components';
import SkillsFilterModal from './SkillsFilterModal';
import TierFilterModal from './TierFilterModal';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

import FilterModal from './FilterModal';
import CurrencyModal from './CurrencyModal';
import MobileDrawerModal from './MobileDrawerModal';

const Filters: React.FC<{ currency: string }> = (props) => {
  const [currency, setCurrency] = React.useState('inr');
  const [filterModalToShow, setFilterModalToShow] = React.useState('');

  const {
    getSelectedSkills,
    getCurrency,
    getPrice,
    getRating,
    getExp,
    getSelectedTier,
    tierFiltering,
    updateSelectedTier
  } = React.useContext(NewMentorsListContext);

  React.useEffect(() => {
    setCurrency(getCurrency());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currency]);

  React.useEffect(() => {
    if (tierFiltering) {
      updateSelectedTier('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tierFiltering]);

  const price = getPrice();
  const rating = getRating();
  const exp = getExp();

  if (currency === 'usd') {
    var isFilterActiveSecond = true
      ? !(price.includes(0) && price.includes(500) && currency === 'usd') ||
        rating !== 1 ||
        !(exp.includes(0) && exp.includes(20))
      : false;
  } else {
    isFilterActiveSecond = true
      ? !(price.includes(0) && price.includes(40000) && currency === 'inr') ||
        rating !== 1 ||
        !(exp.includes(0) && exp.includes(20))
      : false;
  }

  const skills = getSelectedSkills();

  const tier = getSelectedTier();

  const isSkillsFilterActive = skills.length ? true : false;

  const isTierFilterActive = tier.length ? true : false;

  const toggleSkillsFilterModal = () => {
    if (filterModalToShow === 'skills') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('skills');
    }
  };

  const toggleTierFilterModal = () => {
    if (filterModalToShow === 'tier') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('tier');
    }
  };

  const toggleFilterModal = () => {
    if (filterModalToShow === 'filter') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('filter');
    }
  };

  const toggleCurrencyModal = () => {
    if (filterModalToShow === 'currency') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('currency');
    }
  };

  const toggleMobileDrawer = () => {
    if (filterModalToShow === 'mobileDrawer') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('mobileDrawer');
    }
  };

  return (
    <>
      <Wrapper>
        <FilterWithModal>
          <Pill
            leftIcon="skill"
            style={
              window.innerWidth > 1024
                ? { width: 'auto', border: '1px solid #90C0EA' }
                : { width: '3.5rem', border: '1px solid #90C0EA' }
            }
            textColor={isSkillsFilterActive ? '#FFF' : '#317ec2'}
            text={
              window.innerWidth > 1024
                ? skills?.length > 0
                  ? `${skills.length} Skills Selected`
                  : 'Select Skill'
                : ''
            }
            onClick={toggleSkillsFilterModal}
            iconColor={isSkillsFilterActive ? '#FFF' : 'unset'}
            iconSize="24px"
            isActive={isSkillsFilterActive}
          />
          {filterModalToShow === 'skills' && <SkillsFilterModal />}
        </FilterWithModal>

        <FilterWithModal isActive={isTierFilterActive}>
          <Pill
            leftIcon="decreasing"
            style={
              window.innerWidth > 1024
                ? { width: 'auto', border: '1px solid #90C0EA' }
                : { width: '3.5rem', border: '1px solid #90C0EA' }
            }
            textColor={isTierFilterActive ? '#FFF' : '#317ec2'}
            text={
              window.innerWidth > 1024
                ? tier && tier?.length === 1
                  ? tier[0]
                  : tier && tier?.length > 1
                  ? `${tier?.length} Tiers Selected`
                  : 'Select Tier'
                : ''
            }
            onClick={toggleTierFilterModal}
            iconColor={isTierFilterActive ? '#FFF' : 'unset'}
            iconSize="24px"
            isActive={isTierFilterActive}
          />
          {filterModalToShow === 'tier' && <TierFilterModal />}
        </FilterWithModal>

        <FilterWithModal isActive={isFilterActiveSecond} filter>
          <Pill
            leftIcon="filter"
            style={
              window.innerWidth > 1024
                ? { width: '6.3rem', border: '1px solid #90C0EA' }
                : { width: '3.5rem', border: '1px solid #90C0EA' }
            }
            text={window.innerWidth > 1024 ? 'Filter' : ''}
            textColor={isFilterActiveSecond ? '#FFF' : '#317ec2'}
            iconSize="24px"
            iconColor={isFilterActiveSecond ? '#FFF' : 'unset'}
            isActive={isFilterActiveSecond}
            onClick={toggleFilterModal}
          />

          {filterModalToShow === 'filter' && (
            <>
              <FilterModal currency={props.currency} />
            </>
          )}
        </FilterWithModal>
        {/* currency modal */}
        <FilterWithModal>
          <Pill
            leftIcon={currency === 'inr' ? 'rupee' : 'dollar'}
            rightIcon="arrow"
            style={
              window.innerWidth >= 1024
                ? { width: '4rem', border: '1px solid #90C0EA' }
                : { width: '4rem', border: '1px solid #90C0EA' }
            }
            textColor="#317ec2"
            iconSize="24px"
            onClick={toggleCurrencyModal}
          />

          {filterModalToShow === 'currency' && (
            <>
              <CurrencyModal />
            </>
          )}
        </FilterWithModal>
      </Wrapper>
      <MobileWrapper>
        <FilterWithModal>
          <Pill
            text=""
            leftIcon="skill"
            iconColor={isSkillsFilterActive ? '#FFF' : 'unset'}
            style={{ width: '3.5rem', border: '1px solid #90C0EA' }}
            onClick={toggleSkillsFilterModal}
            isActive={isSkillsFilterActive}
          />
          {filterModalToShow === 'skills' && <SkillsFilterModal />}
        </FilterWithModal>
        <FilterWithModal isActive={isTierFilterActive}>
          <Pill
            leftIcon="decreasing"
            style={{ width: '3.5rem', border: '1px solid #90C0EA' }}
            onClick={toggleTierFilterModal}
            iconColor={isTierFilterActive ? '#FFF' : 'unset'}
            isActive={isTierFilterActive}
          />
          {filterModalToShow === 'tier' && <TierFilterModal />}
        </FilterWithModal>
        <FilterWithModal>
          <Pill
            leftIcon="menu"
            iconColor="#262626"
            style={{ width: '3.5rem', border: '1px solid #90C0EA' }}
            onClick={toggleMobileDrawer}
          />
          {filterModalToShow === 'mobileDrawer' && (
            <MobileDrawerModal currency={props.currency} />
          )}
        </FilterWithModal>
      </MobileWrapper>
    </>
  );
};

export default Filters;

const Wrapper = styled.div`
  display: flex;
  margin: 44px 0;
  user-select: none;

  @media (max-width: 530px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 530px) {
    // width: 100vw;
    margin-right: 1rem;
    display: contents;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: baseline;

    h2 {
      display: block !important;
      font-weight: bold;
      font-size: 6vw;
      line-height: 23px;
      margin-right: 4vw;
      margin-bottom: 3vh;
    }

    div {
      // margin-right: 4vw;
      div {
        p {
          font-size: 4vw;
        }
      }
    }
  }
`;

const FilterWithModal = styled.div<{ isActive?: boolean; filter?: boolean }>`
  position: relative;
  // margin-right: 0.5rem;

  button {
    div {
      span {
        svg {
          path {
            stroke: ${(props) =>
              props.filter && props.isActive ? '#FFF' : '#317EC2'};
            fill: ${(props) =>
              props.filter && props.isActive ? '#19588F' : ''};
          }
          rect {
            fill: ${(props) => (props.isActive ? '#FFF' : '#317EC2')};
          }
        }
      }
      // img {
      //   width: 20px;
      //   height: 20px;
      // }
    }
  }
`;
