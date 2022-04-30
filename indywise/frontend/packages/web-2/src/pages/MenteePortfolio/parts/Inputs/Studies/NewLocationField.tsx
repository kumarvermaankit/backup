import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewLocationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const [instituteLocation, setInstituteLocation] = React.useState<string>(
    props.data.instituteLocation ? props.data.instituteLocation : ''
  );
  props.newData(instituteLocation);
  return (
    <>
      <Input
        placeholder="Enter Institute Location"
        name="instituteLocation"
        value={instituteLocation}
        onChange={(e) => {
          props.newData(instituteLocation);
          setInstituteLocation(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewLocationField;
