import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetRelatedMovies } from '../../hooks/useGetRelatedMovies';
import { Loader } from '../Loader';
import { Movie } from '../Movie';
import { NoResults } from '../NoResults';

import './relatedMovies.scss';

export const RelatedMovies = ({ id }) => {
  const { loading, relatedMovies } = useGetRelatedMovies({ id });

  return (
    <section className="relatedMovies">
      <h3>Similar Movies</h3>
      <div className="relatedMoviesList">
        {
          relatedMovies?.map(movie => <Movie key={movie.id} movie={movie} />)
        }
      </div>
    </section>
  );
};
