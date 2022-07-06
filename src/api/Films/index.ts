import {AxiosResponse} from "axios";
import {instance} from "../../config/axios-config";
import {
  TKeywords,
  TServerCasts,
  TServerCollection,
  TServerFilm,
  TServerFilmsList,
  TServerPhotos,
  TServerRecommendations,
  TServerReviews,
  TServerVideos,
} from "../../store/reducers/fIlmSlice/types";

export const filmsApi = {
  get: async (page: number): Promise<TServerFilmsList[]> => {
    const response: AxiosResponse = await instance.get(
      `popular${process.env.React_App_Key_Api_Film}&page=${page}`
    );

    return response.data.results;
  },
};

export const filmApi = {
  get: async (id: number): Promise<TServerFilm> => {
    const response: AxiosResponse = await instance.get(
      `${id}${process.env.React_App_Key_Api_Film}`
    );

    return response.data;
  },
};

export const castsApi = {
  get: async (id: number): Promise<TServerCasts[]> => {
    const response: AxiosResponse = await instance.get(
      `${id}/credits${process.env.React_App_Key_Api_Film}`
    );
    return response.data.cast;
  },
};

export const keyWordsApi = {
  get: async (id: number): Promise<TKeywords[]> => {
    const response: AxiosResponse = await instance.get(
      `${id}/keywords${process.env.React_App_Key_Api_Film}`
    );

    return response.data.keywords;
  },
};

export const reviewsApi = {
  get: async (id: number): Promise<TServerReviews[]> => {
    const response: AxiosResponse = await instance.get(
      `${id}/reviews${process.env.React_App_Key_Api_Film}`
    );

    return response.data.results;
  },
};

export const photosApi = {
  get: async (id: number): Promise<TServerPhotos> => {
    const response: AxiosResponse = await instance.get(
      `${id}/images${process.env.React_App_Key_Api_Film}`
    );

    return response.data;
  },
};

export const videosApi = {
  get: async (id: number): Promise<TServerVideos[]> => {
    const response: AxiosResponse = await instance.get(
      `${id}/videos${process.env.React_App_Key_Api_Film}`
    );

    return response.data.results;
  },
};

export const promiseAll = {
  get: async (id: number): Promise<[TServerVideos[], TServerPhotos]> => {
    const response = await Promise.all([videosApi.get(id), photosApi.get(id)]);

    return response;
  },
};

export const collectionApi = {
  get: async (id: number): Promise<TServerCollection> => {
    const response: AxiosResponse = await instance.get(
      `${process.env.React_App_Collection_Url}collection/${id}${process.env.React_App_Key_Api_Film}&language=en-US`
    );

    return response.data;
  },
};

export const recommendationsApi = {
  get: async (id: number): Promise<TServerRecommendations[]> => {
    const response: AxiosResponse = await instance.get(
      `${id}/recommendations${process.env.React_App_Key_Api_Film}&language=en-US&page=1`
    );

    return response.data.results;
  },
};
