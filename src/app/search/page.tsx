import React from 'react';
import SearchResults from './SearchResults';
import { fetchSearchedMovies } from '../../utils/fetch';

type TSearchPageProps = {
  searchParams: {
    query?: string;
  };
};

const SearchPage: React.FC<TSearchPageProps> = async ({ searchParams }) => {
  const initialQuery = searchParams?.query || '';
  let movies = [];

  if (initialQuery) {
    try {
      movies = await fetchSearchedMovies(initialQuery);
    } catch (error) {
      console.log('Error fetching searched movies:', error);
      movies = [];
    }
  }

  return (
    <>
      <SearchResults movies={movies} query={initialQuery} />
    </>
  );
};

export default SearchPage;
