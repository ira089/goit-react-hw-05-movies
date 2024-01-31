import React from 'react';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { moviesDetailsApi } from 'components/api/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDet, setMovieDet] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesDet = async () => {
      try {
        setLoading(true);
        const dataMovies = await moviesDetailsApi(id);
        // console.log(dataMovies);
        setMovieDet(dataMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesDet(id);
  }, [id]);

  const locationSearch = location.state?.from?.search;
  // console.log(locationSearch);

  const from = location.state?.from || '/';
  // console.log(from);

  const goBack = () => {
    locationSearch ? navigate(`/movies${locationSearch}`) : navigate('/');
  };

  const { title, poster_path, vote_average, overview, genres, release_date } =
    movieDet;

  const year = release_date?.substring(0, 4);
  const genresArr = genres?.map(item => item.name);
  const genresString = genresArr?.join(' ');
  const userScore = Math.round(vote_average * 10);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <button className={styles.btn} onClick={goBack} type="button">
        Go back
      </button>
      <div className={styles.wrap}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt="poster"
          width={250}
        />
        <div className={styles.wrapText}>
          <h2>
            {title} ({year})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
      </div>

      <div className={styles.wrapInfo}>
        <h5>Additional information</h5>
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
