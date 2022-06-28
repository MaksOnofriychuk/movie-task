import { createAsyncThunk } from "@reduxjs/toolkit";
import { filmApi, filmsApi } from "../../../api/Films";
import { TFilm } from "../../reducers/fIlmSlice/types";

export const getFilms = createAsyncThunk(
  "film/getFilms",
  async function (_, { rejectWithValue }) {
    try {
      const data = await filmsApi.get();
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

export const getFilmById = createAsyncThunk<
  TFilm,
  number,
  { rejectValue: string }
>("film/getFilmById", async function (id: number, { rejectWithValue }) {
  try {
    const data = await filmApi.get(id);

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});

