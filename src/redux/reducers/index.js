import movieReducer from "./movie";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  movie: movieReducer,
});
