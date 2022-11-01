import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=> {

    const [productosCarrito, setProductosCarrito] = useState([])

    const addProduct = (cantidad)=>{
        const nuevoProducto = {

            cantidad: cantidad
        }
        const productosCarritoCopy = [...productosCarrito]
        productosCarritoCopy.push(nuevoProducto)
        setProductosCarrito(productosCarritoCopy)
    }
    return(
        <CartContext.Provider value={{productosCarrito, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}