import React from 'react';

import { Text } from '@indywise/uikit';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

const DurationFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      {/* <Icon
        style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }}
        icon="close"
        size="16px"
      /> */}
      <Text bold type="body" size="16px">
        Duration
      </Text>
      <Text style={{ margin: '12px 0' }} type="body" size="20px">
        More than 3h
      </Text>
      <div className={classes.root}>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          value={[0, 10000]}
          //   onChange={handleSliderChange}
          max={2000}
          min={0}
        />
      </div>
      <Section>
        <Value>
          <Text type="body" size="20px">
            0
          </Text>
        </Value>

        <Value>
          <Text type="body" size="20px">
            10h+
          </Text>
        </Value>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Section = styled.div`
  margin-bottom: 1.2em;
  color: rgb(12, 53, 89);
  display: flex;

  & > *:first-child {
    margin-right: auto;
  }
`;

const Value = styled.div`
  display: flex;

  & > img {
    stroke: rgb(12, 53, 89);
    color: rgb(12, 53, 89);
    width: 20px;
    height: 20px;
  }
`;

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 177 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    }
  })
);

const AirbnbSlider = withStyles({
  root: {
    color: '#0C3559',
    height: 4,
    padding: '13px 0',
    margin: '0 0.5rem'
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#0C3559',
    border: '1px solid currentColor',
    marginTop: -9,
    boxShadow: '0px 6px 18px rgba(12, 53, 89, 0.35)',
    '&:focus, &:hover, &$active': {
      boxShadow: '0px 6px 18px rgba(12, 53, 89, 0.35)'
    },
    '& .bar': {
      backgroundColor: 'currentColor'
    }
  },
  active: {},
  track: {
    height: 4
  },
  rail: {
    color: '#7DA6CA',
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent(props: any) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default DurationFilter;
