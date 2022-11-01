import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./componentes/NabBarComponente/NavBar";
import  {ItemListContainer}  from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Contacto} from "./componentes/Contacto/Contacto";
import {ItemDetailContainer} from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./componentes/CartContainer/CartContainer";
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/category/productos" element={<ItemListContainer/>}></Route>
          <Route path="/category/:categoryName" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<CartContainer/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
