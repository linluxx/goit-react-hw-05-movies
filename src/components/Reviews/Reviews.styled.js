import styled from '@emotion/styled';

const List = styled.ul`
  font-family: ${p => p.theme.font.main};
  color: ${p => p.theme.color.secondBg};
`;
const Item = styled.li`
  padding: 15px;
  border: 1.5px solid ${p => p.theme.color.secondBg};
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
const Title = styled.h3`
  margin-bottom: 5px;
`;
const Text = styled.p``;

export { List, Item, Text, Title };
