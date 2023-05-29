import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  border-radius: 50px;
  width: 22rem;
  color: #111111;
  font-size: 1rem;
  margin: 0 1rem;
  text-align: center;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
  }

  &:focus-visible {
    outline: 2px solid #f84e2b;
  }
`;

export default Input;
