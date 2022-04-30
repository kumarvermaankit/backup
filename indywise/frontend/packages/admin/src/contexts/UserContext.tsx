import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { IUser } from '../interfaces/IUser';

export interface IUserForm {
  getUsersList: () => Promise<boolean>;
  loading: boolean;
  isFetchingUser: boolean;
  userList: any;
  getUser: (id: string) => any;
  enableUser: (id: string) => any;
  disableUser: (id: string) => any;
  updateUserType: (id: string, type: any) => any;
  portfolioData: any;
  clearVariables: () => any;
  setPortfolioData: (data: any) => any;
  updatePortfolio: (id: string) => Promise<boolean>;
}

export const UserContext = React.createContext<IUserForm>({} as IUserForm);

export const useUser = () => {
  return React.useContext(UserContext);
};

const useProviderUser = (): IUserForm => {
  const [loading, toggleLoading] = useState(false);
  const [isFetchingUser, setIsFetchingUsers] = useState(false);
  const [userList, setUserList] = useState<any>([]);
  const [portfolioData, setPortfolioData] = useState<any>({
    workExperience: {
      workExperience: []
    },
    studiesAndCertification: {
      education: [],
      certifications: []
    },
    basicDetails: {
      location: {
        city: '',
        country: ''
      },
      skills: []
    }
  });

  const clearVariables = () => {
    setPortfolioData(null);
  };

  const getUsersList = async () => {
    try {
      setIsFetchingUsers(true);
      const res = await Axios({
        url: '/profile/users',
        method: 'GET'
      });

      const resData: any = res.data;

      setIsFetchingUsers(false);
      setUserList(resData.data.users);

      return true;
    } catch (e: any) {
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
      setIsFetchingUsers(false);

      return false;
    }
  };

  const getUser = (id: string): IUser => {
    const filteredArray = userList.filter((user: any) => user.ID === id);
    const userData = filteredArray[0];
    getPortfolioData(id);
    return userData;
  };

  const getPortfolioData = async (id: string) => {
    try {
      const res = await Axios({
        url: `/portfolios/portfolio/admin/${id}`,
        method: 'GET'
      });
      // console.log(res);
      const resData: any = res.data;
      setPortfolioData(resData.data);
    } catch (e: any) {
      if (e?.response?.status) {
        const statusCode: string = e.response.status.toString();

        if (statusCode.startsWith('5')) {
          toast.error("Something didn't go quite as expected!");
        } else if (statusCode.startsWith('4')) {
          if (e?.response?.data?.error?.message) {
            toast.error(e.response.data.error.message);
            setPortfolioData({
              activate_profile: false,
              basicDetails: {
                location: {
                  city: '',
                  country: ''
                },
                skills: []
              },
              workExperience: {
                experience: '',
                workExperience: []
              },
              studiesAndCertification: {
                education: [],
                certifications: []
              },
              signUpData: {
                dateOfBirth: {
                  day: '',
                  month: '',
                  year: ''
                },
                nationality: 'Indian',
                occupation: 'professional',
                skillsOfInterest: []
              }
            });
          }
        }
      }
    }
  };

  const updateUserType = async (id: string, type: any) => {
    try {
      toggleLoading(true);
      const res = await Axios({
        url: `/profile/user/user-type`,
        method: 'POST',
        data: {
          ID: id,
          user_type: type
        }
      });

      const resData: any = res.data;
      if (resData?.message) {
        toast.success(resData?.message);

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} user type update to ${type}`,
            changes: '-',
            service: 'profile'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      toggleLoading(false);

      return true;
    } catch (e: any) {
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
      toggleLoading(false);

      return false;
    }
  };

  const enableUser = async (id: string) => {
    try {
      toggleLoading(true);
      const res = await Axios({
        url: `/profile/users/${id}/enable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.is_user_enabled) {
        toast.success('User enabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} user enabled`,
            changes: '-',
            service: 'profile'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      toggleLoading(false);

      return true;
    } catch (e: any) {
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
      toggleLoading(false);

      return false;
    }
  };

  const disableUser = async (id: string) => {
    try {
      toggleLoading(true);
      const res = await Axios({
        url: `/profile/users/${id}/disable`,
        method: 'POST',
        data: {}
      });

      const resData: any = res.data;
      if (resData.is_user_disabled) {
        toast.success('User disabled successfully!');

        const result = await Axios({
          url: '/admin/admins/log',
          method: 'POST',
          data: {
            activityType: 'POST',
            activityDescription: `${id} user disabled`,
            changes: '-',
            service: 'profile'
          }
        });
        if (result.data.adminLog_created) toast.success('Log stored!');
      }

      toggleLoading(false);

      return true;
    } catch (e: any) {
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
      toggleLoading(false);

      return false;
    }
  };

  const updatePortfolio = async (id: string) => {
    try {
      toggleLoading(true);
      const res = await Axios({
        url: `/portfolios/portfolio/admin?ID=${id}`,
        method: 'PUT',
        data: {
          activate_profile: portfolioData.activate_profile,
          basicDetails: portfolioData.basicDetails,
          workExperience: portfolioData.workExperience,
          studiesAndCertification: portfolioData.studiesAndCertification
        }
      });

      const resData: any = res.data;
      if (resData?.success) {
        toast.success('Updated Portfolio Successfull!');
      }

      toggleLoading(false);

      return true;
    } catch (e: any) {
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
      toggleLoading(false);

      return false;
    }
  };

  return {
    loading,
    getUsersList,
    isFetchingUser,
    userList,
    getUser,
    enableUser,
    disableUser,
    portfolioData,
    updateUserType,
    clearVariables,
    setPortfolioData,
    updatePortfolio
  };
};

export const UserProvider: React.FC = ({ children }) => {
  const user = useProviderUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// const res = await Axios({
//   url: `/portfolios/portfolio/admin?ID=${id}`,
//   method: 'PUT',
//   data: basicDetails
// });
