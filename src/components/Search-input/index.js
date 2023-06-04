import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import books from "./dataSearch";

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
  const [searchedBooks, setsearchedBooks] = useState([]);
  return (
    <SearchContainer>
      <h2>Já sabe por onde começar?</h2>
      <TextSizeMedium>Encontre seu livro em nossa loja.</TextSizeMedium>
      <Input
        placeholder="Escreva o nome do livro"
        onBlur={(userSearch) => {
          const typedText = userSearch.target.value;
          const searchResult = books.filter((book) =>
            book.name.includes(typedText)
          );
          setsearchedBooks(searchResult);
        }}
      />
      {searchedBooks.map((books) => (
        <div>
          <p>{books.name}</p>
          <img src={books.src} alt={books.name} />
        </div>
      ))}
    </SearchContainer>
  );
}

export default SearchInput;
