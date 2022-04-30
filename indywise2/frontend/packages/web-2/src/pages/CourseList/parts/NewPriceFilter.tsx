import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { Text } from '@indywise/uikit';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

import RupeeIcon from '../../../assets/Rupee 24px.svg';
// import DollarIcon from '../../../assets/Dollar 24px.svg';

const NewPriceFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Text bold type="body" size="16px">
        Price
      </Text>
      <Section justifyContent={false}>
        <Checkbox
          style={{ padding: 0, marginRight: '5px' }}
          checked={true}
          // onChange={}
          inputProps={{ 'aria-label': 'free courses only checkbox' }}
        />
        <Text type="body" size="20px" style={{ margin: '12px 0' }}>
          Show only FREE courses
        </Text>
      </Section>

      {/* this section will change dynamically according to selected preference */}
      <Section justifyContent={false}>
        <Value>
          <img src={RupeeIcon} alt="rupee"></img>
          <Text type="body" size="20px">
            0
          </Text>
        </Value>
        <span style={{ margin: '0 .5rem' }}>-</span>
        <Value>
          <img src={RupeeIcon} alt="rupee"></img>
          <Text type="body" size="20px">
            2000
          </Text>
        </Value>
      </Section>
      <div className={classes.root}>
        <AirbnbSlider
          ThumbComponent={AirbnbThumbComponent}
          value={[0, 2000]}
          //   onChange={handleSliderChange}
          max={2000}
          min={0}
        />
      </div>
      <Section justifyContent>
        <Value>
          <img src={RupeeIcon} alt="rupee"></img>
          <Text type="body" size="20px">
            0
          </Text>
        </Value>

        <Value>
          <img src={RupeeIcon} alt="rupee"></img>
          <Text type="body" size="20px">
            2000+
          </Text>
        </Value>
      </Section>
    </Wrapper>
  );
};

export default NewPriceFilter;

const Wrapper = styled.div`
  position: relative;
`;

const Section = styled.div<{ justifyContent: boolean }>`
  margin-bottom: 1.2em;
  color: rgb(12, 53, 89);
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? 'space-between' : 'stretch'};

  & > *:first-child {
    margin-right: ${({ justifyContent }) => (justifyContent ? 'auto' : 0)};
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
