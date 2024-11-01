'use client';

import useFavoritesStore from '../../stores/favoritesStore';
import MoviesList from '../MovieList'; // Importing MoviesList
import styles from './Favorites.module.scss';

export default function Favorites() {
  const { favorites } = useFavoritesStore();

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
