import React, { useState } from 'react';
import { Button, Text } from '@indywise/uikit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Step from './Step';

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

const metrics = [
  {
    title: 'Quality and Testing : Writing',
    subtitle:
      'Writes code with testability, readability, edge cases, and errors in mind',
    step: 4
  },
  {
    title: 'Quality and Testing : Testing',
    subtitle:
      'Writes code with testability, readability, edge cases, and errors in mind',
    step: 3
  },
  {
    title: 'Debugging and Observability : Debugging',
    subtitle:
      'Writes code with testability, readability, edge cases, and errors in mind',
    step: 5
  },
  {
    title: 'Software design & architecture: Understanding Code',
    subtitle:
      'Writes code with testability, readability, edge cases, and errors in mind',
    step: 2
  },
  {
    title: 'Security',
    subtitle:
      'Writes code with testability, readability, edge cases, and errors in mind',
    step: 1
  }
];

const EditKPIMetrics: React.FC = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Edit KPI Metrics</Button>
      <Dialog
        open={open}
        maxWidth="xl"
        fullWidth
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        classes={{
          paperScrollPaper: classes.root
        }}
      >
        <DialogTitle id="form-dialog-title">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Text type="h4" color="#262626">
                Edit KPI Metrics
              </Text>
            </div>
            <div>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <TabsContainer>
            {metrics.map((m) => (
              <>
                <Text key={m.step - 1} type="title">
                  {m.title}
                </Text>
                <Text key={m.step - 1} type="subtitle">
                  {m.subtitle}
                </Text>
                <Step key={m.step - 1} value={m.step - 1} />
                <Line key={m.step - 1} />
              </>
            ))}
          </TabsContainer>
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
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            style={{ boxShadow: '0px 8px 16px rgba(242, 169, 34, 0.32)' }}
          >
            Apply Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditKPIMetrics;

const Line = styled.div`
  border: 1px solid #cbcbcb;
  margin-bottom: 3vh;
`;

const TabsContainer = styled.div`
  height: 50vh;
  width: 100%;
  overflow-y: auto;

  h1 {
    color: #111111;
    font-family: Mulish;
    font-weight: 600;
  }
  h2 {
    color: #4b4b4b;
  }

  @media (max-width: 530px) {
    height: auto;
  }
`;
