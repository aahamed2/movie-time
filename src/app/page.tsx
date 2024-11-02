import SearchBar from '@/components/searchBar/SearchBar';
import { fetchMovies } from '../utils/fetch';
import MoviesList from '../components/movieList/MovieList';

export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <div>
      <h1>Welcome to the My Movies</h1>
      <SearchBar />
      <MoviesList movies={movies} />
    </div>
  );
}
