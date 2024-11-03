import React from 'react';
import { fetchMovieDetails, fetchSimilarMovies } from '../../../utils/fetch';
import styles from '../MovieDetails.module.scss';
import Image from 'next/image';
import fallBackPoster from '../../../../public/logo.jpg';
import SimilarMovies from '../similarMovies/page';

import { TGenre, TMovieDetailsType } from '../../../types/movieTypes';

type TMovieDetailsProps = {
  movieDetails: TMovieDetailsType;
  params: { id: number };
};

const MovieDetails: React.FC<TMovieDetailsProps> = async ({ params }) => {
  const { id } = await params;
  const movieDetails = await fetchMovieDetails(id);
  const similarMovies = await fetchSimilarMovies(id);
  const isPosterExists = !!movieDetails.poster_path;
  const isBackdropExists = !!movieDetails.backdrop_path;

  console.log('movieDetails', movieDetails);

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
          {/* Movie Details */}
          <div className={styles.movieContent}>
            <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
            {movieDetails.tagline && (
              <h2 className={styles.tagline}>“{movieDetails.tagline}”</h2>
            )}
            <p className={styles.overview}>{movieDetails.overview}</p>

            <div className={styles.details}>
              <div>
                <strong>Genre:</strong>{' '}
                {movieDetails.genres
                  .map((genre: TGenre) => genre.name)
                  .join(', ')}
              </div>
              <div>
                <strong>Director:</strong> {movieDetails.director || 'N/A'}
              </div>
              <div>
                <strong>Cast:</strong> {movieDetails.cast?.join(', ') || 'N/A'}
              </div>
              <div>
                <strong>Runtime:</strong> {movieDetails.runtime} mins
              </div>
              <div>
                <strong>Rating:</strong> {`${movieDetails.vote_average} / 10`} (
                {movieDetails.vote_count} votes)
              </div>
              <div>
                <strong>Status:</strong> {movieDetails.status}
              </div>
              <div className={styles.productionCompanies}>
                <strong>Production:</strong>{' '}
                {movieDetails.production_companies
                  .map((company: { name: string }) => company.name)
                  .join(', ')}
              </div>
            </div>
          </div>
        </div>
        {/* Similar Movies Container */}
      </div>
      <div>
        <SimilarMovies movies={similarMovies} />
      </div>
    </div>
  );
};

export default MovieDetails;
