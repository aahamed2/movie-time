import { fetchMovieDetails } from '../../../utils/fetch';
import styles from '../MovieDetails.module.scss';
import Image from 'next/image';
import fallBackPoster from '../../../../public/logo.jpg';

export default async function MovieDetails({ params }) {
  const { id } = await params;
  const movieDetails = await fetchMovieDetails(id);
  const isPosterExists = !!movieDetails.poster_path;
  const isBackdropExists = !!movieDetails.backdrop_path;

  return (
    <div>
      <div
        className={styles.movieDetails}
        style={{
          backgroundImage: isBackdropExists
            ? `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
            : '',
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.contentWrapper}>
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
            {movieDetails.tagline && (
              <h2 className={styles.tagline}>“{movieDetails.tagline}”</h2>
            )}
            <p className={styles.overview}>{movieDetails.overview}</p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong>Genre:</strong>{' '}
                {movieDetails.genres.map((genre) => genre.name).join(', ')}
              </div>
              <div className={styles.detailItem}>
                <strong>Director:</strong> {movieDetails.director || 'N/A'}
              </div>
              <div className={styles.detailItem}>
                <strong>Cast:</strong> {movieDetails.cast?.join(', ') || 'N/A'}
              </div>
              <div className={styles.detailItem}>
                <strong>Runtime:</strong> {movieDetails.runtime} mins
              </div>
              <div className={styles.detailItem}>
                <strong>Rating:</strong> {`${movieDetails.vote_average} / 10`} (
                {movieDetails.vote_count} votes)
              </div>
              <div className={styles.detailItem}>
                <strong>Status:</strong> {movieDetails.status}
              </div>
              <div className={styles.productionCompanies}>
                <strong>Production:</strong>{' '}
                {movieDetails.production_companies
                  .map((company) => company.name)
                  .join(', ')}
              </div>
            </div>
          </div>
        </div>

        {/* carousel goes here */}
        <div className={styles.carousel}> something</div>
      </div>
    </div>
  );
}
