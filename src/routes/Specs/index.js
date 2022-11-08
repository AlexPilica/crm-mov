import React from 'react';
import { useSelector } from 'react-redux';

import { BarChart } from '../../components/BarChart';
import { useGetTop10Movies } from '../../hooks/useGetTop10Movies';

import './specs.scss';

export const Specs = () => {
  useGetTop10Movies();
  const { top10: { loading, data: top10Movies } } = useSelector((state) => state.movies);

  return (
    <section className="specs maxLayoutWidth layoutXPadding layoutYPadding minHeightContent">
      <BarChart title="Top 10 Rated Movies (rating)" loading={loading} data={top10Movies.map(({ title: label, vote_average: value }) => ({
        label,
        value
      }))} />
      <BarChart title="Top 10 Rated Movies (vote count)" loading={loading} data={top10Movies.map(({ title: label, vote_count: value }) => ({
        label,
        value
      }))} />
    </section>
  );
};
