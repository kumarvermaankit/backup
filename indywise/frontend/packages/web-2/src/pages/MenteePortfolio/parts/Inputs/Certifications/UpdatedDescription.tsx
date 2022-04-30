import React from 'react';
import { InputContainer } from '../../Carousels/UI-components';

const UpdatedCertificationInput = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [description, setDescription] = React.useState<string>(
    props.data.description ? props.data.description : ''
  );
  props.updateCertData(description);
  return (
    <>
      <InputContainer
        name="description"
        value={description}
        onChange={(e) => {
          props.updateCertData(description);
          setDescription(e.target.value);
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

export default UpdatedCertificationInput;
