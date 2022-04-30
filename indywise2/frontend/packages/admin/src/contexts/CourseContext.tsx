import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';

export interface ICourseForm {
  createCourse: () => Promise<boolean>;
  updateCourse: (ID: string) => Promise<boolean>;
  getCourseList: () => Promise<boolean>;
  isCreatingCourse: boolean;
  isFetchingCourse: boolean;
  createCourseErr: string | null;
  removeRow: (event: any, index: number, type: string) => any;
  handleChange: (event: any) => void;
  handleValueChange: (event: any, index: number, type: string) => any;
  variables: any;
  handleValueChangeArr: (event: any, index: number, type: string) => any;
  addReview: () => any;
  selectedCourse: any;
  courseList: any;
  getCourse: (ID: string) => Promise<boolean>;
  enableCourse: (ID: string) => any;
  disableCourse: (ID: string) => any;
  setCourseForEdit: () => any;
  clearVariables: () => any;
  addRow: (event: any, type: string) => any;
  setVariable: (variable: any) => any;
}

export const CourseContext = React.createContext<ICourseForm>(
  {} as ICourseForm
);

export const useCourse = () => {
  return React.useContext(CourseContext);
};

const useProviderCourse = (): ICourseForm => {
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isFetchingCourse, setIsFetchingCourse] = useState(false);
  const [createCourseErr, setCreateCourseErr] = useState<string | null>(null);
  const [courseList, setCourseList] = useState<any>([]);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    reviews: [],
    skills: []
  });

  const filterCourseBeforeSubmit = (nv: any) => {
    Object.keys(nv).forEach((key) =>
      nv[key] === null ||
      nv[key] === '' ||
      nv[key] === 0 ||
      nv[key]?.length <= 0
        ? delete nv[key]
        : null
    );
    return nv;
  };

  const createCourse = async (variableData?: any, type?: string) => {
    const nv = JSON.parse(
      JSON.stringify(type === 'csv' ? variableData : variables)
    );

    const newV = filterCourseBeforeSubmit(nv);

    try {
      setIsCreatingCourse(true);
      const res = await Axios({
        url: '/courses/course',
        method: 'POST',
        data: newV
      });

      const resData: any = res.data;
      if (resData.course_created) {
        toast.success('Course created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${newV.title} course created`,
            changes: JSON.stringify(newV),
            service: 'courses'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateCourseErr(null);
      setIsCreatingCourse(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode?.startsWith('5')) {
          setCreateCourseErr(
            `Something didn't go quite as expected for ${nv?.title}!`
          );
          toast.error(
            `Something didn't go quite as expected for ${nv?.title}!`
          );
        } else if (statusCode?.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateCourseErr(e?.response?.data?.error?.message);
            toast.error(
              `${e?.response?.data?.error?.message} for ${nv?.title}`
            );
          }
        }
      }
      setIsCreatingCourse(false);

      return false;
    }
  };

  const updateCourse = async (ID: string) => {
    if (variables?.is_active === true || variables?.is_active === false) {
      delete variables.is_active;
    }
    if (variables?.ID) {
      delete variables.ID;
    }
    delete variables.created_at;
    delete variables.updated_at;
    delete variables.enabled_at;
    delete variables.disabled_at;
    setVariables(variables);

    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterCourseBeforeSubmit(nv);

    try {
      setIsCreatingCourse(true);
      const res = await Axios({
        url: `/courses/courses/${ID}`,
        method: 'PUT',
        data: newV
      });

      const resData: any = res.data;
      if (resData.course_updated) {
        toast.success('Course Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.title} course updated`,
            changes: JSON.stringify(newV),
            service: 'courses'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateCourseErr(null);
      setIsCreatingCourse(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateCourseErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateCourseErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingCourse(false);

      return false;
    }
  };

  const getCourseList = async () => {
    try {
      setIsFetchingCourse(true);
      const res = await Axios({
        url: '/courses/courses',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingCourse(false);
      setCourseList(resData.data.courses);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsFetchingCourse(false);

      return false;
    }
  };

  const addReview = () => {
    const { reviews } = variables;

    const array = (reviews as any) || [];
    array.push({
      name: '',
      place: '',
      review: '',
      subject: '',
      avatar: '',
      rating: 0
    });

    setVariables({
      ...variables,
      reviews: array
    });
  };

  const addRow = (e: React.SyntheticEvent<EventTarget>, type: string) => {
    const array = (variables[type] as Array<string>) || [];
    array.push('');

    setVariables({
      ...variables,
      [type]: array
    });
  };

  const removeRow = (
    e: React.SyntheticEvent<EventTarget>,
    index: number,
    type: string
  ) => {
    e.preventDefault();

    const array = (variables[type] as Array<string>) || [];
    array.splice(index, 1);

    setVariables({
      ...variables,
      [type]: array
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.persist();
    const {
      target: { name, value, type }
    } = event;
    const actValue =
      type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setVariables({
      ...variables,
      [name]: actValue
    });
  };

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    type: string
  ) => {
    event.persist();
    const {
      target: { value }
    } = event;
    const actValue =
      event.target.type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : value;

    setVariables({
      ...variables,
      [type]: variables[type].map((t: string, i: number) =>
        i !== index ? t : actValue
      )
    });
  };

  const handleValueChangeArr = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    type: string
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;

    setVariables({
      ...variables,
      [type]: variables[type].map((t: any, i: number) =>
        i !== index ? t : { ...t, [name]: value }
      )
    });
  };

  const getCourse = async (ID: string) => {
    try {
      setIsFetchingCourse(true);
      const res = await Axios({
        url: `/courses/courses-admin?ID=${ID}`,
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingCourse(false);
      setSelectedCourse(resData.data.course);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsFetchingCourse(false);

      return false;
    }
  };

  const setCourseForEdit = () => {
    if (selectedCourse) setVariables(selectedCourse);
  };

  const enableCourse = async (ID: string) => {
    try {
      setIsCreatingCourse(true);
      const res = await Axios({
        url: `/courses/courses/${ID}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.is_active) {
        toast.success('Course enabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${ID} course enabled`,
            changes: '-',
            service: 'courses'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateCourseErr(null);
      setIsCreatingCourse(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingCourse(false);

      return false;
    }
  };

  const disableCourse = async (ID: string) => {
    try {
      setIsCreatingCourse(true);
      const res = await Axios({
        url: `/courses/courses/${ID}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.course_disabled) {
        toast.success('Course disabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${ID} course disabled`,
            changes: '-',
            service: 'courses'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateCourseErr(null);
      setIsCreatingCourse(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingCourse(false);

      return false;
    }
  };

  const clearVariables = () => {
    setVariables({});
  };

  const setVariable = (variable: any) => {
    createCourse(variable, 'csv');
  };

  return {
    createCourse,
    isCreatingCourse,
    createCourseErr,
    removeRow,
    handleChange,
    handleValueChange,
    variables,
    getCourseList,
    isFetchingCourse,
    courseList,
    getCourse,
    enableCourse,
    disableCourse,
    selectedCourse,
    setCourseForEdit,
    clearVariables,
    updateCourse,
    setVariable,
    addRow,
    addReview,
    handleValueChangeArr
  };
};

export const CourseProvider: React.FC = ({ children }) => {
  const Course = useProviderCourse();
  return (
    <CourseContext.Provider value={Course}>{children}</CourseContext.Provider>
  );
};
