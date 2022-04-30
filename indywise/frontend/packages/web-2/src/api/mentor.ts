import Axios from '../utils/Axios';

export const GetMentorsList = () => {
  return Axios({
    method: 'GET',
    url: '/mentor/mentors/list'
  });
};

export const getMentorsPaginated = async (next_token?: string) => {
  return await Axios({
    url: next_token
      ? `/mentor/mentors/list?next_token=${next_token}&limit=100`
      : '/mentor/mentors/list?limit=100',
    method: 'GET'
  });
};

export const FetchPortfolio = () => {
  return Axios({
    method: 'GET',
    url: '/portfolios/portfolio'
  });
};

export const FetchPortfolioMentorCard = (ID: string) => {
  return Axios({
    method: 'GET',
    url: `/portfolios/portfolio/${ID}`
  });
};

export const FetchMentorPortfolio = () => {
  return Axios({
    method: 'GET',
    url: '/mentors/mentors/portfolio'
  });
};

export const PresignMentorInterestFormImage = (
  body: { contentType: string; format: string },
  ID: string
) => {
  return Axios({
    method: 'POST',
    url: `/mentors/mentors/interest-form/presign/${ID}`,
    data: body
  });
};
