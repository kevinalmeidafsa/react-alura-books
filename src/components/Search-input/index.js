import styled from "styled-components";
import Input from "../Input";

const SearchContainer = styled.section`
  text-align: center;
  padding: 5rem 0;
  width: 100%;
`;

const TextSizeMedium = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
`;

function SearchInput() {
  return (
    <SearchContainer>
      <h2>Já sabe por onde começar?</h2>
      <TextSizeMedium>Encontre seu livro em nossa loja.</TextSizeMedium>
      <Input placeholder="Escreva o nome do livro" />
    </SearchContainer>
  );
}

export default SearchInput;
