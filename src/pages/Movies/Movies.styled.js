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
  border-radius: 0 4px 4px 0;
  border-color: transparent;
`;

export { SearchBtn, SearchForm, Input };
