import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedSpecializationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [specialization, setSpecialization] = React.useState<string>(
    props.data.specialization ? props.data.specialization : ''
  );
  props.updateStudyData(specialization);
  return (
    <>
      <Input
        name="specialization"
        value={specialization}
        onChange={(e) => {
          props.updateStudyData(specialization);
          setSpecialization(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedSpecializationField;
