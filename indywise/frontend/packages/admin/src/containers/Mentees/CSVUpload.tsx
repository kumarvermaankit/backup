import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import { MenteeContext } from '../../contexts/MenteeContext';
import CSVImg from '../../assets/images/csv.png';
import { ToastContainer, toast } from 'react-toastify';

const CSVUpload: React.FC = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [disabled, toggleDisable] = useState(false);
  const { setVariable } = React.useContext(MenteeContext);

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

        const nc = newObject['certified'];
        if (nc === 'true' || nc === 'True' || nc === 'T' || nc === 't') {
          newObject['certified'] = true;
        } else {
          newObject['certified'] = false;
        }

        if (!newObject['objective']) {
          newObject['objective'] = '-';
        }

        if (newObject['KPIs']) {
          const splitArr = newObject['KPIs'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            kpi: cc.split('|')[0],
            value: cc.split('|')[1]
          }));
          newObject['KPIs'] = finalArr;
        }

        if (newObject['wantsInternshipIn']) {
          const splitArr = newObject['wantsInternshipIn'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            skill: cc.split('|')[0],
            category: cc.split('|')[1]
          }));
          newObject['wantsInternshipIn'] = finalArr;
        }

        if (newObject['skilledIn']) {
          const splitArr = newObject['skilledIn'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            skill: cc.split('|')[0],
            category: cc.split('|')[1]
          }));
          newObject['skilledIn'] = finalArr;
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

  const createMentees = () => {
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
        <Button isDisabled={disabled} onClick={createMentees}>
          Create Mentees
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
              Make sure to have these columns in the file in no particular
              order.
            </Text>
          </li>
          <li>
            <Text type="subtitle" bold>
              username, fullName, collegeName, locationCountry, locationCity,
              experience, certified, objective, KPIs, skilledIn,
              wantsInternshipIn, recommendedMentor
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              For skilledIn, use this format:
              <b> Health|HealthCare;SkillName|Consulting </b>
              where Health is the skill and HealthCare is the Category. ;
              separates two skills.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              For wantsInternshipIn, use the same format as skilledIn
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              The only acceptable Categories right now are:
              <ul>
                <li>
                  <b>Youtube, Social Media, Digital Marketing</b>
                </li>
                <li>
                  <b>HealthCare</b>
                </li>
                <li>
                  <b>EdTech and Online Learning</b>
                </li>
                <li>
                  <b>Consulting</b>
                </li>
                <li>
                  <b>Information Technology</b>
                </li>
                <li>
                  <b>E Commerce</b>
                </li>
              </ul>
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              For KPIs, use this format:
              <b> fcc|5;delivery|7 </b>
              where fcc and delivery are the KPI and 5 is the Value. ; separates
              two KPI value pairs.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              The only acceptable KPIs right now are:
              <ul>
                <li>
                  <b>technicalSkills</b>
                </li>
                <li>
                  <b>delivery</b>
                </li>
                <li>
                  <b>fcc</b>
                </li>
                <li>
                  <b>leadership</b>
                </li>
                <li>
                  <b>strategicImpact</b>
                </li>
              </ul>
            </Text>
          </li>
          <li>
            <Text type="subtitle">Example Image:</Text>
          </li>
        </ul>
        <Img src={CSVImg} alt="CSV example" />
      </Line>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default CSVUpload;

const Img = styled.img`
  margin: 2vh auto 10vh auto;
`;

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
