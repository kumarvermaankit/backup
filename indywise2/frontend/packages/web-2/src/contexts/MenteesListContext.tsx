import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import filterMenteesList from '../utils/filter-mentees-list';
import { IMentee, Skills } from '../interfaces/IMentee';
import { api } from '../api';

interface IState {
  initList: () => any;
  // Returns the mentees list with or without filters applied
  getMentees: () => any;

  // Returns the data of a given Mentee
  getMentee: (id: string) => any;

  // Returns the list of Mentees based on the search query text
  searchMentees: (query: string) => any;

  // Applies the WantsInternshipIn selected in the WantsInternshipIn filter and update the Mentees
  // list
  updateWantsInternshipInFilter: (e: any) => any;

  // Applies the Price range selected in the Price filter and update the
  // Mentees list
  updateLocationCityFilter: (e: any) => any;

  // Applies the Experience range selected in the Experience filter and update
  // the Mentees list
  updateExpFilter: () => any;

  // Returns the list of `WantsInternshipIn` that is generated based on the WantsInternshipIn of
  // all the mentees
  getWantsInternshipInList: () => any;

  // Returns the current selected WantsInternshipIn in the WantsInternshipIn filter
  getWantsInternshipIn: () => any;

  // Returns the current selected Price range in the Price filter
  getLocationCity: () => any;

  // Returns the current seelcted Experience range in the Experience filter
  getExp: () => any;

  // Clears and resets the WantsInternshipIn filter
  clearWantsInternshipIn: () => any;

  // Clears and resets the Price filter
  clearLocationCity: () => any;

  // Clears and reset the Experience filter
  clearExp: () => any;

  // Updates the Price range selected in the Price filter but does not update
  // the Mentees list
  getLocationCityList: () => any;

  filterCertifiedMentees: (cert: boolean) => any;

  // Updates the Experience range selected in the Experience filter but does not
  // update the Mentees list
  updateExp: (value: number[]) => any;

  // Dummy function to change graph color when a different metric is clicked
  changeGraph: (color: string) => any;

  fetchingList: boolean;

  graphColor: string;
}

const defaultState: IState = {
  initList: () => {},
  getMentees: () => {},
  getMentee: (id: string) => {},
  searchMentees: () => {},
  updateWantsInternshipInFilter: () => {},
  updateLocationCityFilter: () => {},
  updateExpFilter: () => {},
  getWantsInternshipInList: () => {},
  getWantsInternshipIn: () => {},
  getLocationCity: () => {},
  getExp: () => {},
  clearWantsInternshipIn: () => {},
  clearLocationCity: () => {},
  clearExp: () => {},
  getLocationCityList: () => {},
  updateExp: () => {},
  changeGraph: () => {},
  filterCertifiedMentees: (cert: boolean) => {},
  fetchingList: true,
  graphColor: ''
};

const MenteesListContext = React.createContext(defaultState);

export const defaultExpRange = [0, 20];

