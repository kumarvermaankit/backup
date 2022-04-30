import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../contexts/UserContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Chip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';
import InputLabel from '@material-ui/core/InputLabel';

const WorkExperienceFrom: React.FC = () => {
  const { portfolioData, setPortfolioData } = useContext(UserContext);

  const { getSkillsList, skillList } = useContext(SkillContext);

  const removeRow = (e: React.SyntheticEvent<EventTarget>, index: number) => {
    let temp = { ...portfolioData };
    temp.workExperience.workExperience.splice(index, 1);
    setPortfolioData(temp);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    let temp = { ...portfolioData };
    temp.workExperience.workExperience[index][event.target.name] =
      event.target.value;
    setPortfolioData(temp);
  };

  const nestedHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    section: string
  ) => {
    let temp = { ...portfolioData };
    temp.workExperience.workExperience[index][section][event.target.name] =
      event.target.value;
    setPortfolioData(temp);
  };

  const handleChangeSkills = (
    event: React.ChangeEvent<{ value: unknown }>,
    index: number
  ) => {
    let skills = event.target.value as string[];
    let temp = { ...portfolioData };
    temp.workExperience.workExperience[index].skills = skills;
    setPortfolioData(temp);
  };

  const addWorkExperience = () => {
    let temp = { ...portfolioData };
    if (!temp || !temp?.workExperience)
      temp['workExperience'] = {
        workExperience: []
      };

    temp.workExperience.workExperience.push({
      designation: '',
      description: '',
      location: '',
      job_status: '',
      organizationName: '',
      workedFrom: { year: '', month: '' },
      workedTill: { year: '', month: '' },
      skills: []
    });
    setPortfolioData(temp);
  };

  useEffect(() => {
    if (!skillList || skillList?.length === 0) getSkillsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      style={{
        background: '#f0f0f0',
        padding: '24px',
        margin: '10px 0',
        borderRadius: '8px'
      }}
    >
      <Text size="1vw">Work Experience</Text>
      <Button onClick={addWorkExperience} variant="contained" color="primary">
        Add Work Experience
      </Button>
      {portfolioData &&
      portfolioData?.workExperience &&
      portfolioData?.workExperience?.workExperience
        ? portfolioData?.workExperience?.workExperience.map(
            (work: any, index: number) => {
              return (
                <Container key={index}>
                  <Flex>
                    <Index>
                      <span>{index + 1}</span>
                    </Index>
                    <Tooltip title="Remove skill">
                      <Remove onClick={(e) => removeRow(e, index)} />
                    </Tooltip>
                  </Flex>
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Job Status"
                      variant="outlined"
                      name="job_status"
                      onChange={(e) => handleChange(e, index)}
                      value={work.job_status || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Designation"
                      variant="outlined"
                      name="designation"
                      onChange={(e) => handleChange(e, index)}
                      value={work.designation || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Location"
                      variant="outlined"
                      name="location"
                      onChange={(e) => handleChange(e, index)}
                      value={work.location || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Organization Name"
                      variant="outlined"
                      name="organizationName"
                      onChange={(e) => handleChange(e, index)}
                      value={work.organizationName || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                  </Flex>
                  <TextField
                    label="Discription"
                    variant="outlined"
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    value={work.description || ''}
                    style={{ marginRight: '2vw', width: '97.8%' }}
                  />
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Worked From Month"
                      variant="outlined"
                      name="month"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'workedFrom')
                      }
                      value={work.workedFrom.month || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="Worked From Year"
                      variant="outlined"
                      name="year"
                      type="number"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'workedFrom')
                      }
                      value={work.workedFrom.year || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                  </Flex>
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Worked Till Month"
                      variant="outlined"
                      name="month"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'workedTill')
                      }
                      value={work.workedTill.month || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="Worked Till Year"
                      variant="outlined"
                      name="year"
                      type="number"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'workedTill')
                      }
                      value={work.workedTill.year || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                  </Flex>
                  <InputLabel id="selectSkills">Select Skills</InputLabel>
                  <Select
                    multiple
                    labelId="selectSkills"
                    value={work.skills || []}
                    onChange={(e) => handleChangeSkills(e, index)}
                    placeholder="Select Skills"
                    style={{
                      width: '100%',
                      margin: '2.25em 0 0 0',
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}
                    renderValue={(selected) => (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          marginBottom: '0'
                        }}
                      >
                        {(selected as string[]).map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            style={{
                              marginBottom: '0',
                              margin: '0px 2px',
                              display: 'flex'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {skillList.map((skill: any) => {
                      return (
                        <MenuItem key={skill.name} value={skill.name}>
                          {skill.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Container>
              );
            }
          )
        : null}
      {/* <Button
          // onClick={() => updatePortfolioBasicDetails(id || '', basicDetails)}
          onClick={() => console.log(portfolioData)}
          variant="contained"
          color="secondary"
        >
          Update workExperience
      </Button> */}
    </Container>
  );
};

export default WorkExperienceFrom;

const Container = styled.div`
  margin: 5vh;

  p {
    margin-bottom: 2vh;
  }

  button {
    margin-top: 2vh;
    margin-right: 2vw;
  }
`;

const Flex = styled.div`
  display: flex !important;
  margin: 20px 0;
`;

const Index = styled.div`
  width: 2vw;
  text-align: center;
  align-self: center;
  background: #0c3559;

  span {
    color: white;
    font-family: Mulish;
  }
`;
