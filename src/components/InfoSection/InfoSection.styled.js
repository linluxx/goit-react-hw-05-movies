import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  padding: 15px;

  max-width: 990px;
`;
const Img = styled.img`
  height: 500px;
  width: 400px;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 15px;
  padding-top: 0;
  font-family: ${p => p.theme.font.main};
  color: ${p => p.theme.color.secondBg};
`;
const MovieName = styled.h1`
  color: ${p => p.theme.color.accent};
  font-size: 45px;
  margin-bottom: 40px;
  font-family: ${p => p.theme.font.marker};
`;
const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 5px;
  font-family: ${p => p.theme.font.marker};
  font-size: 30px;
`;
const Text = styled.p`
  font-size: 18px;
`;

export { Container, Img, Section, MovieName, Text, Title };
