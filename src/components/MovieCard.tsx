import React from "react";

type MovieData = {
  movie: {
    poster_path: string;
    title: string;
  };
  key: string;
};

export const MovieCard: React.FC<MovieData> = ({ movie, key }) => {
  return (
    <div className="movie-picture">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      ) : (
        <div className="default-picture"></div>
      )}
    </div>
  );
};
