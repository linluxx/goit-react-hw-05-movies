import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getMovies from 'API/getMovies';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies('trending/movie/week').then(response => {
      setFilms(response.data.results);
    });
  }, []);
  return (
    <main>
      <MovieList movies={films} location={location} />;
    </main>
  );
};

export default Home;
