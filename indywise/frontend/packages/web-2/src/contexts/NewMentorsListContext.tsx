import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import filterMentorsList from '../utils/filter-mentors-list';
import { IMentorUpdated } from '../interfaces/IMentor';
// import { api } from '../api';
import axios from 'axios';
import Axios, { baseURL } from '../utils/Axios';

interface IState {
  // Returns the mentors list with or without filters applied
  getMentors: (all?: boolean) => any;

  getMentorByName: (name: string) => any;

  // Return the list of Mentors(max 5) which are related to a given Mentor
  getRelatedMentors: (id: string) => any;

  // Returns the data of a given Mentor
  getMentor: (id: string) => any;

  // Returns the current selected Price range in the Price filter
  getPrice: (currency?: string) => number[];

  // Returns the current seelcted Experience range in the Experience filter
  getExp: () => number[];

  //Returns the current rating
  getRating: () => number;

  //Returns the current free session consent
  getFreeSession: () => boolean;

  // Returns the list of `Skills` that is generated based on the Skills of
  // all the mentors
  getSelectedSkills: () => string[];

  getSelectedTier: () => string[];

  // Returns the current selected Skills in the Skills filter
  getAllSkills: () => any;

  //Returns Currency
  getCurrency: () => any;

  getExchangeRate: () => any;

  // Clears and resets the Price filter
  clearPrice: () => any;

  // Clears and reset the Experience filter
  clearExp: () => any;

  //Clears and reset the Rating filter
  clearRating: () => any;

  //Clears only sort filter
  onlyClearSortFilter: () => any;

  //Clear all parameters from the filter section
  clearAllFilters: (value: string) => any;

  // Updates the Price range selected in the Price filter but does not update
  // the Mentors list
  updatePrice: (value: number[]) => any;

  updateRating: (value: number) => any;

  updateFreeSession: (value: boolean) => any;

  // Updates the Experience range selected in the Experience filter but does not
  // update the Mentors list
  updateExp: (value: number[]) => any;

  //Dealing with checkboxes and selected skills to perform further operations
  updateSelectedSkills: (e: any) => any;

  updateSelectedTier: (e: any) => any;

  // Applies the Price range selected in the Price filter and update the
  // Mentors list
  updateSelectedPrice: () => any;

  updateSelectedRating: () => any;

  updateSelectedFreeSession: () => any;

  // Applies the Experience range selected in the Experience filter and update
  // the Mentors list
  updateSelectedExp: () => any;

  // Returns the list of Mentors based on the search query text
  searchMentors: (query: string | null) => any;

  //Sort Mentors By type of input
  sortMentors: (sortType: string | null) => any;

  //LOADS MENTORS VALUES ON PAGE LOAD IN STATE
  initList: () => any;

  // Clears and resets the Selected Skills List
  clearSelectedSkills: () => any;

  clearSelectedTier: () => any;

  defaultPriceRange: () => any;

  setPriceContext: (currency: string) => any;

  // sort modal config
  getSortModalConfig: () => string | null;
  updateSortModalConfig: (value: string | null) => any;

  setSelectedTierFn: (tier: any) => any;

  setFluidMentorsList: React.Dispatch<React.SetStateAction<IMentorUpdated[]>>;
  updatingFluidMentorsList: (
    _query?: string | null,
    sortType?: string | null
  ) => IMentorUpdated[];

  fluidMentorsList: IMentorUpdated[];

  fetchingList: boolean;

  tierFiltering: boolean;
}

const NewMentorsListContext = React.createContext({} as IState);

