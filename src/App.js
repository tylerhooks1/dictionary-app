import "./App.css";
import { Content, Word, Header, Search } from "./components/index";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Search />
        <Word />
        <Content />
      </Container>
    </div>
  );
}

export default App;
