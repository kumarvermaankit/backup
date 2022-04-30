import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { Employment, Skills, Review, Education } from '../interfaces/IMentor';

export interface IMentorForm {
  createMentor: () => Promise<boolean>;
  updateMentor: (id: string) => Promise<boolean>;
  getMentorsList: () => Promise<boolean>;
  isCreatingMentor: boolean;
  isFetchingMentor: boolean;
  createMentorErr: string | null;
  addSkill: () => any;
  addEducation: () => any;
  addEmployment: () => any;
  addReview: () => any;
  removeRow: (event: any, index: number, type: string) => any;
  handleChange: (event: any) => void;
  handleValueChange: (event: any, index: number, type: string) => any;
  handleValueChangeA: (event: any, index: number, type: string) => any;
  variables: any;
  selectedMentor: any;
  mentorList: any;
  getMentor: (id: string) => Promise<boolean | undefined>;
  enableMentor: (id: string) => any;
  disableMentor: (id: string) => any;
  deleteMentor: (id: string) => any;
  setMentorForEdit: () => any;
  clearVariables: () => any;
  addRow: (event: any, type: string) => any;
  setVariable: (variable: any) => any;
}

export const MentorContext = React.createContext<IMentorForm>(
  {} as IMentorForm
);

export const useMentor = () => {
  return React.useContext(MentorContext);
};

export interface IUser {
  username: string;
  name: string;
  roles: any;
  last_login: number;
}

