import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, Button } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import Axios from '../../utils/Axios';
// import { MenteeContext } from '../../contexts/MenteeContext';
import { ToastContainer, toast } from 'react-toastify';

const CSVMigrate: React.FC = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [disabled, toggleDisable] = useState(false);
  // const { setVariable } = React.useContext(MenteeContext);

  const handleOnDrop = (data: any) => {
    try {
      toggleDisable(true);
      const csvData = data.map((d: any) => d.data);
      const newCSVData = JSON.parse(JSON.stringify(csvData));
      const keys = Object.values(csvData[0]);
      newCSVData.splice(0, 1);

      const finalArray: any[] = [];

      newCSVData.forEach(async (a: any) => {
        let newObject: any = {};
        let portfolio: any = {};
        keys.forEach((k: any, i: number): any => {
          newObject[k] = a[i];
        });

        const res = await Axios({
          url: `/profile/user?email=${newObject.emailId}`,
          // url: `/profile/user?email=halirashika@gmail.com`,
          method: 'GET'
        });

        portfolio['email'] = newObject.emailId;
        portfolio['ID'] = res?.data?.ID;

        portfolio['basicDetails'] = {
          location: {
            city: newObject['locationCity'],
            country: newObject['locationCountry']
          },
          skills: JSON.parse(newObject['skilledIn']).map(
            (b: any) => b.M.skill.S
          )
        };

        portfolio['workExperience'] = {
          experience: newObject.experience,
          workExperience: [
            // {
            //   designation: '',
            //   organizationName: '',
            //   workedFrom: { year: 0, month: '' },
            //   workedTill: { year: 0, month: '' },
            //   description: '',
            //   location: '',
            //   job_status: '',
            //   avatar: ''
            // }
          ]
        };
        portfolio['studiesAndCertification'] = {
          education: [
            {
              courseName: '',
              specialization: '',
              instituteName: newObject.collegeName,
              instituteLocation: newObject.collegeLocation,
              institutionAvatar: '',
              courseType: '',
              start: { year: 0, month: '' },
              end: { year: 0, month: '' },
              description: '',
              certificate: {
                linkToCertificate: '',
                certificateID: '',
                fileName: ''
              }
            }
          ],
          certifications: [
            // {
            //   name: '',
            //   issuingOrganisation: '',
            //   recievedIn: { year: 0, month: '' },
            //   description: '',
            //   certificate: {
            //     linkToCertificate: '',
            //     certificateID: '',
            //     fileName: ''
            //   }
            // }
          ]
        };

        finalArray.push(portfolio);
      });

      setRequestData(finalArray);
      toggleDisable(false);
    } catch (e) {
      console.log(e);
      toast.error('Something wrong, check CSV and try again');
    }
  };

  const createMentees = () => {
    console.log(requestData);
    // if (requestData && !disabled) {
    //     requestData?.forEach((r: any) => {
    //         setVariable(r);
    //     });
    // }
  };

  const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
    console.log(err);
  };

  return (
    <>
      <Header />
      <Line>
        <Text type="h3">CSV Migrate</Text>
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
      </Line>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default CSVMigrate;

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
