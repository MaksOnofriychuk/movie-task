import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  transformCastsData,
  transformCollectionData,
  transformFilmData,
  transformFilmsData,
  transformMediaData,
  transformRecommendationsData,
  transformReviewsData,
} from "../../../utils/transformData";
import {
  getCasts,
  getCollection,
  getFilmById,
  getFilms,
  getImagesAndVideos,
  getKeywords,
  getRecommendations,
  getReviews,
} from "../../actions/Film";
import {
  TInitialState,
  TKeywords,
  TServerCasts,
  TServerCollection,
  TServerFilm,
  TServerFilmsList,
  TServerPhotos,
  TServerRecommendations,
  TServerReviews,
  TServerVideos,
} from "./types";

const initialState: TInitialState = {
  filmList: [],
  film: null,
  casts: [],
  reviews: [],
  keywords: [],
  recommendations: [],
  media: null,
  collection: null,
  loading: false,
  error: "",
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        getFilms.fulfilled,
        (state, action: PayloadAction<TServerFilmsList[]>) => {
          const transformFilms = transformFilmsData(action.payload);
          const homeList = transformFilms.slice(0, 8);
          state.filmList = homeList;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(
        getFilmById.fulfilled,
        (state, action: PayloadAction<TServerFilm>) => {
          const transformedFilm = transformFilmData(action.payload);
          state.film = transformedFilm;
        }
      )
      .addCase(
        getCasts.fulfilled,
        (state, action: PayloadAction<TServerCasts[]>) => {
          const transformCasts = transformCastsData(action.payload);
          state.casts = transformCasts;
        }
      )
      .addCase(
        getKeywords.fulfilled,
        (state, action: PayloadAction<TKeywords[]>) => {
          state.keywords = action.payload;
        }
      )
      .addCase(
        getReviews.fulfilled,
        (state, action: PayloadAction<TServerReviews[]>) => {
          const transformReviews = transformReviewsData(action.payload);
          state.reviews = transformReviews;
        }
      )

      .addCase(
        getImagesAndVideos.fulfilled,
        (state, action: PayloadAction<[TServerVideos[], TServerPhotos]>) => {
          const [videos, { backdrops, logos, posters, id }] = action.payload;
          const newMedia = {
            videos,
            backdrops,
            logos,
            posters,
            id,
          };
          const transformNewMediaData = transformMediaData(newMedia);
          state.media = transformNewMediaData;
        }
      )
      .addCase(
        getCollection.fulfilled,
        (state, action: PayloadAction<TServerCollection>) => {
          const transformCollection = transformCollectionData(action.payload);
          state.collection = transformCollection;
        }
      )
      .addCase(
        getRecommendations.fulfilled,
        (state, action: PayloadAction<TServerRecommendations[]>) => {
          const transformRecommendations = transformRecommendationsData(
            action.payload
          );
          state.recommendations = transformRecommendations;
        }
      );
  },
});

export default filmSlice.reducer;
