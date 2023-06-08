import "./App.css";
import "./components/header/header.css";
import { Content, Header, Search } from "./components/index";
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
            <Content />
          </Container>
        </div>
      </FontContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
