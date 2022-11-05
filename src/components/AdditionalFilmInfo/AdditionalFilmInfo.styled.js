import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const AddInfoLink = styled(NavLink)`
  color: ${p => p.theme.color.secondBg};
  font-family: ${p => p.theme.font.main};
  font-size: 25px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: ${p => p.theme.transition};
  display: block;
  margin-bottom: 20px;

  :hover {
    color: ${p => p.theme.color.text};
    background-color: ${p => p.theme.color.accent};
  }

  &.active {
    color: ${p => p.theme.color.text};
    background-color: ${p => p.theme.color.accent};
  }
`;
const Section = styled.section`
  padding: 15px 0 15px 0;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const Item = styled.li``;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-family: ${p => p.theme.font.marker};
  font-size: 30px;
  color: ${p => p.theme.color.secondBg};
`;
const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Title, AddInfoLink, Section, List, Item, LoadingWrap };
