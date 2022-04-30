import React from 'react';
import { Input } from '../../Carousels/UI-components';

const UpdatedCertificationField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [name, setname] = React.useState<string>(
    props.data.name ? props.data.name : ''
  );
  props.updateCertData(name);
  return (
    <>
      <Input
        name="name"
        value={name}
        onChange={(e) => {
          props.updateCertData(name);
          setname(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default UpdatedCertificationField;
