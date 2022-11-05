import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, List, Item, StyledLink } from './Layoutstyled';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <List>
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="movies">Movies</StyledLink>
            </Item>
          </List>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
