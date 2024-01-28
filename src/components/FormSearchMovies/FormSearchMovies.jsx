import React from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './FormSearchMovies.module.css';

const SearchMovies = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(search);
  };

  const searchId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label htmlFor={searchId}></label>
        <input
          id={searchId}
          ref={inputRef}
          value={search}
          onChange={handleChange}
          required
          type="text"
          name="search"
          placeholder="Enter search phrase"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovies;
