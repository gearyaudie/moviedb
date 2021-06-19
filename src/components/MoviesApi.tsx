import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { fetchMovie } from "../redux/actions/movie";
import { RootState } from "../redux/reducers";

export const MoviesApi = () => {
  type MovieData = {
    title: string;
    poster_path: string;
    id: string;
  };

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const movieData = useSelector((state: RootState) => state.movie.movie);
  const dispatch = useDispatch();

  const search = (e: any) => {
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
      <div className="home-section">
        <div className="home-section-inner">
          <div className="container">
            <h1>What are you looking for?</h1>
            <input
              type="text"
              className="input"
              placeholder="Search Here ..."
              value={query}
              onChange={search}
            />
            {movieData.length > 0 && movieData.length ? (
              <p className="matches">There are {movieData.length} matches</p>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
      <div className="main">
        <div className="movie-card">
          {movieData.length > 0 ? (
            movieData.map((movie: MovieData) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <div className="display-none">
              {/* <h3>No movies displayed, start searching!</h3> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
