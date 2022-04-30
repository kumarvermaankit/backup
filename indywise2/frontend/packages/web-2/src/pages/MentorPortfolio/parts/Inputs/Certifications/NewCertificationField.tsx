import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewCertificationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [name, setname] = React.useState<string>(
    props.data.name ? props.data.name : ''
  );
  props.newData(name);
  return (
    <>
      <Input
        placeholder="Enter Certification Name"
        name="name"
        value={name}
        onChange={(e) => {
          props.newData(name);
          setname(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewCertificationField;
