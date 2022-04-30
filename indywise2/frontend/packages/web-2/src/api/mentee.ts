import Axios from '../utils/Axios';

export const GetMenteesList = () => {
  return Axios({
    method: 'GET',
    url: '/mentee/mentees/list'
  });
};

export const FetchPortfolio = () => {
  return Axios({
    method: 'GET',
    url: '/portfolios/portfolio'
  });
};

export const FetchMenteePortfolio = () => {
  return Axios({
    method: 'GET',
    url: '/mentees/mentees/portfolio'
  });
};

interface IEnquireProps {
  menteeId: string;
  message: string;
}

export const EnquireAboutMentee = (data: IEnquireProps) => {
  return Axios({
    method: 'POST',
    url: '/mentee/mentees/enquire',
    data: data
  });
};
