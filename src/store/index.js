import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;