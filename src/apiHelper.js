import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:3333/'
});

// instance.defaults.headers.common["Authorization"] = sessionStorage.getItem("token");

const api = {
  get: async (url, params) => {
    return await instance.get(url, { params: params });
  },
  post: async (url, params) => {
    return await instance.post(url, params);
  },
  put: async (url, params) => {
    return await instance.put(url, params);
  },
  delete: async (url, params) => {
    return await instance.delete(url, { params: params });
  },
  setToken: async (token) => {
    return instance.defaults.headers.common["Authorization"] = token;
  }
};

export default api;