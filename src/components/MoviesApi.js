import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { fetchMovie } from "../redux/actions/movie";

export const MoviesApi = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const movieData = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    if (query === "") {
      console.log("no Movies");
    } else {
      dispatch(fetchMovie(query));
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Movies DB</h1>
          <input
            type="text"
            className="input"
            placeholder="Enter Your Movie ..."
            value={query}
            onChange={search}
          />
          {movieData.length > 0 && movieData.length ? (
            <p className="matches">There are {movieData.length} matches</p>
          ) : (
            " "
          )}
        </div>
        <div className="movie-card">
          {movieData.length > 0 ? (
            movieData.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          ) : (
            <div className="display-none">
              <h3>No movies displayed, start searching!</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
