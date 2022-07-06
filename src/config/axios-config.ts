import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.React_App_Base_Url}`,
});

instance.interceptors.request.use((request) => {
  request.params = { api_key: "aadbbb4862aff5504413e736202c5599" };
  return request;
});

export const collectionInstance = axios.create({
  baseURL: `${process.env.React_App_Collection_Url}`,
});

collectionInstance.interceptors.request.use((request) => {
  request.params = { api_key: "aadbbb4862aff5504413e736202c5599" };
  return request;
});
