import * as React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { NewMentorsListContext } from '../../../contexts/NewMentorsListContext';

const TierFilterModal: React.FC = () => {
  const {
    updateSelectedTier,
    getSelectedTier,
    clearSelectedTier,
    clearAllFilters
  } = React.useContext(NewMentorsListContext);

  const tier = getSelectedTier();

  const selected = tier.length > 0 ? true : false;

  const handleClearSkills = () => {
    clearSelectedTier();
    if (selected) {
      clearAllFilters('tier');
    }
  };

  return (
    <SkillsListWrapper>
      <SkillsListContent>
        <ClearAllBtnWrapper isActive={selected} onClick={handleClearSkills}>
          <Text style={{ textDecoration: 'underline' }}>Clear All</Text>
        </ClearAllBtnWrapper>

        {['Gold Tier', 'Diamond Tier', 'Platinum Tier', 'Indyfluencer'].map(
          (t: string, index: number) => {
            return (
              <SkillListItem key={index}>
                <CheckBox
                  onChange={(e) => updateSelectedTier(e)}
                  value={t}
                  type="checkbox"
                  name={t}
                  checked={tier.includes(t)}
                  id={t}
                />
                <Label htmlFor={t}>{t}</Label>
              </SkillListItem>
            );
          }
        )}
      </SkillsListContent>
    </SkillsListWrapper>
  );
};

export default TierFilterModal;

const SkillsListWrapper = styled.div`
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

  @media (max-width: 414px) {
    position: absolute;
    top: 2.5rem;
    right: -6rem;
  }

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
`;

const SkillsListContent = styled.div`
  margin: 1rem 1.5rem;
`;

const SkillListItem = styled.div`
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
