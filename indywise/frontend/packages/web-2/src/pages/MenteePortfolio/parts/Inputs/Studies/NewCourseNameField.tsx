import React from 'react';
import { Input } from '../../Carousels/UI-components';

const NewCourseNameField = (props: any) => {
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const [courseName, setCoursename] = React.useState<string>(
    props.data.courseName ? props.data.courseName : ''
  );
  props.newData(courseName);

  return (
    <>
      <Input
        placeholder="Enter Course Details"
        name="courseName"
        value={courseName}
        onChange={(e) => {
          props.newData(courseName);
          setCoursename(e.target.value);
          setInputHeight(e, '10px');
        }}
      />
    </>
  );
};

export default NewCourseNameField;
