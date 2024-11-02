import SearchBar from '@/components/searchBar/SearchBar';
import { fetchMovies } from '../utils/fetch';
import MoviesList from '../components/movieList/MovieList';
import styles from './page.module.scss';
export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageSnippet}>
        <h1>Welcome to the My Movies</h1>
        <p> Browse through movies all around the world </p>
      </div>
      <SearchBar />
      <MoviesList movies={movies} />
    </div>
  );
}
