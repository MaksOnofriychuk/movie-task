import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmReducer from "./reducers/fIlmSlice/filmSlice";

const rootReducer = combineReducers({
  filmReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
