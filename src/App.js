import HeaderComponent from "./components/Header/index";
import styled from "styled-components";
import SearchInput from "./components/Search-input";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <HeaderComponent />
      <SearchInput />
    </AppContainer>
  );
}

export default App;
