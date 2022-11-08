import React from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from '../../components/Loader';
import { Rating } from '../../components/Rating';
import { RelatedMovies } from '../../components/RelatedMovies';
import { isoLangs, movieBigThumbnailSize, movieImagePath, moviePosterSize } from '../../constants/constants';
import { useGetMovieDetails } from '../../hooks/useGetMovieDetails';
import { getDate } from '../../utils/getDate';
import './details.scss';

export const Details = () => {
  const { id } = useParams();
  const { loading, movie } = useGetMovieDetails({ id });
  const releaseDate = movie?.release_date ? getDate(movie?.release_date) : null;
  const originalLanguage = movie?.original_language ? isoLangs[movie?.original_language] : null;

  const showMovie = (<>
    <div className="poster" style={{
      backgroundImage: `url(${movieImagePath}${moviePosterSize}${movie?.backdrop_path})`
    }}>
      <div className="posterInner maxLayoutWidth layoutXPadding layoutYPadding">
        <div className="leftSide">
          <img className="thumbnailImage" src={`${movieImagePath}${movieBigThumbnailSize}${movie?.poster_path}`} />
        </div>
        <div className="mediumSide">
          <h2>{movie?.title}{ movie?.original_title !== movie?.title ? ` (${movie?.original_title})` : null }</h2>
          <div className="detailsReleaseDate"><strong>Release:</strong> {`${releaseDate?.getDay()}.${releaseDate?.getMonth()}.${releaseDate?.getFullYear()}`}</div>
          <div className="detailsLanguage"><strong>Language:</strong> {originalLanguage?.name}</div>
          <div className="detailsDuration"><strong>Duration:</strong> {movie?.runtime} min.</div>
          <div className="detailsRating"><strong>Rating:</strong> {movie?.vote_average.toFixed(1)}</div>
          <p>{movie?.overview}</p>
        </div>
        <div className="rightSide">
          <Rating title="My Rating" id={id} />
        </div>
      </div>
    </div>
    <div className="maxLayoutWidth layoutXPadding layoutYPadding">
        <RelatedMovies id={id}/>
    </div>
  </>);

  return (
    <section className="details">
      {
        loading ? 
        <Loader />
        : showMovie
      }
    </section>
  );
};
