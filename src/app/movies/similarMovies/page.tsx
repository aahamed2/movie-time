'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../similarMovies/SimilarMovies.module.scss';
import { TMoviesListProps, TMovie } from '../../../types/movieTypes';
import MovieCard from '../../../components/movieCard/MovieCard';

const SimilarMovies: React.FC<TMoviesListProps> = ({ movies }) => {
  const [loading, setLoading] = useState(true);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Similar Movies</h2>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {movies.map((movie: TMovie) => (
            <div className={styles.emblaSlide} key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
