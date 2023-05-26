import "./App.css";
import HeaderIcon from "./components/HeaderIcons/HeaderIcon";
import HeaderMenu from "./components/header-menu/header";
import Logo from "./components/logo/logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <HeaderMenu></HeaderMenu>
        <HeaderIcon></HeaderIcon>
      </header>
    </div>
  );
}

export default App;
