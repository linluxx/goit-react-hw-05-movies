import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Comment } from 'react-loader-spinner';

import { Header, List, Item, StyledLink, LoadingWrap } from './Layout.styled';

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
      <Suspense
        fallback={
          <LoadingWrap>
            <Comment backgroundColor="#F34A4A" height="150" width="150" />
          </LoadingWrap>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
