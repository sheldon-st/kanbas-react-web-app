import axios from "axios";
const MODULES_URL = 'https://kanbas-node-server-app-muhm.onrender.com/api/modules';
export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
