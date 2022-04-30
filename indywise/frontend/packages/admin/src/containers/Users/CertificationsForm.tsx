import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Text } from '@indywise/uikit';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../contexts/UserContext';
import { SkillContext } from '../../contexts/SkillsContext';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Remove from '@material-ui/icons/DeleteForeverRounded';

const CertificationsForm: React.FC = () => {
  const { portfolioData, setPortfolioData } = useContext(UserContext);

  const { getSkillsList, skillList } = useContext(SkillContext);

  const removeRow = (e: React.SyntheticEvent<EventTarget>, index: number) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.certifications.splice(index, 1);
    setPortfolioData(temp);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.certifications[index][event.target.name] =
      event.target.value;
    setPortfolioData(temp);
  };

  const nestedHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    section: string
  ) => {
    let temp = { ...portfolioData };
    temp.studiesAndCertification.certifications[index][section][
      event.target.name
    ] = event.target.value;
    setPortfolioData(temp);
  };

  const addcertifications = () => {
    let temp = { ...portfolioData };

    if (
      !temp ||
      !temp?.studiesAndCertification ||
      !temp?.studiesAndCertification?.certifications
    )
      temp['studiesAndCertification'] = {
        ...temp['education'],
        certifications: [
          {
            name: '',
            issuingOrganisation: '',
            recievedIn: { year: '', month: '' },
            description: ''
          }
        ]
      };

    if (temp?.studiesAndCertification?.certifications?.length > 0) {
      temp?.studiesAndCertification?.certifications.push({
        name: '',
        issuingOrganisation: '',
        recievedIn: { year: '', month: '' },
        description: ''
      });
    }

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
      <Text size="1vw">Certifications</Text>
      <Button onClick={addcertifications} variant="contained" color="primary">
        Add Certifications
      </Button>
      {portfolioData &&
      portfolioData?.studiesAndCertification &&
      portfolioData?.studiesAndCertification?.certification &&
      portfolioData?.studiesAndCertification?.certification?.length > 0
        ? portfolioData?.studiesAndCertification?.certification.map(
            (certficate: any, index: number) => {
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
                      label="Name"
                      variant="outlined"
                      name="name"
                      onChange={(e) => handleChange(e, index)}
                      value={certficate.name || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="Issuing Organisation"
                      variant="outlined"
                      name="issuingOrganisation"
                      onChange={(e) => handleChange(e, index)}
                      value={certficate.issuingOrganisation || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                  </Flex>
                  <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    value={certficate.description || ''}
                    style={{ marginRight: '2vw', width: '97.8%' }}
                  />
                  <Flex style={{ justifyContent: 'space-between' }}>
                    <TextField
                      label="Recieved In Month"
                      variant="outlined"
                      name="month"
                      type="number"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'recievedIn')
                      }
                      value={certficate.recievedIn.month || ''}
                      style={{ marginRight: '2vw', width: '50%' }}
                    />
                    <TextField
                      label="Recieved In Year"
                      variant="outlined"
                      name="year"
                      type="number"
                      onChange={(e) =>
                        nestedHandleChange(e, index, 'recievedIn')
                      }
                      value={certficate.recievedIn.year || ''}
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

export default CertificationsForm;

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
