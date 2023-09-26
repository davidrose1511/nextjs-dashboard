import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    
    /* Nav Menu */
    <div className={styles.header}>
      <ul className={styles.menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

       {/* login/ signup buttons  */}
      <div className={styles.authButtons}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>

    </div>
  );
};

export default Header;
