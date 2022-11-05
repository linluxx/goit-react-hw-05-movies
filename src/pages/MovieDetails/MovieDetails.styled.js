import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.main`
  padding: 20px;
`;

const BackLink = styled(NavLink)`
  display: block;
  width: 100px;
  color: ${p => p.theme.color.secondText};
  background-color: ${p => p.theme.color.text};
  text-decoration: none;
  font-family: ${p => p.theme.font.marker};
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
  transition: ${p => p.theme.transition};
  :hover {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.text};
  }
`;

export { BackLink, Container };
