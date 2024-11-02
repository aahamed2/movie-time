import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/favorites" className={styles.link}>
          Favorites
        </Link>
        {/* <Link href="/search" className={styles.link}>
          Search me
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;
