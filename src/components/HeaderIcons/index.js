import perfil from "../../imagens/perfil.svg";
import bag from "../../imagens/sacola.svg";
import styled from "styled-components";

const iconsMenu = [perfil, bag];
const ButtonIconWrapper = styled.ul`
  display: flex;
  gap: 2rem;
`;
const ButtonIcon = styled.li`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function HeaderIcon() {
  return (
    <>
      <ButtonIconWrapper>
        {iconsMenu.map((icons) => (
          <ButtonIcon>
            <img src={icons} alt="Carrinho e Icone de perfil"></img>
          </ButtonIcon>
        ))}
      </ButtonIconWrapper>
    </>
  );
}

export default HeaderIcon;
