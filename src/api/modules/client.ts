import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE;
let COURSES_URL = baseURL + "/modules";

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};