const NewMentorsListProviderWithoutRouter: React.FC<RouteComponentProps> = (
  props
) => {
  //___________________________________________________________________________________
  //IMPORTANT STATES

  //FOR LOADING
  const [fetchingList, setLoading] = React.useState(true);

  //FRESH MENTORS DATA LIST
  const [mentorsData, setMentorsData] = React.useState<any[]>([]);

  const [prevFluidMentorsList, setPrevFluidMentorsList] = React.useState<
    IMentorUpdated[]
  >([]);

  // sort modal state
  const [currentConfig, setCurrentConfig] = React.useState<string | null>(null);

  //MENTORS LIST THAT WILL BE UPDATED AFTER EVERY OPERATION
  const [fluidMentorsList, setFluidMentorsList] = React.useState<
    IMentorUpdated[]
  >([]);

  const location = props.history.location.pathname;

  //___________________________________________________________________________________
  //OPERATOR STATES

  //ALL SKILLS POSSIBLE
  const [allSkills, setAllSkills] = React.useState([]);

  //SELECTED SKILLS IN THE FILTER LIST
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);

  const [selectedTier, setSelectedTier] = React.useState<string[]>([]);

  //Default Price
  const [price, setPrice] = React.useState([0, 500]);

  //Default Years Of Experience
  const [yearsOfExp, setYearsOfExp] = React.useState([0, 20]);

  //Default Rating
  const [rating, setRating] = React.useState(1);

  const [freeSession, setFreeSession] = React.useState(false);

  //Query for search
  const [query, setQuery] = React.useState<string | null>(null);

  const [sortTypeState, setSortTypeState] = React.useState<string | null>(null);

  const [defaultPriceRangeState, setDefaultPriceRangeState] = React.useState<
    number[]
  >([0, 500]);

  const [currency, setCurrency] = React.useState<string>('usd');

  const [exchangeRate, setExchangeRate] = React.useState<number>(73);

  const [tierFiltering, setTierFiltering] = React.useState<boolean>(false);

  //___________________________________________________________________________________

  React.useEffect(() => {
    initList();

    const exchangeUpdate = async () => {
      await axios
        .get(
          'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=f7c04dfa3db28727e37e'
        )
        .then((res) => setExchangeRate(res.data.USD_INR));
    };
    exchangeUpdate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setPrevFluidMentorsList(sortMentorsByType(null, mentorsData));
    setFluidMentorsList(sortMentorsByType(null, mentorsData));

    setSelectedSkills([]);
    // setSelectedTier([]);

    setYearsOfExp([0, 20]);
    if (currency === 'usd') {
      setPrice([0, 500]);
    } else {
      setPrice([0, 40000]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, mentorsData]);

  //___________________________________________________________________________________

  // const paginatedFetch = async (next_token?: string): Promise<any> => {
  //   const response = await api.mentor.getMentorsPaginated(next_token);
  //   const mentors = response.data.data.mentors;
  //   const token = response.data.data.next_token;

  //   if (token) {
  //     const remaining = await paginatedFetch(token);
  //     return mentors.concat(remaining);
  //   } else {
  //     return mentors;
  //   }
  // };

  //LOADS MENTORS VALUES ON PAGE LOAD IN STATE AND Sort Skills alphabetically
  const initList = async () => {
    console.log('attempting paginated fetch');
    const res = await Axios.get(`${baseURL}/mentors/complete-active-mentors`);
    // const allMentors = await paginatedFetch();
    const allMentors = res.data.mentors;
    setMentorsData(allMentors);
    setFluidMentorsList(allMentors);
    // console.log('success');

    const generateSkillsList = (): [] => {
      const list: any = [];

      // Add all Mentor's skills to `list`
      for (let i = 0; i < allMentors?.length; i++) {
        for (let y = 0; y < allMentors[i]?.skills?.length; y++) {
          list.push(allMentors[i]?.skills[y]);
        }
      }

      // Sort the `list` alphabetically based on `Skill`
      list?.sort((a: string, b: string) => a.localeCompare(b));

      // Remove duplicate `Skills` from `allSKills` list and sorting them alphabetcally
      // const jsonObj = list.map(JSON.stringify);

      // const uniqueSet = new Set(jsonObj);
      // const finalList = Array.from((uniqueSet as unknown) as string).map(
      //   JSON.parse as any
      // );

      const finalList: any = [];
      for (let i = 0; i < list?.length; i++) {
        if (finalList.includes(list[i]?.toLowerCase()?.trim())) {
          continue;
        } else {
          finalList.push(list[i]?.toLowerCase()?.trim());
        }
      }

      function titleCase(str: any) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
      }

      finalList.forEach(
        (item: string, index: number) => (finalList[index] = titleCase(item))
      );

      return finalList as [];
    };

    sortMentorsByType();

    setAllSkills(generateSkillsList());
    setLoading(false);
  };

  //_________________________RETURNING FUNCTIONS________________________

  const getSortModalConfig = () => {
    return currentConfig;
  };

  const updateSortModalConfig = (value: string | null) => {
    setCurrentConfig(value);
  };

  //Performing operations on fluidMentorsList according to requirement
  const updatingFluidMentorsList = (
    _query: string | null = query,
    sortType: string | null = sortTypeState
  ) => {
    setPrevFluidMentorsList(fluidMentorsList);

    const common = [];

    if ((_query === null || _query === '') && sortType === null) {
      let array = mentorsData;
      common.push(...array);
    }

    if ((_query === null || _query === '') && sortType !== null) {
      let array;

      array = sortMentorsByType(sortType, prevFluidMentorsList);

      common.push(...array);
    }

    if (_query !== null && _query !== '' && sortType === null) {
      let array;
      array = filterMentorBySearch(_query, prevFluidMentorsList);
      common.push(...array);
    } else if (_query !== null && _query !== '' && sortType !== null) {
      const ifSearchApplied = filterMentorBySearch(
        _query,
        prevFluidMentorsList
      );

      const ifSortApplied = sortMentorsByType(sortType, prevFluidMentorsList);

      for (let i = 0; i < ifSearchApplied.length; i++) {
        for (let j = 0; j < ifSortApplied.length; j++) {
          if (ifSearchApplied[i] === ifSortApplied[j]) {
            common.push(ifSearchApplied[i]);
          }
        }
      }
    }

    if (currency === 'usd') {
      const newPrice = price.map((x) => x * exchangeRate);

      var updatedFluidMentorsList = common.filter((mentor) => {
        return filterMentorsList(
          mentor,
          newPrice,
          yearsOfExp,
          selectedSkills,
          selectedTier,
          rating,
          freeSession
        );
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-redeclare
      var updatedFluidMentorsList = common.filter((mentor) => {
        return filterMentorsList(
          mentor,
          price,
          yearsOfExp,
          selectedSkills,
          selectedTier,
          rating,
          freeSession
        );
      });
    }

    setFluidMentorsList(updatedFluidMentorsList);

    return updatedFluidMentorsList;
  };

  const filterMentorBySearch = (
    _query: string | null = null,
    listToSort: IMentorUpdated[] = mentorsData
  ) => {
    if (prevFluidMentorsList !== fluidMentorsList) {
      listToSort = mentorsData;
    }
    let mentors;

    if (_query === null || _query === '') {
      mentors = mentorsData;
    } else {
      mentors = listToSort.filter((mentor: any) => {
        return mentor.name.toLowerCase().includes(_query.toLowerCase());
      });
    }

    return mentors;
  };

  //RETURNS SORTED MENTORS LIST
  const sortMentorsByType = (
    sortType: string | null = null,
    listToSort: IMentorUpdated[] = mentorsData
  ) => {
    if (prevFluidMentorsList !== fluidMentorsList) {
      listToSort = mentorsData;
    }

    let sortedMentors: IMentorUpdated[] = [];

    if (listToSort) {
      if (sortType === 'asc') {
        sortedMentors = listToSort.sort(
          ({ sessions: previousPrice }, { sessions: currentPrice }) =>
            previousPrice?.sessionPrice - currentPrice?.sessionPrice
        );
      }

      if (sortType === 'desc') {
        sortedMentors = listToSort.sort(
          ({ sessions: previousPrice }, { sessions: currentPrice }) =>
            currentPrice?.sessionPrice - previousPrice?.sessionPrice
        );
      } else if (sortType === null || sortType === '') {
        sortedMentors = listToSort.sort(
          ({ portfolio: previousExp }, { portfolio: currentExp }) =>
            currentExp?.currentEmployment?.experience -
            previousExp?.currentEmployment?.experience
        );
      }
    }

    return sortedMentors;
  };

  // Related mentors are generated on the Basis if there are common Skills
  // between the given Mentor and other Mentors.
  // If there is not even a single Mentor that has a common Skill with the
  // given Mentor then we return the first 5 Mentors data.
  const getRelatedMentors = (username: string): IMentorUpdated[] => {
    const mentor = getMentor(username);

    // Skills of a given Mentor
    const mentorsSkills = mentor.skills;
    const mentorsTier = mentor.tier;

    // List of Mentors that are related to the given Mentor based on Skills
    const mentorsWithSameSkills = mentorsData.filter((mentor) => {
      return filterMentorsList(
        mentor,
        defaultPriceRangeState,
        [0, 20],
        mentorsSkills,
        mentorsTier,
        rating,
        freeSession
      );
    });

    let relatedMentors;

    const filteredMentorsWithSameSkills = mentorsWithSameSkills.filter(
      (mentor) => mentor.username !== username
    );

    if (filteredMentorsWithSameSkills?.length > 0) {
      relatedMentors = filteredMentorsWithSameSkills;
    } else {
      relatedMentors = mentorsData;
    }

    // Remove the given Mentor from the related mentors list as the give Mentor
    // is also a part of the `relatedMentors` as it obviously has its own Skills
    relatedMentors = relatedMentors.filter(
      (mentor) => mentor.username !== username
    );

    // Return max of 5 mentors.
    return relatedMentors.slice(0, 5);
  };

  const getMentorByName = (name: string): IMentorUpdated => {
    const filteredArray = mentorsData.filter((mentor) => mentor.name === name);
    const mentorData = filteredArray[0];
    return mentorData;
  };

  const getCurrency = () => {
    return currency;
  };

  // Returns the mentors list with or without filters applied
  const getMentors = (all?: boolean) => {
    if (all) {
      return mentorsData;
    }
    return fluidMentorsList;
  };

  const getMentor = (username: string): IMentorUpdated => {
    const filteredArray = mentorsData.filter(
      (mentor) => mentor.username === username
    );
    const mentorData = filteredArray[0];
    return mentorData;
  };

  const getSelectedSkills = (): string[] => {
    return selectedSkills;
  };

  const getSelectedTier = (): string[] => {
    return selectedTier;
  };

  const getAllSkills = () => {
    return allSkills;
  };

  const getRating = () => {
    return rating;
  };

  const getFreeSession = () => {
    return freeSession;
  };

  const getExp = () => {
    return yearsOfExp;
  };
  const getPrice = () => {
    return price;
  };

  const getExchangeRate = () => {
    return exchangeRate;
  };

  const defaultPriceRange = () => {
    return defaultPriceRangeState;
  };

  //_______________________________UPDATING FUNCTIONS__________________________________

  const setPriceContext = (currency: string = 'inr') => {
    switch (currency) {
      case 'inr':
        setPrice([0, 40000]);
        setDefaultPriceRangeState([0, 40000]);
        setCurrency('inr');
        break;
      case 'usd':
        setPrice([0, 500]);
        setDefaultPriceRangeState([0, 500]);
        setCurrency('usd');
        break;
    }
  };

  const sortMentors = (sortType: string | null = null) => {
    if (sortType === null) {
      setSortTypeState(null);
      // setSelectedSkills([]);
      if (currency === 'usd') {
        setPrice([0, 500]);
      } else {
        setPrice([0, 40000]);
      }

      setYearsOfExp([0, 20]);
      sortMentorsByType();
      setFluidMentorsList(updatingFluidMentorsList());
    }
    if (sortType !== null) {
      setSortTypeState(sortType);
      // setSelectedSkills([]);
      // setPrice([0, 20000]);
      // setYearsOfExp([0, 20]);
      sortMentorsByType(sortType);
      setFluidMentorsList(updatingFluidMentorsList(query, sortType));
    }
  };

  const searchMentors = (_query: string | null = null) => {
    if (_query === null || _query === '') {
      setQuery(null);
      setSortTypeState(null);
      // setSelectedSkills([]);
      if (currency === 'usd') {
        setPrice([0, 500]);
      } else {
        setPrice([0, 40000]);
      }

      setYearsOfExp([0, 20]);

      setFluidMentorsList(updatingFluidMentorsList(null));
    }
    if (_query !== null) {
      setQuery(_query);
      // setSelectedSkills([]);
      if (currency === 'usd') {
        setPrice([0, 500]);
      } else {
        setPrice([0, 40000]);
      }
      setYearsOfExp([0, 20]);
      filterMentorBySearch(_query);

      setFluidMentorsList(updatingFluidMentorsList(_query));
    }
  };

  //Updates the SelectedSkills list DOES NOT RETURN ANYTHING
  const updateSelectedSkills = (e: any) => {
    if (selectedSkills.includes(e.target.value)) {
      //Removing or Unchecking Selected Skill
      const index = selectedSkills.indexOf(e.target.value);
      const array = selectedSkills;
      array.splice(index, 1);

      setSelectedSkills(array);
    } else {
      //Adding Skill to Selected Skills and perform checked operation
      const array = selectedSkills;
      array.push(e.target.value);
      setSelectedSkills(array);
    }

    setFluidMentorsList(updatingFluidMentorsList());
  };

  const tierName = (name: string) => {
    let tier = '';

    switch (name) {
      case 'Gold Tier':
        tier = 'Tier 1';
        break;
      case 'Diamond Tier':
        tier = 'Tier 2';
        break;
      case 'Platinum Tier':
        tier = 'Tier 3';
        break;
      case 'Indyfluencer':
        tier = 'Tier X';
        break;
    }

    return tier;
  };

  const updateSelectedTier = async (e: any) => {
    if (selectedTier.includes(e?.target?.value)) {
      const index = selectedTier.indexOf(e?.target?.value);
      const array = selectedTier;
      array.splice(index, 1);
      setSelectedTier(array);
      setFluidMentorsList(updatingFluidMentorsList());
    } else {
      const array = selectedTier;
      array.push(e?.target?.value);
      setSelectedTier(array);
      setFluidMentorsList(updatingFluidMentorsList());
    }

    if (tierFiltering) {
      const filtered = mentorsData?.filter((f) =>
        f.tier.includes(tierName(selectedTier[0]))
      );
      setFluidMentorsList(filtered);
      setTierFiltering(false);
    }

    // if (selectedTier?.length > 0) {
    //   const res = await Axios.post(`${baseURL}/mentors/user-mentors-tier`, { tier: selectedTier });
    //   const tieredMentors = res.data.data.mentors;
    //   setMentorsData(tieredMentors);
    //   setFluidMentorsList(tieredMentors);
    //   console.log(tieredMentors);
    // } else {
    // }
  };

  // Clears and resets the Selected Skills List
  const clearSelectedSkills = () => {
    const array = selectedSkills;
    array.splice(0, array.length);
    setSelectedSkills(array);
    setFluidMentorsList(mentorsData);
  };

  const clearSelectedTier = () => {
    const array = selectedTier;
    array.splice(0, array.length);
    setSelectedTier(array);
    setFluidMentorsList(mentorsData);
  };

  const updatePrice = (value: number[]) => {
    setPrice(value);
  };

  const updateExp = (value: number[]) => {
    setYearsOfExp(value);
  };

  const updateRating = (value: number) => {
    setRating(value);
  };

  const updateFreeSession = (value: boolean) => {
    setFreeSession(value);
  };

  const clearRating = () => {
    setRating(1);
  };

  const clearExp = () => {
    setYearsOfExp([0, 20]);
  };

  const clearPrice = () => {
    if (currency === 'usd') {
      setPrice([0, 500]);
    } else {
      setPrice([0, 40000]);
    }
  };

  const updateSelectedPrice = () => {
    setFluidMentorsList(updatingFluidMentorsList());
  };

  const updateSelectedExp = () => {
    setFluidMentorsList(updatingFluidMentorsList());
  };

  const updateSelectedRating = () => {
    setFluidMentorsList(updatingFluidMentorsList());
  };

  const updateSelectedFreeSession = () => {
    setFluidMentorsList(updatingFluidMentorsList());
  };

  const onlyClearSortFilter = () => {
    setSortTypeState(null);
    setFluidMentorsList(prevFluidMentorsList);
  };

  const clearAllFilters = (value: string) => {
    if (value === 'sort') {
      setSortTypeState(null);
      setFluidMentorsList(sortMentorsByType(null, fluidMentorsList));
      setFluidMentorsList(updatingFluidMentorsList(query, null));
    } else if (value === 'skill') {
      clearSelectedSkills();
      updatingFluidMentorsList(query, sortTypeState);
    } else if (value === 'tier') {
      clearSelectedTier();
      updatingFluidMentorsList(query, sortTypeState);
    } else if (value === 'filter') {
      // setRating(1);
      // updateSelectedRating();

      setFreeSession(false);
      updateSelectedFreeSession();

      setYearsOfExp([0, 20]);
      updateSelectedExp();

      if (currency === 'usd') {
        setPrice([0, 500]);
      } else {
        setPrice([0, 40000]);
      }
      updateSelectedPrice();

      setFluidMentorsList(updatingFluidMentorsList());
    } else if (value === 'search') {
      setQuery(null);
      updatingFluidMentorsList(null, sortTypeState);
    }
  };

  const setSelectedTierFn = (tier: string) => {
    // updateSelectedTier(tier, true)
    setSelectedTier([tier]);
    setTierFiltering(true);
    // setFluidMentorsList(updatingFluidMentorsList());
  };

  //* sync state discarded code, implemented only in mobile view
  // React.useEffect(() => {
  //   console.log(price);
  //   // updateSelectedPrice();
  //   // setFluidMentorsList(updatingFluidMentorsList());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [price]);

  // React.useEffect(() => {
  //   console.log(rating);
  //   // updateSelectedRating();
  //   // setFluidMentorsList(updatingFluidMentorsList());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [rating]);

  // React.useEffect(() => {
  //   console.log(yearsOfExp);
  //   // updateSelectedExp();
  //   // setFluidMentorsList(updatingFluidMentorsList());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [yearsOfExp]);

  //___________________________________________________________________________________

  return (
    <NewMentorsListContext.Provider
      value={{
        getRelatedMentors,
        getMentorByName,
        getMentor,
        getMentors,
        getCurrency,
        getSelectedSkills,
        getAllSkills,
        getExp,
        getPrice,
        getExchangeRate,
        getRating,
        setPriceContext,
        setFluidMentorsList,
        updatingFluidMentorsList,
        clearExp,
        clearPrice,
        clearRating,
        clearAllFilters,
        onlyClearSortFilter,
        searchMentors,
        updateSelectedSkills,
        updateSelectedExp,
        getSortModalConfig,
        updateSortModalConfig,
        updateSelectedPrice,
        updateSelectedRating,
        updateExp,
        updatePrice,
        updateRating,
        defaultPriceRange,
        clearSelectedSkills,
        initList,
        sortMentors,
        fluidMentorsList,
        fetchingList,
        getSelectedTier,
        clearSelectedTier,
        updateSelectedTier,
        setSelectedTierFn,
        tierFiltering,
        getFreeSession,
        updateFreeSession,
        updateSelectedFreeSession
      }}
    >
      {props.children}
    </NewMentorsListContext.Provider>
  );
};

const NewMentorsListProvider = React.memo(
  withRouter(NewMentorsListProviderWithoutRouter)
);

export { NewMentorsListContext, NewMentorsListProvider };
