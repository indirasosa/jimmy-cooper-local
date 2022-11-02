import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=> {

    const [productosCarrito, setProductosCarrito] = useState([]);

    const productosCarritoCopy = [...productosCarrito]
    //función para ver si ya hay un producto igual en el carrito
    const isInCart = (id)=>{
        const productExist = productosCarrito.some((element)=> element.id === id);
        return productExist;
    }

    //función para agregar un producto al carrito
    const addProduct = (detalle, cantidad)=>{
        if (isInCart(detalle.id)) {
            const indexProduct = productosCarritoCopy.findIndex((elemento)=> elemento.id === detalle.id);
            productosCarritoCopy[indexProduct].cantidad += cantidad;
            setProductosCarrito(productosCarritoCopy);
        } else {
            const nuevoProducto = {
                ...detalle,
                cantidad: cantidad
            }
            productosCarritoCopy.push(nuevoProducto)
            setProductosCarrito(productosCarritoCopy)
        }
    }
    return(
        <CartContext.Provider value={{productosCarrito, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}