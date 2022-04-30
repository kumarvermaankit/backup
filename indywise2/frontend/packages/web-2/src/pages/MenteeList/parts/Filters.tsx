import * as React from 'react';
import { Text, Pill } from '@indywise/uikit';
import styled from 'styled-components';
import WantsInternshipInFilterModal from './WantsInternshipInFilterModal';
import LocationFilterModal from './LocationFilterModal';
import ExperienceFilterModal from './ExperienceFilterModal';
import {
  MenteesListContext,
  defaultExpRange
} from '../../../contexts/MenteesListContext';

const Filters: React.FC = () => {
  const [filterModalToShow, setFilterModalToShow] = React.useState('');
  const [isExpFilterActive, setIsExpFilterActive] = React.useState(false);
  const [isCertifiedFilterActive, setIsCertifiedFilterActive] = React.useState(
    false
  );
  const [activeExpFilterRange, setActiveExpFilterRange] = React.useState<
    number[]
  >([]);
  const {
    getWantsInternshipIn,
    getLocationCity,
    getExp,
    filterCertifiedMentees
  } = React.useContext(MenteesListContext);

  const wantsInternshipIn = getWantsInternshipIn();
  const locations = getLocationCity();
  const exp = getExp();
  const minExp = exp[0];
  const maxExp = exp[1];

  const isWantsInternshipInFilterActive = wantsInternshipIn.length
    ? true
    : false;
  const isLocationsFilerActive = locations.length ? true : false;
  const isExpFilterValChanged = () => {
    return exp[0] === defaultExpRange[0] && exp[1] === defaultExpRange[1]
      ? false
      : true;
  };

  const toggleCertifiedFilter = () => {
    filterCertifiedMentees(!isCertifiedFilterActive);
    setIsCertifiedFilterActive(!isCertifiedFilterActive);
  };

  const toggleSkillsFilterModal = () => {
    if (filterModalToShow === 'wantsInternshipIn') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('wantsInternshipIn');
    }
  };

  const toggleLocationFilterModal = () => {
    if (filterModalToShow === 'location') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('location');
    }
  };

  const toggleExpFilterModal = () => {
    if (filterModalToShow === 'exp') {
      setFilterModalToShow('');
    } else {
      setFilterModalToShow('exp');
    }
  };

  // We want to update the exp filter when the user clicks on `save`
  const updateExpFilterPill = () => {
    setIsExpFilterActive(isExpFilterValChanged());
    setActiveExpFilterRange([minExp, maxExp]);
  };

  return (
    <>
      <Wrapper>
        <FilterWithModal>
          <Pill
            text="Wants Internship in"
            onClick={toggleSkillsFilterModal}
            isActive={isWantsInternshipInFilterActive}
          />
          {filterModalToShow === 'wantsInternshipIn' && (
            <WantsInternshipInFilterModal />
          )}
        </FilterWithModal>
        <FilterWithModal>
          <Pill
            text="Location"
            onClick={toggleLocationFilterModal}
            isActive={isLocationsFilerActive}
          />
          {filterModalToShow === 'location' && <LocationFilterModal />}
        </FilterWithModal>
        <FilterWithModal>
          <Pill
            text="Years of Experience"
            onClick={toggleExpFilterModal}
            isActive={isExpFilterActive}
            activeText={`${activeExpFilterRange[0]}y - ${
              activeExpFilterRange[1] === defaultExpRange[1]
                ? activeExpFilterRange[1] + 'y+'
                : activeExpFilterRange[1] + 'y'
            }`}
          />
          {filterModalToShow === 'exp' && (
            <ExperienceFilterModal updateFilterPill={updateExpFilterPill} />
          )}
        </FilterWithModal>
        <Certified certified={isCertifiedFilterActive}>
          <Pill
            text="Show only Certified Interns"
            onClick={toggleCertifiedFilter}
            isActive={isCertifiedFilterActive}
          />
        </Certified>
      </Wrapper>

      <MobileWrapper>
        <Text type="h2" size="6vw" bold>
          Filters
        </Text>
        <FilterWithModal>
          <Pill
            text="Wants Internship in"
            onClick={toggleSkillsFilterModal}
            isActive={isWantsInternshipInFilterActive}
          />
          {filterModalToShow === 'wantsInternshipIn' && (
            <WantsInternshipInFilterModal />
          )}
        </FilterWithModal>
        <FilterWithModal>
          <Pill
            text="Location"
            onClick={toggleLocationFilterModal}
            isActive={isLocationsFilerActive}
          />
          {filterModalToShow === 'location' && <LocationFilterModal />}
        </FilterWithModal>
        <FilterWithModal>
          <Pill
            text="Years of Experience"
            onClick={toggleExpFilterModal}
            isActive={isExpFilterActive}
            activeText={`${activeExpFilterRange[0]}y - ${
              activeExpFilterRange[1] === defaultExpRange[1]
                ? activeExpFilterRange[1] + 'y+'
                : activeExpFilterRange[1] + 'y'
            }`}
          />
          {filterModalToShow === 'exp' && (
            <ExperienceFilterModal updateFilterPill={updateExpFilterPill} />
          )}
        </FilterWithModal>
      </MobileWrapper>
    </>
  );
};

export default Filters;

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 800px;
  user-select: none;

  @media (max-width: 530px) {
    display: none;
  }
`;

const Certified = styled.div<{ certified: boolean }>`
  button {
    background: ${({ certified }) => (certified ? '#FAEFD9' : 'unset')};
    border: ${({ certified }) => (certified ? '1px solid #A16A06' : '')};
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 530px) {
    padding: 4vw;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
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
      margin-right: 4vw;
      div {
        p {
          font-size: 4vw;
        }
      }
    }
  }
`;

const FilterWithModal = styled.div`
  position: relative;
  margin-right: 1rem;
`;
