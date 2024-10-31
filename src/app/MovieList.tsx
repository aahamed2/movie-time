import Image from 'next/image';
import styles from './MovieList.module.scss';

/* Types */
import { TMoviesListProps } from '../../src/types/movieTypes';

export default function MoviesList({ movies }: TMoviesListProps) {
  const PLACEHOLDER_IMAGE = '/logo.png';

  return (
    <div className={styles.movies}>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : PLACEHOLDER_IMAGE
              }
              alt={movie.title}
              width={150}
              height={220}
              className={styles.movieImage}
            />
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <p className={styles.releaseDate}>{movie.release_date}</p>
            <p className={styles.rating}>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
