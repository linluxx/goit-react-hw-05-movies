import {
  Container,
  MovieName,
  Section,
  Img,
  Text,
  Title,
} from './InfoSection.styled';

const InfoSection = ({ filmDetails }) => {
  const {
    poster_path,
    title,
    original_title,
    release_date,
    overview,
    vote_average,
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
        <Text>User score: {Math.round(vote_average * 10)}%</Text>
        <Title>Genres</Title>
        {genres
          ? genres.map(genre => {
              return <Text key={genre.id}>{genre.name}</Text>;
            })
          : 'Unknown'}
        <Title>Overview</Title>
        <Text>{overview}</Text>
      </Container>
    </Section>
  );
};
export default InfoSection;
