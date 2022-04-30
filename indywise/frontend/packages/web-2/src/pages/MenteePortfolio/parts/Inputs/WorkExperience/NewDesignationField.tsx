import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewDesignationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [designation, setDesignation] = React.useState<string>(
    props.data.designation ? props.data.designation : ''
  );
  props.newData(designation);
  return (
    <>
      <Input
        placeholder="Enter Designation"
        name="designation"
        value={designation}
        onChange={(e) => {
          props.newData(designation);
          setDesignation(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewDesignationField;
