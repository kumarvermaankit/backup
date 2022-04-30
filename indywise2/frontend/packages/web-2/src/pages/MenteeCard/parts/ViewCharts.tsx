import React, { useState } from 'react';
import { Button, Text } from '@indywise/uikit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import KPIAggregatesLinear from './KPIAggregatesLinear';
import KPIMetrics from './KPIMetrics';
import AreaChart from './AreaChart';

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 16px 32px rgba(12, 53, 89, 0.24)',
    borderRadius: 20,
    padding: window.screen.width <= 530 ? '0vw' : '1vh 1vw 2vh 1vw',
    margin: window.screen.width <= 530 ? '0vw' : 'auto',
    width: window.screen.width <= 530 ? 'auto' : 'calc(100% - 64px)'
  },
  rootDA: {
    padding: '8px 24px'
  }
});

const ViewCharts: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const [tabIndex, setTab] = useState(0);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTab = (event: React.ChangeEvent<{}>, v: number) => {
    event.preventDefault();
    setTab(v);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Enquire</Button>
      <Dialog
        open={open}
        maxWidth="lg"
        fullWidth
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{
          paperScrollPaper: classes.root
        }}
      >
        <DialogTitle id="form-dialog-title">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Text type="h4" color="#262626">
                View Charts
              </Text>
            </div>
            <div>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <Flex>
            <TabsContainer>
              <Tabs
                onChange={handleChangeTab}
                value={tabIndex}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="component configuration tabs"
              >
                <Tab label="KPI Ratings" />
                <Tab label="KPI Aggregates" />
              </Tabs>
              <>
                {tabIndex === 0 && (
                  <ScoresContainer>
                    <KPIMetrics />
                  </ScoresContainer>
                )}
                {tabIndex === 1 && (
                  <ScoresContainer>
                    <KPIAggregatesLinear />
                  </ScoresContainer>
                )}
              </>
            </TabsContainer>
            <Charts>
              <AreaChart />
            </Charts>
          </Flex>
        </DialogContent>
        <DialogActions
          classes={{
            root: classes.rootDA
          }}
        >
          <Button
            onClick={handleClose}
            style={{
              background: 'white',
              boxShadow: '0px 8px 16px rgba(12, 53, 89, 0.24)'
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewCharts;

const Flex = styled.div`
  display: flex;
  margin: 2vh auto;

  @media (max-width: 530px) {
    display: block;
  }
`;

const TabsContainer = styled.div`
  height: 50vh;
  width: 100%;

  @media (max-width: 530px) {
    height: auto;
  }
`;

const ScoresContainer = styled.div`
  padding: 2vh 1vw;
  overflow-y: auto;
  height: 40vh;

  @media (max-width: 530px) {
    padding: 2vh 5vw;
  }
`;

const Charts = styled.div`
  height: 50vh;
  width: 100%;
`;
