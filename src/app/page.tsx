import { fetchMovies } from '../utils/fetch';
import MoviesList from './MovieList';

export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