const MenteesListProviderWithoutRouter: React.FC<RouteComponentProps> = (
  props
) => {
  const [fetchingList, setLoading] = React.useState(true);
  const [menteesData, setMenteesData] = React.useState<IMentee[]>([]);
  const [menteesList, setMenteesList] = React.useState<IMentee[]>([]);
  const [query, setQuery] = React.useState('');
  const [graphColor, setColor] = React.useState('blue');

  const [wantsInternshipIn, setWantsInternshipIn] = React.useState<string[]>(
    []
  );
  const [locationCity, setLocationCity] = React.useState<string[]>([]);
  const [yearsOfExp, setYearsOfExp] = React.useState<number[]>(defaultExpRange);
  const [wantsInternshipInList, setWantsInternshipInList] = React.useState<
    Skills[]
  >([] as Skills[]);
  const [locationCityList, setLocationCityList] = React.useState<string[]>([]);
  const location = props.history.location.pathname;

  const initList = async () => {
    setLoading(true);
    const res = await api.mentee.GetMenteesList();
    const mentees = res.data.data.mentees;
    setMenteesData(mentees);
    setMenteesList(mentees);

    const generateWantsInternshipInList = (): Skills[] => {
      const list: any = [];

      // Add all Mentee's wantsInternshipIn to `list`
      for (let i = 0; i < mentees.length; i++) {
        for (let y = 0; y < mentees[i].wantsInternshipIn.length; y++) {
          list.push(mentees[i].wantsInternshipIn[y].skill);
        }
      }

      // Sort the `list` alphabetically based on `Skill`
      list.sort((a: string, b: string) => a.localeCompare(b));

      // Remove duplicate `WantsInternshipIn` from `list`
      // NOTE: The entire Object in the `list` should be same to be considered as
      // duplicate, that is, {skill: 'XX', category: 'YY'}. If `skill` is repeated
      // but the `category` is different then that Object will not be considered
      // as duplicate.
      const jsonObj = list.map(JSON.stringify);
      const uniqueSet = new Set(jsonObj);
      const finalList = Array.from((uniqueSet as unknown) as string).map(
        JSON.parse as any
      );

      return finalList as Skills[];
    };

    const generateLocationsList = (): [] => {
      let list: any = [];

      // Add all Mentee's locations to `list`
      list = mentees.map((d: IMentee) => d.locationCity);

      // Sort the `list` alphabetically based on `Skill`
      list.sort((a: string, b: string) => a.localeCompare(b));

      // Remove duplicate `WantsInternshipIn` from `list`
      // NOTE: The entire Object in the `list` should be same to be considered as
      // duplicate, that is, {skill: 'XX', category: 'YY'}. If `skill` is repeated
      // but the `category` is different then that Object will not be considered
      // as duplicate.
      const jsonObj = list.map(JSON.stringify);
      const uniqueSet = new Set(jsonObj);
      const finalList = Array.from((uniqueSet as unknown) as string).map(
        JSON.parse as any
      );

      return finalList as [];
    };

    setWantsInternshipInList(generateWantsInternshipInList());
    setLocationCityList(generateLocationsList());
    setLoading(false);
  };

  // React.useEffect(() => {
  //   initList();
  // }, []);

  // If we go to a Mentee card or leave the `Browse Mentees` also known as
  // Mentees list, we want to reset all the state so that if we go back to
  // Mentees list, we don't show the previously filtered list.
  React.useEffect(() => {
    setMenteesList(menteesData);
    setQuery('');
    setWantsInternshipIn([]);
    setLocationCity([]);
    setYearsOfExp(defaultExpRange);
  }, [location, menteesData]);

  const getMentees = () => {
    return menteesList;
  };

  const getMentee = (username: string): IMentee => {
    const filteredArray = menteesData.filter(
      (mentee) => mentee.username === username
    );
    const menteeData = filteredArray[0];
    return menteeData;
  };

  // Returns Mentees list based on the `_query` search query text
  const filterMenteesBySearchQuery = (_query?: string) => {
    let mentees;

    // If the `_query` is not empty/blank we filter the Mentees list
    if (_query) {
      mentees = menteesData.filter((mentee) => {
        return mentee.fullName.toLowerCase().includes(_query.toLowerCase());
      });
    } else if (_query === '') {
      // If the `_query` is blank/empty we reset the Mentees list
      mentees = menteesData;
    } else {
      mentees = menteesData.filter((mentee) => {
        return mentee.fullName.toLowerCase().includes(query.toLowerCase());
      });
    }

    return mentees;
  };

  // This function first filters the Mentees list by checking if there is a
  // search `query` text and then applies the other three filters(wantsInternshipIn, price,
  // experience) and then returns the filtered Mentees list.
  const getUpdatedMenteesList = (): IMentee[] => {
    let mentees;
    mentees = filterMenteesBySearchQuery();

    const updatedMenteesList = mentees.filter((mentee) => {
      return filterMenteesList(
        mentee,
        locationCity,
        yearsOfExp,
        wantsInternshipIn
      );
    });

    return updatedMenteesList;
  };

  const searchMentees = (query: string) => {
    setQuery(query);

    // We reset these arrays because when a new a new search query is executed,
    // the user expects the filters to be reset and then the user will apply
    // filters on the search query result.
    setWantsInternshipIn([]);
    setLocationCity([]);
    setYearsOfExp(defaultExpRange);

    const filteredList = filterMenteesBySearchQuery(query);
    setMenteesList(filteredList);
  };

  const filterCertifiedMentees = (cert: boolean) => {
    const updated = getUpdatedMenteesList();

    if (cert) {
      const certified = updated.filter((mentee) => mentee.certified);
      setMenteesList(certified);
    } else {
      setMenteesList(updated);
    }
  };

  const updateWantsInternshipInFilter = (e: any) => {
    if (wantsInternshipIn.includes(e.target.value)) {
      // remove
      const index = wantsInternshipIn.indexOf(e.target.value);
      const array = wantsInternshipIn;
      array.splice(index, 1);
      setWantsInternshipIn(array);
    } else {
      // add
      const array = wantsInternshipIn;
      array.push(e.target.value);
      setWantsInternshipIn(array);
    }

    setMenteesList(getUpdatedMenteesList());
  };

  const updateExp = (value: number[]) => {
    setYearsOfExp(value);
  };

  const updateLocationCityFilter = (e: any) => {
    if (locationCity.includes(e.target.value)) {
      // remove
      const index = locationCity.indexOf(e.target.value);
      const array = locationCity;
      array.splice(index, 1);
      setLocationCity(array);
    } else {
      // add
      const array = locationCity;
      array.push(e.target.value);
      setLocationCity(array);
    }

    setMenteesList(getUpdatedMenteesList());
  };

  const updateExpFilter = () => {
    setMenteesList(getUpdatedMenteesList());
  };

  const getWantsInternshipInList = () => {
    return wantsInternshipInList;
  };

  const getLocationCityList = () => {
    return locationCityList;
  };

  const getWantsInternshipIn = () => {
    return wantsInternshipIn;
  };

  const getLocationCity = () => {
    return locationCity;
  };

  const getExp = () => {
    return yearsOfExp;
  };

  const clearWantsInternshipIn = () => {
    const array = wantsInternshipIn;
    array.splice(0, array.length);
    setWantsInternshipIn(array);
    setMenteesList(getUpdatedMenteesList());
  };

  const clearLocationCity = () => {
    const array = locationCity;
    array.splice(0, array.length);
    setLocationCity(array);
    setMenteesList(getUpdatedMenteesList());
  };

  const clearExp = () => {
    const array = yearsOfExp;
    array.splice(0, array.length);
    array.push(...defaultExpRange);
    setYearsOfExp(array);
  };

  const changeGraph = (color: string) => {
    setColor(color);
  };

  return (
    <MenteesListContext.Provider
      value={{
        initList,
        getMentees,
        getMentee,
        searchMentees,
        getExp,
        updateExpFilter,
        clearExp,
        updateExp,
        getWantsInternshipInList,
        getWantsInternshipIn,
        updateWantsInternshipInFilter,
        clearWantsInternshipIn,
        getLocationCity,
        getLocationCityList,
        clearLocationCity,
        updateLocationCityFilter,
        filterCertifiedMentees,
        fetchingList,
        changeGraph,
        graphColor
      }}
    >
      {props.children}
    </MenteesListContext.Provider>
  );
};

const MenteesListProvider = withRouter(MenteesListProviderWithoutRouter);

export { MenteesListContext, MenteesListProvider };
