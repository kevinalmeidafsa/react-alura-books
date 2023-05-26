import "../Header/style.css";

import HeaderIcon from "../HeaderIcons/index";
import HeaderMenu from "../HeaderMenu/index";
import Logo from "../logo/index";

function HeaderComponent() {
  return (
    <>
      <header className="App-header">
        <Logo />
        <HeaderMenu />
        <HeaderIcon />
      </header>
    </>
  );
}
export default HeaderComponent;
