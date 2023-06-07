import "./App.css";
import "./components/header/header.css";
import { Content, Word, Header, Search } from "./components/index";
import { Container } from "@chakra-ui/react";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="bg">
        <Container>
          <Header />
          <Search />
          <Word />
          <Content />
        </Container>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
