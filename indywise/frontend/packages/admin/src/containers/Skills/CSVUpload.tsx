import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import { SkillContext } from '../../contexts/SkillsContext';
import { ToastContainer, toast } from 'react-toastify';

const CSVUpload: React.FC = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [disabled, toggleDisable] = useState(false);
  const { setVariable } = React.useContext(SkillContext);

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

        finalArray.push(newObject);
      });

      setRequestData(finalArray);
      toggleDisable(false);
    } catch (e) {
      console.log(e);
      toast.error('Something wrong, check CSV and try again');
    }
  };

  const createSkills = () => {
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
        <Button isDisabled={disabled} onClick={createSkills}>
          Create Skills
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
              Make sure to have "name" and "category" case sensitive columns in
              the file in no particular order.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              The only acceptable Categories right now are:
              <ul>
                <li>
                  <b>Soft Skills</b>
                </li>
                <li>
                  <b>Consulting and Management</b>
                </li>
                <li>
                  <b>Career Counselling</b>
                </li>
                <li>
                  <b>Finance</b>
                </li>
                <li>
                  <b>Security</b>
                </li>
                <li>
                  <b>Marketing</b>
                </li>
                <li>
                  <b>Digital Marketing</b>
                </li>
                <li>
                  <b>IT</b>
                </li>
                <li>
                  <b>Sales and BD</b>
                </li>
                <li>
                  <b>Analytics</b>
                </li>
                <li>
                  <b>General</b>
                </li>
                <li>
                  <b>Human Resources</b>
                </li>
              </ul>
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              During bulk upload if few fields are missed while creating the
              skills, these fields can be edited later using edit skill. name
              field is required.
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
