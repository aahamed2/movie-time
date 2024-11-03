'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './MovieCard.module.scss';
import fallBackPoster from '../../../public/logo.jpg';
import { TMovie } from '../../types/movieTypes';
import useFavoritesStore from '../../stores/favoritesStore';

type MovieCardProps = {
  movie: TMovie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const isPosterExists = !!movie.poster_path;

  const handleFavoriteClick = (e: React.MouseEvent, movie: TMovie) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
      <div className={styles.posterWrapper}>
        <Image
          src={
            isPosterExists
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : fallBackPoster
          }
          alt={movie.title}
          width={300}
          height={450}
          className={styles.movieImage}
        />
        <div className={styles.overlay} />
        <button
          className={styles.favoriteButton}
          onClick={(e) => handleFavoriteClick(e, movie)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <AiFillHeart className={styles.filledHeart} />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.movieTitle}>
          {movie.title}
          <span className={styles.releaseDate}>
            {movie.release_date
              ? ` (${new Date(movie.release_date).getFullYear()})`
              : ' (N/A)'}
          </span>
        </h3>
        <div className={styles.ratingsRow}>
          <div className={styles.votes}>
            <span className={styles.voteAverage}>
              {movie.vote_average.toFixed(1)}
            </span>
            <span className={styles.voteCount}>
              {movie.vote_count ? `(${movie.vote_count})` : '(0)'}
            </span>
          </div>
          <span className={styles.popularity}>
            Pop:{' '}
            {movie.popularity
              ? Math.round(movie.popularity).toLocaleString()
              : '0'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
