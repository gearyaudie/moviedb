import {
  FETCH_MOVIE_REQ,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../types/movie";

type Action = {
  type: string;
  payload: [] | string;
};

const initialState: any = {
  movie: [],
  loading: true,
  error: "",
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
        error: "",
      };
    case FETCH_MOVIE_FAILURE:
      return {
        error: action.payload,
        movie: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
