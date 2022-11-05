import { BackHref, Container, Text, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Title> 404</Title>
      <Text>Oops, page you were looking for does not exist!</Text>
      <BackHref to="/">Go Home</BackHref>
    </Container>
  );
};

export default NotFound;
