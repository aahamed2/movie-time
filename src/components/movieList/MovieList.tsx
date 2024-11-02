'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MovieList.module.scss';
import useFavoritesStore from '../../stores/favoritesStore';
import fallBackPoster from '../../../public/logo.jpg';

/* Types */
import { TMovie, TMoviesListProps } from '../../types/movieTypes';

export default function MoviesList({ movies }: TMoviesListProps) {
  const { toggleFavorite, favorites } = useFavoritesStore();

  const handleFavoriteClick = (movie: TMovie) => {
    toggleFavorite(movie);
  };

  return (
    <div className={styles.movies}>
      <div className={styles.movieGrid}>
        {movies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id);
          const isPosterExists = !!movie.poster_path;

          return (
            <div key={movie.id} className={styles.movieCard}>
              {/* Movie poster */}
              <Link href={`/movies/${movie.id}`}>
                <Image
                  src={
                    isPosterExists
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : fallBackPoster
                  }
                  alt={movie.title}
                  width={150}
                  height={220}
                  className={styles.movieImage}
                />
                {/* Movie details */}
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <p className={styles.releaseDate}>
                  {movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : 'N/A'}
                </p>
                <div className={styles.rating}>
                  <span className={styles.voteAverage}>
                    {movie.vote_average}
                  </span>
                  <span className={styles.voteCount}>
                    {movie.vote_count ? `(${movie.vote_count})` : '(0)'}
                  </span>
                </div>
              </Link>

              {/* fave button */}
              <button
                className={styles.favoriteButton}
                onClick={() => handleFavoriteClick(movie)}
              >
                {isFavorite ? 'Remove fave x' : 'Add to fave + '}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
