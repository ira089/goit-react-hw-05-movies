import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tredingMoviesApi from 'components/api/api';
import styles from '../Header/header.module.css';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const dataMovies = await tredingMoviesApi();
        const arrMovies = dataMovies.results;
        // console.log(arrMovies)
        setTrendingMovies(arrMovies?.length ? arrMovies : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const elements = trendingMovies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}

      {Boolean(elements.length) && (
        <div>
          <h2>Trending today</h2>
          <ul>{elements}</ul>
        </div>
      )}
    </>
  );
};
export default TrendingMovies;
