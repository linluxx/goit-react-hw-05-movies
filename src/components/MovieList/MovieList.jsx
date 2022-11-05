import { List, Image, Item, StyledLink } from './MovieList.styled';

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ title, id, poster_path }) => {
        return (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title}
              />
              {title}
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
};

export default MovieList;
