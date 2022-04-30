import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ProgressColor = (color: number) => {
  switch (true) {
    case color <= 20:
      return '#d4a256';
    case color >= 20 && color <= 50:
      return '#e0c54b';
    case color >= 50 && color <= 80:
      return '#C6D475';

    case color >= 80 && color <= 95:
      return '#b1e072';

    case color >= 95:
      return '#6fa32c';
  }
};

interface Props {
  value: number;
}

const Progress: React.FC<Props> = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        style={{ color: ProgressColor(props.value) }}
        value={props.value}
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
          component="h2"
          style={{ color: '#000', fontWeight: 400, fontSize: '12px' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default Progress;
