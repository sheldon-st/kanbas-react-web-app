import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const API_URL = import.meta.env.VITE_REACT_APP_BASE_API_URL;

const USERS_API = `${API_URL}/api/users`;

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  console.log("account", response.data);
  console.log(response.data)
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  console.log("updateUser", response.data);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  console.log("createUser");
  const response = await request.post(`${USERS_API}`, user);
  console.log("createUser");
  console.log("createUser", response.data);
  return response.data;
};
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};
export const deleteUser = async (user) => {
  const response = await request.delete(`${USERS_API}/${user._id}`);
  return response.data;
};
export const signup = async (user) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

/* 
export const signIn = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};


export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  
  return response.data;
};

export const signUp = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await axios.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};




export const signOut = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
console.log(response.data)
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await request.get(`${USERS_API}/${userId}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
}
 */
