import { TMovie } from '../types/movieTypes';

export const sortMovies = (movies: TMovie[], option: string): TMovie[] => {
  return [...movies].sort((a, b) => {
    const dateA = new Date(a.release_date).getTime();
    const dateB = new Date(b.release_date).getTime();
    return option === 'latest' ? dateB - dateA : dateA - dateB;
  });
};
