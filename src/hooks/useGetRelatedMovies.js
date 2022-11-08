import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetRelatedMovies = ({ id }) => {
  const [ relatedMovies, setRelatedMovies ] = useState(null);

  useEffect(() => {
    const getHomeMovies = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=abd1f74e04cf12abeecee3c7bf97bbcd`)
      .then(res => {
        setRelatedMovies(res.data.results);
      })
    };
    
    getHomeMovies();
  }, [id]);

  return {
    loading: !relatedMovies,
    relatedMovies
  };
};