import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
  Title,
  AddInfoLink,
  Section,
  List,
  Item,
} from './AddInfoSection.styled';

const AddInfoSection = ({ location }) => {
  return (
    <Section>
      <Title>Additional information</Title>
      <List>
        <Item>
          <AddInfoLink to="cast" state={{ from: location.state.from }}>
            Cast
          </AddInfoLink>
        </Item>
        <Item>
          <AddInfoLink to="reviews" state={{ from: location.state.from }}>
            Reviews
          </AddInfoLink>
        </Item>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default AddInfoSection;
