import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetMovieDetails = ({ id }) => {
  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    const getHomeMovies = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=abd1f74e04cf12abeecee3c7bf97bbcd`)
      .then(res => {
        setMovie(res.data);
      })
    };
    
    getHomeMovies();
  }, [id]);

  return {
    loading: !movie,
    movie
  };
};