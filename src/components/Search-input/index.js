import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";

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
  const [typedText, settypedText] = useState("");

  return (
    <SearchContainer>
      <h2>Já sabe por onde começar?</h2>
      <TextSizeMedium>Encontre seu livro em nossa loja.</TextSizeMedium>
      <Input
        placeholder="Escreva o nome do livro"
        onBlur={userSearch => settypedText(userSearch.target.value)}
      />
      <p>{typedText}</p>
    </SearchContainer>
  );
}

export default SearchInput;
