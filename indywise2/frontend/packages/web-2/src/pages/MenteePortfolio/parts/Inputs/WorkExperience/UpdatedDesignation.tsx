import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedDesignation = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const { name } = props;
  const [designation, setDesignation] = React.useState<string>(
    props.data.designation ? props.data.designation : ''
  );
  props.updateData(designation);
  return (
    <>
      <Input
        name={name}
        value={designation}
        onChange={(e) => {
          props.updateData(designation);
          setDesignation(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedDesignation;
