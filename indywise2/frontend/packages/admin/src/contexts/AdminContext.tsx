import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';

export interface IAdminForm {
  createAdmin: () => Promise<boolean>;
  getAdminsList: () => Promise<boolean>;
  isCreatingAdmin: boolean;
  isFetchingAdmin: boolean;
  handleChange: (event: any) => void;
  variables: any;
  selectedAdmin: any;
  adminList: any;
  adminLogs: any;
  getAdmin: (username: string) => Promise<boolean>;
  enableAdmin: (username: string) => any;
  disableAdmin: (username: string) => any;
  deleteAdmin: (username: string) => any;
  setAdminForEdit: () => any;
  clearVariables: () => any;
  fetchAdminActivity: (username: string) => any;
}

export const AdminContext = React.createContext<IAdminForm>({} as IAdminForm);

export const useAdmin = () => {
  return React.useContext(AdminContext);
};

const useProviderAdmin = (): IAdminForm => {
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);
  const [isFetchingAdmin, setIsFetchingAdmins] = useState(false);
  const [adminList, setAdminList] = useState<any>([]);
  const [adminLogs, setAdminLogs] = useState<any>([]);
  const [selectedAdmin, setSelectedAdmin] = useState<any>(null);
  const [variables, setVariables] = useState<any>({
    name: '',
    username: '',
    password: '',
    roles: ['admin']
  });

  const createAdmin = async () => {
    try {
      setIsCreatingAdmin(true);
      const res = await Axios({
        url: '/admin/admins',
        method: 'POST',
        data: variables
      });

      const resData: any = res.data;
      if (resData.admin_created) {
        toast.success('Admin Created successfully!');
      }

      setIsCreatingAdmin(false);

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
      setIsCreatingAdmin(false);

      return false;
    }
  };

  const getAdminsList = async () => {
    try {
      setIsFetchingAdmins(true);
      const res = await Axios({
        url: '/admin/admins',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingAdmins(false);
      setAdminList(resData.data.admins);

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
      setIsFetchingAdmins(false);

      return false;
    }
  };

  const fetchAdminActivity = async (username: string) => {
    try {
      setIsFetchingAdmins(true);
      const res = await Axios({
        url: '/admin/admins/log',
        method: 'GET'
      });

      const resData: any = res.data;
      setIsFetchingAdmins(false);
      setAdminLogs(
        resData.data.activity.filter((user: any) => user.username === username)
      );

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
      setIsFetchingAdmins(false);

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

  const getAdmin = async (username: string) => {
    try {
      setIsFetchingAdmins(true);
      const res = await Axios({
        url: `/admin/admins/${username}`,
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingAdmins(false);
      setSelectedAdmin(resData.admin);

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
      setIsFetchingAdmins(false);

      return false;
    }
  };

  const setAdminForEdit = () => {
    if (selectedAdmin) setVariables(selectedAdmin);
  };

  const enableAdmin = async (username: string) => {
    try {
      setIsCreatingAdmin(true);
      const res = await Axios({
        url: `/admin/admins/${username}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData) {
        toast.success('Admin enabled successfully!');
      }

      setIsCreatingAdmin(false);

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
      setIsCreatingAdmin(false);

      return false;
    }
  };

  const disableAdmin = async (username: string) => {
    try {
      setIsCreatingAdmin(true);
      const res = await Axios({
        url: `/admin/admins/${username}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData) {
        toast.success('Admin disabled successfully!');
      }

      setIsCreatingAdmin(false);

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
      setIsCreatingAdmin(false);

      return false;
    }
  };

  const deleteAdmin = async (username: string) => {
    try {
      setIsCreatingAdmin(true);
      const res = await Axios({
        url: `/admin/admins/${username}`,
        method: 'DELETE'
      });

      const resData: any = res.data;
      if (resData) {
        toast.success('Admin deleted successfully!');
      }

      setIsCreatingAdmin(false);

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
      setIsCreatingAdmin(false);

      return false;
    }
  };

  const clearVariables = () => {
    setVariables({
      name: '',
      username: '',
      password: '',
      roles: ['admin']
    });
  };

  return {
    createAdmin,
    isCreatingAdmin,
    handleChange,
    variables,
    getAdminsList,
    isFetchingAdmin,
    adminList,
    getAdmin,
    enableAdmin,
    disableAdmin,
    deleteAdmin,
    selectedAdmin,
    setAdminForEdit,
    clearVariables,
    fetchAdminActivity,
    adminLogs
  };
};

export const AdminProvider: React.FC = ({ children }) => {
  const admin = useProviderAdmin();
  return (
    <AdminContext.Provider value={admin}>{children}</AdminContext.Provider>
  );
};
