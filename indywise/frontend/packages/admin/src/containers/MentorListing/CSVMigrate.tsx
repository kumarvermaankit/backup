import React from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import { CSVReader } from 'react-papaparse';
import Header from '../CommonFiles/Header';
import Axios from '../../utils/Axios';
// import { MentorContext } from '../../contexts/MentorContext';
import { ToastContainer, toast } from 'react-toastify';

const CSVMigrate: React.FC = () => {
  // const [disabled, toggleDisable] = useState(false);
  // const { setVariable } = React.useContext(MentorContext);

  const handleOnDrop = (data: any) => {
    try {
      // toggleDisable(true);
      const csvData = data.map((d: any) => d.data);
      const newCSVData = JSON.parse(JSON.stringify(csvData));
      const keys = Object.values(csvData[0]);
      newCSVData.splice(0, 1);

      // const finalArray: any[] = [];

      newCSVData.forEach(async (c: any) => {
        let newObject: any = {};
        let portfolio: any = {};
        let mentorTable: any = {};
        keys.forEach((k: any, i: number): any => {
          newObject[k] = c[i];
        });

        console.log(newObject);

        if (newObject?.email) {
          const res = await Axios({
            url: `/profile/user?email=${newObject.email}`,
            // url: `/profile/user?email=halirashika@gmail.com`,
            method: 'GET'
          });

          console.log(res);

          if (res?.data?.ID) {
            // portfolio['email'] = newObject.email;
            // portfolio['ID'] = res?.data?.ID;
            portfolio['activate_profile'] = false;

            portfolio['basicDetails'] = {
              location: {
                city: '',
                country: newObject['location']
              },
              skills: JSON.parse(newObject['skills']).map(
                (b: any) => b.M.skill.S
              )
            };

            const tempE = newObject['employment']
              ? JSON.parse(newObject['employment']).map((b: any) => b?.M)
              : null;

            const tempEd = newObject['education']
              ? JSON.parse(newObject['education']).map((b: any) => b?.M)
              : null;

            let reviewsT = null;
            if (newObject['reviews']) {
              reviewsT = JSON.parse(newObject['reviews'])?.map(
                (b: any) => b?.M
              );
            }

            const tempEE = tempE
              ? tempE.map((t: any) => ({
                  designation: t?.designation?.S,
                  organizationName: t?.organization_name?.S,
                  workedFrom: {
                    year: t?.worked_from?.S?.split(' ')[1],
                    month: t?.worked_from?.S?.split(' ')[0]
                  },
                  workedTill: {
                    year: t?.worked_till?.S?.split(' ')[1],
                    month: t?.worked_till?.S?.split(' ')[0]
                  },
                  description: t?.description?.S,
                  location: t?.location?.S,
                  job_status: t?.job_status?.S,
                  avatar: t?.avatar?.S
                }))
              : '';

            portfolio['workExperience'] = {
              experience: newObject.experience,
              workExperience: tempEE || []
            };

            const tempEEd = tempEd
              ? tempEd.map((t: any) => ({
                  courseName: t?.courseName?.S,
                  specialization: t?.specialization?.S,
                  start: { year: 0, month: '' },
                  end: { year: t?.passingYear?.S, month: '' },
                  description: t?.description?.S,
                  instituteName: t?.instituteName?.S,
                  instituteLocation: '',
                  institutionAvatar: t?.avatar?.S,
                  courseType: t?.courseType?.S
                }))
              : '';

            portfolio['studiesAndCertification'] = {
              certifications: [],
              education: tempEEd || []
            };

            mentorTable['email'] = newObject?.email;
            mentorTable['userID'] = res?.data?.ID;
            mentorTable['name'] = newObject?.name;
            mentorTable['username'] = newObject?.username;
            mentorTable['about'] = newObject?.about;
            mentorTable['sessions'] = {
              sessionBookingLink: newObject?.sessionBookingLink,
              currency: 'inr',
              service: newObject?.service,
              sessionPrice: newObject?.sessionPrice
            };
            mentorTable['wiseup_consent'] = newObject?.wiseup_consent || false;
            mentorTable['valueProposition'] = newObject?.shortDescription;
            mentorTable['avatar'] = newObject?.avatar || '-';
            // mentorTable['isActive'] = true;
            mentorTable['overAllRating'] = newObject?.rating || 5;
            mentorTable['category'] = newObject?.category
              ? JSON.parse(newObject?.category)?.map((b: any) => b.S)
              : [];
            // console.log(JSON.parse(newObject?.tier));
            mentorTable['tier'] = newObject?.tier
              ? JSON.parse(newObject?.tier)?.map((b: any) => b.S)
              : [];
            // mentorTable['company'] = newObject?.company;
            mentorTable['skills'] = newObject?.skills
              ? JSON.parse(newObject?.skills)?.map((b: any) => b.M.skill.S)
              : [];
            mentorTable['portfolio'] = {
              location: {
                city: '-',
                country: newObject['location']
              },
              currentEmployment: {
                companyName: newObject?.company || '-',
                designation: newObject?.employment
                  ? JSON.parse(newObject?.employment)[0].M?.designation?.S
                  : '-',
                job_status: newObject?.employment
                  ? JSON.parse(newObject?.employment)[0].M?.job_status?.S ||
                    'Full Time'
                  : '',
                avatar: newObject?.employment
                  ? JSON.parse(newObject?.employment)[0].M?.avatar?.S || '-'
                  : '-',
                experience: newObject.experience
              }
            };

            if (reviewsT) {
              const tempER = reviewsT?.map((t: any) => ({
                name: t?.name?.S || '-',
                place: t?.place?.S || '-',
                review: t?.review?.S || '-',
                subject: t?.subject?.S || '-',
                avatar: t?.avatar?.S || '-',
                rating: t?.rating?.S || 5,
                reviewID: '-',
                mentorID: '-'
              }));

              mentorTable['reviews'] = tempER;
            }

            const res2 = await Axios({
              url: `/portfolios/portfolio/admin?ID=${res?.data?.ID}`,
              method: 'PUT',
              data: portfolio
            });

            console.log(res2);

            const res3 = await Axios({
              // url: `/mentors/admin-mentors-update/${res?.data?.ID}`,
              url: `/mentors/mentors`,
              method: 'POST',
              data: mentorTable
            });

            console.log(res3);

            if (res3?.data?.mentor?.ID && newObject?.is_active === 'TRUE') {
              const res4 = await Axios({
                // url: `/mentors/admin-mentors-update/${res?.data?.ID}`,
                url: `/mentors/mentors/${res3?.data?.mentor?.ID}/enable`,
                method: 'POST',
                data: mentorTable
              });

              console.log(res4);
            }

            // finalArray.push(portfolio);
          }
        }
      });
      // toggleDisable(false);
    } catch (e) {
      console.log(e);
      toast.error('Something wrong, check CSV and try again');
    }
  };

  // const createMentors = () => {
  //   console.log(requestData);
  // if (requestData && !disabled) {
  //     requestData?.forEach((r: any) => {
  //         setVariable(r);
  //     });
  // }
  // };

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
        {/* <Button isDisabled={disabled} onClick={createMentors}>
          Migrate Mentors
        </Button> */}
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
