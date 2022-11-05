import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
