import React from 'react';
import { useSelector } from 'react-redux';

import './sortAndFilters.scss';

export const SortAndFilters = ({ sortBy, sortElement, filterGenre }) => {
  const { genres: { data: genres } } = useSelector((state) => state.movies);

  return (
    <div className="filters">
      <div className="filter">
        <span className="filterLabel">Sort By</span>
        <select placeholder="Sort By" className="sortBy" onChange={sortBy} ref={sortElement} defaultValue="none">
          <option value="none" disabled>-</option>
          <option value="rating_descending">Rating Descending</option>
          <option value="rating_ascending">Rating Ascending</option>
          <option value="year_descending">Year Descending</option>
          <option value="year_ascending">Year Ascending</option>
        </select>
      </div>
      {
        genres ?
        <div className="filter">
          <span className="filterLabel">Select genre</span>
          <select placeholder="Select genre" className="filterGenre" onChange={filterGenre} defaultValue="none">
            <option value="none">-</option>
            {genres.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
        : null
      }
    </div>
  );
};
