// src/components/MainContent.js

import React from 'react';
import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      {/* main content */}
      <div className={styles.heading}>
        <h1>Dashboard</h1>
        <button className={styles.sendButton}>Send Money</button>
      </div>
        <div className={styles.content}>
        <p>charts etc</p>
        </div>
    </div>
  );
};

export default MainContent;
