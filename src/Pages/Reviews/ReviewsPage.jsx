import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { reviewApi } from 'components/api/api';

const ReviewsPage = () => {
  const [movieReview, setMovieReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesReview = async () => {
      try {
        setLoading(true);
        const dataReview = await reviewApi(id);
        console.log(dataReview);
        setMovieReview(dataReview);
        // setMovieCast(dataCast.cast?.length ? dataCast.cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesReview(id);
  }, [id]);
  console.log(movieReview);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <p>125</p>
      {/* <ul>{elements}</ul> */}
    </>
  );
};

export default ReviewsPage;
