import {AxiosResponse} from "axios";
import {instance} from "../../config/axios-config";
import {
  TKeywords,
  TParamsType,
  TServerCasts,
  TServerCollection,
  TServerFilm,
  TServerFilmsList,
  TServerKeywordsMovies,
  TServerPhotos,
  TServerRecommendations,
  TServerReviews,
  TServerVideos,
} from "../../store/reducers/fIlmSlice/types";

export const filmsApi = {get: async (params: TParamsType): Promise<TServerFilmsList[]> => {
    const response: AxiosResponse = await instance.get("discover/movie", {
      params: {
        page: params.page,
        sort_by: params.sortBy,
        watch_region: params.watchRegion,
        with_watch_monetization_types: params.withWatchFilter.join(),
        'release_date.gte': params.dateFrom,
        'release_date.lte': params.dateTo,
        with_genres: params.genres.join()
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
    const response: AxiosResponse = await instance.get(`movie/collection/${id}`);

    return response.data;
  },
};

export const recommendationsApi = {
  get: async (id: number): Promise<TServerRecommendations[]> => {
    const response: AxiosResponse = await instance.get(`movie/${id}/recommendations`);

    return response.data.results;
  },
};

export const keywordsMoviesApi = {
  get: async (id: number): Promise<TServerKeywordsMovies[]> => {
    const response: AxiosResponse = await instance.get(`keyword/${id}/movies`, {
      params: { include_adult: "false" },
    });
    return response.data.results;
  },
};
