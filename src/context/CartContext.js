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

            //encontrar la posición del elemento 
            const indexProduct = productosCarritoCopy.findIndex((elemento)=> elemento.id === detalle.id);

            //cambiar sólo la cantidad de ese elemento
            productosCarritoCopy[indexProduct].cantidad += cantidad;

            //sumar los precios del mismo producto
            productosCarritoCopy[indexProduct].precioPorCantidad = productosCarritoCopy[indexProduct].cantidad * productosCarritoCopy[indexProduct].price;

            //cambiar el array de productosCarrito
            setProductosCarrito(productosCarritoCopy);

        } else {

            //crear el objeto del nuevo producto del carrito
            const nuevoProducto = {
                ...detalle,
                cantidad: cantidad,
                precioPorCantidad: cantidad*detalle.price
            }

            //agregar el objeto en el array de productosCarrito
            productosCarritoCopy.push(nuevoProducto)

            //cambiar el array de productosCarrito
            setProductosCarrito(productosCarritoCopy)
        }
    }

    //función para calcular el precio total de la compra
    const calcularPrecioTotal = ()=> {
        const precioTotal = productosCarrito.reduce((acc, curr)=> acc + curr.precioPorCantidad, 0);
        return precioTotal;
    }

    //función para eliminar un producto del carrito
    const eliminarProducto = (id)=>{
        const nuevosProductos = productosCarrito.filter((elemento)=>elemento.id !== id);
        setProductosCarrito(nuevosProductos)
    }
    return(
        <CartContext.Provider value={{productosCarrito, addProduct, calcularPrecioTotal, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}