import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getMovies from 'API/getMovies';
import { useState } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies('trending/movie/week').then(response =>
      setFilms(response.data.results)
    );
  }, []);
  return (
    <>
      {/* <Link to="/movies/:movieId" state={{ from: location }} /> */}
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                <p>{film.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
