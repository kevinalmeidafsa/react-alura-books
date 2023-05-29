import styled from "styled-components";

const menuLinksText = ["Categorias", "Minha Estante", "Favoritos"];

const ButtonLinkWrapper = styled.ul`
  display: flex;
  gap: 1.5rem;
`;
const ButtonLink = styled.li`
  padding: 0 1rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    border-bottom: 2px solid #f84e2b;
  }
`;

const FontLogo = styled.p`
  font-family: "Titillium Web", sans-serif;
  color: black;
  text-align: center;
  font-weight: 400;
  font-size: 1.125rem;
  margin: 0;
  margin-block: 0;

  &:hover {
    color: #f84e2b;
  }
`;

function HeaderMenu() {
  return (
    <>
      <ButtonLinkWrapper>
        {menuLinksText.map((textmenu) => (
          <ButtonLink>
            <FontLogo>{textmenu}</FontLogo>
          </ButtonLink>
        ))}
      </ButtonLinkWrapper>
    </>
  );
}

export default HeaderMenu;
