import React from 'react';
import SearchResults from './SearchResults';
import { fetchSearchedMovies } from '../../utils/fetch';

type TSearchParams = Promise<{
  query?: string;
}>;

const SearchPage = async (props: { searchParams: TSearchParams }) => {
  const searchParams = await props.searchParams;
  const initialQuery = (await searchParams?.query) || '';
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
