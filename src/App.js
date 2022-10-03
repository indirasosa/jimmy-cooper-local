import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./componentes/NabBarComponente/NavBar";
import { ItemListContainer } from './componentes/ItemListContainer/ItamListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
