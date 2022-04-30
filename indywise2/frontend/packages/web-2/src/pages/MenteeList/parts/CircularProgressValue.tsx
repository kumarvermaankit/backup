import React from 'react';
import CircularProgress, {
  CircularProgressProps
} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressValue(
  props: CircularProgressProps & {
    value: number;
    circleColor: string;
    width: string | undefined;
    height: string | undefined;
    fontSize: string | undefined;
  }
) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        style={{
          color: props.circleColor,
          width: props.width || '40px',
          height: props.height || '40px'
        }}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          style={{ fontSize: props.fontSize || '0.75rem' }}
        >
          {`${props.value / 100}`}
        </Typography>
      </Box>
    </Box>
  );
}

export interface ICircleProps {
  value: number;
  width?: string | undefined;
  height?: string | undefined;
  fontSize?: string | undefined;
}

const getColorCode = (value: number): string => {
  if (value >= 20 && value <= 30) {
    return '#D55555';
  } else if (value > 30 && value <= 40) {
    return '#E38282';
  } else if (value > 40 && value <= 50) {
    return '#ECADAD';
  } else if (value > 50 && value <= 60) {
    return '#F8BD4F';
  } else if (value > 60 && value <= 70) {
    return '#FAD897';
  } else if (value > 70 && value <= 80) {
    return '#AFC15A';
  } else if (value > 80 && value <= 90) {
    return '#8C9E40';
  } else if (value > 90 && value <= 100) {
    return '#4A963A';
  } else {
    return '#E9E9E9';
  }
};

const CircleProgress: React.FC<ICircleProps> = ({
  value,
  width,
  height,
  fontSize
}) => {
  return (
    <CircularProgressValue
      value={value * 100}
      circleColor={getColorCode(value)}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  );
};

export default CircleProgress;
