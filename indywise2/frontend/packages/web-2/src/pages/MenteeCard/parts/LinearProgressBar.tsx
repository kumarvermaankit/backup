import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export interface ILinearProps {
  value: number;
}

const getColorCode = (value: number): string => {
  if (value >= 2 && value <= 3) {
    return '#D55555';
  } else if (value > 3 && value <= 4) {
    return '#E38282';
  } else if (value > 4 && value <= 5) {
    return '#ECADAD';
  } else if (value > 5 && value <= 6) {
    return '#F8BD4F';
  } else if (value > 6 && value <= 7) {
    return '#FAD897';
  } else if (value > 7 && value <= 8) {
    return '#AFC15A';
  } else if (value > 8 && value <= 9) {
    return '#8C9E40';
  } else if (value > 9 && value <= 10) {
    return '#4A963A';
  } else {
    return '#E9E9E9';
  }
};

const LinearProgressBar: React.FC<ILinearProps> = ({ value }) => {
  const useStyles = makeStyles({
    root: {
      height: 10,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor: '#E9E9E9'
    },
    bar: {
      borderRadius: 5,
      backgroundColor: getColorCode(value * 2)
    }
  });

  const classes = useStyles();

  return (
    <LinearProgress
      variant="determinate"
      value={value * 2 * 10}
      classes={{
        root: classes.root,
        colorPrimary: classes.colorPrimary,
        bar: classes.bar
      }}
    />
  );
};

export default LinearProgressBar;
