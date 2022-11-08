import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setHomeMoviesLoading, setHomeMovies } from '../store/moviesSlice';

export const useGetHomeMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHomeMoviesLoading(true));
    const getHomeMovies = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=abd1f74e04cf12abeecee3c7bf97bbcd`)
      .then(res => {
        dispatch(setHomeMovies(res.data.results));
        dispatch(setHomeMoviesLoading(false));
      })
    };
    
    getHomeMovies();
  }, []);
};