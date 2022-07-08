import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  transformCastsData,
  transformCollectionData,
  transformFilmData,
  transformFilmsData,
  transformKeywordsMoviesData,
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
  getKeywordsMovies,
  getRecommendations,
  getReviews,
} from "../../actions/Film";
import {
  TInitialState,
  TKeywords,
  TLikes,
  TServerCasts,
  TServerCollection,
  TServerFilm,
  TServerFilmsList,
  TServerKeywordsMovies,
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
  keywordsMovies: [],
  loading: false,
  error: "",
  page: 1,
  likesData: [],
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page = state.page + 1;
    },
    clearFilmlist(state) {
      state.filmList = [];
      state.page = 1;
    },
    addLike(state, action: PayloadAction<TLikes>) {
      if (state.likesData.find((like) => like.link === action.payload.link)) {
        state.likesData = state.likesData.filter(
          (like) => like.link !== action.payload.link
        );
      } else {
        state.likesData = [...state.likesData, action.payload];
      }
    },
  },
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
          state.filmList.push(...transformFilms);
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
          console.log(action.payload);

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
      )
      .addCase(
        getKeywordsMovies.fulfilled,
        (state, action: PayloadAction<TServerKeywordsMovies[]>) => {
          const transformKeywordsMovies = transformKeywordsMoviesData(
            action.payload
          );
          state.keywordsMovies = transformKeywordsMovies;
        }
      );
  },
});

export const { addLike } = filmSlice.actions;
export default filmSlice.reducer;
export const { incrementPage, clearFilmlist } = filmSlice.actions;
