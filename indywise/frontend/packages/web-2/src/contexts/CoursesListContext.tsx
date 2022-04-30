import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import CoursesData from '../data/courses-data.json';
import { ICourse } from '../interfaces/ICourse';
import { getAllCourse } from './../api/courses';

interface ContextState {
  coursesList: ICourse[];

  // search toggle state
  showSearchForm: boolean;

  toggleSearchForm: () => void;

  //returns selected skills list for filter
  getSkills: () => string[];

  // returns all skills list
  getSkillsList: () => any[];

  //update selectedSkillsFilter array
  updateSkillsFilter: (e: any) => void;

  //clear selectedSkillsFilter
  clearSkillsFilter: () => void;

  // search query method
  searchCourses: (q: string) => void;
}

const CoursesListContext = React.createContext({} as ContextState);

export const defaultPriceRange = [0, 2000];

export const skillsInDemandList = [
  'Project Management',
  'Artificial Intelligence',
  'NLP',
  'Programming',
  'Video Editing',
  'Web design',
  'Java'
];

const CoursesListContextProviderWithoutRouter: React.FC<RouteComponentProps> = (
  props
) => {
  const [coursesData, setCoursesData] = React.useState<ICourse[] | []>([]);

  const [coursesList, setCoursesList] = React.useState<ICourse[] | []>([]);

  //? Courses filter uses UseEffect ,so in order to avoid running that function ,using 'isFirstRender' boolean;
  const isFirstRender = React.useRef(true);

  const [showSearchForm, setSearchForm] = React.useState(false);

  // selected skills for filter
  const [selectedSkillsFilter, setSelectedSkillsFilter] = React.useState<
    string[]
  >([]);

  // query for search
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const toggleSearchForm = () => {
    setSearchForm((prevState) => !prevState);
  };

  const getCoursesList = () => coursesData;

  const getSkillsList = () => {
    const skillL: any = [];
    coursesData.forEach((cour) => {
      cour?.skills.forEach((sk) => {
        skillL.push(sk);
      });
    });

    return skillL;
  };

  const getSkills = () => {
    return selectedSkillsFilter;
  };

  const clearSkillsFilter = () => {
    setSelectedSkillsFilter([]);

    // setCoursesList(coursesData); //! new change
  };

  const searchCourses = (query: string) => {
    setSearchQuery(query);
  };

  const updateSkillsFilter = (e: any) => {
    const selectedSkill: string = e.target.value;

    if (selectedSkillsFilter.includes(selectedSkill)) {
      const arr = selectedSkillsFilter.filter(
        (skill) => skill !== selectedSkill
      );

      setSelectedSkillsFilter(arr);
    } else {
      setSelectedSkillsFilter([...selectedSkillsFilter, selectedSkill]);
    }
  };

  const filterCoursesBySearch = (query: string, data: ICourse[]) => {
    return data.filter((course: ICourse) =>
      course.title.toLowerCase().includes(query)
    );
  };

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      let courses = getCoursesList();

      courses = [...filterCoursesBySearch(searchQuery, courses)];

      if (selectedSkillsFilter.length > 0) {
        const filteredCourseData = [];

        for (let course of courses) {
          const courseSkillsMatches = course.skills?.some((skill) => {
            return selectedSkillsFilter.includes(skill);
          });

          if (courseSkillsMatches) {
            filteredCourseData.push(course);
          }
          courses = [...filteredCourseData];
        }
      }

      setCoursesList(courses);
    }
    // eslint-disable-next-line
  }, [selectedSkillsFilter, searchQuery]);

  React.useEffect(() => {
    (async () => {
      const res = await getAllCourse();

      setCoursesData(res.data.data.courses);
      setCoursesList(res.data.data.courses);
    })();
  }, []);

  return (
    <CoursesListContext.Provider
      value={{
        coursesList,
        showSearchForm,
        toggleSearchForm,
        getSkills,
        getSkillsList,
        updateSkillsFilter,
        clearSkillsFilter,
        searchCourses
      }}
    >
      {props.children}
    </CoursesListContext.Provider>
  );
};

const CoursesListProvider = React.memo(
  withRouter(CoursesListContextProviderWithoutRouter)
);

export { CoursesListContext, CoursesListProvider };
