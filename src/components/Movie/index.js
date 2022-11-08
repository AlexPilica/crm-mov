import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { movieImagePath, movieBigThumbnailSize } from '../../constants/constants';
import { getDate } from '../../utils/getDate';
import './movie.scss';

export const Movie = ({ movie }) => {
  const { genres: { data: genres } } = useSelector((state) => state.movies);

  return (
    <div className="movie">
      <Link className="movieLink noDecoration" to={`/details/${movie.id}`}>
        <div className="movieImageWrapper">
          <img className="movieImage" src={`${movieImagePath}${movieBigThumbnailSize}${movie.poster_path}`} />
          <span className="releaseDate">{getDate(movie?.release_date).getFullYear()}</span>
          <span className="rating">{movie.vote_average.toFixed(1)}</span>
        </div>
        <h4 className="movieTitle">{movie?.title}</h4>
        <span className="movieGenres">{movie?.genre_ids?.map(item => genres.find(genre => genre.id === item)?.name).join(', ')}</span>
      </Link>
    </div>
  );
};
