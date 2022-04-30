import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import {
  IMentorForMentee,
  IMenteeCourse,
  IReview
} from '../interfaces/IUpdatedMentee';

export interface IMenteeForm {
  updateMentee: (id: string) => Promise<boolean>;
  updateMentorsMentee: (id: string) => Promise<boolean>;
  updateReviews: (id: string) => Promise<boolean>;
  updateCourses: (id: string) => Promise<boolean>;
  getMenteesList: () => Promise<boolean>;
  isCreatingMentee: boolean;
  isFetchingMentee: boolean;
  createMenteeErr: string | null;
  addReviews: () => any;
  addCourses: () => any;
  addMentors: () => any;
  removeRow: (event: any, index: number, type: string) => any;
  handleChange: (event: any) => void;
  handleValueChange: (event: any, index: number, type: string) => any;
  variables: any;
  selectedMentee: any;
  menteeList: any;
  getMentee: (id: string) => any;
  enableMentee: (id: string) => any;
  disableMentee: (id: string) => any;
  setMenteeForEdit: () => any;
  clearVariables: () => any;
  setVariable: (variable: any) => any;
}

export const UpdatedMenteeContext = React.createContext<IMenteeForm>(
  {} as IMenteeForm
);

export const useMentee = () => {
  return React.useContext(UpdatedMenteeContext);
};

