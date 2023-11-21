import axios from "axios";
const baseURL = process.env.REACT_APP_API_BASE;
const MODULES_URL = baseURL + "/modules";
export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
