import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = ()=>{
    const value = useContext(CartContext)
    const {productosCarrito, calcularPrecioTotal, eliminarProducto} = value
    console.log(productosCarrito)
    return(
        <div>
            <h1>Carrito</h1>
            <div>
                {
                    productosCarrito.map((producto)=>(
                        <div>
                            <p>{producto.name}</p>
                            <p>{producto.price}</p>
                            <p>{producto.cantidad}</p>
                            <p>Precio por cantidad {producto.precioPorCantidad}</p>
                            <button onClick={eliminarProducto()}>eliminar</button>
                        </div>
                    ))
                }
            </div>
            <div>
                <p>Precio total: {calcularPrecioTotal()}</p>
            </div>
        </div>
    )
}