import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { TbArrowBackUp } from 'react-icons/tb';

import getMovies from 'api/getMovies';
import GeneralFilmInfo from 'components/GeneralFilmInfo/GeneralFilmInfo';
import AdditionalFilmInfo from 'components/AdditionalFilmInfo/AdditionalFilmInfo';

import { BackLink, Container, Wrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovies(`movie/${movieId}`).then(res => setFilmDetails(res.data));
  }, [movieId]);
  const backHref = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backHref}>
        <Wrap>
          <TbArrowBackUp size={20} />
        </Wrap>
        Return back
      </BackLink>
      <GeneralFilmInfo filmDetails={filmDetails} />
      <AdditionalFilmInfo location={location} />
    </Container>
  );
};

export default MovieDetails;
