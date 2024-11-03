import styles from './MovieList.module.scss';
import { TMovie, TMoviesListProps } from '../../types/movieTypes';
import MovieCard from '../../components/movieCard/MovieCard';

const MoviesList: React.FC<TMoviesListProps> = ({ movies }) => {
  return (
    <div className={styles.movies}>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
