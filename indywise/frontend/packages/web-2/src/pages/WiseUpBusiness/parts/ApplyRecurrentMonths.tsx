import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch, { SwitchProps, SwitchClassKey } from '@material-ui/core/Switch';

interface Props {
  checked: boolean;
  handleChange: () => void;
}

const ApplyRecurentMonths: React.FC<Props> = ({ checked, handleChange }) => {
  return (
    <FormControlLabel
      control={<CustomSwitch checked={checked} onClick={handleChange} />}
      label="Apply for recurrent months"
    />
  );
};

export default ApplyRecurentMonths;

interface T extends SwitchProps {
  classes: Styles;
}
interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

const CustomSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 40,
      height: 20,
      padding: 1.5,
      marginLeft: 8
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        // background: '#F8BD4F',
        '& + $track': {
          opacity: 1,
          borderWidth: 2,
          borderStyle: 'solid',
          borderImage: 'linear-gradient(219.67deg, #A16A06 0%, #F8BD4F 59.05%)',
          // '1px solid ',

          background: '#FAEFD9'
        },
        '& + $thumb': {
          // background: '#F8BD4F'
        }
      }
    },
    thumb: {
      width: 18,
      height: 18,
      background: 'linear-gradient(219.67deg, #4B4B4B 0%, #CBCBCB 59.05%)'
    },
    track: {
      borderRadius: '10px',
      border: `1px solid ${theme.palette.grey[500]}`,
      backgroundColor: '#ffffff',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    checked: {},
    focusVisible: {}
  })
)(({ classes, ...props }: T) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});
