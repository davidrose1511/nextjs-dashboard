import React from 'react';
import styles from './Sidebar.module.css';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>

      {/* Logo */}
      <div className={styles.logoContainer}>
      <Image src="/logo.png" width={139} height={54} alt="logo" />  
      </div>

      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search"
        />
      </div>
      
      {/* Top Section */}
      <div className={styles.topSection}>
          <ul>
        <li><a href="#"><Image src="/icons/home.png" width={20} height={20} alt="Dashboard" />Dashboard</a></li>
        <li><a href="#"><Image src="/icons/transaction.png" width={20} height={20} alt="Transactions" />Transactions</a></li>
        <li><a href="#"><Image src="/icons/payment.png" width={20} height={20} alt="Payments" />Payments</a></li>
        <li><a href="#"><Image src="/icons/subaccount.png" width={20} height={20} alt="Subaccounts" />Subaccounts</a></li>
        <li><a href="#"><Image src="/icons/save.png" width={20} height={20} alt="Save" />Save</a></li>
        <li><a href="#"><Image src="/icons/refer.png" width={20} height={20} alt="Refer" />Refer</a></li>
      </ul>
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <ul>
        <li><a href="#"><Image src="/icons/Settings.png" width={20} height={20} alt="Settings" />Settings</a></li>
        <li><a href="#"><Image src="/icons/Support.png" width={20} height={20} alt="Support" />Support</a></li>
        </ul>
      </div>
      {/* Profile Section */}
      <div className={styles.profileContainer}>  
      </div>
     
    </div>
  );
};

export default Sidebar;
