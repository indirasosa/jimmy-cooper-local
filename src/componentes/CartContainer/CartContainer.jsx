import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import Button from 'react-bootstrap/Button';
import CloseImg from "../../img/x-lg.svg"
import { CartForm } from "../CartForm/CartForm";



export const CartContainer = ()=>{
    //enlazando el contexto
    const value = useContext(CartContext)

    const {productosCarrito, calcularPrecioTotal, eliminarProducto, clear, compraEnviada} = value

    if(productosCarrito.length >0){
        return(
            <div className="cartBody">
                <h1 className="h4 m-3">Carrito de compras</h1>
                <div className="divFlex">
                    <div>
                    <div className="cardContainer">
                        {
                            productosCarrito.map((producto)=>(
                                <div className="cardProductoCarrito">
                                    <div className="titleProduct">
                                        <p className="h5">{producto.name}</p>
                                        <Button variant="outline-dark" size="sm" onClick={()=>eliminarProducto(producto.id)}>
                                            <img src={CloseImg} alt="eliminar" />
                                        </Button>
                                    </div>
                                    <div className="flexInfo">
                                        <div>
                                            <img className="Img" src={producto.imagen} alt="foto del producto"/>
                                        </div>
                                        <div className="infoProduct">
                                            <p>$ {producto.price}</p>
                                            <p>Cantidad: {producto.cantidad}</p>
                                            <p>Precio por cantidad: ${producto.precioPorCantidad}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="precioTotal">
                            <div className="px-4">
                                <p className="h5">Precio total: {calcularPrecioTotal()}</p>
                            </div>
                        </div>
                        <div className="mb-3">
                                <Button variant="dark" onClick={clear}>Eliminar compra</Button>
                        </div>
                        </div>
                    </div>
                    <div>
                        <CartForm/>
                    </div>
                    </div>
                </div>
        )
    } else {
        return(
            <>
            {
                compraEnviada === true ? 
                <div className="carrito m-4">
                    <h4>¡Gracias por su compra!</h4>
                </div>
                : 
                <>
                <p className="h5 m-5">Aún no has elegido ningún producto</p>
                <Link to="/">
                   <Button variant="outline-dark">Ver tienda</Button>
                </Link>
                </>
            }
            </>
        )
    }
}

