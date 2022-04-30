import { Icon } from '@indywise/uikit';
import CircularPen from '../../../../assets/EditPenIcon.svg';
import CircularDelete from '../../../../assets/DeleteIcon.svg';
import styled from 'styled-components';
import React from 'react';
// import { WorkExp } from '../../utils/interfaces';
import Programmer from '../../../../assets/Programmer.png';
// import Axios from 'axios';
import WorkImg from '../../../../assets/Work-Experience-Pic.svg';
import UpdatedInput from '../Inputs/WorkExperience/UpdatedDescription';
import {
  CarouselSection,
  Header,
  SubData,
  DropDownContainer,
  DropDown,
  DateHeader,
  SmallDropDown,
  SmallDropDownContainer,
  InputContainer,
  ButtonWrapper,
  YellowBtn,
  ToggleBtnSection,
  ListItem,
  LeftSideItem,
  RightSideItem,
  // FlexData,
  SubHeader,
  NotAddedContainer
} from './UI-components';
import NewDesignationField from '../Inputs/WorkExperience/NewDesignationField';
import NewOrganizationField from '../Inputs/WorkExperience/NewOrganizationField';
import UpdatedDesignation from '../Inputs/WorkExperience/UpdatedDesignation';
import UpdatedOrganization from '../Inputs/WorkExperience/UpdatedOrganization';
import { monthNames, countryList, years } from '../../utils/data';

import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

type Bool = true | false;

