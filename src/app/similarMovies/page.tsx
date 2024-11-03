import React from 'react';
import SimilarMovies from '../similarMovies/SimilarMovies';
import { fetchSimilarMovies } from '../../utils/fetch';

type PageProps = {
  params: {
    id: Promise<string>;
  };
};

const SimilarMoviesPage: React.FC<PageProps> = async ({ params }) => {
  const id = await params.id;
  const movies = await fetchSimilarMovies(id);

  return (
    <>
      <SimilarMovies movies={movies} />
    </>
  );
};

export default SimilarMoviesPage;
