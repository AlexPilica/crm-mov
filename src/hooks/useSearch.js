import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTop10MoviesLoading, setTop10Movies } from '../store/moviesSlice';

export const useSearch = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const search = async (query) => {
    await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=abd1f74e04cf12abeecee3c7bf97bbcd&language=en-US&query=${query}`)
    .then(res => {
      setSearchResults(res.data.results);
    })
  };
  const reset = () => {
    setSearchResults([]);
  };

  return {
    reset,
    search,
    searchResults
  }
};