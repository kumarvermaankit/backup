import Axios, { baseURL } from '../utils/Axios';

export const getAllCourse = () => {
  return Axios.get(`${baseURL}/courses/courses/list/`);
};

export const getCategoryCourses = (data: string[]) => {
  return Axios({
    method: 'POST',
    url: '/courses/admin-courses-categories/',
    data: { categories: data }
  });
};
