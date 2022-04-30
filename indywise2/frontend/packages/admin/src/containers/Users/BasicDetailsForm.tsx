import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../contexts/UserContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Chip } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const BasicDetailsForm: React.FC = () => {
  const { portfolioData, setPortfolioData } = useContext(UserContext);
  const { getSkillsList, skillList } = useContext(SkillContext);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;
    let temp = { ...portfolioData };
    if (!temp || !temp?.basicDetails || !temp?.basicDetails?.location)
      temp = {
        basicDetails: {
          location: {
            city: '',
            country: ''
          },
          ...temp?.basicDetails
        }
      };
    temp.basicDetails.location[name] = value;
    setPortfolioData(temp);
  };

  const handleChangeSkills = (event: React.ChangeEvent<{ value: unknown }>) => {
    let skills = event.target.value as string[];
    let temp = { ...portfolioData };
    if (!temp || !temp?.basicDetails)
      temp = {
        basicDetails: {
          skills: []
        }
      };
    temp.basicDetails.skills = skills;
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
      <Text size="1.5vw">Basic Details</Text>
      <Flex>
        <TextField
          label="City"
          variant="outlined"
          name="city"
          onChange={(e) => handleChange(e)}
          value={portfolioData?.basicDetails?.location?.city || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
        <TextField
          label="Country"
          variant="outlined"
          name="country"
          onChange={(e) => handleChange(e)}
          value={portfolioData?.basicDetails?.location?.country || ''}
          style={{ marginRight: '2vw', width: '50%' }}
        />
      </Flex>
      <br />
      <Text size="1.5vw">Select skills</Text>
      <Select
        multiple
        value={portfolioData?.basicDetails?.skills || []}
        onChange={(e) => handleChangeSkills(e)}
        placeholder="Select Skills"
        style={{
          width: '100%',
          margin: '2.25em 0 0 0',
          fontSize: '16px',
          lineHeight: '24px'
        }}
        renderValue={(selected) => (
          <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0' }}>
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
            <MenuItem key={skill?.name} value={skill?.name}>
              {skill?.name}
            </MenuItem>
          );
        })}
      </Select>
      {/* <Button
          // onClick={() => updatePortfolioBasicDetails(id || '', basicDetails)}
          onClick={() => console.log(portfolioData)}
          variant="contained"
          color="secondary"
        >
          Update Basic Details
      </Button> */}
    </Container>
  );
};

export default BasicDetailsForm;

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
`;
