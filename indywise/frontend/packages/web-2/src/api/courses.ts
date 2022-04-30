import Axios, { baseURL } from '../utils/Axios';

export const getAllCourse = () => {
  return Axios.get(`${baseURL}/courses/courses/list/`);
};
