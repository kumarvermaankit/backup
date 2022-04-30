import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import { MentorContext } from '../../contexts/MentorContext';
import CSVImg from '../../assets/images/bulk.png';
import { ToastContainer, toast } from 'react-toastify';

const CSVUpload: React.FC = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [disabled, toggleDisable] = useState(false);
  const { setVariable } = React.useContext(MentorContext);

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

        if (newObject['education']) {
          const splitArr = newObject['education'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            courseName: cc.split('|')[0] || '-',
            specialization: cc.split('|')[1] || '-',
            instituteName: cc.split('|')[2] || '-',
            avatar: cc.split('|')[3],
            courseType: cc.split('|')[4] || '-',
            passingYear: cc.split('|')[5] || '-',
            description: cc.split('|')[6] || '-'
          }));
          newObject['education'] = finalArr;
        }

        if (newObject['employment']) {
          const splitArr = newObject['employment'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            designation: cc.split('|')[0] || '-',
            organization_name: cc.split('|')[1] || '-',
            worked_from: cc.split('|')[2] || '-',
            worked_till: cc.split('|')[3],
            location: cc.split('|')[4] || '-',
            job_status: cc.split('|')[5] || '-',
            description: cc.split('|')[6] || '-',
            avatar: cc.split('|')[7]
          }));
          newObject['employment'] = finalArr;
        }

        if (newObject['reviews']) {
          const splitArr = newObject['reviews'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            name: cc.split('|')[0] || '-',
            place: cc.split('|')[1] || '-',
            review: cc.split('|')[2] || '-',
            subject: cc.split('|')[3] || '-',
            avatar: cc.split('|')[4]
          }));
          newObject['reviews'] = finalArr;
        }

        if (newObject['skills']) {
          const splitArr = newObject['skills'].split(';');
          const finalArr = splitArr.map((cc: any) => ({
            skill: cc.split('|')[0],
            category: cc.split('|')[1]
          }));
          newObject['skills'] = finalArr;
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

  const createMentors = () => {
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
        <Button isDisabled={disabled} onClick={createMentors}>
          Create Mentors
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
              Make sure to have these case sensitive columns in the file in no
              particular order.
            </Text>
          </li>
          <li>
            <Text type="subtitle" bold>
              username, name, sessionPrice, avatar, experience, company,
              location, shortDescription, about, rating, service,
              sessionBookingLink, skills, education, reviews, employment
            </Text>
          </li>
          <li>
            <Text type="subtitle">If there is no value for a field, use -</Text>
          </li>
          <li>
            <Text type="subtitle">
              For skills, use this format:
              <b> Health|HealthCare;SkillName|Consulting </b>
              where Health is the skill and HealthCare is the Category. ;
              separates two skills.
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
              For Education, use this format:
              <b>
                Course Name|Specialization|Institute Name|Avatar|Course
                Type|Passing Year|Description;Course Name 2|Specialization
                2|Institute Name 2|Avatar 2|Course Type 2|Passing Year
                2|Description 2
              </b>
              where | character seperates two fields and ; separates two
              education value pairs. Course Type must be one of Full Time, Part
              Time, Distance Learning. Please maintain this particular order to
              add field values.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              For Employment, use this format:
              <b>
                Designation|Organization Name|Worked From|Worked
                Till|Location|Job Status|Description|Avatar;Designation
                2|Organization Name 2|Worked From 2|Worked Till 2|Location 2|Job
                Status 2|Description 2|Avatar 2
              </b>
              where | character seperates two fields and ; separates two
              employment value pairs. Job Status must be one of Full Time, Part
              Time, Internship. Please maintain this particular order to add
              field values.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              For Reviews, use this format:
              <b>
                Name|Place|Review|Subject|Avatar;Name 2|Place 2|Review 2|Subject
                2|Avatar 2
              </b>
              where | character seperates two fields and ; separates two review
              value pairs. Please maintain this particular order to add field
              values.
            </Text>
          </li>
          <li>
            <Text type="subtitle">
              During bulk upload if few fields are missed while creating the
              mentors, these fields can be edited later using edit mentor.
              username and name fields are required.
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
