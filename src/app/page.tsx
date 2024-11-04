import React from 'react';
import { fetchMovies } from '../utils/fetch';
import MoviesList from '../components/movieList/MovieList';
import styles from './page.module.scss';
import { TMovie } from '../types/movieTypes';

const MoviesPage: React.FC = async () => {
  const movies: TMovie[] = await fetchMovies();

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageSnippet}>
        <div className={styles.textOverlay}>
          <h1>Welcome to My Movies</h1>
          <p>Browse through the world of movies!</p>
        </div>
      </div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
