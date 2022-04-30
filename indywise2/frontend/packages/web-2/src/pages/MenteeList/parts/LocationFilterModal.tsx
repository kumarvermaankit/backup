import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { MenteesListContext } from '../../../contexts/MenteesListContext';

const LocationFilterModal: React.FC = () => {
  const {
    updateLocationCityFilter,
    clearLocationCity,
    getLocationCity,
    getLocationCityList
  } = React.useContext(MenteesListContext);
  const locations = getLocationCity();
  const locationsList = getLocationCityList();

  // `true` if atleast one item from the `LocationList` is selected for filtering.
  const selected = locations.length > 0 ? true : false;

  const handleClearLocation = () => {
    if (selected) {
      clearLocationCity();
    }
  };

  return (
    <LocationListWrapper>
      <LocationListContent>
        <ClearAllBtnWrapper isActive={selected} onClick={handleClearLocation}>
          <Text style={{ textDecoration: 'underline' }}>Clear All</Text>
        </ClearAllBtnWrapper>
        {locationsList.map((location: string, index: number) => {
          return (
            <LocationListItem key={index}>
              <CheckBox
                onChange={(e) => updateLocationCityFilter(e)}
                value={location}
                type="checkbox"
                name={location}
                checked={locations.includes(location)}
                id={location}
              />
              <Label htmlFor={location}>{location}</Label>
            </LocationListItem>
          );
        })}
      </LocationListContent>
    </LocationListWrapper>
  );
};

export default LocationFilterModal;

const LocationListWrapper = styled.div`
  position: absolute;
  width: 230px;
  height: 199px;
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(164, 164, 164, 0.25);
  border-radius: 10px;
  z-index: 1;
  position: absolute;
  top: 2.5rem;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a4a4a4;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 530px) {
    right: unset;
  }
`;

const LocationListContent = styled.div`
  margin: 1rem 1.5rem;
`;

const LocationListItem = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const CheckBox = styled.input`
  opacity: 0.5;
  border: 1px solid #0c3559;
  box-sizing: border-box;
  border-radius: 2px;

  &:checked {
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  margin-left: 0.75rem;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 19px;
  color: #0c3559;

  &:hover {
    cursor: pointer;
  }
`;

const ClearAllBtnWrapper = styled.div<{ isActive: boolean }>`
  width: fit-content;
  height: fit-content;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;
