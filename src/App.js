import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./componentes/NavBar";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <NavBar/>
        </Container>

      </header>
    </div>
  );
}

export default App;
