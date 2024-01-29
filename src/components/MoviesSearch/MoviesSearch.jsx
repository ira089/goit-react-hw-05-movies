import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormSearchMovies from '../FormSearchMovies/FormSearchMovies';
import ListMovies from 'components/ListMovies/ListMovies';
import styles from '../Header/header.module.css';
import { searchMoviesApi } from '../api/api';

const MoviesSearch = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchGet = searchParams.get('search');

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);
        const dataSearch = await searchMoviesApi(searchGet);
        const arrMovies = dataSearch.results;
        // console.log(arrMovies);
        setSearchMovies(arrMovies?.length ? arrMovies : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchGet) {
      fetchSearch();
    }
  }, [searchGet]);

  const handleSearch = search => {
    setSearchParams({ search: search });
    setSearchMovies([]);
  };
  const isPosts = Boolean(searchMovies.length);
  return (
    <>
      <FormSearchMovies onSubmit={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isPosts && <ListMovies items={searchMovies} />}
    </>
  );
};

export default MoviesSearch;
