'use client';

import { useEffect, useState } from 'react';
import useFavoritesStore from '../../stores/favoritesStore';
import MoviesList from '../../components/movieList/MovieList';
import { TMovie } from '../../types/movieTypes';
import styles from './Favorites.module.scss';

export default function Favorites() {
  const [loading, setLoading] = useState<boolean>(true);
  const favorites = useFavoritesStore((state) => state.favorites) as TMovie[];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <h2>Loading favorites...</h2>;
  }

  return (
    <div className={styles.favorites}>
      <h1>My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <MoviesList movies={favorites} />
      ) : (
        <div className={styles.noFavorites}>
          No favorite movies found, Browse the site to pick your favorites!
        </div>
      )}
    </div>
  );
}
