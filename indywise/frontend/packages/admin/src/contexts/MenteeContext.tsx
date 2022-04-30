import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { Skills, KPI } from '../interfaces/IMentee';

export interface IMenteeForm {
  createMentee: () => Promise<boolean>;
  updateMentee: (id: string) => Promise<boolean>;
  getMenteesList: () => Promise<boolean>;
  isCreatingMentee: boolean;
  isFetchingMentee: boolean;
  createMenteeErr: string | null;
  addSkilledIn: () => any;
  addWantsInternshipIn: () => any;
  addKPI: () => any;
  removeRow: (event: any, index: number, type: string) => any;
  handleChange: (event: any) => void;
  handleValueChange: (event: any, index: number, type: string) => any;
  variables: any;
  selectedMentee: any;
  menteeList: any;
  getMentee: (id: string) => Promise<boolean>;
  enableMentee: (id: string) => any;
  disableMentee: (id: string) => any;
  setMenteeForEdit: () => any;
  clearVariables: () => any;
  setVariable: (variable: any) => any;
}

export const MenteeContext = React.createContext<IMenteeForm>(
  {} as IMenteeForm
);

export const useMentee = () => {
  return React.useContext(MenteeContext);
};

const useProviderMentee = (): IMenteeForm => {
  const [isCreatingMentee, setIsCreatingMentee] = useState(false);
  const [isFetchingMentee, setIsFetchingMentees] = useState(false);
  const [createMenteeErr, setCreateMenteeErr] = useState<string | null>(null);
  const [menteeList, setMenteeList] = useState<any>([]);
  const [selectedMentee, setSelectedMentee] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    skilledIn: [],
    wantsInternshipIn: [],
    KPIs: [],
    certified: false
  });

  const filterMenteeBeforeSubmit = (nv: any) => {
    Object.keys(nv).forEach((key) =>
      nv[key] === null ||
      nv[key] === '' ||
      nv[key] === 0 ||
      nv[key]?.length <= 0
        ? delete nv[key]
        : null
    );

    if (nv?.skilledIn?.length > 0) {
      nv.skilledIn.forEach((ed: any) => {
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

    if (nv?.wantsInternshipIn?.length > 0) {
      nv.wantsInternshipIn.forEach((ed: any) => {
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

    if (nv?.KPIs?.length > 0) {
      nv.KPIs.forEach((ed: any) => {
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

  const createMentee = async (variableData?: any, type?: string) => {
    const nv = JSON.parse(
      JSON.stringify(type === 'csv' ? variableData : variables)
    );

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: '/mentee/mentees',
        method: 'POST',
        data: newV
      });

      const resData: any = res.data;
      if (resData.mentee_created) {
        toast.success('Mentee Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${newV.username} mentee created`,
            changes: JSON.stringify(newV),
            service: 'mentee'
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

        if (statusCode?.startsWith('5')) {
          setCreateMenteeErr(
            `Something didn't go quite as expected for ${
              nv?.fullName || nv?.username
            }!`
          );
          toast.error(
            `Something didn't go quite as expected for ${
              nv?.fullName || nv?.username
            }!`
          );
        } else if (statusCode?.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            setCreateMenteeErr(e?.response?.data?.error?.message);
            toast.error(
              `${e?.response?.data?.error?.message} for ${
                nv?.fullName || nv?.username
              }`
            );
          }
        }
      }
      setIsCreatingMentee(false);

      return false;
    }
  };

  const updateMentee = async (id: string) => {
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

    const newV = filterMenteeBeforeSubmit(nv);

    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: `/mentee/mentees/${id}`,
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
            activityDescription: `${newV.username} mentee updated`,
            changes: JSON.stringify(newV),
            service: 'mentee'
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
        url: '/mentee/mentees',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentees(false);
      setMenteeList(resData.data.mentees);

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

  const addSkilledIn = () => {
    const { skilledIn } = variables;

    const array = (skilledIn as Skills[]) || [];
    array.push({ skill: '', category: '' });

    setVariables({
      ...variables,
      skilledIn: array
    });
  };

  const addWantsInternshipIn = () => {
    const { wantsInternshipIn } = variables;

    const array = (wantsInternshipIn as Skills[]) || [];
    array.push({ skill: '', category: '' });

    setVariables({
      ...variables,
      wantsInternshipIn: array
    });
  };

  const addKPI = () => {
    const { KPIs } = variables;

    const array = (KPIs as KPI[]) || [];
    array.push({ kpi: '', value: 0 });

    setVariables({
      ...variables,
      KPIs: array
    });
  };

  const removeRow = (
    e: React.SyntheticEvent<EventTarget>,
    index: number,
    type: string
  ) => {
    e.preventDefault();

    const array = variables[type] as Skills[] | KPI[];
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

  const getMentee = async (id: string) => {
    try {
      setIsFetchingMentees(true);
      const res = await Axios({
        url: `/mentee/mentee-admin?ID=${id}`,
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingMentees(false);
      setSelectedMentee(resData);

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

  const setMenteeForEdit = () => {
    if (selectedMentee) setVariables(selectedMentee);
  };

  const enableMentee = async (id: string) => {
    try {
      setIsCreatingMentee(true);
      const res = await Axios({
        url: `/mentee/mentees/${id}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.mentee_enabled) {
        toast.success('Mentee enabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} mentee enabled`,
            changes: '-',
            service: 'mentee'
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
        url: `/mentee/mentees/${id}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.mentee_disabled) {
        toast.success('Mentee disabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} mentee disabled`,
            changes: '-',
            service: 'mentee'
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

  const setVariable = (variable: any) => {
    createMentee(variable, 'csv');
  };

  return {
    createMentee,
    isCreatingMentee,
    createMenteeErr,
    addSkilledIn,
    addWantsInternshipIn,
    addKPI,
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
    setVariable
  };
};

export const MenteeProvider: React.FC = ({ children }) => {
  const mentee = useProviderMentee();
  return (
    <MenteeContext.Provider value={mentee}>{children}</MenteeContext.Provider>
  );
};
