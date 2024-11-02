import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MdOutlineMovieFilter } from 'react-icons/md';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      {/* left block */}
      <div className={styles.headerlogo}>
        <MdOutlineMovieFilter
          style={{ fontSize: '30px', color: '#fbbf24' }}
          className={styles.headerIcon}
        />
        <div className={styles.headerTexts}>My Movies</div>
      </div>
      {/* right block */}
      <div className={styles.headerItems}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
      </div>
    </header>
  );
}
