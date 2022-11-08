import { useSelector } from 'react-redux';

export const useMapGenre = ({ ids }) => {
  const { genres: { data: genres } } = useSelector((state) => state.movies);

  return ids?.map(item => genres.find(genre => genre.id === item)?.name)
};