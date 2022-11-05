import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiSearch2Line } from 'react-icons/ri';

import MovieList from 'components/MovieList/MovieList';
import getMovies from 'API/getMovies';

import { SearchBtn, SearchForm, Input } from './Movies.styled';

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
    if (search.trim() === '') {
      return toast.warn('Please fill out search field', {
        autoClose: 2000,
        theme: 'dark',
      });
    }

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
    <main>
      <SearchForm onSubmit={onMoviesSearch}>
        <Input type="text" name="query" placeholder="Search movies"></Input>
        <SearchBtn type="submit">
          <RiSearch2Line />
        </SearchBtn>
      </SearchForm>
      {movies.length !== 0 && <MovieList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;
