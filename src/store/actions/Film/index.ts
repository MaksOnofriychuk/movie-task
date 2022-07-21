import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  castsApi,
  collectionApi,
  filmApi,
  filmsApi,
  keyWordsApi,
  keywordsMoviesApi,
  photosApi,
  promiseAll,
  recommendationsApi,
  reviewsApi,
  videosApi,
} from "../../../api/Films";
import {
  TKeywords,
  TParamsType,
  TServerCasts,
  TServerCollection,
  TServerFilm,
  TServerKeywordsMovies,
  TServerPhotos,
  TServerRecommendations,
  TServerReviews,
  TServerVideos,
} from "../../reducers/fIlmSlice/types";

export const getFilms = createAsyncThunk(
  "film/getFilms",
  async function (params: TParamsType, {rejectWithValue}) {
    try {
      const data = await filmsApi.get(params);
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const getFilmById = createAsyncThunk<TServerFilm,
  number,
  { rejectValue: string }>("film/getFilmById", async function (id: number, {rejectWithValue}) {
  try {
    const data = await filmApi.get(id);

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getCasts = createAsyncThunk<TServerCasts[],
  number,
  { rejectValue: string }>("film/getCasts", async function (id, {rejectWithValue}) {
  try {
    const data = await castsApi.get(id);
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getKeywords = createAsyncThunk<TKeywords[],
  number,
  { rejectValue: string }>("film/getKeywords", async function (id, {rejectWithValue}) {
  try {
    const data = await keyWordsApi.get(id);

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getReviews = createAsyncThunk<TServerReviews[],
  number,
  { rejectValue: string }>("film/getReviews", async function (id, {rejectWithValue}) {
  try {
    const response = await reviewsApi.get(id);
    return response;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getPhotos = createAsyncThunk<TServerPhotos,
  number,
  { rejectValue: string }>("film/getPhotos", async function (id: number, {rejectWithValue}) {
  try {
    const data = await photosApi.get(id);
    console.log(data);

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getVideos = createAsyncThunk<TServerVideos[],
  number,
  { rejectValue: string }>("film/getVideos", async function (id: number, {rejectWithValue}) {
  try {
    const data = await videosApi.get(id);
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getImagesAndVideos = createAsyncThunk<[TServerVideos[], TServerPhotos],
  number,
  { rejectValue: string }>("film/getImagesAndVideos", async function (id: number, {rejectWithValue}) {
  try {
    const data = await promiseAll.get(id);

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getCollection = createAsyncThunk<TServerCollection,
  number,
  { rejectValue: string }>("film/getCollection", async function (id, {rejectWithValue}) {
  try {
    const data = await collectionApi.get(id);
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getRecommendations = createAsyncThunk<TServerRecommendations[],
  number,
  { rejectValue: string }>("film/getRecommendations", async function (id, {rejectWithValue}) {
  try {
    const data = await recommendationsApi.get(id);
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const getKeywordsMovies = createAsyncThunk<TServerKeywordsMovies[],
  number,
  { rejectValue: string }>("film/getKeywordsMovies", async function (id, {rejectWithValue}) {
  try {
    const data = await keywordsMoviesApi.get(id);
    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});
