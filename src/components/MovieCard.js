import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className='movie-picture'>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      ) : (
        <div className='default-picture'></div>
      )}
    </div>
  );
};
