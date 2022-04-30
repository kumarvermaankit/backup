import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewOrganizationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [organizationName, setorganizationName] = React.useState<string>(
    props.data.organizationName ? props.data.organizationName : ''
  );
  props.newData(organizationName);

  return (
    <>
      <Input
        placeholder="Enter Organisation Name"
        name="designation"
        value={organizationName}
        onChange={(e) => {
          props.newData(organizationName);
          setorganizationName(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewOrganizationField;
