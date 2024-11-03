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
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <div className={styles.movieCard}>
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
          onClick={(e) => handleFavoriteClick(e, movie)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <AiFillHeart className={styles.filledHeart} />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
        <Link href={`/movies/${movie.id}`} className={styles.movieTitle}>
          {movie.title}
        </Link>
        <span className={styles.releaseDate}>
          {movie.release_date
            ? `(${new Date(movie.release_date).getFullYear()})`
            : 'N/A'}
        </span>
      </div>
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
          Popularity: {movie.popularity ? `(${movie.popularity})` : '(0)'}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
