import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.React_App_Base_Url}`,
  params: {
    language: "en-US",
    include_adult: "true",
  },
});

instance.interceptors.request.use((request) => {
  request.params = {
    api_key: `${process.env.React_App_Key_Api_Film}`,
    ...request.params,
  };
  return request;
});
