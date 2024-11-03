'use client';
import Link from 'next/link';
import Image from 'next/image';
import fallBackPoster from '../../../public/logo.jpg';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './MovieList.module.scss';
import useFavoritesStore from '../../stores/favoritesStore';
import { TMovie, TMoviesListProps } from '../../types/movieTypes';

const MoviesList: React.FC<TMoviesListProps> = ({ movies }) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

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
              </Link>
              <div className={styles.infoRow}>
                <button
                  className={styles.favoriteButton}
                  onClick={() => handleFavoriteClick(movie)}
                  aria-label={
                    isFavorite ? 'Remove from favorites' : 'Add to favorites'
                  }
                >
                  {isFavorite ? (
                    <AiFillHeart className={styles.filledHeart} />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                <Link
                  href={`/movies/${movie.id}`}
                  className={styles.movieTitle}
                >
                  {movie.title}
                </Link>
                <span className={styles.releaseDate}>
                  {movie.release_date
                    ? `(${new Date(movie.release_date).getFullYear()})`
                    : 'N/A'}
                </span>
              </div>
              <div className={styles.rating}>
                <span className={styles.voteAverage}>
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className={styles.voteCount}>
                  {movie.vote_count ? `(${movie.vote_count})` : '(0)'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
