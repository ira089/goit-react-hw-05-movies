import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { castApi } from 'components/api/api';

const CastPage = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesCast = async () => {
      try {
        setLoading(true);
        const dataCast = await castApi(id);
        // console.log(dataCast.cast);
        setMovieCast(dataCast.cast?.length ? dataCast.cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesCast(id);
  }, [id]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const elements = movieCast.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : defaultImg
        }
        alt="foto"
        width={150}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <ul>{elements}</ul>
    </>
  );
};

export default CastPage;
