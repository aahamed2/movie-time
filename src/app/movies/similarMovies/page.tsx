import React from 'react';
import styles from '../similarMovies/SimilarMovies.module.scss';
import Image from 'next/image';
import fallBackPoster from '../../../../public/logo.jpg';
import { TMoviesListProps } from '../../../types/movieTypes';
import MoviesList from '@/components/movieList/MovieList';

export default function SimilarMovies({ movies }: TMoviesListProps) {
  console.log('movies in similar', movies);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Similar Movies</h2>{' '}
      {/* Add the title class here */}
      <div className={styles.embla}>
        <div className={styles.emblaContainer}>
          <MoviesList movies={movies} />
        </div>
      </div>
    </div>
  );
}
