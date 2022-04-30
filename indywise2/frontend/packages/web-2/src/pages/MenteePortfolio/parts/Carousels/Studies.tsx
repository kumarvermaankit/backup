import { Button, Icon } from '@indywise/uikit';
import React, { useState } from 'react';
import styled from 'styled-components';
// import EditPen from "../../../../assets/EditPen.svg";
// import eduData from '../../../../data/studies-data.json';
import CircularPen from '../../../../assets/EditPenIcon.svg';
import CircularDelete from '../../../../assets/DeleteIcon.svg';
import StudiesModal from '../../../../assets/Studies-Modal.png';
import { v4 as uuidv4 } from 'uuid';
import Axios from '../../../../utils/Axios';
import axios from 'axios';
import {
  CarouselSection,
  Header,
  SubData,
  // DropDownContainer,
  // DropDown,
  SmallDropDown,
  SmallDropDownContainer,
  // FlexData,
  SubHeader,
  ButtonWrapper,
  YellowBtn,
  ToggleBtnSection,
  InputContainer,
  NotAddedContainer,
  ListItem,
  LeftSideItem,
  RightSideItem,
  BlueBtn
} from './UI-components';
import UpdatedCertificationInput from '../Inputs/Certifications/UpdatedDescription';
import UpdatedStudyInput from '../Inputs/Studies/UpdatedDescription';
import NewInstituteField from '../Inputs/Studies/NewInstituteField';
import NewCourseNameField from '../Inputs/Studies/NewCourseNameField';
import UpdatedInstituteField from '../Inputs/Studies/UpdatedInstituteField';
import UpdatedSpecializationField from '../Inputs/Studies/UpdatedSpecializationField';
import UpdatedCourseField from '../Inputs/Studies/UpdatedCourseField';
import NewCertificationField from '../Inputs/Certifications/NewCertificationField';
import NewOrganizationField from '../Inputs/Certifications/NewOrganizationField';
import NewCertificationDesc from '../Inputs/Certifications/NewCertificationDesc';
import UpdatedOrganizationField from '../Inputs/Certifications/UpdatedOrganizationField';
import UpdatedCertificationField from '../Inputs/Certifications/UpdatedCertificationField';

import { years } from '../../utils/data';
import NewLocationField from '../Inputs/Studies/NewLocationField';
import UpdatedLocationField from '../Inputs/Studies/UpdatedLocationField';
import NewSpecializationField from '../Inputs/Studies/NewSpecializationField';
import { LinearProgress } from '@material-ui/core';
// import NewRadio from '../Inputs/Studies/NewRadio';

