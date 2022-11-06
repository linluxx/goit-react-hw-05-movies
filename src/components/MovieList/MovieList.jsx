import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
      poster_path: PropTypes.string,
    })
  ),
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
};
