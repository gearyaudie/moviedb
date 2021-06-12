import {
  FETCH_MOVIE_REQ,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../types/movie";

export const fetchMovieReq = () => {
  return {
    type: FETCH_MOVIE_REQ,
  };
};

export const fetchMovieSuccess = (movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchMovieFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (query) => {
  return (dispatch) => {
    dispatch(fetchMovieReq);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e231f6fb9d04a262374aa38b9ee8418&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          const movies = data.results;
          console.log(movies);
          dispatch(fetchMovieSuccess(movies));
        } else {
          console.log("Movie Not Found");
        }
      })
      .catch((err) => {
        dispatch(fetchMovieFailure(err));
      });
  };
};
