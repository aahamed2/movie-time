'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './SearchPage.module.scss';
import MoviesList from '../MovieList';
import { fetchSearchedMovies } from '../../utils/fetch';
import useDebounce from '../../utils/useDebounce';
/* Types */
import { TMovie } from '../../types/movieTypes';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('latest');
  const router = useRouter();
  const searchParams = useSearchParams();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadMovies = async () => {
      if (!debouncedSearchQuery) {
        //  Empty movies when search query is empty
        setMovies([]);
        router.push('/search');
        return;
      }

      setLoading(true);
      try {
        const fetchedMovies = await fetchSearchedMovies(debouncedSearchQuery);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error fetching searched movies:', error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedSearchQuery) {
      router.push(`/search?query=${encodeURIComponent(debouncedSearchQuery)}`);
    }

    loadMovies();
  }, [debouncedSearchQuery, router]);

  /* Sorting movies func */
  const sortedMovies = () => {
    return [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      if (sortOrder === 'latest') {
        return dateB.getTime() - dateA.getTime(); // Latest to Oldest
      } else {
        return dateA.getTime() - dateB.getTime(); // Oldest to Latest
      }
    });
  };

  return (
    <div className={styles.searchPage}>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />

      {/* Sorting block */}
      <div className={styles.sortContainer}>
        <label htmlFor="sortOrder">Sort by Release Date:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="latest">Latest to Oldest</option>
          <option value="oldest">Oldest to Latest</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.movieGrid}>
          {sortedMovies().length > 0 ? (
            <MoviesList movies={sortedMovies()} />
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}
