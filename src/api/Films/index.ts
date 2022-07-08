import {AxiosResponse} from "axios";
import {collectionInstance, instance} from "../../config/axios-config";
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
  get: async (page: number, sortBy: string): Promise<TServerFilmsList[]> => {
    const response: AxiosResponse = await instance.get("discover/movie", {
      params: {
        page: page,
        sort_by: sortBy
      }
    });

    return response.data.results;
  },
};

export const filmApi = {
  get: async (id: number): Promise<TServerFilm> => {
    const response: AxiosResponse = await instance.get(`movie/${id}`);

    return response.data;
  },
};

export const castsApi = {
  get: async (id: number): Promise<TServerCasts[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/credits`);
    return response.data.cast;
  },
};

export const keyWordsApi = {
  get: async (id: number): Promise<TKeywords[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/keywords`);

    return response.data.keywords;
  },
};

export const reviewsApi = {
  get: async (id: number): Promise<TServerReviews[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/reviews`);

    return response.data.results;
  },
};

export const photosApi = {
  get: async (id: number): Promise<TServerPhotos> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/images`);

    return response.data;
  },
};

export const videosApi = {
  get: async (id: number): Promise<TServerVideos[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/videos`);

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
    const response: AxiosResponse = await collectionInstance.get(`movie/collection/${id}`);

    return response.data;
  },
};

export const recommendationsApi = {
  get: async (id: number): Promise<TServerRecommendations[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/recommendations`);

    return response.data.results;
  },
};
