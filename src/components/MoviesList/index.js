import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useSortAndFilter } from '../../hooks/useSortAndFilter';
import { Loader } from '../Loader';
import { Movie } from '../Movie';
import { NoResults } from '../NoResults';
import { SortAndFilters } from '../SortAndFilters';

import './moviesList.scss';

export const MoviesList = () => {
  const { movies: { loading, data: movies } } = useSelector((state) => state.movies);
  const sortElement = useRef(null);
  const { moviesToShow, sortBy, filterGenre } = useSortAndFilter({ movies, sortElement });

  const renderMovies = (
    moviesToShow?.length ?
      <>
        <p className="moviesShownCount">Showing {moviesToShow?.length} movies</p>
        <div className="list">{moviesToShow?.map(movie => <Movie key={movie.id} movie={movie} />)}</div>
      </>
      : 
      <NoResults />
  );

  return (
    <section className="movies">
      <div className="titleAndFilters">
        <h2>Top Rated Movies</h2>
        <SortAndFilters sortBy={sortBy} sortElement={sortElement} filterGenre={filterGenre} />
      </div>
      {
        loading ? 
        <Loader />
        : renderMovies
      }
    </section>
  );
};