import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const Studies: React.FC<any> = ({ submitStd, currStd }) => {
  // const currentUser = JSON.parse(window.localStorage.getItem('user') || '{}');
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const today = new Date();
  const currYear = today.getFullYear();
  const [courseName, setCourseName] = useState('');
  const [courseType, setCourseType] = useState('');
  const [description, setDescription] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [instituteLocation, setInstituteLocation] = useState('');
  const [startYear, setStartYear] = useState(0);
  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState(0);
  const [endMonth, setEndMonth] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [studyfileName, setStudyFilename] = useState('');
  const [studyCertLink, setStudycertlink] = useState('');
  //eslint-disable-next-line
  const [studyCertId, setStudycertId] = useState(uuidv4());

  // Certificate state
  const [certName, setCertName] = useState('');
  const [issuingOrganisation, setIssuingOrganisation] = useState('');
  const [certYear, setCertYear] = useState(0);
  const [certMonth, setCertMonth] = useState('');
  const [certDesc, setCertDesc] = useState('');
  const [certLink, setCertLink] = useState('');
  //eslint-disable-next-line
  const [certId, setCertId] = useState(uuidv4());
  const [fileName, setFileName] = useState('');

  const [remove, setRemove] = useState(true);

  const baseURL =
    process.env.NODE_ENV === 'production' &&
    process.env.REACT_APP_HOST_ENV === 'production'
      ? 'https://api.indywise.com'
      : 'https://dev-api.indywise.com';

  const certificationObject: any = {
    name: certName,
    issuingOrganisation,
    recievedIn: { year: certYear, month: certMonth },
    description: certDesc,
    certificate: {
      fileName: fileName,
      linkToCertificate: certLink,
      certificateID: certId
    }
  };

  let updatedCert: any = {
    name: '',
    issuingOrganisation: '',
    recievedIn: { year: parseInt(''), month: '' },
    description: '',
    certificate: {
      fileName: '',
      linkToCertificate: '',
      certificateID: ''
    }
  };

  // Send this object in the POST request of a new educational qualification
  const educationObject: any = {
    instituteLocation,
    courseName,
    courseType,
    description,
    instituteName,
    institutionAvatar: 'Test',
    start: { month: startMonth, year: startYear },
    end: { month: endMonth, year: endYear },
    specialization,
    certificate: {
      fileName: studyfileName,
      linkToCertificate: studyCertLink,
      certificateID: studyCertId
    }
  };

  let updatedObject: any = {
    instituteLocation: '',
    courseName: '',
    courseType: '',
    description: '',
    instituteName: '',
    institutionAvatar: 'Will get replaced later',
    start: { month: '', year: parseInt('') },
    end: { month: '', year: parseInt('') },
    specialization: '',
    certificate: {
      fileName: '',
      linkToCertificate: '',
      certificateID: ''
    }
  };

  const education = currStd?.education ? currStd?.education : {};
  const certification = currStd?.certifications ? currStd?.certifications : {};
  // eslint-disable-next-line
  const [firstEdu, setFirstEdu] = React.useState(
    currStd?.education ? education[0] : {}
  );
  // eslint-disable-next-line
  const [firstCert, setFirstCert] = React.useState(
    currStd?.certifications ? certification[0] : {}
  );

  const [shuffle, setShuffle] = React.useState({
    num: 1,
    eduItem: {
      courseName: '',
      instituteLocation: '',
      courseType: '',
      instituteName: '',
      institutionAvatar: 'Will get replaced later',
      specialization: '',
      start: { month: '', year: parseInt('') },
      end: { month: '', year: parseInt('') },
      description: '',
      certificate: {
        fileName: '',
        linkToCertificate: '',
        certificateID: ''
      }
    },
    certItem: {
      name: '',
      issuingOrganisation: '',
      recievedIn: { year: parseInt(''), month: '' },
      description: '',
      certificate: {
        fileName: '',
        linkToCertificate: '',
        certificateID: ''
      }
    },
    index: 0
  });

  const [univ, setUniv] = React.useState(false);
  const [edu, setEdu] = React.useState(false);
  const [spec, setSpec] = React.useState(false);

  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);
  const [showYMStart, setShowYMStart] = React.useState<{
    year: boolean;
    months: boolean;
  }>({
    year: false,
    months: false
  });
  const [showYM, setShowYM] = React.useState<{
    startYear: boolean;
    startMonth: boolean;
    endYear: boolean;
    endMonth: boolean;
    curr: boolean;
  }>({
    startYear: false,
    startMonth: false,
    endYear: false,
    endMonth: false,
    curr: false
  });

  const [show, setShow] = React.useState(false);
  let studyPresignUrl = '';
  let certificationPresignUrl = '';
  let sFileName = '';
  let studyUrl = '';
  const formData = new FormData();
  const currentUser = JSON.parse(window.localStorage.getItem('user') || '{}');

  const handleStudyUpload = async (e: any) => {
    formData.append('study', e.target.files[0]);
    const presignStudyPayload = {
      contentType: 'application/pdf',
      format: 'pdf',
      fileName: e.target.files[0].name
    };
    const { ID } = currentUser;

    const res = await Axios.post(
      `${baseURL}/portfolios/portfolio/study/presigned-url/${ID}`,
      presignStudyPayload
    );
    studyPresignUrl = res.data['signed_url'];
    sFileName = res.data['fileName'];
    studyUrl = res.data['study_url'];
    // alert('Press Submit to upload your document!');
    handleStudyRequest();
  };

  const handleStudyRequest = () => {
    setShow(true);
    if (studyPresignUrl) {
      axios.put(studyPresignUrl, formData.get('study')).then((res) => {
        alert('File Uploaded Successfully!');
        setStudyFilename(sFileName);
        setStudycertlink(studyUrl);
        setShow(false);
        studyPresignUrl = '';
        sFileName = '';
        studyUrl = '';
      });
    }
  };

  let cFileName = '';
  let certUrl = '';

  const handleCertificationUpload = async (e: any) => {
    const { ID } = currentUser;
    formData.append('certification', e.target.files[0]);
    const presignCertificationPayload = {
      contentType: 'application/pdf',
      format: 'pdf',
      fileName: e.target.files[0].name
    };

    const res = await Axios.post(
      `${baseURL}/portfolios/portfolio/certification/presigned-url/${ID}`,
      presignCertificationPayload
    );
    certificationPresignUrl = res.data['signed_url'];
    cFileName = res.data['fileName'];
    certUrl = res.data['certification_url'];
    // alert('Press Submit to upload your document!');
    handlecertificationRequest();
  };

  const handlecertificationRequest = () => {
    setShow(true);
    if (certificationPresignUrl) {
      axios
        .put(certificationPresignUrl, formData.get('certification'))
        .then((res) => {
          alert('File Uploaded Successfully!');
          setFileName(cFileName);
          setCertLink(certUrl);
          setShow(false);
          cFileName = '';
          certUrl = '';
          certificationPresignUrl = '';
        });
    }
  };

  const CustomRadio = withStyles({
    root: {
      color: '#262626',
      '&$checked': {
        color: '#262626'
      }
    },
    checked: {}
  })((props: RadioProps) => <Radio color="default" {...props} />);

  const setShowYMHandler = React.useCallback(
    (name: 'startYear' | 'startMonth' | 'endMonth' | 'endYear' | 'curr') => {
      setShowYM((data) => ({
        ...data,
        [name]: !data[name]
      }));
    },
    []
  );

  const setShowYMStartHandler = React.useCallback((name: 'year' | 'months') => {
    setShowYMStart((data) => ({
      ...data,
      [name]: !data[name]
    }));
  }, []);

  const newDesc = (data: string) => {
    setCertDesc(data);
  };

  const updateCertData = (description: string) => {
    updatedCert.description = description;
  };

  const updateStudyData = (description: string) => {
    updatedObject.description = description;
  };

  const newCert = (data: string) => {
    setCertName(data);
  };

  const updateCert = (data: string) => {
    updatedCert.name = data;
  };

  const newOrg = (data: string) => {
    setIssuingOrganisation(data);
  };

  const updateOrg = (data: string) => {
    updatedCert.issuingOrganisation = data;
  };

  const newInstitute = (data: string) => {
    setInstituteName(data);
  };

  const updateInstitute = (data: string) => {
    updatedObject.instituteName = data;
  };

  const newCourseName = (data: string) => {
    setCourseName(data);
  };

  const updateCourseName = (data: string) => {
    updatedObject.courseName = data;
  };

  const newSpecialization = (data: string) => {
    setSpecialization(data);
  };

  const updateSpecialization = (data: string) => {
    updatedObject.specialization = data;
  };

  const newLocation = (data: string) => {
    setInstituteLocation(data);
  };

  const updateLocation = (data: string) => {
    updatedObject.instituteLocation = data;
  };

  const getFirstPage = React.useCallback(
    (value: boolean) => {
      if (value) {
        return (
          <>
            {education.map((item: any, i: number) => {
              return (
                <ListItem style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                  <LeftSideItem>
                    <p id="heading">{item.courseName}</p>
                    <p id="sub-heading">Education</p>
                    <p id="sub-heading">{item.instituteName}</p>
                    <div id="data">
                      <p>
                        {item.start.year} - {item.end.year}
                      </p>
                      <Icon
                        icon="dot"
                        size="0.25rem"
                        style={{ margin: '0px 10px', marginBottom: '32px' }}
                      />
                      <p>{item.courseType}</p>
                    </div>
                  </LeftSideItem>
                  <RightSideItem>
                    <img
                      height="44px"
                      width="44px"
                      src={CircularPen}
                      alt="circular-edit"
                      onClick={() => {
                        setShuffle(() => ({
                          num: 6,
                          eduItem: item,
                          certItem: updatedCert,
                          index: i
                        }));
                      }}
                    />
                    <img
                      height="44px"
                      width="44px"
                      style={{ marginLeft: '2px' }}
                      src={CircularDelete}
                      alt="circular-delete"
                      onClick={() => {
                        education.splice(i, 1);
                        const finalObject = {
                          education: education,
                          certifications: certification
                        };
                        submitStd(finalObject);
                      }}
                    />
                  </RightSideItem>
                  <YellowBtnDiv>
                    <BlueBtn
                      onClick={() =>
                        setShuffle((data) => ({
                          ...data,
                          num: 10,
                          index: i
                        }))
                      }
                      style={{ background: '#0C3559' }}
                    >
                      <Icon icon="modaladd" size="1rem" /> Add Certification
                    </BlueBtn>
                    <YellowBtn
                      onClick={() =>
                        setShuffle((data) => ({
                          ...data,
                          num: 2,
                          index: i
                        }))
                      }
                    >
                      <Icon
                        icon="modalAddBlack"
                        size="1rem"
                        style={{ color: 'black' }}
                      />{' '}
                      Add Study
                    </YellowBtn>
                  </YellowBtnDiv>
                </ListItem>
              );
            })}
            {certification.map((item: any, i: number) => {
              return (
                <ListItem style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                  <LeftSideItem>
                    <p id="heading">{item.name}</p>
                    <p id="sub-heading">Certification</p>
                    <p id="sub-heading">{item.issuingOrganisation}</p>
                    <div id="data">
                      <p>
                        Recieved In {item.recievedIn.year},{' '}
                        {item.recievedIn.month}
                      </p>
                    </div>
                  </LeftSideItem>
                  <RightSideItem>
                    <img
                      height="44px"
                      width="44px"
                      src={CircularPen}
                      alt="circular-pen"
                      onClick={() => {
                        setShuffle(() => ({
                          num: 13,
                          eduItem: updatedObject,
                          certItem: item,
                          index: i
                        }));
                      }}
                    />
                    <img
                      height="44px"
                      width="44px"
                      style={{ marginLeft: '2px' }}
                      src={CircularDelete}
                      alt="circular-delete"
                      onClick={() => {
                        certification.splice(i, 1);
                        const finalObject = {
                          education: education,
                          certifications: certification
                        };
                        submitStd(finalObject);
                      }}
                    />
                  </RightSideItem>
                  <YellowBtnDiv>
                    <BlueBtn
                      onClick={() =>
                        setShuffle((data) => ({
                          ...data,
                          num: 10,
                          index: i
                        }))
                      }
                      style={{ background: '#0C3559' }}
                    >
                      <Icon icon="modaladd" size="1rem" /> Add Certification
                    </BlueBtn>
                    <YellowBtn
                      onClick={() =>
                        setShuffle((data) => ({
                          ...data,
                          num: 2,
                          index: i
                        }))
                      }
                    >
                      <Icon icon="modaladd" size="1rem" /> Add Study
                    </YellowBtn>
                  </YellowBtnDiv>
                </ListItem>
              );
            })}
          </>
        );
      }
      return (
        <NotAddedContainer
          style={{
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          <div>
            <p>No Studies or Certifications added yet!</p>
          </div>
          <ImgDiv>
            <img
              src={StudiesModal}
              style={{
                marginTop: '104px',
                marginBottom: '120px',
                height: '200px',
                width: '200px'
              }}
              alt="No Jobs"
            />
          </ImgDiv>
          <YellowBtnDiv>
            <YellowBtn
              onClick={() =>
                setShuffle((data) => ({
                  ...data,
                  num: 2
                }))
              }
            >
              <Icon icon="modaladd" size="1rem" /> Add Study
            </YellowBtn>
            <BlueBtn
              onClick={() =>
                setShuffle((data) => ({
                  ...data,
                  num: 10
                }))
              }
              style={{ background: '#0C3559' }}
            >
              <Icon icon="modaladd" size="1rem" color="#FFF" /> Add
              Certification
            </BlueBtn>
          </YellowBtnDiv>
        </NotAddedContainer>
      );
    },
    // eslint-disable-next-line
    [currStd]
  );
  const getComponentHandler = React.useCallback(
    (value: number) => {
      switch (value) {
        case 1:
          return (
            <CarouselSection>
              {getFirstPage(
                currStd?.education?.length > 0 ||
                  currStd?.certifications?.length > 0
              )}
            </CarouselSection>
          );
        case 2:
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingBottom: '8px',
                height: '400px',
                overflowY: 'auto'
              }}
            >
              <Header>Basic Information</Header>
              <SubData>
                Enter the basic information about the education you <br />
                received
              </SubData>
              <NewInstituteField
                data={educationObject}
                newData={newInstitute}
              />
              <NewCourseNameField
                data={educationObject}
                newData={newCourseName}
              />
              <NewSpecializationField
                data={educationObject}
                newData={newSpecialization}
              />
              <NewLocationField data={educationObject} newData={newLocation} />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 3:
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Course Information</Header>
              <SubData>
                Enter the basic information about the course you attended{' '}
              </SubData>
              <SubHeader style={{ marginTop: '24px', marginBottom: '20px' }}>
                Course type *
              </SubHeader>
              <FormControl>
                <RadioGroup
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                >
                  <FormControlLabel
                    labelPlacement="start"
                    value="Full Time"
                    control={<CustomRadio />}
                    label="Full Time"
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    value="Part Time"
                    control={<CustomRadio />}
                    label="Part Time"
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    value="Distance Learning"
                    control={<CustomRadio />}
                    label="Distance Learning"
                  />
                </RadioGroup>
              </FormControl>
              <SubHeader style={{ marginTop: '28px', marginBottom: '20px' }}>
                Started in *
              </SubHeader>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startYear')}
                >
                  <h1>{startYear ? startYear : 'Year'}</h1>
                  <Icon
                    icon={!showYM.startYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('startYear');
                          setStartYear(
                            parseInt(e.currentTarget.innerText.toString())
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startMonth')}
                >
                  <h1>{startMonth ? startMonth : 'Month'}</h1>
                  <Icon
                    icon={!showYM.startMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('startMonth');
                          setStartMonth(e.currentTarget.innerText.toString());
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '24px',
                  fontFamily: 'Roboto'
                }}
              >
                <div>
                  <SubHeader style={{ marginTop: '0', marginBottom: '0' }}>
                    Passed in *
                  </SubHeader>
                </div>

                <CheckLabel className="form-group">
                  <input
                    type="checkbox"
                    id="html"
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        setEndMonth(monthNames[today.getMonth()]);
                        setEndYear(currYear);
                      } else {
                        setEndMonth('');
                        setEndYear(0);
                      }
                      setShowYMHandler('curr');
                    }}
                  />
                  <label
                    htmlFor="html"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626'
                    }}
                  >
                    Currently Studying
                  </label>
                </CheckLabel>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('endYear')}
                >
                  <h1>{endYear ? endYear : 'Year'}</h1>
                  <Icon
                    icon={!showYM.endYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.endYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('endYear');
                          setEndYear(
                            parseInt(e.currentTarget.innerText.toString())
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('endMonth')}
                >
                  <h1>{endMonth ? endMonth : 'Month'}</h1>
                  <Icon
                    icon={!showYM.endMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.endMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('endMonth');
                          setEndMonth(e.currentTarget.innerText.toString());
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 4:
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Course Description *</Header>
              <SubData>
                Enter in brief the details about what you studied and your
                achievements keeping it under the maximum character limit of 200
              </SubData>
              <InputContainer
                value={description}
                placeholder="Write Course Description"
                name="description"
                maxLength={200}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setInputHeight(e, '10px');
                }}
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
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 5:
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Upload Document</Header>
              {show && <LinearProgress style={{ marginTop: '8px' }} />}
              <SubData>
                Upload the soft copy of the degree you recieved from the
                institution
              </SubData>
              <FileInput
                type="file"
                id="certificate"
                onChange={handleStudyUpload}
              />
              {studyfileName.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#FAEFD9',
                    padding: '8px 8px 8px 8px',
                    height: '56px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626',
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    {studyfileName}
                  </p>
                </div>
              )}
              <div
                style={{
                  width: '224px',
                  height: '44px',
                  margin: '0 auto'
                }}
              >
                <Button color="secondary" icon="upload" iconAlign="left">
                  <label htmlFor="certificate">Upload Document</label>
                </Button>
              </div>
              {/* <Button
                color="primary"
                onClick={handleStudyRequest}
                style={{ marginTop: '16px' }}
              >
                Submit
              </Button> */}
              <p style={{ textAlign: 'center', fontFamily: 'Roboto' }}>OR</p>
              <Input
                value={studyCertLink}
                onChange={(e) => setStudycertlink(e.target.value)}
                type="text"
                placeholder="Add Document Link Here"
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 6:
          // eslint-disable-next-line
          updatedObject = shuffle.eduItem;
          currStd.education = [...education];
          currStd.education[shuffle.index] = updatedObject;
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Basic Information</Header>
              <SubData>
                Enter the basic information about the education you <br />
                received
              </SubData>
              <UpdatedInstituteField
                data={updatedObject}
                updateStudyData={updateInstitute}
              />
              <UpdatedCourseField
                data={updatedObject}
                updateStudyData={updateCourseName}
              />
              <UpdatedSpecializationField
                data={updatedObject}
                updateStudyData={updateSpecialization}
              />
              <UpdatedLocationField
                data={updatedObject}
                updateStudyData={updateLocation}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 7:
          updatedObject = shuffle.eduItem;
          currStd.education = [...education];
          currStd.education[shuffle.index] = updatedObject;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Course Information</Header>
              <SubData>
                Enter the basic information about the course you attended{' '}
              </SubData>
              <SubHeader style={{ marginTop: '24px', marginBottom: '20px' }}>
                Course type *
              </SubHeader>
              <FormControl>
                <RadioGroup
                  value={shuffle.eduItem.courseType}
                  onChange={(e) => {
                    updatedObject.courseType = e.target.value;
                    setCourseType(e.target.value);
                  }}
                >
                  <FormControlLabel
                    labelPlacement="start"
                    value="Full Time"
                    control={<CustomRadio />}
                    label="Full Time"
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    value="Part Time"
                    control={<CustomRadio />}
                    label="Part Time"
                  />
                  <FormControlLabel
                    labelPlacement="start"
                    value="Distance Learning"
                    control={<CustomRadio />}
                    label="Distance Learning"
                  />
                </RadioGroup>
              </FormControl>
              <SubHeader style={{ marginTop: '28px', marginBottom: '20px' }}>
                Started in *
              </SubHeader>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startYear')}
                >
                  <h1>
                    {shuffle.eduItem.start.year
                      ? shuffle.eduItem.start.year
                      : 'Year'}
                  </h1>
                  <Icon
                    icon={!showYM.startYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('startYear');
                          updatedObject.start.year = parseInt(
                            e.currentTarget.innerText.toString()
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startMonth')}
                >
                  <h1>
                    {shuffle.eduItem.start.month
                      ? shuffle.eduItem.start.month
                      : 'Month'}
                  </h1>
                  <Icon
                    icon={!showYM.startMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('startMonth');
                          updatedObject.start.month = e.currentTarget.innerText.toString();
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '24px',
                  fontFamily: 'Roboto'
                }}
              >
                <div>
                  <SubHeader style={{ marginTop: '0', marginBottom: '0' }}>
                    Passed in *
                  </SubHeader>
                </div>

                <CheckLabel className="form-group">
                  <input
                    type="checkbox"
                    id="html"
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        updatedObject.end.month = monthNames[today.getMonth()];
                        updatedObject.end.year = currYear;
                      } else {
                        updatedObject.end.month = '';
                        updatedObject.end.year = 0;
                      }
                      setShowYMHandler('curr');
                    }}
                  />
                  <label
                    htmlFor="html"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626'
                    }}
                  >
                    Currently Studying
                  </label>
                </CheckLabel>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('endYear')}
                >
                  <h1>
                    {shuffle.eduItem.end.year
                      ? shuffle.eduItem.end.year
                      : 'Year'}
                  </h1>
                  <Icon
                    icon={!showYM.endYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.endYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('endYear');
                          updatedObject.end.year = parseInt(
                            e.currentTarget.innerText.toString()
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('endMonth')}
                >
                  <h1>
                    {shuffle.eduItem.end.month
                      ? shuffle.eduItem.end.month
                      : 'Month'}
                  </h1>
                  <Icon
                    icon={!showYM.endMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.endMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('endMonth');
                          updatedObject.end.month = e.currentTarget.innerText.toString();
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 8:
          updatedObject = shuffle.eduItem;
          currStd.education = [...education];
          currStd.education[shuffle.index] = updatedObject;
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Course Description *</Header>
              <SubData>
                Enter in brief the details about what you studied and your
                achievements keeping it under the maximum character limit of 200
              </SubData>
              <UpdatedStudyInput
                data={updatedObject}
                updateStudyData={updateStudyData}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 9:
          updatedObject = shuffle.eduItem;
          currStd.education = [...education];
          currStd.education[shuffle.index] = updatedObject;
          if (!updatedObject.certificate) {
            updatedObject.certificate = {};
            shuffle.eduItem.certificate = {
              fileName: '',
              linkToCertificate: '',
              certificateID: ''
            };
          }
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Upload Document</Header>
              {show && <LinearProgress style={{ marginTop: '8px' }} />}
              <SubData>
                Upload the soft copy of the degree you recieved from the
                institution
              </SubData>
              <FileInput
                type="file"
                id="certificate"
                // onChange={handleSubmission}
                onChange={handleStudyUpload}
              />
              {shuffle.eduItem.certificate.fileName.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#FAEFD9',
                    padding: '8px 8px 8px 8px',
                    height: '56px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626',
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    {shuffle.eduItem.certificate.fileName}
                  </p>
                  <p
                    onClick={() => {
                      delete updatedObject.certificate;
                      delete currStd.education[shuffle.index].certificate;
                      setRemove(false);
                    }}
                  >
                    <Icon icon="redexit" />
                  </p>
                </div>
              )}
              <div
                style={{
                  width: '224px',
                  height: '44px',
                  margin: '0 auto'
                }}
              >
                <Button color="secondary" icon="upload" iconAlign="left">
                  <label htmlFor="certificate">Upload Document</label>
                </Button>
              </div>
              <Button
                color="primary"
                // onClick={handleRequest}
                onClick={() => {
                  setShow(true);
                  if (studyPresignUrl) {
                    axios
                      .put(studyPresignUrl, formData.get('study'))
                      .then((res) => {
                        alert('File Uploaded Successfully!');
                        updatedObject.certificate.fileName = sFileName;
                        updatedObject.certificate.linkToCertificate = studyUrl;
                        setShow(false);
                        //eslint-disable-next-line
                        studyPresignUrl = '';
                        //eslint-disable-next-line
                        sFileName = '';
                        //eslint-disable-next-line
                        studyUrl = '';
                      });
                  }
                }}
                style={{ marginTop: '16px' }}
              >
                Submit
              </Button>
              <p style={{ textAlign: 'center', fontFamily: 'Roboto' }}>OR</p>
              <Input type="text" placeholder="Add Document Link Here" />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 10:
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingBottom: '8px',
                overflowY: 'auto',
                height: '400px'
              }}
            >
              <Header>Basic Information</Header>
              <SubData>
                Enter the basic information about the certification you <br />
                received
              </SubData>
              <SubHeader style={{ marginBottom: '0px' }}>
                Enter Certification Name *
              </SubHeader>
              <NewCertificationField
                data={certificationObject}
                newData={newCert}
              />
              <SubHeader style={{ marginBottom: '0px' }}>
                Enter Issuing Organization Name *
              </SubHeader>
              <NewOrganizationField
                data={certificationObject}
                newData={newOrg}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 11:
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Course Information</Header>
              <SubData>
                Enter the basic information about the course you attended{' '}
              </SubData>
              <SubHeader style={{ marginTop: '28px', marginBottom: '20px' }}>
                Recieved in *
              </SubHeader>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startYear')}
                >
                  <h1>{certYear ? certYear : 'Year'}</h1>
                  <Icon
                    icon={!showYM.startYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('startYear');
                          setCertYear(
                            parseInt(e.currentTarget.innerText.toString())
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startMonth')}
                >
                  <h1>{certMonth ? certMonth : 'Month'}</h1>
                  <Icon
                    icon={!showYM.startMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('startMonth');
                          setCertMonth(e.currentTarget.innerText.toString());
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>

              <Header style={{ marginTop: '16px' }}>
                Certification Description *
              </Header>
              <SubData>
                Enter in brief the details about what you studied and your
                achievements keeping it under the maximum character limit of 200
              </SubData>
              <NewCertificationDesc
                data={certificationObject}
                newData={newDesc}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 12:
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Upload Document</Header>
              {show && <LinearProgress style={{ marginTop: '8px' }} />}
              <SubData>
                Upload the soft copy of the certifcate you recieved from the
                organisation
              </SubData>
              <FileInput
                type="file"
                id="certificate"
                onChange={handleCertificationUpload}
              />
              {fileName.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#FAEFD9',
                    padding: '8px 8px 8px 8px',
                    height: '56px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626',
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    {fileName}
                  </p>
                </div>
              )}
              <div
                style={{
                  width: '224px',
                  height: '44px',
                  margin: '0 auto'
                }}
              >
                <Button color="secondary" icon="upload" iconAlign="left">
                  <label htmlFor="certificate">Upload Document</label>
                </Button>
              </div>
              {/* <Button
                color="primary"
                onClick={handlecertificationRequest}
                style={{ marginTop: '16px' }}
              >
                Submit
              </Button> */}
              <p style={{ textAlign: 'center', fontFamily: 'Roboto' }}>OR</p>
              <Input
                type="text"
                placeholder="Add Document Link Here"
                onChange={(e) => {
                  setCertLink(e.target.value);
                }}
                // disabled={disabledInput}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        case 13:
          // eslint-disable-next-line
          updatedCert = shuffle.certItem;
          currStd.certifications = [...certification];
          currStd.certifications[shuffle.index] = updatedCert;
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                height: '400px',
                overflowY: 'auto',
                paddingBottom: '8px'
              }}
            >
              <Header>Basic Information</Header>
              <SubData>
                Enter the basic information about the certification you <br />
                received
              </SubData>

              <SubHeader style={{ marginBottom: '0px' }}>
                Enter Certification Name *
              </SubHeader>
              <UpdatedCertificationField
                data={updatedCert}
                updateCertData={updateCert}
              />
              <SubHeader style={{ marginBottom: '0px' }}>
                Enter Issuing Organization Name *
              </SubHeader>
              <UpdatedOrganizationField
                data={updatedCert}
                updateCertData={updateOrg}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 14:
          updatedCert = shuffle.certItem;
          currStd.certifications = [...certification];
          currStd.certifications[shuffle.index] = updatedCert;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Course Information</Header>
              <SubData>
                Enter the basic information about the course you attended{' '}
              </SubData>
              <SubHeader style={{ marginTop: '28px', marginBottom: '20px' }}>
                Recieved in *
              </SubHeader>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '28px'
                }}
              >
                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startYear')}
                >
                  <h1>
                    {shuffle.certItem.recievedIn.year
                      ? shuffle.certItem.recievedIn.year
                      : 'Year'}
                  </h1>
                  <Icon
                    icon={!showYM.startYear ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startYear ? (
                  <SmallDropDown>
                    {years(1931).map((y) => (
                      <h1
                        key={y}
                        onClick={(e) => {
                          setShowYMHandler('startYear');
                          updatedCert.recievedIn.year = parseInt(
                            e.currentTarget.innerText.toString()
                          );
                        }}
                      >
                        {y}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}

                <SmallDropDownContainer
                  onClick={() => setShowYMHandler('startMonth')}
                >
                  <h1>
                    {shuffle.certItem.recievedIn.month
                      ? shuffle.certItem.recievedIn.month
                      : 'Month'}
                  </h1>
                  <Icon
                    icon={!showYM.startMonth ? 'darkdownarrow' : 'uparrow'}
                    color="black"
                    size="10px"
                  />
                </SmallDropDownContainer>
                {showYM.startMonth ? (
                  <SmallDropDown style={{ right: '40px' }}>
                    {monthNames.map((m) => (
                      <h1
                        key={m}
                        onClick={(e) => {
                          setShowYMHandler('startMonth');
                          updatedCert.recievedIn.month = e.currentTarget.innerText.toString();
                        }}
                      >
                        {m}
                      </h1>
                    ))}
                  </SmallDropDown>
                ) : null}
              </div>

              <Header style={{ marginTop: '16px' }}>
                Certification Description *
              </Header>
              <SubData>
                Enter in brief the details about what you studied and your
                achievements keeping it under the maximum character limit of 200
              </SubData>
              <UpdatedCertificationInput
                data={updatedCert}
                updateCertData={updateCertData}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </div>
          );
        case 15:
          updatedCert = shuffle.certItem;
          if (!updatedCert.certificate) {
            updatedCert.certificate = {};
            shuffle.certItem.certificate = {
              fileName: '',
              linkToCertificate: '',
              certificateID: ''
            };
          }
          currStd.certifications = [...certification];
          currStd.certifications[shuffle.index] = updatedCert;
          return (
            <CarouselSection
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Header>Upload Document</Header>
              {show && <LinearProgress style={{ marginTop: '8px' }} />}
              <SubData>
                Upload the soft copy of the certifcate you recieved from the
                organisation
              </SubData>
              <FileInput
                type="file"
                id="certificate"
                onChange={handleCertificationUpload}
              />
              {shuffle.certItem.certificate.fileName.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#FAEFD9',
                    padding: '8px 8px 8px 8px',
                    height: '56px',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '16px',
                      color: '#262626',
                      marginTop: 0,
                      marginBottom: 0
                    }}
                  >
                    {shuffle.certItem.certificate.fileName}
                  </p>
                  <p
                    onClick={() => {
                      delete updatedCert.certificate;
                      delete currStd.certifications[shuffle.index].certificate;
                      setRemove(false);
                    }}
                  >
                    <Icon icon="redexit" />
                  </p>
                </div>
              )}
              <div
                style={{
                  width: '224px',
                  height: '44px',
                  margin: '0 auto'
                }}
              >
                <Button color="secondary" icon="upload" iconAlign="left">
                  <label htmlFor="certificate">Upload Document</label>
                </Button>
              </div>
              <Button
                color="primary"
                style={{ marginTop: '16px' }}
                // onClick={handleRequest}
                onClick={() => {
                  setShow(true);
                  if (certificationPresignUrl) {
                    axios
                      .put(
                        certificationPresignUrl,
                        formData.get('certification')
                      )
                      .then((res) => {
                        alert('File Uploaded Successfully!');
                        updatedCert.certificate.fileName = cFileName;
                        updatedCert.certificate.linkToCertificate = certUrl;
                        updatedCert.certificate.certificateID = uuidv4();
                        setShow(false);
                        //eslint-disable-next-line
                        cFileName = '';
                        //eslint-disable-next-line
                        certUrl = '';
                        //eslint-disable-next-line
                        certificationPresignUrl = '';
                      });
                  }
                }}
              >
                Submit
              </Button>
              <p style={{ textAlign: 'center', fontFamily: 'Roboto' }}>OR</p>
              <Input
                type="text"
                placeholder="Add Document Link Here"
                onChange={(e) => {
                  setCertLink(e.target.value);
                }}
                // disabled={disabledInput}
              />
              <ImgDiv>
                <img
                  src={StudiesModal}
                  style={{ marginTop: '104px' }}
                  alt="Basic Details"
                />
              </ImgDiv>
            </CarouselSection>
          );
        default:
          return;
      }
    },
    [
      // shuffle,
      // updatedObject,
      // updatedCert.certificate,
      // currStd.certifications[shuffle.index],
      remove,
      currStd,
      univ,
      description,
      setUniv,
      spec,
      setSpec,
      edu,
      setEdu,
      getFirstPage,
      setInputHeight,
      setShowYMHandler,
      setShowYMStartHandler,
      showYM,
      showYMStart,
      shuffle,
      setEndMonth,
      studyCertLink,
      show,
      fileName,
      courseType
    ]
  );
  return (
    <Col4 style={{ position: 'relative' }}>
      {getComponentHandler(shuffle.num)}
      <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {shuffle.num >= 2 && shuffle.num < 6 && (
          <ToggleBtnSection>
            <p>{shuffle.num >= 2 && `${shuffle.num - 1} / 4`}</p>
            <div>
              {shuffle.num > 1 && (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num - 1
                    }))
                  }
                  // shuffle.num > 1 ? shuffle.num - 1 : shuffle.num
                  // onClick={() => setShuffle()}
                >
                  <Icon icon="leftcircularbtn" size="80px" />
                </ButtonWrapper>
              )}
              {shuffle.num < 5 ? (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num + 1
                    }))
                  }
                >
                  <Icon icon="rightCircularBtn" size="80px" />
                </ButtonWrapper>
              ) : (
                <ButtonWrapper>
                  <YellowBtn
                    onClick={() => {
                      if (
                        instituteLocation.length > 0 &&
                        courseName.length > 0 &&
                        courseType.length > 0 &&
                        description.length > 0 &&
                        instituteName.length > 0 &&
                        startMonth.length > 0 &&
                        startYear !== 0 &&
                        endMonth.length > 0 &&
                        endYear !== 0 &&
                        specialization.length > 0
                      ) {
                        if (studyCertLink.length === 0) {
                          delete educationObject.certificate;
                        }
                        if (
                          currStd?.education.length === 0 &&
                          currStd?.certifications.length === 0
                        ) {
                          const newStudy = {
                            education: [educationObject]
                          };
                          const finalObject = {
                            education: newStudy.education,
                            certifications: []
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length > 0 &&
                          currStd?.certifications.length === 0
                        ) {
                          const newStudy = {
                            education: [...currStd.education, educationObject]
                          };
                          const finalObject = {
                            education: newStudy.education,
                            certifications: []
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length === 0 &&
                          currStd?.certifications.length > 0
                        ) {
                          const newStudy = {
                            education: [educationObject]
                          };
                          const finalObject = {
                            education: newStudy.education,
                            certifications: [...currStd.certifications]
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length > 0 &&
                          currStd?.certifications.length > 0
                        ) {
                          const newStudy = {
                            education: [...currStd.education, educationObject]
                          };
                          const finalObject = {
                            education: newStudy.education,
                            certifications: [...currStd.certifications]
                          };
                          submitStd(finalObject);
                        }
                        if (!currStd) {
                          const newStudy = {
                            education: [educationObject]
                          };
                          const finalObject = {
                            education: newStudy.education,
                            certifications: []
                          };
                          submitStd(finalObject);
                        }
                      } else {
                        alert('Please make sure all the fields are filled!');
                      }
                    }}
                  >
                    Finish
                  </YellowBtn>
                </ButtonWrapper>
              )}
            </div>
          </ToggleBtnSection>
        )}
        {shuffle.num >= 6 && shuffle.num < 10 && (
          <ToggleBtnSection>
            <p>{shuffle.num >= 6 && `${shuffle.num - 5} / 4`}</p>
            <div>
              {shuffle.num > 6 && (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num - 1
                    }))
                  }
                >
                  <Icon icon="leftcircularbtn" size="80px" />
                </ButtonWrapper>
              )}
              {shuffle.num < 9 ? (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num + 1
                    }))
                  }
                >
                  <Icon icon="rightCircularBtn" size="80px" />
                </ButtonWrapper>
              ) : (
                <ButtonWrapper>
                  <YellowBtn
                    onClick={() => {
                      if (
                        currStd.education[shuffle.index].certificate.fileName
                          .length === 0
                      ) {
                        delete currStd.education[shuffle.index].certificate;
                      }
                      const updatedEdu = {
                        education: [...currStd.education]
                      };
                      if (shuffle.index !== 0) {
                        updatedEdu.education[0] = firstEdu;
                      }
                      const finalUpdatedObject = {
                        education: updatedEdu.education,
                        certifications: currStd.certifications
                      };
                      submitStd(finalUpdatedObject);
                    }}
                  >
                    Finish
                  </YellowBtn>
                </ButtonWrapper>
              )}
            </div>
          </ToggleBtnSection>
        )}
        {shuffle.num >= 10 && shuffle.num < 13 && (
          <ToggleBtnSection>
            <p>{shuffle.num >= 10 && `${shuffle.num - 9} / 3`}</p>
            <div>
              {shuffle.num > 10 && (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num - 1
                    }))
                  }
                >
                  <Icon icon="leftcircularbtn" size="80px" />
                </ButtonWrapper>
              )}
              {shuffle.num < 12 ? (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num + 1
                    }))
                  }
                >
                  <Icon icon="rightCircularBtn" size="80px" />
                </ButtonWrapper>
              ) : (
                <ButtonWrapper>
                  <YellowBtn
                    onClick={() => {
                      if (
                        certName.length > 0 &&
                        issuingOrganisation.length > 0 &&
                        certYear !== 0 &&
                        certMonth.length > 0 &&
                        certDesc.length > 0
                      ) {
                        if (certLink.length === 0) {
                          delete certificationObject.certificate;
                        }
                        if (
                          currStd?.education.length === 0 &&
                          currStd?.certifications.length === 0
                        ) {
                          const newCert = {
                            certifications: [certificationObject]
                          };
                          const finalObject = {
                            certifications: newCert.certifications,
                            education: []
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length > 0 &&
                          currStd?.certifications.length === 0
                        ) {
                          const newCert = {
                            certifications: [certificationObject]
                          };
                          const finalObject = {
                            certifications: newCert.certifications,
                            education: [...currStd.education]
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length === 0 &&
                          currStd?.certifications.length > 0
                        ) {
                          const newCert = {
                            certifications: [
                              ...currStd.certifications,
                              certificationObject
                            ]
                          };
                          const finalObject = {
                            certifications: newCert.certifications,
                            education: []
                          };
                          submitStd(finalObject);
                        } else if (
                          currStd?.education.length > 0 &&
                          currStd?.certifications.length > 0
                        ) {
                          const newCert = {
                            certifications: [
                              ...currStd.certifications,
                              certificationObject
                            ]
                          };
                          const finalObject = {
                            certifications: newCert.certifications,
                            education: [...currStd.education]
                          };
                          submitStd(finalObject);
                        }
                        if (!currStd) {
                          const newCert = {
                            certifications: [certificationObject]
                          };
                          const finalObject = {
                            certifications: newCert.certifications,
                            education: []
                          };
                          submitStd(finalObject);
                        }
                      } else {
                        alert('Please make sure all the fields are filled!');
                      }
                    }}
                  >
                    Finish
                  </YellowBtn>
                </ButtonWrapper>
              )}
            </div>
          </ToggleBtnSection>
        )}
        {shuffle.num >= 13 && shuffle.num < 16 && (
          <ToggleBtnSection>
            <p>{shuffle.num >= 13 && `${shuffle.num - 12} / 3`}</p>
            <div>
              {shuffle.num > 13 && (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num - 1
                    }))
                  }
                >
                  <Icon icon="leftcircularbtn" size="80px" />
                </ButtonWrapper>
              )}
              {shuffle.num < 15 ? (
                <ButtonWrapper
                  onClick={() =>
                    setShuffle((data) => ({
                      ...data,
                      num: data.num + 1
                    }))
                  }
                >
                  <Icon icon="rightCircularBtn" size="80px" />
                </ButtonWrapper>
              ) : (
                <ButtonWrapper>
                  <YellowBtn
                    onClick={() => {
                      if (
                        currStd.certifications[shuffle.index].certificate
                          .fileName.length === 0
                      ) {
                        delete currStd.certifications[shuffle.index]
                          .certificate;
                      }
                      const updatedCert = {
                        certifications: [...currStd.certifications]
                      };
                      if (shuffle.index !== 0) {
                        updatedCert.certifications[0] = firstCert;
                      }
                      const finalUpdatedObject = {
                        certifications: updatedCert.certifications,
                        education: currStd.education
                      };
                      submitStd(finalUpdatedObject);
                    }}
                  >
                    Finish
                  </YellowBtn>
                </ButtonWrapper>
              )}
            </div>
          </ToggleBtnSection>
        )}
      </div>
    </Col4>
  );
};

