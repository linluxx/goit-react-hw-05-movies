import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Header = styled.header`
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.75);
  background-color: ${p => p.theme.color.secondBg};
  padding: 24px;
  margin-bottom: 20px;
`;

const Navigation = styled.nav``;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const StyledLink = styled(NavLink)`
  color: ${p => p.theme.color.text};
  text-decoration: none;
  font-family: ${p => p.theme.font.marker};
  padding: 8px 16px;
  border-radius: 4px;
  transition: ${p => p.theme.transition};
  :hover {
    color: ${p => p.theme.color.accent};
  }

  &.active {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.text};
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Header, Navigation, List, Item, StyledLink, LoadingWrap };
