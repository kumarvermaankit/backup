import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';

export interface IBusinessAccountForm {
  createBusinessAccount: () => Promise<boolean>;
  getBusinessAccountsList: () => Promise<boolean>;
  isCreatingBusinessAccount: boolean;
  isFetchingBusinessAccount: boolean;
  handleChange: (event: any) => void;
  variables: any;
  selectedBusinessAccount: any;
  businessAccountList: any;
  getBusinessAccount: (username: string) => Promise<boolean>;
}

export const BusinessAccountContext = React.createContext<IBusinessAccountForm>(
  {} as IBusinessAccountForm
);

export const useBusinessAccount = () => {
  return React.useContext(BusinessAccountContext);
};

const useProviderBusinessAccount = (): IBusinessAccountForm => {
  const [isCreatingBusinessAccount, setIsCreatingBusinessAccount] = useState(
    false
  );
  const [isFetchingBusinessAccount, setIsFetchingBusinessAccounts] = useState(
    false
  );
  const [businessAccountList, setBusinessAccountList] = useState<any>([]);
  const [selectedBusinessAccount, setSelectedBusinessAccount] = useState<any>(
    null
  );
  const [variables, setVariables] = useState<any>({
    organization_name: '',
    username: '',
    email: ''
  });

  const createBusinessAccount = async () => {
    try {
      setIsCreatingBusinessAccount(true);
      const res = await Axios({
        url: '/business/business/accounts',
        method: 'POST',
        data: variables
      });

      const resData: any = res.data;
      if (resData.business_account_created) {
        toast.success('Business Account Created successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${variables.organization_name} business account created`,
            changes: JSON.stringify(variables),
            service: 'business'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      setIsCreatingBusinessAccount(false);

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
      setIsCreatingBusinessAccount(false);

      return false;
    }
  };

  const getBusinessAccountsList = async () => {
    try {
      setIsFetchingBusinessAccounts(true);
      const res = await Axios({
        url: '/business/business/accounts',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingBusinessAccounts(false);
      setBusinessAccountList(resData.data.accounts);

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
      setIsFetchingBusinessAccounts(false);

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

  const getBusinessAccount = async (username: string) => {
    try {
      setIsFetchingBusinessAccounts(true);
      const res = await Axios({
        url: `/business/business/account?username=${username}`,
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingBusinessAccounts(false);
      setSelectedBusinessAccount(resData);

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
      setIsFetchingBusinessAccounts(false);

      return false;
    }
  };

  return {
    createBusinessAccount,
    isCreatingBusinessAccount,
    handleChange,
    variables,
    getBusinessAccountsList,
    isFetchingBusinessAccount,
    businessAccountList,
    getBusinessAccount,
    selectedBusinessAccount
  };
};

export const BusinessAccountProvider: React.FC = ({ children }) => {
  const businessAccount = useProviderBusinessAccount();
  return (
    <BusinessAccountContext.Provider value={businessAccount}>
      {children}
    </BusinessAccountContext.Provider>
  );
};
