import movieReducer from "./movie";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
