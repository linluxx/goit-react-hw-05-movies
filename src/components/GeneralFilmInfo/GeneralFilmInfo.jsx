import { BsTrophy } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import PropTypes from 'prop-types';

import {
  Container,
  MovieName,
  Section,
  Img,
  Text,
  Title,
  Wrap,
} from './GeneralFilmInfo.styled';

const GeneralFilmInfo = ({ filmDetails }) => {
  const {
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
    title,
    genres,
  } = filmDetails;
  const date = new Date(release_date).getFullYear();
  return (
    <Section>
      <Img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
      <Container>
        <MovieName>
          {original_title} ({date})
        </MovieName>
        <Text>
          <Wrap>
            <BsTrophy size={18} />
          </Wrap>
          User score: {Math.round(vote_average * 10)}%
        </Text>
        <Title>Genres</Title>
        {genres
          ? genres.map(genre => {
              return (
                <Text key={genre.id}>
                  <Wrap>
                    <BiMoviePlay size={20} />
                  </Wrap>
                  {genre.name}
                </Text>
              );
            })
          : 'Unknown'}
        <Title>Overview</Title>
        <Text>{overview}</Text>
      </Container>
    </Section>
  );
};

GeneralFilmInfo.propTypes = {
  filmDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
  }),
};

export default GeneralFilmInfo;
