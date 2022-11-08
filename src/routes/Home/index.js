import React from 'react';

import { MoviesList } from '../../components/MoviesList';
import { Search } from '../../components/Search';
import { useGetHomeMovies } from '../../hooks/useGetHomeMovies';
import './home.scss';

export const Home = () => {
  useGetHomeMovies();
  
  return <section className="home maxLayoutWidth layoutXPadding layoutYPadding minHeightContent">
      <Search />
      <MoviesList />
    </section>;
};
