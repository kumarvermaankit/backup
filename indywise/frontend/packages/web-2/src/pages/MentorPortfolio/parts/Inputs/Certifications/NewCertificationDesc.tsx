import React from 'react';
import { InputContainer } from '../../Carousels/UI-components';

const NewCertificationDesc = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [description, setdescription] = React.useState<string>(
    props.data.description ? props.data.description : ''
  );
  props.newData(description);

  return (
    <>
      <InputContainer
        placeholder="Enter Description"
        name="description"
        value={description}
        onChange={(e) => {
          props.newData(description);
          setdescription(e.target.value);
          setInputHeight(e, '10px');
        }}
        maxLength={200}
      />
      <p
        style={{
          color: '#4B4B4B',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '12px'
        }}
      >
        {200 - description.length} characters left
      </p>
    </>
  );
};

export default NewCertificationDesc;
