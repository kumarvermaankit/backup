import React from 'react';
import { InputContainer } from '../../Carousels/UI-components';

const UpdatedInput = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const { name } = props;
  const [description, setDescription] = React.useState<string>(
    props.data.description ? props.data.description : ''
  );
  props.updateData(description);
  return (
    <>
      <InputContainer
        name={name}
        value={description}
        onChange={(e) => {
          props.updateData(description);
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

export default UpdatedInput;
