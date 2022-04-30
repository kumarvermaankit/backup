import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { Review } from '../interfaces/IMentor';

export interface IMentorForm {
  getMentorFormsList: () => Promise<boolean>;
  createMentor: (skills?: any, category?: any, tier?: any) => Promise<boolean>;
  isCreatingMentor: boolean;
  isFetchingMentor: boolean;
  selectedMentor: any;
  mentorList: any;
  addReview: () => any;
  clearVariables: () => any;
  getMentor: (id: string) => any;
  getMentorForm: (id: string) => any;
  updatedMentorList: any;
  getMentorList: () => Promise<boolean>;
  enableMentor: (id: string) => any;
  disableMentor: (id: string) => any;
  handleChange: (event: any) => void;
  removeRow: (event: any, index: number, type: string) => any;
  handleValueChangeA: (event: any, index: number, type: string) => any;
  handleValueChange: (event: any, type: string) => any;
  variables: any;
  setMentorForEdit: () => any;
  createMentorErr: string | null;
  updateMentor: (
    id: string,
    arraySkill: string[],
    arrayCategory: string[],
    arrayTier: string[]
  ) => Promise<boolean>;
}

export const UpdatedMentorContext = React.createContext<IMentorForm>(
  {} as IMentorForm
);

export const useMentor = () => {
  return React.useContext(UpdatedMentorContext);
};

const useProviderMentor = (): IMentorForm => {
  const [isCreatingMentor, setIsCreatingMentor] = useState(false);
  const [isFetchingMentor, setIsFetchingMentors] = useState(false);
  const [mentorList, setMentorList] = useState<any>([]);
  const [updatedMentorList, setUpdatedMentorList] = useState<any>([]);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    portfolio: {
      location: {},
      currentEmployment: {}
    }
  });
  const [createMentorErr, setCreateMentorErr] = useState<string | null>(null);

  const getMentorFormsList = async () => {
    try {
      setIsFetchingMentors(true);
      const res = await Axios({
        url: '/mentors/admin-mentors-form-list',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentors(false);
      setMentorList(resData.data.mentorsRawData.mentors);

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

  const createMentor = async (skills?: any, category?: any, tier?: any) => {
    const newV = JSON.parse(JSON.stringify(variables));

    const sendData = {
      username: newV?.username,
      name: newV?.name,
      userID: newV?.userID,
      wiseup_consent: newV?.wiseup_consent,
      email: newV?.email,
      avatar: newV?.avatar,
      valueProposition: newV?.valueProposition,
      about: newV?.about,
      skills,
      portfolio: newV?.portfolio,
      category,
      tier,
      overAllRating: newV?.overAllRating,
      // relatedMentors?: IRelatedMentor[],
      // mentees?: IMentee[],
      // earning?: IEarning[],
      reviews: newV?.reviews,
      sessions: newV?.sessions
    };

    const submitD = filterMentorBeforeSubmit(sendData);

    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: '/mentors/mentors',
        method: 'POST',
        data: submitD
      });

      const resData: any = res.data;
      if (resData.mentorCreated) {
        toast.success('Mentor Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${newV.username} mentor created`,
            changes: JSON.stringify(newV),
            service: 'mentors'
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
    type: string
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;
    let temp = { ...variables };

    if (type === 'sessions') {
      temp[type] = { ...temp[type] };
      temp[type][name] = value;
    } else {
      temp['portfolio'] = { ...temp['portfolio'] };
      temp['portfolio'][type] = { ...temp['portfolio'][type] };
      temp['portfolio'][type][name] = value;
    }
    setVariables(temp);
  };

  const handleValueChangeA = (
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

  const getMentorList = async () => {
    try {
      setIsFetchingMentors(true);
      const res = await Axios({
        url: '/mentors/admin-mentors',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentors(false);
      setUpdatedMentorList(resData.data.mentors);

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

  const getMentor = (id: string) => {
    const filteredArray = updatedMentorList.filter(
      (user: any) => user.ID === id
    );
    const mentorData = filteredArray[0];
    setSelectedMentor(mentorData);
    return mentorData;
  };

  const getMentorForm = (id: string) => {
    const filteredArray = mentorList.filter((user: any) => user.email === id);
    const mentorData = filteredArray[0];
    setSelectedMentor(mentorData);
    return mentorData;
  };

  const removeRow = (
    e: React.SyntheticEvent<EventTarget>,
    index: number,
    type: string
  ) => {
    e.preventDefault();

    const array = variables[type] as Review[];
    array.splice(index, 1);

    setVariables({
      ...variables,
      [type]: array
    });
  };

  const enableMentor = async (id: string) => {
    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentors/mentors/${id}/enable`,
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
        url: `/mentors/mentors/${id}/disable`,
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

  const setMentorForEdit = () => {
    if (selectedMentor) setVariables(selectedMentor);
  };

  const filterMentorBeforeSubmit = (nv: any) => {
    Object.keys(nv).forEach((key) =>
      nv[key] === null ||
      nv[key] === '' ||
      nv[key] === 0 ||
      nv[key]?.length <= 0
        ? delete nv[key]
        : null
    );

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

  const updateMentor = async (
    id: string,
    arraySkill: any,
    arrayCategory: any,
    arrayTier: any
  ) => {
    if (variables?.is_active === true || variables?.is_active === false) {
      delete variables.is_active;
    }
    if (variables?.ID) {
      delete variables.ID;
    }
    variables['skills'] = arraySkill;
    variables['category'] = arrayCategory;
    variables['tier'] = arrayTier;
    setVariables(variables);
    const nv = JSON.parse(JSON.stringify(variables));

    const newV = filterMentorBeforeSubmit(nv);

    try {
      setIsCreatingMentor(true);
      const res = await Axios({
        url: `/mentors/admin-mentors-update/${id}`,
        method: 'PUT',
        data: newV
      });

      const resData: any = res.data;
      if (resData.Updated === true) {
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

  const clearVariables = () => {
    setVariables({
      name: '',
      username: '',
      email: '',
      userID: '',
      about: '',
      sessions: {},
      avatar: '',
      experience: 0,
      portfolio: {},
      skills: [],
      shortDescription: '',
      valueProposition: '',
      overAllRating: 0,
      reviews: [],
      category: [],
      wiseup_consent: false,
      tier: []
    });
  };

  return {
    getMentorFormsList,
    isFetchingMentor,
    mentorList,
    getMentor,
    selectedMentor,
    updatedMentorList,
    getMentorList,
    isCreatingMentor,
    enableMentor,
    disableMentor,
    variables,
    handleChange,
    setMentorForEdit,
    handleValueChange,
    createMentorErr,
    updateMentor,
    getMentorForm,
    createMentor,
    removeRow,
    handleValueChangeA,
    addReview,
    clearVariables
  };
};

export const UpdatedMentorProvider: React.FC = ({ children }) => {
  const mentor = useProviderMentor();
  return (
    <UpdatedMentorContext.Provider value={mentor}>
      {children}
    </UpdatedMentorContext.Provider>
  );
};
