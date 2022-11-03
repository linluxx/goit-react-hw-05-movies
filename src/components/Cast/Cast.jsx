import getMovies from 'API/getMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`/movie/${movieId}/credits`).then(res => {
      setActors(res.data.cast);
    });
  }, [movieId]);

  return (
    <ul>
      {actors &&
        actors.map(({ profile_path, name, character, id }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
