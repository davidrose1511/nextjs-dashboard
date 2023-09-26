// src/pages/DashboardPage.js

import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
    </div>
    
  );
};

export default DashboardPage;   
