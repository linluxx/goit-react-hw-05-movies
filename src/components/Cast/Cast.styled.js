import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const Item = styled.li`
  width: 170px;
  display: flex;
  flex-direction: column;
  font-family: ${p => p.theme.font.main};
  /* align-items: center; */
`;
const Img = styled.img`
  width: 170px;
  height: 250px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-bottom: 5px;
`;
const Title = styled.p`
  font-weight: 600;
`;
const Text = styled.span`
  font-weight: 400;
`;

export { List, Img, Item, Text, Title };
