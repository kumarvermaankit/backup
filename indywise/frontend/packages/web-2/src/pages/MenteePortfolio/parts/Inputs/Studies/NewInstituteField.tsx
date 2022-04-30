import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewInstituteField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const [instituteName, setInstituteName] = React.useState<string>(
    props.data.instituteName ? props.data.instituteName : ''
  );
  props.newData(instituteName);
  return (
    <>
      <Input
        placeholder="Enter Institute Name"
        name="instituteName"
        value={instituteName}
        onChange={(e) => {
          props.newData(instituteName);
          setInstituteName(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewInstituteField;
