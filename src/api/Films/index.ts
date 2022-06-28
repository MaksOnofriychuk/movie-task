import { AxiosResponse } from "axios";
import { instance } from "../../config/axios-config";
import { TFilm, TFilmList } from "../../store/reducers/fIlmSlice/types";

export const filmsApi = {
  get: async (): Promise<TFilmList[]> => {
    const response: AxiosResponse = await instance.get(
      `popular${process.env.React_App_Key_Api_Film}`
    );

    return response.data.results;
  },
};

export const filmApi = {
  get: async (id: number): Promise<TFilm> => {
    const response: AxiosResponse = await instance.get(
      `${id}${process.env.React_App_Key_Api_Film}`
    );

    return response.data;
  },
};
