import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
`;
const Title = styled.h1`
  font-family: ${p => p.theme.font.marker};
  font-size: 200px;
  color: ${p => p.theme.color.accent};
`;
const Text = styled.p`
  font-family: ${p => p.theme.font.main};
  color: ${p => p.theme.color.secondText};
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 30px;
`;
const BackHref = styled(NavLink)`
  display: block;
  width: 100px;
  color: ${p => p.theme.color.secondText};
  background-color: ${p => p.theme.color.text};
  text-decoration: none;
  font-family: ${p => p.theme.font.marker};
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
  transition: ${p => p.theme.transition};
  :hover {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.text};
  }
`;

export { Container, Text, Title, BackHref };
