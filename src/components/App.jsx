import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';
import HomePage from 'Pages/Home/HomePage';
import { Layout } from '../Pages/Layout/Layout';
// import MuviesPage from 'Pages/Muvies/MuviesPage';
// import MovieDetails from './TrendingMovies/MovieDetails';
// import CastPage from 'Pages/Cast/CastPage';
// import ReviewsPage from 'Pages/Reviews/ReviewsPage';

const MovieDetails = lazy(() => import('./TrendingMovies/MovieDetails'));
const CastPage = lazy(() => import('Pages/Cast/CastPage'));
const ReviewsPage = lazy(() => import('Pages/Reviews/ReviewsPage'));
const MuviesPage = lazy(() => import('Pages/Muvies/MuviesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route
          path="muvies"
          element={
            <Suspense>
              <MuviesPage />
            </Suspense>
          }
        />
        <Route path="/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
