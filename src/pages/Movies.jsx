import getMovies from 'API/getMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchResult = searchParams.get('search');

  useEffect(() => {
    if (searchResult) {
      getMovies('/search/movie', `query=${searchResult}`).then(res =>
        setMovies(res.data.results)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMoviesSearch = evt => {
    evt.preventDefault();
    const search = evt.currentTarget.elements.query.value;
    setSearchParams({ search: search });
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
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
