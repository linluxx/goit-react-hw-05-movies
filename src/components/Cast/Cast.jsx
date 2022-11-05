import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getMovies from 'API/getMovies';

import { List, Img, Item, Text, Title } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`/movie/${movieId}/credits`).then(res => {
      setActors(res.data.cast);
    });
  }, [movieId]);

  return (
    <List>
      {actors &&
        actors.map(({ profile_path, name, character, id }) => {
          return (
            <Item key={id}>
              <Img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <Title>
                Name: <Text>{name}</Text>
              </Title>
              <Title>
                Character: <Text>{character}</Text>
              </Title>
            </Item>
          );
        })}
    </List>
  );
};

export default Cast;
