import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

import './search.scss';

export const Search = () => {
  const searchRef = useRef(null);
  const { search, searchResults, reset } = useSearch();

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchForTerm();
    }
  };
  const searchForTerm = () => {
    search(searchRef.current.value);
  };
  const cancel = () => {
    reset();
    searchRef.current.value = '';
  };

  return (
    <div className="searchArea">
      <div className="searchBox">
        <input type="text" ref={searchRef} onKeyDown={onEnter} />
        <button onClick={searchForTerm}>Search</button>
        <button onClick={cancel} className="cancelSearch" />
      </div>
      {
        searchResults?.length ?
        <div className="searchResults">
          {
            searchResults?.map(movie => <Link to={`/details/${movie.id}`} key={movie.id}>{movie.title || movie.name}</Link>)
          }
        </div>
        : null
      }
    </div>
  )
};
