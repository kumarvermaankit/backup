import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { ISubscription } from '../../../interfaces/ISubscription';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '.MuiAccordionDetails-root': {
        display: 'block !important'
      },
      width: '100%',
      height: '40vh',
      overflowY: 'auto',
      '@media (max-width:768px)': {
        height: 'auto',
        overflowY: 'unset'
      }
    }
  })
);

const AccordionComponent: React.FC<{ subscription: ISubscription }> = (
  props
) => {
  const classes = useStyles();
  const subscription = props.subscription;
  const { fullDescription, whatIsInItForYou, valueAddition } = subscription;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Heading>
            <Text type="body" size="1.2vw">
              Full Description
            </Text>
          </Heading>
        </AccordionSummary>
        <AccordionDetails>
          <Block>
            {fullDescription?.length && fullDescription.length > 0
              ? fullDescription.map((fd) => (
                  <Points>
                    <Text type="body" size="1.1vw">
                      {fd}
                    </Text>
                  </Points>
                ))
              : null}
          </Block>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Heading>
            <Text type="body" size="1.2vw">
              What is in it for you?
            </Text>
          </Heading>
        </AccordionSummary>
        <AccordionDetails>
          <Block>
            {whatIsInItForYou?.length && whatIsInItForYou.length > 0
              ? whatIsInItForYou.map((fd) => (
                  <Points>
                    <li>{fd}</li>
                  </Points>
                ))
              : null}
          </Block>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Heading>
            <Text type="body" size="1.2vw">
              Value Addition
            </Text>
          </Heading>
        </AccordionSummary>
        <AccordionDetails>
          <Block>
            {valueAddition?.length && valueAddition.length > 0
              ? valueAddition.map((fd) => (
                  <Points>
                    <li>{fd}</li>
                  </Points>
                ))
              : null}
          </Block>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;

const Heading = styled.div`
  p {
    font-family: Roboto;
    font-weight: normal;
    font-size: 1.2vw;
    line-height: 2vh;
    color: #0c3559;
  }

  @media (max-width: 768px) {
    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 530px) {
    p {
      font-size: 4vw;
      line-height: 6vw;
    }
  }
`;

const Points = styled.div`
  p,
  li {
    font-family: Roboto;
    font-weight: normal;
    font-size: 1.1vw;
    line-height: 3.5vh;
    color: #0c3559;
  }

  li {
    ::marker: {
      color: orange;
      background: orange;
      fill: orange;
    }
  }

  @media (max-width: 768px) {
    p,
    li {
      font-size: 2vw;
    }
  }

  @media (max-width: 530px) {
    p,
    li {
      font-size: 4vw;
      line-height: 6vw;
    }
  }
`;

const Block = styled.div``;
