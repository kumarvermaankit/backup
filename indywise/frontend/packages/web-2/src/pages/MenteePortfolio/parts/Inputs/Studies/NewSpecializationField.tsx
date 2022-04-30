import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewSpecializationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const [specialization, setSpecialization] = React.useState<string>(
    props.data.specialization ? props.data.specialization : ''
  );
  props.newData(specialization);
  return (
    <>
      <Input
        placeholder="Enter Specialisation Name"
        name="specialization"
        value={specialization}
        onChange={(e) => {
          props.newData(specialization);
          setSpecialization(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewSpecializationField;
