import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
`;
const LogoSymbol = styled.img`
`;

const TextLogo = styled.h3`
  line-height: normal;
  margin: 0;
  margin-block: 0;
`;
function Logo() {
  return (
    <LogoContainer>
      <LogoSymbol src={logo} alt="Logo AluraBooks" />
      <TextLogo>
        <strong>Alura</strong>Books
      </TextLogo>
    </LogoContainer>
  );
}

export default Logo;
