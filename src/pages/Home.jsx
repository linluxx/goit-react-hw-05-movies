import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMovies from 'API/getMovies';
import { useState } from 'react';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getMovies('trending/movie/day').then(response =>
      setFilms(response.data.results)
    );
  }, []);
  return (
    <ul>
      {films.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <p>{film.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
