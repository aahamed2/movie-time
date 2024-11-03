import { fetchMovies } from '../utils/fetch';
import MoviesList from '../components/movieList/MovieList';
import styles from './page.module.scss';
export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageSnippet}>
        <div className={styles.textOverlay}>
          <h1>Welcome to My Movies</h1>
          <p>"Browse through the world of movies! </p>
        </div>
      </div>
      <MoviesList movies={movies} />
    </div>
  );
}
