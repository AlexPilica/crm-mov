import { useEffect, useState } from "react";
import { getDate } from "../utils/getDate";

export const useSortAndFilter = ({ movies, sortElement }) => {
  const [ moviesToShow, setMoviesToShow ] = useState(movies);
  useEffect(() => {
    if (movies?.length) {
      setMoviesToShow(movies);
    }
  }, [movies]);

  const sortBy = (e) => {
    const sortOption = {
      year: 'release_date',
      rating: 'vote_average'
    }
    const [sortBy, direction] = e.target.value.split('_');
    const moviePropertyToSort = sortOption[sortBy];
    
    const movs = [...moviesToShow].sort((a,b) => {
      const firstElement = moviePropertyToSort === sortOption.year ? getDate(a[moviePropertyToSort]).getTime() : a[moviePropertyToSort];
      const secondElement = moviePropertyToSort === sortOption.year ? getDate(b[moviePropertyToSort]).getTime() : b[moviePropertyToSort];

      return direction.toLowerCase() === 'descending' ? secondElement - firstElement : firstElement - secondElement
    });

    setMoviesToShow(movs);
  };
  const filterGenre = (e) => {
    if (e.target.value === 'none') {
      setMoviesToShow(movies);
    } else {
      setMoviesToShow(movies?.filter(movie => movie.genre_ids.includes(parseInt(e.target.value))));
    }
    sortElement.current.value = 'none';
  };

  return {
    moviesToShow,
    sortBy,
    filterGenre
  }
};