import SearchBar from '../../components/searchBar/SearchBar';
import SearchResults from './SearchResults';
import { fetchSearchedMovies } from '../../utils/fetch';
// import styles from './SearchPage.module.scss';

export default async function SearchPage({ searchParams }) {
  const initialQuery = (await searchParams)?.query || '';
  let movies = [];

  if (initialQuery) {
    try {
      //Fetch movies using the search query
      movies = await fetchSearchedMovies(initialQuery);
    } catch (error) {
      console.log('Error fetching searched movies:', error);
      movies = [];
    }
  }

  return (
    <>
      <SearchResults movies={movies} query={initialQuery} />
    </>
  );
}
