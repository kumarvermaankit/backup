import React from 'react';
import styled from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
// import clsx from 'clsx';

const SelectCreditsOption = (props: CheckboxProps) => {
  // const classes = useStyles();
  return (
    <SelectCreditstyles>
      <Checkbox
        // className={classes.root}
        disableRipple
        color="primary"
        // checkedIcon={
        //   <span className={clsx(classes.icon, classes.checkedIcon)} />
        // }
        // icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        {...props}
      />
      <p>Use 50$ worth of Reward Credits</p>
    </SelectCreditstyles>
  );
};

export default SelectCreditsOption;

const SelectCreditstyles = styled.div`
  display: flex;
  & > p {
    color: #4b4b4b;
    font-size: 16px;
    line-height: 24px;
    margin-left: 12px;
  }
`;

// const useStyles = makeStyles({
//   root: {
//     '&:hover': {
//       backgroundColor: 'transparent'
//     },
//     padding: 0
//   },
//   icon: {
//     borderRadius: 1,
//     border: '2px solid #262626',
//     width: 18,
//     height: 18,
//     boxShadow:
//       'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//     backgroundColor: '#f5f8fa',
//     backgroundImage:
//       'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//     '$root.Mui-focusVisible &': {
//       outline: '2px auto rgba(19,124,189,.6)',
//       outlineOffset: 2
//     }
//   },
//   checkedIcon: {
//     backgroundColor: '#fff',
//     backgroundImage:
//       'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//     '&:before': {
//       display: 'block',
//       width: 18,
//       height: 18,
//       backgroundImage:
//         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//         " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//         "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//       content: '""'
//     },
//     'input:hover ~ &': {
//       backgroundColor: '#fff'
//     }
//   }
// });
