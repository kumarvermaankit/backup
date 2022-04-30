import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

interface LabelProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

interface Props {
  value: any;
  onSliderChange: (e: any, newValue: any) => void;
}

const NumberOfLicenses: React.FC<Props> = (props) => {
  return (
    <div>
      <AirbnbSlider
        value={props.value}
        onChange={props.onSliderChange}
        min={1}
        max={20}
        ThumbComponent={ThumbComponent}
        ValueLabelComponent={ValueLabelComponent}
      />
    </div>
  );
};

export default NumberOfLicenses;

function ValueLabelComponent(props: LabelProps) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      style={{ color: '#d8000092' }}
      title={value}
    >
      {children}
    </Tooltip>
  );
}

const AirbnbSlider = withStyles({
  root: {
    color: '#CBCBCB',
    height: 3,
    width: '80%',
    padding: '13px 10px',
    marginLeft: '12px'
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#3C54AF',
    borderRadius: '4px',
    // border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px'
    },
    '& .bar': {
      // display: inline-block !important;
      height: '60%',
      width: '60%',
      borderRadius: '50%',
      backgroundColor: '#fff',
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  track: {
    height: 3
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3
  }
})(Slider);

function ThumbComponent(props: any) {
  return (
    <span {...props}>
      <span className="bar" />
    </span>
  );
}
