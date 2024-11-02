'use client';

import { useState, useEffect } from 'react';
import MoviesList from '../../components/movieList/MovieList';
import { TMovie } from '../../types/movieTypes';
import { sortMovies } from '../../utils/movie';

interface SearchResultsProps {
  movies: TMovie[];
  query: string;
}

export default function SearchResults({ movies, query }: SearchResultsProps) {
  const [localMovies, setLocalMovies] = useState<TMovie[]>(movies);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    setLocalMovies(movies);
  }, [movies]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedMovies = sortMovies(localMovies, sortOption);

  return (
    <div>
      <h3>Search Results</h3>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="latest">Sort by Latest</option>
        <option value="oldest">Sort by Oldest</option>
      </select>
      {query ? (
        sortedMovies.length > 0 ? (
          <MoviesList movies={sortedMovies} />
        ) : (
          <p>{`No movies found for - ${query}`}</p>
        )
      ) : (
        <p>Enter a search term to find movies.</p>
      )}
    </div>
  );
}
