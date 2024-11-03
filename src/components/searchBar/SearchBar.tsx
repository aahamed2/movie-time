'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

export type TSearchBarProps = {
  initialQuery?: string;
};

const SearchBar: React.FC<TSearchBarProps> = ({ initialQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Clear the search query if the user is not on the search page
    if (pathname !== '/search') {
      setSearchQuery('');
    }
  }, [pathname]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
