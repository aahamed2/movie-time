import { create } from 'zustand';

export type TSearchStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const useSearchStore = create<TSearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useSearchStore;
