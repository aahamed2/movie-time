import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TMovie } from '../types/movieTypes';

export type TFavoriteStore = {
  favorites: TMovie[];
  toggleFavorite: (movie: TMovie) => void;
};
const useFavoritesStore = create<TFavoriteStore>()(
  persist(
    (set) => ({
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
    }),
    { name: 'favorites-storage' }
  )
);

export default useFavoritesStore;
