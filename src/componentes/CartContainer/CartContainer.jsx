import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartContainer.css";
import Button from 'react-bootstrap/Button';
import { MdOutlineClose } from "react-icons/md";

export const CartContainer = ()=>{
    const value = useContext(CartContext)
    const {productosCarrito, calcularPrecioTotal, eliminarProducto} = value
    console.log(productosCarrito)
    return(
        <div className="cartBody">
            <h1 className="h4 m-3">Carrito de compras</h1>
            <div className="carrito">
                <div className="cardContainer">
                    {
                        productosCarrito.map((producto)=>(
                            <div className="cardProductoCarrito">
                                <div className="titleProduct">
                                    <p className="h5">{producto.name}</p>
                                    <Button variant="secondary" size="sm" onClick={()=>eliminarProducto(producto.id)}>
                                        <MdOutlineClose></MdOutlineClose>
                                    </Button>
                                </div>
                                <div className="flexInfo">
                                    <div>
                                        <img className="Img" src={producto.imagen} alt="foto del producto"/>
                                    </div>
                                    <div className="infoProduct">
                                        <p>$ {producto.price}</p>
                                        <p>Cantidad: {producto.cantidad}</p>
                                        <p>Precio por cantidad {producto.precioPorCantidad}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="precioTotal">
                        <p className="h4">Precio total: {calcularPrecioTotal()}</p>
                        <Button variant="dark">Terminar compra</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