const useProviderMentee = (): IMenteeForm => {
  const [isCreatingMentee, setIsCreatingMentee] = useState(false);
  const [isFetchingMentee, setIsFetchingMentees] = useState(false);
  const [createMenteeErr, setCreateMenteeErr] = useState<string | null>(null);
  const [menteeList, setMenteeList] = useState<any>([]);
  const [selectedMentee, setSelectedMentee] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    mentors: [],
    menteeCourses: [],
    reviews: [],
    menteePortfolio: {},
    certified: false
  });

  const filterMenteeBeforeSubmit = (nv: any) => {
    // Object.keys(nv).forEach((key) =>
    //     nv[key] === null ||
    //         nv[key] === '' ||
    //         nv[key] === 0 ||
    //         nv[key]?.length <= 0
    //         ? delete nv[key]
    //         : null
    // );

    // nv['mentorsList'] = [];
    // nv['reviews'] = [];
    // nv['menteeCourses'] = [];
    nv['menteePortfolio'] = {
      career: { careerObjective: '' },
      profiles: [],
      projects: []
    };

    if (nv?.mentors?.length > 0) {
      const nvv = nv.mentors.map((ed: any) => ({
        mentorFrom:
          typeof ed?.mentorFrom === 'string'
            ? {
                year: ed?.mentorFrom?.split('-')[0],
                month: ed?.mentorFrom?.split('-')[1],
                day: ed?.mentorFrom?.split('-')[2]
              }
            : ed?.mentorFrom,
        mentorTill:
          typeof ed?.mentorTill === 'string'
            ? {
                year: ed?.mentorTill?.split('-')[0],
                month: ed?.mentorTill?.split('-')[1],
                day: ed?.mentorTill?.split('-')[2]
              }
            : ed?.mentorTill,
        mentorID: ed.mentorID
      }));
      nv['mentors'] = nvv;
    }

    return nv;
  };

  const updateMentee = async (id: string) => {
    if (variables?.ID) {
      delete variables.ID;
    }
    delete variables.created_at;
    delete variables.updated_at;
    delete variables.enabled_at;
    delete variables.disabled_at;
    delete variables.email;
    setVariables(variables);

    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: `/mentees/mentees/admin/${id}`,
        method: 'PUT',
        data: newV
      });

      const resData: any = res.data;
      if (resData.mentee_updated) {
        toast.success('Mentee Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.email} mentee updated`,
            changes: JSON.stringify(newV),
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMenteeErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMenteeErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentee(false);

      return false;
    }
  };

  const updateMentorsMentee = async (id: string) => {
    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const mentorsList = newV?.mentors || [];
      const res = await Axios({
        url: `/mentees/mentees/mentorslist/${id}`,
        method: 'PUT',
        data: { mentorsList }
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Mentee Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.email} mentee's mentors list updated`,
            changes: JSON.stringify(newV),
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMenteeErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMenteeErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentee(false);

      return false;
    }
  };

  const updateReviews = async (id: string) => {
    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const reviews = newV?.reviews || [];
      const res = await Axios({
        url: `/mentees/mentees/reviews/${id}`,
        method: 'PUT',
        data: { reviews }
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Mentee Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.email} mentee's reviews updated`,
            changes: JSON.stringify(newV),
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMenteeErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMenteeErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentee(false);

      return false;
    }
  };

  const updateCourses = async (id: string) => {
    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const menteeCourses = newV?.menteeCourses || [];
      const res = await Axios({
        url: `/mentees/mentees/courses/${id}`,
        method: 'PUT',
        data: { menteeCourses }
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Mentee Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.email} mentee's courses updated`,
            changes: JSON.stringify(newV),
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMenteeErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMenteeErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentee(false);

      return false;
    }
  };

  const getMenteesList = async () => {
    try {
      setIsFetchingMentees(true);
      const res = await Axios({
        url: '/mentees/mentees-new/list',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentees(false);
      setMenteeList(resData.data.menteesRawData.mentees);

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
      setIsFetchingMentees(false);

      return false;
    }
  };

  const addReviews = () => {
    const { reviews } = variables;

    const array = (reviews as IReview[]) || [];
    array.push({
      mentorID: '',
      name: '',
      place: '',
      subject: '',
      review: '',
      rating: 0,
      avatar: ''
    });

    setVariables({
      ...variables,
      reviews: array
    });
  };

  const addCourses = () => {
    const { menteeCourses } = variables;

    const array = (menteeCourses as IMenteeCourse[]) || [];
    array.push({ courseID: '', status: '' });

    setVariables({
      ...variables,
      menteeCourses: array
    });
  };

  const addMentors = () => {
    const { mentors } = variables;

    const array = (mentors as IMentorForMentee[]) || [];
    array.push({
      mentorID: '',
      mentorFrom: { year: 0, month: '', day: 0 },
      mentorTill: { year: 0, month: '', day: 0 }
    });

    setVariables({
      ...variables,
      mentors: array
    });
  };

  const removeRow = (
    e: React.SyntheticEvent<EventTarget>,
    index: number,
    type: string
  ) => {
    e.preventDefault();

    const array = variables[type] as
      | IMenteeCourse[]
      | IMentorForMentee[]
      | IReview[];
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
      target: { name, value }
    } = event;
    const actValue =
      event.target.type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : value;

    setVariables({
      ...variables,
      [type]: variables[type].map((t: any, i: number) =>
        i !== index ? t : { ...t, [name]: actValue }
      )
    });
  };

  const getMentee = (id: string) => {
    const filteredArray = menteeList.filter((user: any) => user.ID === id);
    const menteeData = filteredArray[0];
    setSelectedMentee(menteeData);
    return menteeData;
  };

  const setMenteeForEdit = () => {
    if (selectedMentee) setVariables(selectedMentee);
  };

  const enableMentee = async (id: string) => {
    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: `/mentees/mentees/certify/${id}`,
        method: 'PUT',
        data: {}
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Mentee certified successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${id} mentee certified`,
            changes: '-',
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

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
      setIsCreatingMentee(false);

      return false;
    }
  };

  const disableMentee = async (id: string) => {
    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: `/mentees/mentees/uncertify/${id}`,
        method: 'PUT',
        data: {}
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Mentee uncertified successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${id} mentee uncertified`,
            changes: '-',
            service: 'mentees'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMenteeErr(null);
      setIsCreatingMentee(false);

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
      setIsCreatingMentee(false);

      return false;
    }
  };

  const clearVariables = () => {
    setVariables({
      skilledIn: [],
      wantsInternshipIn: [],
      KPIs: [],
      certified: false
    });
  };

  const setVariable = (variable: any) => {};

  return {
    isCreatingMentee,
    createMenteeErr,
    addReviews,
    addCourses,
    addMentors,
    removeRow,
    handleChange,
    handleValueChange,
    variables,
    getMenteesList,
    isFetchingMentee,
    menteeList,
    getMentee,
    enableMentee,
    disableMentee,
    selectedMentee,
    setMenteeForEdit,
    clearVariables,
    updateMentee,
    updateReviews,
    updateCourses,
    updateMentorsMentee,
    setVariable
  };
};

export const UpdatedMenteeProvider: React.FC = ({ children }) => {
  const mentee = useProviderMentee();
  return (
    <UpdatedMenteeContext.Provider value={mentee}>
      {children}
    </UpdatedMenteeContext.Provider>
  );
};
