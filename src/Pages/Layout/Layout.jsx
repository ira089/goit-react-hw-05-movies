import React from 'react';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
