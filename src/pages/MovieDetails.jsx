import getMovies from 'API/getMovies';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`movie/${movieId}`).then(res => setFilmDetails(res.data));
  }, [movieId]);

  const { poster_path, title, original_title, release_date, overview, genres } =
    filmDetails;
  const date = new Date(release_date).getFullYear();
  return (
    <main>
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetails;
