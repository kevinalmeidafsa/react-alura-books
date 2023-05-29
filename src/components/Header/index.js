import styled from "styled-components";
import HeaderIcon from "../HeaderIcons/index";
import HeaderMenu from "../HeaderMenu/index";
import Logo from "../logo/index";

const HeaderContainer = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
`;

function HeaderComponent() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderMenu />
        <HeaderIcon />
      </HeaderContainer>
    </>
  );
}
export default HeaderComponent;
