import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { ISkill } from '../interfaces/ISkill';

export interface ISkillForm {
  createSkill: () => Promise<boolean>;
  createCategory: () => Promise<boolean>;
  updateSkill: (id: string) => Promise<boolean>;
  getSkillsList: () => Promise<boolean>;
  getCategories: () => Promise<boolean>;
  isCreatingSkill: boolean;
  isFetchingSkill: boolean;
  handleChange: (event: any) => void;
  variables: any;
  selectedSkill: any;
  skillList: any;
  categories: any;
  getSkill: (username: string) => any;
  enableSkill: (username: string) => any;
  disableSkill: (username: string) => any;
  setSkillForEdit: () => any;
  handleChangeCat: (event: any) => void;
  clearVariables: () => any;
  categoryV: any;
  setVariable: (variable: any) => any;
}

export const SkillContext = React.createContext<ISkillForm>({} as ISkillForm);

export const useSkill = () => {
  return React.useContext(SkillContext);
};

const useProviderSkill = (): ISkillForm => {
  const [isCreatingSkill, setIsCreatingSkill] = useState(false);
  const [isFetchingSkill, setIsFetchingSkills] = useState(false);
  const [skillList, setSkillList] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [categoryV, setCategoryV] = useState({
    category: ''
  });
  const [variables, setVariables] = useState<ISkill>({
    name: '',
    category: ''
  });

  const createSkill = async (variableData?: any, type?: string) => {
    try {
      setIsCreatingSkill(true);

      if (type === 'csv') {
        if (!variableData.category) {
          delete variableData.category;
        }
      } else {
        if (!variables.category) {
          delete variables.category;
        }
      }

      const res = await Axios({
        url: '/skills/admin-skills',
        method: 'POST',
        data: type === 'csv' ? variableData : variables
      });

      const resData: any = res.data;
      if (resData.skillCreated) {
        toast.success('Skill Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${
              (type === 'csv' ? variableData : variables).name
            } skill created`,
            changes: JSON.stringify(type === 'csv' ? variableData : variables),
            service: 'skills'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingSkill(false);

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
      setIsCreatingSkill(false);

      return false;
    }
  };

  const createCategory = async () => {
    try {
      setIsCreatingSkill(true);

      const res = await Axios({
        url: '/skills/admin-categories',
        method: 'POST',
        data: categoryV
      });

      const resData: any = res.data;
      if (resData.skillCreated) {
        toast.success('Category Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${categoryV.category} category created`,
            changes: JSON.stringify(categoryV),
            service: 'skills'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingSkill(false);

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
      setIsCreatingSkill(false);

      return false;
    }
  };

  const updateSkill = async (id: string) => {
    if (variables?.isActive === true || variables?.isActive === false) {
      delete variables?.isActive;
    }
    if (variables?.ID) {
      delete variables?.ID;
    }

    setVariables(variables);

    const nv = JSON.parse(JSON.stringify(variables));

    try {
      setIsCreatingSkill(true);
      const res = await Axios({
        url: `/skills/admin-skills/${id}`,
        method: 'PUT',
        data: nv
      });

      const resData: any = res.data;
      if (resData.updated) {
        toast.success('Skill Updated successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'PUT',
          data: {
            activityType: 'PUT',
            activityDescription: `${nv.name} skill updated`,
            changes: JSON.stringify(nv),
            service: 'skills'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingSkill(false);

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
      setIsCreatingSkill(false);

      return false;
    }
  };

  const getSkillsList = async () => {
    try {
      setIsFetchingSkills(true);
      const res = await Axios({
        url: '/skills/all-skills',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingSkills(false);
      setSkillList(resData.skillsInDB.skills);

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
      setIsFetchingSkills(false);

      return false;
    }
  };

  const getCategories = async () => {
    try {
      setIsFetchingSkills(true);
      const res = await Axios({
        url: '/skills/skills/categories',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingSkills(false);
      setCategories(resData?.allowedTypes?.map((a: any) => a.category));

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
      setIsFetchingSkills(false);

      return false;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;

    setVariables({
      ...variables,
      [name]: value
    });
  };

  const handleChangeCat = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.persist();
    const {
      target: { name, value }
    } = event;

    setCategoryV({
      ...categoryV,
      [name]: value
    });
  };

  const getSkill = (username: string) => {
    try {
      const skillSelected = skillList.filter(
        (skill: ISkill) => skill.ID === username
      );
      setSelectedSkill(skillSelected[0]);

      return skillSelected[0];
    } catch (e) {
      console.log(e);
    }
  };

  const setSkillForEdit = () => {
    if (selectedSkill) setVariables(selectedSkill);
  };

  const enableSkill = async (username: string) => {
    try {
      setIsCreatingSkill(true);
      const res = await Axios({
        url: `/skills/admin-skills/${username}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Skill enabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${username} skill enabled`,
            changes: '-',
            service: 'skills'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingSkill(false);

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
      setIsCreatingSkill(false);

      return false;
    }
  };

  const disableSkill = async (username: string) => {
    try {
      setIsCreatingSkill(true);
      const res = await Axios({
        url: `/skills/admin-skills/${username}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.success) {
        toast.success('Skill disabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${username} skill disabled`,
            changes: '-',
            service: 'skills'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingSkill(false);

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
      setIsCreatingSkill(false);

      return false;
    }
  };

  const setVariable = (variable: any) => {
    createSkill(variable, 'csv');
  };

  const clearVariables = () => {
    setVariables({
      name: '',
      category: ''
    });
  };

  return {
    createSkill,
    isCreatingSkill,
    handleChange,
    variables,
    getSkillsList,
    isFetchingSkill,
    skillList,
    getSkill,
    enableSkill,
    disableSkill,
    selectedSkill,
    setSkillForEdit,
    clearVariables,
    updateSkill,
    getCategories,
    categories,
    setVariable,
    categoryV,
    handleChangeCat,
    createCategory
  };
};

export const SkillProvider: React.FC = ({ children }) => {
  const skill = useProviderSkill();
  return (
    <SkillContext.Provider value={skill}>{children}</SkillContext.Provider>
  );
};
