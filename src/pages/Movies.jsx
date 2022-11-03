import getMovies from 'API/getMovies';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const onMoviesSearch = evt => {
    evt.preventDefault();
    const search = evt.currentTarget.elements.query.value;
    getMovies('/search/movie', `query=${search}`).then(res => {
      if (res.data.results.length === 0) {
        toast.warn('Wrong search request. Please, try again', {
          autoClose: 2000,
          theme: 'dark',
        });
      }
      return setMovies(res.data.results);
    });
  };
  return (
    <>
      <form onSubmit={onMoviesSearch}>
        <input type="text" name="query" placeholder="Search movies"></input>
        <button type="submit">Search</button>
      </form>
      {movies.length !== 0 && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
