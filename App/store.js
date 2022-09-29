import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./Feature/movieslice"
export const store = configureStore({
  reducer: {
   movie: movieReducer,
  },
});
