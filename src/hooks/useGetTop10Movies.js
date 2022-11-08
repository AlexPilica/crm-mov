import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTop10MoviesLoading, setTop10Movies } from '../store/moviesSlice';

export const useGetTop10Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTop10MoviesLoading(true));
    const getTop10Movies = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=abd1f74e04cf12abeecee3c7bf97bbcd`)
      .then(res => {
        dispatch(setTop10Movies(res.data.results.slice(0,10)));
        dispatch(setTop10MoviesLoading(false));
      })
    };
    
    getTop10Movies();
  }, []);
};