import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.React_App_Film_Url}`,
});
