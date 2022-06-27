import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFilmById, getFilms } from "../../actions/Film";
import { TFilm, TFilmList, TInitialState } from "./types";

const initialState: TInitialState = {
  filmList: [],
  film: null,
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
        (state, action: PayloadAction<TFilmList[]>) => {
          const homeList = action.payload.slice(0, 8);
          state.filmList = homeList;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(getFilmById.fulfilled, (state, action: PayloadAction<TFilm>) => {
        state.film = action.payload;
      });
  },
});
// export const {  } = filmSlice.actions;
export default filmSlice.reducer;
