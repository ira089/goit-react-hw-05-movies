import React from 'react'
import Header from 'components/Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'

export const Layout = () => {
  return (
<div className={styles.container}>
    <Header/>
    <Outlet/>
</div>
    
    
  )
}
