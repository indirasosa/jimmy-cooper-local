import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = ()=>{
    const value = useContext(CartContext)
    const {productosCarrito} = value
    console.log(productosCarrito)
    return(
        <p>Carrito</p>
    )
}