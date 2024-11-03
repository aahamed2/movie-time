'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '../similarMovies/SimilarMovies.module.scss';
import { TMoviesListProps, TMovie } from '../../types/movieTypes';
import MovieCard from '../../components/movieCard/MovieCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SimilarMovies: React.FC<TMoviesListProps> = ({ movies }) => {
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateScrollButtons();
    emblaApi.on('select', updateScrollButtons);
    // Cleanup
    return () => {
      emblaApi.off('select', updateScrollButtons);
    };
  }, [emblaApi]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>Similar Movies</h2>

      <div className={styles.embla}>
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {movies.map((movie: TMovie) => (
              <div className={styles.emblaSlide} key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
        {/* Embla nav arrows */}
        {canScrollPrev && (
          <button className={styles.emblaPrev} onClick={scrollPrev}>
            <IoIosArrowBack style={{ color: '#fbbf24' }} />
          </button>
        )}
        {canScrollNext && (
          <button
            className={styles.emblaNext}
            onClick={scrollNext}
            style={{ color: '#fbbf24' }}
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default SimilarMovies;
