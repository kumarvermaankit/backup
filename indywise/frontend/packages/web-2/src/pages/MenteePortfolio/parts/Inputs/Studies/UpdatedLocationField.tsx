import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedLocationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [instituteLocation, setInstituteLocation] = React.useState<string>(
    props.data.instituteLocation ? props.data.instituteLocation : ''
  );
  props.updateStudyData(instituteLocation);
  return (
    <>
      <Input
        name="instituteLocation"
        placeholder="Enter Institute Location"
        value={instituteLocation}
        onChange={(e) => {
          props.updateStudyData(instituteLocation);
          setInstituteLocation(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedLocationField;
