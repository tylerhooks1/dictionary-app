import "./App.css";
import "./components/header/header.css";
import { Content, Word, Header, Search } from "./components/index";
import { Container } from "@chakra-ui/react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { FontContextProvider } from "./contexts/FontContext";

function App() {
  return (
    <ThemeContextProvider>
      <FontContextProvider>
        <div className="dictionary__app">
          <Container>
            <Header />
            <Search />
            <Word />
            <Content />
          </Container>
        </div>
      </FontContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
