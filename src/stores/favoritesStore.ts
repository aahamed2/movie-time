import { create } from 'zustand';
import { TMovie } from '../types/movieTypes';

export type TFavoriteStore = {
  favorites: TMovie[];
  toggleFavorite: (movie: TMovie) => void;
};

const useFavoritesStore = create<TFavoriteStore>((set) => ({
  favorites: [],
  toggleFavorite: (movie: TMovie) => {
    set((state) => {
      const isFavorite = state.favorites.some((fav) => fav.id === movie.id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.id !== movie.id)
          : [...state.favorites, movie],
      };
    });
  },
}));

export default useFavoritesStore;
