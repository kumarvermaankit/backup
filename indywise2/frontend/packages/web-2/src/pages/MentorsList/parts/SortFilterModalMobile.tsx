import * as React from 'react';
import styled from 'styled-components';

import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Text } from '@indywise/uikit';

const SortFilterModalMobile: React.FC<{ onClick?: () => any }> = ({
  onClick
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
    if (isCleared) {
      setIsCleared(false);
      clearAllFilters('sort');
    }
  };

  return (
    <SortFilterWrapper>
      <Flex>
        <div style={{ margin: '5% 0', fontSize: 'large' }}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="sort"
              name="sorting"
              value={sortType}
              onChange={handleSubmit}
            >
              <FormControlLabel
                label={
                  <span
                    style={{
                      marginLeft: '2rem',
                      fontFamily: 'Roboto',
                      fontSize: '20px',
                      fontWeight: 'normal',
                      lineHeight: '28px'
                    }}
                  >
                    Price - Low to High
                  </span>
                }
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
                label={
                  <span
                    style={{
                      marginLeft: '2rem',
                      fontFamily: 'Roboto',
                      fontSize: '20px',
                      fontWeight: 'normal',
                      lineHeight: '28px'
                    }}
                  >
                    Price - High to Low
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Flex>
      <ClearAllBtnWrapper
        isActive={isCleared}
        onClick={handleClearSort}
        style={{}}
      >
        <Text>Clear All</Text>
      </ClearAllBtnWrapper>
    </SortFilterWrapper>
  );
};

export default SortFilterModalMobile;

const SortFilterWrapper = styled.div`
  position: absolute;
  width: 230px;
  padding: 10px 20px;
  height: 125px;
  background: #ffffff;

  z-index: 1;
  position: absolute;
  top: 2.5rem;
  right: 0;

  display: initial;

  position: fixed;
  width: 100vw !important;
  min-height: 100% !important;
  left: 3rem;
  top: 15%;

  /* @media (max-width: 414px) {
    position: absolute;
    top: 2.5rem;
    right: -3rem;
  } */
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ClearAllBtnWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 90vh;
  right: 15vw;
  background: #ffffff;
  width: 106px;
  height: 44px;

  border: 1px solid #a3a3a3;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 5px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  display: flex;
  justify-content: center;
  align-items: center;

  /* IndyGrey/IG4 */

  color: #a3a3a3;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;
