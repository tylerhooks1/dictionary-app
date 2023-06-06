import "./App.css";
import { Content, Word, Header, Search } from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Word />
      <Content />
    </div>
  );
}

export default App;
