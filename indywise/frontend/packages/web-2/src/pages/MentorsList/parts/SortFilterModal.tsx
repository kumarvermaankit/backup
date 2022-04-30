import * as React from 'react';
import styled from 'styled-components';

import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Text } from '@indywise/uikit';

const SortFilterModal: React.FC<{ updateFilterPill?: () => void }> = ({
  updateFilterPill
}) => {
  const [sortType, setSortType] = React.useState<any>(null);
  const {
    sortMentors,
    getMentors,
    clearAllFilters,
    getSortModalConfig,
    updateSortModalConfig
  } = React.useContext(NewMentorsListContext);
  const [isCleared, setIsCleared] = React.useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsCleared(true);
    setSortType(e.target.value);
    sortMentors(e.target.value);
    getMentors();
  };

  const handleClearSort = () => {
    updateSortModalConfig(null);
    setSortType(null);
    clearAllFilters('sort');
    if (isCleared) {
      setIsCleared(false);
    }
  };

  return (
    <SortFilterWrapper>
      <Flex>
        <div style={{ margin: '5% 0' }}>
          <ClearAllBtnWrapper isActive={isCleared} onClick={handleClearSort}>
            <Text style={{ textDecoration: 'underline' }}>Clear All</Text>
          </ClearAllBtnWrapper>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="sort"
              name="sorting"
              value={sortType}
              onChange={handleSubmit}
            >
              <FormControlLabel
                value="asc"
                control={
                  <Radio
                    color="primary"
                    onClick={() => updateSortModalConfig('asc')}
                    checked={
                      getSortModalConfig() !== null &&
                      getSortModalConfig() === 'asc'
                    }
                  />
                }
                label="Price - Low to High"
              />
              <FormControlLabel
                value="desc"
                control={
                  <Radio
                    color="primary"
                    onClick={() => updateSortModalConfig('desc')}
                    checked={
                      getSortModalConfig() !== null &&
                      getSortModalConfig() === 'desc'
                    }
                  />
                }
                label="Price - High to Low"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Flex>
    </SortFilterWrapper>
  );
};

export default SortFilterModal;

const SortFilterWrapper = styled.div`
  position: absolute;
  width: 230px;
  padding: 10px 20px;
  height: 125px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 20px;
  z-index: 1;
  position: absolute;
  top: 2.5rem;
  right: 0;

  @media (max-width: 414px) {
    position: absolute;
    top: 2.5rem;
    right: -3rem;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearAllBtnWrapper = styled.div<{ isActive: boolean }>`
  width: fit-content;
  height: fit-content;
  margin-bottom: 5px;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;
