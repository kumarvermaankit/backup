import React from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import FilterModalMobile from './FilterModalMobile';
// import SortFilterModalMobile from './SortFilterModalMobile';
import { Icon } from '@indywise/uikit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 800,
      height: 800,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

const MobileModalView: React.FC<{ currency: string; filterToShow: string }> = ({
  currency,
  filterToShow
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{ width: '100%', minHeight: '100%' }} className={classes.paper}>
      {/* {filterToShow === 'filter' ? (
        <> */}
      <div style={{ display: 'flex' }}>
        <StyledHeading>Filters</StyledHeading>
        <Icon
          icon="close"
          style={{ marginLeft: '50%', position: 'relative', top: '3vh' }}
        />
      </div>

      <FilterModalMobile currency={currency} onClick={handleClose} />
      {/* </>
      ) : null} */}
      {/* filterToShow === 'sort' ? (
        <>
          <div style={{ display: 'flex' }}>
            <StyledHeading>Sort</StyledHeading>
            <Icon
              icon="close"
              style={{ marginLeft: '60%', position: 'relative', top: '3vh' }}
            />
          </div>
          <SortFilterModalMobile />
        </>
      ) : null} */}
    </div>
  );

  return (
    <div>
      <Modal disableBackdropClick disableEscapeKeyDown open={open}>
        {body}
      </Modal>
    </div>
  );
};

export default MobileModalView;

const StyledHeading = styled.div`
  position: relative;
  top: 3vh;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;
