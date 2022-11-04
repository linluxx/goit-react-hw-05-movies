import getMovies from 'API/getMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovies(`movie/${movieId}`).then(res => setFilmDetails(res.data));
  }, [movieId]);

  const { poster_path, title, original_title, release_date, overview, genres } =
    filmDetails;
  const date = new Date(release_date).getFullYear();
  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>Return back</Link>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={title}
        />
        <h1>
          {original_title} ({date})
        </h1>
        <p>User score: 100%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres
          ? genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })
          : 'Unknown'}
      </section>
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetails;
