import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedOrganization = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const { name } = props;
  const [organizationName, setorganizationName] = React.useState<string>(
    props.data.organizationName ? props.data.organizationName : ''
  );
  props.updateData(organizationName);
  return (
    <>
      <Input
        placeholder="Enter Company Name"
        name={name}
        value={organizationName}
        onChange={(e) => {
          props.updateData(organizationName);
          setorganizationName(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedOrganization;
