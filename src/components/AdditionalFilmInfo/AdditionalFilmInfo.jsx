import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Comment } from 'react-loader-spinner';

import {
  Title,
  AddInfoLink,
  Section,
  List,
  Item,
  LoadingWrap,
} from './AdditionalFilmInfo.styled';

const AdditionalFilmInfo = ({ location }) => {
  const currentlocation = location.state?.from ?? '/';
  return (
    <Section>
      <Title>Additional information</Title>
      <List>
        <Item>
          <AddInfoLink to="cast" state={{ from: currentlocation }}>
            Cast
          </AddInfoLink>
        </Item>
        <Item>
          <AddInfoLink to="reviews" state={{ from: currentlocation }}>
            Reviews
          </AddInfoLink>
        </Item>
      </List>
      <Suspense
        fallback={
          <LoadingWrap>
            <Comment backgroundColor="#F34A4A" height="150" width="150" />
          </LoadingWrap>
        }
      >
        <Outlet />
      </Suspense>
    </Section>
  );
};

AdditionalFilmInfo.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

export default AdditionalFilmInfo;