const WEX: React.FC<any> = ({ submitWorkExp, workList }) => {
  const CustomRadio = withStyles({
    root: {
      color: '#262626',
      '&$checked': {
        color: '#262626'
      }
    },
    checked: {}
  })((props: RadioProps) => <Radio color="default" {...props} />);

  const today = new Date();
  const currYear = today.getFullYear();
  const [designation, setDesignation] = React.useState('');
  const [organizationName, setOrganizationName] = React.useState('');
  const [workedFromMonth, setWorkFromMonth] = React.useState('');
  const [workedFromYear, setWorkFromYear] = React.useState(0);
  const [workedTillMonth, setWorkTillMonth] = React.useState('');
  const [workedTillYear, setWorkTillYear] = React.useState(0);
  const [jobDesc, setJobDesc] = React.useState('');
  const [jobStatus, setJobStatus] = React.useState('');
  const [location, setLocation] = React.useState('');

  const newJob = {
    job_status: jobStatus,
    designation,
    organizationName,
    workedFrom: { month: workedFromMonth, year: workedFromYear },
    workedTill: { month: workedTillMonth, year: workedTillYear },
    description: jobDesc,
    location,
    avatar: 'Image Link'
  };

  let updatedJob = {
    job_status: '',
    designation: '',
    organizationName: '',
    workedFrom: { month: '', year: parseInt('') },
    workedTill: { month: '', year: parseInt('') },
    description: '',
    location: '',
    avatar: 'Image Link'
  };

  const workExperience = workList?.workExperience
    ? workList?.workExperience
    : {};
  // eslint-disable-next-line
  const [firstJob, setFirstJob] = React.useState(
    workList?.workExperience ? workExperience[0] : {}
  );

  const [shuffle, setShuffle] = React.useState({
    num: 1,
    item: {
      job_status: '',
      designation: '',
      organizationName: '',
      workedFrom: { month: '', year: parseInt('') },
      workedTill: { month: '', year: parseInt('') },
      description: '',
      location: '',
      avatar: 'Image Link'
    },
    index: 0
  });
  const [dropDown, setDropDown] = React.useState<Bool>(false);
  const [dropDownLocation, setDropDownLocation] = React.useState<Bool>(false);
  const [firstMDD, setFirstMDD] = React.useState<Bool>(false);
  const [secYDD, setSecYDD] = React.useState<Bool>(false);
  const [secMDD, setSecMDD] = React.useState<Bool>(false);
  // eslint-disable-next-line
  const [showEnd, setShowEnd] = React.useState<Bool>(true);
  const setInputHeight = React.useCallback((element, height) => {
    let target = element.target ? element.target : element;
    target.style.height = height;
    target.style.height = `${target.scrollHeight}px`;
  }, []);

  const getFirstPage = React.useCallback(
    (value: boolean) => {
      if (value) {
        return workExperience?.map((item: any, i: number) => {
          return (
            <ListItem
              key={i}
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <LeftSideItem>
                <p id="heading">{item.designation}</p>
                <p id="sub-heading">{item.organizationName}</p>
                <div id="data">
                  <p>
                    {item.workedFrom.year}-{' '}
                    {!item.workedTill.year
                      ? 'Till Now'
                      : `${item.workedTill.year}`}
                  </p>
                  <Icon
                    icon="dot"
                    size="0.25rem"
                    style={{ margin: '0px 10px', marginBottom: '32px' }}
                  />
                  <p>{item.job_status}</p>
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
                      num: 6,
                      item: item,
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
                    workExperience.splice(i, 1);
                    const yearsOfExp = 1;
                    const finalItem = {
                      experience: yearsOfExp,
                      workExperience: workExperience
                    };
                    submitWorkExp(finalItem);
                  }}
                />
              </RightSideItem>
              <YellowBtnDiv>
                <YellowBtn
                  onClick={() => {
                    setShuffle(() => ({
                      num: 2,
                      item: item,
                      index: i
                    }));
                  }}
                >
                  <Icon icon="modalAddBlack" size="1rem" /> Add a Job
                </YellowBtn>
              </YellowBtnDiv>
            </ListItem>
          );
        });
      }
      return (
        <NotAddedContainer>
          <div>
            <p>No Job Experiences added yet!</p>
          </div>
          <ImgDiv>
            <img
              src={WorkImg}
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
              onClick={() => {
                setShuffle((data) => ({
                  ...data,
                  num: 2
                }));
              }}
            >
              <Icon icon="modaladd" size="1rem" /> Add a Job
            </YellowBtn>
          </YellowBtnDiv>
        </NotAddedContainer>
      );
    },
    // eslint-disable-next-line
    [workList]
    // []
  );

  const updateData = (data: string) => {
    updatedJob.description = data;
  };

  const updateOrganization = (data: string) => {
    updatedJob.organizationName = data;
  };

  const updateDesignation = (data: string) => {
    updatedJob.designation = data;
  };

  const newDesignation = (data: string) => {
    setDesignation(data);
  };

  const newOrganization = (data: string) => {
    setOrganizationName(data);
  };

  const getComponent = React.useCallback(
    (value: number) => {
      switch (value) {
        case 1:
          return (
            <CarouselSection>
              {getFirstPage(workExperience?.length > 0)}
            </CarouselSection>
          );
        case 2:
          return (
            <div
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingBottom: '8px',
                height: '425px',
                overflowY: 'auto'
              }}
            >
              <Header>Designation *</Header>
              <SubData>
                Enter the position on which you are/were working
              </SubData>
              <NewDesignationField data={newJob} newData={newDesignation} />
              <SubHeader style={{ marginTop: '24px', marginBottom: '20px' }}>
                Employment type *
              </SubHeader>
              <FormControl>
                <RadioGroup
                  value={jobStatus}
                  onChange={(e) => setJobStatus(e.target.value)}
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
                    value="Internship"
                    control={<CustomRadio />}
                    label="Internship"
                  />
                </RadioGroup>
              </FormControl>
              <SubHeader style={{ marginTop: '24px' }}>Location *</SubHeader>
              <DropDownContainer
                style={{ marginTop: '16px' }}
                onClick={() => setDropDownLocation((prev) => !prev)}
              >
                <h1>{location ? location : 'Enter Location'}</h1>
                <Icon
                  icon={!dropDownLocation ? 'darkdownarrow' : 'uparrow'}
                  color="black"
                  size="20px"
                />
              </DropDownContainer>
              {dropDownLocation ? (
                <DropDown>
                  {countryList.map((desg) => (
                    <h1
                      key={desg}
                      onClick={(e) => {
                        setDropDownLocation(false);
                        setLocation(e.currentTarget.innerText.toString());
                      }}
                    >
                      {desg}
                    </h1>
                  ))}
                </DropDown>
              ) : null}
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 3:
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Organization *</Header>
              <SubData>
                Enter the organization you are working/worked for
              </SubData>
              <NewOrganizationField data={newJob} newData={newOrganization} />

              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 4:
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Work Duration</Header>
              <SubData>
                Select the Duration of time you worked for{' '}
                {organizationName ? organizationName : 'them'}
              </SubData>
              <div>
                <DateHeader>Worked from *</DateHeader>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '28px'
                  }}
                >
                  <SmallDropDownContainer
                    onClick={() => setDropDown((prev) => !prev)}
                  >
                    <h1>{workedFromYear ? workedFromYear : 'Year'}</h1>
                    <Icon
                      icon={!dropDown ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {dropDown ? (
                    <SmallDropDown>
                      {years(1931).map((y) => (
                        <h1
                          key={y}
                          onClick={(e) => {
                            setWorkFromYear(
                              parseInt(e.currentTarget.innerText)
                            );
                            setDropDown(false);
                          }}
                        >
                          {y}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}
                  <SmallDropDownContainer
                    onClick={() => setFirstMDD((prev) => !prev)}
                  >
                    <h1>{workedFromMonth ? workedFromMonth : 'Month'}</h1>
                    <Icon
                      icon={!firstMDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {firstMDD ? (
                    <SmallDropDown style={{ right: '40px' }}>
                      {monthNames.map((m) => (
                        <h1
                          key={m}
                          onClick={(e) => {
                            setWorkFromMonth(
                              e.currentTarget.innerText.toString()
                            );
                            setFirstMDD(false);
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
                    fontFamily: 'Roboto',
                    alignItems: 'center'
                  }}
                >
                  <DateHeader style={{ marginTop: '0px' }}>
                    Worked Till *
                  </DateHeader>
                  <CheckLabel className="form-group">
                    <input
                      type="checkbox"
                      id="html"
                      onChange={(e) => {
                        setShowEnd((prev) => !prev);
                        if (e.currentTarget.checked) {
                          setWorkTillMonth(monthNames[today.getMonth()]);
                          setWorkTillYear(currYear);
                        } else {
                          setWorkTillMonth('');
                          setWorkTillYear(0);
                        }
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
                      Currently Working
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
                    onClick={() => setSecYDD((prev) => !prev)}
                  >
                    <h1>{workedTillYear ? workedTillYear : 'Year'}</h1>
                    <Icon
                      icon={!secYDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {secYDD ? (
                    <SmallDropDown>
                      {years(1931).map((y) => (
                        <h1
                          key={y}
                          onClick={(e) => {
                            setWorkTillYear(
                              parseInt(e.currentTarget.innerText)
                            );
                            setSecYDD(false);
                          }}
                        >
                          {y}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}
                  <SmallDropDownContainer
                    onClick={() => setSecMDD((prev) => !prev)}
                  >
                    <h1>{workedTillMonth ? workedTillMonth : 'Month'}</h1>
                    <Icon
                      icon={!secMDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {secMDD ? (
                    <SmallDropDown style={{ right: '40px' }}>
                      {monthNames.map((m) => (
                        <h1
                          key={m}
                          onClick={(e) => {
                            setWorkTillMonth(
                              e.currentTarget.innerText.toString()
                            );
                            setSecMDD(false);
                          }}
                        >
                          {m}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}
                </div>
              </div>
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 5:
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Job Description *</Header>
              <SubData>
                Enter in brief the details about what you did and your role in
                the organization keeping it under the maximum character limit of
                200
              </SubData>
              <InputContainer
                placeholder="Write Job Description"
                name="description"
                value={jobDesc}
                onChange={(e) => {
                  setJobDesc(e.target.value);
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
                {200 - jobDesc?.length} characters left
              </p>
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 6:
          // eslint-disable-next-line
          updatedJob = shuffle.item;
          workList.workExperience = [...workExperience];
          workList.workExperience[shuffle.index] = updatedJob;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Designation *</Header>
              <SubData>
                Enter the position on which you are/were working
              </SubData>
              <UpdatedDesignation
                data={updatedJob}
                name="designation"
                updateData={updateDesignation}
              />
              <SubHeader style={{ marginTop: '24px', marginBottom: '20px' }}>
                Employment type *
              </SubHeader>
              <FormControl>
                <RadioGroup
                  value={updatedJob.job_status}
                  onChange={(e) => {
                    updatedJob.job_status = e.target.value;
                    setJobStatus(e.target.value);
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
                    value="Internship"
                    control={<CustomRadio />}
                    label="Internship"
                  />
                </RadioGroup>
              </FormControl>
              <SubHeader style={{ marginTop: '24px' }}>Location *</SubHeader>
              <DropDownContainer
                style={{ marginTop: '16px' }}
                onClick={() => setDropDownLocation((prev) => !prev)}
              >
                <h1>
                  {updatedJob.location ? updatedJob.location : 'Enter Location'}
                </h1>
                <Icon
                  icon={!dropDownLocation ? 'darkdownarrow' : 'uparrow'}
                  color="black"
                  size="20px"
                />
              </DropDownContainer>
              {dropDownLocation ? (
                <DropDown>
                  {countryList.map((desg) => (
                    <h1
                      key={desg}
                      onClick={(e) => {
                        setDropDownLocation(false);
                        updatedJob.location = e.currentTarget.innerText.toString();
                      }}
                    >
                      {desg}
                    </h1>
                  ))}
                </DropDown>
              ) : null}
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 7:
          updatedJob = shuffle.item;
          workList.workExperience = [...workExperience];
          workList.workExperience[shuffle.index] = updatedJob;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Organization *</Header>
              <SubData>
                Enter the organization you are working/worked for
              </SubData>
              <UpdatedOrganization
                data={updatedJob}
                name="organizationName"
                updateData={updateOrganization}
              />
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 8:
          updatedJob = shuffle.item;
          workList.workExperience = [...workExperience];
          workList.workExperience[shuffle.index] = updatedJob;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Work Duration</Header>
              <SubData>
                Select the Duration of time you worked for{' '}
                {updatedJob.organizationName
                  ? updatedJob.organizationName
                  : 'them'}
              </SubData>
              <div>
                <DateHeader>Worked from *</DateHeader>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '28px'
                  }}
                >
                  <SmallDropDownContainer
                    onClick={() => setDropDown((prev) => !prev)}
                  >
                    <h1>
                      {shuffle.item.workedFrom.year
                        ? shuffle.item.workedFrom.year
                        : 'Year'}
                    </h1>
                    <Icon
                      icon={!dropDown ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {dropDown ? (
                    <SmallDropDown>
                      {years(1931).map((y) => (
                        <h1
                          key={y}
                          onClick={(e) => {
                            updatedJob.workedFrom.year = parseInt(
                              e.currentTarget.innerText.toString()
                            );
                            setDropDown(false);
                          }}
                        >
                          {y}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}
                  <SmallDropDownContainer
                    onClick={() => setFirstMDD((prev) => !prev)}
                  >
                    <h1>
                      {shuffle.item.workedFrom.month
                        ? shuffle.item.workedFrom.month
                        : 'Month'}
                    </h1>
                    <Icon
                      icon={!firstMDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {firstMDD ? (
                    <SmallDropDown style={{ right: '40px' }}>
                      {monthNames.map((m) => (
                        <h1
                          key={m}
                          onClick={(e) => {
                            updatedJob.workedFrom.month = e.currentTarget.innerText.toString();
                            setFirstMDD(false);
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
                  <DateHeader style={{ marginTop: '0px' }}>
                    Worked Till *
                  </DateHeader>
                  <CheckLabel className="form-group">
                    <input
                      type="checkbox"
                      id="html"
                      onChange={(e) => {
                        setShowEnd((prev) => !prev);
                        if (e.currentTarget.checked) {
                          updatedJob.workedTill.month =
                            monthNames[today.getMonth()];
                          updatedJob.workedTill.year = currYear;
                        } else {
                          updatedJob.workedTill.month = '';
                          updatedJob.workedTill.year = 0;
                        }
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
                      Currently Working
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
                    onClick={() => setSecYDD((prev) => !prev)}
                  >
                    <h1>
                      {shuffle.item.workedTill.year
                        ? shuffle.item.workedTill.year
                        : 'Year'}
                    </h1>
                    <Icon
                      icon={!secYDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {secYDD ? (
                    <SmallDropDown>
                      {years(1931).map((y) => (
                        <h1
                          key={y}
                          onClick={(e) => {
                            updatedJob.workedTill.year = parseInt(
                              e.currentTarget.innerText.toString()
                            );
                            setSecYDD(false);
                          }}
                        >
                          {y}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}

                  <SmallDropDownContainer
                    onClick={() => setSecMDD((prev) => !prev)}
                  >
                    <h1>
                      {shuffle.item.workedTill.month
                        ? shuffle.item.workedTill.month
                        : 'Month'}
                    </h1>
                    <Icon
                      icon={!secMDD ? 'darkdownarrow' : 'uparrow'}
                      color="black"
                      size="10px"
                    />
                  </SmallDropDownContainer>
                  {secMDD ? (
                    <SmallDropDown style={{ right: '40px' }}>
                      {monthNames.map((m) => (
                        <h1
                          key={m}
                          onClick={(e) => {
                            updatedJob.workedTill.month = e.currentTarget.innerText.toString();
                            setSecMDD(false);
                          }}
                        >
                          {m}
                        </h1>
                      ))}
                    </SmallDropDown>
                  ) : null}
                </div>
              </div>
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        case 9:
          updatedJob = shuffle.item;
          workList.workExperience = [...workExperience];
          workList.workExperience[shuffle.index] = updatedJob;
          return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <Header>Job Description *</Header>
              <SubData>
                Enter in brief the details about what you did and your role in
                the organization keeping it under the maximum character limit of
                200
              </SubData>
              <UpdatedInput
                data={updatedJob}
                name="description"
                updateData={updateData}
              />
              <ImgDiv>
                <img
                  src={Programmer}
                  style={{ marginTop: '28px' }}
                  alt="Job Details"
                />
              </ImgDiv>
            </div>
          );
        default:
          return;
      }
    },
    [
      jobStatus,
      dropDown,
      dropDownLocation,
      jobDesc,
      firstMDD,
      getFirstPage,
      secMDD,
      secYDD,
      setInputHeight,
      workList?.length,
      shuffle,
      showEnd
    ]
    // []
  );
  return (
    <Col4 style={{ position: 'relative' }}>
      {getComponent(shuffle.num)}
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
                        designation.length > 0 &&
                        organizationName.length > 0 &&
                        workedFromMonth.length > 0 &&
                        workedFromYear !== 0 &&
                        workedTillMonth.length > 0 &&
                        workedTillYear !== 0 &&
                        jobDesc.length > 0 &&
                        jobStatus.length > 0 &&
                        location.length > 0
                      ) {
                        const yearsOfExp = 1;
                        if (!workList) {
                          const finalWorkExperience = [newJob];
                          const finalItem = {
                            experience: yearsOfExp,
                            workExperience: finalWorkExperience
                          };
                          submitWorkExp(finalItem);
                        } else {
                          const finalWorkExperience = [
                            ...workList.workExperience,
                            newJob
                          ];
                          const finalItem = {
                            experience: yearsOfExp,
                            workExperience: finalWorkExperience
                          };
                          submitWorkExp(finalItem);
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
        {shuffle.num >= 6 && (
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
                      const yearsOfExp = 1;
                      const updatedExperience = {
                        experience: yearsOfExp,
                        workExperience: [...workList.workExperience]
                      };
                      if (shuffle.index !== 0) {
                        updatedExperience.workExperience[0] = firstJob;
                      }
                      submitWorkExp(updatedExperience);
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

export default WEX;

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

const ImgDiv = styled.div`
  display: none;
  @media (max-width: 505px) {
    display: flex;
    justify-content: center;
  }
`;

const YellowBtnDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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
