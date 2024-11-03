'use client';

import { useState, useEffect } from 'react';
import MoviesList from '../../components/movieList/MovieList';
import { TMovie } from '../../types/movieTypes';
import { sortMovies } from '../../utils/movie';
import styles from './SearchResults.module.scss';

export type TSearchResultsProps = {
  movies: TMovie[];
  query: string;
};

const SearchResults: React.FC<TSearchResultsProps> = ({ movies, query }) => {
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
    <div className={styles.searchResults}>
      <div className={styles.header}>
        <h3 className={styles.title}>Search Results</h3>
        <div className={styles.sortContainer}>
          <label htmlFor="sort" className={styles.sortLabel}>
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className={styles.sortDropdown}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      {query ? (
        sortedMovies.length > 0 ? (
          <MoviesList movies={sortedMovies} />
        ) : (
          <p className={styles.noResults}>{`No movies found for - ${query}`}</p>
        )
      ) : (
        <p className={styles.noResults}>Enter a search term to find movies.</p>
      )}
    </div>
  );
};

export default SearchResults;
