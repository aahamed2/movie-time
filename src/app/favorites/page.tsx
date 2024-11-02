'use client';

import { useEffect, useState } from 'react';
import useFavoritesStore from '../../stores/favoritesStore';
import MoviesList from '../../components/movieList/MovieList';
import styles from './Favorites.module.scss';

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const favorites = useFavoritesStore((state) => state.favorites);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <h2>Loading faves...</h2>;
  }

  if (favorites.length === 0) {
    return <h2>No favorite movies found!</h2>;
  }

  return (
    <div className={styles.favorites}>
      <h1>My Favorite Movies</h1>
      <MoviesList movies={favorites} />
    </div>
  );
}
