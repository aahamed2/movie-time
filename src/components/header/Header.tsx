import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MdOutlineMovieFilter } from 'react-icons/md';
import SearchBar from '../searchBar/SearchBar';

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      {/* left block */}
      <Link href="/" className={styles.headerLogo}>
        <MdOutlineMovieFilter
          style={{ fontSize: '30px', color: '#fbbf24' }}
          className={styles.headerIcon}
        />
        <div className={styles.headerTexts}>My Movies</div>
      </Link>
      {/* Search bar */}
      <SearchBar />
      {/* right block */}
      <div className={styles.headerItems}>
        <Link href="/" className={`${styles.link} ${styles.homeLink}`}>
          Home
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
      </div>
    </header>
  );
};

export default Header;
