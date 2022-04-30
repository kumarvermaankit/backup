import React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import RatingFilter from './RatingFilter';
import DurationFilter from './DurationFilter';
import NewPriceFilter from './NewPriceFilter';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';

const FilterModal: React.FC<{ mobileViewClose: () => void }> = ({
  mobileViewClose
}) => {
  const openMobileView = useMediaQuery('(max-width:570px)');

  if (openMobileView) {
    return (
      <Dialog
        style={{
          position: 'relative'
        }}
        fullScreen={true}
        open
      >
        <MobileWrapper>
          <Icon
            style={{
              position: 'absolute',
              right: '15px',
              cursor: 'pointer'
            }}
            icon="close"
            size="20px"
            onClick={mobileViewClose}
          />
          <RatingFilter />
          <hr style={{ margin: '6% 0', opacity: '0.4' }} />
          <DurationFilter />
          <hr style={{ margin: '6% 0', opacity: '0.4' }} />
          <NewPriceFilter />
          <Flex>
            <Button isActive>Clear All</Button>
            <Button color="#ffb326" isActive={true}>
              Apply Filters
            </Button>
          </Flex>
        </MobileWrapper>
      </Dialog>
    );
  }

  return (
    <ModalWrapper>
      <Icon
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          cursor: 'pointer'
        }}
        icon="close"
        size="20px"
      />
      <RatingFilter />
      <hr style={{ margin: '6% 0', opacity: '0.4' }} />
      <DurationFilter />
      <hr style={{ margin: '6% 0', opacity: '0.4' }} />
      <NewPriceFilter />
      <Flex>
        <Button isActive>Clear All</Button>
        <Button color="#ffb326" isActive={true}>
          Apply Filters
        </Button>
      </Flex>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 3;
  width: 400px;
  top: 2.5rem;
  right: 0;
  padding: 2em;
  background-color: #ffffff;
  box-shadow: rgb(164 164 164 / 25%) 0px 6px 18px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileWrapper = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    margin-right: 3rem;
  }
`;

const Button = styled.button<{ isActive: boolean; color?: string }>`
  background-color: ${({ color }) => (color ? color : '#ffffff')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  border: none;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.16);
  border-radius: 8px;
  width: 152px;
  height: 44px;
  margin: 2rem 0;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};

  &:hover {
    cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;

export default FilterModal;
