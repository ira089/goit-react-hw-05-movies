import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ListMovies = ({ items }) => {
  const location = useLocation();
  // console.log(location);

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ListMovies;
