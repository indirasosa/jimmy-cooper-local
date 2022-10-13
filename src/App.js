import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./componentes/NabBarComponente/NavBar";
import  {ItemListContainer}  from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Contacto} from "./componentes/Contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/category"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