const useProviderMentor = (): IMentorForm => {
  const [isCreatingMentor, setIsCreatingMentor] = useState(false);
  const [isFetchingMentor, setIsFetchingMentors] = useState(false);
  const [createMentorErr, setCreateMentorErr] = useState<string | null>(null);
  const [mentorList, setMentorList] = useState<any>([]);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    wiseup_consent: false
  });

  const filterMentorBeforeSubmit = (nv: any) => {
    Object.keys(nv).forEach((key) =>
      nv[key] === null ||
      nv[key] === '' ||
      nv[key] === 0 ||
      nv[key]?.length <= 0
        ? delete nv[key]
        : null
    );

    if (nv?.education?.length > 0) {
      nv.education.forEach((ed: any) => {
        Object.keys(ed).forEach((key) =>
          ed[key] === null ||
          ed[key] === '' ||
          ed[key] === 0 ||
          ed[key]?.length <= 0
            ? delete ed[key]
            : null
        );
      });
    }

    if (nv?.skills?.length > 0) {
      nv.skills.forEach((ed: any) => {
        Object.keys(ed).forEach((key) =>
          ed[key] === null ||
          ed[key] === '' ||
          ed[key] === 0 ||
          ed[key]?.length <= 0
            ? delete ed[key]
            : null
        );
      });
    }

    if (nv?.employment?.length > 0) {
      nv.employment.forEach((ed: any) => {
        Object.keys(ed).forEach((key) =>
          ed[key] === null ||
          ed[key] === '' ||
          ed[key] === 0 ||
          ed[key]?.length <= 0
            ? delete ed[key]
            : null
        );
      });
    }

    if (nv?.reviews?.length > 0) {
      nv.reviews.forEach((ed: any) => {
        Object.keys(ed).forEach((key) =>
          ed[key] === null ||
          ed[key] === '' ||
          ed[key] === 0 ||
          ed[key]?.length <= 0
            ? delete ed[key]
            : null
        );
      });
    }
    return nv;
  };

  const createMentor = async (variableData?: any, type?: string) => {
    const nv = JSON.parse(
      JSON.stringify(type === 'csv' ? variableData : variables)
    );

    const newV = filterMentorBeforeSubmit(nv);

    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: '/mentor/mentors',
        method: 'POST',
        data: newV
      });

      const resData: any = res.data;
      if (resData.mentor_created) {
        toast.success('Mentor Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${newV.username} mentor created`,
            changes: JSON.stringify(newV),
            service: 'mentor'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMentorErr(null);
      setIsCreatingMentor(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMentorErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMentorErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentor(false);

      return false;
    }
  };

  const updateMentor = async (id: string) => {
    if (variables?.is_active === true || variables?.is_active === false) {
      delete variables.is_active;
    }
    if (variables?.ID) {
      delete variables.ID;
    }
    setVariables(variables);
    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMentorBeforeSubmit(nv);

    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentor/mentors/${id}`,
        method: 'PUT',
        data: newV
      });

      const resData: any = res.data;
      if (resData.mentor_updated) {
        toast.success('Mentor Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'PUT',
            activityDescription: `${newV.username} mentor updated`,
            changes: JSON.stringify(newV),
            service: 'mentor'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMentorErr(null);
      setIsCreatingMentor(false);

      return true;
    } catch (e) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          setCreateMentorErr("Something didn't go quite as expected!");
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMentorErr(e.response.data.error.message);
            toast.error(e.response.data.error.message);
          }
        }
      }
      setIsCreatingMentor(false);

      return false;
    }
  };

  const getMentors = async (next_token?: string) => {
    return await Axios({
      url: next_token
        ? `/mentor/mentors?next_token=${next_token}&limit=100`
        : '/mentor/mentors?limit=100',
      method: 'GET'
    });
  };

  const initMentors = async (next_token?: string): Promise<any> => {
    const response = await getMentors(next_token);
    const mentors = response.data.data.mentors;
    const token = response.data.data.next_token;

    if (token) {
      const remaining = await initMentors(token);
      return mentors.concat(remaining);
    } else {
      return mentors;
    }
  };

  const getMentorsList = async (next_token?: string) => {
    console.log('attempting paginated fetch');
    try {
      setIsFetchingMentors(true);
      const allMentors = await initMentors();
      setMentorList(allMentors);
      setIsFetchingMentors(false);
      console.log('success');
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
      setIsFetchingMentors(false);
      return false;
    }
  };

  const addSkill = () => {
    const { skills } = variables;

    const array = (skills as any) || [];

    array.push({ skill: '', category: '' });

    setVariables({
      ...variables,
      skills: array
    });
  };

  const addEducation = () => {
    const { education } = variables;

    const array = (education as any) || [];
    array.push({
      courseName: '',
      specialization: '',
      instituteName: '',
      avatar: '',
      courseType: '',
      passingYear: '',
      description: ''
    });

    setVariables({
      ...variables,
      education: array
    });
  };

  const addReview = () => {
    const { reviews } = variables;

    const array = (reviews as any) || [];
    array.push({
      name: '',
      place: '',
      review: '',
      subject: '',
      avatar: ''
    });

    setVariables({
      ...variables,
      reviews: array
    });
  };

  const addEmployment = () => {
    const { employment } = variables;

    const array = (employment as any) || [];
    array.push({
      designation: '',
      organization_name: '',
      worked_from: '',
      worked_till: '',
      location: '',
      job_status: '',
      description: '',
      avatar: ''
    });

    setVariables({
      ...variables,
      employment: array
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

    const array = variables[type] as
      | Skills[]
      | Education[]
      | Employment[]
      | Review[];
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

  const handleValueChangeA = (
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

  const handleValueChange = (
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

  const getMentor = async (id: string) => {
    try {
      setIsFetchingMentors(true);
      const res = await Axios({
        url: `/mentor/mentor-admin?ID=${id}`,
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentors(false);
      setSelectedMentor(resData);

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
      setIsFetchingMentors(false);

      return false;
    }
  };

  const setMentorForEdit = () => {
    if (selectedMentor) setVariables(selectedMentor);
  };

  const enableMentor = async (id: string) => {
    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentor/mentors/${id}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.mentor_enabled) {
        toast.success('Mentor enabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} mentor enabled`,
            changes: '-',
            service: 'mentor'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMentorErr(null);
      setIsCreatingMentor(false);

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
      setIsCreatingMentor(false);

      return false;
    }
  };

  const disableMentor = async (id: string) => {
    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentor/mentors/${id}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.mentor_disabled) {
        toast.success('Mentor disabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} mentor disabled`,
            changes: '-',
            service: 'mentor'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setCreateMentorErr(null);
      setIsCreatingMentor(false);

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
      setIsCreatingMentor(false);

      return false;
    }
  };

  const deleteMentor = async (id: string) => {
    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentor/mentors/${id}`,
        method: 'DELETE'
      });

      const resData: any = res.data;
      if (resData.mentor_deleted) {
        toast.success('Mentor deleted successfully!');
      }

      setCreateMentorErr(null);
      setIsCreatingMentor(false);

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
      setIsCreatingMentor(false);

      return false;
    }
  };

  const clearVariables = () => {
    setVariables({
      name: '',
      username: '',
      sessionPrice: 0,
      sessionBookingLink: '',
      service: 0,
      avatar: '',
      experience: 0,
      company: '',
      about: '',
      shortDescription: '',
      location: '',
      rating: 0,
      skills: [],
      education: [],
      reviews: [],
      employment: []
    });
  };

  const setVariable = (variable: any) => {
    createMentor(variable, 'csv');
  };

  return {
    createMentor,
    isCreatingMentor,
    createMentorErr,
    addSkill,
    addEducation,
    addEmployment,
    addReview,
    removeRow,
    handleChange,
    handleValueChange,
    variables,
    getMentorsList,
    isFetchingMentor,
    mentorList,
    getMentor,
    enableMentor,
    disableMentor,
    deleteMentor,
    selectedMentor,
    setMentorForEdit,
    clearVariables,
    updateMentor,
    setVariable,
    addRow,
    handleValueChangeA
  };
};

export const MentorProvider: React.FC = ({ children }) => {
  const mentor = useProviderMentor();
  return (
    <MentorContext.Provider value={mentor}>{children}</MentorContext.Provider>
  );
};
