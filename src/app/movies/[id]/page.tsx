import { fetchMovieDetails } from '../../../utils/fetch';
import styles from '../MovieDetails.module.scss';
import Image from 'next/image';
import fallBackPoster from '../../../../public/logo.jpg';

export default async function MovieDetails({ params }) {
  const { id } = params;
  const movieDetails = await fetchMovieDetails(id);
  const isPosterExists = !!movieDetails.poster_path;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.imageCover}>
        <Image
          src={
            isPosterExists
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : fallBackPoster
          }
          alt={movieDetails.title}
          layout="responsive"
          width={150}
          height={220}
          className={styles.movieImage}
        />
      </div>
      <div className={styles.movieContent}>
        <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
        <h2 className={styles.tagline}>“{movieDetails.tagline}”</h2>
      </div>
    </div>
  );
}
