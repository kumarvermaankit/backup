import React, { useEffect } from 'react';
import { PageView, initGA } from '../Tracking';
import MenteesListItem from './parts/MenteesListItem';
import Filters from './parts/Filters';
import Search from './parts/Search';
import styled from 'styled-components';
import { MenteesListContext } from '../../contexts/MenteesListContext';
import { Text } from '@indywise/uikit';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';

import { IMentee } from '../../interfaces/IMentee';
import { Helmet } from 'react-helmet';

const generateList = (rawMentees: IMentee[]) => {
  rawMentees.forEach((mentee) => {
    mentee.kpiValue = 0;
    if (mentee.KPIs?.length > 0) {
      const score =
        mentee.KPIs?.length > 0
          ? mentee.KPIs.reduce(
              (accum, item) => Number(accum) + Number(item.value),
              0
            )
          : 0;

      const finalScore = score / mentee.KPIs.length;
      mentee.kpiValue = Number(finalScore.toFixed(1));
    }
  });

  const certifiedInterns = () => {
    return rawMentees
      .filter((mentee: IMentee) => mentee.certified === true)
      .sort((a: IMentee, b: IMentee) => {
        return b.kpiValue - a.kpiValue;
      });
  };

  const remaining = () => {
    return rawMentees
      .filter((mentee: IMentee) => mentee.certified !== true)
      .sort((a: IMentee, b: IMentee) => {
        return b.kpiValue - a.kpiValue;
      });
  };

  // const arr = rawMentees.sort((a: IMentee, b: IMentee) => {
  //   if (a.certified) {
  //     return -1;
  //   }
  //   return b.kpiValue - a.kpiValue;
  // });

  return [...certifiedInterns(), ...remaining()] as IMentee[];
};

const MenteeList: React.FC = () => {
  const { getMentees, fetchingList } = React.useContext(MenteesListContext);
  const [menteesList, setMenteesList] = React.useState([] as Array<any>);

  const mentees = React.useMemo(() => {
    return getMentees();
  }, [getMentees]);

  useEffect(() => {
    initGA();
    PageView('Mentee List');
    document.title = 'Browse Mentees - IndyWise';
    // initList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMenteesList(generateList(mentees));
  }, [mentees]);

  if (fetchingList) {
    return (
      <>
        <Helmet>
          <title>Browse Mentees - IndyWise</title>
        </Helmet>
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Helmet>
          <title>Browse Mentees - IndyWise</title>
        </Helmet>
        <HeadingContainer>
          <Text type="hl"></Text>
        </HeadingContainer>
        <SearchFlex>
          <Text type="title">Talent Pool</Text>
          <Search />
        </SearchFlex>
        <SubHeadingFlex>
          <Text type="h2" size="20px" bold>
            Filters
          </Text>
          <Filters />
        </SubHeadingFlex>
        <ListWrapper>
          {menteesList.map((mentee: IMentee) => {
            return <MenteesListItem mentee={mentee} key={mentee.ID} />;
          })}
        </ListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MenteeList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 94vw;
  margin: 0 auto;
  user-select: none;

  @media (max-width: 530px) {
    width: 100vw;
  }
`;

const HeadingContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 5rem;
    line-height: 7.5rem;
    margin: 12.5rem 0 2.5rem 0;
  }

  @media (max-width: 530px) {
    h1 {
      margin: 6rem 0 2.5rem 0;
    }
  }
`;

const SearchFlex = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2vw;
    font-family: Mulish;
    align-self: center;
    color: #262626;
  }

  @media (max-width: 530px) {
    display: contents;
    justify-content: unset;

    h1 {
      font-size: 7vw;
    }
  }
`;

const SubHeadingFlex = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-right: 2.5rem;
  }

  @media (max-width: 530px) {
    flex-wrap: wrap;
    width: 100%;

    h2 {
      display: none;
    }
  }
`;

const ListWrapper = styled.div`
  margin: 1.5rem 0 5rem 0;
`;
