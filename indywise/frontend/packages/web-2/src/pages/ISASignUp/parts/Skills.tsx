import * as React from 'react';
import { Text, Button } from '@indywise/uikit';
import styled from 'styled-components';
import { Input } from './BasicInfo';
import { Multiselect } from 'multiselect-react-dropdown';
import { validateIsaSkillsForm as validate } from '../../../utils/validateForm';
import FormFieldErrorMsg from '../../../components/FormFieldErrorMsg';

const skillsMap = [
  {
    skill: 'Full Stack Software Development'
  },
  {
    skill: 'Data Science and Data Analytics'
  },
  {
    skill: 'Blogging'
  },
  {
    skill: 'Digital Marketing'
  },
  {
    skill: 'Cloud/AWS/Digital Transformation'
  },
  {
    skill: 'Management Consulting'
  },
  {
    skill: 'Sales and Marketing'
  },
  {
    skill: 'Strategic Consulting'
  },
  {
    skill: 'Business Transformation'
  },
  {
    skill: 'Product Management'
  },
  {
    skill: 'Project Management'
  },
  {
    skill: 'Growth Strategy'
  },
  {
    skill: 'Startups and Business Success'
  },
  {
    skill: 'Personal Growth and Success Strategy'
  },
  {
    skill: 'Career Mentoring'
  },
  {
    skill: 'Interview and Comm. Skills'
  },
  {
    skill: 'General Management'
  },
  {
    skill: 'YouTube and Social Media'
  }
];

const multiselectStyle = {
  multiselectContainer: {
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#0C3559'
  },
  searchBox: {
    border: 'none',
    borderBottom: '1px solid #727272',
    borderRadius: '0',
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#0C3559',
    padding: '0',
    margin: '0'
  },
  inputField: {
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#0C3559',
    marginBottom: '0.5em'
  },
  chips: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: '#0C3559',
    border: '1px solid #66289D',
    background: '#F0E6F9'
  },
  optionContainer: {
    border: 'none',
    color: '#0C3559',
    boxShadow: '0px 15px 30px rgba(12, 53, 89, 0.2)',
    borderRadius: '0 0 0.75em 0.75em'
  },
  option: {
    color: '#0C3559',
    background: 'white'
  },
  groupHeading: {
    background: 'red'
  }
};

interface IList {
  skill: string;
}

export interface ISkillsForm {
  skills: string[] | string;
  otherSkills: string;
  anythingSpecial: string;
}

const Skills: React.FC<{ submitForm: Function }> = ({ submitForm }) => {
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [skills, setSkills] = React.useState<string[]>([]);
  const [otherSkills, setOtherSkills] = React.useState('');
  const [anythingSpecial, setAnythingSpecial] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<ISkillsForm>({} as ISkillsForm);

  const onSelect = (list: IList[]) => {
    const newSkillsArr = list.map((i) => i.skill);
    setSkills(newSkillsArr);
  };

  const onRemove = (list: IList[]) => {
    const newSkillsArr = list.map((i) => i.skill);
    setSkills(newSkillsArr);
  };

  const handleOtherSkillsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setOtherSkills(e.target.value);
  };

  const handleAnythingSpecialChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAnythingSpecial(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const values: ISkillsForm = {
      skills,
      otherSkills,
      anythingSpecial
    };

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    if (skills.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [skills]);

  React.useEffect(() => {
    const values: ISkillsForm = {
      skills,
      otherSkills,
      anythingSpecial
    };

    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <Container>
      <Text type="h3" size="2rem">
        Skills/Expertise (Step 3/3)
      </Text>
      <span id="subtitle">
        <Text type="body" size="1rem">
          Choose your expertise you want have mentoring on. You can select
          multiple skills/expertise.
        </Text>
      </span>

      <Form noValidate onSubmit={handleSubmit}>
        <MySelect>
          <Multiselect
            options={skillsMap}
            style={multiselectStyle}
            displayValue="skill"
            placeholder="Skill you want to be Mentored on *"
            closeIcon="cancel"
            onSelect={onSelect}
            onRemove={onRemove}
          />
        </MySelect>
        {errors.skills && <FormFieldErrorMsg text={errors.skills as string} />}

        <Input
          type="text"
          name="otherSkills"
          onChange={handleOtherSkillsChange}
          value={otherSkills}
          placeholder="Any other skills?"
        />

        <Input
          type="text"
          name="anythingSpecial"
          onChange={handleAnythingSpecialChange}
          value={anythingSpecial}
          placeholder="Anything special you want to share with us?"
        />

        <Button
          isDisabled={isButtonDisabled}
          text="Finish"
          onClick={handleSubmit}
        />
      </Form>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  #subtitle p {
    font-size: 1rem;
    margin-top: 0.5em;
    line-height: 1.5em;
  }
`;

const Form = styled.form`
  /* "Input" also has 2.25em and this was supposed to be 3em */
  margin-top: 0.75em;

  /* Submit button (To validate the form and if valid show next screen) */
  button {
    width: 100%;
    margin-top: 1.25em;
    height: fit-content;
    padding: 0.5em 0;
    border-radius: 0.5em;

    p {
      font-size: 1.25rem;
    }
  }
`;

const MySelect = styled.div`
  .searchBox::placeholder {
    font-size: 1em;
    color: #4b4b4b;
  }
`;
