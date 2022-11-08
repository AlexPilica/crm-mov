import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setGenres, setGenresLoading } from '../store/moviesSlice';

export const useGetGenres = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGenresLoading(true));
    const getGenres = async () => {
      await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=abd1f74e04cf12abeecee3c7bf97bbcd`)
      .then(res => {
        dispatch(setGenres(res.data.genres));
        dispatch(setGenresLoading(false));
      })
    };
    
    getGenres();
  }, []);
};