export default Studies;

const CheckLabel = styled.div`
  &.form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  &.form-group label {
    position: relative;
    cursor: pointer;
  }

  &.form-group label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #262626;
    border-radius: 1px;
    height: 18px;
    width: 18px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }

  &.form-group input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 7px;
    width: 6px;
    height: 12px;
    border: 2px solid #262626;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const YellowBtnDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: 505px) {
    bottom: -100px;
  }
`;

const Col4 = styled.div`
  min-height: 1px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40.33%;
  flex: 0 0 40.33%;
  max-width: 40.33%;

  @media (max-width: 1001px) {
    flex: 0 0 70%;
    max-width: 70%;
    display: block;
  }
  @media (max-width: 505px) {
    flex: 0 0 100%;
    max-width: 100%;
    display: block;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 56px;
  border: 0px;
  border-bottom: 1px solid #727272;
  ouline: none;
  padding-bottom: 8px;
  font-size: 16px;
  color: #4b4b4b;
  font-family: Roboto, sans-serif;
  &:focus {
    outline: none;
  }
`;

const FileInput = styled.input`
  display: none;
  width: 224px;
  height: 44px;
  margin: 0 auto;
`;

const ImgDiv = styled.div`
  display: none;
  @media (max-width: 505px) {
    display: flex;
    justify-content: center;
  }
`;
