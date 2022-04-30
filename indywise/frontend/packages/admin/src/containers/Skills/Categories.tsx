import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Text } from '@indywise/uikit';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../CommonFiles/Header';
import { SkillContext } from '../../contexts/SkillsContext';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Animations/LoadingSpinner/LoadingSpinner';

const useStyles = makeStyles(() => ({
  container: {
    border: '1px solid #f2aa41',
    padding: '3em',
    justifyContent: 'center'
  },
  root: { padding: '3em' }
}));

// Have to put filter and sort in this + pagination
const Categories: React.FC<RouteComponentProps> = ({ match, history }) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { getCategories, isFetchingSkill, categories } = useContext(
    SkillContext
  );

  useEffect(() => {
    if (!user) {
      history.push('/sign-in');
    }
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  if (isFetchingSkill) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid>
          {categories?.length &&
            categories.length > 0 &&
            categories?.map((cat: string) => (
              <>
                <Text type="body">{cat}</Text>
                <br />
              </>
            ))}
          {/* <VirtualizedTable /> */}
        </Grid>
      </div>
    </>
  );
};

export default Categories;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
