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
          // check if the toggled movie is already a favorite.
          const isFavorite = state.favorites.some((fav) => fav.id === movie.id);
          return {
            // filtering out the movie if it's already a favorite or adding it if it's not.
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
