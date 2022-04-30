import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewOrganizationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const [issuingOrganisation, setissuingOrganisation] = React.useState<string>(
    props.data.issuingOrganisation ? props.data.issuingOrganisation : ''
  );
  props.newData(issuingOrganisation);

  return (
    <>
      <Input
        placeholder="Enter Issuing Organisation Name"
        name="issuingOrganisation"
        value={issuingOrganisation}
        onChange={(e) => {
          props.newData(issuingOrganisation);
          setissuingOrganisation(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewOrganizationField;
