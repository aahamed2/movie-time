import React from 'react';
import styles from '../similarMovies/SimilarMovies.module.scss';
import { TMoviesListProps } from '../../../types/movieTypes';
import MoviesList from '../../../components/movieList/MovieList';

const SimilarMovies: React.FC<TMoviesListProps> = ({ movies }) => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Similar Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default SimilarMovies;
