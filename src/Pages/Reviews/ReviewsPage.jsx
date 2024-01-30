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
        const arrReview = dataReview.results;
        // console.log(arrReview);
        setMovieReview(arrReview?.length ? arrReview : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesReview(id);
  }, [id]);

  const elements = movieReview.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));
  const isReview = Boolean(movieReview.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isReview ? (
        <ul>{elements}</ul>
      ) : (
        "We don't have any reviews for this movie."
      )}
    </>
  );
};

export default ReviewsPage;
