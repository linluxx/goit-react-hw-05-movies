import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import getMovies from 'API/getMovies';
import InfoSection from 'components/InfoSection/InfoSection';
import AddInfoSection from 'components/AddInfoSection/AddInfoSection';

import { BackLink, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovies(`movie/${movieId}`).then(res => setFilmDetails(res.data));
  }, [movieId]);

  const backHref = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backHref}>Return back</BackLink>
      <InfoSection filmDetails={filmDetails} />
      <AddInfoSection location={location} />
    </Container>
  );
};

export default MovieDetails;
