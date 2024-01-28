import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ListMovies.module.css';

const ListMovies = ({ items }) => {
  const location = useLocation();
  // console.log(location);

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link to={`/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ListMovies;
