import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../contexts/UserContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';

const StudiesFrom: React.FC = () => {
  const { portfolioData, setPortfolioData } = useContext(UserContext);

  const { getSkillsList, skillList } = useContext(SkillContext);

  const removeRow = (e: React.SyntheticEvent<EventTarget>, index: number) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.education.splice(index, 1);
    setPortfolioData(temp);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.education[index][event.target.name] =
      event.target.value;
    setPortfolioData(temp);
  };

  const nestedHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    section: string
  ) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.education[index][section][event.target.name] =
      event.target.value;
    setPortfolioData(temp);
  };

  const addcertifications = () => {
    let temp = { ...portfolioData };

    if (
      !temp ||
      !temp?.studiesAndCertification ||
      !temp?.studiesAndCertification?.education ||
      temp?.studiesAndCertification?.education?.length === 0
    ) {
      temp['studiesAndCertification'] = {
        education: [],
        certifications: temp?.studiesAndCertification?.certifications || []
      };

      temp.studiesAndCertification.education.push({
        courseName: '',
        specialization: '',
        instituteName: '',
        instituteLocation: '',
        institutionAvatar: '',
        courseType: '',
        start: { year: '', month: '' },
        end: { year: '', month: '' },
        description: ''
      });

      setPortfolioData(temp);
    }
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
      <Text size="1vw">Education</Text>
      <Button onClick={addcertifications} variant="contained" color="primary">
        Add Education
      </Button>
      {portfolioData &&
      portfolioData?.studiesAndCertification &&
      portfolioData?.studiesAndCertification?.education &&
      portfolioData?.studiesAndCertification?.education?.length > 0
        ? portfolioData?.studiesAndCertification?.education.map(
            (studies: any, index: number) => {
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
                      label="Course Name"
                      variant="outlined"
                      name="courseName"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.courseName || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Specialization"
                      variant="outlined"
                      name="specialization"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.specialization || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Course Type"
                      variant="outlined"
                      name="courseType"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.courseType || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                      select
                      SelectProps={{
                        native: true
                      }}
                    >
                      {['', 'Full Time', 'Part Time', 'Distance Learning'].map(
                        (type: string) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        )
                      )}
                    </TextField>
                  </Flex>
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Institute Name"
                      variant="outlined"
                      name="instituteName"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.instituteName || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Institute Location"
                      variant="outlined"
                      name="instituteLocation"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.instituteLocation || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                    <TextField
                      label="Institution Avatar Link"
                      variant="outlined"
                      name="institutionAvatar"
                      onChange={(e) => handleChange(e, index)}
                      value={studies?.institutionAvatar || ''}
                      style={{ marginRight: '2vw', width: '30%' }}
                    />
                  </Flex>
                  <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    value={studies?.description || ''}
                    style={{ marginRight: '2vw', width: '97.8%' }}
                  />
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Start Month"
                      variant="outlined"
                      name="month"
                      onChange={(e) => nestedHandleChange(e, index, 'start')}
                      value={studies?.start?.month || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="Start Year"
                      variant="outlined"
                      name="year"
                      type="number"
                      onChange={(e) => nestedHandleChange(e, index, 'start')}
                      value={studies?.start?.year || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                  </Flex>
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="End Month"
                      variant="outlined"
                      name="month"
                      onChange={(e) => nestedHandleChange(e, index, 'end')}
                      value={studies?.end?.month || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="End Year"
                      variant="outlined"
                      name="year"
                      type="number"
                      onChange={(e) => nestedHandleChange(e, index, 'end')}
                      value={studies?.end?.year || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                  </Flex>
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

export default StudiesFrom;

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
