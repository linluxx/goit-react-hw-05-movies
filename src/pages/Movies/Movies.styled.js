import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  width: 350px;
  border-radius: 4px 0 0 4px;
  outline: none;
  border-color: transparent;
  padding-left: 10px;
  font-family: ${p => p.theme.font.main};
`;
const SearchBtn = styled.button`
  height: 36px;
  width: 40px;
  padding: 0;
  border-radius: 0 4px 4px 0;
  border-color: transparent;
  display: block;
  background-color: ${p => p.theme.color.text};
  color: ${p => p.theme.color.secondText};
  size: 20;
  transition: ${p => p.theme.transition};
  &:hover {
    color: ${p => p.theme.color.accent};
  }
`;

export { SearchBtn, SearchForm, Input };
