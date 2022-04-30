import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import { CourseContext } from '../../contexts/CourseContext';
import { ToastContainer, toast } from 'react-toastify';

const CSVUpload: React.FC = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [disabled, toggleDisable] = useState(false);
  const { setVariable } = React.useContext(CourseContext);

  const handleOnDrop = (data: any) => {
    try {
      toggleDisable(true);
      const csvData = data.map((d: any) => d.data);
      const newCSVData = JSON.parse(JSON.stringify(csvData));
      const keys = Object.values(csvData[0]);
      newCSVData.splice(0, 1);

      const finalArray: any[] = [];

      newCSVData.forEach((c: any) => {
        let newObject: any = {};
        keys.forEach((k: any, i: number): any => {
          newObject[k] = c[i];
        });

        if (newObject['skills']) {
          const splitArr =
            newObject['skills']?.split(',')?.map((s: string) => s.trim()) || [];
          newObject['skills'] = splitArr;
        }

        finalArray.push(newObject);
      });

      setRequestData(finalArray);
      toggleDisable(false);
    } catch (e) {
      console.log(e);
      toast.error('Something wrong, check CSV and try again');
    }
  };

  const createCourse = () => {
    if (requestData && !disabled) {
      requestData?.forEach((r: any) => {
        setVariable(r);
      });
    }
  };

  const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
    console.log(err);
  };

  return (
    <>
      <Header />
      <Line>
        <Text type="h3">CSV Upload</Text>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          removeButtonColor="#659cef"
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
        <Button isDisabled={disabled} onClick={createCourse}>
          Create Courses
        </Button>
        <Text type="h4">Steps to follow:</Text>
        <ul>
          <li>
            <Text type="subtitle">
              Download the excel sheet as CSV or directly use a CSV file.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              Make sure to have "title", "skills", "courseLink", "creator",
              "price", "duration", "service", "service_avatar", "description",
              "type", "thumbnail" and "category" case sensitive columns in the
              file in no particular order.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              During bulk upload if few fields are missed while creating the
              courses, these fields can be edited later using edit course.
              title, skills and courseLink fields are required.
            </Text>
          </li>
        </ul>
      </Line>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default CSVUpload;

const Line = styled.div`
  margin-top: 2vh;
  padding: 2vw 2vw 0vw 2vw;

  h3 {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
  }

  h4 {
    margin-top: 4vh;
  }
`;
