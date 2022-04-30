import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedInstituteField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [instituteName, setInstituteName] = React.useState<string>(
    props.data.instituteName ? props.data.instituteName : ''
  );
  props.updateStudyData(instituteName);
  return (
    <>
      <Input
        name="instituteName"
        placeholder="Enter Institute Name"
        value={instituteName}
        onChange={(e) => {
          props.updateStudyData(instituteName);
          setInstituteName(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedInstituteField;
