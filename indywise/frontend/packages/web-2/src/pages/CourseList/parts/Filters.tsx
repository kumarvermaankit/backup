import * as React from 'react';
import { Pill, Icon } from '@indywise/uikit';
import styled from 'styled-components';
import SkillsFilterModal from './SkillsFilterModal';
/* import FilterModal from './FilterModal';
import CurrencySwitchModal from './CurrencyModal'; */
import Search from './Search';
import useMediaQuery from '@material-ui/core/useMediaQuery'; // import SkillsIcon from '../../../assets/Skill 24px.svg'; // import RupeeIcon from '../../../assets/Rupee 24px.svg'; // import ArrowIcon from '../../../assets/Arrow Down 24px.svg';
/* import MenuIcon from '../../../assets/Hamburger Menu 24px.svg';
 */

//-------------ICONS----------------------------
/* import FilterIcon from '../../../assets/Filter 24px.svg';
 */ import { CoursesListContext } from '../../../contexts/CoursesListContext';

const Filters: React.FC = () => {
  //const showMenuIcon = useMediaQuery('(max-width:570px)');

  const hideSearchForm = useMediaQuery('(max-width:760px)');

  const [filterModalToShow, setFilterModalToShow] = React.useState('');

  const { showSearchForm, toggleSearchForm } = React.useContext(
    CoursesListContext
  );

  /* const toggleCurrencySwitchModal = () => {
    if (filterModalToShow === 'currency') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('currency');
    }
  }; */

  //---------------------------------------------

  const toggleSkillsFilterModal = () => {
    if (filterModalToShow === 'skills') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('skills');
    }
  };

  /* const toggleFilterModal = () => {
    if (filterModalToShow === 'filter') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('filter');
    }
  };

  const toggleMenuModel = () => {
    if (filterModalToShow === 'mobilemenu') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('mobilemenu');
    }
  }; */

  console.log(hideSearchForm);

  return (
    <>
      <Wrapper>
        {!showSearchForm && (
          <SearchBtnWrapper
            style={{ cursor: 'pointer' }}
            onClick={toggleSearchForm}
          >
            <Icon icon="search" size="16px" style={{ cursor: 'pointer' }} />
          </SearchBtnWrapper>
        )}
        {showSearchForm && !hideSearchForm && (
          <Search toggleForm={toggleSearchForm} />
        )}

        <FilterWithModal>
          <Pill
            leftIcon="skill"
            text="Select Skill"
            onClick={toggleSkillsFilterModal}
          >
            <Icon icon="rupee" />
          </Pill>
          {filterModalToShow === 'skills' && <SkillsFilterModal />}
        </FilterWithModal>

        {/* <FilterWithModal>
          <Pill
            leftIcon="filter"
            text="Filter"
            onClick={toggleFilterModal}
            style={showMenuIcon ? { display: 'none' } : { display: 'initial' }}
          />
          {filterModalToShow === 'filter' && (
            <FilterModal mobileViewClose={toggleFilterModal} />
          )}
        </FilterWithModal> */}

        {/* {!showMenuIcon && (
          <FilterWithModal>
            <Pill
              leftIcon="rupee"
              rightIcon="arrow"
              text=""
              onClick={toggleCurrencySwitchModal}
            />
            {filterModalToShow === 'currency' && <CurrencySwitchModal />}
          </FilterWithModal>
        )} */}

        {/* {showMenuIcon && (
          <FilterWithModal>
            <Pill leftIcon={MenuIcon} text="" onClick={toggleMenuModel} />
            {filterModalToShow === 'mobilemenu' && (
              <Menu>
                <MenuBtn onClick={toggleFilterModal}>
                  <img src={FilterIcon} alt="filterIcon"></img>
                  <span>Filter</span>
                </MenuBtn>

                <CurrencySwitchModal />
              </Menu>
            )}
          </FilterWithModal>
        )} */}
      </Wrapper>
    </>
  );
};

export default Filters;

// ----------------------------

const Wrapper = styled.div`
  min-height: 60px;
  padding: 8px 0;
  margin-left: auto;
  justify-self: flex-end;
  user-select: none;

  display: flex;

  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const SearchBtnWrapper = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 475px) {
    width: 25px;
    height: 25px;

    & > span {
      width: 14px;
      height: 14px;

      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

/* const Menu = styled.div`
  position: absolute;
  top: 3rem;
  right: 0.5rem;

  background-color: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 12px;
  font-family: Roboto;
  font-style: normal;
  width: 212px;
  display: flex;
  flex-direction: column;
`;

const MenuBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.8em 0.8em;
  //font-size: 20px;
  font-size: 16px;
  background-color: #fff;
  display: flex;
  align-items: center;

  & > img {
    margin-right: 2em;
  }
`; */

const FilterWithModal = styled.div`
  position: relative;
  /* margin-right: 1rem; */
`;
