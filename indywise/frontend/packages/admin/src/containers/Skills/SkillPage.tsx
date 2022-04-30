import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from '../CommonFiles/Header';
import { SkillContext } from '../../contexts/SkillsContext';

const useStyles = makeStyles(() => ({
  container: {
    padding: '3em',
    justifyContent: 'space-between'
  },
  root: {
    padding: '0em 3em',
    justifyContent: 'space-between',
    display: 'block'
  },
  button: {
    marginRight: '2vw'
  }
}));

const SkillPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history
}) => {
  const classes = useStyles();
  const id = match.params.id;
  const {
    getSkill,
    enableSkill,
    isFetchingSkill,
    disableSkill,
    isCreatingSkill
  } = useContext(SkillContext);
  const [skill, setSkill] = useState<any>();

  const editSkill = (id: string) => {
    history.push(`/skill/edit/${id}`);
  };

  useEffect(() => {
    const data: any = getSkill(id);

    if (!data) {
      history.push('/list-skill');
    } else if (data) {
      setSkill(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, id]);

  const { name = '', category = '' } = skill || {};

  return (
    <>
      <Header />
      <Grid container className={classes.container}>
        <Wrapper>
          <Key>Name</Key>
          <Value>{name}</Value>
        </Wrapper>
        <Wrapper>
          <Key>Category</Key>
          <Value>{category}</Value>
        </Wrapper>
      </Grid>
      <Grid container className={classes.root}>
        <Button
          onClick={() => editSkill(id)}
          disabled={isCreatingSkill}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Edit
        </Button>
        <Button
          onClick={() => enableSkill(id)}
          disabled={isFetchingSkill}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Enable
        </Button>
        <Button
          onClick={() => disableSkill(id)}
          disabled={isFetchingSkill}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Disable
        </Button>
      </Grid>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default SkillPage;

const Wrapper = styled.div``;

const Key = styled.h3`
  font-family: 'Mulish';
`;

const Value = styled.h4`
  font-family: 'Mulish';
`;
