import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
const Item = styled.li``;
const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-family: ${p => p.theme.font.main};
  font-weight: 600;
  color: ${p => p.theme.color.secondText};
  transition: ${p => p.theme.transition};

  :hover {
    scale: 1.05;
    color: ${p => p.theme.color.accent};
  }
`;
const Image = styled.img`
  display: block;
  height: 300px;
  width: 200px;
  margin-bottom: 5px;
`;

export { List, Image, Item, StyledLink };
