import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewSkillField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [skill, setSkill] = React.useState<string>(
    props.data.skill ? props.data.skill : ''
  );
  props.newData(skill);

  return (
    <>
      <Input
        placeholder="Enter skills you worked on (max 10)"
        name="skill"
        value={skill}
        onChange={(e) => {
          props.newData(skill);
          setSkill(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewSkillField;
